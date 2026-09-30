/**
 * Datos estructurados (JSON-LD) que dependen de la página.
 *
 * El `Restaurant` con la dirección, el geo, el horario y la valoración vive en `site.ts` y lo
 * emite el layout en todas las páginas. Aquí solo están las migas de pan y el `Menu`.
 */
import { BUSINESS, MENU_SECTIONS } from './site';

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

/**
 * `Menu` con la carta real del local: es lo que permite que Google entienda qué se sirve
 * aquí y pueda mostrarla en resultados enriquecidos.
 */
export const menuSchema = {
	'@context': 'https://schema.org',
	'@type': 'Menu',
	'@id': `${siteUrl}/carta#menu`,
	name: `Carta de ${BUSINESS.name}`,
	inLanguage: 'es',
	provider: { '@id': `${siteUrl}/` },
	hasMenuSection: MENU_SECTIONS.map((section) => ({
		'@type': 'MenuSection',
		name: section.title,
		hasMenuItem: section.items.map((item) => ({
			'@type': 'MenuItem',
			name: item.name,
			description: item.description,
			offers: {
				'@type': 'Offer',
				priceCurrency: 'EUR',
				// 'a consultar' no es un importe válido para el esquema: ahí se omite la oferta.
				...(item.price !== 'a consultar' && {
					price: item.price.replace(' €', '').replace(',', '.'),
				}),
			},
		})),
	})),
};
