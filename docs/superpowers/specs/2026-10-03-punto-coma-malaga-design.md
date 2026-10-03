# Punto & Coma · diseño de la web

**Fecha:** 2026-10-03
**App:** `apps/punto-coma-malaga`
**Origen:** enlace de Google Maps facilitado por el usuario (`maps.app.goo.gl/2P38VnEj5AxKYSf87`)

## 1. Negocio identificado

El enlace corto resuelve a **Punto & Coma**, en C. Dr. Miguel Díaz Recio, 32, Teatinos-Universidad,
29010 Málaga. El rótulo de la fachada dice «Punto & Coma · Café y Tapas». Sigue siendo conviene
confirmarlo con el cliente: en las iteraciones anteriores de este encargo los enlaces cortos han
apuntado a negocios distintos de los esperados.

| Campo | Valor |
| --- | --- |
| Nombre | Punto & Coma (café y tapas) |
| Dirección | C. Dr. Miguel Díaz Recio, 32, Teatinos-Universidad, 29010 Málaga |
| Teléfono | **no publicado** |
| NIF | X5394121T |
| Categoría | Bar |
| Nota | 3,8 sobre 71 reseñas |
| Horario | lunes a viernes 7:00–16:00; sábado 7:00–12:30; domingo cerrado |
| Rango de precio | 1–10 € por persona |
| Coordenadas | 36.7249, -4.4739 (Plus Code `PGCP+P3 Málaga`) |
| CID | `0xd72f7c4a9ee4a0f:0x6d1d129c57bc3162` |
| Place ID | `ChIJD0ruqcT3cg0RYjG8V5wSHW0` |
| Web / redes | ninguna publicada en la ficha |

## 2. Cómo se han obtenido los datos

Flujo ya consolidado en el monorepo: `curl` para resolver la redirección del enlace corto y
Playwright en headless con cookies de consentimiento para leer el panel. El horario volvió a
aparecer en la vista limitada en el primer intento, y salió completo al reintentar.

Lo que este local tiene de particular es que **entre las fotos de su propia ficha hay dos
documentos legibles**:

- La **carta de bebidas completa**, con todas las categorías y sus precios.
- Un **ticket de caja** del propio bar, con la NIF, el domicilio, y los precios del desayuno.

Ambos se transcribieron. Del ticket salió además la confirmación de que **el local no publica
teléfono**: el campo «TELEFONO» del ticket aparece en blanco, igual que en la ficha de Google Maps.

**La foto del ticket no se publica.** Incluye el nombre del cajero que atendió en esa visita, así que
se usó solo como fuente de datos (NIF y precios) y se descartó de la galería.

**Revisión visual obligatoria.** Tres hojas de contactos revisadas una a una. Todas las imágenes
resultaron ser del local. Google sirve cada foto dos veces en el visor, así que el deduplicador por
huella perceptual eliminó **13 duplicados exactos** de las 27 seleccionadas, dejando 14.

## 3. Enfoque de contenido

Aquí sí hay precios verificados, como en Rabiosos. La carta de bebidas está completa y es
inespecífica para un local de barrio: cafés desde 1,40 €, cócteles a 6,50 € y 7,00 €, licores, vinos
por copa a 3,50 € y cervezas de botella a 2,50 €. Los precios del desayuno salen del ticket.

El tono tiene que ser cuidadoso por dos motivos:

- **La nota es de 3,8**, la más baja de las cinco webs del encargo. Las reseñas valued el pitufo y el
  ambiente tranquilo, pero también hay quejas por el tiempo de espera en horas punta y por el
  espacio. La web recoge lo positivo y menciona las críticas de forma genérica y factual, sin
  descalificar al local ni amplificar lo negativo.
- **No hay teléfono**, así que toda la narrativa de contacto se apoya en la ficha de Google Maps.

Lo que se repite en las reseñas y sostiene el contenido: los pitufos están muy ricos, el sitio es
tranquilo, y a las horas punta hay que esperar porque solo hay cinco mesas.

## 4. Estructura de la página

One-page con los componentes compartidos de `@astro-components`, siguiendo el patrón de
`apps/amorato-malaga`:

