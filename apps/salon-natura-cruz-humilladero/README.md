# Salón de belleza Natura

Web de **Salón de belleza Natura**, salón de belleza en Avenida Nehemías
(Cortijo de Torres, Cruz de Humilladero, 29006 Málaga).

No confundir con "Natura Belleza" (Camino del Pato 22, Puerta Blanca), que
tiene su propia web en `apps/natura-belleza`.

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`,
  verde clínico + marfil + arena).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Sal%C3%B3n+de+belleza+Natura/@36.70443,-4.455783,17z/...`
  (feature `0xd72f9d8cc5cb5d3:0xc922e8244b8f9b61`).

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
| `/servicios` | Detalle de áreas (facial, corporal, belleza) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.70443,-4.455783) más el reverse-geocode OSM (Avenida Nehemías,
Cortijo de Torres, Cruz de Humilladero, 29006 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el salón y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
