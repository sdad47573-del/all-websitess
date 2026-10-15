# IBIZA centro de estética | Estética y nutrición

Web de **IBIZA centro de estética**, estética, nutrición y dietética en
C. Isla Ibiza 4 (Noroeste / Arroyo del Moro, 14011 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 1 foto descargada de la ficha de Google Maps (`ibiza-estetica-vertical-01.jpg`, id en `.maps-manifest.json`) + marcadores SVG propios. Ver `README_IMAGENES.md` — úsala solo con permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/IBIZA+centro+de+est%C3%A9tica/@37.89074,-4.799004,17z/...`
  (feature `0xd6cdf5ab814c91b:0x42908036c4ccb4e8`).

## Scripts

```bash
bun install
bun run dev # desde apps/ibiza-estetica: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs ibiza-estetica
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (mirada, facial, bienestar) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.89074,-4.799004 y feature id del enlace de Maps aportado.
- Dirección C. Isla Ibiza 4, 14011 Córdoba + teléfono 957 08 88 18 (Facebook + directorios).
- Horario (Fresha): lun,mar,jue,vie,sáb 10:00–13:30, mié 10:00–18:30, dom cerrado.
- Servicios: Lash Lift destacado + estética, nutrición/dietética.

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el centro.
> 3. Confirma permiso por escrito para la foto de Google y pide fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