1. `LocalTopbar` — marca «P&C», navegación y enlace a Google Maps en el hueco del teléfono.
2. `LocalHero` — titular «Tu punto y coma en Teatinos», lede con precios reales, CTA a la ficha de
   Maps y a cómo llegar, y cuatro facts (nota, horario, fin de semana y precios).
3. `LocalChips` — catorce etiquetas de producto y servicio.
4. `LocalAbout` — cuatro párrafos sobre el local y una nota con la valoración.
5. `LocalMenu` — tres grupos: cafés e infusiones, desayuno y picoteo, bebidas frías y barra, con
   precios.
6. `LocalGallery` — 13 fotos con alt descriptivo orientado a búsqueda local.
7. `LocalVisit` — dirección, horario semanal completo, mapa incrustado y enlace a la ficha.
8. `LocalFaq` — nueve preguntas frecuentes, incluida una dedicada a por qué no hay teléfono.
9. `LocalFooter` — pie con enlaces a Google Maps y aviso de procedencia de las imágenes.

Más `src/pages/aviso-legal.astro`, con aviso legal, privacidad y cookies.

### El hueco del teléfono

Los componentes compartidos (`LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalMenu`, `LocalVisit` y
`LocalFooter`) asumen que todo negocio tiene teléfono: la prop es obligatoria en varios de ellos. Es
la segunda web del monorepo sin teléfono, y se resolvió como en `sur-helado-cafe`: **los enlaces de
contacto apuntan a la ficha de Google Maps** con etiquetas honestas («Google Maps», «Ficha en Google
Maps»). Es preferible a dejar los `href` vacíos, que producirían enlaces sin nombre y romperían la
accesibilidad y el linter.

`business.phone` queda a la espera en `index.astro`: si el local publica un número, se rellena y se
pasa a los componentes.

## 5. SEO

- `LocalSeo` emite description, canonical, robots, Open Graph, Twitter Cards y metadatos
  geográficos. Al no haber teléfono **no se emite `business:contact_data`**: se pasa `phone=''` y se
  omite el bloque `contact`, porque inventar un teléfono o incluirlo vacío daría datos de contacto
  falsos en los datos estructurados.
- JSON-LD propio en `index.astro`:
  - `CafeOrCoffeeShop` + `Bar` + `Bakery` como tipos, con dirección, geo, `hasMap`,
    `openingHoursSpecification` (lunes a viernes 7:00–16:00, sábado 7:00–12:30, domingo cerrado),
    `amenityFeature`, CID y Place ID como `identifier`, y `aggregateRating` 3,8 / 71.
  - `FAQPage` generado desde el mismo array `faqs` que alimenta la sección visible.
- `sitemap-index.xml` vía `@astrojs/sitemap`.
- Dominio provisional `https://punto-coma-malaga.vercel.app`.

## 6. Dirección visual

Paleta tomada del propio rótulo del local, fotografiado en su ficha: crema `#fbf8f0` de fondo,
verde botella `#1e4a3c` del rótulo, naranja `#c97a3a` del zumo y oro `#c6a03c` del café. Tipografías
`Fraunces` (titulares) y `Work Sans` (texto). La hoja de estilos es la de `amorato-malaga` con la
paleta sustituida.

## 7. Verificación

- `node scripts/check-site-content.mjs punto-coma-malaga` → 0 errores, 0 avisos.
- `bun run --filter punto-coma-malaga check` → 0 errores, 0 avisos.
- `bun run --filter punto-coma-malaga typecheck` → correcto.
- `bun run --filter punto-coma-malaga build` → correcto, 2 páginas.
- Revisión en navegador (preview en el puerto 4405): 14 imágenes, 0 rotas, sin respuestas de error;
  hero, carta, galería, horario y FAQ correctos.

## 8. Pendiente para el cliente

- Sustituir el dominio provisional en los cuatro sitios habituales.
- Completar razón social y correo de contacto en `aviso-legal.astro`. La NIF y el domicilio ya están.
- Confirmar los precios con el local: salen de una foto y de un ticket que pueden tener meses.
- Confirmar horario en festivos.
- Preguntar al local si tiene teléfono: es el dato más útil que le falta a su ficha.