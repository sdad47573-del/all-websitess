# Estética Esencia (Juli-Ofe)

Web de **Estética Esencia (Juli-Ofe)**, centro de estética en Passatge de
Casamitjana 23 (Sant Martí, 08005 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `esencia` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Est%C3%A9tica+Esencia+%28Juli-Ofe%29/...`
  (feature `0x12a4a340e5310de3:0x4b7fb34575bb642f`).

## Datos verificados

- Dirección: Passatge de Casamitjana 23, 08005 Barcelona (Sant Martí).
- Tel: 933 08 87 79 (`tel:+34933088779`).
- Horario (ficha de Google): L-V 10:00–19:00, Sáb y Dom cerrado.
- 5,0 en Google con 70 reseñas. Categoría: centro de estética.
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
