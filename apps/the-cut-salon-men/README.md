# The Cut - Salon Men

Web de **The Cut - Salon Men**, barbería en Calle Teseo, 2
(Teatinos, Teatinos-Universidad, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono 952 62 97 51,
  horario L-V 10:00–14:00 y 15:00–18:00, precios de Booksy, equipo María/Luis/Mario).
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/The+Cut+-Salon+Men/@36.720243,-4.4752066,17z/...`
  (feature `0xd72f735fb45beaf:0x38e355f79da0d334`).
- Reserva: `https://booksy.com/es-es/78573_the-cut-salon-men_barberia_29485_malaga`

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
| `/` | Portada: hero, destacados, el salón, servicios y precios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle con precios reales de Booksy (corte, degradado, rapado, barba) |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Sustituye los SVG por fotos originales del salón (ver `README_IMAGENES.md`).
> 3. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
