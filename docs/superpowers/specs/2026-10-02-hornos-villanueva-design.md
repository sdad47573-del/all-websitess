# Diseño: web de Hornos Villanueva

**Fecha:** 2026-10-02
**Estado:** Aprobado para implementación por el usuario.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para Hornos Villanueva, como app
independiente `apps/hornos-villanueva/`. El objetivo es el SEO local: posicionar el local en
búsquedas como «panadería Teatinos», «cafetería Teatinos», «pan recién hecho Málaga», «desayunos
Teatinos», «pitufo Málaga», «bollería Teatinos» o «terraza Teatinos», y facilitar la llamada y la
llegada. Se mantiene sin cambios el resto de aplicaciones del monorepo.

## Datos publicados

- Nombre: Hornos Villanueva. Categoría: Cafetería (panadería y cafetería).
- Dirección: C. Juan de Robles, 53, Teatinos-Universidad, 29010 Málaga.
- Teléfono: 952 10 33 87, enlazado con `tel:+34952103387`.
- Coordenadas: 36.7218327, -4.4613918. CID `0xd72f73fa30d6033:0xa91af5a4f89095a3`.
- Valoración: 4,2 sobre 634 reseñas de Google.
- Horario: lunes a viernes 7:30–20:30; sábado y domingo 8:00–14:30.
- Concepto: panadería con obrador y cafetería en el mismo local (barra, salón y amplia terraza).
  Pan y bollería recién hechos, desayunos y meriendas, pitufos y bocadillos a la plancha, tapas,
  raciones y platos de cuchara.
- Instagram: `@hornos_villanueva` (tomado del cartel del local).
- Dominio provisional: `https://hornos-villanueva.vercel.app`; cambiarlo antes de publicar.
- No se publican precios concretos (no hay ninguno verificado en fuentes públicas). No se ha podido
  obtener el **Place ID** (`ChIJ…`); el JSON-LD usa el CID y el enlace de reseñas apunta a la ficha
  por CID.

## Fotos

- 62 fotos localizadas en la galería pública de la ficha de Google Maps durante la implementación
  (con un navegador headless sobre la ficha), descargadas a ~1600 px el lado largo y deduplicadas
  por hash (56 únicas). Se revisaron en hojas de contactos y se seleccionaron **18**.
- Selección: fachada de panadería y cafetería (hero), otra vista de fachada, terraza, interior con
  rejería, salón, barra, hogaza de pan, desayuno, bocadillos a la plancha y de pan de nueces, café
  con leche, capuchino, porra y una mesa con bocadillos.
- Se **descartaron**: las fachadas de tres negocios cercanos («Hadavid», «Panadería Samuel» y
  «Fermento»), una foto en blanco y negro y un cartel de la época COVID con el horario ya
  desactualizado (para no publicar información errónea), y fotos con personas identificables.
- Optimizadas en el `build` con `astro:assets` (AVIF, `srcset`, `loading="lazy"` salvo el hero). Se
  acredita la procedencia en la galería y en el pie; una imagen se recorta a `public/og.jpg`
  (1200×630) para las vistas previas al compartir.
- Google puede retirar o cambiar las fotos en cualquier momento: revisar antes de publicar y
  sustituir si el titular lo pide.

## Experiencia visual

- Dirección: horno de barrio cálido y clásico. Paleta crema `#f8f3ea`, ámbar `#9c5a24`, oro
  `#c9a227` y rojo horno `#a8432c`. Tipografía `Lora` para titulares y `Work Sans` para el texto.
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
- JSON-LD `Bakery` + `CafeOrCoffeeShop` con nombre, alias, teléfono, dirección, geo, horario,
  valoración, servicios, `amenityFeature`, `hasMap`, identificador (CID) y `sameAs` (Google Maps e
  Instagram), más `FAQPage` construido con las mismas preguntas que se ven en pantalla.
- Componentes compartidos `LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`.

## Verificación

- `node scripts/check-site-content.mjs hornos-villanueva` (texto, SEO y accesibilidad del marcado).
- `bun run --filter hornos-villanueva check` y `typecheck`.
- `bun run --filter hornos-villanueva build`, y revisión del HTML emitido (un H1, JSON-LD, canonical,
  Open Graph, `srcset` y enlaces de teléfono/mapa).

## Pendiente antes de publicar

Confirmar dominio, NIF/CIF, razón social y correo del titular, el horario actual, la carta, el
Instagram y la línea de teléfono de Teatinos, los `alt` de las fotos, y que las imágenes de Google
Maps siguen disponibles y se permite su reutilización. Obtener el Place ID definitivo si el titular
lo facilita.
