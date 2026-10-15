# The Merced Barber's

Web de **The Merced Barber's**, barbería en Calle San Juan de Letrán, 2,
Local 36 (Plaza de la Merced, Distrito Centro, 29012 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono y WhatsApp
  642 72 82 55, horario L-S 10:00–20:00, servicios sin precios inventados).
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/The+merced+barber%E2%80%99s/@36.7238737,-4.417914,17z/...`
  (feature `0xd72f79036ca3007:0x4e1bab3a671b078b`).

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
| `/` | Portada: hero, destacados, la barbería, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle de servicios (corte, barba, afeitado, infantil) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con la barbería.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
