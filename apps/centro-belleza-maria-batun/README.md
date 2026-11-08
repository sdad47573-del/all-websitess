# Centro de belleza María Batún

Web de **Centro de belleza María Batún**, centro de belleza en la Calle
Baltasar Gracián (Los Girasoles, Carretera de Cádiz, 29003 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `mariabatun` en `src/styles/index.css`,
  siena + crema + dorado girasol).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centro+de+belleza+Mar%C3%ADa+Bat%C3%BAn/@36.6947801,-4.4529713,17z/...`
  (feature `0xd72f9395b398e63:0x6daad6055fc675a4`).

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
36.6947801,-4.4529713) más el reverse-geocode OSM (Calle Baltasar Gracián, Los
Girasoles, Carretera de Cádiz, 29003 Málaga; sin número de portal verificable,
por eso la dirección no lleva número).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma número de portal, teléfono, horario y carta real con el centro y
>    actualiza `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
