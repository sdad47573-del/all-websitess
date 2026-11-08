# Montse Duran. Estètica i Teràpies

Web de **Montse Duran. Estètica i Teràpies**, centro de estética en Carrer de
Felip II 213 (Sant Andreu, 08027 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `montse` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Montse+Duran.+Est%C3%A8tica+i+Ter%C3%A0pies/@41.426651,2.1784869,17z/...`
  (feature `0x12a4bd2ebebca7d9:0x467efc378692ef65`).

## Datos verificados

- Dirección: Carrer de Felip II 213, 08027 Barcelona (Sant Andreu).
- Tel: 933 52 12 15 y móvil 685 51 01 33 (WhatsApp `wa.me/34685510133`).
- Horario (directorio Cylex): L-V 10:00–19:30, Sáb y Dom cerrado.
- Servicios: facial, corporal, terapias. Sin tarifa online ni reseñas verificables:
  no se publican importes ni valoraciones inventadas.

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
| `/servicios` | Detalle (estética, terapias/bienestar) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
