# Centro de belleza Mª Jesús

Web de **Centro de belleza Mª Jesús**, centro de belleza en la Calle Garcerán,
43 (Huelin, Carretera de Cádiz, 29002 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `mariajesus` en `src/styles/index.css`,
  malva + marfil + melocotón).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centro+de+belleza+M%C2%AAJes%C3%BAs/@36.7028354,-4.4376122,17z/...`
  (feature `0xd72f781dcc095fd:0x2fd96c88aea8cd2a`).

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
36.7028354,-4.4376122) más el reverse-geocode OSM (Calle Garcerán 43, Huelin,
Carretera de Cádiz, 29002 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el centro y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
