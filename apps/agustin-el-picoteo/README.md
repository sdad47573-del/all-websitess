# Agustín El Picoteo · web (Astro)

Web de una sola página (one-page) para **Agustín El Picoteo**, cocina española de picoteo en la
calle María de la Cruz, 3 (Colonia Santa Inés, Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «picoteo Teatinos», «cocina española María de la Cruz»,
«tapas Colonia Santa Inés» o «cena en Teatinos», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter agustin-el-picoteo dev      # http://localhost:4321
bun run --filter agustin-el-picoteo check    # astro check
bun run --filter agustin-el-picoteo typecheck
bun run --filter agustin-el-picoteo build
bun run --filter agustin-el-picoteo preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y
el plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://agustin-el-picoteo.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las
etiquetas canonical/OG cuando haya dominio definitivo.**

> Nota: el fallo de `bun run build` con `zod.function(...).optional is not a function` que
> arrastraba a todo el monorepo está corregido en el `package.json` de la raíz
> (`resolutions` fija `@astrojs/sitemap` en `3.6.0`, compatible con `zod@^3`).

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`,
`LocalVisit`, `LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la
carta, la galería y los datos del negocio siguen viviendo en `src/pages/index.astro`, que es lo
único que hay que editar al actualizar información del local.

## Estructura

```
public/
  favicon.svg
  robots.txt
src/
  assets/fotos/      # 16 fotos de Google Maps, importadas por astro:assets (no se publican tal cual)
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  styles/global.css  # estilos propios (oliva + arena + arcilla), responsive
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categorías (Restaurante, mediterráneo, cocina española) | ficha de Google Maps |
| Dirección: C. María de la Cruz, 3, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 951 93 04 52 | Google Maps |
| Plus Code: PGGJ+FC Málaga | Google Maps |
| Coordenadas: 36.7261752, -4.4689631 | URL de Google Maps |
| Place ID: `ChIJA8XcGTr3cg0Rdvs6IX8y0dc` | ficha de Google Maps |
| Valoración: 4,6 con 1.682 reseñas | Google Maps |
| Horario: comida 13:00–16:30 lunes, miércoles y domingo; cena 20:30–23:30 jueves a sábado; martes cerrado | Google Maps |
| Platos (prensaíto, jamón de bellota, solomillo madurado con Pedro Ximénez, revuelto de langostino y puerro, aguacate con langostinos, fabes con almejas, bacalao al guiso, cangrejo al vodka, paté con patata, ensalada rusa, huevos de codorniz) | menciones destacadas en reseñas de Google y ficha agregada |
| Postres (profiteroles, postre mixto de chocolates/milhojas/chantillies, mermelada, buñuelos) | reseñas de Google y ficha agregada |
| Precio: 15–30 € por persona | reseñas de Google (15 € en ficha de 2018, 20–30 € en reseñas actuales) |
| Cocina «rica de interior», alejada del pescaíto frito | reseña de Google |
| Copa de licor de cortesía al sentarse y café de especialidad | reseña de Google |
| Vino a temperatura, Rioja/Ribera a precio contenido | reseña de Google |
| Mesas altas con tabureto, dos mesas bajas, entrada trasera accesible, barra | ficha agregada (RestaurantGuru) |
| Para llevar, tarjetas aceptadas, sin reparto a domicilio, opciones vegetarianas | ficha agregada (RestaurantGuru) |
| Instagram `@agustinelpicoteo` | perfil público del negocio |

## Fotos

Las 16 imágenes de `src/assets/fotos/` se descargaron del perfil público de **Agustín El Picoteo en
Google Maps** (galería de la ficha) en la variante de mayor resolución útil para web (máximo
1400 px) y se renombraron con nombres descriptivos. No se han usado imágenes generadas ni
ilustraciones: todas son fotografías reales del establecimiento o de sus platos.

- `agustin-el-picoteo-malaga.jpg` — imagen principal (1400×1386), también usada como `og:image`.
- `agustin-el-picoteo-malaga-foto-1…15.jpg` — galería (verticales).

La web acredita su procedencia en la propia galería y en el pie («Fotografías procedentes del
perfil del restaurante en Google Maps»). **Si el titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset` (480/720/1400 px
según el hueco), `sizes`, `width`/`height` para evitar saltos de maquetación y `loading="lazy"`
salvo la del hero, que va con `fetchpriority="high"` y `preload`. El conversor es `sharp`
(declarado en `devDependencies`). Para cambiar una foto basta con sustituir el archivo en
`src/assets/fotos/`: el `build` regenera las variantes.

Peso medido tras la optimización: **3,8 MB → 660 KB en móvil y 1,07 MB en escritorio** por visita,
contando las imágenes que el navegador descarga a cada ancho (no solo las de la primera pantalla).

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt` y metadatos.
- [ ] Revisar los `alt` y el orden de las fotos: al descargarlas de Google no es posible verificar
      visualmente qué muestra cada una. Los textos alternativos se han redactado de forma
      conservadora y sin afirmar el plato concreto salvo cuando la reseña de origen lo identifica.
- [ ] Confirmar la cuenta de Instagram: se enlaza `@agustinelpicoteo` (aparece junto al teléfono
      y la dirección del local). La ficha agregada también menciona una página de Facebook, pero
      no se ha podido verificar la URL exacta, así que no se enlaza.
- [ ] El negocio no tiene web propia (la ficha muestra «Añadir sitio web»). Conviene crear
      además la ficha de Google Business Profile y enlazar la web desde ella para que valide el
      sitio.
- [ ] Confirmar el horario de cena: según la ficha actual, la cena (20:30–23:30) solo se sirve
      de jueves a sábado, y el domingo y el miércoles solo hay comida. Publicado tal cual.
- [ ] No se publica la carta completa con precios: el producto de temporada y las referencias de
      la bodega varían, y no hay fuente pública fiable de la carta actual.

## Notas de diseño

Paleta propia de cocina española (oliva `#1d1f16`, hoja `#8a9a5b`, arcilla `#c96f3f`, arena
`#f3ecdd`), tipografía `Fraunces` para titulares y `Work Sans` para el texto. Layout responsive
con puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil y soporte de
`prefers-reduced-motion`.
