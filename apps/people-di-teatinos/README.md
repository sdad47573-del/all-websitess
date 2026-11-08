# Centro de Depilación Láser y Belleza People DI - Teatinos

Web de **Centro de Depilación Láser y Belleza People DI - Teatinos**, centro de
depilación láser y belleza en Calle Sófocles, 11 (El Cónsul,
Teatinos-Universidad, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`,
  verde clínico + marfil + arena).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centro+de+Depilaci%C3%B3n+L%C3%A1ser+y+Belleza+People+DI+-+Teatinos/@36.7224056,-4.4805699,17z/...`
  (feature `0xd72f0cb210158af:0x2873cbd150a8c709`).

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
| `/servicios` | Detalle de áreas (láser, belleza) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.7224056,-4.4805699) más el reverse-geocode OSM (Calle Sófocles 11,
El Cónsul, Teatinos-Universidad, 29010 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el centro y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
