# Despliegue en Vercel

## El problema

Cada carpeta de `apps/` es su propio proyecto de Vercel, y los 144 están conectados a **este
mismo repositorio**. Un push llega a los 144 a la vez, así que un commit que toca una sola web
lanza 144 builds: 143 no cambian de código pero instalan dependencias y ejecutan `astro build`
enteramente.

Con un plan Hobby (1 build concurrente y 100 despliegues al día) eso agota la cuota y, además,
los builds inútiles encolan por delante de los que sí importan.

## La solución: `ignoreCommand`

Cada app tiene un `vercel.json` con:

```json
{
	"$schema": "https://openapi.vercel.sh/vercel.json",
	"ignoreCommand": "node ../../scripts/vercel-ignore-build.mjs"
}
```

Es el **Ignored Build Step** de Vercel. Antes de instalar nada, Vercel ejecuta ese script, que
compara los ficheros que cambiaron el commit con lo que necesita este proyecto. Si no toca esta
app ni lo que comparte con el resto, cancela el build.

El script **construye** cuando cambia cualquiera de estos sitios:

- `apps/<esta app>/`: su propio código.
- Los paquetes del workspace de los que depende (`workspace:*` en su `package.json`), sobre todo
  `packages/@astro-config` y `packages/@astro-components`, que usa casi todas las apps. Se
  resuelven por nombre a su carpeta real (`@app-server` → `packages/app-server`), porque comparar
  contra el nombre del paquete no encuentra sus ficheros.
- Configuración global del repo: `package.json`, `turbo.json`, `tsconfig.base.json` y `.npmrc`.
- El lockfile, pero solo si cambia algo que esta app use de verdad (ver abajo).

Y **se salta** el resto: `README`, `docs/`, `scripts/`, u otra app que no sea esta.

### El lockfile no es un fichero global

`bun.lock` está en la raíz y lo comparten las apps, así que tratarlo como "cambio global"
disparaba todas las builds cada vez que se tocaba. Y se toca constantemente: añadir una
dependencia a una app reescribe el fichero entero, y en ese reescrito hay cientos de entradas que
cambian de versión por *hoisting* (`strip-ansi`, `wrap-ansi` y compañía se mueven entre el nivel
raíz y el anidado) sin que ninguna app cambie de código.

Cuando el diff toca `bun.lock`, el script compara el lockfile publicado con el nuevo y solo
construye si cambia algo que esta app usa:

- El bloque de dependencias declaradas de esta app dentro del lockfile.
- La entrada resuelta de alguna dependencia **declarada** por la app, o por los paquetes del
  workspace que la app importa. Se miran las declaradas y no todo el árbol: una transitiva que se
  reordena no cambia el código que la app compila, y es justo el ruido que disparaba las builds.
- `overrides` del lockfile (las `resolutions` de la raíz), que fuerzan versiones en todo el grafo.

Medición del caso real que motivó esto: un `bun install` de una sola app reescribió 485 líneas del
lockfile y reconstruyó todos los proyectos de Vercel. Con esta regla no construye ninguno.

Un cambio real de dependencias pasa siempre por el `package.json` de la app, y eso ya reconstruye
por la vía de arriba. Si el lockfile no se puede leer o comparar, se construye: un fallo del
filtro nunca debe dejar una web sin publicar.

### Los códigos de salida están invertidos

En el Ignored Build Step, `0` significa **saltar** el build y `>= 1` significa **construir**. Es lo
contrario de la convención de Unix. Un script escrito al revés se traga todos los commits sin
avisar, y el síntoma es "Vercel no despliega nada" sin ningún error visible.

### Contra qué commit se compara

Se usa `VERCEL_GIT_PREVIOUS_SHA`, el commit del último despliegue de ese proyecto: es justo lo que
hay publicado y, por tanto, lo que hay que recompilar.

### Vercel clona sin historial: el SHA anterior hay que traerlo

Este es el punto que hizo que las 145 apps construyeran en cada push. Vercel siempre pone
`VERCEL_GIT_PREVIOUS_SHA` en el entorno, pero su clon viene con `--depth` y **casi nunca incluye
ese commit**. Si el script lo descarta por no encontrarlo en el clon, se queda sin base y recurre a
la ventana de commits, que incluye commits ya publicados.

El caso concreto: el commit que creó los 144 `apps/*/vercel.json` se colaba en esa ventana, y como
cada `vercel.json` vive dentro de su app, cada proyecto se veía "modificado" y construía.

