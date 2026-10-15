# María Ruz Centro de Estética & Bienestar | Córdoba

Web de **María Ruz Centro de Estética & Bienestar**, centro de estética en
Profesor Tierno Galván 6 (Levante, 14014 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 3 fotos descargadas de la ficha de Google Maps (`maria-ruz-estetica-*.jpg`, ids en `.maps-manifest.json`) + marcadores SVG propios. Ver `README_IMAGENES.md` — úsalas solo con permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Mar%C3%ADa+Ruz+Centro+de+Est%C3%A9tica+%26+Bienestar/@37.9009463,-4.7582646,17z/...`
  (feature `0xd6cdf9778890e5b:0x8ded725e6d501e93`).

## Scripts

```bash
bun install
bun run dev # desde apps/maria-ruz-estetica: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs maria-ruz-estetica
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (facial, corporal, manos) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.9009463,-4.7582646 y feature id del enlace de Maps aportado.
- Dirección Profesor Tierno Galván 6, 14014 Córdoba + teléfono 957 43 92 65 + horario lun–vie 10:00–13:30/17:00–20:30, sáb 10:00–13:00, dom cerrado (Cylex).
- Servicios (facial, corporal, manos/pies) de la web propia masajesruzbeauty.com.

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el centro.
> 3. Confirma permiso por escrito para las 3 fotos de Google y pide fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
