# Bquarters

Web de **Bquarters**, barbería en Calle Píndaro, 7 interior del pasaje
(Teatinos, Teatinos-Universidad, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono 951 01 84 22,
  horario publicado 09:00–14:00 y 16:00–20:30, precios de Booksy,
  equipo Daniel Carnero / Rubén Muñoz).
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Bquarters/@36.7199706,-4.4830372,17z/...`
  (feature `0xd72f197a7815ffd:0xc228c50984dae793`).
- Reserva: `https://booksy.com/es-es/129721_bquarters_barberia_29485_malaga`

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
| `/servicios` | Detalle con precios reales de Booksy (corte, barba, cejas y combinados) |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Sustituye los SVG por fotos originales del salón (ver `README_IMAGENES.md`).
> 3. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
