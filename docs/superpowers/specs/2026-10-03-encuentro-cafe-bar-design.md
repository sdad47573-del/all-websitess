# Diseño · Encuentro Cafe-Bar (Málaga)

**App:** `apps/encuentro-cafe-bar` · **Fecha:** 2026-10-03 · **Origen:** enlace de Google Maps
`https://maps.app.goo.gl/m1pxXYsAwBC3oR8w8`

## Objetivo

Web one-page de SEO local para un cafe-bar de Teatinos, construida con Astro y los componentes
compartidos de `@astro-components`, a partir de los datos públicos de la ficha de Google Maps y de
sus fotografías.

## El local

| Campo       | Valor                                                                  |
| ----------- | ---------------------------------------------------------------------- |
| Nombre      | Encuentro Cafe-Bar                                                     |
| Dirección   | C. Margarita Xirgu, 2, Teatinos-Universidad, 29010 Málaga              |
| Teléfono    | No publicado en la ficha                                               |
| Coordenadas | 36.7217894, -4.4731106                                                 |
| Plus Code   | `PGCG+QQ`                                                              |
| CID         | `0xd72f700396de10d:0x4945af0a6b5dd116` (decimal `5279818597447618838`) |
| Place ID    | `ChIJDeFtOQD3cg0RFtFdawqvRUk`                                          |
| Nota        | 5,0 sobre 21 reseñas                                                   |
| Precio      | 1–10 €                                                                 |
| Servicios   | Comer allí · Para llevar                                               |

### Horario

| Día             | Horario    |
| --------------- | ---------- |
| Lunes           | Cerrado    |
| Martes a sábado | 8:00–24:00 |
| Domingo         | 8:00–16:00 |

El menú de cenas se sirve de 20:00 a 23:00, según la carta publicada en la ficha.

## Decisiones de contenido

### El eje: doble servicio

Lo distintivo del local no es el café sino el horario partido: abre a las ocho de la mañana y cierra
a medianoche. Toda la narrativa gira ahí — el titular del hero (`Pitus desde las ocho, y cena hasta
las once`), la sección de/about (`Dos servicios en el mismo local`), el nombre del propio local
— y explica además por qué la web merece una carta completa en lugar de una simple mención.

### Carta con precios

A diferencia de la mayoría de webs del monorepo, aquí se publican precios: la ficha contiene dos
fotos legibles de la carta real (desayunos en PDF y cenas). Se transcribieron en tres bloques —
desayunos en pitufo/mollete/sándwich, más rellenos y menú de cenas — desde 1,50 € hasta 12,50 €.
Se marcan como orientativos y se advierte de que la carta cambia.

Se conservó el detalle de la línea «PITUFO/MOLLETE/SÁNDWICH | VIENA» de la cabecera, porque es el
término que usa el propio local, y el extra de 0,50 € y el desayuno de la casa de 4,50 €.

### Sin teléfono

No hay número publicado. La web no inventa uno. Los tres componentes que exigen teléfono reciben
una etiqueta honesta que enlaza a la ficha de Google Maps, y el JSON-LD omite el objeto `contact`
para no emitir datos de contacto vacíos. El aviso de la sección de visita lo explica en texto
claro: la ficha es la vía de contacto fiable.

### Fotografías

18 identificadores acumulados en el visor, **9 fotos únicas** tras deduplicar por huella perceptual
(miniatura 16×16 en grises, distancia media < 4). Google sirve cada imagen dos veces, así que el
deduplicador es imprescindible. Se descartaron las fotos con manos de clientes.

Selección: fachada con terraza (hero), las dos cartas, tres bocadillos distintos, un bocadillo en
papel de plata, croquetas con limón y café con leche. La galería final tiene 8 entradas sin
duplicados, con alts que describen lo que se ve en cada imagen.

Las dos cartas se recortaron a proporción 4/5, la que fija el componente, y se colocaron en la 2.ª
y 3.ª casilla del grid. En la ficha son páginas verticales de 0,73 y el `object-fit: cover` del
componente las recortaba por los lados hasta dejar el texto ilegible; además, la 1.ª y la 5.ª
casilla son de doble altura. Con ambas correcciones la carta de desayunos se lee entera, con la
cabecera «PITUFO/MOLLETE/SÁNDWICH | VIENA» y todos los precios, lo que además confirma la
transcripción hecha para la sección de carta.

## Estructura de la página

| Sección  | Componente     | Contenido                                                                                   |
| -------- | -------------- | ------------------------------------------------------------------------------------------- |
| Cabecera | `LocalTopbar`  | Marca «E», enlaces internos, «Google Maps» como contacto                                    |
| Hero     | `LocalHero`    | Titular de doble servicio, 4 datos clave, CTA a la ficha y a cómo llegar                    |
| Chips    | `LocalChips`   | 14 etiquetas: desayunos, pitufo, mollete, viena, hamburguesas, campero, cena, tapas, precio |
| About    | `LocalAbout`   | Cuatro párrafos sobre los dos servicios + nota sobre la muestra de 21 reseñas               |
| Carta    | `LocalMenu`    | Tres grupos transcritos con precios, CTA a la ficha                                         |
| Galería  | `LocalGallery` | 8 fotos de Google Maps con alts descriptivos                                                |
| Visita   | `LocalVisit`   | Dirección, horario de los 7 días, mapa embebido, cómo llegar                                |
| FAQ      | `LocalFaq`     | 9 preguntas, fuente única para el marcado                                                   |
| Pie      | `LocalFooter`  | Dirección, enlaces a la ficha, aviso legal                                                  |

## SEO técnico

- `LocalSeo` con `title`, `description`, keywords de barrio y producto, Open Graph 1200×630,
  `preload` del hero y metadatos geográficos (`latitude`, `longitude`, `placeName`, `postalCode`).
- JSON-LD de dos grafos: `bizSchema` con `@type: ['CafeOrCoffeeShop','Bar','Restaurant']` e
  `openingHoursSpecification` que refleja los dos servicios (el lunes cerrado se declara con
  `opens`/`closes` a `00:00`), `priceRange`, `servesCuisine`, `amenityFeature`, `aggregateRating`,
  `geo`, `identifier` con CID y Place ID, y `faqSchema` generado desde el mismo array `faqs` que
  pinta la sección, para que no puedan divergir.
- Sitemap vía `@astrojs/sitemap`, `robots.txt` propio y `aviso-legal.astro` con el texto legal
  adaptado (sin NIF, porque no se conoce).

## Diseño visual

Paleta cálida de café de barrio tomada de la propia fachada y la carta: crema `#fdf7ee` de fondo,
burdeos `#7a2e2e` (rótulo y cartas), naranja `#c96c3a` (madera de las mesas) y oro `#e2c063` (las
estrellas de 5,0 de la ficha). Titulares en `Fraunces`, texto en `Work Sans`.

Se usa el recurso del lugar sin inventar: **sin CTA de llamada fija en móvil**, porque no hay
teléfono. En su lugar, el enlace persistente abre la ficha de Google Maps.

## Verificación

`node scripts/check-site-content.mjs encuentro-cafe-bar` → 0 errores, 0 avisos.
`bun run --filter encuentro-cafe-bar check` → 0 errores, 0 avisos, 1 hint (la declaración de
`@astro-config`, heredada del monorepo). `typecheck` y `build` correctos, 2 páginas.
Revisión en navegador: 9 imágenes, ninguna sin cargar, sin errores de consola, un solo `h1`, 9 FAQ
y pie correctos.
