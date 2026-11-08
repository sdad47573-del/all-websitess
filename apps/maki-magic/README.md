# Maki Magic — sushi y bar en la Quinta do Conde

Web estática en Astro para **Maki magic sushi restaurante & bar**, en la R. Garcia da Orta 545 r/c, 2975-275 Quinta do Conde (Sesimbra, Setúbal). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Maki magic sushi restaurante & bar
- Dirección: R. Garcia da Orta, 545 r/c · 2975-275 Quinta do Conde (Sesimbra)
- Categorías: restaurante de sushi y restaurante japonés
- Teléfono: 21 015 0807 (+351)
- Valoración: 4,5/5 con 457 reseñas
- Horario: lunes cerrado; de martes a domingo 12:00–15:00 y 19:00–23:00
- Accesibilidad: entrada, aparcamiento, aseo y asientos adaptados para sillas de ruedas (completa)
- Descripción del propio local: «um restaurante de sushi completo com frescura, criatividade e originalidade»

La ficha **no publica carta con precios ni web propia**: solo el teléfono.

## La carta

Sin precios ni carta publicada. Los apartados salen de las fotos del perfil: combinado redondo con plato central de sashimi, bandeja grande para compartir, sashimi al corte, nigiri con crema y topping dulce, uramaki, hot rolls rebozados con mayonesa picante y rolls con salsa de anguila, más gari y wasabi.

## Takeaway y reparto

En sus redes el restaurante anuncia menú de sushi y servicio de takeaway, y aparece en plataformas de reparto con entrega y recogida. La web no enlaza a ninguna plataforma concreta: lo resuelve con el teléfono, que es el único canal que publica la ficha.

## Fotos

Diez fotografías: el combinado redondo sostenido por un cocinero, la bandeja grande, tres platos de sashimi, el nigiri con crema y topping dulce, tres detalles de rolls y el comedor con la barra de piedra al fondo.

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://maki-magic.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local la carta y los precios, el servicio de takeaway y si sigue habiendo atención de barra/bar.
- Comprobar la relación con la página de Facebook «Maki Magic Restaurante sushi & bar azeitão» (parece otro local de la misma marca): la web es solo la de la ficha de Google de Quinta do Conde.

## Comandos

```bash
bun install          # desde la raíz del monorepo
bunx astro dev       # desarrollo
bunx astro build     # genera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` no funciona en este repo porque usa TypeScript 7; se valida con `tsc`.

## Crédito

El pie de página enlaza a **Sur Digital** → https://sur-digital.vercel.app/
