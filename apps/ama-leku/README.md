# Restaurante Ama Leku

Web de **Restaurante Ama Leku**, cocina vasca en Paseo Sagasta 37
(Centro, 50007 Zaragoza).

- Astro + Tailwind CSS 4 + daisyUI (tema `amaleku` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Restaurante+Ama+Leku/...`
  (feature `0xd5914e593a76d53:0xba26e2fc214f1abe`).

## Datos verificados

- Dirección: Paseo Sagasta 37, Centro, 50007 Zaragoza.
- Tel: 976 21 53 66 (`tel:+34976215366`); móvil 607 482 121.
- 4,4 en TripAdvisor con 101 opiniones (la web no inventa nota de Google).
  Cocina vasca de autor con pescado salvaje del Cantábrico y tapas.
- Sin horario completo publicado en fuentes verificables: no se publica
  horario inventado; la web remite al teléfono y a la ficha de Google.
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
| `/servicios` | La casa (pescado, autor, tapas) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
