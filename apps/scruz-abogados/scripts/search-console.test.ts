// @vitest-environment node
import { describe, expect, it } from 'vitest';
import {
	buildAuthorizationUrl,
	buildDateRange,
	parseCliArgs,
	normalizePropertyUrl,
	validateInspectionUrl,
	validateSitemapFeed,
	summarizeInspection,
} from './search-console-client';

describe('Search Console CLI helpers', () => {
	it('normalizes a Search Console property URL without changing the property identity', () => {
		expect(normalizePropertyUrl('https://sergiocruzchacon.vercel.app')).toBe(
			'https://sergiocruzchacon.vercel.app/',
		);
		expect(normalizePropertyUrl('sc-domain:example.com')).toBe('sc-domain:example.com');
	});

	it('creates an authorization URL with the read-write scope (needed for sitemaps submit), CSRF state and PKCE', () => {
		const url = new URL(
			buildAuthorizationUrl({
				clientId: 'client-id',
				redirectUri: 'http://127.0.0.1:43117/oauth2callback',
				state: 'state-value',
				codeChallenge: 'challenge-value',
			}),
		);

		expect(url.origin).toBe('https://accounts.google.com');
		expect(url.searchParams.get('client_id')).toBe('client-id');
		expect(url.searchParams.get('state')).toBe('state-value');
		expect(url.searchParams.get('access_type')).toBe('offline');
		expect(url.searchParams.get('scope')).toBe('https://www.googleapis.com/auth/webmasters');
		expect(url.searchParams.get('code_challenge')).toBe('challenge-value');
		expect(url.searchParams.get('code_challenge_method')).toBe('S256');
	});

	it('allows opting into the read-only scope for pure query commands', () => {
		const url = new URL(
			buildAuthorizationUrl({
				clientId: 'client-id',
				redirectUri: 'http://127.0.0.1:43117/oauth2callback',
				state: 'state-value',
				scope: 'https://www.googleapis.com/auth/webmasters.readonly',
			}),
		);

		expect(url.searchParams.get('scope')).toBe(
			'https://www.googleapis.com/auth/webmasters.readonly',
		);
	});

	it('rejects inspection URLs outside the configured property', () => {
		expect(() => validateInspectionUrl('https://example.com/', 'https://evil.example/')).toThrow(
			'no pertenece a la propiedad',
		);
		expect(validateInspectionUrl('https://example.com/', 'https://example.com/page')).toBe(
			'https://example.com/page',
		);
	});

	it('rejects insecure Search Console properties', () => {
		expect(() => normalizePropertyUrl('http://example.com')).toThrow('debe ser HTTPS');
		expect(() => normalizePropertyUrl('https://user:pass@example.com')).toThrow('debe ser HTTPS');
	});

	it('builds an inclusive UTC date range for the requested number of days', () => {
		const range = buildDateRange(28, new Date('2026-08-09T12:00:00.000Z'));

		expect(range).toEqual({ startDate: '2026-07-13', endDate: '2026-08-09' });
	});

	it('parses the supported commands', () => {
		expect(parseCliArgs(['performance', '--days', '7', '--dimension', 'query'])).toEqual({
			command: 'performance',
			days: 7,
			dimension: 'query',
		});
		expect(parseCliArgs(['inspect', 'https://example.com/page'])).toEqual({
			command: 'inspect',
			urls: ['https://example.com/page'],
		});
		expect(
			parseCliArgs([
				'inspect',
				'https://example.com/page',
				'https://example.com/otra',
			]),
		).toEqual({
			command: 'inspect',
			urls: ['https://example.com/page', 'https://example.com/otra'],
		});
		expect(parseCliArgs(['sitemaps'])).toEqual({ command: 'sitemaps', action: 'list' });
		expect(
			parseCliArgs([
				'sitemaps',
				'submit',
				'--feed',
				'https://example.com/sitemap-index.xml',
			]),
		).toEqual({
			command: 'sitemaps',
			action: 'submit',
			feed: 'https://example.com/sitemap-index.xml',
		});
	});

	it('summarizes the URL inspection result with Spanish labels', () => {
		const summary = summarizeInspection('https://example.com/consumo/', {
			inspectionResult: {
				indexStatusResult: {
					verdict: 'PASS',
					coverageState: 'SubmittedAndIndexed',
					indexingState: 'Indexed',
					pageFetchState: 'Successful',
					robotsTxtState: 'Allowed',
					lastCrawlTime: '2026-09-01T10:00:00Z',
					googleCanonical: 'https://example.com/consumo/',
				},
			},
		});

		expect(summary).toEqual({
			url: 'https://example.com/consumo/',
			verdict: 'Indexable',
			coverageState: 'Enviada e indexada',
			indexingState: 'Indexada',
			pageFetchState: 'Descarga correcta',
			robotsTxtState: 'Permitido',
			lastCrawlTime: '2026-09-01T10:00:00Z',
			googleCanonical: 'https://example.com/consumo/',
		});
	});

	it('tolerates an empty inspection result', () => {
		const summary = summarizeInspection('https://example.com/vacia/', {});

		expect(summary.verdict).toBe('—');
		expect(summary.coverageState).toBe('—');
	});

	it('validates sitemap feeds against the configured property', () => {
		expect(() =>
			validateSitemapFeed('https://example.com/', 'https://evil.example/sitemap.xml'),
		).toThrow('no pertenece a la propiedad');
		expect(validateSitemapFeed('https://example.com/', 'https://example.com/sitemap.xml')).toBe(
			'https://example.com/sitemap.xml',
		);
		expect(validateSitemapFeed('sc-domain:example.com', 'https://www.example.com/sitemap.xml')).toBe(
			'https://www.example.com/sitemap.xml',
		);
	});
});
