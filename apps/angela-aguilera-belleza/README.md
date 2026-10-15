# Ángela Aguilera Belleza | Uñas, lifting y facial

Web de **Ángela Aguilera Belleza**, centro de estética en
Calle José María Martorell 1 (Poniente Sur, 14005 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ids en `.maps-manifest.json`). Ver `README_IMAGENES.md` — úsalas solo con
  permiso de la titular/autores.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/%C3%81ngela+Aguilera+Belleza/@37.8781135,-4.7973138,17z/...`
  (feature `0xd6d212447796f59:0xa3a908549458e20b`).

## Scripts

```bash
bun install
bun run dev # desde apps/angela-aguilera-belleza: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs angela-aguilera-belleza
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (uñas, mirada, facial) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.8781135,-4.7973138 y feature id del enlace de Maps aportado.
- Dirección Calle José María Martorell 1, junto a BBVA, Poniente Sur 14005 (publicaciones de Instagram).
- Teléfono 636 51 02 13 (publicación de Instagram).
- Servicios: uñas, lifting, cejas, faciales (higiene + punta de diamante) y masajes (bio de Instagram + TikTok).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el centro.
> 3. Confirma permiso por escrito para las 10 fotos de Google (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
