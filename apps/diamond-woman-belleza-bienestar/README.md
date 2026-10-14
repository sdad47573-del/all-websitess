# Diamond Woman Belleza y Bienestar

Web de **Diamond Woman Belleza y Bienestar**, centro de belleza y bienestar en
la Calle Haendel, 2 (La Paz, Carretera de Cádiz, 29004 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `diamond` en `src/styles/index.css`,
  índigo noche + lavanda + rosa diamante).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Diamond+Woman+Belleza+y+Bienestar/@36.6953161,-4.4498068,16z/...`
  (feature `0xd72f7688efbc541:0xb9d4a972be1ac7d0`).

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
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle de áreas (facial, corporal, bienestar) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.6953161,-4.4498068) más el reverse-geocode OSM (Calle Haendel 2, La Paz,
Carretera de Cádiz, 29004 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el centro y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
