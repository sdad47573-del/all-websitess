#!/usr/bin/env node
// Limpia cachés stale de Astro/Vite que provocan:
// "No cached compile metadata found for /src/pages/[...].astro?astro&type=style..."
// Causa: borraste/renombraste una .astro con <style> mientras `astro dev` seguía corriendo
// y Vite guarda el virtual module `?astro&type=style` en node_modules/.vite.
//
// Uso:
//   node scripts/clean.mjs          # borra .astro + dist + node_modules/.vite (rápido, recomendado)
//   node scripts/clean.mjs --hard   # además borra node_modules/.astro si existe
//   node scripts/clean.mjs --all    # alias de --hard
//   bun run clean                   # atajo npm
//   bun run dev:clean               # limpia y arranca dev
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const isHard = process.argv.includes('--hard') || process.argv.includes('--all');
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');

const TARGETS = [
	'.astro',
	'dist',
	path.join('node_modules', '.vite'),
	// Astro 4+ a veces deja cache aquí
	path.join('node_modules', '.astro'),
];

if (isHard) {
	// En hard también entra cualquier .vite-* que haya dejado Vite en versiones viejas
	TARGETS.push(path.join('node_modules', '.vite-temp'));
}

let removed = 0;
for (const rel of TARGETS) {
	const abs = path.join(ROOT, rel);
	if (!fs.existsSync(abs)) {
		if (isVerbose) console.log(`(skip) ${rel} no existe`);
		continue;
	}
	try {
		fs.rmSync(abs, { recursive: true, force: true });
		console.log(`✔ eliminado ${rel}`);
		removed++;
	} catch (e) {
		console.error(`✖ fallo al borrar ${rel}:`, e.message);
		process.exitCode = 1;
	}
}

if (removed === 0) {
	console.log('Nada que limpiar — ya estaba limpio.');
} else {
	console.log(`\nLimpieza completa (${removed} carpetas).`);
	console.log('Siguiente paso: bun run dev   (o bun run build para verificar)');
	console.log('Si el error persiste, haz hard refresh: Ctrl+Shift+R y cierra pestañas con la ruta vieja (/[game]).');
}
