import { describe, expect, it } from 'vitest';
import { BLOG_POSTS } from './BLOG_POSTS';
import { BLOG_RELATED_SERVICES } from './blogInternalLinks';
import { SEO_ARTICLES } from './SEO_ARTICLES';

describe('SEO_ARTICLES', () => {
	// 165 = 93 anteriores + nueve lotes de oct 2026 elegidos con datos de Search
	// Console (8 × 9 guías: huecos de herencias, civil, laboral, extranjería,
	// penal, tráfico, consumo, familia, empresa, Seguridad Social, urbanismo,
	// seguros, protección de menores y societario). Subir el número es una
	// decisión editorial: este test marca el tope.
	it('publishes exactly 165 unique high-intent articles', () => {
		expect(SEO_ARTICLES).toHaveLength(165);
		expect(new Set(SEO_ARTICLES.map(({ slug }) => slug)).size).toBe(165);
	});

	it('keeps every article sufficiently developed and structured', () => {
		for (const article of SEO_ARTICLES) {
			expect(article.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
			expect(article.title.length).toBeGreaterThan(30);
			expect(article.description.length).toBeGreaterThan(100);
			expect(article.intro.length).toBeGreaterThan(150);
			expect(article.sections).toHaveLength(6);
			expect(article.checklist).toHaveLength(5);
			expect(article.faq).toHaveLength(3);
			expect(article.relatedServices).toHaveLength(3);
		}
	});

	it('registers every article in the blog index and internal-link graph', () => {
		for (const article of SEO_ARTICLES) {
			expect(BLOG_POSTS).toContainEqual(
				expect.objectContaining({ href: `/blog/${article.slug}/`, title: article.title }),
			);
			expect(BLOG_RELATED_SERVICES[article.slug]).toEqual(article.relatedServices);
		}
	});
});
