# El Paladar

Web de **El Paladar**, restaurante cubano en Calle Pilar Lorengar 28
(50009 Zaragoza).

- Astro + Tailwind CSS 4 + daisyUI (tema `paladar` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/El+Paladar/...`
  (feature `0xd5914d0a29117a9:0xb3124a2440d7780b`).

## Datos verificados

- Dirección: Calle Pilar Lorengar 28, 50009 Zaragoza.
- Tel: 976 07 39 51 (`tel:+34976073951`).
- Horario (El Callejero de Zaragoza): Lun cerrado; Mar-Jue 13:30–17 y
  20:00–23:00; Vie 13:00–17 y 20:00–23:00; Sáb 13:30–17 y 20:00–23:00;
  Dom 13:30–17.
- 4,5 en TripAdvisor con 125 opiniones (la web no inventa nota de Google).
  Cocina cubana/caribeña/latina, comidas y cenas. Instagram @elpaladar.es.
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
| `/servicios` | La casa (comidas, cenas, cocina cubana) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
