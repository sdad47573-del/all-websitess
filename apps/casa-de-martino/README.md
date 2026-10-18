# Café Restaurante Casa de Martino

Web de **Café Restaurante Casa de Martino**, café restaurante de cocina
casera en C/ Jussepe Martínez 4, esquina Alfonso I
(Casco Antiguo, 50003 Zaragoza).

- Astro + Tailwind CSS 4 + daisyUI (tema `martino` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Caf%C3%A9+Restaurante+Casa+de+Martino/...`
  (feature `0xd5914ec44d8f287:0xe701971e438096a2`).

## Datos verificados

- Dirección: C/ Jussepe Martínez 4 (esquina Alfonso I), 50003 Zaragoza.
- Tel: 976 39 59 39 (`tel:+34976395939`); móviles 629 185 661 y 687 464 325.
- Horario (web propia del local): Lun-Vie 9:00–16:00 y 19:00–cierre;
  Sáb desde las 12:00; Dom 12:00–16:00. La hora de cierre nocturna no está
  publicada: se muestra tal cual, sin inventarla.
- 4,6 en TripAdvisor con 47 opiniones (la web no inventa nota de Google).
  Platos caseros con ingredientes frescos, tapas y menú del día.
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
| `/servicios` | La casa (caseros, tapas, menú) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
