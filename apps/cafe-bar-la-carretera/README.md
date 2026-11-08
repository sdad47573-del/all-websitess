# Café Bar La Carretera · web (Astro)

Web de una sola página (one-page) para **Café Bar La Carretera**, cafetería y bar de tapas de
Teatinos, en la calle Navarro Ledesma, 58 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «cafetería Teatinos», «desayunos Teatinos», «menú del día
Málaga», «bar de tapas Teatinos», «comer en Teatinos», «menú del día 10 euros Málaga» o «cafetería
Navarro Ledesma», y galería con las fotografías de la ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter cafe-bar-la-carretera dev      # http://localhost:4321
bun run --filter cafe-bar-la-carretera check    # astro check
bun run --filter cafe-bar-la-carretera typecheck
bun run --filter cafe-bar-la-carretera build
bun run --filter cafe-bar-la-carretera preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://cafe-bar-la-carretera.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en
`business.site` de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro`
cuando haya dominio definitivo.**

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería
y los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Estructura

```
public/
  favicon.svg        # taza de café con vaho dorado
  og.jpg             # 1200×630 para compartir en redes (recorte de la terraza)
  robots.txt
src/
  assets/fotos/      # 18 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + rojo del cartel + terracota + oliva + oro)
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Cafetería) | ficha de Google Maps |
| Dirección: C. Navarro Ledesma, 58, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 609 74 33 59 | Google Maps |
| Coordenadas: 36.7251995, -4.4665837 | datos del lugar en Google Maps |
| CID: `0xd72f7397d198917:0x8eff3b0ca7f64c77` | enlace de Google Maps facilitado |
| Google Maps feature ID: `/g/1pp2xbfsq` | URL de indicaciones del lugar |
| Valoración: 4,3 con 171 reseñas | ficha de Google Maps |
| Horario: lunes a viernes 7:00–16:30; sábado y domingo cerrado | ficha de Google Maps |
| Menú del día 10,00 € (lunes a viernes), tapas variadas, paella miércoles y viernes, suplemento de 1 € por modificación | cartel del menú fotografiado en la ficha |
| Precio orientativo 1–10 € por persona | reseñas de Google |
| Desayunos, bocadillos, catalana, comida casera, arroces | reseñas de Google |
| Barra de azulejos, comedor y terraza | fotos de la ficha de Google |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública del Café Bar La Carretera
en Google Maps** (variante de mayor resolución útil, ~1600 px el lado largo), se deduplicaron por
hash y se revisaron una a una en hojas de contactos antes de seleccionarlas.

Se publican **18 fotos** que se corresponden con el local: la terraza con sombrillas (hero), la
fachada de la calle Navarro Ledesma, el cartel del menú del día, la barra y el comedor, la barra de
tapas, un desayuno y distintos platos (croquetas, albóndigas, guiso de carne con patatas, tortilla,
pincho, pescado frito, carne a la plancha, salmorejo y paella).

### Nota de procedencia

Al raspar Google Maps la página carga también fotos de negocios cercanos. En este caso se
**descartaron 2 imágenes** que pertenecían a otros locales del entorno (una cafetería rotulada
como «Teatinos» y otra cafetería moderna con un logotipo distinto), además de varias que se
repetían. Conviene revisar siempre cada imagen antes de publicarla. Las fotos de esta web vienen
del perfil del establecimiento en Google Maps; la propia galería y el pie lo acreditan. **Si el
titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`la-carretera-terraza-teatinos-malaga.jpg`), que va con `fetchpriority="high"` y `preload`. El
conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con sustituir el archivo
en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto de la terraza y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo
      de contacto). El teléfono y el domicilio ya están puestos.
- [ ] Confirmar la carta y los precios con el local: solo el menú del día (10,00 €) está tomado de
      la pizarra publicada en la ficha; el resto se describe de forma orientativa.
- [ ] Confirmar el horario por festivos y la disponibilidad de terraza según el tiempo.
- [ ] Obtener el **Place ID** (`ChIJ…`) definitivo si el titular lo facilita: ahora el JSON-LD usa
      el CID y el feature ID de Google como identificadores y el enlace de reseñas apunta a la ficha
      por CID.

## Notas de diseño

Paleta inspirada en el cartel del menú y la taberna clásica (crema `#f7f2e8`, rojo `#9e2b2b`,
terracota `#c26a2c`, oliva y oro `#cda231`), tipografía `Bitter` para titulares y `Work Sans` para
el texto. Layout responsive con puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil y
soporte de `prefers-reduced-motion`.
