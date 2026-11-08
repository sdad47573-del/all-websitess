# NM Aesthetics | Instituto de Estética Avanzada

Web de **NM Aesthetics**, instituto de estética avanzada en Carrer de Provença
156, 2º 2ª (Nova Esquerra de l'Eixample, Eixample, 08036 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `nmaesthetics` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/NM+Aesthetics+%7C+Instituto+de+Est%C3%A9tica+Avanzada/...`
  (feature `0x12a4a3d72b8f98dd:0xa80b8cba5c3414fe`).

## Por qué no se descargan las fotos de Google Maps

La ficha devuelve su bloque de información (dirección, teléfono, horario,
valoración) pero **sin bloque de fotos**: la respuesta es corta y estable
(15+ peticiones, siempre 0 URLs de la CDN). No hay fotos que descargar.

Esta web trae 4 imágenes propias de marcador en `src/assets/fotos/*.svg`.
La web compila y se ve bien con ellas.

## Cómo poner fotos reales (2 minutos)

1. Pide al centro sus fotos originales (JPG).
2. Guárdalas en `src/assets/fotos/` y cambia en `src/data/site.ts` la
   extensión de `.svg` a `.jpg` con el mismo nombre base:
   - `nm-aesthetics-hero.svg` → portada / hero
   - `nm-aesthetics-centro.svg` → el centro
   - `nm-aesthetics-facial.svg` → facial
   - `nm-aesthetics-corporal.svg` → corporal
3. `bunx turbo run build --filter=nm-aesthetics`

## Datos verificados

- Dirección: Carrer de Provença 156, 2º 2ª, 08036 Barcelona (Eixample).
- Tel: 619 89 47 47 (`tel:+34619894747`).
- Horario (ficha de Google): L-V 10:00–20:00, Sáb 10:00–14:00, Dom cerrado.
- 4,9 en Google con 28 reseñas. Centro de estética + academia.
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
| `/servicios` | Detalle (estética avanzada, bienestar/formación) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
