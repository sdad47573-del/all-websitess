# Medicina & Belleza

Web de **Medicina & Belleza**, centro de medicina y belleza en la Avenida
Cánovas del Castillo, 3 (La Malagueta, Centro, 29016 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`,
  verde clínico + marfil + arena).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Medicina+%26+Belleza/@36.7194888,-4.4112038,17z/...`
  (feature `0xd72f7de5f47c371:0x27faea6671b86c3e`).

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
| `/` | Portada: hero, destacados, la clínica, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle de áreas (medicina estética, facial, corporal) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.7194888,-4.4112038) más el reverse-geocode OSM (Av. Cánovas del Castillo 3,
La Malagueta, 29016 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el centro y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