Por eso el script **descarga el SHA antes de renunciar**, con dos intentos:

1. `git fetch --depth=10 origin <sha>`, que pide ese commit concreto.
2. `git fetch --deepen=10 origin <ref>`, que profundiza la ventana del branch por si el clon no lo
   trajo de origen.

Solo si ambos fallan (sin red, remoto caído) se usa la ventana de commits, que construye de más
pero nunca deja una web sin publicar.

Un fallo de git también construye: tratar un error como "sin cambios" publicaría websites
desactualizadas en silencio, que es el peor fallo posible en un filtro de despliegue.

### Cómo diagnosticar una build que no debería haber salido

El script imprime siempre la base usada, antes del veredicto:

```
base: 43e23b9… (VERCEL_GIT_PREVIOUS_SHA)
base: 43e23b9… (VERCEL_GIT_PREVIOUS_SHA (descargado))
base: HEAD~10 (ventana de commits (sin VERCEL_GIT_PREVIOUS_SHA))
```

- Si dice **ventana de commits**, el filtro no sabe qué hay publicado y construye de más. Es el
  estado en el que se está pagando el peaje de las 144 builds: hay que mirar por qué falla el
  `fetch` (red o remoto).
- Si dice **VERCEL_GIT_PREVIOUS_SHA**, el diff es exactamente lo publicado, así que un build
  disparado significa que ese diff toca la app: mirar los ficheros que lista con `--explain`.

Los logs de un build están en `vercel inspect <url-del-deployment> --logs`.

## Comprobarlo en local

El script se puede ejecutar tal cual lo ejecutará Vercel:

```sh
# desde la raíz del repo, simulando el proyecto de una app
VERCEL_PROJECT_ROOT_DIRECTORY=apps/a-fuego-braseria node scripts/vercel-ignore-build.mjs

# con el detalle de los ficheros que cambiaron
VERCEL_PROJECT_ROOT_DIRECTORY=apps/a-fuego-braseria node scripts/vercel-ignore-build.mjs --explain
```

El código de salida es el veredicto: `1` construye, `0` se salta.

## Añadir el filtro a una app nueva

Al crear una app hay que darle su `vercel.json`. Para hacerlo todas de una vez, o para refrescar
los ficheros existentes tras cambiar el comando:

```sh
node scripts/add-vercel-ignore-command.mjs --dry   # ver qué haría
node scripts/add-vercel-ignore-command.mjs         # aplicarlo
```

El generador **no sobrescribe** un `vercel.json` que ya tenga otras claves (`framework`,
`rewrites`, `buildCommand`...), porque eso podría romper el despliegue de ese proyecto: lo avisa
y lo deja intacto.

## Qué NO cubre

- **Vercel cuenta el build cancelado como despliegue.** El Ignored Build Step corre después de
  reservar hueco de build, así que sigue consumiendo cuota, aunque evita instalar dependencias y
  compilar. Para que el salto no cuente, Vercel ofrece "Skipping Unaffected Projects", que
  decide **antes** de reservar el hueco, pero se activa desde el panel de cada proyecto y solo
  funciona con repositorios de workspaces.
- **Un `vercel.json` por app es mucho fichero**, 144 en total. Es la forma que tiene Vercel de
  configuración por proyecto sin depender del panel, y se genera con un script, así que mantenerlo
  no cuesta.
- Si una web depende de algo que no está en la lista global y no es un paquete del workspace, no se
  detectará el cambio. Al añadir un paquete compartido hay que añadirlo a `GLOBAL_PATHS` en
  `scripts/vercel-ignore-build.mjs`. Esto no aplica al lockfile: una subida de versión de una
  dependencia declarada ya reconstruye a las apps que la declaran.
- Una dependencia transitiva que cambia de versión sin que ninguna app cambie su `package.json`
  no reconstruye nada. Es deliberado: el artefacto publicado sigue siendo coherente con el código
  de la app. Para forzar una republicación, cualquier cambio en la app la vuelve a construir.
# Despliegue en Netlify

Las mismas 145 apps se publican también en Netlify, con los sitios de Vercel intactos. El
repo no cambia de plataforma: cada app es un proyecto de Netlify independiente conectado al
mismo repositorio, igual que en Vercel.

## Cómo conectar un sitio

Netlify detecta solo que el repo es un monorepo y, al elegir la carpeta en **Add new site →
Import an existing project**, configura el sitio con la layout que recomienda para monorepos:

