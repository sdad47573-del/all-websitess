# La Barbería de Soliva

Web de **La Barbería de Soliva**, en C. Félix Gancedo, 1, portal 1, local 7
(Soliva Este, Puerto de la Torre, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono 662 29 02 16,
  horario L-V 10:00–13:30 y 16:30–21:00 + sábados, precios de Booksy,
  equipo Jose / Iván / Cristian).
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/La+Barberia+de+Soliva/@36.7243848,-4.4900346,17z/...`
  (feature `0xd72f0c8ab307885:0x7f0c93635731992c`).
- Reserva: `https://booksy.com/es-es/10947_la-barberia-de-soliva_barberia_29485_malaga`

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
| `/` | Portada: hero, destacados, la barbería, servicios y precios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle con precios reales de Booksy (corte, barba, navaja, niños) |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Sustituye los SVG por fotos originales de la barbería (ver `README_IMAGENES.md`).
> 3. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
