# Peluquería Bartolí

Web de **Peluquería de Caballeros Bartolí**, en Av. de Lope de Vega, 19, bajo
(Teatinos, Teatinos-Universidad, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `barberia` en `src/styles/index.css`,
  negro + rojo barbero + crema; tipografía Oswald).
- Datos del negocio en `src/data/site.ts` (dirección, teléfono 952 61 82 61,
  horario L-V 09:00–21:00, 4,8 con 410 reseñas en Google, servicios sin
  precios inventados).
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Peluquer%C3%ADa+Bartol%C3%AD/@36.7301844,-4.4684813,17z/...`
  (feature `0xd72f73aca4dd945:0x7aeb24e388ba03bd`).

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
| `/` | Portada: hero, destacados, la peluquería, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle de servicios (caballero, barba, infantil) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con la peluquería.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
