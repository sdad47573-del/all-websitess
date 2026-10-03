# Rabiosos Cafe Bar · diseño de la web

**Fecha:** 2026-10-03
**App:** `apps/rabiosos-cafe-bar`
**Origen:** enlace de Google Maps facilitado por el usuario (`maps.app.goo.gl/EJbVMMX9c85axzgd6`)

## 1. Negocio identificado

El enlace corto resuelve a **Rabiosos Cafe Bar**, en C. Frank Capra, 8, local 13, Teatinos-Universidad,
29010 Málaga. Sigue siendo conveniente confirmarlo con el cliente: en las iteraciones anteriores de
este mismo encargo los enlaces cortos han apuntado a negocios distintos de los esperados.

| Campo | Valor |
| --- | --- |
| Nombre | Rabiosos Cafe Bar |
| Dirección | C. Frank Capra, 8, local 13, Teatinos-Universidad, 29010 Málaga |
| Teléfono | 623 32 27 51 |
| Categoría | Bar (ambiente LGBTQ+) |
| Nota | 4,0 sobre 186 reseñas |
| Horario | lunes a viernes 7:30–1:00; sábado y domingo cerrado |
| Coordenadas | 36.7188074, -4.4605594 (Plus Code `PG9Q+GQ Málaga`) |
| CID | `0xd72f734c4ff32d7:0x5ce70543f0fdfb11` |
| Place ID | `ChIJ1zL_xDT3cg0REfv98EMF51w` |
| Web / redes | ninguna publicada en la ficha |

## 2. Cómo se han obtenido los datos

Mismo flujo que en las webs anteriores del monorepo: `curl` sobre el enlace corto para resolver la
redirección, y Playwright en headless con cookies de consentimiento para leer el panel de Google Maps
(`curl` y `chrome-headless-shell` se quedan en el muro de consentimiento).

Dos cosas Claves que hubo que resolver en este local:

- **El horario no salió ni por `aria-label` ni del volcado de `APP_INITIALIZATION_STATE`.**Hubo que
  recorrer la tabla (`table tr`, `[role="row"]`) después de hacer scroll dentro del panel del lugar,
  que es lo que fuerza a Google a cargar la ficha completa en vez de la vista limitada.
- **La galería exige más recorrido.** Las primeras pasadas solo dieron 20 imágenes y parecían agotarse.
  agotarse. Lo que funcionó fue acumular el resultado de **varias sesiones independientes** en
  ficheros distintos y unirlos al final, en lugar de reintentar sobre la misma variable en memoria.
  Con nueve pasadas se obtuvieron 48 imágenes únicas, coherente con las «57+ fotos» que anuncia la
  ficha.

Un intento con el script anterior devolvió 966 imágenes: la causa fue que el identificador se
recortaba mal y arrastraba miniaturas de otros lugares. Ese juego se descartó y se rehízo acotando
al visor del lugar.

**Revisión visual obligatoria.** Se montaron cuatro hojas de contactos y se leyó cada imagen. Todas
resultaron ser del local, pero Google sirve cada foto dos veces en el visor, así que se escribió un
pasaje de deduplicación por huella perceptual (miniatura 16×16 en escala de grises, distancia media
de píxeles) que eliminó **13 duplicados exactos**.

## 3. La carta real

Es la diferencia principal respecto a las demás webs del monorepo: **la ficha de Google Maps
contiene fotografías legibles de la carta del local**, dos páginas:

- La de bocadillos, con más de treinta referencias y dos columnas de precios (pitufo normal o
  integral), más un bloque de «sandwich o croissant» y otro de extras (0,50 € a 0,80 €).
- La de tapas, con dieciséis referencias y precios de 2,50 € a 4,00 €, incluyendo la empanada
  argentina, las croquetas, las tortitas de camarones y las berenjenas al escabeche.

Se transcribieron ambas y se agruparon en tres bloques: bocadillos, tapas y empanadas/desayuno/bar.
Es la primera web del monorepo que publica precios, y se hace con una advertencia explícita: están
transcritos de una foto que puede tener meses y la carta cambia con frecuencia. Queda como
pendiente confirmarlos con el local.

