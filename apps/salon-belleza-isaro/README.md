# Salón De Belleza Isaro - Córdoba | Peluquería, manicura y pedicura

Web de **Salón De Belleza Isaro - Córdoba**, peluquería y belleza en
Av. de Manolete 14 (Poniente Sur, 14005 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ids en `.maps-manifest.json`). Ver `README_IMAGENES.md` — úsalas solo con
  permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Sal%C3%B3n+De+Belleza+Isaro+-+C%C3%B3rdoba/@37.879831,-4.7969215,17z/...`
  (feature `0xd6d20a76a505a3b:0x7928dc3aa5de2075`).

## Scripts

```bash
bun install
bun run dev # desde apps/salon-belleza-isaro: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs salon-belleza-isaro
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el salón, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (peluquería, uñas) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.879831,-4.7969215 y feature id del enlace de Maps aportado.
- Dirección Av. de Manolete 14, 14005 Córdoba + teléfonos 638 25 92 41 / 957 46 82 04 (Instagram/TikTok).
- Horario (Fresha): lun–vie 9:30–19:00, sáb 9:00–14:00, dom cerrado.
- Servicios: peluquería, manicura (mujer y hombre), pedicura.

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el salón.
> 3. Confirma permiso por escrito para las 10 fotos de Google (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
