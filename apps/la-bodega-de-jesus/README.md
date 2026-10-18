# La Bodega de Jesús

Web de **La Bodega de Jesús**, taberna en C. de Rodrigo Díaz de Vivar 4
(50006 Zaragoza).

- Astro + Tailwind CSS 4 + daisyUI (tema `bodega` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/La+Bodega+de+Jes%C3%BAs/...`
  (feature `0xd5915beaed3269d:0xd343d4268b09ac11`).

## Datos verificados

- Dirección: C. de Rodrigo Díaz de Vivar 4, 50006 Zaragoza.
- Tel: 633 42 48 19 (`tel:+34633424819`).
- Horario (ficha de Google): Mié-Sáb 12:30–16:30 y 20:00–23:00,
  Dom 12:00–16:30, Lun-Mar cerrado.
- 4,8 en Google con 359 reseñas. Categoría: taberna.
- Sin carta online: no se publican platos ni importes inventados.

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
| `/` | Portada: hero, destacados, el local, la casa, galería, contacto/mapa y FAQ |
| `/servicios` | La casa (tapas, momentos) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
