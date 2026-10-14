# Natura Belleza

Web de **Natura Belleza**, centro de belleza en el Camino del Pato, 22
(Puerta Blanca, Carretera de Cádiz, 29004 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `natura` en `src/styles/index.css`,
  verde hoja + crema + lima suave).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Natura+Belleza/@36.689509,-4.4514252,17z/...`
  (feature `0xd72f931d76454ab:0x98f52030721dcb70`).

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
36.689509,-4.4514252) más el reverse-geocode OSM (Camino del Pato 22, Puerta
Blanca, Carretera de Cádiz, 29004 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el centro y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
