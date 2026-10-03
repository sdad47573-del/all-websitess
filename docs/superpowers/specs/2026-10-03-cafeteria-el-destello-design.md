# Cafetería El Destello · diseño de la web

**Fecha:** 2026-10-03
**App:** `apps/cafeteria-el-destello`
**Origen:** enlace de Google Maps facilitado por el usuario (`maps.app.goo.gl/nWZSZS9VhZPzs74h6`)

## 1. Negocio identificado

El enlace corto resuelve a **CAFETERÍA EL DESTELLO**, en Calle Pirandello, 4, Teatinos-Universidad,
29010 Málaga. Conviene confirmarlo con el cliente, porque en iteraciones anteriores del mismo
encargo los enlaces cortos apuntaban a negocios distintos de los esperados.

| Campo | Valor |
| --- | --- |
| Nombre | Cafetería El Destello |
| Dirección | C. Pirandello, 4, Teatinos-Universidad, 29010 Málaga |
| Teléfono | 677 16 53 76 |
| Categoría | Cafetería (ambiente LGBTQ+) |
| Nota | 4,6 sobre 167 reseñas |
| Horario | martes a domingo 12:00–2:00; lunes cerrado |
| Coordenadas | 36.7175804, -4.4620663 (Plus Code `PG9Q+25 Málaga`) |
| CID | `0xd72f740fedbef9d:0xfea09befdeba7d2d` |
| Place ID | `ChIJne_b_kD3cg0RLX263u-boP4` |
| Web / redes | ninguna publicada en la ficha |

## 2. Cómo se han obtenido los datos

El acceso a Google Maps por `curl` solo devuelve la redirección; el panel completo exige Playwright
en headless con cookies de consentimiento de Google (`SOCS`, `CONSENT`), configuración regional
`es-ES` y zona `Europe/Madrid`. Ese muro de consentimiento bloquea también a `chrome-headless-shell
--dump-dom`, así que se descartó.

Con ese navegador se Sacó:

- El texto del panel (nombre, dirección, teléfono, nota, número de reseñas y fotos).
- El horario semanal, leyendo los `aria-label` de los botones de día una vez desplegado el bloque
  (`aria-label="sábado, De 12:00 a 2:00, Copiar el horario"`, etc.). El volcado de
  `APP_INITIALIZATION_STATE` ya no incluye el horario, a diferencia de versiones anteriores del
  perfil.
- Los identificadores (Place ID, CID y Plus Code) del estado de inicialización.
- Las coordenadas exactas (6 decimales) de la URL del visor de fotos, que sigue el patrón
  `@<lat>,<lng>,3a,75y`.
- La galería, recorriendo el visor con `ArrowRight` y scroll, acumulando identificadores únicos
  `gps-cs-s/`.

**Revisión visual obligatoria.** De las 33 imágenes descargadas se montaron hojas de contactos y se
leyó cada una. Se descartaron **tres fotos del negocio vecino «La Exquisita»**, que comparte
fachada con El Destello y aparece en su propia galería, más una imagen duplicada del mismo café. Se
publicaron 21 fotos del local.

## 3. Enfoque de contenido

La ficha de Maps no tiene web propia, así que el contenido se ha construido a partir de la ficha y,
sobre todo, de las reseñas. Lo que más se repite en ellas:

- La **tarta de queso** como producto estrella («tartas 19» y «gofres 13» son las dos etiquetas más
  votadas).
- El trato cercano: varios clientes mencionan a los camareros y a los dueños por su nombre.
- El ambiente de tardeo: cañas, copas, picoteo y merienda conviven en el mismo local.
- La terraza y el ambiente  acogedor.
- La limpieza y la carta de tés, cafés y chocolates.

Se ha evitado inventar: **no se publican precios concretos** porque no hay ninguno verificado en
fuentes públicas, ni enlaces a redes sociales porque la ficha no tiene ninguna. La carta se presenta
como orientación y se remite a llamar para confirmarla.

## 4. Estructura de la página

One-page con los componentes compartidos de `@astro-components`, idénticos al patrón de
`apps/amorato-malaga`:

1. `LocalTopbar` — marca «D», navegación y teléfono siempre visible.
2. `LocalHero` — titular «Tartas caseras y tapes de tarde», lede con ubicación, specialty y nota,
   CTA de llamada y de ficha en Maps, y cuatro facts (nota, horario, lunes cerrado, especialidad).
3. `LocalChips` — catorce etiquetas de servicio y producto.
4. `LocalAbout` — cuatro párrafos sobre el local y una nota con la valoración.
5. `LocalMenu` — tres grupos: repostería y tartas, cafetería y merienda, tardeo y tapes.
6. `LocalGallery` — 21 fotos con alt descriptivo orientado a búsqueda local.
7. `LocalVisit` — dirección, horario semanal completo, mapa incrustado y enlaces de contacto.
8. `LocalFaq` — nueve preguntas frecuentes.
9. `LocalFooter` — pie con enlaces a Google Maps y aviso de procedencia de las imágenes.

Más `src/pages/aviso-legal.astro`, con aviso legal, privacidad y cookies, y los campos legales
pendientes marcados en un aviso visible.

## 5. SEO

- `LocalSeo` emite description, canonical, robots, Open Graph, Twitter Cards, metadatos
  geográficos y `business:contact_data` de schema.org.
- JSON-LD propio en `index.astro`:
  - `CafeOrCoffeeShop` + `Bar` + `Bakery` como tipos, con dirección, geo, `hasMap`,
    `openingHoursSpecification` (lunes cerrado, resto 12:00–2:00), `amenityFeature`, CID y Place ID
    como `identifier`, y `aggregateRating` 4,6 / 167.
  - `FAQPage` con las nueve preguntas del bloque de FAQ, de modo que la sección y los datos
    estructurados nunca se desincronizan: ambos se generan desde el mismo array `faqs`.
- `sitemap-index.xml` se genera vía `@astrojs/sitemap`.
- Dominio provisional `https://cafeteria-el-destello.vercel.app`.

## 6. Dirección visual

Paleta cálida de cafetería de tarde, en línea con la foto de la terraza: crema `#fdf9f3` de fondo,
granate `#7a2e3e` tomado del toldo y del rótulo, naranja `#b8532e` de los zumos y oro `#c9992f`
del caramelo. Tipografías `Fraunces` (titulares) y `Work Sans` (texto), ya en el resto del monorepo.
La hoja de estilos es la de `amorato-malaga` con la paleta sustituida.

## 7. Verificación

- `node scripts/check-site-content.mjs cafeteria-el-destello` → 0 errores, 0 avisos.
- `bun run --filter cafeteria-el-destello check` → 0 errores, 0 avisos.
- `bun run --filter cafeteria-el-destello typecheck` → correcto.
- `bun run --filter cafeteria-el-destello build` → correcto, 2 páginas.
- Revisión en navegador (preview en el puerto 4399): 20 imágenes en la página principal, 0 rotas,
  0 respuestas 4xx/5xx; hero, galería, horario, mapa y FAQ correctos.

## 8. Pendiente para el cliente

- Sustituir el dominio provisional en los cuatro sitios habituales.
- Completar NIF/CIF, razón social y correo de contacto en `aviso-legal.astro`.
- Confirmar carta, precios y horario en festivos.
- Preguntar por Instagram o web propia: la ficha no publica ninguno.