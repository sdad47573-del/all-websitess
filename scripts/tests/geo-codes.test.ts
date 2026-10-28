import { readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';
import { provinceCommunities, regionCode, regionCodeTable, sameRegion, validRegionCodes } from '../lib/geo-codes.mjs';

const component = readFileSync(new URL('../../packages/@astro-components/src/local/geo-codes.ts', import.meta.url), 'utf8');

describe('tabla de códigos ISO de los scripts', () => {
	test('sale del componente compartido, sin lista duplicada', () => {
		expect(component).toContain('export const ISO_REGION_CODES');
		expect(Object.keys(regionCodeTable()).length).toBeGreaterThan(90);
	});

	test('todos los códigos de la tabla son válidos y hay al menos uno por provincia', () => {
		const valid = validRegionCodes();
		for (const code of Object.values(regionCodeTable())) expect(valid.has(code)).toBe(true);
		expect(Object.keys(provinceCommunities()).length).toBeGreaterThan(50);
	});

	test('resuelve nombres, códigos y nombres compuestos', () => {
		expect(regionCode('Cáceres')).toBe('ES-CC');
		expect(regionCode('Castelló')).toBe('ES-CS');
		expect(regionCode('ES-CA')).toBe('ES-CA');
		expect(regionCode('Málaga, Andalucía')).toBe('ES-MA');
		expect(regionCode('Distrito de Lisboa')).toBe('PT-11');
		expect(regionCode('ES-JA')).toBeNull();
		expect(regionCode('Portugal')).toBeNull();
	});

	test('distingue provincia y comunidad del mismo sitio', () => {
		const communities = provinceCommunities();
		expect(sameRegion('ES-CS', 'ES-VC', { communities })).toBe(true);
		expect(sameRegion('ES-CA', 'ES-CC', { communities })).toBe(false);
	});
});
