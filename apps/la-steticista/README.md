# La Steticista

Web de **La Steticista**, centro de estética avanzada en Carrer de Provença 292,
4t 1a (La Dreta de l'Eixample, Eixample, 08008 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `steticista` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/La+Steticista/@41.3943515,2.1612773,17z/...`
  (feature `0x12a4a26539e61457:0xbc565b6dbdad9599`).

## Datos verificados

- Dirección: Carrer de Provença 292, 4t 1a, 08008 Barcelona.
- Tel: 644 80 64 04 (`tel:+34644806404`, WhatsApp `wa.me/34644806404`).
- Horario (ficha Fresha): L-V 9:30–20:30, Sáb 10:00–14:00, Dom cerrado.
- Servicios: facial, corporal, depilación con hilo, masaje. Reserva online.

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
| `/servicios` | Detalle (facial, corporal/bienestar) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
