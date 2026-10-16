import { describe, expect, test } from 'bun:test';
import { readdirSync } from 'node:fs';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
const fotos = readdirSync(new URL('../src/assets/fotos/', import.meta.url)).filter((f) => f.endsWith('.jpg'));

describe('landing de Nuevo Estilo', () => {
	test('muestra NAP verificado y llamadas accionables', () => {
		expect(page).toContain('{business.streetAddress}');
		expect(page).toContain('{business.postalCode}');
		expect(page).toContain('href={phoneHref}');
		expect(page).toContain('{business.phone}');
	});

	test('documenta la ausencia de fotos y facilita la ubicación', () => {
		expect(fotos.length).toBe(0);
		expect(page).toContain('no devolvió fotos');
		expect(page).toContain('src={mapEmbedUrl}');
		expect(page).toContain('href={directionsUrl}');
		expect(page).toContain('href={mapsUrl}');
	});

	test('incluye canonical, datos estructurados y CTA fijo en móvil', () => {
		expect(page).toContain('rel="canonical"');
		expect(page).toContain('application/ld+json');
		expect(page).toContain('phone-cta');
		expect(styles).toContain('.phone-cta');
	});
});
