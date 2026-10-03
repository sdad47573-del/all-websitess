# Sur Helado Café · web (Astro)

Web de una sola página (one-page) para **Sur**, helado café de Teatinos, en la calle Pirandello, 8
(Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `IceCreamShop`/`CafeOrCoffeeShop` +
`FAQPage`, contenido en español orientado a búsquedas del tipo «heladería Teatinos», «helado café
Málaga», «helado artesanal Teatinos», «helado italiano Málaga», «cafetería Teatinos», «café
Pirandello», «tartas Teatinos», «bocadillos Teatinos» o «terraza Teatinos», y galería con las
fotografías de la ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter sur-helado-cafe dev      # http://localhost:4321
bun run --filter sur-helado-cafe check    # astro check
bun run --filter sur-helado-cafe typecheck
bun run --filter sur-helado-cafe build
bun run --filter sur-helado-cafe preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://sur-helado-cafe.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro` cuando haya dominio
definitivo.**

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería
y los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Sin teléfono

El local **no publica teléfono** (en Google aparece «Añadir número de teléfono del sitio»), por lo
que las llamadas a la acción se han adaptado: el botón principal y la barra fija de móvil abren
**«Cómo llegar»** (Google Maps) y el canal de contacto es su **Instagram** `@surheladocafe`. En
`LocalSeo` el teléfono va vacío y no se emiten los metadatos `business:contact_data`.

## Estructura

```
public/
  favicon.svg        # bola de cucurucho sobre fondo verde
  og.jpg             # 1200×630 para compartir en redes (recorte del interior)
  robots.txt
src/
  assets/fotos/      # 11 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + verde + rosa + oro)
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre: Sur · Helado Café (ficha: «Sur - Helado Cafe») | ficha de Google Maps |
| Categoría en Google: Cafetería | ficha de Google Maps |
| Dirección: C. Pirandello, 8, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono | **no publicado** por el establecimiento |
| Coordenadas: 36.7171146, -4.4614703 | URL de la vista de fotos de la propia ficha |
| Plus Code: `PG8Q+X4 Málaga` | Google Maps |
| CID: `0xd72f73aa2c39bc7:0x107b341df85c6883` | enlace de Google Maps facilitado |
| Place ID: `ChIJx5vDojr3cg0Rg2hc-B00exA` | datos del lugar en Google Maps |
| Valoración: 4,9 con 228 reseñas | ficha de Google Maps |
| Horario: martes a viernes 9:00–22:00; sábado 11:00–23:00; domingo 11:00–20:00; lunes cerrado | ficha de Google Maps |
| 137 fotos en la ficha | ficha de Google Maps |
| «Helados, cafecito, tartas, bocadillos y más» | perfil del local en TikTok `@sur.heladocafe` |
| «Hola, soy Pablo y esto es un Helado Café. Creamos este lugar para volver a los sencillos» | perfil de Instagram del local |
| Helados naturales, con mucho porcentaje de fruta | perfil de Instagram del local |
| Precio medio de 3 a 8 € por persona | publicaciones del propio local |
| Palabras más repetidas en reseñas: heladería, sabores, pistacho, merendar | ficha de Google Maps |
| Terraza con mesas y sombrillas en la calle | fotos de la ficha |
| Local familiar, buen trato con los niños | reseñas de Google |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Sur en Google Maps**
(variante de mayor resolución útil, 1600 px el lado largo) y se revisaron una a una en hojas de
contactos antes de seleccionarlas.

Se publican **11 fotos** del local: el interior con la vitrina y la terraza (hero), la fachada con
la terraza en la calle Pirandello, la sala con el rótulo en la pared, la vitrina con los cartelitos
de sabores, las cubetas con el sabor Oreo, el helado de fresa en la cubeta, una bola de chocolate
con nata, un cucurucho con galleta, un vaso de helado con toppings, un vaso de café y un bocadillo
con zumo de naranja.

### Nota de procedencia

Al recorrer la galería de Google Maps se cuelan fotos de negocios vecinos. En este caso se
**descartaron 5 imágenes**: una carta de **bocadillos y tostas** que pertenece a otro
establecimiento (los precios y los productos no coinciden con la oferta de una heladería) y cuatro
fachadas de locales del entorno que aparecen en la galería (una peluquería, una Mercería y una
otra heladería). También se descartaron una foto repetida y una con personas identificables.

Conviene revisar siempre cada imagen antes de publicarla. Las fotos de esta web vienen del perfil
del establecimiento en Google Maps; la propia galería y el pie lo acreditan. **Si el titular pide
retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`sur-helado-cafe-interior-terraza-malaga.jpg`), que va con `fetchpriority="high"` y `preload`. El
conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con sustituir el archivo
en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto del interior y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo
      de contacto). El domicilio ya está puesto; el teléfono no existe.
- [ ] Preguntar al local si tiene teléfono y, si lo publica, añadirlo a la web: ahora mismo la
      única vía de contacto es Instagram.
- [ ] Confirmar la carta y los precios: en esta web **no se publican precios concretos** porque no
      hay ninguno verificado en fuentes públicas. Como referencia se cita el precio medio que
      difunde el propio local (3–8 € por persona).
- [ ] Confirmar el horario en festivos y la disponibilidad de la terraza según el tiempo.
- [ ] Confirmar con el local el perfil de Instagram `@surheladocafe` y si su TikTok
      (`@sur.heladocafe`) puede enlazarse.
- [ ] Revisar que las imágenes de Google Maps siguen disponibles y que se permite su reutilización.

## Notas de diseño

Paleta de heladería de barrio (crema `#faf5ec`, verde `#2f5d50` —el color del toldo y del rótulo—,
rosa `#d2607a` y oro `#c9a227`), tipografía `Playfair Display` para titulares y `Karla` para el
texto. Layout responsive con puntos de ruptura en 980 y 640 px, CTA fija en móvil (que abre «Cómo
llegar»), enlace para saltar al contenido y soporte de `prefers-reduced-motion`.