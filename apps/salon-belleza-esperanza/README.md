# Salón De Belleza Esperanza

Web de **Salón De Belleza Esperanza**, salón de belleza en la Av. Obispo Ángel
Herrera Oria, 20 (Arroyo del Cuarto, Cruz de Humilladero, 29007 Málaga).

- Astro + Tailwind CSS 4 + daisyUI (tema `esperanza` en `src/styles/index.css`,
  verde + marfil + dorado suave).
- Datos del negocio en `src/data/site.ts`.
- Fotos propias de marcador en `src/assets/fotos/*.svg` (no se reutilizan fotos
  de Google Maps por copyright). Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Sal%C3%B3n+De+Belleza+Esperanza/@36.7185004,-4.4399478,17z/...`
  (feature `0xd72f77574dd887b:0x7cc1cdfa09f3e306`).

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
| `/servicios` | Detalle de áreas (peluquería, facial, corporal) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

La información verificable es solo la del enlace de Maps (nombre, coordenadas
36.7185004,-4.4399478) más el reverse-geocode OSM (Av. Herrera Oria 20, Arroyo
del Cuarto, Cruz de Humilladero, 29007 Málaga).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma teléfono, horario y carta real con el salón y actualiza
>    `BUSINESS` + `SCHEMA`. Ahora mismo remiten a la ficha de Google a propósito.
> 3. Sustituye los SVG por fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
