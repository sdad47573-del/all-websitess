# Vikings Barbershop

Web de **Vikings Barbershop**, en Calle Sondalezas, 14
(Bailén-Miraflores, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono 951 99 62 58,
  horario L-V 10:00–22:00, precios de Booksy, barbero Ouchen).
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Vikings+barbershop/@36.7236202,-4.4411333,17z/...`
  (feature `0xd72f7ce0eba386d:0x293b476aaf7eb1e8`).
- Reserva: `https://booksy.com/es-es/77885_vikings-barbershop_barberia_29485_malaga`

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
| `/servicios` | Detalle con precios reales de Booksy (corte, barba, rituales spa) |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Sustituye los SVG por fotos originales de la barbería (ver `README_IMAGENES.md`).
> 3. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
