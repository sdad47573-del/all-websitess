# Hornos Villanueva · web (Astro)

Web de una sola página (one-page) para **Hornos Villanueva**, panadería y cafetería de Teatinos, en
la calle Juan de Robles, 53 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Bakery`/`CafeOrCoffeeShop` + `FAQPage`,
contenido en español orientado a búsquedas del tipo «panadería Teatinos», «cafetería Teatinos»,
«pan recién hecho Málaga», «desayunos Teatinos», «pitufo Málaga», «bollería Teatinos», «terraza
Teatinos» o «panadería Juan de Robles», y galería con las fotografías de la ficha de Google Maps
del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter hornos-villanueva dev      # http://localhost:4321
bun run --filter hornos-villanueva check    # astro check
bun run --filter hornos-villanueva typecheck
bun run --filter hornos-villanueva build
bun run --filter hornos-villanueva preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://hornos-villanueva.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro` cuando haya dominio
definitivo.**

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería
y los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Estructura

```
public/
  favicon.svg        # hogaza de pan con cortes y base dorada
  og.jpg             # 1200×630 para compartir en redes (recorte de la fachada)
  robots.txt
src/
  assets/fotos/      # 18 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + ámbar + oro + rojo horno)
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Cafetería) | ficha de Google Maps |
| Dirección: C. Juan de Robles, 53, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 952 10 33 87 | Google Maps |
| Coordenadas: 36.7218327, -4.4613918 | datos del lugar en Google Maps |
| CID: `0xd72f73fa30d6033:0xa91af5a4f89095a3` | enlace de Google Maps facilitado |
| Valoración: 4,2 con 634 reseñas | ficha de Google Maps |
| Horario: lunes a viernes 7:30–20:30; sábado y domingo 8:00–14:30 | ficha de Google Maps |
| Panadería y cafetería en el mismo local, amplia terraza, carta para llevar | fotos y reseñas de la ficha |
| Pitufo mixto con jamón a la plancha, queso fundido y mantequilla | reseñas de Google |
| Gran variedad de pan y de dulces, bocadillos y productos | reseñas de Google |
| Instagram `@hornos_villanueva` | cartel del local fotografiado en la ficha |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Hornos Villanueva en
Google Maps** (variante de mayor resolución útil, ~1600 px el lado largo), se deduplicaron por
hash y se revisaron una a una en hojas de contactos antes de seleccionarlas.

Se publican **18 fotos** que se corresponden con el local: la fachada de panadería y cafetería
(hero), otra vista de fachada, la terraza, el interior con la rejería, el salón, la barra, una
hogaza de pan, un desayuno, bocadillos a la plancha y de pan de nueces, cafés y capuchino, una
porra y una mesa con bocadillos.

### Nota de procedencia

Al raspar Google Maps la galería carga también fotos de negocios cercanos. En este caso se
**descartaron 4 imágenes**: las fachadas de otros locales del entorno («Hadavid aromas y sabores»,
«Panadería Samuel» y «Fermento Casa de Panaderos»), además de una foto en blanco y negro y de un
cartel de la época COVID con el horario ya desactualizado (no se publica para no dar información
errónea). También se descartaron fotos con primeras personas identificables. Conviene revisar
siempre cada imagen antes de publicarla. Las fotos de esta web vienen del perfil del
establecimiento en Google Maps; la propia galería y el pie lo acreditan. **Si el titular pide
retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`hornos-villanueva-fachada-cafeteria-panaderia-malaga.jpg`), que va con `fetchpriority="high"` y
`preload`. El conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con
sustituir el archivo en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto de la fachada y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo
      de contacto). El teléfono y el domicilio ya están puestos.
- [ ] Confirmar la carta y los precios: en esta web **no se publican precios concretos** porque no
      hay ninguno verificado en fuentes públicas; se describen los productos de forma orientativa.
- [ ] Confirmar el horario por festivos y la disponibilidad de terraza según el tiempo.
- [ ] Confirmar el Instagram `@hornos_villanueva` con el titular (se ha tomado del cartel del local)
      y si el teléfono 952 10 33 87 es la línea de Teatinos (el cartel distingue Soliva y Teatinos).
- [ ] Obtener el **Place ID** (`ChIJ…`) definitivo si el titular lo facilita: ahora el JSON-LD usa
      el CID como identificador y el enlace de reseñas apunta a la ficha por CID.

## Notas de diseño

Paleta de horno (crema `#f8f3ea`, ámbar `#9c5a24`, oro `#c9a227` y rojo horno `#a8432c`),
tipografía `Lora` para titulares y `Work Sans` para el texto. Layout responsive con puntos de
ruptura en 980 y 640 px, CTA de llamada fija en móvil y soporte de `prefers-reduced-motion`.
