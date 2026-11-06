/**
 * Generación de la miniatura Open Graph desde el CMS.
 *
 * Reutiliza `scripts/lib/og-card.mjs` para que la tarjeta del panel y la del CLI
 * sean idénticas. Solo se escriben ficheros nuevos dentro de `public/` de la web.
 */
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
	type OgData,
	buildOgSvg,
	findSharp,
	generateOgCard,
	readOgData,
} from "../../../scripts/lib/og-card.mjs";
import { DEFAULT_APPS_DIR } from "./paths";

const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]*$/;

export { buildOgSvg, readOgData };
export type { OgData };

export interface GeneratedOg {
	width: number;
	height: number;
	size: number;
}

export async function generateOgImage(
	slug: string,
	appsDir = DEFAULT_APPS_DIR,
): Promise<GeneratedOg> {
	if (!SLUG_PATTERN.test(slug)) throw new Error("Slug no válido");

	const appRoot = join(appsDir, slug);
	if (!existsSync(join(appRoot, "src/data/site.ts"))) {
		throw new Error("Esta web no tiene src/data/site.ts");
	}

	const data = readOgData(appRoot);
	if (!data.name) {
		throw new Error("No se ha encontrado el nombre del negocio en src/data/site.ts");
	}

	// sharp es una herramienta del repo, no de la web: se busca en las apps reales
	// aunque `appsDir` apunte a un directorio de pruebas.
	const sharp = findSharp(DEFAULT_APPS_DIR);
	if (!sharp) {
		throw new Error("No se encuentra sharp. Ejecuta `pnpm install` en la raíz y reintenta.");
	}

	const info = await generateOgCard({ sharp, appRoot, data });
	return { width: info.width, height: info.height, size: info.size };
}
