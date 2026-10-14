# Salon de Belleza Goya

Web de **Salon de Belleza Goya**, salón de belleza en la Calle Goya, 2
(Huelin, Carretera de Cádiz, 29002 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `goya` en `src/styles/index.css`,
  dorado + crema + marrón).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Salon+de+Belleza+Goya/@36.705377,-4.436806,17z/...`
  (feature `0xd72f782258bef07:0x1d1d6edfd7cf54a6`).

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
| `/` | Portada: hero, destacados, el salón, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle de áreas (peluquería, facial, corporal) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.705377,-4.436806) más el reverse-geocode OSM (Calle Goya 2, Huelin,
Carretera de Cádiz, 29002 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el salón y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
