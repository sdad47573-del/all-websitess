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

## API Hono con SQLite

El CMS incluye una API nueva en `api/` construida con **Hono** y **SQLite**.
No recorre `apps/` en tiempo de ejecución: el contenido se importa una vez y
luego se sirve desde `apps/cms/data/cms.sqlite`.

```bash
bun run api:seed   # importa webs, piezas, biblioteca y catálogo
CMS_API_TOKEN='mi-token-largo' bun run api   # http://127.0.0.1:4402
```

Sin `CMS_API_TOKEN` la API solo escucha en `127.0.0.1` y no pide token. Con la
variable, todas las rutas menos `/api/health` exigen
`Authorization: Bearer <token>` o `X-API-Key`.

| Ruta | Qué hace |
|---|---|
| `GET /api/health` | Comprobación de vida |
| `GET /api/config` | Modo inventario o una sola web |
| `GET /api/sites` | Lista de webs |
| `GET /api/sites/:slug` | Ficha de una web |
| `PATCH /api/sites/:slug` | Edita los campos de negocio |
| `GET /api/sites/:slug/secciones` | Piezas de la portada |
| `PUT /api/sites/:slug/secciones` | Guarda la lista completa |
| `POST /api/sites/:slug/secciones/importar` | Copia una pieza de la biblioteca |
| `GET /api/sections/library` | Biblioteca de modelos |
| `GET /api/sections/catalog` | Catálogo por tipo |

La importación inicial (`api:seed`) es el único paso que lee el repositorio. Si
cambias una web en Git y quieres llevarla a la API, vuelve a ejecutarla. La API
no escribe en `apps/` ni copia imágenes: guarda contenido en SQLite. El panel
actual (`server.ts`) sigue leyendo los ficheros para no romper la vista previa,
el editor de código ni las imágenes; apuntar el cliente a esta API es el
siguiente paso de la migración.

## Acceso y roles

El panel pide usuario y contraseña. En el primer arranque crea un
administrador: si defines `CMS_ADMIN_PASSWORD` (mínimo 8 caracteres) usa esa
contraseña; si no, genera una y la imprime en la consola **una sola vez**.

```bash
CMS_ADMIN_PASSWORD='mi-clave-larga' bun run dev
```

En desarrollo el login muestra además un botón **Entrar como dev**: crea (o
reutiliza) el usuario `dev`, admin, y abre sesión sin contraseña. Ese usuario
tiene una contraseña aleatoria que no se guarda, así que solo se entra por el
botón. La ruta `/api/auth/dev` solo existe con `bun run dev`; con
`bun run start` responde 404 y el botón no aparece.

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

## Una web por propietario

Cada propietario debe gestionar **una sola web**. Para una instalación de ese
tipo, arranca el panel con el slug de su web:

```bash
CMS_SITE_SLUG='mi-web' CMS_ADMIN_PASSWORD='mi-clave-larga' bun run start
```

Con `CMS_SITE_SLUG`, el panel entra directamente en esa ficha, sin listado, y
la API solo devuelve esa web: `/api/sites/<otra>` y `/preview/<otra>` responden
404, y el catálogo de tipos se limita a sus propias piezas. La biblioteca de
piezas de ejemplo es compartida, de solo lectura: el propietario puede copiar
una pieza en su web, pero no editar la web de origen. El slug tiene que existir
en `apps/` o el servidor no arranca. La API Hono también respeta
`CMS_SITE_SLUG`.

Sin la variable, el CMS sigue en modo inventario para desarrollo y conserva el
listado completo de webs.

## Qué se gestiona

Cada web tiene estas pestañas:

