# Diseño: web de Amorato

**Fecha:** 2026-10-03
**Estado:** Implementada.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para Amorato, como app independiente
`apps/amorato-malaga/`. El objetivo es el SEO local: posicionar el local en búsquedas como
«heladería Teatinos», «helado artesanal Málaga», «pastelería Teatinos», «cafetería Teatinos»,
«medialunas Málaga», «alfajores Málaga», «dulces argentinos Málaga», «helado sin gluten Málaga» o
«tartas por encargo Teatinos», y facilitar la llamada y la llegada. Se mantiene sin cambios el
resto de aplicaciones del monorepo.

## Datos publicados

- Nombre: Amorato. En Google figura como «Heladería»: heladería, cafetería y pastelería artesanal.
- Dirección: C. Escritora Carmen Conde, 3, Teatinos-Universidad, 29010 Málaga.
- Teléfono: 689 34 43 76, enlazado con `tel:+34689344376`.
- Coordenadas: 36.725062, -4.473187. Se obtuvieron decodificando el Plus Code `PGGG+2P Málaga`
  que publica la ficha, porque el enlace corto facilitado no las traía.
- CID `0xd72f73840fb1717:0xfe8e67b154157664` y Place ID `ChIJFxf7QDj3cg0RZHYVVLFnjv4`.
- Valoración: 4,8 sobre 303 reseñas de Google.
- Horario: martes, miércoles, jueves y domingo 8:00–23:30; viernes y sábado 8:00–1:00; lunes
  cerrado.
- Instagram: `@amorato_malaga`.
- Concepto: obrador de Teatinos que reúne heladería, cafetería y pastelería. Helado artesanal
  diario con más de veinte sabores sin gluten y versiones sin azúcar, sin lactosa y proteicas;
  dulces argentinos (medialunas rellenas, alfajores, vigilantes y facturas), bollería malagueña,
  tartas artesanales, desayunos, meriendas, bocadillos y cajas para regalo. Sala amplia y terraza.
- Dominio provisional: `https://amorato-malaga.vercel.app`; cambiarlo antes de publicar.
- No se publican precios concretos (no hay ninguno verificado en fuentes públicas).

## Cómo se han obtenido los datos

La ficha de Google Maps bloquea el acceso directo por muro de consentimiento. Los datos se
obtuvieron abriendo la ficha en Chromium sin interfaz (Playwright) con las cookies de consentimiento
de Google, leyendo el panel lateral y el estado interno de la página: horario semanal completo,
teléfono, dirección, valoración, número de reseñas y Plus Code.

## Fotos

- Se recorrió la galería de la ficha (268+ fotos) y se capturaron **88** imágenes únicas, que se
  descargaron a 1600 px el lado largo y se revisaron en hojas de contactos antes de seleccionar.
- Se publican **18** fotos: interior del local (hero), vitrinas de tartas y de helados, cubetas del
  obrador, vaso de helado con la marca, dos tartas, medialuna, napoleana, croissants, alfajores,
  bocadillo, sándwich, dos desayunos, café con leche, café con croissant y la terraza.
- Se **descartaron** las fotos con manos de clientes sosteniendo el helado, para no asociar a
  ninguna persona a la web.
- Optimizadas en el `build` con `astro:assets` (AVIF, `srcset`, `loading="lazy"` salvo el hero). Se
  acredita la procedencia en la galería y en el pie; una imagen se recorta a `public/og.jpg`
  (1200×630) para las vistas previas al compartir.
- Google puede retirar o cambiar las fotos en cualquier momento: revisar antes de publicar y
  sustituir si el titular lo pide.

## Experiencia visual

- Dirección: obrador moderno y luminoso, nada de cafetería clásica. Paleta crema `#fbf7f2`,
  turquesa `#157a72` (las butacas y la marca), fresa `#c8385f` y oro `#d2a53f`. Tipografía
  `Fraunces` para titulares y `Work Sans` para el texto.
- Estructura one-page: cabecera con navegación y teléfono; hero con H1 local, CTA de llamada, CTA
  a Maps y datos rápidos; franja de servicios; «El local»; «La carta»; galería; visita con
  horario, mapa embebido e indicaciones; preguntas frecuentes; pie.
- Móvil: una columna, CTA de llamada fija, controles táctiles, enlace para saltar al contenido y
  respeto de `prefers-reduced-motion`.

## SEO y arquitectura técnica

- Astro estático con la configuración compartida del monorepo (sitemap + Tailwind), dos rutas
  (`/` y `/aviso-legal`) y CSS propio; sin JavaScript de cliente propio.
- HTML en español, título y meta description naturales, canonical, `robots` con
  `max-image-preview:large`, Open Graph y Twitter Card con `public/og.jpg`, metadatos geográficos y
  datos de contacto de negocio (`business:contact_data`).
- JSON-LD `IceCreamShop` + `CafeOrCoffeeShop` + `Bakery` con nombre, alias, teléfono, dirección,
  geo, horario (incluido el lunes como cerrado), valoración, servicios, `amenityFeature`, `hasMap`,
  identificadores (CID y Place ID) y `sameAs` (Google Maps e Instagram), más `FAQPage` construido
  con las mismas preguntas que se ven en pantalla.
- Componentes compartidos `LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`.

## Verificación

- `node scripts/check-site-content.mjs amorato-malaga` (texto, SEO y accesibilidad del marcado):
  0 errores y 0 avisos.
- `bun run --filter amorato-malaga check` (0 errores) y `typecheck` (sin errores).
- `bun run --filter amorato-malaga build`, y revisión del HTML emitido: un H1, dos bloques JSON-LD,
  canonical, Open Graph, sitemap con las dos rutas, 18 imágenes con `alt` y `srcset` (0 rotas al
  cargarlas en el navegador).

## Pendiente antes de publicar

Confirmar dominio, NIF/CIF, razón social y correo del titular, el horario en festivos, la carta y
los precios, el perfil de Instagram, la disponibilidad de la terraza y que las imágenes de Google
Maps siguen disponibles y se permite su reutilización.
