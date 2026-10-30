import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { BLOG_POSTS } from './src/data/BLOG_POSTS.ts';
import { SITE_URL } from './src/data/site.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, 'src/@assets');
const rootDir = __dirname;

// Sitemap priority map — derivado del único origen de verdad (src/data/seo.ts).
// Permite que Google+otros crawlers prioricen, sin mantener 70 líneas duplicadas.
// Reglas simples: home=1, servicios=0.9, blog índice=0.7, contenido=0.6, legales=0.3
const SITEMAP_PRIORITY = /** @type {const} */ ({
	defaultBlog: 0.6,
	legal: 0.3,
	servicesHigh: 0.9,
	servicesMid: 0.85,
	localPages: 0.7,
	blogIndex: 0.7,
	home: 1.0,
});

const CHANGEFREQ_BY_PRIORITY = /** @type {Record<string, 'weekly' | 'monthly' | 'yearly'>} */ ({
	'1': 'weekly',
	'0.9': 'weekly',
	'0.85': 'monthly',
	'0.8': 'monthly',
	'0.7': 'monthly',
	'0.6': 'monthly',
	'0.3': 'yearly',
});

function priorityForPath(pathname) {
	if (pathname === '/') return SITEMAP_PRIORITY.home;
	if (pathname === '/servicios/' || pathname === '/empresas/') return SITEMAP_PRIORITY.servicesHigh;
	if (pathname === '/blog/') return SITEMAP_PRIORITY.blogIndex;
	// Los hubs de categoría (/blog/categoria/<área>/) son índices temáticos, no
	// artículos: misma prioridad que el índice del blog, no la de una guía.
	if (/^\/blog\/categoria\//.test(pathname)) return SITEMAP_PRIORITY.blogIndex;
	if (/^\/blog\//.test(pathname)) return SITEMAP_PRIORITY.defaultBlog;
	if (/^\/(aviso-legal|politica-de-privacidad|declaracion-de-accesibilidad)\//.test(pathname))
		return SITEMAP_PRIORITY.legal;
	if (/^\/(abogados-en-)/.test(pathname)) return SITEMAP_PRIORITY.localPages;
	if (/^\/(divorcios-separaciones|herencias-testamentos|despidos|indemnizaciones-trafico)\//.test(pathname))
		return SITEMAP_PRIORITY.servicesHigh;
	if (/^\/(accidente-laboral|derecho-civil|derecho-penal|cobro-deudas-impagos|reclamaciones-bancarias|consumo|incapacidad-permanente|nacionalidad-extranjeria|violencia-genero|compraventas-empresas|guarda-custodia|recursos-administrativos|urbanismo|seguros-agrarios|liquidacion-gananciales|complemento-paternidad-maternidad|ubicaciones)\//.test(pathname))
		return SITEMAP_PRIORITY.servicesMid;
	return SITEMAP_PRIORITY.servicesMid;
}

/**
 * Dev-server (solo `serve`): peticiones huérfanas a los módulos virtuales de un
 * `.astro` que ya no compila.
 *
 * Ocurre cuando se borra/renombra una página con `<style>`/`<script>` mientras el
 * dev-server sigue vivo: la pestaña abierta (o una navegación cacheada) continúa
 * pidiendo, por ejemplo,
 *   /src/pages/[game].astro?astro&type=style&index=0&lang.css
 * y vite-plugin-astro responde 500 + overlay con
 *   No cached compile metadata found for "..." (o "No Astro CSS at index N"
 *   cuando la página perdió un bloque de estilos).
 *
 * El cuerpo de esas URLs es solo el CSS/JS del propio módulo, así que devolvemos
 * un módulo vacío: la página se sigue pintando y el dev-server no se rompe. La
 * petición se anota en consola y cualquier otro error sigue su cauce normal.
 */
function devStaleAstroModules() {
	/** `?astro&type=style&index=0&lang.css` → captura `style` o `script`. */
	const ASTRO_VIRTUAL_QUERY = /(?:^|&)astro&type=(style|script)(?:&|$)/;
	/** Errores de vite-plugin-astro cuando el módulo padre no está compilado. */
	const STALE_MODULE_RE =
		/No cached compile metadata found|No Astro CSS at index|No script at index/;

	return {
		name: 'dev-stale-astro-modules',
		apply: 'serve',
		configureServer(server) {
			// El post-hook se registra después de los middlewares de Vite, así que este
			// manejador (4 argumentos) corre antes del errorMiddleware final.
			return () => {
				server.middlewares.use((error, req, res, next) => {
					const url = String(req.url ?? '');
					const [pathname, query = ''] = url.split('?');
					const mediaType = ASTRO_VIRTUAL_QUERY.exec(query)?.[1];
					const isAstroVirtualModule = pathname.endsWith('.astro');
					const isStale = STALE_MODULE_RE.test(error?.message ?? '');
					if (!error || !mediaType || !isAstroVirtualModule || !isStale) {
						next(error);
						return;
					}

					server.config.logger.warn(
						`módulo virtual huérfano ignorado: ${pathname} — ${error.message}`,
					);
					// Vite sirve estos módulos como `<script type="module">` en dev (el CSS
					// se transforma a JS que inyecta el <style>), así que el MIME tiene que
					// ser JS salvo que el consumidor pida CSS explícitamente. El cuerpo
					// vacío vale como módulo JS y como hoja de estilos.
					const wantsCss =
						String(req.headers?.accept ?? '').includes('text/css') ||
						/(?:^|&)direct(?:&|$)/.test(query);
					res.statusCode = 200;
					res.setHeader('Content-Type', wantsCss ? 'text/css' : 'text/javascript');
					res.setHeader('Cache-Control', 'no-store');
					res.end('');
				});
			};
		},
	};
}

export default defineConfig({
	site: SITE_URL,
	integrations: [
		sitemap({
			serialize(item) {
				const pathname = new URL(item.url).pathname;
				const priority = priorityForPath(pathname);
				item.priority = priority;
				item.changefreq = CHANGEFREQ_BY_PRIORITY[String(priority)] ?? 'monthly';
				// lastmod: solo entradas con fecha real de publicación (blog). Google
				// ignora lastmod poco fiables, así que el resto de páginas no lo llevan.
				const blogPost = BLOG_POSTS.find((p) => p.href === pathname);
				if (blogPost) item.lastmod = blogPost.date;
				return item;
			},
			filter: (page) => {
				const pathname = new URL(page).pathname;
				if (/^\/0\/?$/.test(pathname)) return false;
				if (/^\/404\/?$/.test(pathname)) return false;
				if (/^\/500\/?$/.test(pathname)) return false;
				if (/^\/_astro\//.test(pathname)) return false;
				if (/^\/api\//.test(pathname)) return false;
				if (/^\/buscar\/?$/.test(pathname)) return false;
				if (/^\/llms(?:\.txt|-full\.txt)\/?$/.test(pathname)) return false;
				return true;
			},
			entryLimit: 45000,
		}),
	],
	build: {
		/* El CSS del layout es una sola hoja compartida de ~121 KB (~23 KB en
		 * brotli) y es una petición que bloquea el render: el navegador no pinta
		 * nada hasta descargarla + parsearla, y las @font-face de dentro no se
		 * descubren hasta entonces (cadena HTML → CSS → fuentes).
		 *
		 * Inlinearla la saca de la ruta crítica: la auditoría "Solicitudes que
		 * bloquean el renderizado" y el "Árbol de dependencia de red" de
		 * Lighthouse desaparecen y el retraso de renderizado del LCP baja.
		 *
		 * ClientRouter convive con <style> inline: empareja los estilos entre
		 * navegaciones por su textContent (swap-functions.js:persistedHeadElement),
		 * así que no hay FOUC ni parpadeo al navegar. */
		inlineStylesheets: 'always',
	},
	image: {
		service: { entrypoint: 'astro/assets/services/sharp' },
	},
	vite: {
		plugins: [tailwindcss(), devStaleAstroModules()],
		resolve: {
			alias: {
				'@assets': assetsDir,
				'@astro-icons': path.resolve(__dirname, 'src/@astro-icons'),
				'@': path.resolve('./src'),
			},
		},
		server: {
			fs: {
				strict: false,
				allow: [rootDir, assetsDir],
			},
		},
	},
	output: 'static',
	trailingSlash: 'always',
	compressHTML: true,
	security: { checkOrigin: true },
	prefetch: {
		prefetchAll: false,
		defaultStrategy: 'hover',
	},
});
