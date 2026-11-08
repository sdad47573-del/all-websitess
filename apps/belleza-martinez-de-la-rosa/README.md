# Belleza (Martínez de la Rosa, 147)

Web de **Belleza**, salón de belleza en Calle Martínez de la Rosa, 147
(Suárez, Bailén-Miraflores, 29010 Málaga).

El nombre de la ficha es genérico, así que la web lo identifica siempre con su
dirección para distinguirlo de otros negocios llamados igual.

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`,
  verde clínico + marfil + arena).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Belleza/@36.7271655,-4.4410212,17z/...`
  (feature `0xd72f7144937b07f:0xecb0e9e95cebfe82`).

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
36.7271655,-4.4410212) más el reverse-geocode OSM (Calle Martínez de la Rosa
147, Suárez, Bailén-Miraflores, 29010 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el salón y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
