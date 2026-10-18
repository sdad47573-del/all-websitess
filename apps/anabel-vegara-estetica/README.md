# Centro de Estética y Bienestar Anabel Vegara

Web de **Centro de Estética y Bienestar Anabel Vegara**, centro de estética en
Carrer de Santa Engràcia 88 (Nou Barris, 08016 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `anabel` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 5 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 (reutiliza las 5) + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centro+de+Est%C3%A9tica+y+Bienestar+Anabel+Vegara/...`
  (feature `0x12a4bd1f3661deff:0xef0a6d6edb26bf2f`).

## Datos verificados

- Dirección: Carrer de Santa Engràcia 88, 08016 Barcelona (Nou Barris).
- Tel: 933 54 20 10 (`tel:+34933542010`).
- Horario (ficha de Google): L-V 9:30–20:00, Sáb 8:30–13:30, Dom cerrado.
- 4,8 en Google con 64 reseñas. Categoría: centro de estética.
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
| `/servicios` | Detalle (estética, bienestar) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
