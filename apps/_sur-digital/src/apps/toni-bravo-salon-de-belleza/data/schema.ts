/** Migas y FAQ estructuradas que coinciden con el contenido visible de cada página. */
import { BUSINESS, FAQ } from './site';

const siteUrl = BUSINESS.siteUrl;

// Las rutas de este aviso son de la app, no del dominio: sin esto `new URL('/servicios', …)`
// resolvía contra la raíz de sur-digital.com y las migas apuntaban fuera de la web.
const absolute = (path: string) => `${siteUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: absolute(item.path),
	})),
});

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	inLanguage: 'es',
	mainEntity: FAQ.map((item) => ({
		'@type': 'Question',
		name: item.q,
		acceptedAnswer: { '@type': 'Answer', text: item.a },
	})),
};
