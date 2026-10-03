# Diseño: web de Sur Helado Café

**Fecha:** 2026-10-03
**Estado:** Implementada.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para Sur, como app independiente
`apps/sur-helado-cafe/`. El objetivo es el SEO local: posicionar el local en búsquedas como
«heladería Teatinos», «helado café Málaga», «helado artesanal Teatinos», «helado italiano Málaga»,
«cafetería Teatinos», «café Pirandello», «tartas Teatinos» o «terraza Teatinos», y facilitar la
llegada. Se mantiene sin cambios el resto de aplicaciones del monorepo.

## Datos publicados

- Nombre: Sur. En Google figura como «Sur - Helado Cafe», categoría «Cafetería».
- Dirección: C. Pirandello, 8, Teatinos-Universidad, 29010 Málaga.
- Teléfono: **el establecimiento no publica ninguno**. Es el condicionante que más afecta al
  diseño: la llamada a la acción principal son las indicaciones y el contacto es Instagram.
- Coordenadas: 36.7171146, -4.4614703 (URL de la vista de fotos de la propia ficha). El Plus Code
  `PG8Q+X4` es consistente con esa posición.
- CID `0xd72f73aa2c39bc7:0x107b341df85c6883` y Place ID `ChIJx5vDojr3cg0Rg2hc-B00exA`.
- Valoración: 4,9 sobre 228 reseñas de Google.
- Horario: martes a viernes 9:00–22:00; sábado 11:00–23:00; domingo 11:00–20:00; lunes cerrado.
- Instagram `@surheladocafe` y TikTok `@sur.heladocafe`.
- Concepto: helado café de barrio a un paso del campus. Helado artesanal de sabores naturales,
  café, tartas, bocadillos, desayunos y meriendas, con terraza en la propia calle.
- Dominio provisional: `https://sur-helado-cafe.vercel.app`; cambiarlo antes de publicar.
- No se publican precios concretos: no hay ninguno verificado. Solo se cita como referencia el
  precio medio (3–8 € por persona) que difunde el propio local.

## Cómo se han obtenido los datos

La ficha de Google Maps bloquea el acceso directo por muro de consentimiento. Los datos se
obtuvieron abriendo la ficha en Chromium sin interfaz (Playwright) con las cookies de consentimiento
de Google, leyendo el panel lateral y el estado interno de la página: horario semanal completo,
dirección, valoración, número de reseñas, Plus Code, Place ID y CID. Las reseñas y el perfil de
Instagram sirvieron para completar el tono del contenido.

## Fotos

- La ficha tiene 137 fotos. Se recorrió la galería y se recuperaron **19** imágenes únicas, que se
  descargaron a 1600 px el lado largo y se revisaron en hojas de contactos.
- Se publican **11** fotos del local: interior con la vitrina y la terraza (hero), fachada con la
  terraza en la calle, sala con el rótulo, vitrina con los cartelitos de sabores, cubetas de Oreo,
  helado de fresa en la cubeta, bola de chocolate con nata, cucurucho con galleta, vaso de helado
  con toppings, vaso de café y bocadillo con zumo.
- Se **descartaron 5** imágenes ajenas: una carta de bocadillos y tostas que pertenece a otro
  establecimiento (ni los productos ni los precios encajan con una heladería) y cuatro fachadas de
  locales del entorno que la galería mezcla (una peluquería, una mercería y otra heladería). Aquí
  el riesgo era real: sin revisión, la web habría mostrado cuatro tiendas ajenas como si fueran el local.
- Optimizadas en el `build` con `astro:assets` (AVIF, `srcset`, `loading="lazy"` salvo el hero). Se
  acredita la procedencia en la galería y en el pie; una imagen se recorta a `public/og.jpg`
  (1200×630) para las vistas previas al compartir.

## Experiencia visual

- Dirección: heladería de barrio luminosa, con el toldo verde y el rótulo de la pared como
  referencia. Paleta crema `#faf5ec`, verde `#2f5d50`, rosa `#d2607a` y oro `#c9a227`. Tipografía
  `Playfair Display` para titulares y `Karla` para el texto.
- Estructura one-page: cabecera con navegación y el contacto de Instagram; hero con H1 local, CTA
  de indicaciones, CTA a Maps y datos rápidos; franja de servicios; «El local»; «La carta»;
  galería; visita con horario, mapa embebido e indicaciones; preguntas frecuentes; pie.
- Móvil: una columna, CTA fija que abre «Cómo llegar», controles táctiles, enlace para saltar al
  contenido y respeto de `prefers-reduced-motion`.

## SEO y arquitectura técnica

- Astro estático con la configuración compartida del monorepo (sitemap + Tailwind), dos rutas
  (`/` y `/aviso-legal`) y CSS propio; sin JavaScript de cliente propio.
- HTML en español, título y meta description naturales, canonical, `robots` con
  `max-image-preview:large`, Open Graph y Twitter Card con `public/og.jpg` y metadatos geográficos.
  Sin metadatos `business:contact_data`: no hay teléfono ni correo.
- JSON-LD `IceCreamShop` + `CafeOrCoffeeShop` con nombre, alias, dirección, geo, horario (lunes
  cerrado), valoración, servicios, `amenityFeature`, `hasMap`, identificadores (CID y Place ID) y
  `sameAs` (Google Maps e Instagram), más `FAQPage` con las mismas preguntas que se ven en pantalla.
- Componentes compartidos `LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`.

## Verificación

- `node scripts/check-site-content.mjs sur-helado-cafe`: 0 errores y 0 avisos.
- `bun run --filter sur-helado-cafe check` (0 errores) y `typecheck` (sin errores).
- `bun run --filter sur-helado-cafe build`, y revisión en navegador: 11 imágenes, 0 rotas y 0
  peticiones fallidas; hero renderizado correctamente.

## Pendiente antes de publicar

Confirmar dominio, NIF/CIF, razón social y correo, si el local tiene teléfono (hoy la web no
puede ofrecer llamada), el horario en festivos, la carta y los precios, los perfiles de Instagram y
TikTok, y que las imágenes de Google Maps siguen disponibles y se permite su reutilización.