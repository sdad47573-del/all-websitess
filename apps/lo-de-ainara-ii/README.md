# Café-Bar Lo de Ainara II · web (Astro)

Web de una sola página (one-page) para **Café-Bar Lo de Ainara II**, bar de tapas, pescaíto frito y
raciones en la calle Juan Francés Bosca, 19 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «bar de tapas Teatinos», «pescaíto frito Málaga», «comer en
Teatinos», «tapas Juan Francés Bosca», «cartuchos de fritura Málaga» o «bar de tapas 29010», y
galería con las fotografías de la ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter lo-de-ainara-ii dev      # http://localhost:4321
bun run --filter lo-de-ainara-ii check    # astro check
bun run --filter lo-de-ainara-ii typecheck
bun run --filter lo-de-ainara-ii build
bun run --filter lo-de-ainara-ii preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://lo-de-ainara-ii.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
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
  favicon.svg        # pez dorado sobre azul
  og.jpg             # 1200×630 para compartir en redes (recorte de la barra)
  robots.txt
src/
  assets/fotos/      # 18 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + azul marino + dorado + terracota)
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Restaurante) | ficha de Google Maps |
| Dirección: C. Juan Francés Bosca, 19, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 605 49 40 48 | Google Maps |
| Coordenadas: 36.7267217, -4.4664906 | datos del lugar en Google Maps |
| CID: `0xd72f7003c9b74d1:0x885b1b4253491506` | enlace de Google Maps facilitado |
| Valoración: 4,1 con 59 reseñas | ficha de Google Maps |
| Horario: lunes y martes cerrado; miércoles y jueves 12:30–16:30; viernes y sábado 12:30–16:30 y 20:30–23:30; domingo 12:30–16:30 | ficha de Google Maps |
| Cartuchos de fritura a 4,80 € y tapas de la pizarra (albóndigas de choco, bravas, boquerones en vinagre, calamares y jamón, calamarzada…) | pizarra del local fotografiada en la ficha |
| Pata de pulpo con puré trufado, croquetas, huevos rotos con gambas al ajillo, tarta de queso con nutella | reseñas de Google |
| Terraza, barra de azulejos y comedor interior | fotos de la ficha de Google |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Lo de Ainara II en
Google Maps** (variante de mayor resolución útil, ~1600 px el lado largo) y se revisaron una a una
en hojas de contactos antes de seleccionarlas.

Se publican **18 fotos** que se corresponden con el local: la barra con el cartel «Boquerón, cazón
y victoria», fachada, terraza (tres tomas) y comedor interior, más platos (pata de pulpo con puré
trufado, calamares, cazón en adobo, boquerones, croquetas, huevos rotos con gambas, gambas
cocidas, almejas, mejillones, ensaladilla, salmorejo y bocadillo).

### Nota de procedencia

Al raspar Google Maps la página carga también fotos de sitios cercanos, así que conviene revisar
siempre cada imagen antes de publicarla. Las fotos de esta web vienen del perfil del
establecimiento en Google Maps; la propia galería y el pie lo acreditan. **Si el titular pide
retirarlas, se sustituyen.** Conviene que el titular confirme qué fotos autoriza a publicar.

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`lo-de-ainara-ii-barra-fritura-con-historia-malaga.jpg`), que va con `fetchpriority="high"` y
`preload`. El conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con
sustituir el archivo en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto de la barra y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo
      de contacto). El teléfono y el domicilio ya están puestos.
- [ ] Confirmar la carta y los precios con el local: se han tomado de la pizarra publicada en la
      ficha y pueden haber cambiado. El resto de precios se describe de forma orientativa.
- [ ] Confirmar el horario por festivos y la disponibilidad de terraza según el tiempo.
- [ ] Obtener el **Place ID** (`ChIJ…`) definitivo si el titular lo facilita: ahora el JSON-LD usa
      el CID como identificador y el enlace de reseñas apunta a la ficha por CID.

## Notas de diseño

Paleta inspirada en la barra del local y el pescaíto frito (crema `#f6efe2`, azul marino `#16262e`,
azul `#1d5563`, dorado `#c99a2e` y terracota `#c2703d`), tipografía `Playfair Display` para
titulares y `Work Sans` para el texto. Layout responsive con puntos de ruptura en 980 y 640 px,
CTA de llamada fija en móvil y soporte de `prefers-reduced-motion`.
