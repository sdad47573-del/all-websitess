# La Chimenea Restaurante · web (Astro)

Web de una sola página (one-page) para **La Chimenea Restaurante**, parrilla de carnes a la
brasa en la calle Juan de Rihuerga, 29 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «parrilla Teatinos Málaga», «carnes a la brasa Málaga»,
«chuletón Málaga» o «comer en Teatinos», y galería con las fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter la-chimenea-restaurante dev      # http://localhost:4321
bun run --filter la-chimenea-restaurante check    # astro check
bun run --filter la-chimenea-restaurante typecheck
bun run --filter la-chimenea-restaurante build
bun run --filter la-chimenea-restaurante preview
```

> Nota: `astro check` informa de 1 *hint* (TS7016) por el paquete de workspace `@astro-config`.
> Es el comportamiento habitual en el resto de apps del monorepo.

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y
el plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://la-chimenea-restaurante.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las
etiquetas canonical/OG cuando haya dominio definitivo.**

## Estructura

```
public/
  favicon.svg
  robots.txt
  fotos/            # 8 fotografías de la ficha de Google Maps (máx. 1600 px)
src/
  pages/index.astro # toda la página + JSON-LD
  styles/global.css # estilos propios (carbón + brasa), responsive
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre, categorías (Parrilla, Bar, Asador, Taberna, Carnicería…) | ficha de Google Maps |
| Dirección: C. Juan de Rihuerga, 29, Teatinos-Universidad, 29010 Málaga | Google Maps (y resto de fichas) |
| Teléfono: 675 05 71 43 | Google Maps |
| Plus Code: PGGM+CF Málaga | Google Maps |
| Coordenadas: 36.7260373, -4.4662599 | URL de Google Maps |
| Valoración: 3,9 con 530 reseñas | Google Maps (septiembre 2026) |
| Precio medio: 20–30 € por persona | Google Maps (RestaurantGuru publica 20–40 €) |
| Horario: comidas 13:00–17:00 todos los días; cenas 20:30–00:00 viernes y sábado | RestaurantGuru y fichas agregadas del horario publicado |
| Especialidades (chuletón, entrecot, croquetas de rabo de toro, chistorra, queso payoyo, patatas con alioli) | menciones destacadas por Google en las reseñas + RestaurantGuru |
| Sin gluten (entrantes, guarniciones y postres; patatas en freidora aparte) | reseñas públicas (agosto 2026) y fichas agregadas |
| Aviso de efectivo («puede que no acepten tarjeta») | resumen de reseñas de Google |

## Fotos

Las 8 imágenes de `public/fotos/` se descargaron de la galería pública de la **ficha de Google
Maps del restaurante** (perfil de contribuidor de la ficha, 574 fotos en total en septiembre de
2026) en su variante de mayor resolución disponible (1600 px en el lado mayor) y se
renombraron con nombres descriptivos. No se han usado imágenes generadas ni ilustraciones: todas
son fotografías reales del establecimiento o de sus platos.

- `la-chimenea-restaurante-malaga.jpg` — imagen principal (1600×1066), también usada como `og:image`.
- `la-chimenea-restaurante-malaga-foto-1…7.jpg` — galería (mezcla de horizontales y verticales).

La web acredita su procedencia en la propia galería y en el pie («Fotografías procedentes de la
ficha del restaurante en Google Maps»). **Si el titular pide retirarlas, se sustituyen.**

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt` y metadatos.
- [ ] Revisar los `alt` y el orden de las fotos: al descargarlas desde Google no es posible
      verificar visualmente qué muestra cada una. El pie de la galería es genérico a propósito.
- [ ] Confirmar el horario por teléfono. La ficha de Google mostraba «Abierto · Cierre: 0:00» en
      una consulta de miércoles por la tarde, mientras que las fichas agregadas dan
      13:00–17:00 de lunes a jueves. En la web se publica el horario de esas fichas agregadas
      junto a un aviso de «confirma antes de venir».
- [ ] Confirmar si aceptan tarjeta: las reseñas de Google y las fichas agregadas apuntan a
      efectivo, pero Trip.com marca «Cards accepted». En la web se explica como aviso, no como
      afirmación.
- [ ] Verificar la cuenta de Instagram: se enlaza `@lachimenea_restaurante` (aparece junto al
      teléfono del local en los resultados de búsqueda). RestaurantGuru menciona otra cuenta,
      `@restaurante_lachimenea`.
- [ ] Buscar/crear la ficha de Google del negocio para que valide la web (Google Business Profile)
      y rellenar las categorías y atributos que falten (la ficha no tiene web propia).
- [ ] No se publican precios cerrados de la carta: no hay carta oficial fiable y muchas carnes se
      cobran al peso.

## Notas de diseño

Paleta propia de asador (carbón `#14100e`, brasa `#e2571f`, oro `#f6c66b`, crema `#f6efe6`),
tipografía `Fraunces` para titulares y `Manrope` para el texto. Layout responsive con puntos de
ruptura en 1080, 980 y 620 px, CTA de llamada fija en móvil y soporte de `prefers-reduced-motion`.
