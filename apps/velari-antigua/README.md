# Velari antigua | Centro de Estética

Web de **Velari antigua**, centro de estética en
Calle Amarguillo, 2 (Cruz de Humilladero, 29006 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`,
  verde clínico + marfil + arena).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ids en `.maps-manifest.json`). Ver `README_IMAGENES.md` — úsalas solo con
  permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Velari+antigua/@36.7097005,-4.4427071,17z/...`
  (feature `0xd72f7fd57db4b6d:0x663d7451caa9239c`).

## Scripts

```bash
bun install
bun run dev # servidor de desarrollo (desde apps/velari-antigua: bun run dev)
bun run build # build estático
bun run check # astro check
bun run typecheck
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs velari-antigua
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el estudio, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle de áreas (facial, corporal, belleza) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 36.7097005,-4.4427071 y feature id del enlace de Maps aportado.
- Dirección C. Amarguillo, 2, 29006 Málaga, teléfono 624 82 72 83, lunes 10:00–20:30,
  5,0 (23 reseñas): ficha agregada (Lindavia). Resto de horarios y carta:
  a consultar en la ficha o por teléfono — no se inventan.

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario completo y carta real con el estudio (ahora solo el lunes verificado).
> 3. Confirma permiso por escrito para las 10 fotos de Google (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
