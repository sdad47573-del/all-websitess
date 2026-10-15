# Barbería & Peluquería NELD

Web de **Barbería & Peluquería NELD**, en Calle Doctor Miguel Díaz Recio, 38
(Teatinos, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, horario publicado
  L-V 09:30–14:00 y 17:00–20:00, precios de Booksy, equipo NELD / NELSON).
  Sin teléfono verificado: la cita remite a Booksy y a la ficha de Google.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Barber%C3%ADa+%26+Peluquer%C3%ADa+-+NELD/@36.7207181,-4.4646552,17z/...`
  (feature `0xd72f78e8acca3b3:0xcb70ffa956a732a8`).
- Reserva: `https://booksy.com/es-es/122391_neld_peluqueria_29485_malaga`

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
| `/servicios` | Detalle con precios reales de Booksy (corte, barba, cejas) |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el salón facilita un teléfono público, añádelo a `BUSINESS` y a los
>    componentes (ahora remiten a Booksy a propósito).
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
