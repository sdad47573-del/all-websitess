# Diseño: web del Café Bar La Carretera

**Fecha:** 2026-10-02
**Estado:** Aprobado para implementación por el usuario.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para el Café Bar La Carretera, como app
independiente `apps/cafe-bar-la-carretera/`. El objetivo es el SEO local: posicionar el local en
búsquedas como «cafetería Teatinos», «desayunos Teatinos», «menú del día Málaga», «bar de tapas
Teatinos», «comer en Teatinos» o «cafetería Navarro Ledesma», y facilitar la llamada y la apertura
de indicaciones en Google Maps. Se mantiene sin cambios el resto de aplicaciones del monorepo.

## Datos publicados

- Nombre: Café Bar La Carretera. Categoría: Cafetería (bar de tapas con menú del día).
- Dirección: C. Navarro Ledesma, 58, Teatinos-Universidad, 29010 Málaga.
- Teléfono: 609 74 33 59, enlazado con `tel:+34609743359`.
- Coordenadas: 36.7251995, -4.4665837. CID `0xd72f7397d198917:0x8eff3b0ca7f64c77`.
- Google Maps feature ID: `/g/1pp2xbfsq`.
- Valoración: 4,3 sobre 171 reseñas de Google. Precio orientativo: 1–10 € por persona.
- Horario: lunes a viernes 7:00–16:30; sábado y domingo cerrado.
- Concepto: bar de barrio con barra de azulejos, comedor y terraza. Desayunos desde las 7:00,
  bocadillos, catalanas, tapas y raciones, platos de cuchara y menú del día.
- Carta: menú del día de lunes a viernes por 10,00 € (primero, segundo, pan, bebida y postre) con
  tapas variadas y paella los miércoles y viernes, y suplemento de 1 € por modificación. A la carta,
  desayunos (bocadillos, catalana, tostadas), tapas y raciones (croquetas, albóndigas, tortilla,
  salmorejo, pincho, pescado frito, carne a la plancha), platos de cuchara, arroces, bebidas y
  postres.
- Dominio provisional: `https://cafe-bar-la-carretera.vercel.app`; cambiarlo antes de publicar.
- No se ha podido obtener el **Place ID** (`ChIJ…`) de fuentes públicas; el JSON-LD usa el CID y el
  feature ID de Google como identificadores y el enlace de reseñas apunta a la ficha por CID.

## Fotos

- 40 fotos localizadas en la galería pública de la ficha de Google Maps durante la implementación
  (con un navegador headless sobre la ficha), descargadas a ~1600 px el lado largo y deduplicadas
  por hash (34 únicas). Se revisaron en hojas de contactos y se seleccionaron **18**.
- Selección: terraza con sombrillas (hero), fachada de la calle Navarro Ledesma, cartel del menú del
  día, barra, comedor y salón, barra de tapas, un desayuno, croquetas, albóndigas (en salsa y con
  ensalada), guiso de carne con patatas, tortilla, pincho con patatas, pescado frito, carne a la
  plancha, salmorejo y paella.
- Se **descartaron 2 fotos** que pertenecían a otros negocios cercanos (una cafetería rotulada
  «Teatinos» y otra cafetería moderna con otro logotipo). Al raspar Google Maps se cuelan fotos de
  sitios cercanos; hay que revisar siempre cada imagen antes de publicarla.
- Optimizadas en el `build` con `astro:assets` (AVIF, `srcset`, `loading="lazy"` salvo el hero). Se
  acredita la procedencia en la galería y en el pie; una imagen se recorta a `public/og.jpg`
  (1200×630) para las vistas previas al compartir.
- Google puede retirar o cambiar las fotos en cualquier momento: revisar antes de publicar y
  sustituir si el titular lo pide.

## Experiencia visual

- Dirección: taberna clásica de barrio. Paleta crema `#f7f2e8`, rojo del cartel `#9e2b2b`,
  terracota `#c26a2c`, oliva y oro `#cda231`. Tipografía `Bitter` para titulares y `Work Sans` para
  el texto.
- Estructura one-page: cabecera con navegación y teléfono; hero con H1 local, CTA de llamada, CTA
  a Maps y datos rápidos; franja de servicios; «El local»; «La carta»; galería; visita con horario,
  mapa embebido e indicaciones; preguntas frecuentes; pie.
- Móvil: una columna, CTA de llamada fija, controles táctiles, enlace para saltar al contenido y
  respeto de `prefers-reduced-motion`.

## SEO y arquitectura técnica

- Astro estático con la configuración compartida del monorepo (sitemap + Tailwind), dos rutas
  (`/` y `/aviso-legal`) y CSS propio; sin JavaScript de cliente propio.
- HTML en español, título y meta description naturales, canonical, `robots` con
  `max-image-preview:large`, Open Graph y Twitter Card con `public/og.jpg`, metadatos geográficos y
  datos de contacto de negocio (`business:contact_data`).
- JSON-LD `Restaurant` con nombre, alias, teléfono, dirección, geo, horario, valoración, servicios,
  `amenityFeature`, `hasMap` e identificadores (CID y feature ID), más `FAQPage` construido con las
  mismas preguntas que se ven en pantalla.
- Componentes compartidos `LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`.

## Verificación

- `node scripts/check-site-content.mjs cafe-bar-la-carretera` (texto, SEO y accesibilidad del
  marcado).
- `bun run --filter cafe-bar-la-carretera check` y `typecheck`.
- `bun run --filter cafe-bar-la-carretera build`, y revisión del HTML emitido (un H1, JSON-LD,
  canonical, Open Graph, `srcset` y enlaces de teléfono/mapa).

## Pendiente antes de publicar

Confirmar dominio, NIF/CIF y razón social del titular, la carta con precios, los `alt` de las fotos
y que las imágenes de Google Maps siguen disponibles y se permite su reutilización. Obtener el
Place ID definitivo si el titular lo facilita.
