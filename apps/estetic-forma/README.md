# Estètic Forma

Web de **Estètic Forma**, centro de estética en Avinguda República Argentina 279
(Sant Gervasi, Sarrià-Sant Gervasi, 08023 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `forma` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 8 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Est%C3%A8tic+forma/@41.413709,2.1381461,17z/...`
  (feature `0x12a49805ade71465:0x1d40078cc3204fff`).

## Datos verificados

- Dirección: Avinguda República Argentina 279, 08023 Barcelona (Sant Gervasi).
- Tel: 932 11 97 28 y móvil 615 28 22 55 (WhatsApp `wa.me/34615282255`).
- Horario (Cylex, jul-2026): L-V 10:00–20:00, Sáb y Dom cerrado.
- Servicios: Shellac CND, higienes faciales, depilación cera y láser, INDIBA,
  presoterapia, vacuoterapia, masajes, cabina UVA. Sin tarifa online ni reseñas
  verificables: no se publican importes ni valoraciones inventadas.

## Scripts

```bash
bun install
bun run dev # servidor de desarrollo
bun run build # build estático
bun run check # astro check
bun run typecheck
```

## Páginas

| Ruta | Contenido |
| ---- | --------- |
| `/` | Portada: hero, destacados, el centro, servicios, galería, contacto/mapa y FAQ |
| `/servicios` | Detalle (manos/pies/facial, corporal/aparatología) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
