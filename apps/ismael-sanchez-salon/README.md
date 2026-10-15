# Ismael Sánchez Salón de Caballeros

Web de **Ismael Sánchez Salón de Caballeros**, en C. Quasimodo, 18, local D4
(Teatinos, Teatinos-Universidad, 29006 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono 647 71 13 58,
  horario L-V 09:30–13:30 y 15:30–20:00 + sábados, precios de Booksy,
  equipo Carlos / Ismael / Pedro; solo efectivo).
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Ismael+S%C3%A1nchez+Sal%C3%B3n+de+caballeros/@36.7109257,-4.4650043,17z/...`
  (feature `0xd72f71cfbb00305:0xca0fca5428860fb2`).
- Reserva: `https://booksy.com/es-es/50489_ismael-sanchez-salon-de-caballeros_barberia_29485_malaga`

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
| `/servicios` | Detalle con precios reales de Booksy (corte, barba, rapado, infantil) |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Sustituye los SVG por fotos originales del salón (ver `README_IMAGENES.md`).
> 3. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
