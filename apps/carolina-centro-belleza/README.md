# Carolina Centro & Belleza

Web de **Carolina Centro & Belleza**, centro de belleza en la Calle Francisco
López López, 8 (Ciudad Jardín, 29014 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `carolina` en `src/styles/index.css`,
  granate + rosa + crema).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Carolina+Centro+%26+Belleza/@36.742079,-4.4216928,17z/...`
  (feature `0xd72f7b4c3f1a54f:0x7ab2145b0a7faf1c`).

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
36.742079,-4.4216928) más el reverse-geocode OSM (Calle Francisco López López
8, Ciudad Jardín, 29014 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el centro y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
