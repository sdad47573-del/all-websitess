# Cafetería El Destello · web (Astro)

Web de una sola página (one-page) para **Cafetería El Destello**, cafetería y bar de tapes de
Teatinos, en la calle Pirandello, 4 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `CafeOrCoffeeShop`/`Bar`/`Bakery` +
`FAQPage`, contenido en español orientado a búsquedas del tipo «cafetería Teatinos», «El Destello
Málaga», «cafetería Pirandello 4», «tartas Teatinos», «gofres Málaga», «bar Teatinos», «tapas
Teatinos» o «cafetería Universidad Málaga», y galería con las fotografías de la ficha de Google Maps
del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter cafeteria-el-destello dev      # http://localhost:4321
bun run --filter cafeteria-el-destello check    # astro check
bun run --filter cafeteria-el-destello typecheck
bun run --filter cafeteria-el-destello build
bun run --filter cafeteria-el-destello preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://cafeteria-el-destello.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en
`business.site` de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro` cuando
haya dominio definitivo.**

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería y
los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Estructura

```
public/
  favicon.svg        # inicial D sobre taza, fondo granate
  og.jpg             # 1200×630 para compartir en redes (recorte de la terraza)
  robots.txt
src/
  assets/fotos/      # 21 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + granate + oro + naranja)
```

## Origen de los datos

| Dato                                                            | Fuente                                                   |
| --------------------------------------------------------------- | -------------------------------------------------------- |
| Nombre: Cafetería El Destello                                   | ficha de Google Maps                                     |
| Dirección: C. Pirandello, 4, Teatinos-Universidad, 29010 Málaga | Google Maps                                              |
| Teléfono: 677 16 53 76                                          | Google Maps                                              |
| Coordenadas: 36.7175804, -4.4620663                             | visor de fotos de Google Maps (`@36.7175804,-4.4620663`) |
| Plus Code: `PG9Q+25 Málaga`                                     | ficha de Google Maps                                     |
| CID: `0xd72f740fedbef9d:0xfea09befdeba7d2d`                     | enlace de Google Maps facilitado                         |
| Place ID: `ChIJne_b_kD3cg0RLX263u-boP4`                         | datos del lugar en Google Maps                           |
| Valoración: 4,6 con 167 reseñas                                 | ficha de Google Maps                                     |
| Horario: martes a domingo 12:00–2:00; lunes cerrado             | ficha de Google Maps                                     |
| 136 fotos en la ficha                                           | ficha de Google Maps                                     |
| Categoría: Cafetería, ambiente LGBTQ+                           | ficha de Google Maps                                     |
| Tarta de queso como especialidad                                | reseñas de Google Maps («tartas 19», «gofres 13»)        |
| Servicio de comida para llevar                                  | categoría «Comida para llevar» del barrio                |
| Terraza en la calle y ambiente de tardeo                        | fotos y reseñas de la ficha                              |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Cafetería El Destello
en Google Maps** (variante de mayor resolución útil, 1600 px el lado largo), se revisaron una a una
en hojas de contactos y se seleccionaron las del local.

Se publican: la fachada con terraza (hero), la entrada del local, la vitrina de repostería y el
mostrador, la tarta de queso, la tarta de chocolate, los pasteles de crema, el croissant de
chocolate, un postre tradicional, dos fotos de café con leche, dos batidos, las copas de cóctel, el
refresco con naranja, los zumos naturales, la tostada, dos bocadillos, la mesa de la terraza con
clientes, la barra, la sala y el interior con la vitrina y público.

### Nota de procedencia

Las fotos se han extraído de la galería de la propia ficha, por lo que todas son del
establecimiento. Aun así, se descartaron **tres fotografías del negocio vecino «La Exquisita»**, que
aparecen en la misma galería porque el local comparte fachada, y una imagen repetida del mismo
café. Las fotos vienen del perfil del establecimiento en Google Maps; la propia galería y el pie lo
acreditan. **Si el titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`destello-fachada-terraza-pirandello.jpg`), que va con `fetchpriority="high"` y `preload`. El
conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con sustituir el archivo
en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto de la terraza y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo de
      contacto). El teléfono y el domicilio ya están puestos.
- [ ] Confirmar la carta y los precios: en esta web **no se publican precios concretos** porque no
      hay ninguno verificado en fuentes públicas; se describen los productos de forma orientativa.
- [ ] Confirmar el horario en festivos y si la terraza funciona todo el año según el tiempo.
- [ ] Preguntar al local por su perfil de Instagram o web propia: la ficha no tiene ninguno
      publicado, así que no se enlaza.
- [ ] Revisar que las imágenes de Google Maps siguen disponibles y que se permite su reutilización.

## Notas de diseño

Paleta de cafetería de tarde (crema `#fdf9f3`, granate `#7a2e3e` —el color del velero—, naranja
`#b8532e` de los zumos y oro `#c9992f` del caramelo), tipografía `Fraunces` para titulares y `Work
Sans` para el texto. Layout responsive con puntos de ruptura en 980 y 640 px, CTA de llamada fija
en móvil, enlace para saltar al contenido y soporte de `prefers-reduced-motion`.

El título del hero juega con el nombre del local: «Tartas caseras y tapes de tarde».
