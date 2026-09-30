import { BUSINESS } from './site';

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: new URL(item.path, BUSINESS.siteUrl).toString(),
	})),
});
