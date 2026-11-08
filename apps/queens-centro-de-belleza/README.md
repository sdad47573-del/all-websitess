# Queens Centro de Belleza

Web de **Queens Centro de Belleza**, centro de belleza y peluquería en Carrer del
Rosselló 55 (Nova Esquerra de l'Eixample, Eixample, 08029 Barcelona).

- Astro + Tailwind CSS 4 + daisyUI (tema `queens` en `src/styles/index.css`).
- Datos del negocio en `src/data/site.ts`.
- 10 fotos descargadas de la ficha de Google Maps en `src/assets/fotos/*.jpg`
  (ver `.maps-manifest.json`). Galería con 8 + hero/salón.
- Enlace de Google Maps aportado:
  `https://www.google.com/maps/place/Queens+Centro+de+Belleza/@41.3847304,2.1455229,17z/...`
  (feature `0x12a4999113970303:0x2fb3cdc04d326db9`).

## Datos verificados

- Dirección: Carrer del Rosselló 55, 08029 Barcelona (Metro L5 Entença).
- Tel: 656 76 68 91 (`tel:+34656766891`, WhatsApp `wa.me/34656766891`).
- Horario: L-V 10:00–20:00, Sáb 10:00–15:00, Dom cerrado.
- 4,8 en Google con 237 reseñas. Peluquería (Paula), láser (Adelia), uñas (Patricia).

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
| `/servicios` | Detalle (peluquería/color, facial/corporal) sin precios inventados |
| `/aviso-legal` | Aviso legal + privacidad |

> ⚠️ **Antes de publicar**:
>
> 1. Completa NIF/CIF y correo en `LEGAL` (`src/data/site.ts`).
> 2. Si el dominio final cambia, actualiza `BUSINESS.siteUrl`,
>    `astro.config.mjs` → `site` y `public/robots.txt`.
