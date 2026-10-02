# Diseño: web de Campo Café-Bar

**Fecha:** 2026-10-02
**Estado:** Aprobado para implementación por el usuario.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para Campo Café-Bar, como app
independiente `apps/campo-cafe-bar/`. El objetivo es el SEO local: posicionar la cafetería en
búsquedas como «cafetería Teatinos», «brunch Málaga», «desayunos Teatinos» o «café de especialidad
Málaga», y facilitar la llamada y la apertura de indicaciones en Google Maps. Se mantiene sin
cambios el resto de aplicaciones del monorepo.

## Datos publicados

- Nombre: Campo Café-Bar. Categoría: Cafetería.
- Dirección: C. Orson Welles, 24, Teatinos-Universidad, 29010 Málaga.
- Teléfono: 668 57 54 60, enlazado con `tel:+34668575460`.
- Coordenadas: 36.7230668, -4.4628323. Place ID `ChIJ_9yhZgD3cg0RGnO5mo1YTUA`.
- Valoración: 4,6 sobre 103 reseñas de Google. Precio orientativo: 1–10 € por persona.
- Horario: lunes cerrado; martes a viernes 8:30–13:00 y 17:00–20:00; sábado y domingo 9:30–13:00.
- Servicios: asientos al aire libre, acceso para sillas de ruedas, se aceptan tarjetas.
- Cafetería de desayunos y brunch: café de especialidad y matcha, tostadas, bocadillos y
  sándwiches, platos, tortitas, tartas caseras y alfajores argentinos.
- Red social: TikTok `@campo.cafebar`.
- Dominio provisional: `https://campo-cafe-bar.vercel.app`; cambiarlo antes de publicar.

## Fotos

- 14 imágenes descargadas de la galería pública de la ficha de Google Maps durante la
  implementación (con un navegador headless sobre la ficha), en la variante de ~1600 px el lado
  largo y con nombres descriptivos. El hero es la foto de la sala con el rótulo CAMPO.
- Se descargaron 17 en total y se revisaron una a una: se descartaron 3 por no poder verificarse
  como del local (una era de otro negocio y dos no mostraban ninguna seña del establecimiento).
  Al raspar Google Maps se cuelan fotos de sitios cercanos; hay que revisar siempre cada imagen.
- Optimizadas en el `build` con `astro:assets` (AVIF, `srcset`, `loading="lazy"` salvo el hero).
- Se acredita la procedencia en la galería y en el pie; una imagen se recorta a `public/og.jpg`
  (1200×630) para las vistas previas al compartir.
- Google puede retirar o cambiar las fotos en cualquier momento: revisar antes de publicar y
  sustituir si el titular lo pide.

## Experiencia visual

- Dirección: cafetería de barrio luminosa y cálida. Paleta crema `#f7f1e7`, espresso `#2b1d15`,
  terracota `#c4693b` y verde matcha `#7c9a5b`. Tipografía `Fraunces` para titulares y `Manrope`
  para el texto.
- Estructura one-page: cabecera con navegación y teléfono; hero con H1 local, CTA de llamada, CTA
  a Maps y datos rápidos; franja de servicios; «El local»; «Qué pedir»; galería; visita con horario,
  mapa embebido e indicaciones; preguntas frecuentes; pie.
- Móvil: una columna, CTA de llamada fija, controles táctiles, enlace para saltar al contenido y
  respeto de `prefers-reduced-motion`.

## SEO y arquitectura técnica

- Astro estático con la configuración compartida del monorepo (sitemap + Tailwind), una ruta y CSS
  propio; sin JavaScript de cliente propio.
- HTML en español, título y meta description naturales, canonical, `robots` con
  `max-image-preview:large`, Open Graph y Twitter Card con `public/og.jpg`, y metadatos geográficos.
- JSON-LD `CafeOrCoffeeShop` con nombre, teléfono, dirección, geo, horario, valoración, servicios y
  `sameAs` (TikTok y ficha de Google), más `FAQPage` construido con las mismas preguntas que se ven
  en pantalla.
- Componentes compartidos `LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`.

## Verificación

- `node scripts/check-site-content.mjs campo-cafe-bar` (texto, SEO y accesibilidad del marcado).
- `bun run --filter campo-cafe-bar check` y `typecheck`.
- `bun run --filter campo-cafe-bar build`, y revisión del HTML emitido (un H1, JSON-LD, canonical,
  Open Graph, `srcset` y enlaces de teléfono/mapa).

## Pendiente antes de publicar

Confirmar dominio, NIF/CIF y razón social del titular, la carta con precios, los `alt` de las fotos
y que las imágenes de Google Maps siguen disponibles y se permite su reutilización.
