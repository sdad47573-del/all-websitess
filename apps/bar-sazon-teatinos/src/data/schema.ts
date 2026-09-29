/**
 * Datos estructurados (JSON-LD) que dependen de la carta o de cada página.
 *
 * El `Restaurant` con la dirección, el horario y la valoración vive en `site.ts` y lo
 * emite el layout en todas las páginas. Aquí están las migas de pan y la carta completa
 * como `Menu` (con sus secciones y precios), que solo se usan en `/carta`.
 */
import { CARTA } from './carta';
import { BEBIDAS, BUSINESS } from './site';

const siteUrl = BUSINESS.siteUrl;

/** '17,50 €' -> '17.50' (schema.org espera el número, sin símbolo ni miles). */
const aNumero = (precio: string) => precio.replace(/[^\d,.]/g, '').replace(',', '.');

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

/** La carta como `Menu`, sección a sección, con los precios que publica el local. */
export const menuSchema = {
	'@context': 'https://schema.org',
	'@type': 'Menu',
	'@id': `${siteUrl}/carta#carta`,
	name: `Carta de ${BUSINESS.name}`,
	url: `${siteUrl}/carta`,
	inLanguage: 'es',
	hasMenuSection: [
		...CARTA.map((section) => ({
			'@type': 'MenuSection',
			name: section.name,
			...(section.note ? { description: section.note } : {}),
			hasMenuItem: section.items.map((item) => ({
				'@type': 'MenuItem',
				name: item.name,
				...(item.description ? { description: item.description } : {}),
				offers: (item.priceOptions ?? (item.price ? [{ label: '', price: item.price }] : [])).map(
					(option) => ({
						'@type': 'Offer',
						price: aNumero(option.price),
						priceCurrency: 'EUR',
						...(option.label ? { name: option.label } : {}),
					}),
				),
			})),
		})),
		{
			'@type': 'MenuSection',
			name: 'Bebidas',
			description:
				'Cervezas, refrescos, vinos y combinados. La carta de bebidas completa está en el local y en el menú digital.',
			hasMenuItem: BEBIDAS.map((item) => ({
				'@type': 'MenuItem',
				name: item.name,
				...(item.description ? { description: item.description } : {}),
			})),
		},
	],
};
