# Diseño: web de 11:11 Coffee and Bakery

**Fecha:** 2026-10-02
**Estado:** Aprobado para implementación por el usuario.

## Objetivo y alcance

Crear una landing estática, rápida y responsive en Astro para 11:11 Coffee and Bakery, como app
independiente `apps/1111-coffee-and-bakery/`. El objetivo es el SEO local: posicionar el local en
búsquedas como «cafetería Teatinos», «desayunos Teatinos», «meriendas Málaga», «pitufo Málaga»,
«tartas por encargo Málaga» o «panadería Teatinos», y facilitar la llegada y el contacto. Se
mantiene sin cambios el resto de aplicaciones del monorepo.

## Datos publicados

- Nombre: 11:11 Coffee and Bakery. Categoría: Cafetería (bakery).
- Dirección: C. Andrés Bernáldez, 13, Teatinos-Universidad, 29010 Málaga (junto al Centro de Salud
  Colonia Santa Inés).
- Sin teléfono público: las CTA son «Cómo llegar» (Google Maps) e Instagram `@11.11coffeebakery`.
- Coordenadas: 36.7222306, -4.4665261. CID `0xd72f766aef83e33:0x55aced55f2c488cd`.
- Valoración: 4,8 sobre 84 reseñas de Google. Precio orientativo: 1–10 € por persona.
- Horario: lunes a sábado 8:00–13:30; domingo cerrado.
- Concepto: cafetería-bakery de barrio. Desayunos y meriendas con pitufos, bocadillos, bollería y
  gran variedad de pan; tartas artesanales por encargo. Titular (según ticket): Paula Leiva
  Fernández.
- Carta y precios de referencia: pitufo mixto 2,40 € y café con leche 1,70 € (ticket del local,
  abril 2026). Pitufo de pasas y nueces, mollete, lomo en manteca, bocadillo de atún con queso,
  bollería, galletas caseras, tarta de chocolate y tartas por encargo.
- Dominio provisional: `https://1111-coffee-and-bakery.vercel.app`; cambiarlo antes de publicar.
- No se ha podido obtener el **Place ID** (`ChIJ…`) de fuentes públicas; el JSON-LD usa el CID como
  identificador y el enlace de reseñas apunta a la ficha por CID.

## Fotos

- 38 fotos localizadas en la galería pública de la ficha de Google Maps durante la implementación
  (con un navegador headless sobre la ficha), descargadas a ~1600 px el lado largo y deduplicadas
  por hash (34 únicas). Se revisaron en hojas de contactos y se seleccionaron **18**.
- Selección: interior con barra (hero), fachada y calle, rótulo de bienvenida, pizarra de «tartas
  por encargo», vitrina de bollería, desayuno, bocadillos, tarta de chocolate, tarta al corte,
  café con napolitana, batidos, galletas caseras y ambiente.
- Se **descartó 1 foto** de otro negocio (ticket de «Cafetería Plantaciones», calle Andrés Bernáldez
  nº 11, otro titular), además de repetidos y de un ticket con datos personales del propio local
  (no se publica). Al raspar Google Maps se cuelan fotos de sitios cercanos; hay que revisar siempre
  cada imagen antes de publicarla.
- Optimizadas en el `build` con `astro:assets` (AVIF, `srcset`, `loading="lazy"` salvo el hero). Se
  acredita la procedencia en la galería y en el pie; una imagen se recorta a `public/og.jpg`
  (1200×630) para las vistas previas al compartir.
- Google puede retirar o cambiar las fotos en cualquier momento: revisar antes de publicar y
  sustituir si el titular lo pide.

## Experiencia visual

- Dirección: obrador dulce y cálido. Paleta crema `#fbf6ef`, frambuesa `#b0465e`, caramelo
  `#c07a3a` y oro `#d0a24a`. Tipografía `Fraunces` para titulares y `Work Sans` para el texto.
- Estructura one-page: cabecera con navegación y botón «Cómo llegar»; hero con H1 local, CTA de
  llegada, CTA a Instagram y datos rápidos; franja de servicios; «El local»; «La carta»; galería;
  visita con horario, mapa embebido e indicaciones; preguntas frecuentes; pie.
- Sin teléfono: la CTA principal y la barra fija de móvil abren Google Maps; el contacto es por
  Instagram/WhatsApp.
- Móvil: una columna, CTA fija, controles táctiles, enlace para saltar al contenido y respeto de
  `prefers-reduced-motion`.

## SEO y arquitectura técnica

- Astro estático con la configuración compartida del monorepo (sitemap + Tailwind), dos rutas
  (`/` y `/aviso-legal`) y CSS propio; sin JavaScript de cliente propio.
- HTML en español, título y meta description naturales, canonical, `robots` con
  `max-image-preview:large`, Open Graph y Twitter Card con `public/og.jpg`, y metadatos geográficos.
  Al no haber teléfono, se omite el objeto `contact` de negocio.
- JSON-LD `CafeOrCoffeeShop` + `Bakery` con nombre, alias, dirección, geo, horario, valoración,
  servicios, `hasMap`, identificador (CID) y `sameAs` (Google Maps e Instagram), más `FAQPage`
  construido con las mismas preguntas que se ven en pantalla.
- Componentes compartidos `LocalSeo`, `LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`,
  `LocalMenu`, `LocalGallery`, `LocalVisit`, `LocalFaq` y `LocalFooter`.

## Verificación

- `node scripts/check-site-content.mjs 1111-coffee-and-bakery` (texto, SEO y accesibilidad del
  marcado).
- `bun run --filter 1111-coffee-and-bakery check` y `typecheck`.
- `bun run --filter 1111-coffee-and-bakery build`, y revisión del HTML emitido (un H1, JSON-LD,
  canonical, Open Graph, `srcset` y enlaces de mapa).

## Pendiente antes de publicar

Confirmar dominio, NIF/CIF y correo del titular, la autorización para publicar el nombre del
titular y el enlace a Instagram, la carta con precios, los `alt` de las fotos y que las imágenes de
Google Maps siguen disponibles y se permite su reutilización. Obtener el Place ID definitivo si el
titular lo facilita.
