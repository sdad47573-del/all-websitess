# Sur Digital · webs de clientes

Monorepo con las webs de clientes de Sur Digital. Casi todas las landings viven dentro del
proyecto único de Astro `apps/_sur-digital`; algunas webs antiguas siguen como apps
independientes en `apps/*`, cada una con su propio `astro.config.mjs`.

## Requisitos

- Node 18 o superior.
- [bun](https://bun.sh) 1.4 (es el `packageManager` del repo).

## Arranque

```bash
bun install
bun run dev
```

`bun run dev` levanta todo el monorepo con Turborepo. Para trabajar solo en la web principal:

```bash
cd apps/_sur-digital
bun run dev
```

El servidor de desarrollo escucha en <http://localhost:4321>.

## Dónde está cada web

```
apps/_sur-digital/src/apps/<slug>/pages/     landing del cliente
apps/_sur-digital/src/apps/<slug>/data/      datos verificados del negocio
apps/_sur-digital/src/apps/<slug>/styles/    hoja de estilos de la landing
apps/_sur-digital/src/apps/<slug>/assets/    fotos procesadas con <Image>
apps/_sur-digital/public/<slug>/             favicon, og.jpg, robots.txt
```

Cada landing se sirve en `/<slug>/` (por ejemplo, `/astuy-taberna/`). Las webs de `apps/*`
son proyectos Astro completos que siguen en el workspace.

## Recargar el servidor tras editar una landing

El watcher de `apps/_sur-digital` ignora `src/apps` y `public` a propósito: recorrer esas
carpetas abría miles de `fs.watch` y en Windows el arranque tardaba minutos (el motivo está
comentado en `astro.config.mjs`). Por eso, después de cambiar una landing hay que reiniciar
el watcher:

```bash
bun run dev:refresh
```

Espera unos segundos hasta que el HTML o el CSS nuevos se sirvan antes de recargar el
navegador.

## Fotos de Google Maps

Las fotos de la ficha pública se descargan con:

```bash
node scripts/fetch-maps-photos.mjs <slug> [<slug>...]
node scripts/fetch-maps-photos.mjs --dry      # solo informa
node scripts/fetch-maps-photos.mjs --all      # todas las apps
```

El script saca el *feature id* del enlace de Maps que ya está en el código de la landing,
descarga la portada de la galería (10 fotos por ficha), normaliza a JPEG y guarda el
manifiesto en `assets/fotos/.maps-manifest.json` para no repetir descargas.

## Comprobaciones

```bash
bun run check:sites     # auditoría de contenido de las webs
bun run lint            # ESLint / Biome según el paquete
bun run check-types     # TypeScript
bun run build           # build de todo el monorepo
```

En `apps/_sur-digital` también hay pruebas con `bun test` y Playwright:

```bash
cd apps/_sur-digital
bun test
bun run test:e2e
```

## Convenciones de las landings

- **No inventar datos del negocio**: nombre, dirección, teléfono, valoración, horario y
  categoría salen solo de la ficha pública o de una fuente verificable. Si no consta, no se
  publica (ni carta, ni precios, ni reseñas inventadas).
- **Fotos**: se usan las del perfil público de Google Maps, con nota de origen y oferta de
  retirada para quien tenga los derechos.
- **Legal**: toda landing que enlace a aviso legal debe tener `pages/aviso-legal.astro`.
- **Idioma**: los textos visibles van en castellano.
- Antes de dar una landing por terminada, comprueba que el dev server la sirve con 200, que
  las imágenes cargan y que no hay desbordamiento horizontal.
