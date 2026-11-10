// Inlinea el CSS de Google Fonts en el <head> de las webs de clientes.
//
// Cada web de src/apps enlaza a fonts.googleapis.com/css2 y espera a que llegue
// ese CSS (otro origen, otra conexión TLS) para conocer las @font-face. Hasta
// entonces el navegador pinta con la fuente de respaldo y, cuando llega, cambia
// a la real: ese es el parpadeo al entrar en una página. Con el CSS incrustado
// el navegador conoce las @font-face en el primer parseo del <head> y empieza a
// descargar los woff2 (gstatic, ya con preconnect) mientras pinta.
//
// El CSS se guarda en memoria y en disco (node_modules/.cache): los 1.409
// enlaces de src/apps usan 477 URLs distintas. Si la red falla se deja el
// <link> original, de modo que la web sigue funcionando igual que antes.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Plugin } from "vite";

const CACHE_DIR = join(process.cwd(), "node_modules", ".cache", "sur-digital-fonts");
// Google solo sirve woff2 (y los rangos unicode) a navegadores modernos.
const USER_AGENT =
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
const LINK_RE = /<link\b[^>]*fonts\.googleapis\.com\/css2[^>]*>/g;
const HREF_RE = /href="([^"]+)"/;
// Preconnect a fonts.googleapis.com, para colgar detrás el de gstatic.
const PRECONNECT_RE = /<link\b[^>]*rel="preconnect"[^>]*fonts\.googleapis\.com[\s\S]*?>/;

const memory = new Map<string, string | null>();
const failed = new Set<string>();

const cachePath = (url: string) =>
	join(CACHE_DIR, `${createHash("sha1").update(url).digest("hex")}.css`);

const readCache = (url: string) => {
	try {
		const file = cachePath(url);
		return existsSync(file) ? readFileSync(file, "utf8") : null;
	} catch {
		return null;
	}
};

const writeCache = (url: string, css: string) => {
	try {
		mkdirSync(CACHE_DIR, { recursive: true });
		writeFileSync(cachePath(url), css);
	} catch {
		// Sin caché en disco se sigue sirviendo desde memoria.
	}
};

const fontCss = async (url: string) => {
	if (memory.has(url)) return memory.get(url) ?? null;
	const cached = readCache(url);
	if (cached) {
		memory.set(url, cached);
		return cached;
	}
	try {
		const response = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		const css = await response.text();
		if (!css.includes("@font-face")) throw new Error("respuesta sin @font-face");
		memory.set(url, css);
		writeCache(url, css);
		return css;
	} catch (error) {
		if (!failed.has(url)) {
			failed.add(url);
			console.warn(
				`[inline-font-css] no se pudo leer ${url}: ${(error as Error).message}. Se deja el <link>.`,
			);
		}
		memory.set(url, null);
		return null;
	}
};

export const inlineFontCss = (): Plugin => ({
	name: "sur-digital:inline-font-css",
	// Antes de que Astro compile el .astro, para poder sustituir el <link>.
	enforce: "pre",
	async transform(code, id) {
		if (!/\.(astro|html)$/.test(id.split("?")[0] ?? "")) return;
		if (!code.includes("fonts.googleapis.com/css2")) return;

		let out = code;
		for (const tag of code.match(LINK_RE) ?? []) {
			const href = tag.match(HREF_RE)?.[1];
			if (!href) continue;
			const css = await fontCss(href);
			if (css) out = out.replace(tag, `<style is:inline>\n${css}\n</style>`);
		}

		// Los woff2 se sirven desde gstatic: si la página no lo precargaba, se añade.
		if (!code.includes("fonts.gstatic.com")) {
			out = out.replace(
				PRECONNECT_RE,
				'$&\n\t\t<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
			);
		}

		return out === code ? undefined : { code: out, map: null };
	},
});
