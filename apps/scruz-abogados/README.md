# ⚖️ Scruz Abogados — Web del despacho (sergiocruzchacon.vercel.app)

Sitio estático [Astro](https://astro.build) del despacho de abogados Scruz Abogados
(Lucena, Córdoba y Málaga). Incluye SEO técnico completo (schema.org, sitemap,
OpenGraph), blog jurídico, buscador interno y utilidades de QA.

## 🚀 Comandos

| Comando | Acción |
| :--- | :--- |
| `bun install` | Instala dependencias |
| `bun dev` | Servidor local en `localhost:4321` |
| `bun run build` | Build de producción + poda de fuentes legacy (`scripts/prune-assets.mjs`) |
| `bun run qa` | Build + chequeo de enlaces rotos y JSON-LD visible, grafo de enlaces internos, títulos/descripciones duplicados y pesos (`scripts/check-links.mjs`, `check-link-graph.mjs`, `check-titles.mjs`, `audit-perf.mjs`) |
| `bun run indexnow:dry` | Muestra qué URLs se enviarían a IndexNow (sin llamar a la API) |
| `bun run indexnow` | Envía el sitemap construido a IndexNow (Bing, Yandex, Seznam, Naver). **Ejecutar después de desplegar** |
| `bun run indexnow:live` | Igual, pero solo si la clave ya está publicada en el host (para automatizar) |
| `bun run notify` | `build` + `indexnow:live`. Es lo que corre en `.github/workflows/indexnow.yml` tras cada deploy |
| `bun run check` | `astro check` + `typecheck` + `lint` (ver nota sobre `@astro-components`) |
| `bun preview` | Previsualizar el build |
| `bun run clean` | Limpia cachés stale de Vite/Astro (`.astro`, `dist`, `node_modules/.vite`) |
| `bun run clean:hard` | Como `clean` + `node_modules/.astro` (cuando Astro cambia de versión) |
| `bun run dev:clean` | `clean` + `astro dev` (fix en un comando) |
| `bun run fix:cache` | Alias de `clean` — el que recordarás cuando veas el error de metadata |

## 🗂️ Estructura clave

```
src/
├── data/
│   ├── seo.ts          # Fuente única de SEO: NAP, schema base, ROUTE_DEFAULTS (title/description por ruta)
│   ├── SERVICES.ts     # Catálogo de servicios (sitemap, home, /servicios/, buscador)
│   ├── BLOG_POSTS.ts   # Artículos del blog (índice + sección de la home)
│   ├── BLOG_CATEGORIES.ts # Hubs de categoría del blog (derivados de BLOG_POSTS)
│   ├── FAQ.ts          # Preguntas frecuentes (/faq/ + home)
│   └── UBICACIONES.ts  # Oficinas reales
├── pages/              # Landings de servicio, ubicaciones, blog (50 artículos), legal
├── layouts/CustomLayout.astro  # SEO head centralizado (canonical, JSON-LD, robots)
└── @astro-components/  # Tema vendido de terceros: solo se consumen Image, getImage,
                        # Layout y QR. NO editar (es código externo); la única
                        # excepción fue borrar su Topbar, que no se renderizaba
                        # (el del sitio es src/components/Topbar1.astro y el Layout
                        # lo recibe por prop)
```

## 🌗 Modo oscuro ("tinta nocturna")

- **Interruptor**: en el topbar (escritorio y panel móvil), un botón con `aria-pressed` que alterna `<html data-theme>`. La preferencia se guarda en `localStorage['scruz-theme']` (`dark`/`light`); sin preferencia se respeta `prefers-color-scheme`. El HTML se sirve siempre en claro, así que **sin JS la web se ve como siempre**.
- **Sin destello**: un script `is:inline` del `<head>` (`src/layouts/CustomLayout.astro`) aplica el tema antes del primer pintado y sincroniza `<meta name="theme-color">`. Como el ClientRouter reemplaza los atributos de `<html>` por los del documento entrante en cada navegación SPA, ese mismo script reaplica el tema en `astro:after-swap`.
- **Tema**: dos bloques `@plugin "daisyui/theme"` en `src/styles/index.css` (`theme` claro —el default— y `theme-dark`). En oscuro `primary` es un azul profundo porque se usa como **fondo** (bandas, tarjetas CTA, `btn-primary`) con texto blanco; cuando `primary` actúa como **tinta** (enlaces, iconos, eyebrows, drop-caps) se consume `--scruz-primary-ink`, que en claro vale `#4b6e9f` (idéntico al primary claro) y en oscuro un azul aclarado. Así los cientos de `text-primary` no necesitan variantes `dark:` una a una.
- **Remapeos**: la sección "Unificación de la paleta heredada" de `index.css` mezcla contra `var(--color-base-100)` en lugar del literal `white`, de modo que `bg-white`, `bg-gray-50`, `bg-blue-50`, `bg-green-50`… y los gradientes `from/to/via-white` heredan la escala invertida. Las utilidades `dark:` siguen el atributo `<html data-theme>` (`@custom-variant dark`), no la media query, para no ignorar la elección manual del usuario.
- **QA de contraste**: `node scripts/audit-contrast.mjs --theme=dark` audita el tema oscuro (informe en `contrast-report-dark.md`; `--theme=light` es el valor por defecto). Los casos marcados como `(imagen)` son ruido del muestreo sobre fotos.

## 🖼️ Imágenes (AVIF + WebP)

- **Un solo componente**: el `<Image>` que exporta `@astro-components` (23 usos) renderiza un `<picture>` con una `<source type="image/avif">` y el `<img>` webp de siempre como respaldo. Los navegadores sin AVIF no cambian de formato ni de peso, y las páginas no se tocan (`formats`/`fallbackFormat` son props opcionales).
- **`display: contents` en el `<picture>`**: sin esto el wrapper (inline) cambia el contexto donde la imagen es hija de un flex/grid o lleva `absolute inset-0` (hero editorial, iconos de las tarjetas de servicio, QR). Con `contents` el `<img>` sigue siendo la caja de layout.
- **SVG y GIF se sirven tal cual** (`<img>` sin `<source>`): un SVG no se rasteriza y un GIF animado perdería el movimiento. Además, un `<source type="image/avif">` apuntando al propio svg rompería la imagen en los navegadores con AVIF.
- **Números medidos** (build de sep 2026, sharp 0.35, comparando cada variante con su webp gemelo):
  - Por imagen: `989d…` (trayectoria) 102,8 → 41,0 KB · `BANNER-SERVICIOS` 58,9 → 25,0 KB · `9` (ubicaciones) 272 → 166 KB · `google` 32,2 → 13,0 KB · `hero-pj` (recorte con alfa, 412 px) 31,3 → 17,9 KB.
  - Por página (lo que descarga un navegador moderno): trayectoria 141 → 80 KB · ubicaciones 311 → 205 KB · servicios 98 → 64 KB · home 166 → 137 KB.
  - Calidad (PSNR frente al mismo original): a igual peso el avif queda ~1-2 dB por encima del webp; a igual calidad ocupa ~35-45 %. En recortes con transparencia la diferencia es mucho mayor (hero: 23 KB avif / 40,7 dB frente a 104 KB webp / 27,2 dB). Los iconos de 1-2 KB empatan (±5 %).
- **Calidad**: el avif va sin `quality` explícita (la de sharp, 50) y el webp conserva la de Astro (80), así que el respaldo queda byte a byte como estaba. El hero tiene su propio pipeline medido (`heroImages.ts`: q65 avif / q72 webp).
- **⚠️ No leas propiedades del import**: el Proxy de Astro marca la imagen como "usada fuera del pipeline" en cuanto se lee cualquier propiedad, y el build conserva el archivo original sin referenciar (+353 KB de webp duplicados). Si hace falta el metadato, usa el clon: `const meta = src.clone ?? src`. Vale igual para `{ ...img }` en los datos: el spread lee todas las propiedades y el original acaba en `dist/_astro` sin que ninguna página lo referencie. Pasa el objeto metadata entero a `<Image>`.
- **Coste en el deploy**: `dist/_astro` guarda los dos formatos (+~290 KB), pero cada cliente descarga solo uno. El HTML suma ~60 bytes por imagen.
- **Un import se resuelve siempre, aunque su imagen no se pinte**: tener `img` en las 20 entradas de `SERVICES.ts` obligaba a importar 13 imágenes y las 9 que no salen en la home se emitían igual (PNG huérfanos en `dist`, ~112 KB). Ahora `SERVICES.ts` es solo texto y los 4 iconos de las tarjetas del hero viven en `data.ts` (`HERO_SERVICE_ICONS`), que es quien las monta. Mismo motivo en `@astro-icons`: el barril importa todos los iconos que exporta, así que los 23 sin usar (6 con PNG propio de la plantilla de agencia) se evaluaban en cada build; quedan los 6 que usa la web.

## 🔍 SEO: cómo se trabaja en este repo

- **Una fuente de verdad**: los títulos/descripciones viven en `ROUTE_DEFAULTS` (`src/data/seo.ts`) y las páginas los sobrescriben con props exactas. Al añadir una página nueva hay que tocarla en: página `.astro` + `seo.ts` + `astro.config.mjs` (sitemap) + (si es servicio) `SERVICES.ts` + (si es artículo) `BLOG_POSTS.ts`.
- **Documentación SEO**: todo vive en **`SEO.md`** — estado verificado del sitio, cómo se indexa (GSC + IndexNow), pendientes operativos por orden de impacto, datos de partida de GSC/SERPs (sep 2026) y el plan de contenido.
- **Datos crudos de Search Console**: `google_search/*.csv` (exporte del 3 sep 2026).
- **QA del build**: `bun run qa` valida enlaces rotos, títulos/descripciones únicos, JSON-LD (con comprobación de que las FAQ marcadas se leen en la página y de que la etiqueta de cada artículo coincide con su categoría en `BLOG_POSTS.ts`), el grafo de enlaces internos (huérfanas, profundidad de clic, rutas no canónicas y catálogo enlazado desde `/servicios/`) y audita pesos.
- **Páginas nuevas**: revisa `scripts/check-links.mjs` (añade JSON-LD inválido al QA) y actualiza `BLOG_POSTS.ts` si es un artículo.

## 🤖 Descubribilidad por IA (ChatGPT, Perplexity, Gemini, AI Overviews)

- **`robots.txt` permite los crawlers de IA** (GPTBot, OAI-SearchBot, ChatGPT-User,
  ClaudeBot/SearchBot, PerplexityBot, Google-Extended, CCBot…) para que los
  buscadores de IA puedan leer y citar el contenido.
- **`/llms.txt`** (estándar [llmstxt.org](https://llmstxt.org)): guía estructurada
  de páginas para LLMs, **generada en el build** desde `SERVICES.ts` y
  `BLOG_POSTS.ts` (`src/pages/llms.txt.ts`) — nunca se desincroniza del contenido.
- Schema semántico completo (`LegalService`, `Article`, `FAQPage`, `WebSite` +
  `SearchAction`, `BreadcrumbList`, `Person`) en `src/data/seo.ts`.

## 📡 Google Search Console API (CLI local seguro)

Cliente OAuth 2.0 local para consultar Search Analytics, inspeccionar URLs,
listar y **enviar sitemaps**. No expone credenciales en la web ni en Vercel.

### Configuración inicial

1. En Google Cloud Console: habilita **Google Search Console API**.
2. Crea un cliente OAuth 2.0 de tipo **Desktop app** con callback
   `http://127.0.0.1:43117/oauth2callback` (sin barra final).
3. Copia `.env.example` a `.env` y rellena `GOOGLE_SEARCH_CONSOLE_CLIENT_ID` y
   `GOOGLE_SEARCH_CONSOLE_CLIENT_SECRET`. No subas `.env`.
4. Autoriza una vez:
   ```sh
   bun run search-console:auth
   ```
5. Uso:
   ```sh
   bun run search-console:performance -- --days 28 --dimension query
   bun run search-console:inspect -- https://sergiocruzchacon.vercel.app/consumo/
   bun run search-console:inspect-new            # 4 páginas nuevas de septiembre
   bun run search-console:sitemaps               # listar
   bun run search-console:sitemaps -- submit --feed https://sergiocruzchacon.vercel.app/sitemap-index.xml
   ```

- El scope por defecto es de **escritura** (`GOOGLE_SEARCH_CONSOLE_SCOPE` configurable) porque el envío de sitemaps lo exige; antes era solo lectura.
- Seguridad: callback en `127.0.0.1`, `state` anti-CSRF y PKCE (S256), token con permisos restringidos fuera del repo.
- La cuenta debe tener acceso a la propiedad en Search Console (`GOOGLE_SEARCH_CONSOLE_PROPERTY` opcional, p. ej. `sc-domain:ejemplo.es`).

### Verificar la propiedad (una sola vez, en la UI)

1. [search.google.com/search-console](https://search.google.com/search-console) → **Añadir propiedad** → **Prefijo de URL** (no «Dominio»: para un `*.vercel.app` no se controla el DNS, así que la verificación por DNS no es posible).
2. Pega `https://sergiocruzchacon.vercel.app/` con la barra final, idéntico a `GOOGLE_SEARCH_CONSOLE_PROPERTY`.
3. Verificación por **archivo HTML**: `public/googleb66e6f1e77552479.html` ya está desplegado y sirve el contenido correcto (`google-site-verification: googleb66e6f1e77552479.html`). Si Google lo rechazara, usa el método «etiqueta HTML» copiando la meta en `CustomLayout.astro`.
4. Autoriza con la **misma cuenta de Google** que tiene permiso de **Propietario** o **Acceso completo** sobre la propiedad: la API rechaza el envío de sitemaps con permisos menores.

### Dos avisos que ahorran una hora de dudas

- Si el cliente OAuth se queda en estado **Testing**, Google caduca el *refresh token* **a los 7 días** y hay que reautorizar. Para uso propio basta con publicar la app (**Publishing status → In production**): aparece un aviso de «app no verificada», pero el token deja de caducar cada semana.
- `.env` hace falta **siempre** (el client id/secret también se usan para renovar el token). Lo que se guarda fuera del repo es el *refresh token* (`%APPDATA%\scruz-abogados\search-console-token.json`), para no repetir el flujo del navegador. Bun carga `.env` solo; si lo ejecutas con `node`, no.

## 📤 Enviar el sitio a los buscadores (indexación)

El sitio está construido para ser indexable sin trabajo extra en cada página: 82
páginas con `robots: index, follow`, canonical absoluta, sin huérfanas (todas
reciben al menos 2 enlaces internos y están en el sitemap), `robots.txt` con la
`Sitemap:` declarada y `/buscar/` fuera del sitemap porque es `noindex`.

Falta el paso operativo: decirle a cada buscador que existen.

### IndexNow — Bing, Yandex, Seznam y Naver

```sh
bun run indexnow:dry   # previsualiza las 94 URLs
bun run indexnow       # las envía
```

- **Google no participa en IndexNow.** No existe un ping genérico para Google
  (el endpoint de ping de sitemaps se retiró en 2023): su vía es Search Console,
  con los comandos de la sección anterior.
- La clave vive en `public/<clave>.txt` y el protocolo exige que sea accesible en
  `https://<host>/<clave>.txt` con la clave dentro. Ese fichero es la **única
  fuente de verdad**: `scripts/indexnow.mjs` la autodetecta (no hay que
  duplicarla en el script ni en `.env`). Para rotarla, borra el fichero viejo y
  crea `public/<nueva-clave>.txt` con la clave dentro.
- **Después del deploy, no antes:** IndexNow valida la clave descargando ese
  fichero del host, y en producción no existe hasta que el deploy está publicado
  (un `postbuild` fallaría siempre en el primer despliegue).
- **Para automatizarlo está `--if-live`** (`bun run indexnow:live` o
  `bun run notify`): antes de enviar comprueba que `https://<host>/<clave>.txt`
  devuelve la clave y, si no, sale con código 0 diciendo que aún no toca. Eso
  permite conectarlo a un pipeline sin riesgo de romper el build, que es lo que
  hace `.github/workflows/indexnow.yml`, disparado por `deployment_status` de
  Vercel (o a mano con `bun run notify`).
- El host y las URLs salen del propio `dist/sitemap-0.xml`, así que lo que se
  envía es exactamente el dominio al que el build canonicaliza.

### Google Search Console — la vía de Google

1. `bun run search-console:sitemaps -- submit --feed https://sergiocruzchacon.vercel.app/sitemap-index.xml`
2. `bun run search-console:inspect -- <url>` para pedir la indexación de una URL
   concreta y ver su estado (verdict, canónica elegida por Google, última visita).
3. `bun run search-console:performance -- --days 28 --dimension page` para ver qué
   páginas reciben impresiones y cuáles siguen sin indexarse.

## 🛠️ Troubleshooting — `No cached compile metadata found for ...?astro&type=style...`

Error típico de **Vite dev-server stale** (no de tu código). Pasa cuando borras/renombras una `.astro` con bloque `<style>` o `style lang=` mientras `bun run dev` sigue corriendo: el navegador sigue pidiendo el viejo módulo virtual `?astro&type=style&index=0&lang.css` y Astro aún no ha recompilado el módulo padre.

**Ya no rompe la página:** `devStaleAstroModules()` (en `astro.config.mjs`) intercepta esas peticiones huérfanas de módulos virtuales (`?astro&type=style|script`) y responde un módulo vacío, así que el CSS/JS que falta no tira el dev-server ni abre el overlay. La petición queda anotada como `[WARN] módulo virtual huérfano ignorado: /src/pages/[game].astro`.

**Fix en 10s (elige uno):**
```sh
bun run fix:cache   # o bun run clean
bun run dev         # o bun run dev:clean (limpia y arranca)
```
Si el error persiste: `Ctrl+Shift+R` (hard refresh) y cierra pestañas que aún apunten a la ruta vieja (ej. `/[game]`). En Windows también puedes hacer manualmente:
```sh
rm -rf node_modules/.vite .astro dist
```
**Prevención:** para Astro 6, para el dev-server (`Ctrl+C`) antes de borrar/renombrar páginas con `<style>`. Esta limpieza ya está cableada en `scripts/clean.mjs` (cross-platform, no necesita `rm` POSIX).

## ⚠️ Notas

- `bun run check` pasa **limpio** (165 archivos, 0 errores). `src/@astro-components/` es el tema vendido de terceros: no se edita, pero ya no aporta errores de tipos al chequeo. De hecho solo se consumen `Image`, `getImage`, `Layout` y `QR`: su `Topbar` era código muerto (nadie lo importaba, porque `Layout` recibe el del repo por prop) y se eliminó junto con su export en `index.ts`.
- **Assets**: `src/@assets/` solo contiene lo que alguna página importa (no se usa `import.meta.glob`). Para saber si una imagen sigue viva, busca su nombre con extensión en `src/`, `scripts/` y los `.md`: si no aparece en ninguno, es candidata a borrar. Al revés también vale: los nombres llevan la extensión siempre, así que un `grep` del tallo (`hero`) da falsos positivos con otros archivos del mismo directorio. Las fotos y los fondos se guardan en `.webp` (calidad 82 para originales JPEG, 90 para los que llevan transparencia): al añadir una imagen, conviértela antes de commitear (`sharp` ya es dependencia).
- **`public/` tiene archivos sin enlaces a propósito**, no los borres por no ver referencias: el `.txt` de IndexNow y el `.html` de verificación de Google (los piden esos servicios), `screenshots/` (capturas de referencia del TODO; `prune-assets.mjs` las deja fuera del deploy) y `fonts/figtree/` (fuentes descartadas, se recortan del build pero se conservan como fuente).
- **Números para no repetir cifras viejas**: 96 páginas construidas (95 rutas + `404.html`, con los 10 hubs de `/blog/categoria/`) · 94 URLs en el sitemap · 50 artículos de blog · 96 bloques JSON-LD. Si cambian, actualiza también `SEO.md`.
- El sitemap se genera con prioridades/frecuencias en `astro.config.mjs` (Google ignora estos campos, otros crawlers no).
