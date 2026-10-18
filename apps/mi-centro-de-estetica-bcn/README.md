# MI CENTRO DE ESTÉTICA BCN

Web de **MI CENTRO DE ESTÉTICA BCN**, centro de estética en Carrer de València
160, Loc 4 (Antiga Esquerra de l'Eixample, Eixample, 08011 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `micentro` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/MI+CENTRO+DE+EST%C3%89TICA+BCN/...`
  (feature `0x12a4a34085c1fbdf:0x3c40e70a1c1aeb4c`).

## Datos verificados

- Dirección: Carrer de València 160, Loc 4, 08011 Barcelona (Eixample).
- Tel: 680 74 57 89 (`tel:+34680745789`, WhatsApp `wa.me/34680745789`).
- Horario (ficha de Google): L-V 11:00–21:00, Sáb 10:00–21:00, Dom cerrado.
- 4,8 en Google con 46 reseñas. Categoría: esteticista.
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
