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

## Qué se gestiona

Cada web tiene cuatro pestañas:

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

La pestaña activa queda en la URL (`#mapas`, `#imagenes`, `#codigo`), así que
recargar o volver atrás mantiene el sitio donde estabas.

### Historial

Cada guardado (datos, coordenadas o plantilla) conserva antes la versión
anterior. En la pestaña de código, «Historial» lista las últimas 20 versiones
de ese fichero: se pueden ver en el editor o restaurar, y la versión que se
sustituye queda también guardada. Vive en `apps/cms/.history`, fuera de las
webs.

Además, el listado general permite buscar por nombre, slug, ciudad o calle,
filtrar por legales pendientes y por webs sin fotos, y ordenar por A–Z, por
última modificación o por número de fotos.

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

## Comprobaciones

```bash
bun test        # parseo, edición, imágenes y ficheros
bun run typecheck
bun run build
```