- **Base directory**: la raíz del repositorio (déjala sin tocar; es el valor por defecto).
  Es donde Netlify instala las dependencias.
- **Package directory**: `apps/<nombre-de-la-app>`. Netlify lee el `netlify.toml` de ahí (busca
  el config primero en el package directory, luego en el base y por último en la raíz).
- **Build command** y **Publish directory**: no hay que tocarlos, salen del `netlify.toml`.

No pongas la Base directory en `apps/<app>`: entonces el comando corre dentro de la app,
`cd ../..` sale del repositorio y el build falla con `Bun could not find a package.json
file to install from`. Ese es el error que dejó el despliegue a medias.

Cada app tiene su `netlify.toml` generado:

```toml
[build]
	command = "bun install --frozen-lockfile && bunx turbo run build --filter=<nombre>"
	publish = "apps/<nombre>/dist"

[build.environment]
	NODE_VERSION = "22"
```

El comando corre en la raíz (Base directory) e instala el `bun install` del workspace entero
porque casi todas las apps dependen de paquetes del workspace (`@astro-config`,
`@astro-components`) declarados como `workspace:*`, que solo se resuelven desde la raíz del
monorepo. El build pasa por turbo y no por `astro build` directo porque turbo es quien
respeta el `dependsOn: ["^build"]` de `turbo.json` y construye los paquetes compartidos antes
que la app. El `publish` es relativo a la raíz, de ahí `apps/<nombre>/dist` y no `dist` a
secas.

Para regenerar los ficheros, o añadir el de una app nueva:

```sh
node scripts/add-netlify-config.mjs --dry   # ver qué haría
node scripts/add-netlify-config.mjs         # aplicarlo
```

El generador **no sobrescribe** un `netlify.toml` que no haya creado él (cabecera distinta),
porque puede tener `headers`, `redirects` o funciones propias: el panel de Netlify manda
sobre lo que no aparece en el fichero, pero pisar lo que hay rompería ese sitio. Lo avisa y
lo deja intacto. Los que sí llevan su cabecera se regeneran, para que un cambio de comando
(como este) llegue a todas las apps.

## El dominio: `SITE_URL`

`site` en `astro.config.mjs` es lo que alimenta el sitemap y las URLs canónicas y `og:url`.
Cada app declara su `.vercel.app`, que es correcto mientras la web se sirva desde Vercel, pero
si la misma build se publica en Netlify saldría con el sitemap y el canonical apuntando al
dominio de Vercel: SEO roto desde el primer día.

Por eso `createAstroConfig` (`packages/@astro-config/astro.mjs`) da prioridad a la variable de
entorno `SITE_URL`:

```js
site: process.env.SITE_URL || site,
```

Se resuelve en el paquete compartido y no en cada app porque es el único punto por el que
pasan las 139 apps Astro: tocarlas sería 139 ficheros que se desincronizan en cuanto un
dominio cambie.

**Hay que fijar `SITE_URL` en el panel de Netlify de cada sitio** con su dominio real
(`https://<nombre-del-sitio>.netlify.app`, o el dominio propio si lo tiene). Sin esa variable
el sitio se publica, pero con las URLs canónicas de Vercel.

Ojo con el nombre del sitio en Netlify: no siempre coincide con el nombre de la carpeta.
Por ejemplo la carpeta `bar-el-anzuelo` está en `elanzuelo.vercel.app`, y
`a-fuego-braseria` en `a-fuego-braseria-cordoba.vercel.app`.

## Qué NO cubre

Estas 7 apps **no** se despliegan en Netlify con lo que hay aquí:

- **`bar-el-deportivo` y `cuadra-proyecto`**: carpetas sin `package.json` ni `src/`. No hay
  nada que publicar.
- **`autospa-astro`, `brillanteza`, `carniceria-san-marcos`, `huertosolar` y
  `patitas-peluqueria-canina`**: no son Astro. Son front (Vite + React) más una API propia en
  `server/`, que corre con `bun server/index.ts` y tiene rutas, cron y base de datos.
  Publicar solo el `dist` dejaría la API sin publicar. Portarla a Netlify Functions es un
  trabajo de código, no de configuración: hay que reescribir `server/` contra el runtime de
  Netlify.

`scripts/add-netlify-config.mjs` deja esas 7 fuera y las lista al final de cada ejecución, en
lugar de esconderlas.
