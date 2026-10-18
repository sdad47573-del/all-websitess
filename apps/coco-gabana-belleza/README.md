# Coco Gabana - Salón de Belleza y Estética Barcelona

Web de **Coco Gabana**, salón de belleza y estética en Carrer de Nàpols 173
(Eixample, 08013 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `coco` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Coco+Gabana+-+Sal%C3%B3n+de+Belleza+y+Est%C3%A9tica+Barcelona/...`
  (feature `0x12a4a39d68938b4f:0x7964394d3e4077ed`).

## Datos verificados

- Dirección: Carrer de Nàpols 173, 08013 Barcelona (Eixample).
- Tel: 931 41 65 16 (`tel:+34931416516`).
- Horario (ficha de Google): L-V 9:30–20:30, Sáb 9:00–15:00, Dom cerrado.
- 4,5 en Google con 359 reseñas. Pestañas, facial, maquillaje, manicura y
  pedicura, depilación con cera, adelgazamiento.
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
| `/servicios` | Detalle (mirada/rostro, manos-pies-cuerpo) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
