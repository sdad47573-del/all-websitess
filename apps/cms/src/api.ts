import type {
	AuthUser,
	EditableField,
	MediaItem,
	Role,
	Section,
	SectionCatalogEntry,
	SectionFile,
	SectionLibraryPiece,
	SeoAudit,
	Shop,
	Site,
	SourceFile,
	UserSummary,
} from "./types";

export async function fetchSites(): Promise<Site[]> {
	const response = await fetch("/api/sites");
	if (!response.ok) throw new Error(await readError(response));
	const data = (await response.json()) as { sites: Site[] };
	return data.sites;
}

export const ogUrl = (slug: string) => `/api/sites/${slug}/og`;

export async function fetchSeo(slug: string): Promise<SeoAudit> {
	const response = await fetch(`/api/sites/${slug}/seo`);
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { seo: SeoAudit }).seo;
}

export interface GeneratedOg {
	width: number;
	height: number;
	size: number;
	backup: { name: string; size: number; savedAt: number } | null;
}

export async function generateOg(slug: string): Promise<GeneratedOg> {
	const response = await fetch(ogUrl(slug), { method: "POST" });
	if (!response.ok) throw new Error(await readError(response));
	return (await response.json()) as GeneratedOg;
}

export const previewUrl = (slug: string) => `/preview/${slug}/`;

export async function fetchSite(slug: string): Promise<Site> {
	const response = await fetch(`/api/sites/${slug}`);
	if (response.status === 404) throw new Error("No existe ninguna web con ese slug.");
	if (!response.ok) throw new Error(`No se ha podido cargar la ficha (HTTP ${response.status}).`);
	const data = (await response.json()) as { site: Site };
	return data.site;
}

export interface SaveResult {
	ok: boolean;
	errors: string[];
	site: Site;
}

export async function saveSite(
	slug: string,
	fields: Partial<Record<EditableField, string>>,
): Promise<SaveResult> {
	const response = await fetch(`/api/sites/${slug}`, {
		method: "PATCH",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ fields }),
	});
	if (!response.ok) throw new Error(`No se han podido guardar los cambios (HTTP ${response.status}).`);
	return (await response.json()) as SaveResult;
}

async function readError(response: Response): Promise<string> {
	if (response.status === 401) return "Tu sesión ha caducado. Vuelve a entrar.";
	try {
		const data = (await response.json()) as { error?: string; errors?: string[] };
		return data.error ?? data.errors?.join(" · ") ?? `HTTP ${response.status}`;
	} catch {
		return `HTTP ${response.status}`;
	}
}

export async function fetchMedia(slug: string): Promise<MediaItem[]> {
	const response = await fetch(`/api/sites/${slug}/media`);
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { media: MediaItem[] }).media;
}

export const mediaUrl = (slug: string, name: string) =>
	`/api/sites/${slug}/media/${encodeURIComponent(name)}`;

export async function uploadMedia(slug: string, file: File, name?: string): Promise<void> {
	const body = new FormData();
	body.append("file", file);
	if (name) body.append("name", name);

	const response = await fetch(`/api/sites/${slug}/media`, { method: "POST", body });
	if (!response.ok) throw new Error(await readError(response));
}

export async function deleteMedia(slug: string, name: string): Promise<void> {
	const response = await fetch(`/api/sites/${slug}/media/${encodeURIComponent(name)}`, {
		method: "DELETE",
	});
	if (!response.ok) throw new Error(await readError(response));
}

export async function fetchFiles(slug: string): Promise<SourceFile[]> {
	const response = await fetch(`/api/sites/${slug}/files`);
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { files: SourceFile[] }).files;
}

export async function readFile(slug: string, path: string): Promise<string> {
	const response = await fetch(`/api/sites/${slug}/files?path=${encodeURIComponent(path)}`);
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { file: { content: string } }).file.content;
}

export interface Snapshot {
	id: string;
	savedAt: number;
	size: number;
}

export async function fetchHistory(slug: string, path: string): Promise<Snapshot[]> {
	const response = await fetch(
		`/api/sites/${slug}/history?path=${encodeURIComponent(path)}`,
	);
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { snapshots: Snapshot[] }).snapshots;
}

export async function readSnapshot(
	slug: string,
	path: string,
	id: string,
): Promise<string> {
	const response = await fetch(
		`/api/sites/${slug}/history/${encodeURIComponent(id)}?path=${encodeURIComponent(path)}`,
	);
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { content: string }).content;
}

