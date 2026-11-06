import type { EditableField, MediaItem, Site, SourceFile } from "./types";

export async function fetchSites(): Promise<Site[]> {
	const response = await fetch("/api/sites");
	if (!response.ok) throw new Error(`No se ha podido cargar el listado (HTTP ${response.status}).`);
	const data = (await response.json()) as { sites: Site[] };
	return data.sites;
}

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
