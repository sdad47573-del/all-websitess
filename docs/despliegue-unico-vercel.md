# Un solo proyecto de Vercel para todas las webs

Cada carpeta de `apps/` era su propio proyecto de Vercel (782 proyectos Astro conectados al mismo
repositorio). Este documento describe la otra vía: **un único proyecto de Vercel** que construye
todas las webs y las sirve bajo `/<app>/` en un solo dominio.

La configuración vive en el `vercel.json` de la raíz del repositorio y en
`scripts/vercel-single-project/`.

## Cómo funciona

1. `scripts/vercel-single-project/build.mjs` elige las apps empaquetables: toda carpeta de
   `apps/` que sea Astro, tenga script `build` y **no** use el adaptador de Vercel. Las demás se
   listan por pantalla al construir:
   - `cms` y `vigia-proyecto`: no son Astro.
   - `_sur-digital`: usa el adaptador de Vercel (SSR), no es una salida estática.
2. Las compila con turbo en tandas de 40, respetando el `dependsOn: ["^build"]` de `turbo.json`,
   así que los paquetes compartidos (`@astro-config`, `@astro-components`) se construyen antes.
3. Copia cada `apps/<app>/dist` a `dist-single/<app>/` y **reescribe sus rutas absolutas**
   (`scripts/vercel-single-project/rewrite.mjs`): los `href="/contacto"`, los `src` de los assets,
   los `srcset`, los `url(/…)` del CSS, las referencias a `/_astro/` de las islas y las URLs
   absolutas del origen de la app (canonical, `og:url`, sitemap, JSON-LD de `BUSINESS.siteUrl`).
   Es la misma reescritura que hace el proxy de `_sur-digital` en tiempo de petición, pero hecha
   una vez en el build: al servir ya no hay proxy, ni petición a otro despliegue, ni latencia.
4. Genera `dist-single/index.html`, un índice con un enlace a cada web.

Resultado: `https://<proyecto>.vercel.app/<app>/` sirve la web completa de esa app, con sus
assets, sus enlaces internos y su canonical apuntando a esa URL.

## Ponerlo en marcha en Vercel

1. **Import Project** del repositorio.
2. **Root Directory**: la raíz del repositorio (vacía). No `apps/<app>`: el `vercel.json` de la
   raíz es el que trae el comando de build y el directorio de salida.
3. **Framework Preset**: Other. El `vercel.json` ya fija `framework: null`, el comando de build y
   `outputDirectory: dist-single`; no hay nada que rellenar a mano.
4. Desplegar. El dominio del proyecto es el dominio de todas las webs.

El comando de instalación es `bun install --frozen-lockfile`, el mismo que usan los `netlify.toml`
de las apps.

## Variables de entorno

| Variable | Para qué |
|---|---|
| `APPS` | Lista separada por comas (`APPS=a-jalar,adrizale`) para construir solo un subconjunto. Sin ella se construyen todas. |
| `BUILD_CONCURRENCY` | Builds de turbo en paralelo. Por defecto `4`; las máquinas de Vercel no aguantan los 200 de `turbo.json`. |
| `PUBLIC_HOST` | Dominio público que se escribe en canonical, `og:url`, sitemap y JSON-LD. Se deduce de `VERCEL_PROJECT_PRODUCTION_URL` y, en su defecto, de `VERCEL_URL`; en local es `http://localhost:4321`. |

`APPS` es la salida cuando el build completo no cabe: Vercel corta a los **45 minutos** por
despliegue y el conjunto entero ronda los 3,4 GB de salida. Conviene medir con el proyecto real
antes de dar por hecho que las 780 empaquetables caben de una vez.

## Desarrollar y comprobar en local

```sh
# todas las apps (tarda; para probar, usa APPS)
node scripts/vercel-single-project/build.mjs

# dos apps, con el dominio local en las URLs absolutas
APPS=28-soul-food,restaurante-meson-don-paco PUBLIC_HOST=http://localhost:4321 \
  node scripts/vercel-single-project/build.mjs

# servirlas como lo hará Vercel
node scripts/vercel-single-project/serve.mjs
# http://localhost:4321/28-soul-food/
```

Los atajos del `package.json` de la raíz son `bun run build:single` y `bun run preview:single`.

## Qué cambia para las webs

- **La URL pública** pasa de `https://<app>.vercel.app/` a
  `https://<proyecto>.vercel.app/<app>/`. El canonical, el `og:url`, el sitemap y el JSON-LD se
  reescriben en el build para apuntar a la nueva URL, así que no quedan señales de SEO apuntando
  al dominio anterior.
- **Los proyectos individuales de Vercel siguen funcionando** mientras existan: este despliegue no
  toca sus `vercel.json` ni su `ignoreCommand`. Se pueden apagar uno a uno cuando la web ya se
  sirva desde el proyecto único.
- **No hace falta añadir dominios al proyecto** para que las webs se vean: todo cuelga de una
  ruta. Si un cliente tiene dominio propio, se añade en **Settings → Domains** con la reescritura
  al prefijo de su app.

## Qué NO cubre

- **Apps SSR o con servidor**: `_sur-digital` y las que tienen API propia (`cms`,
  `vigia-proyecto`, y las Vite + React con `server/` que menciona `docs/deploy.md`). Una salida
  estática no puede publicar su backend.
- **Dominio propio por cliente en un solo proyecto**: Vercel aplica los `rewrites` de un proyecto
  a su propio dominio. Para servir cada web en su dominio con rutas en la raíz harían falta reglas
  por `Host` y un dominio comodín, que es justo lo que descarta `docs/subdominios-clientes.md`.
- **Los límites de Vercel**: 45 minutos de build, 2048 rutas por despliegue y el límite de ficheros
  de la CLI. Un despliegue de 782 webs con sus imágenes es grande; si el build se pasa de tiempo,
  `APPS` permite dividir el portfolio en varios proyectos sin volver al esquema de uno por web.
