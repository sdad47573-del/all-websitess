import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';

const appsDirectory = new URL('../../apps/', import.meta.url);

/** Una web y el nombre de su carpeta de assets, tal y como se listan en el monorepo. */
function assetsOf(app: string) {
	const directory = new URL(`${app}/src/assets/`, appsDirectory);
	try {
		readdirSync(directory);
	} catch {
		return null;
	}
	return directory;
}

const withAssets = readdirSync(appsDirectory, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => ({ app: entry.name, directory: assetsOf(entry.name) }))
	.filter((entry) => entry.directory !== null);

const appsDirectoryFor = (app: string) => new URL(`${app}/`, appsDirectory);

/** Nombres que no dicen nada de la imagen: no sirven ni para buscarla ni para leer el imports. */
const MEANINGLESS = /^(?:unnamed|imagen|image|img|foto|photo|picture|sin[-_ ]?nombre|captura|screenshot)[\s_-]*(?:\(\d+\)|\d+)?\.\w+$/i;

describe('los assets tienen nombre que los explica', () => {
	test('ningún asset se llama unnamed, imagen, img_1 o foto-1 a secas', () => {
		const offenders: string[] = [];
		for (const { app, directory } of withAssets) {
			const walk = (dir: URL, prefix = ''): void => {
				for (const entry of readdirSync(dir, { withFileTypes: true })) {
					if (entry.isDirectory()) {
						walk(new URL(`${entry.name}/`, dir), `${prefix}${entry.name}/`);
						continue;
					}
					if (MEANINGLESS.test(entry.name)) offenders.push(`${app}/src/assets/${prefix}${entry.name}`);
				}
			};
			walk(directory as URL);
		}
		expect(offenders).toEqual([]);
	});

	test('los nombres no dejan restos de paréntesis ni espacios, que rompen los imports', () => {
		const offenders: string[] = [];
		for (const { app, directory } of withAssets) {
			const walk = (dir: URL, prefix = ''): void => {
				for (const entry of readdirSync(dir, { withFileTypes: true })) {
					if (entry.isDirectory()) {
						walk(new URL(`${entry.name}/`, dir), `${prefix}${entry.name}/`);
						continue;
					}
					if (/[()\s]/.test(entry.name)) offenders.push(`${app}/src/assets/${prefix}${entry.name}`);
				}
			};
			walk(directory as URL);
		}
		expect(offenders).toEqual([]);
	});

	test('las fotos están en assets/fotos/, no sueltas en la raíz de assets', () => {
		const loose: string[] = [];
		for (const { app, directory } of withAssets) {
			for (const entry of readdirSync(directory as URL, { withFileTypes: true })) {
				if (entry.isFile() && /\.(?:jpe?g|png|webp|avif|gif)$/i.test(entry.name))
					loose.push(`${app}/src/assets/${entry.name}`);
			}
		}
		expect(loose).toEqual([]);
	});

	test('los imports del código apuntan a los ficheros que existen', () => {
		const missing: string[] = [];
		for (const { app } of withAssets) {
			const pages = new URL(`${app}/src/pages/`, appsDirectory);
			// Solo se leen ficheros: `src/pages` puede tener subcarpetas (`en/`, `dashboard/`) y
			// `readFileSync` sobre una de ellas lanzaba EISDIR, que abortaba la prueba entera.
			let files: string[] = [];
			try {
				files = readdirSync(pages, { withFileTypes: true })
					.filter((entry) => entry.isFile())
					.map((entry) => entry.name);
			} catch {
				continue;
			}
			for (const file of files) {
				const source = readFileSync(new URL(file, pages), 'utf8');
				for (const match of source.matchAll(/from\s+'(\.\.\/assets[^']+)'/g)) {
					// `../assets/…` en `src/pages/index.astro` resuelve a `src/assets/…`.
					const target = new URL(`src/${match[1].replace(/^\.\.\//, '')}`, appsDirectoryFor(app));
					try {
						readFileSync(target);
					} catch {
						missing.push(`${app}/src/pages/${file} importa ${match[1]}`);
					}
				}
			}
		}
		expect(missing).toEqual([]);
	});
});
