# Los Tres Carriles — Venta Hurtado

Landing page estática en Astro para Restaurante Los Tres Carriles
(Venta Hurtado), venta de carretera en Ctra. de La Muela km 3,8 ·
11150 Vejer de la Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/los-tres-carriles
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, mapa) y `FAQPage`. El schema
  omite horarios: el horario verificado es matizado (abren a diario desde las 6:00 hasta
  la noche; lunes cerrado entero y domingos cerrado por la noche) sin hora exacta de cierre.
- Datos contrastados con la ficha de Google Maps (coords del enlace del cliente:
  36.2686242, -5.9889609) y Cosasdecome Cádiz (Ctra. de La Muela km 3,8, tel. 956 44 84 16,
  precio 20–30 €): Venta Hurtado desde los 80, terraza, barra para tapear y tres salones,
  desayunos con lomo en manteca colorá y mollete de El Bosque, guisoteo, arroces, pollo de
  campo, conejo, venado y brasa de ibérico y retinto. Admiten reservas.
- No se publican carta ni precios detallados por falta de fuente verificable.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos de la venta (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Sustituye los SVG por fotos propias (cruce, terraza, salones, desayunos, brasa).
2. Ajusta los textos `alt` según lo que se vea en cada imagen.
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular y confirma el horario vigente
   en el 956 44 84 16.
