# The Haircut & Sunbody

Web de **The Haircut & Sunbody**, peluquería, barbería y centro de bronceado
en Calle Flaubert, 3 (Teatinos, Teatinos-Universidad, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono 951 40 59 60,
  horario L-V 09:30–13:30 y 16:00–20:30 + sábados, precios de Booksy,
  equipo Dilan / María).
- Fotos propias de marcador en `src/assets/fotos/*.svg`: no se usan fotos de
  Google Maps (ni descargadas ni con hotlink) por copyright. Ver
  `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/The+Haircut/@36.7238757,-4.4618764,17z/...`
  (feature `0xd72f73e5f16aa83:0xdee0796f6180324f`).
- Reserva: `https://booksy.com/es-es/2103_thehaircut_barberia_29485_malaga`

## Scripts

```bash
bun install
bun run dev # servidor de desarrollo
bun run build # build estático
bun run check # astro check
bun run typecheck
bun run test # tests con bun
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el estudio, servicios y precios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle con precios reales de Booksy (corte, barba, color, bronceado) |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Sustituye los SVG por fotos originales del salón (ver `README_IMAGENES.md`).
> 3. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
