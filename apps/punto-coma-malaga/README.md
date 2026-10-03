# Punto & Coma · web (Astro)

Web de una sola página (one-page) para **Punto & Coma**, café y tapas en la calle Dr. Miguel Díaz
Recio, 32 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `CafeOrCoffeeShop`/`Bar`/`Bakery` +
`FAQPage`, contenido en español orientado a búsquedas del tipo «café Teatinos», «Punto & Coma
Málaga», «pitufos Teatinos», «pitufo Málaga», «desayuno Teatinos», «churros Teatinos» o «bar
Teatinos», y galería con las fotografías de la ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter punto-coma-malaga dev      # http://localhost:4321
bun run --filter punto-coma-malaga check    # astro check
bun run --filter punto-coma-malaga typecheck
bun run --filter punto-coma-malaga build
bun run --filter punto-coma-malaga preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://punto-coma-malaga.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro` cuando haya dominio
definitivo.**

## El local no tiene teléfono

Ni la ficha de Google Maps ni el propio ticket de caja del local (con el campo «TELEFONO» en
blanco) publican ningún número. Como los componentes compartidos asumen que siempre hay teléfono,
aquí los enlaces de contacto apuntan a la ficha de Google Maps: el botón del topbar y el CTA móvil
dicen «Google Maps», y el bloque de contacto dice «Ficha en Google Maps». Si el local publica un
número, basta con rellenar `business.phone` en `index.astro` y pasarlo a los componentes.

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería y
los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Estructura

```
public/
  favicon.svg        # punto y coma sobre fondo verde botella
  og.jpg             # 1200×630 para compartir en redes (recorte de la terraza)
  robots.txt
src/
  assets/fotos/      # 14 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, carta, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + verde botella + naranja + oro)
```

## Origen de los datos

| Dato                                                                        | Fuente                                                            |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Nombre: Punto & Coma, café y tapas                                          | rótulo del local y ficha de Google Maps                           |
| Dirección: C. Dr. Miguel Díaz Recio, 32, Teatinos-Universidad, 29010 Málaga | Google Maps                                                       |
| Teléfono                                                                    | **no publicado** (tampoco en el ticket del local)                 |
| NIF: X5394121T                                                              | ticket de caja del local, fotografiado en su ficha de Google Maps |
| Coordenadas: 36.7249, -4.4739                                               | Plus Code `PGCP+P3 Málaga`                                        |
| CID: `0xd72f7c4a9ee4a0f:0x6d1d129c57bc3162`                                 | enlace de Google Maps facilitado                                  |
| Place ID: `ChIJD0ruqcT3cg0RYjG8V5wSHW0`                                     | datos del lugar en Google Maps                                    |
| Valoración: 3,8 sobre 71 reseñas                                            | ficha de Google Maps                                              |
| Horario: lunes a viernes 7:00–16:00; sábado 7:00–12:30; domingo cerrado     | ficha de Google Maps                                              |
| 16 fotos en la ficha                                                        | ficha de Google Maps                                              |
| Carta de bebidas completa con precios                                       | carta fotografiada en la ficha de Google Maps                     |
| Bacon mollete 4,70 €; extra queso 0,50 €; extra tomate 0,30 €               | ticket de caja del local                                          |
| Rango de precio: 1–10 € por persona                                         | ficha de Google Maps                                              |

## La carta

La ficha de Google Maps contiene una **foto de la carta de bebidas completa y legible**, con todas
las categorías y sus precios: cafés e infusiones (de 1,30 € el vaso de leche a 3,20 € el
capuccino), bebidas frías (zumo natural 2,50 €), cócteles combinados (6,50 € y 7,00 €), licores,
vinos por copa (3,50 €) y cervezas (caña 2,00 €, Mahou o Radler en botella 2,50 €). El extra de
shot de café cuesta 0,20 €.

Se transcribió y se agrupó en tres bloques junto con el desayuno, cuyos precios salen del ticket de
caja del propio local. Los precios se marcan como orientativos, con advertencia de que pueden haber
cambiado desde la foto.

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Punto & Coma en Google
Maps** (variante de 1600 px el lado largo), se revisaron una a una en hojas de contactos y se
seleccionaron las del local.

Se publican: la fachada con terraza (hero) y dos más del exterior, la carta de bebidas, los pitufos
bajo campana de cristal, el pitufo con zumo, el bocadillo de jamón y queso, los churros con café,
los huevos rotos con bacon, tres de café, el desayuno en la terraza y tres de la barra con las
tazas alineadas.

### Nota de procedencia

Las fotos se han extraído de la galería de la propia ficha, por lo que todas son del establecimiento.
Google sirve cada imagen dos veces en el visor, así que se detectaron y eliminaron **13 duplicados
exactos** comparando huellas perceptivas de miniaturas.

**Una foto se descartó a propósito**: el ticket de caja que aparece en la ficha. Se usó para leer la
NIF y los precios del desayuno, pero no se publica porque incluye el nombre del cajero que atendió en
esa visita. **Si el titular pide retirar alguna imagen, se sustituye.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes los renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`punto-coma-fachada-terraza.jpg`), que va con `fetchpriority="high"` y `preload`.

`public/og.jpg` (1200×630) es un recorte de la foto de la terraza y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar en `src/pages/aviso-legal.astro` la **razón social y el correo de contacto**. La NIF
      (X5394121T) y el domicilio ya están.
- [ ] **Confirmar los precios con el local**: salen de una foto de la carta y de un ticket que pueden
      tener meses. La web los marca como orientativos.
- [ ] Confirmar el horario en festivos.
- [ ] Preguntar al local si tiene teléfono: no publica ninguno y sería el dato más útil para los
      clientes.
- [ ] Revisar que las imágenes de Google Maps siguen disponibles y que se permite su reutilización.

## Notas de diseño

Paleta de café de barrio (crema `#fbf8f0`, verde botella `#1e4a3c` —el color del rótulo del local—,
naranja `#c97a3a` del zumo y oro `#c6a03c` del café), tipografías `Fraunces` (titulares) y `Work Sans`
(texto). Layout responsive con puntos de ruptura en 980 y 640 px, enlace para saltar al contenido y
soporte de `prefers-reduced-motion`.

El titular juega con el nombre del local: «Tu punto y coma en Teatinos». La marca del topbar es «P&C»
porque el componente reserva un solo carácter.
