import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';

const app = new URL('../', import.meta.url);
const pagesDirectory = new URL('src/pages/', app);

/** Todas las plantillas que Astro convierte en rutas públicas de la web. */
const pages = readdirSync(pagesDirectory)
	.filter((name) => name.endsWith('.astro'))
	.sort();

describe('cerrajero: una sola landing que posicionar', () => {
	test('solo se publica la portada y el aviso legal', () => {
		expect(pages).toEqual(['aviso-legal.astro', 'index.astro']);
	});

	test('la portada es la versión completa, con contacto y zonas de cobertura', () => {
		const index = readFileSync(new URL('src/pages/index.astro', app), 'utf8');
		expect(index).toContain('Nuestros Servicios');
		expect(index).toContain('Zonas de Cobertura');
		expect(index).toContain('Información de Contacto');
	});

	test('no quedan páginas duplicadas de la portada', () => {
		const duplicates = pages.filter((name) => {
			const source = readFileSync(new URL(`src/pages/${name}`, app), 'utf8');
			return /title="Cerrajero Barato Málaga 24h/.test(source);
		});
		expect(duplicates).toEqual(['index.astro']);
	});

	test('no quedan ficheros con nombre de copia o borrador', () => {
		const leftovers = [];
		for (const dir of ['src/pages', 'src/components', 'src/data', 'src/layouts']) {
			for (const name of readdirSync(new URL(`${dir}/`, app))) {
				if (/\b(?:copy|copia|old|nuevo|test|borrador|draft|aux)\b|\s-\s/i.test(name))
					leftovers.push(`${dir}/${name}`);
			}
		}
		expect(leftovers).toEqual([]);
	});

	test('el componente de reseñas y los datos son los originales, no las copias', () => {
		expect(existsSync(new URL('src/components/GoogleReviews.astro', app))).toBe(true);
		expect(existsSync(new URL('src/data/data.astro', app))).toBe(true);
	});
});
