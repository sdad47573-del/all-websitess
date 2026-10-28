import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';
import { COMMUNITY_OF_PROVINCE, ISO_REGION_CODES, geoRegionCode, sameRegion } from '../src/local/geo-codes';

describe('geoRegionCode', () => {
	test('deriva el código de provincia desde el nombre que declara la web', () => {
		expect(geoRegionCode('Cáceres')).toBe('ES-CC');
		expect(geoRegionCode('Castelló')).toBe('ES-CS');
		expect(geoRegionCode('Jaén')).toBe('ES-J');
		expect(geoRegionCode('Málaga')).toBe('ES-MA');
		expect(geoRegionCode('Illes Balears')).toBe('ES-PM');
		expect(geoRegionCode('Lisboa')).toBe('PT-11');
	});

	test('acepta también comunidades autónomas', () => {
		expect(geoRegionCode('Andalucía')).toBe('ES-AN');
		expect(geoRegionCode('Región de Murcia')).toBe('ES-MC');
		expect(geoRegionCode('Comunitat Valenciana')).toBe('ES-VC');
		expect(geoRegionCode('País Vasco')).toBe('ES-PV');
	});

	test('entiende los nombres compuestos que usan algunas webs', () => {
		expect(geoRegionCode('Málaga, Andalucía')).toBe('ES-MA');
		expect(geoRegionCode('Córdoba, Andalucía')).toBe('ES-CO');
		expect(geoRegionCode('Distrito de Lisboa')).toBe('PT-11');
		expect(geoRegionCode('Distrito de Setúbal')).toBe('PT-15');
	});

	test('reutiliza un código ya válido', () => {
		expect(geoRegionCode('ES-CA')).toBe('ES-CA');
		expect(geoRegionCode('ES-IB')).toBe('ES-IB');
		expect(geoRegionCode('es-ma')).toBe('ES-MA');
		for (const code of ISO_REGION_CODES) expect(geoRegionCode(code)).toBe(code);
	});

	test('rechaza códigos inventados en lugar de publicarlos', () => {
		expect(geoRegionCode('ES-JA')).toBeNull();
		expect(geoRegionCode('ES-MU2')).toBeNull();
		expect(geoRegionCode('PT')).toBeNull();
		expect(geoRegionCode('República de Tortosa')).toBeNull();
		expect(geoRegionCode('Portugal')).toBeNull();
		expect(geoRegionCode('')).toBeNull();
		expect(geoRegionCode(null)).toBeNull();
		expect(geoRegionCode(undefined)).toBeNull();
	});
});

describe('provincia y comunidad', () => {
	test('cada provincia apunta a una comunidad real y ninguna provincia se repite', () => {
		expect(Object.keys(COMMUNITY_OF_PROVINCE).length).toBeGreaterThan(50);
		for (const community of Object.values(COMMUNITY_OF_PROVINCE))
			expect(ISO_REGION_CODES).toContain(community);
	});

	test('acepta la provincia y su comunidad, pero no otra región', () => {
		expect(sameRegion('ES-CS', 'ES-VC')).toBe(true);
		expect(sameRegion('ES-J', 'ES-AN')).toBe(true);
		expect(sameRegion('ES-IB', 'ES-PM')).toBe(true);
		expect(sameRegion('ES-MU', 'ES-MC')).toBe(true);
		expect(sameRegion('ES-CA', 'ES-CC')).toBe(false);
		expect(sameRegion('ES-CC', 'ES-AN')).toBe(false);
	});
});

describe('LocalSeo geo.region', () => {
	const component = readFileSync(new URL('../src/local/Seo.astro', import.meta.url), 'utf8');

	test('no anuncia ninguna región por defecto y omite la etiqueta si no la conoce', () => {
		expect(component).not.toContain("geoRegion = 'ES-AN'");
		expect(component).toContain('{regionCode && <meta name="geo.region" content={regionCode} />}');
	});

	test('declara el MIME del og:image a partir de la extensión del fichero', () => {
		expect(component).toContain('{ogImageType && OG_MIME[ogImageType] &&');
		expect(component).toContain("png: 'image/png'");
		expect(component).toContain("svg: 'image/svg+xml'");
	});

	test('todas las webs que usan LocalSeo declaran la región de la que sale el código', () => {
		const appsDirectory = new URL('../../../apps/', import.meta.url);
		const landings = readdirSync(appsDirectory, { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.map((entry) => new URL(`../../../apps/${entry.name}/src/pages/index.astro`, import.meta.url))
			.filter((url) => {
				try {
					return readFileSync(url, 'utf8').includes('<LocalSeo');
				} catch {
					return false;
				}
			});
		expect(landings.length).toBeGreaterThan(100);
		for (const landing of landings) {
			const source = readFileSync(landing, 'utf8');
			const explicit = source.match(/geoRegion=\{?['"]([^'"]+)['"]\}?/)?.[1];
			if (explicit) {
				expect(geoRegionCode(explicit)).not.toBeNull();
				continue;
			}
			const region = source.match(/region=\{?([^}\s>]+)\}?/)?.[1] ?? source.match(/region="([^"]*)"/)?.[1];
			expect(region).toBeTruthy();
		}
	});
});
