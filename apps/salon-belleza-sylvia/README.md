# Salón de Belleza Sylvia | Peluquería y estética

Web de **Salón de Belleza Sylvia**, peluquería unisex y centro de estética en
C. Pintor Monroy 6 (Nte. Sierra, 14012 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- Sin fotos descargables de Google (3 intentos sin bloque de fotos): 5 SVG propios en `src/assets/fotos/`. Ver `README_IMAGENES.md`.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Sal%C3%B3n+de+Belleza+Sylvia/@37.9090705,-4.7791103,17z/...`
  (feature `0xd6cdf0e10a27169:0x554bed62b708a429`).

## Scripts

```bash
bun install
bun run dev # desde apps/salon-belleza-sylvia: bun run dev
bun run build # build estático
```

Reintentar la descarga (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs salon-belleza-sylvia
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el salón, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (peluquería, facial, uñas) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.9090705,-4.7791103 y feature id del enlace de Maps aportado.
- Dirección C. Pintor Monroy 6, 14012 Córdoba + teléfono 957 40 51 44 (directorios + Fresha).
- Servicios: peluquería unisex, facial con extracciones, uñas de gel/permanente (Fresha + Facebook).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el salón.
> 3. Pide fotos originales al salón (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
