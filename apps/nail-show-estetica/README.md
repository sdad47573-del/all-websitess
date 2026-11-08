# Centre Estètica Nail Show

Web de **Centre Estètica Nail Show**, salón de manicura y pedicura en Carrer del
General Álvarez de Castro 3 (Ciutat Vella, 08003 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `nailshow` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centre+Est%C3%A8tica+Nail+Show/...`
  (feature `0x12a4a3105f4047c3:0x2774c325d0002ef1`).

## Datos verificados

- Dirección: Carrer del General Álvarez de Castro 3, 08003 Barcelona.
- Tel: 615 34 85 58 (`tel:+34615348558`).
- Horario (ficha de Google): L-Sáb 9:30–21:00, Dom 10:00–21:00. Abre cada día.
- 4,5 en Google con 230 reseñas. Categoría: salón de manicura y pedicura.
- Sin tarifa online: no se publican importes inventados.

## Scripts

```bash
bun install
bun run dev # servidor de desarrollo
bun run build # build estático
bun run check # astro check
bun run typecheck
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (manos, pies/belleza) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
