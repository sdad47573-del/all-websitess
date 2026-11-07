/**
 * Alcance del CMS.
 *
 * Sin `CMS_SITE_SLUG` el panel sigue siendo el inventario de desarrollo de
 * todas las webs. Con la variable definida, cada instalación atiende una sola
 * web: el propietario entra directamente en su ficha y la API no deja leer ni
 * escribir ninguna otra, aunque conozca el slug.
 */
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

export function parseSiteSlug(raw: string | null | undefined): string | null {
	const value = raw?.trim();
	if (!value) return null;
	if (!SLUG_PATTERN.test(value)) {
		throw new Error(
			"CMS_SITE_SLUG debe ser el slug de una web: minúsculas, números y guiones.",
		);
	}
	return value;
}

/** Web configurada para esta instalación, o null en modo inventario. */
export const SITE_SLUG = parseSiteSlug(process.env.CMS_SITE_SLUG);
export const SINGLE_SITE = SITE_SLUG !== null;

/** ¿Se puede tocar esta web desde esta instalación? */
export function siteAllowed(slug: string, scope: string | null = SITE_SLUG): boolean {
	return !scope || slug === scope;
}
