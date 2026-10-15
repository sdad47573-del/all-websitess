# Élite Belleza | Peluquería y estética

Web de **Élite Belleza**, peluquería y salón de estética en
C. Pintor Cuenca Muñoz (Centro, 14008 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- Sin fotos descargables de Google (3 intentos sin bloque de fotos): 5 SVG propios en `src/assets/fotos/`. Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/%C3%89lite+Belleza/@37.8858992,-4.783931,17z/...`
  (feature `0xd6cdf8ea4114187:0x29ceae430d79d0e4`).

## Scripts

```bash
bun install
bun run dev # desde apps/elite-belleza: bun run dev
bun run build # build estático
```

Reintentar la descarga (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs elite-belleza
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el salón, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (peluquería, uñas, estética) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.8858992,-4.783931 y feature id del enlace de Maps aportado.
- Dirección C. Pintor Cuenca Muñoz, 14008 Córdoba + teléfono 957 39 18 01 (ficha agregada verificada 09/09/2026).
- Horario: lun–vie 9:00–20:00, sáb 9:00–14:00, dom cerrado.
- Servicios: peluquería, manicura, pedicura, facial y corporal (objeto social ELITE BELLEZA 2049 SL).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el salón.
> 3. Pide fotos originales al salón (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
