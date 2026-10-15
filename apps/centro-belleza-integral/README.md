# Centro de Belleza Integral | Estética 360°

Web de **Centro de Belleza Integral**, centro de estética en
C. Ingeniero Juan A. Vigueras González 2 (Levante, 14014 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 1 foto descargada de la ficha de Google Maps (`centro-belleza-integral-apaisada-01.jpg`, id en `.maps-manifest.json`) + marcadores SVG propios. Ver `README_IMAGENES.md` — úsala solo con permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/CENTRO+DE+BELLEZA+INTEGRAL/@37.9010719,-4.7536495,17z/...`
  (feature `0xd6cdf084d8e952b:0x7b7d396cd058f365`).

## Scripts

```bash
bun install
bun run dev # desde apps/centro-belleza-integral: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs centro-belleza-integral
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (facial, corporal, manos) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.9010719,-4.7536495 y feature id del enlace de Maps aportado.
- Dirección C. Ingeniero Juan A. Vigueras González 2, 14014 Córdoba + Instagram @belleza_integral_cordoba (servicio 360°).
- Teléfono 686 64 16 85 y 5,0 agregada (14 Google + 12 Facebook) según directorios (Cylex/Yably).
- Horario y precios: no publicados → se remite a la ficha o al teléfono, no se inventan.

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el centro.
> 3. Confirma permiso por escrito para la foto de Google y pide fotos originales (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
