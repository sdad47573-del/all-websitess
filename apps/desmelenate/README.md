# Desmelenate

Web de **Desmelenate**, peluquería en la Calle Escritora Carmen Conde, 3
(Torre Atalaya, Teatinos-Universidad, 29010 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `desmelenate` en `src/styles/index.css`,
  cobre + crema + marrón cálido).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Desmelenate/@36.7252201,-4.4731599,17z/...`
  (feature `0xd72f76b64470123:0x2a8da6883a2439dd`).

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
| `/` | Portada: hero, destacados, la pelu, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle de áreas (corte, color, peinado) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.7252201,-4.4731599) más el reverse-geocode OSM (Calle Escritora Carmen Conde
3, Torre Atalaya, Teatinos-Universidad, 29010 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con la peluquería y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
