# Todo Belleza

Web de **Todo Belleza**, centro de belleza en la Calle Escultor Marín Higuero
(Echeverría del Palo, Este, 29017 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `todo` en `src/styles/index.css`,
  azul mar + arena + sol).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Todo+Belleza/@36.7206367,-4.3645608,17z/...`
  (feature `0xd7258371bb9c117:0xff99bb9b7cd16f11`).

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
| `/servicios` | Detalle de áreas (peluquería, facial, corporal) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.7206367,-4.3645608) más el reverse-geocode OSM (Calle Escultor Marín Higuero,
Echeverría del Palo, Este, 29017 Málaga; sin número de portal verificable, por
eso la dirección no lleva número).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma número de portal, teléfono, horario y carta real con el centro y
>    actualiza `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
