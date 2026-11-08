# Restaurante El Fogarache

Web de **Restaurante El Fogarache**, cocina casera en C. de Jorge Jordana 3
(Delicias, 50017 Zaragoza).

- Astro + Tailwind CSS 4 + daisyUI (tema `fogarache` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Restaurante+El+Fogarache/...`
  (feature `0xd5914cb59811ef1:0x2de9f373b1164835`).

## Datos verificados

- Dirección: C. de Jorge Jordana 3, Delicias, 50017 Zaragoza.
- Tel: 976 09 95 23 (`tel:+34976099523`); WhatsApp 665 96 81 57.
- Horario (Vive Zaragoza): Lun-Mié 9:00–17:00;
  Jue 9:00–17:00 y 20:30–23:15; Vie 9:00–17:00 y 20:30–24:00;
  Sáb 13:00–17:00 y 21:00–24:00; Dom 13:00–17:00.
- 4,4 en Google con 816 opiniones. Cocina casera, caracoles, menú del día,
  brasa. Rango €, familiar, menú infantil.
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
| `/servicios` | La casa (menú, caracoles, brasa) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
