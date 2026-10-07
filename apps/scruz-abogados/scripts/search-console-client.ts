import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { createHash, randomBytes } from 'node:crypto';
import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const AUTHORIZATION_ENDPOINT = 'https://accounts.google.com/o/oauth2/v2/auth';
const TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const SEARCH_CONSOLE_API = 'https://searchconsole.googleapis.com/webmasters/v3';
const URL_INSPECTION_API = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';
// El envío de sitemaps requiere el scope de escritura (webmasters). Si solo se
// hacen consultas, se puede optar por el scope de solo lectura
// (https://www.googleapis.com/auth/webmasters.readonly) vía GOOGLE_SEARCH_CONSOLE_SCOPE.
const READ_WRITE_SCOPE = 'https://www.googleapis.com/auth/webmasters';
const DEFAULT_REDIRECT_URI = 'http://127.0.0.1:43117/oauth2callback';
const DEFAULT_PROPERTY = 'https://sergiocruzchacon.vercel.app/';
const CONFIG_HOME =
	process.env.APPDATA ?? process.env.XDG_CONFIG_HOME ?? join(homedir(), '.config');
const DEFAULT_TOKEN_FILE = join(CONFIG_HOME, 'scruz-abogados', 'search-console-token.json');

type Dimension = 'date' | 'query' | 'page' | 'country' | 'device' | 'searchAppearance';
type Command = 'auth' | 'performance' | 'inspect' | 'sitemaps';

interface OAuthConfig {
	clientId: string;
	clientSecret: string;
	redirectUri: string;
	property: string;
	tokenFile: string;
	scope: string;
}

interface StoredToken {
	refresh_token: string;
	scope?: string;
	token_type?: string;
	created_at: string;
}

interface SearchAnalyticsRow {
	keys?: string[];
	clicks?: number;
	impressions?: number;
	ctr?: number;
	position?: number;
}

interface CliOptions {
	command: Command;
	days?: number;
	dimension?: Dimension;
	urls?: string[];
	action?: 'list' | 'submit';
	feed?: string;
}

interface SearchConsoleError {
	error?: {
		code?: number;
		message?: string;
		status?: string;
	};
}

function validateHttpsUrl(value: string, label: string): URL {
	let url: URL;
	try {
		url = new URL(value);
	} catch {
		throw new Error(`${label} no es una URL válida.`);
	}
	if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
		throw new Error(`${label} debe ser HTTPS y no puede incluir credenciales, query ni fragmento.`);
	}
	return url;
}

