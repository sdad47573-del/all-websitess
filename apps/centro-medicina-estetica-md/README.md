# Centro de Belleza. Medicina & Estética MD

Web de **Centro de Belleza. Medicina & Estética MD**, centro de belleza y
medicina estética en Calle Juan de Jaso, 3 (Ciudad Santa Inés,
Teatinos-Universidad, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`,
  verde clínico + marfil + arena).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centro+de+Belleza.+Medicina+%26+Est%C3%A9tica+MD./@36.7236611,-4.4690269,17z/...`
  (feature `0xd72f739c3331ed5:0xe21f98a3b072cc40`).

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
| `/servicios` | Detalle de áreas (medicina estética, facial, corporal) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.7236611,-4.4690269) más el reverse-geocode OSM (Calle Juan de Jaso 3,
Ciudad Santa Inés, Teatinos-Universidad, 29010 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el centro y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
