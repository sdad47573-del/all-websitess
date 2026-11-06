# CMS de webs

Panel local para gestionar las webs de negocio de `apps/` (las 638 landings con
`src/data/site.ts`). Cliente en **SolidJS** (Vite) y API en Bun. No es una web
pública: el servidor escucha solo en `127.0.0.1`.

```bash
cd apps/cms
bun run dev     # cliente en http://127.0.0.1:4401 (API en 4400)
```

Para servir el build y la API juntos, en un solo puerto:

```bash
bun run build
bun run start   # http://127.0.0.1:4400
```

## Acceso y roles

El panel pide usuario y contraseña. En el primer arranque crea un
administrador: si defines `CMS_ADMIN_PASSWORD` (mínimo 8 caracteres) usa esa
contraseña; si no, genera una y la imprime en la consola **una sola vez**.

```bash
CMS_ADMIN_PASSWORD='mi-clave-larga' bun run dev
```

Los usuarios viven en `apps/cms/.auth/users.json` con la contraseña hasheada
(argon2id, nunca en claro) y el secreto que firma la sesión en
`apps/cms/.auth/secret`. La cookie es `HttpOnly`, `SameSite=Strict` y dura 7
días; cambiar una contraseña invalida las sesiones abiertas de ese usuario.

| Rol | Puede |
|---|---|
| `admin` | Datos, mapas, imágenes, OG, SEO, código, historial y usuarios |
| `editor` | Datos, mapas, imágenes, OG y SEO; no edita plantillas ni gestiona usuarios |

Los administradores crean usuarios, cambian roles y restablecen contraseñas en
`/usuarios`. No hay registro público ni recuperación por email.

Sigue escuchando solo en `127.0.0.1`: el login protege el panel, no lo publica.

## Qué se gestiona

Cada web tiene cinco pestañas:

- **Vista previa**: iframe con el prerender real de `dist/`, con ancho de
escritorio, tablet o móvil, recarga y apertura en pestaña nueva. Si la web no
se ha construido, avisa con el comando y enlaza a la versión publicada.
- **Datos**: nombre, lema, teléfono, calle, código postal, ciudad y URL canónica.
  Se escribe solo el literal que cambia dentro de `BUSINESS`.
- **Mapas**: latitud y longitud (`BUSINESS.geo`), con vista previa del mapa y
  enlace a Google Maps. Son las coordenadas que usan el mapa incrustado, «Cómo
  llegar» y el schema `LocalBusiness`.
- **Imágenes**: galería de `src/assets/fotos` con vista previa, tamaño y en qué
  plantilla se usa cada archivo. Permite subir una imagen nueva, reemplazar una
  existente conservando el nombre y borrar solo las que no referencia ninguna
  plantilla. Formatos: jpg, png, webp, avif, gif y svg (máx. 15 MB).
- **Layout y código**: editor de las plantillas, datos y estilos de la web
  (`.astro`, `.ts`, `.css`, `.md`, `.json`), con lista de ficheros, guardado
  (también con Ctrl/⌘ + S) e historial.

La pestaña activa queda en la URL (`#vista`, `#mapas`, `#imagenes`, `#codigo`),
así que recargar o volver atrás mantiene el sitio donde estabas.

### SEO y compartir

La pestaña «SEO y compartir» audita el `dist/index.html` real (título, meta
descripción, canonical, og:image, twitter:card, H1, idioma, noindex, enlace
legal, JSON-LD y alt de las imágenes) y muestra cómo se verá en Google y al
compartir el enlace. Si no hay build, avisa y enseña los datos de partida.

### Revisiones

Cada versión del historial se puede ver, restaurar o **comparar** con el fichero
actual: el diff es por líneas, con numeración y marcas de añadido/eliminado.

### Acciones en bloque

El listado permite seleccionar webs (tarjetas o tabla, incluida la página
completa) y regenerar sus miniaturas OG de una vez, con el progreso y el
resultado en el propio listado.

### Miniatura OG

La cabecera de cada ficha muestra su imagen Open Graph y un botón para generarla
o regenerarla sin salir del panel. `POST /api/sites/<slug>/og` crea
`public/og.jpg` (1200×630) con la plantilla de `scripts/lib/og-card.mjs`,
compartida con `scripts/generate-og.mjs`. Antes de sustituirla, la imagen
anterior se copia a `.og-history/<slug>/` (máximo 10 copias por web), así que
regenerar no borra la que había.

### Vista previa

`GET /preview/<slug>/…` sirve el build de `apps/<slug>/dist` desde el propio
CMS. El HTML y el CSS se reescriben al vuelo para prefijar las rutas absolutas
(`/_astro/…`): sin eso el iframe pediría los assets al CMS y saldría sin
estilos. Si no existe `dist/index.html`, la ruta responde 404 con una página
que explica cómo construirlo.

### Historial

Cada guardado (datos, coordenadas o plantilla) conserva antes la versión
anterior. En la pestaña de código, «Historial» lista las últimas 20 versiones
de ese fichero: se pueden ver en el editor o restaurar, y la versión que se
sustituye queda también guardada. Vive en `apps/cms/.history`, fuera de las
webs.

El listado se puede ver en **tarjetas** (con la imagen OG de cada web como
miniatura) o en **tabla**, y permite buscar por nombre, slug, ciudad o calle,
filtrar por legales pendientes y por webs sin fotos, y ordenar por A–Z, por
última modificación o por número de fotos. La vista elegida se recuerda.

## Cómo guarda

- **Datos y coordenadas**: sustituye únicamente el literal (o el número) dentro
  de `BUSINESS`, escribe sobre un temporal y relee para verificar; si el valor
  no queda como se esperaba, restaura el original.
- **Plantillas**: escritura atómica, acotada a `src/`, con extensiones y tamaño
  máximos. El panel no compila: un error de sintaxis se detecta al hacer build.
- **Historial**: copia del contenido anterior antes de cada escritura, con
  rotación a 20 versiones por fichero.
- **Imágenes**: nombre normalizado (minúsculas y guiones), escritura atómica y
  borrado bloqueado mientras haya una referencia en el código.

## Estructura

- `src/`: cliente Solid. `App.tsx` enruta entre listado y ficha; `SiteDetail.tsx`
  monta las pestañas de `src/tabs/`.
- `server.ts`: API JSON y estáticos de `dist/`. En desarrollo Vite reenvía
  `/api` a este servidor.
- `lib/sites.ts`: escaneo, parseo y escritura de `site.ts` (datos y geo).
- `lib/files.ts`: plantillas e imágenes, con todas las guardas de rutas.
- Los tests de ambos módulos corren con `bun test`.

## Qué no hace

- No ejecuta el build ni despliega: deja los cambios en el árbol de trabajo,
  sin commit. Tras editar layout conviene lanzar `bun run build` en la web.
- No edita arrays (`FAQ`, `MENU`, `HORARIO`) desde formularios: se tocan en la
  pestaña de código.
- Las plantillas usan nombres de campo distintos (`street`/`address`,
  `phone`/`phoneDisplay`…). El panel reconoce los sinónimos conocidos y bloquea
  lo que esa plantilla no declara.
- No hay registro público ni recuperación de contraseña por email: las cuentas
  se crean y se restablecen desde `/usuarios`.
- Los roles son globales, no por web, y el historial no anota quién hizo cada
  cambio.

## Comprobaciones

```bash
bun test        # parseo, edición, imágenes y ficheros
bun run typecheck
bun run build
```
