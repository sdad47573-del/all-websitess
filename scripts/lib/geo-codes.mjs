// scripts/lib/geo-codes.mjs
//
// Los scripts de SEO local necesitan la misma tabla de códigos ISO 3166-2 que
// usa el componente compartido `@astro-components/src/local/geo-codes.ts`. En
// lugar de duplicarla, se lee de ahí: si alguien añade una provincia al
// componente, las comprobaciones la ven al instante.

import { readFileSync } from 'node:fs';

const GEO_CODES_FILE = new URL('../../packages/@astro-components/src/local/geo-codes.ts', import.meta.url);

/** Normaliza igual que el componente: sin acentos, minúsculas, espacios simples. */
export const normalizeRegion = (value) =>
	String(value ?? '')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/\s+/g, ' ')
		.trim();

/** { nombre de región: código ISO } extraído del componente. */
export function regionCodeTable() {
	const source = readFileSync(GEO_CODES_FILE, 'utf8');
	const block = source.match(/const REGION_CODES: Record<string, string> = \{([\s\S]*?)\n\};/)?.[1] ?? '';
	const table = {};
	for (const [, name, code] of block.matchAll(/'([^']+)':\s*'([A-Z]{2}-\d{0,2}[A-Z]*)'/g)) {
		table[normalizeRegion(name)] = code;
	}
	return table;
}

/** Lista de códigos válidos declarada por el componente. */
export function validRegionCodes() {
	const source = readFileSync(GEO_CODES_FILE, 'utf8');
	const block = source.match(/export const ISO_REGION_CODES = \[([\s\S]*?)\];/)?.[1] ?? '';
	return new Set([...block.matchAll(/'(ES-[A-Z]{1,2}|PT-\d{2})'/g)].map((m) => m[1]));
}

/** { código de provincia: código de su comunidad } extraído del componente. */
export function provinceCommunities() {
	const source = readFileSync(GEO_CODES_FILE, 'utf8');
	const block = source.match(/const COMMUNITY_OF_PROVINCE: Record<string, string> = \{([\s\S]*?)\n\};/)?.[1] ?? '';
	const map = {};
	for (const [, province, community] of block.matchAll(/'(ES-[A-Z]{1,2})':\s*'(ES-[A-Z]{1,2})'/g)) map[province] = community;
	return map;
}

/**
 * ¿Los dos códigos son el mismo territorio? Acepta provincia y comunidad del mismo
 * sitio (`ES-CS` y `ES-VC`), pero no dos provincias distintas.
 */
export function sameRegion(a, b, { communities = provinceCommunities() } = {}) {
	const community = (code) => communities[code] ?? code;
	return community(a) === community(b);
}

/**
 * Código ISO 3166-2 de un nombre de región o de un código ya escrito, o null.
 * Misma normalización que el componente (`geoRegionCode`): entiende «Málaga, Andalucía»
 * y «Distrito de Lisboa», que son las formas que usan algunas webs.
 */
export function regionCode(value, { table = regionCodeTable(), valid = validRegionCodes() } = {}) {
	const clean = normalizeRegion(value);
	if (!clean) return null;
	if (/^[a-z]{2}-[a-z0-9]{1,2}$/.test(clean)) {
		const code = clean.toUpperCase();
		return valid.has(code) ? code : null;
	}
	if (table[clean]) return table[clean];
	for (const part of clean.split(',').map((p) => p.replace(/^(distrito|provincia|comarca|region) de /, '').trim())) {
		if (table[part]) return table[part];
	}
	return null;
}