Lo que cuenta de las reseñas: los desayunos son la etiqueta más votada (28 reseñas), seguida de
bocadillos (9) y carta (8). Hay reseñas muy positivas sobre las empanadas y las hamburguesas de
carne madurata, y también algunas muy negativas sobre el servicio en horas punta. La web recoge lo
positivo, sin emitir un juicio: no se amplifican ni las opiniones malas ni se descalifica al local, porque
el objetivo es informativo, no reproducing las reseñas.

## 4. Estructura de la página

One-page con los componentes compartidos de `@astro-components`, siguiendo el patrón ya establecido
en `apps/amorato-malaga`:

1. `LocalTopbar` — marca «R», navegación y teléfono siempre visible.
2. `LocalHero` — titular «Más de treinta bocadillos y un bar», lede con ubicación, specialty, franja
   de precios y nota, CTA de llamada y de ficha en Maps, y cuatro facts.
3. `LocalChips` — catorce etiquetas de producto y servicio.
4. `LocalAbout` — cuatro párrafos sobre el local y una nota con la valoración.
5. `LocalMenu` — tres grupos (bocadillos, tapas, y empanadas/desayuno/bar), con precios.
6. `LocalGallery` — 21 fotos con alt descriptivo orientado a búsqueda local.
7. `LocalVisit` — dirección, horario semanal completo, mapa incrustado y contacto.
8. `LocalFaq` — nueve preguntas frecuentes.
9. `LocalFooter` — pie con enlaces a Google Maps y aviso de procedencia de las imágenes.

Más `src/pages/aviso-legal.astro`, con aviso legal, privacidad y cookies, y los campos legales
pendientes marcados en un aviso visible.

## 5. SEO

- `LocalSeo` emite description, canonical, robots, Open Graph, Twitter Cards, metadatos
  geográficos y `business:contact_data` de schema.org.
- JSON-LD propio en `index.astro`:
  - `CafeOrCoffeeShop` + `Bar` + `Restaurant` como tipos, con dirección, geo, `hasMap`,
    `openingHoursSpecification` (sábado y domingo cerrados, resto 7:30–1:00), `amenityFeature`, CID y
    Place ID como `identifier`, y `aggregateRating` 4,0 / 186.
  - `FAQPage` generado desde el mismo array `faqs` que alimenta la sección visible, de modo que
    ambos no se desincronizan.
- `sitemap-index.xml` vía `@astrojs/sitemap`.
- Dominio provisional `https://rabiosos-cafe-bar.vercel.app`.

## 6. Dirección visual

Paleta cálida de bar de barrio, tomada de la propia carta fotografiada: crema `#fdf8ee` de fondo,
vino `#922f2c` de la cabecera de la carta, naranja `#c96c2d` y mostaza `#c69426`. Tipografías
`Fraunces` (titulares) y `Work Sans` (texto). La hoja de estilos es la de `amorato-malaga` con la
paleta sustituida.

## 7. Verificación

- `node scripts/check-site-content.mjs rabiosos-cafe-bar` → 0 errores, 0 avisos.
- `bun run --filter rabiosos-cafe-bar check` → 0 errores, 0 avisos.
- `bun run --filter rabiosos-cafe-bar typecheck` → correcto.
- `bun run --filter rabiosos-cafe-bar build` → correcto, 2 páginas.
- Revisión en navegador (preview en el puerto 4401): 22 imágenes, 0 rotas, sin respuestas de error;
  hero, galería sin duplicados, carta, horario y FAQ correctos.

## 8. Pendiente para el cliente

- Sustituir el dominio provisional en los cuatro sitios habituales.
- Completar NIF/CIF, razón social y correo de contacto en `aviso-legal.astro`.
- **Confirmar los precios** con el local antes de publicar.
- Confirmar horario en festivos.
- Preguntar por Instagram o web propia: la ficha no publica ninguno.