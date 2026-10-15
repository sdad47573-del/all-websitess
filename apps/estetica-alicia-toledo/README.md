# Estética Alicia Toledo | Peluquería, láser y estética

Web de **Estética Alicia Toledo**, peluquería y estética en
Plaza Marina Española 16, local (Parque Figueroa, 14011 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ids en `.maps-manifest.json`). Ver `README_IMAGENES.md` — úsalas solo con
  permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Est%C3%A9tica+Alicia+Toledo/@37.8912377,-4.8053837,17z/...`
  (feature `0xd6cdf51e350b693:0xfa54f90c7d0abc20`).

## Scripts

```bash
bun install
bun run dev # desde apps/estetica-alicia-toledo: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs estetica-alicia-toledo
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (láser, peluquería, estética) sin precios fijos |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.8912377,-4.8053837 y feature id del enlace de Maps aportado.
- Dirección Plaza Marina Española 16, 14011 Córdoba + teléfono 957 94 67 27 (QDQ/BellezaOn).
- Horario: lun–vie 10:00–20:00, sáb 10:00–14:00 (Groupon).
- Servicios: láser diodo 800 W por zonas, peluquería, estética.

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el centro.
> 3. Confirma permiso por escrito para las 10 fotos de Google (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
