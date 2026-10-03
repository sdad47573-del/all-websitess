# Morning Coffee · diseño de la web

**Fecha:** 2026-10-03
**App:** `apps/morning-coffee-malaga`
**Origen:** enlace de Google Maps facilitado por el usuario (`maps.app.goo.gl/D9NzYHQNx5b8X9M58`)

## 1. Negocio identificado

El enlace corto resuelve a **MORNING COFFEE**, en Av. de Carlos Haya, 198, Bailén-Miraflores,
29010 Málaga. Conviene confirmarlo con el cliente: en las iteraciones anteriores de este mismo
encargo los enlaces cortos han apuntado a negocios distintos de los esperados.

| Campo | Valor |
| --- | --- |
| Nombre | Morning Coffee |
| Dirección | Av. de Carlos Haya, 198, Bailén-Miraflores, 29010 Málaga |
| Teléfono | 685 01 41 27 |
| Categoría | Cafetería, ambiente LGBTQ+ friendly |
| Nota | 4,9 sobre 49 reseñas |
| Horario | lunes a viernes 8:00–14:00; sábado y domingo 8:30–14:00 |
| Rango de precio | 1–10 € por persona |
| Coordenadas | 36.7249507, -4.4572812 (Plus Code `PGGV+25 Málaga`) |
| CID | `0xd72f71717db3df3:0x82c39cb9a1933fe6` |
| Place ID | `ChIJ8z3bFxf3cg0R5j-Tobmcw4I` |
| Servicios | comer en el local, autoservicio, entrega sin contacto |
| Web / redes | ninguna publicada en la ficha |

## 2. Cómo se han obtenido los datos

Flujo ya consolidado en el monorepo: `curl` sobre el enlace corto para resolver la redirección, y
Playwright en headless con cookies de consentimiento para leer el panel de Google Maps.

Dos incidencias que hubo que resolver:

- **La primera sesión cargó la vista limitada** del lugar: sin número de reseñas, sin fotos y con el
  horario a medias. Se resolvió con un bucle de reintentos que abre una pestaña nueva por intento,
  espera más larga y hace scroll dentro del panel hasta que aparecen la nota y el contador de fotos.
- **El horario tampoco salía por `aria-label`.** Al desplegar el bloque y leer los
  `button[aria-label*="Copiar el horario"]` se obtuvieron los siete días completos, incluido el
  matiz de que sábado y domingo abren a las 8:30.

Para las coordenadas se recurrió a la URL del visor de fotos, que incluye la posición exacta del
lugar (`@36.7249507,-4.4572812,3a,75y`). Una primera estimación manual a partir del Plus Code
resultó ser incorrecta y se sustituyó por la del visor antes de construir.

**Revisión visual obligatoria.** Cuatro hojas de contactos revisadas una a una. Todas las imágenes
resultaron ser del local. Google sirve cada foto dos veces en el visor, así que el deduplicador por
huella perceptual (miniatura 16×16 en escala de grises) eliminó **14 duplicados exactos** de las 32
seleccionadas, dejando 18.

## 3. Enfoque de contenido

A diferencia de Rabiosos, aquí la ficha **no contiene fotos de la carta**: no hay precios
verificables más allá del rango «1–10 € por persona». La carta se presenta sin precios concretos y se
advierte de ello explícitamente en la sección y en las notas.

Lo que sí aporta la ficha y las reseñas:

- Un horario muy marcado, que abre por la mañana y **cierra a las dos**: eso condiciona toda la
  narrativa. La web se cuenta en clave de mañana, no de tardeo.
- La nota 4,9 sobre 49 reseñas, de las más altas del barrio.
- El **croissant de pistacho** como producto destacado, con varios clientes citándolo
  expresamente.
- Tostas de la casa, tostada con jamón y tomate, wafles con frutos rojos, batidos y café de
  especialidad.
- Servicio de autoservicio, pensado para las horas de más flujo, y entrega sin contacto.

No se enlaza a ninguna red social porque la ficha no publica ninguna.

## 4. Estructura de la página

One-page con los componentes compartidos de `@astro-components`, siguiendo el patrón ya establecido
en `apps/amorato-malaga`:

1. `LocalTopbar` — marca «M», navegación y teléfono siempre visible.
2. `LocalHero` — titular «Tu mañana empieza aquí, con calma», lede con ubicación, especialidad,
   horario y nota, CTA de llamada y de ficha en Maps, y cuatro facts.
3. `LocalChips` — catorce etiquetas de producto y servicio.
4. `LocalAbout` — cuatro párrafos sobre el local y una nota con la valoración.
5. `LocalMenu` — tres grupos: desayuno salado, bollería y café, batidos y para llevar.
6. `LocalGallery` — 17 fotos con alt descriptivo orientado a búsqueda local.
7. `LocalVisit` — dirección, horario semanal completo, mapa incrustado y contacto.
8. `LocalFaq` — nueve preguntas frecuentes.
9. `LocalFooter` — pie con enlaces a Google Maps y aviso de procedencia de las imágenes.

Más `src/pages/aviso-legal.astro`, con aviso legal, privacidad y cookies, y los campos legales
pendientes marcados en un aviso visible.

## 5. SEO

- `LocalSeo` emite description, canonical, robots, Open Graph, Twitter Cards, metadatos
  geográficos y `business:contact_data` de schema.org.
- JSON-LD propio en `index.astro`:
  - `CafeOrCoffeeShop` + `Bakery` como tipos, con dirección, geo, `hasMap`,
    `openingHoursSpecification` (lunes a viernes 8:00–14:00 y fin de semana 8:30–14:00),
    `amenityFeature` (desayunos, café de especialidad, autoservicio, entrega sin contacto, comer en el
    local, croissant de pistacho), CID y Place ID como `identifier`, y `aggregateRating` 4,9 / 49.
  - `FAQPage` generado desde el mismo array `faqs` que alimenta la sección visible.
- `sitemap-index.xml` vía `@astrojs/sitemap`.
- Dominio provisional `https://morning-coffee-malaga.vercel.app`.

## 6. Dirección visual

Paleta de desayuno, tomada de las propias fotos: crema `#fdf8f1` de fondo, verde espresso `#115e59`
de la máquina de café, naranja `#e07a3a` del zumo y oro `#e0c078` de la croissant. Tipografías
`Fraunces` (titulares) y `Work Sans` (texto). La hoja de estilos es la de `amorato-malaga` con la
paleta sustituida.

## 7. Verificación

- `node scripts/check-site-content.mjs morning-coffee-malaga` → 0 errores, 0 avisos.
- `bun run --filter morning-coffee-malaga check` → 0 errores, 0 avisos.
- `bun run --filter morning-coffee-malaga typecheck` → correcto.
- `bun run --filter morning-coffee-malaga build` → correcto, 2 páginas.
- Revisión en navegador (preview en el puerto 4403): 18 imágenes, 0 rotas, sin respuestas de error;
  hero, galería sin duplicados, carta, horario y FAQ correctos.

## 8. Pendiente para el cliente

- Sustituir el dominio provisional en los cuatro sitios habituales.
- Completar NIF/CIF, razón social y correo de contacto en `aviso-legal.astro`.
- Confirmar carta y precios: la ficha no los publica.
- Confirmar horario en festivos.
- Preguntar por Instagram o web propia: la ficha no publica ninguno.