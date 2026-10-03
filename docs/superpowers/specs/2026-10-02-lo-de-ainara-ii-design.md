# Diseño: web de Café-Bar Lo de Ainara II

**Fecha:** 2026-10-02
**Estado:** Aprobado para implementación por el usuario.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para Café-Bar Lo de Ainara II, como app
independiente `apps/lo-de-ainara-ii/`. El objetivo es el SEO local: posicionar el bar en búsquedas
como «bar de tapas Teatinos», «pescaíto frito Málaga», «comer en Teatinos», «tapas Juan Francés
Bosca» o «cartuchos de fritura Málaga», y facilitar la llamada y la apertura de indicaciones en
Google Maps. Se mantiene sin cambios el resto de aplicaciones del monorepo.

## Datos publicados

- Nombre: Café-Bar Lo de Ainara II. Categoría: Restaurante (bar de tapas y pescaíto frito).
- Dirección: C. Juan Francés Bosca, 19, Teatinos-Universidad, 29010 Málaga.
- Teléfono: 605 49 40 48, enlazado con `tel:+34605494048`.
- Coordenadas: 36.7267217, -4.4664906. CID `0xd72f7003c9b74d1:0x885b1b4253491506`.
- Valoración: 4,1 sobre 59 reseñas de Google. Precio orientativo: €.
- Horario: lunes y martes cerrado; miércoles y jueves 12:30–16:30; viernes y sábado 12:30–16:30 y
  20:30–23:30; domingo 12:30–16:30.
- Concepto: bar de tapas de barrio con barra de azulejos, comedor y terraza. Lema de la barra
  «Boquerón, cazón y victoria — Fritura con historia».
- Carta: tapas de la casa (albóndigas de choco en salsa de almendra, bravas, boquerones en vinagre,
  aguacate con queso de cabra, calamares y jamón, mediterránea, chorizo criollo y chimi, morcilla y
  cebolla, calamarzada), cartuchos de fritura a 4,80 € (gambas, boquerones, adobo, jibia,
  calamares), raciones (pata de pulpo con puré de patata trufado, pescaíto frito, croquetas caseras,
  huevos rotos con gambas al ajillo, ensaladilla rusa, almejas y mejillones, salmorejo), tostas y
  bocadillos y postres (tarta de queso con nutella).
- Dominio provisional: `https://lo-de-ainara-ii.vercel.app`; cambiarlo antes de publicar.
- No se ha podido obtener el **Place ID** (`ChIJ…`) de fuentes públicas; el JSON-LD usa el CID como
  `identifier` y el enlace de reseñas apunta a la ficha por CID.

## Fotos

- 54 fotos localizadas en la galería pública de la ficha de Google Maps durante la implementación
  (con un navegador headless sobre la ficha), descargadas a ~1600 px el lado largo, deduplicadas por
  hash y revisadas en hojas de contactos. Se seleccionaron **18**.
- Selección: barra con el cartel «Boquerón, cazón y victoria» (hero), fachada, terraza (tres tomas),
  comedor interior, pata de pulpo con puré trufado, calamares fritos, cazón en adobo, boquerones
  fritos, croquetas caseras, huevos rotos con gambas, gambas cocidas, almejas, mejillones,
  ensaladilla rusa, salmorejo y bocadillo.
- Al raspar Google Maps se cuelan fotos de sitios cercanos; hay que revisar siempre cada imagen
  antes de publicarla.
- Optimizadas en el `build` con `astro:assets` (AVIF, `srcset`, `loading="lazy"` salvo el hero). Se
  acredita la procedencia en la galería y en el pie; una imagen se recorta a `public/og.jpg`
  (1200×630) para las vistas previas al compartir.
- Google puede retirar o cambiar las fotos en cualquier momento: revisar antes de publicar y
  sustituir si el titular lo pide.

## Experiencia visual

- Dirección: bar de fritura marinera y tradición andaluza. Paleta crema `#f6efe2`, azul marino
  `#16262e`, azul `#1d5563`, dorado `#c99a2e` y terracota `#c2703d`. Tipografía `Playfair Display`
  para titulares y `Work Sans` para el texto.
- Estructura one-page: cabecera con navegación y teléfono; hero con H1 local, CTA de llamada, CTA
  a Maps y datos rápidos; franja de servicios; «El local»; «Carta»; galería; visita con horario,
  mapa embebido e indicaciones; preguntas frecuentes; pie.
- Móvil: una columna, CTA de llamada fija, controles táctiles, enlace para saltar al contenido y
  respeto de `prefers-reduced-motion`.

## SEO y arquitectura técnica

- Astro estático con la configuración compartida del monorepo (sitemap + Tailwind), dos rutas
  (`/` y `/aviso-legal`) y CSS propio; sin JavaScript de cliente propio.
- HTML en español, título y meta description naturales, canonical, `robots` con
  `max-image-preview:large`, Open Graph y Twitter Card con `public/og.jpg`, y metadatos geográficos.
- JSON-LD `Restaurant` con nombre, alias, teléfono, dirección, geo, horario, valoración, servicios,
  `amenityFeature` y `hasMap`, más `FAQPage` construido con las mismas preguntas que se ven en
  pantalla.
- Componentes compartidos `LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`.

## Verificación

- `node scripts/check-site-content.mjs lo-de-ainara-ii` (texto, SEO y accesibilidad del marcado).
- `bun run --filter lo-de-ainara-ii check` y `typecheck`.
- `bun run --filter lo-de-ainara-ii build`, y revisión del HTML emitido (un H1, JSON-LD, canonical,
  Open Graph, `srcset` y enlaces de teléfono/mapa).

## Pendiente antes de publicar

Confirmar dominio, NIF/CIF y razón social del titular, la carta con precios, los `alt` de las fotos
y que las imágenes de Google Maps siguen disponibles y se permite su reutilización. Obtener el
Place ID definitivo si el titular lo facilita.
