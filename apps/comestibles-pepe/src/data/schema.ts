/**
 * Datos estructurados (JSON-LD) que dependen de la página.
 *
 * El `GroceryStore` con la dirección, el geo y los horarios vive en `site.ts` y lo emite el
 * layout en todas las páginas. Aquí solo están las migas de pan.
 */
import { BUSINESS } from './site';

const siteUrl = BUSINESS.siteUrl;

/** Migas de pan que coinciden con las que se ven en pantalla. */
export const breadcrumbs = (items: { name: string; path: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: new URL(item.path, siteUrl).toString(),
	})),
});