export function normalizePropertyUrl(property: string): string {
	if (property.startsWith('sc-domain:')) {
		const domain = property.slice('sc-domain:'.length);
		if (!/^[a-z0-9.-]+$/i.test(domain) || domain.startsWith('.') || domain.endsWith('.')) {
			throw new Error('La propiedad sc-domain no contiene un dominio válido.');
		}
		return property;
	}
	const url = validateHttpsUrl(property, 'La propiedad de Search Console');
	return `${url.origin}${url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`}`;
}

export function validateInspectionUrl(property: string, inspectionUrl: string): string {
	const target = validateHttpsUrl(inspectionUrl, 'La URL a inspeccionar');
	if (property.startsWith('sc-domain:')) {
		const domain = property.slice('sc-domain:'.length).toLowerCase();
		const hostname = target.hostname.toLowerCase();
		if (hostname !== domain && !hostname.endsWith(`.${domain}`)) {
			throw new Error('La URL a inspeccionar no pertenece a la propiedad sc-domain configurada.');
		}
		return target.href;
	}
	const propertyUrl = validateHttpsUrl(property, 'La propiedad de Search Console');
	const propertyPath = propertyUrl.pathname;
	if (target.origin !== propertyUrl.origin || !target.pathname.startsWith(propertyPath)) {
		throw new Error('La URL a inspeccionar no pertenece a la propiedad configurada.');
	}
	return target.href;
}

export function buildAuthorizationUrl({
	clientId,
	redirectUri,
	state,
	codeChallenge,
	scope = READ_WRITE_SCOPE,
}: {
	clientId: string;
	redirectUri: string;
	state: string;
	codeChallenge?: string;
	scope?: string;
}): string {
	const params = new URLSearchParams({
		client_id: clientId,
		redirect_uri: redirectUri,
		response_type: 'code',
		scope,
		access_type: 'offline',
		prompt: 'consent',
		state,
		...(codeChallenge
			? { code_challenge: codeChallenge, code_challenge_method: 'S256' }
			: {}),
	});
	return `${AUTHORIZATION_ENDPOINT}?${params}`;
}

export function buildDateRange(
	days: number,
	now = new Date(),
): { startDate: string; endDate: string } {
	if (!Number.isInteger(days) || days < 1 || days > 3650) {
		throw new Error('days debe ser un entero entre 1 y 3650.');
	}
	const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
	const start = new Date(end);
	start.setUTCDate(start.getUTCDate() - days + 1);
	const format = (date: Date) => date.toISOString().slice(0, 10);
	return { startDate: format(start), endDate: format(end) };
}

export function parseCliArgs(args: string[]): CliOptions {
	const command = args[0] as Command | undefined;
	if (!command || !['auth', 'performance', 'inspect', 'sitemaps'].includes(command)) {
		throw new Error('Comando requerido: auth, performance, inspect o sitemaps.');
	}

	if (command === 'inspect') {
		const urls = args.slice(1).filter((argument) => !argument.startsWith('--'));
		if (urls.length === 0 || urls.some((url) => !/^https:\/\//i.test(url))) {
			throw new Error('inspect requiere al menos una URL HTTPS: inspect <url1> [url2] ...');
		}
		return { command, urls };
	}

	if (command === 'sitemaps') {
		const action = (args[1] ?? 'list') as 'list' | 'submit';
		if (action !== 'list' && action !== 'submit') {
			throw new Error('sitemaps admite list o submit.');
		}
		if (action === 'submit') {
			let feed: string | undefined;
			for (let index = 2; index < args.length; index += 1) {
				if (args[index] === '--feed') {
					feed = args[index + 1];
					index += 1;
				}
			}
			if (!feed || !/^https:\/\//i.test(feed)) {
				throw new Error('sitemaps submit requiere --feed <URL del sitemap>.');
			}
			return { command, action, feed };
		}
		return { command, action };
	}

	if (command !== 'performance') return { command };

	let days = 28;
	let dimension: Dimension = 'date';
	for (let index = 1; index < args.length; index += 1) {
		const argument = args[index];
		if (argument === '--days') {
			days = Number(args[index + 1]);
			index += 1;
		} else if (argument === '--dimension') {
			dimension = args[index + 1] as Dimension;
			index += 1;
		}
	}
	if (!['date', 'query', 'page', 'country', 'device', 'searchAppearance'].includes(dimension)) {
		throw new Error('Dimensión no válida. Usa date, query, page, country, device o searchAppearance.');
	}
	if (!Number.isInteger(days) || days < 1 || days > 3650) {
		throw new Error('days debe ser un entero entre 1 y 3650.');
	}
	return { command, days, dimension };
}

function loadConfig(): OAuthConfig {
	const clientId = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_ID;
	const clientSecret = process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET;
	if (!clientId || !clientSecret) {
		throw new Error(
			'Faltan GOOGLE_SEARCH_CONSOLE_CLIENT_ID y GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET. Configúralos en tu entorno local.',
		);
	}
	return {
		clientId,
		clientSecret,
		redirectUri: process.env.GOOGLE_SEARCH_CONSOLE_REDIRECT_URI ?? DEFAULT_REDIRECT_URI,
		property: normalizePropertyUrl(process.env.GOOGLE_SEARCH_CONSOLE_PROPERTY ?? DEFAULT_PROPERTY),
		tokenFile: process.env.GOOGLE_SEARCH_CONSOLE_TOKEN_FILE ?? DEFAULT_TOKEN_FILE,
		scope: process.env.GOOGLE_SEARCH_CONSOLE_SCOPE ?? READ_WRITE_SCOPE,
	};
}

async function readStoredToken(tokenFile: string): Promise<StoredToken | null> {
	try {
		const token = JSON.parse(await readFile(tokenFile, 'utf8')) as Partial<StoredToken>;
		if (!token.refresh_token || typeof token.refresh_token !== 'string') return null;
		return token as StoredToken;
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
		throw new Error(`No se pudo leer el token local: ${(error as Error).message}`, { cause: error });
	}
}

async function writeStoredToken(tokenFile: string, token: StoredToken): Promise<void> {
	await mkdir(dirname(tokenFile), { recursive: true, mode: 0o700 });
	await writeFile(tokenFile, `${JSON.stringify(token, null, 2)}\n`, { mode: 0o600 });
}

function base64Url(value: Buffer): string {
	return value.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

async function exchangeAuthorizationCode(
	config: OAuthConfig,
	code: string,
	codeVerifier: string,
): Promise<StoredToken> {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			code,
			client_id: config.clientId,
			client_secret: config.clientSecret,
			redirect_uri: config.redirectUri,
			grant_type: 'authorization_code',
			code_verifier: codeVerifier,
		}),
	});
	const body = (await response.json()) as Partial<StoredToken> & { error?: string; error_description?: string };
	if (!response.ok || !body.refresh_token) {
		throw new Error(`Google no entregó refresh_token: ${body.error_description ?? body.error ?? response.statusText}`);
	}
	return {
		refresh_token: body.refresh_token,
		scope: body.scope,
		token_type: body.token_type,
		created_at: new Date().toISOString(),
	};
}

async function authorize(config: OAuthConfig): Promise<void> {
	const callback = new URL(config.redirectUri);
	if (callback.hostname !== '127.0.0.1' || callback.protocol !== 'http:') {
		throw new Error('El callback local debe usar http://127.0.0.1 para no exponer tokens en una red pública.');
	}
	const state = base64Url(randomBytes(32));
	const codeVerifier = base64Url(randomBytes(48));
	const codeChallenge = base64Url(createHash('sha256').update(codeVerifier).digest());
	const authorizationUrl = buildAuthorizationUrl({
		clientId: config.clientId,
		redirectUri: config.redirectUri,
		state,
		codeChallenge,
		scope: config.scope,
	});

	await new Promise<void>((resolvePromise, rejectPromise) => {
		const server = createServer((request, response) => {
			void handleCallback(request, response, server, config, state, codeVerifier)
				.then((completed) => {
					if (completed) {
						clearTimeout(timeout);
						resolvePromise();
					}
				})
				.catch((error) => {
					clearTimeout(timeout);
					server.close();
					rejectPromise(error);
				});
		});
		server.once('error', (error) => {
			clearTimeout(timeout);
			rejectPromise(error);
		});
		const timeout = setTimeout(() => {
			server.close();
			rejectPromise(new Error('Tiempo de espera agotado esperando el callback de Google.'));
		}, 5 * 60 * 1000);
		server.listen(Number(callback.port), callback.hostname, () => {
			console.log(`\nAbre esta URL en tu navegador para autorizar:\n${authorizationUrl}\n`);
		});
	});
}

async function handleCallback(
	request: IncomingMessage,
	response: ServerResponse,
	server: ReturnType<typeof createServer>,
	config: OAuthConfig,
	expectedState: string,
	codeVerifier: string,
): Promise<boolean> {
	const requestUrl = new URL(request.url ?? '/', config.redirectUri);
	if (requestUrl.pathname !== new URL(config.redirectUri).pathname) {
		response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
		response.end('Ruta OAuth no encontrada.');
		return false;
	}
	const returnedState = requestUrl.searchParams.get('state');
	if (!returnedState || returnedState !== expectedState) {
		response.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
		response.end('Estado OAuth no válido. Puedes cerrar esta ventana.');
		throw new Error('OAuth state mismatch: callback rechazado.');
	}
	const error = requestUrl.searchParams.get('error');
	if (error) {
		response.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
		response.end(`Autorización cancelada (${error}). Puedes cerrar esta ventana.`);
		throw new Error(`Autorización cancelada: ${error}`);
	}
	const code = requestUrl.searchParams.get('code');
	if (!code) {
		response.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
		response.end('No se recibió código OAuth. Puedes cerrar esta ventana.');
		throw new Error('Google no devolvió un código OAuth.');
	}
	const token = await exchangeAuthorizationCode(config, code, codeVerifier);
	await writeStoredToken(config.tokenFile, token);
	response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
	response.end('<p>Autorización completada. Puedes cerrar esta ventana.</p>');
	server.close();
	console.log(`Token guardado fuera del repositorio: ${config.tokenFile}`);
	return true;
}

async function getAccessToken(config: OAuthConfig, allowReauthorize = true): Promise<string> {
	const storedToken = await readStoredToken(config.tokenFile);
	if (!storedToken) {
		if (!allowReauthorize) {
			throw new Error('No existe un token válido; ejecuta de nuevo la autorización OAuth.');
		}
		await authorize(config);
		return getAccessToken(config, false);
	}
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			client_id: config.clientId,
			client_secret: config.clientSecret,
			refresh_token: storedToken.refresh_token,
			grant_type: 'refresh_token',
		}),
	});
	const body = (await response.json()) as { access_token?: string; error?: string; error_description?: string };
	if (!response.ok || !body.access_token) {
		if (body.error === 'invalid_grant') {
			await unlink(config.tokenFile).catch((error: unknown) => {
				if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
			});
			if (!allowReauthorize) {
				throw new Error('El refresh token fue revocado; ejecuta de nuevo la autorización OAuth.');
			}
			await authorize(config);
			return getAccessToken(config, false);
		}
		throw new Error(`No se pudo renovar el access token: ${body.error_description ?? body.error ?? response.statusText}`);
	}
	return body.access_token;
}

async function googleRequest<T>(config: OAuthConfig, url: string, init: RequestInit = {}): Promise<T> {
	const accessToken = await getAccessToken(config);
	const response = await fetch(url, {
		...init,
		headers: {
			accept: 'application/json',
			...(init.body ? { 'content-type': 'application/json' } : {}),
			...init.headers,
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const body = (await response.json()) as T & SearchConsoleError;
	if (!response.ok) {
		throw new Error(
			`Search Console API ${response.status}: ${body.error?.message ?? response.statusText}`,
		);
	}
	return body as T;
}

export async function queryPerformance(
	config: OAuthConfig,
	options: { days: number; dimension: Dimension },
): Promise<{ rows?: SearchAnalyticsRow[] }> {
	const dateRange = buildDateRange(options.days);
	const endpoint = `${SEARCH_CONSOLE_API}/sites/${encodeURIComponent(config.property)}/searchAnalytics/query`;
	return googleRequest(config, endpoint, {
		method: 'POST',
		body: JSON.stringify({
			...dateRange,
			dimensions: [options.dimension],
			rowLimit: 25000,
			dataState: 'final',
		}),
	});
}

export async function inspectUrl(
	config: OAuthConfig,
	inspectionUrl: string,
): Promise<Record<string, unknown>> {
	const validatedUrl = validateInspectionUrl(config.property, inspectionUrl);
	return googleRequest(config, URL_INSPECTION_API, {
		method: 'POST',
		body: JSON.stringify({ inspectionUrl: validatedUrl, siteUrl: config.property, languageCode: 'es' }),
	});
}

const COVERAGE_LABELS: Record<string, string> = {
	SubmittedAndIndexed: 'Enviada e indexada',
	CrawledCurrentlyNotIndexed: 'Rastreada, pendiente de indexar',
	DiscoveredCrawled: 'Descubierta y rastreada',
	NotIndexed: 'No indexada',
	DuplicateWithoutUserSelectedCanonical: 'Duplicada sin canónica elegida',
	DuplicateGoogleChosenCanonical: 'Duplicada (canónica elegida por Google)',
	PageWithPattern: 'Excluida por patrón de URL',
	PageWithCanonical: 'Página con canónica distinta',
	Excluded: 'Excluida',
	Partial: 'Parcialmente indexada',
	PageNotCrawled: 'Aún no rastreada',
	PageNotFollowed: 'No rastreada (nofollow)',
};

const VERDICT_LABELS: Record<string, string> = {
	PASS: 'Indexable',
	PARTIAL: 'Parcialmente indexable',
	FAIL: 'No indexable',
	NEUTRAL: 'Sin datos suficientes',
};

const INDEXING_LABELS: Record<string, string> = {
	Indexed: 'Indexada',
	NotIndexed: 'No indexada',
	PartiallyIndexed: 'Parcialmente indexada',
	Unknown: 'Desconocido',
};

const FETCH_LABELS: Record<string, string> = {
	Successful: 'Descarga correcta',
	Soft404: 'Soft 404',
	BlockedBy4xx: 'Bloqueada (error 4xx)',
	BlockedBy5xx: 'Bloqueada (error 5xx)',
	BlockedByRobotsTxt: 'Bloqueada por robots.txt',
	Redirect: 'Redirección',
	AccessDenied: 'Acceso denegado',
	NotFound: 'No encontrada (404)',
	OtherError: 'Otro error',
};

const ROBOTS_LABELS: Record<string, string> = {
	Allowed: 'Permitido',
	Disallowed: 'Bloqueado por robots.txt',
	NotChecked: 'No verificado',
	Unknown: 'Desconocido',
};

export interface InspectionSummary {
	url: string;
	verdict: string;
	coverageState: string;
	indexingState: string;
	pageFetchState: string;
	robotsTxtState: string;
	lastCrawlTime: string;
	googleCanonical: string;
}

export function summarizeInspection(
	url: string,
	result: Record<string, unknown>,
): InspectionSummary {
	const inspection = (result.inspectionResult ?? {}) as Record<string, unknown>;
	const indexStatus = (inspection.indexStatusResult ?? {}) as Record<string, unknown>;		const label = (value: unknown, labels: Record<string, string>): string => {
			const key = typeof value === 'string' ? value : '';
			return labels[key] ?? (key || '—');
		};
	return {
		url,
		verdict: label(indexStatus.verdict, VERDICT_LABELS),
		coverageState: label(indexStatus.coverageState, COVERAGE_LABELS),
		indexingState: label(indexStatus.indexingState, INDEXING_LABELS),
		pageFetchState: label(indexStatus.pageFetchState, FETCH_LABELS),
		robotsTxtState: label(indexStatus.robotsTxtState, ROBOTS_LABELS),
		lastCrawlTime:
			typeof indexStatus.lastCrawlTime === 'string' && indexStatus.lastCrawlTime
				? indexStatus.lastCrawlTime
				: '—',
		googleCanonical:
			typeof indexStatus.googleCanonical === 'string' && indexStatus.googleCanonical
				? indexStatus.googleCanonical
				: '—',
	};
}

export async function listSitemaps(config: OAuthConfig): Promise<Record<string, unknown>> {
	const endpoint = `${SEARCH_CONSOLE_API}/sites/${encodeURIComponent(config.property)}/sitemaps`;
	return googleRequest(config, endpoint);
}

export function validateSitemapFeed(property: string, feedUrl: string): string {
	const target = validateHttpsUrl(feedUrl, 'La URL del sitemap');
	if (property.startsWith('sc-domain:')) {
		const domain = property.slice('sc-domain:'.length).toLowerCase();
		const hostname = target.hostname.toLowerCase();
		if (hostname !== domain && !hostname.endsWith(`.${domain}`)) {
			throw new Error('La URL del sitemap no pertenece a la propiedad sc-domain configurada.');
		}
		return target.href;
	}
	const propertyUrl = validateHttpsUrl(property, 'La propiedad de Search Console');
	if (target.origin !== propertyUrl.origin) {
		throw new Error('La URL del sitemap no pertenece a la propiedad configurada.');
	}
	return target.href;
}

export async function submitSitemap(
	config: OAuthConfig,
	feedUrl: string,
): Promise<Record<string, unknown>> {
	const feed = validateSitemapFeed(config.property, feedUrl);
	const endpoint = `${SEARCH_CONSOLE_API}/sites/${encodeURIComponent(
		config.property,
	)}/sitemaps/${encodeURIComponent(feed)}`;
	const accessToken = await getAccessToken(config);
	const response = await fetch(endpoint, {
		method: 'PUT',
		headers: {
			accept: 'application/json',
			authorization: `Bearer ${accessToken}`,
		},
	});
	if (!response.ok) {
		const body = (await response.json().catch(() => null)) as SearchConsoleError | null;
		throw new Error(
			`Search Console API ${response.status}: ${body?.error?.message ?? response.statusText}. ` +
				'El envío de sitemaps requiere el scope de escritura (webmasters); revisa GOOGLE_SEARCH_CONSOLE_SCOPE y vuelve a autorizar.',
		);
	}
	return { submitted: feed };
}

function printHelp(): void {
	console.log(`Uso:
  bun run search-console:auth
  bun run search-console:performance -- --days 28 --dimension date
  bun run search-console:inspect -- <url1> [url2] ...
  bun run search-console:inspect-new
  bun run search-console:sitemaps
  bun run search-console:sitemaps -- submit --feed https://sergiocruzchacon.vercel.app/sitemap-index.xml