- **Vista previa**: iframe con el prerender real de `dist/`, con ancho de
escritorio, tablet o móvil, recarga y apertura en pestaña nueva. Si la web no
se ha construido, avisa con el comando y enlaza a la versión publicada.
- **Secciones** (pestaña de inicio): las piezas de la portada en orden, con la
  vista previa de la web a la derecha (recortada a la pieza que se edita y con
  ancho de escritorio, tablet o móvil) y los campos a la izquierda. Se
  selecciona una pieza en la lista, se editan sus campos en vivo, se sube o
  baja, se duplica o se quita. «Añadir secciones» abre el catálogo: piezas
  sacadas de las webs reales (portada, la casa, señas, carta, destacados,
  galería, visita, preguntas, texto y llamada a la acción). Se guarda en
  `src/data/secciones.json` y la página las pinta con `<LocalSecciones>`. Los
  enlaces admiten atajos `maps:place`, `maps:directions` y `maps:streetView`.
  El catálogo incluye además una **biblioteca de piezas reales** extraída de
  los `secciones.json` y del HTML estático de las portadas escritas a mano: se
  filtra por tipo, texto o «Solo con foto» y cada tarjeta tiene «Ver pieza»
  para revisar el contenido completo antes de copiarlo. Al usar una, se copia
  en la web actual con sus imágenes y se abre para ajustarla. Las piezas
  extraídas del HTML pueden no traer fotos: el editor enseña qué falta antes
  de guardar.
- **Datos**: nombre, lema, teléfono, calle, código postal, ciudad y URL canónica.
  Se escribe solo el literal que cambia dentro de `BUSINESS`.
- **Mapas**: latitud y longitud (`BUSINESS.geo`), con vista previa del mapa y
  enlace a Google Maps. Son las coordenadas que usan el mapa incrustado, «Cómo
  llegar» y el schema `LocalBusiness`.
- **Imágenes**: galería de `src/assets/fotos` con vista previa, tamaño y en qué
  plantilla se usa cada archivo. Permite subir una imagen nueva, reemplazar una
  existente conservando el nombre y borrar solo las que no referencia ninguna
  plantilla. Formatos: jpg, png, webp, avif, gif y svg (máx. 15 MB).
- **Código (avanzado)**: editor de las plantillas, datos y estilos de la web
  (`.astro`, `.ts`, `.css`, `.md`, `.json`), con lista de ficheros, guardado
  (también con Ctrl/⌘ + S) e historial. En las webs con piezas no aparece como
  pestaña: se llega desde «Editar código de la plantilla», al final de
  Secciones, y hay un botón para volver a la edición visual.
- **Tienda**: catálogo de productos por web (precio, stock, imagen y
  visibilidad) y publicación de `src/pages/tienda.astro`. La página usa el
  componente compartido `LocalShop`: carrito en el navegador y pedido por
  WhatsApp con el mensaje ya escrito. No cobra ni guarda pedidos.

### Piezas en todas las webs

`<LocalSecciones>` (paquete `@astro-components`) pinta la portada a partir de
`src/data/secciones.json`: portada, la casa, señas, carta, galería, visita y
preguntas. La usan 364 de las 780 portadas; el resto son webs con maquetación
propia (componentes `Hero`/`Galeria` locales o HTML suelto con `<Image>`), que
habría que rediseñar una a una.

`scripts/migrar-piezas.ts` convierte las portadas que usan los componentes
compartidos: evalúa sus props reales (también las que traen los datos en línea,
sin `src/data/site.ts`), escribe el JSON validado y cambia el `<main>` por
`<LocalSecciones>`. Sin `--apply` solo informa de lo que haría.

```bash
bun apps/cms/scripts/migrar-piezas.ts            # qué convertiría
bun apps/cms/scripts/migrar-piezas.ts --apply    # todas
bun apps/cms/scripts/migrar-piezas.ts --apply --only mi-web
```

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
- **Piezas de portada**: se validan enteras (ids únicos, tipos y campos
  permitidos, imágenes existentes, URLs con esquema permitido, longitudes),
  se escriben de forma atómica y la versión anterior va al historial.
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
- `lib/sections.ts`: validación y escritura de las piezas de portada.
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
- El usuario `dev` y su botón son solo de desarrollo: no existen con
  `bun run start` y no deben usarse en una instalación real.
- Los roles son globales, no por web, y el historial no anota quién hizo cada
  cambio.
- La tienda no tiene pasarela de pago ni pedidos en servidor: el encargo se
  cierra por WhatsApp o teléfono. Envíos, impuestos y facturación quedan fuera.
- La tienda se publica escribiendo `src/pages/tienda.astro`, pero no se enlaza
  sola desde la home: el enlace hay que añadirlo en la plantilla de la web.

## Comprobaciones

```bash
bun test        # parseo, edición, imágenes y ficheros
bun run typecheck
bun run build
```
