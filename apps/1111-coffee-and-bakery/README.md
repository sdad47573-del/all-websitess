# 11:11 Coffee and Bakery · web (Astro)

Web de una sola página (one-page) para **11:11 Coffee and Bakery**, cafetería y bakery de Teatinos,
en la calle Andrés Bernáldez, 13 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `CafeOrCoffeeShop`/`Bakery` + `FAQPage`,
contenido en español orientado a búsquedas del tipo «cafetería Teatinos», «desayunos Teatinos»,
«meriendas Málaga», «pitufo Málaga», «tartas por encargo Málaga», «tarta de cumpleaños Málaga»,
«panadería Teatinos» o «cafetería Andrés Bernáldez», y galería con las fotografías de la ficha de
Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter 1111-coffee-and-bakery dev      # http://localhost:4321
bun run --filter 1111-coffee-and-bakery check    # astro check
bun run --filter 1111-coffee-and-bakery typecheck
bun run --filter 1111-coffee-and-bakery build
bun run --filter 1111-coffee-and-bakery preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://1111-coffee-and-bakery.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en
`business.site` de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro`
cuando haya dominio definitivo.**

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería
y los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Sin teléfono

El local **no tiene teléfono público** (en Google aparece «Añadir número de teléfono del sitio» y
su Instagram indica «sólo WhatsApp»), por lo que las llamadas a la acción se han adaptado: el botón
principal y la barra fija de móvil abren **«Cómo llegar»** (Google Maps) y el canal de contacto es
su **Instagram** `@11.11coffeebakery`. En `LocalSeo` el teléfono va vacío y no se emiten los
metadatos `business:contact_data`.

## Estructura

```
public/
  favicon.svg        # reloj a las 11:11 con taza
  og.jpg             # 1200×630 para compartir en redes (recorte del desayuno)
  robots.txt
src/
  assets/fotos/      # 18 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + frambuesa + caramelo + oro)
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Cafetería) | ficha de Google Maps |
| Dirección: C. Andrés Bernáldez, 13, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Coordenadas: 36.7222306, -4.4665261 | datos del lugar en Google Maps |
| CID: `0xd72f766aef83e33:0x55aced55f2c488cd` | enlace de Google Maps facilitado |
| Valoración: 4,8 con 84 reseñas | ficha de Google Maps |
| Precio orientativo 1–10 € por persona | ficha de Google Maps |
| Horario: lunes a sábado 8:00–13:30; domingo cerrado | ficha de Google Maps |
| Pitufo mixto 2,40 € y café con leche 1,70 € | ticket del local fotografiado en la ficha (abril 2026) |
| Titular: Paula Leiva Fernández | ticket del local fotografiado en la ficha |
| «Pitufo de tamaño por encima de la media», gran variedad de pan, mollete, lomo en manteca, bocadillo de atún, calidad-precio y trato | reseñas de Google |
| Tartas artesanales por encargo, tarta de chocolate | pizarra del local y fotos de la ficha |
| Concepto «desayunos y meriendas con amor / tu rincón dulce en Teatinos», contacto «sólo WhatsApp» | perfil de Instagram `@11.11coffeebakery` |
| Espacio amigable LGBTQ+ | ficha de Google |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de 11:11 Coffee and
Bakery en Google Maps** (variante de mayor resolución útil, ~1600 px el lado largo), se
deduplicaron por hash y se revisaron una a una en hojas de contactos antes de seleccionarlas.

Se publican **18 fotos** que se corresponden con el local: el interior con la barra (hero), la
fachada y la calle, el rótulo de bienvenida, la pizarra de «tartas por encargo», la vitrina de
bollería, un desayuno, bocadillos, la tarta de chocolate, la tarta al corte, cafés con bollería,
batidos, galletas caseras y el ambiente del local.

### Nota de procedencia

Al raspar Google Maps la página carga también fotos de negocios cercanos. En este caso se
**descartó 1 imagen** que era de otro local: un ticket de «Cafetería Plantaciones» de la calle
Andrés Bernáldez **nº 11** (número distinto y otro titular). Además se descartaron fotos repetidas
y un ticket con datos personales del propio local (nombre y NIF), que no se publica. Conviene
revisar siempre cada imagen antes de publicarla. Las fotos de esta web vienen del perfil del
establecimiento en Google Maps; la propia galería y el pie lo acreditan. **Si el titular pide
retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`11-11-coffee-bakery-interior-barra-malaga.jpg`), que va con `fetchpriority="high"` y `preload`. El
conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con sustituir el archivo
en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto del desayuno y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales: **NIF/CIF y correo de contacto** (el teléfono no existe; el
      nombre del titular ya está). Confirmar con el local que se permite publicar el nombre del
      titular.
- [ ] Confirmar la carta y los precios: solo el pitufo mixto (2,40 €) y el café con leche (1,70 €)
      están tomados del ticket; el resto se describe de forma orientativa.
- [ ] Confirmar el horario por festivos y si el local ofrece terraza.
- [ ] Confirmar que se autoriza el enlace a Instagram como canal de WhatsApp.
- [ ] Obtener el **Place ID** (`ChIJ…`) definitivo si el titular lo facilita: ahora el JSON-LD usa
      el CID como identificador y el enlace de reseñas apunta a la ficha por CID.

## Notas de diseño

Paleta dulce de obrador (crema `#fbf6ef`, frambuesa `#b0465e`, caramelo `#c07a3a` y oro
`#d0a24a`), tipografía `Fraunces` para titulares y `Work Sans` para el texto. Layout responsive con
puntos de ruptura en 980 y 640 px, CTA fija en móvil (que abre «Cómo llegar») y soporte de
`prefers-reduced-motion`.