export async function restoreSnapshot(slug: string, path: string, id: string): Promise<void> {
	const response = await fetch(
		`/api/sites/${slug}/history/${encodeURIComponent(id)}/restore?path=${encodeURIComponent(path)}`,
		{ method: "POST" },
	);
	if (!response.ok) throw new Error(await readError(response));
}

export async function writeFile(slug: string, path: string, content: string): Promise<void> {
	const response = await fetch(`/api/sites/${slug}/files`, {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ path, content }),
	});
	if (!response.ok) throw new Error(await readError(response));
}

export async function fetchSections(slug: string): Promise<SectionFile | null> {
	const response = await fetch(`/api/sites/${slug}/secciones`);
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { secciones: SectionFile | null }).secciones;
}

export async function fetchSectionCatalog(): Promise<SectionCatalogEntry[]> {
	const response = await fetch("/api/sections/catalog");
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { catalogo: SectionCatalogEntry[] }).catalogo;
}

export async function fetchSectionLibrary(): Promise<SectionLibraryPiece[]> {
	const response = await fetch("/api/sections/library");
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { piezas: SectionLibraryPiece[] }).piezas;
}

export async function saveSections(slug: string, secciones: Section[]): Promise<SectionFile> {
	const response = await fetch(`/api/sites/${slug}/secciones`, {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ secciones }),
	});
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { secciones: SectionFile }).secciones;
}

export async function importSection(
	slug: string,
	source: string,
	id: string,
): Promise<{ secciones: SectionFile; id: string }> {
	const response = await fetch(`/api/sites/${slug}/secciones/importar`, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ source, id }),
	});
	if (!response.ok) throw new Error(await readError(response));
	return (await response.json()) as { secciones: SectionFile; id: string };
}

export async function fetchMe(): Promise<AuthUser | null> {
	const response = await fetch("/api/auth/me");
	if (response.status === 401) return null;
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { user: AuthUser }).user;
}

export async function loginUser(username: string, password: string): Promise<AuthUser> {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ username, password }),
	});
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { user: AuthUser }).user;
}

export async function fetchDevAccess(): Promise<boolean> {
	const response = await fetch("/api/auth/dev");
	if (!response.ok) return false;
	return ((await response.json()) as { enabled: boolean }).enabled;
}

export async function loginDev(): Promise<AuthUser> {
	const response = await fetch("/api/auth/dev", { method: "POST" });
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { user: AuthUser }).user;
}

export async function logoutUser(): Promise<void> {
	await fetch("/api/auth/logout", { method: "POST" });
}

export async function fetchUsers(): Promise<UserSummary[]> {
	const response = await fetch("/api/users");
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { users: UserSummary[] }).users;
}

export interface NewUser {
	username: string;
	name?: string;
	password: string;
	role: Role;
}

export async function createUser(input: NewUser): Promise<UserSummary> {
	const response = await fetch("/api/users", {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(input),
	});
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { user: UserSummary }).user;
}

export async function updateUser(
	id: string,
	patch: { name?: string; role?: Role; password?: string },
): Promise<UserSummary> {
	const response = await fetch(`/api/users/${encodeURIComponent(id)}`, {
		method: "PATCH",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(patch),
	});
	if (!response.ok) throw new Error(await readError(response));
	return ((await response.json()) as { user: UserSummary }).user;
}

export async function deleteUser(id: string): Promise<void> {
	const response = await fetch(`/api/users/${encodeURIComponent(id)}`, { method: "DELETE" });
	if (!response.ok) throw new Error(await readError(response));
}

export interface ShopState {
	shop: Shop | null;
	page: boolean;
}

export async function fetchShop(slug: string): Promise<ShopState> {
	const response = await fetch(`/api/sites/${slug}/tienda`);
	if (!response.ok) throw new Error(await readError(response));
	return (await response.json()) as ShopState;
}

export async function saveShop(slug: string, shop: Shop): Promise<{ shop: Shop }> {
	const response = await fetch(`/api/sites/${slug}/tienda`, {
		method: "PUT",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(shop),
	});
	if (!response.ok) throw new Error(await readError(response));
	return (await response.json()) as { shop: Shop };
}

export async function publishShop(slug: string): Promise<void> {
	const response = await fetch(`/api/sites/${slug}/tienda/publicar`, { method: "POST" });
	if (!response.ok) throw new Error(await readError(response));
}

export async function unpublishShop(slug: string): Promise<void> {
	const response = await fetch(`/api/sites/${slug}/tienda/publicar`, { method: "DELETE" });
	if (!response.ok) throw new Error(await readError(response));
}
