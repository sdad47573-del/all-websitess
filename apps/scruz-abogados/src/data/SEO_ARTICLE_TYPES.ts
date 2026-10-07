export interface SeoArticleServiceLink {
	path: string;
	label: string;
}

export interface SeoArticleSection {
	heading: string;
	paragraphs: string[];
}

export interface SeoArticleFaq {
	question: string;
	answer: string;
}

export interface SeoArticle {
	slug: string;
	title: string;
	description: string;
	date: string;
	category: string;
	readTime: string;
	intro: string;
	sections: SeoArticleSection[];
	checklist: string[];
	faq: SeoArticleFaq[];
	relatedServices: SeoArticleServiceLink[];
}
