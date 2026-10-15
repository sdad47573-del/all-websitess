# Salón de belleza Zibá | Peluquería y estética

Web de **Salón de belleza Zibá**, peluquería y centro de estética en
Pasaje Fraternidad, 6 (Sureste, 14010 Córdoba).

- Astro + Tailwind CSS 4 + daisyUI (tema `medicina` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ids en `.maps-manifest.json`). Ver `README_IMAGENES.md` — úsalas solo con
  permiso del titular/autor.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Salon+de+belleza+Zib%C3%A1/@37.8782833,-4.7617569,17z/...`
  (feature `0xd6d217a055decaf:0x8fa845e1833ab6b7`).

## Scripts

```bash
bun install
bun run dev # desde apps/salon-belleza-ziba: bun run dev
bun run build # build estático
```

Descargar de nuevo las fotos (desde la raíz del monorepo):

```bash
node scripts/fetch-maps-photos.mjs salon-belleza-ziba
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el salón, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (peluquería, belleza) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

## Contenido y fuentes

- Nombre, coordenadas 37.8782833,-4.7617569 y feature id del enlace de Maps aportado.
- Dirección Pje. Fraternidad, 6, 14010 Córdoba (Fresha + Maps).
- Teléfono 642 91 02 71 (Facebook del salón).
- Horario: lun cerrado, mar–jue 9:30–13:30, vie 9:30–18:30, sáb 9:00–14:00, dom cerrado (Fresha).
- Servicios: peluquería y estética, corte de pelo para mujer (Fresha/Facebook).

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF, razón social y correo en `LEGAL` (`src/data/site.ts`).
> 2. Confirma horario y servicios con el salón (pueden variar en festivos).
> 3. Confirma permiso por escrito para las 10 fotos de Google (ver `README_IMAGENES.md`).
> 4. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
