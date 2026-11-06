import type { EditableField, Site } from "./types";

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
