# Estetica Natalia - Córdoba | Estética, uñas y maquillaje

Web de **Estetica Natalia - Córdoba**, centro de estética en
C. Úbeda, 12 (Sur, 14013 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ids en `.maps-manifest.json`). Ver `README_IMAGENES.md` — úsalas solo con
  permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Estetica+Natalia+-+C%C3%B3rdoba/@37.8664677,-4.7773698,17z/...`
  (feature `0xd6d208e67f17e7f:0xfdb04f82621f20bf`).

## Scripts

```bash
bun install
bun run dev # desde apps/estetica-natalia: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs estetica-natalia
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (uñas, maquillaje, facial) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.8664677,-4.7773698 y feature id del enlace de Maps aportado.
- Dirección C. Úbeda, 12, 14013 Córdoba (Fresha + Maps).
- Teléfono 688 24 80 99 (bio de Instagram @esteticanataliaruiz).
- Horario: lun–vie 9:00–14:00, sáb 10:00–13:30, dom cerrado (Fresha).
- Servicios: maquillaje (Fresha), refuerzo de uñas + cosmética coreana (Instagram/Facebook).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el centro (pueden variar en festivos).
> 3. Confirma permiso por escrito para las 10 fotos de Google (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