Dimensiones: date, query, page, country, device, searchAppearance
Variables locales requeridas:
  GOOGLE_SEARCH_CONSOLE_CLIENT_ID
  GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET
Opcionales:
  GOOGLE_SEARCH_CONSOLE_PROPERTY
  GOOGLE_SEARCH_CONSOLE_REDIRECT_URI
  GOOGLE_SEARCH_CONSOLE_TOKEN_FILE
  GOOGLE_SEARCH_CONSOLE_SCOPE (por defecto escritura: https://www.googleapis.com/auth/webmasters;
    usa https://www.googleapis.com/auth/webmasters.readonly si solo consultas)
`);
}

async function main(): Promise<void> {
	const args = process.argv.slice(2);
	if (args[0] === '--help' || args.length === 0) {
		printHelp();
		return;
	}
	const options = parseCliArgs(args);
	const config = loadConfig();
	if (options.command === 'auth') {
		await authorize(config);
		return;
	}
	if (options.command === 'inspect') {
		const summaries: InspectionSummary[] = [];
		for (const url of options.urls ?? []) {
			try {
				summaries.push(summarizeInspection(url, await inspectUrl(config, url)));
			} catch (error) {
				summaries.push({
					url,
					verdict: 'Error de API',
					coverageState: (error as Error).message,
					indexingState: '—',
					pageFetchState: '—',
					robotsTxtState: '—',
					lastCrawlTime: '—',
					googleCanonical: '—',
				});
			}
		}
		console.log(JSON.stringify(summaries, null, 2));
		return;
	}
	const result =
		options.command === 'performance'
			? await queryPerformance(config, { days: options.days ?? 28, dimension: options.dimension ?? 'date' })
			: options.command === 'sitemaps' && options.action === 'submit'
				? await submitSitemap(config, options.feed as string)
				: await listSitemaps(config);
	console.log(JSON.stringify(result, null, 2));
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
	main().catch((error: unknown) => {
		console.error(`Error: ${(error as Error).message}`);
		process.exitCode = 1;
	});
}
