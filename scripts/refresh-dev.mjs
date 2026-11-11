// El watcher de apps/_sur-digital ignora src/apps y public a propósito: recorrerlas abría
// miles de fs.watch y el arranque tardaba minutos (ver astro.config.mjs). Al tocar el
// archivo de configuración, Vite reinicia el servidor y vuelve a leer las landings.
//
// Uso, desde la raíz del monorepo:
//   bun run dev:refresh

import { existsSync, utimesSync } from 'node:fs';

const config = 'apps/_sur-digital/astro.config.mjs';

if (!existsSync(config)) {
	console.error(`No encuentro ${config}. Ejecuta el script desde la raíz del monorepo.`);
	process.exit(1);
}

const ahora = new Date();
utimesSync(config, ahora, ahora);
console.log(`Watcher reiniciado (${config}). Espera unos segundos antes de recargar.`);
