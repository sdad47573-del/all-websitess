# Centre D' Estética Nina

Web de **Centre D' Estética Nina**, centro de estética facial en Carrer de la
Diputació 391 (Eixample, 08013 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `nina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 9 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centre+D%27+Est%C3%A9tica+Nina/...`
  (feature `0x12a4a2e644f997a3:0xf7909cef8fed622d`).

## Datos verificados

- Dirección: Carrer de la Diputació 391, 08013 Barcelona (Eixample).
- Tel: 932 65 94 91 (`tel:+34932659491`).
- Horario (ficha de Google): L-V 9:45–20:00, Sáb 9:30–13:30, Dom cerrado.
- 4,8 en Google con 44 reseñas. Categoría: esteticista facial.
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
