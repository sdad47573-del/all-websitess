# Amorato · web (Astro)

Web de una sola página (one-page) para **Amorato**, heladería, cafetería y pastelería artesanal de
Teatinos, en la calle Escritora Carmen Conde, 3 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `IceCreamShop`/`CafeOrCoffeeShop`/`Bakery` +
`FAQPage`, contenido en español orientado a búsquedas del tipo «heladería Teatinos», «helado
artesanal Málaga», «pastelería Teatinos», «cafetería Teatinos», «medialunas Málaga», «alfajores
Málaga», «dulces argentinos Málaga», «helado sin gluten Málaga» o «tartas por encargo Teatinos», y
galería con las fotografías de la ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter amorato-malaga dev      # http://localhost:4321
bun run --filter amorato-malaga check    # astro check
bun run --filter amorato-malaga typecheck
bun run --filter amorato-malaga build
bun run --filter amorato-malaga preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://amorato-malaga.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
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
  favicon.svg        # cucurucha de helado sobre fondo verde oscuro
  og.jpg             # 1200×630 para compartir en redes (recorte del interior)
  robots.txt
src/
  assets/fotos/      # 18 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + turquesa + fresa + oro)
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre: Amorato · Heladería, cafetería y pastelería | ficha de Google Maps |
| Dirección: C. Escritora Carmen Conde, 3, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 689 34 43 76 | Google Maps |
| Coordenadas: 36.725062, -4.473187 | decodificación del Plus Code `PGGG+2P Málaga` |
| CID: `0xd72f73840fb1717:0xfe8e67b154157664` | enlace de Google Maps facilitado |
| Place ID: `ChIJFxf7QDj3cg0RZHYVVLFnjv4` | datos del lugar en Google Maps |
| Valoración: 4,8 con 303 reseñas | ficha de Google Maps |
| Horario: martes a jueves y domingo 8:00–23:30; viernes y sábado 8:00–1:00; lunes cerrado | ficha de Google Maps |
| 268+ fotos en la ficha | ficha de Google Maps |
| Amigable con LGBTQ+ | ficha de Google Maps |
| Instagram `@amorato_malaga` | perfil público del local |
| Helado artesanal diario, sabor propio Amorato (crema de fresa, bizcocho y salsa de fresa), Franui | Diario Sur, 10/05/2026 |
| Más de 20 sabores sin gluten, opciones sin azúcar, sin lactosa y proteicas | La Opinión de Málaga, 04/06/2026 |
| Dulces argentinos: medialunas rellenas, alfajores, vigilantes y facturas; napolitana; sándwich de miga; pan de la panadería Serrano; cajas para regalo con zumo y mensaje | Diario Sur, 10/05/2026 |
| Sala amplia y luminosa, terraza en la calle | fotos y reseñas de la ficha |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Amorato en Google
Maps** (variante de mayor resolución útil, 1600 px el lado largo), se revisaron una a una en hojas
de contactos y se seleccionaron **18**, todas correspondientes a este local.

Se publican: el interior del local (hero), la vitrina de tartas, la vitrina de helados y las
cubetas del obrador, un vaso de helado con la marca del local, la tarta de pistacho y otra de
crema, la medialuna, la napoleana, los croissants, los alfajores, el bocadillo de desayuno, el
sándwich a la plancha, dos desayunos completos, el café con leche, el café con croissant y la
terraza de la calle.

### Nota de procedencia

Las fotos se han extraído de la galería de la propia ficha, por lo que todas son del
establecimiento. Aun así, conviene revisar cada imagen antes de publicarla: se descartaron las
fotos en las que aparecen manos de clientes sosteniendo el helado, por no querer asociar a nadie
a la web. Las fotos vienen del perfil del establecimiento en Google Maps; la propia galería y el
pie lo acreditan. **Si el titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`amorato-interior-cafeteria-teatinos-malaga.jpg`), que va con `fetchpriority="high"` y `preload`.
El conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con sustituir el
archivo en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto del interior y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo
      de contacto). El teléfono y el domicilio ya están puestos.
- [ ] Confirmar la carta y los precios: en esta web **no se publican precios concretos** porque no
      hay ninguno verificado en fuentes públicas; se describen los productos de forma orientativa.
- [ ] Confirmar el horario en festivos y si la terraza funciona todo el año según el tiempo.
- [ ] Confirmar con el local el perfil de Instagram `@amorato_malaga` y si la web puede enlazarlo.
- [ ] Revisar que las imágenes de Google Maps siguen disponibles y que se permite su reutilización.

## Notas de diseño

Paleta de obrador (crema `#fbf7f2`, turquesa `#157a72` —el color de las butacas y la marca—, fresa
`#c8385f` y oro `#d2a53f`), tipografía `Fraunces` para titulares y `Work Sans` para el texto. Layout
responsive con puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil, enlace para saltar
al contenido y soporte de `prefers-reduced-motion`.