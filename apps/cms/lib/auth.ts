/**
 * Usuarios, contraseñas y sesiones del CMS.
 *
 * El panel escucha solo en 127.0.0.1, pero eso no basta: cualquier proceso del
 * equipo puede abrir el puerto, y un `fetch` desde otra web del navegador
 * llegaría igual. Por eso hay login, cookie HttpOnly y permisos por rol.
 *
 * Los usuarios viven en `apps/cms/.auth/users.json` con la contraseña hasheada
 * (argon2id de Bun, nunca en claro). La sesión es un token firmado con HMAC:
 * no hay estado en memoria, así que reiniciar el servidor no cierra la sesión.
 * El token lleva el id y la versión del usuario; cambiar la contraseña sube esa
 * versión y todas las sesiones anteriores dejan de valer.
 */
import { createHmac, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

export const ROLES = ["admin", "editor"] as const;
export type Role = (typeof ROLES)[number];

export type Capability = "read" | "editContent" | "editCode" | "manageUsers";

const CAPABILITIES: Record<Role, readonly Capability[]> = {
	admin: ["read", "editContent", "editCode", "manageUsers"],
	editor: ["read", "editContent"],
};

export function can(role: Role, capability: Capability): boolean {
	return CAPABILITIES[role]?.includes(capability) ?? false;
}

export function capabilitiesOf(role: Role): Capability[] {
	return [...(CAPABILITIES[role] ?? [])];
}

export interface StoredUser {
	id: string;
	username: string;
	name: string;
	role: Role;
	passwordHash: string;
	tokenVersion: number;
	createdAt: number;
}

export interface PublicUser {
	id: string;
	username: string;
	name: string;
	role: Role;
	createdAt: number;
	capabilities: Capability[];
}

export const SESSION_COOKIE = "cms_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;
export const MIN_PASSWORD_LENGTH = 8;
const USERNAME_PATTERN = /^[a-z0-9][a-z0-9._-]{1,31}$/;
const MAX_USERS = 50;

interface UsersFile {
	version: 1;
	users: StoredUser[];
}

/** `apps/cms/.auth`: usuarios y secreto de sesión, fuera de las webs. */
export function defaultAuthDir(): string {
	return resolve(import.meta.dir, "..", ".auth");
}

const cache = new Map<string, { mtimeMs: number; users: StoredUser[] }>();

function usersPath(dir: string): string {
	return join(dir, "users.json");
}

function secretPath(dir: string): string {
	return join(dir, "secret");
}

function readUsers(dir: string): StoredUser[] {
	const file = usersPath(dir);
	if (!existsSync(file)) return [];

	const mtimeMs = statSync(file).mtimeMs;
	const cached = cache.get(file);
	if (cached && cached.mtimeMs === mtimeMs) return cached.users;

	let parsed: UsersFile;
	try {
		parsed = JSON.parse(readFileSync(file, "utf8")) as UsersFile;
	} catch {
		throw new Error("No se puede leer .auth/users.json: el fichero no es JSON válido.");
	}
	if (!parsed || !Array.isArray(parsed.users)) {
		throw new Error("No se puede leer .auth/users.json: falta la lista de usuarios.");
	}

	cache.set(file, { mtimeMs, users: parsed.users });
	return parsed.users;
}

function writeUsers(dir: string, users: StoredUser[]): void {
	mkdirSync(dir, { recursive: true, mode: 0o700 });
	const file = usersPath(dir);
	const temporary = `${file}.${process.pid}.tmp`;
	const data: UsersFile = { version: 1, users };
	writeFileSync(temporary, `${JSON.stringify(data, null, "\t")}\n`, { encoding: "utf8", mode: 0o600 });
	renameSync(temporary, file);
	cache.delete(file);
}

export function toPublicUser(user: StoredUser): PublicUser {
	return {
		id: user.id,
		username: user.username,
		name: user.name,
		role: user.role,
		createdAt: user.createdAt,
		capabilities: capabilitiesOf(user.role),
	};
}

export function listUsers(dir = defaultAuthDir()): PublicUser[] {
	return readUsers(dir)
		.map(toPublicUser)
		.sort((a, b) => a.username.localeCompare(b.username, "es"));
}

function validateUsername(raw: unknown): string {
	if (typeof raw !== "string") throw new Error("El usuario debe ser texto.");
	const username = raw.trim().toLowerCase();
	if (!USERNAME_PATTERN.test(username)) {
		throw new Error("El usuario debe tener 2–32 caracteres: letras minúsculas, números, punto, guion o guion bajo.");
	}
	return username;
}

function validateName(raw: unknown, fallback: string): string {
	if (raw === undefined || raw === null || raw === "") return fallback;
	if (typeof raw !== "string") throw new Error("El nombre debe ser texto.");
	const name = raw.trim();
	if (name.length < 1 || name.length > 80) throw new Error("El nombre debe tener entre 1 y 80 caracteres.");
	return name;
}

function validateRole(raw: unknown): Role {
	if (typeof raw !== "string" || !ROLES.includes(raw as Role)) {
		throw new Error(`El rol debe ser uno de: ${ROLES.join(", ")}.`);
	}
	return raw as Role;
}

function validatePassword(raw: unknown): string {
	if (typeof raw !== "string") throw new Error("La contraseña debe ser texto.");
	if (raw.length < MIN_PASSWORD_LENGTH) {
		throw new Error(`La contraseña necesita al menos ${MIN_PASSWORD_LENGTH} caracteres.`);
	}
	if (raw.length > 200) throw new Error("La contraseña no puede pasar de 200 caracteres.");
	return raw;
}

async function hashPassword(password: string): Promise<string> {
	return Bun.password.hash(password, { algorithm: "argon2id" });
}

export interface CreateUserInput {
	username: string;
	name?: string;
	password: string;
	role: Role;
}

export async function createUser(
	input: CreateUserInput,
	dir = defaultAuthDir(),
): Promise<PublicUser> {
	const users = readUsers(dir);
	if (users.length >= MAX_USERS) throw new Error(`Ya hay ${MAX_USERS} usuarios: borra alguno antes de crear otro.`);

	const username = validateUsername(input.username);
	const role = validateRole(input.role);
	const password = validatePassword(input.password);
	if (users.some((user) => user.username === username)) {
		throw new Error(`Ya existe un usuario «${username}».`);
	}

	const user: StoredUser = {
		id: randomUUID(),
		username,
		name: validateName(input.name, username),
		role,
		passwordHash: await hashPassword(password),
		tokenVersion: 1,
		createdAt: Date.now(),
	};

	writeUsers(dir, [...users, user]);
	return toPublicUser(user);
}

export interface UserPatch {
	name?: string;
	role?: Role;
	password?: string;
}

export async function updateUser(
	id: string,
	patch: UserPatch,
	dir = defaultAuthDir(),
): Promise<PublicUser> {
	const users = readUsers(dir);
	const index = users.findIndex((user) => user.id === id);
	if (index === -1) throw new Error("No existe ese usuario.");

	const current = users[index];
	const next: StoredUser = { ...current };
	const admins = users.filter((user) => user.role === "admin").length;

	if (patch.role !== undefined) {
		next.role = validateRole(patch.role);
		if (current.role === "admin" && next.role !== "admin" && admins <= 1) {
			throw new Error("No puedes quitar el rol al último administrador.");
		}
	}

	if (patch.name !== undefined) next.name = validateName(patch.name, current.name);

	if (patch.password !== undefined) {
		next.passwordHash = await hashPassword(validatePassword(patch.password));
		// Invalida las sesiones abiertas de ese usuario.
		next.tokenVersion = current.tokenVersion + 1;
	}

	users[index] = next;
	writeUsers(dir, users);
	return toPublicUser(next);
}

export function deleteUser(id: string, dir = defaultAuthDir()): void {
	const users = readUsers(dir);
	const user = users.find((item) => item.id === id);
	if (!user) throw new Error("No existe ese usuario.");

	const admins = users.filter((item) => item.role === "admin").length;
	if (user.role === "admin" && admins <= 1) {
		throw new Error("No puedes borrar al último administrador.");
	}

	writeUsers(dir, users.filter((item) => item.id !== id));
}

/** Comprueba usuario y contraseña. Devuelve null si algo no coincide. */
export async function authenticate(
	username: string,
	password: string,
	dir = defaultAuthDir(),
): Promise<StoredUser | null> {
	const normalized = String(username ?? "").trim().toLowerCase();
	if (!normalized || !password) return null;

	const user = readUsers(dir).find((item) => item.username === normalized);
	if (!user) return null;

	const valid = await Bun.password.verify(String(password), user.passwordHash);
	return valid ? user : null;
}

/**
 * Primer arranque: si no hay usuarios crea el administrador. La contraseña sale
 * de `CMS_ADMIN_PASSWORD` o, si no está, se genera y se devuelve una sola vez
 * para que el servidor la imprima.
 */
export interface EnsureAdminResult {
	created: boolean;
	password?: string;
	user: PublicUser | null;
}

export async function ensureAdmin(
	dir = defaultAuthDir(),
	options: { username?: string; password?: string; name?: string } = {},
): Promise<EnsureAdminResult> {
	const users = readUsers(dir);
	if (users.length > 0) return { created: false, user: null };

	const username = validateUsername(options.username ?? "admin");
	const password = options.password
		? validatePassword(options.password)
		: randomBytes(12).toString("base64url").slice(0, 16);

	const user: StoredUser = {
		id: randomUUID(),
		username,
		name: validateName(options.name, "Administrador"),
		role: "admin",
		passwordHash: await hashPassword(password),
		tokenVersion: 1,
		createdAt: Date.now(),
	};

	writeUsers(dir, [user]);
	return { created: true, password, user: toPublicUser(user) };
}

export const DEV_USERNAME = "dev";
const DEV_USER_ID = "dev-local";

/**
 * Usuario del botón de acceso directo en desarrollo. La contraseña es aleatoria
 * y no se guarda: solo se entra por la sesión que firma el servidor en modo dev.
 * Es admin para no tener que cambiar de cuenta mientras se prueba el panel.
 */
export async function ensureDevUser(dir = defaultAuthDir()): Promise<StoredUser> {
	const users = readUsers(dir);
	const existing = users.find((user) => user.id === DEV_USER_ID);
	if (existing) return existing;

	if (users.some((user) => user.username === DEV_USERNAME)) {
		throw new Error(`Ya existe un usuario «${DEV_USERNAME}» que no es el de desarrollo.`);
	}

	const user: StoredUser = {
		id: DEV_USER_ID,
		username: DEV_USERNAME,
		name: "Dev",
		role: "admin",
		passwordHash: await hashPassword(randomBytes(24).toString("base64url")),
		tokenVersion: 1,
		createdAt: Date.now(),
	};

	writeUsers(dir, [...users, user]);
	return user;
}

function sessionSecret(dir: string): string {
	const file = secretPath(dir);
	if (existsSync(file)) {
		const secret = readFileSync(file, "utf8").trim();
		if (secret.length >= 32) return secret;
	}

	const secret = randomBytes(32).toString("base64url");
	mkdirSync(dir, { recursive: true, mode: 0o700 });
	writeFileSync(file, `${secret}\n`, { encoding: "utf8", mode: 0o600 });
	return secret;
}

function sign(body: string, secret: string): string {
	return createHmac("sha256", secret).update(body).digest("base64url");
}

function sameSignature(a: string, b: string): boolean {
	const left = Buffer.from(a);
	const right = Buffer.from(b);
	return left.length === right.length && timingSafeEqual(left, right);
}

export function signSession(
	user: StoredUser,
	dir = defaultAuthDir(),
	ttlSeconds = SESSION_TTL_SECONDS,
	now = Date.now(),
): string {
	const payload = {
		sub: user.id,
		v: user.tokenVersion,
		exp: Math.floor(now / 1000) + ttlSeconds,
	};
	const body = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
	return `${body}.${sign(body, sessionSecret(dir))}`;
}

/** Devuelve el usuario si el token es válido, no ha caducado y sigue vigente. */
export function readSession(
	token: string | null | undefined,
	dir = defaultAuthDir(),
	now = Date.now(),
): StoredUser | null {
	if (!token) return null;
	const [body, signature] = token.split(".");
	if (!body || !signature) return null;
	if (!sameSignature(signature, sign(body, sessionSecret(dir)))) return null;

	let payload: { sub?: unknown; v?: unknown; exp?: unknown };
	try {
		payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as typeof payload;
	} catch {
		return null;
	}

	if (typeof payload.sub !== "string" || typeof payload.v !== "number" || typeof payload.exp !== "number") {
		return null;
	}
	if (payload.exp * 1000 <= now) return null;

	const user = readUsers(dir).find((item) => item.id === payload.sub);
	if (!user || user.tokenVersion !== payload.v) return null;
	return user;
}

function cookieValue(request: Request): string | null {
	const header = request.headers.get("cookie");
	if (!header) return null;

	for (const part of header.split(";")) {
		const [name, ...rest] = part.trim().split("=");
		if (name === SESSION_COOKIE) return decodeURIComponent(rest.join("="));
	}
	return null;
}

export function userFromRequest(request: Request, dir = defaultAuthDir()): StoredUser | null {
	return readSession(cookieValue(request), dir);
}

export function sessionCookie(token: string): string {
	return `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${SESSION_TTL_SECONDS}`;
}

export function clearedSessionCookie(): string {
	return `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`;
}
