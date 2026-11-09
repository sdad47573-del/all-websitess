/** Migas y FAQ estructuradas que coinciden con el contenido visible de cada página. */
import { BUSINESS, FAQ } from './site';

const siteUrl = BUSINESS.siteUrl;

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
