# Centro de Belleza Alma | Facial, uñas y depilación

Web de **Centro de Belleza Alma**, centro de estética en
C. Pintor Arbasia 12 (Nte. Sierra, 14006 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ids en `.maps-manifest.json`). Ver `README_IMAGENES.md` — úsalas solo con
  permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Centro+de+Belleza+Alma/@37.8983708,-4.7738382,17z/...`
  (feature `0xd6cdf234d2c947d:0xafe6a5a06659be61`).

## Scripts

```bash
bun install
bun run dev # desde apps/centro-belleza-alma: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs centro-belleza-alma
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (facial, manos, depilación) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.8983708,-4.7738382 y feature id del enlace de Maps aportado.
- Dirección C. Pintor Arbasia 12, 14006 Córdoba + teléfono/WhatsApp 663 79 70 14 + Instagram @almacentrodebelleza.
- Horario (WaiCita): lun cerrado, mar 9:30–13:30/16:30–20:00, mié–vie 9:30–19:00, sáb 9:00–14:00, dom cerrado.
- Servicios: faciales personalizados, manicura/pedicura, depilación profesional.

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el centro.
> 3. Confirma permiso por escrito para las 10 fotos de Google (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
