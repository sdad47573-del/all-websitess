# Rabiosos Cafe Bar · web (Astro)

Web de una sola página (one-page) para **Rabiosos Cafe Bar**, cafetería y bar de bocadillos y
tapas en la calle Frank Capra, 8, local 13 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `CafeOrCoffeeShop`/`Bar`/`Restaurant` +
`FAQPage`, contenido en español orientado a búsquedas del tipo «bocadillos Teatinos», «Rabiosos
Málaga», «cafe bar Teatinos», «cafetería 29010 Málaga», «empanadas argentinas Teatinos»,
«croquetas Málaga», «desayuno Teatinos» o «bar Frank Capra», y galería con las fotografías de la
ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter rabiosos-cafe-bar dev      # http://localhost:4321
bun run --filter rabiosos-cafe-bar check    # astro check
bun run --filter rabiosos-cafe-bar typecheck
bun run --filter rabiosos-cafe-bar build
bun run --filter rabiosos-cafe-bar preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://rabiosos-cafe-bar.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro` cuando haya dominio
definitivo.**

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería y
los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Estructura

```
public/
  favicon.svg        # inicial R sobre fondo vino
  og.jpg             # 1200×630 para compartir en redes (recorte de la terraza)
  robots.txt
src/
  assets/fotos/      # 22 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, carta, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + vino + naranja + mostaza)
```

## Origen de los datos

| Dato                                                                       | Fuente                           |
| -------------------------------------------------------------------------- | -------------------------------- |
| Nombre: Rabiosos Cafe Bar                                                  | ficha de Google Maps             |
| Dirección: C. Frank Capra, 8, local 13, Teatinos-Universidad, 29010 Málaga | Google Maps                      |
| Teléfono: 623 32 27 51                                                     | Google Maps                      |
| Coordenadas: 36.7188074, -4.4605594                                        | visor de fotos de Google Maps    |
| Plus Code: `PG9Q+GQ Málaga`                                                | ficha de Google Maps             |
| CID: `0xd72f734c4ff32d7:0x5ce70543f0fdfb11`                                | enlace de Google Maps facilitado |
| Place ID: `ChIJ1zL_xDT3cg0REfv98EMF51w`                                    | datos del lugar en Google Maps   |
| Valoración: 4,0 sobre 186 reseñas                                          | ficha de Google Maps             |
| Horario: lunes a viernes 7:30–1:00; sábado y domingo cerrado               | ficha de Google Maps             |
| 57+ fotos en la ficha                                                      | ficha de Google Maps             |
| Categoría: Bar, ambiente LGBTQ+                                            | ficha de Google Maps             |
| Más de treinta bocadillos, con precios (1,70 € a 4,50 €)                   | carta fotografiada en la ficha   |
| Tapas y precios (2,50 € a 4,00 €)                                          | carta fotografiada en la ficha   |
| Extras de bocadillo (0,50 € a 0,80 €)                                      | carta fotografiada en la ficha   |
| Empanadas argentinas, croquetas, hamburguesas de carne madurada            | carta y reseñas                  |
| Etiquetas destacadas: desayunos (28), bocadillos (9), carta (8)            | reseñas de Google Maps           |

### La carta

A diferencia de las demás webs del monorepo, aquí **sí se publican precios**, porque la ficha de
Google Maps contiene fotografías legibles de la carta real del local (las páginas de bocadillos y
de tapas). Se transcribieron esas dos páginas y se agruparon en tres bloques: bocadillos, tapas y
empanadas/desayuno/bar. Los precios se marcan como orientativos y la sección advierte de que la
carta cambia con frecuencia.

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Rabiosos Cafe Bar en
Google Maps** (variante de 1600 px el lado largo), se revisaron una a una en hojas de contactos y se
seleccionaron las del local.

Se publican: la terraza (hero) y la fachada, las dos páginas de la carta, las empanadas, las
croquetas con papas, tres fotos de papas y salsas, tres de bocadillos, los huevos rotos, la sopa,
tres de café, la cerveza con croquetas, la barra con la botillería, las mesas del ventanal y dos
del interior.

### Nota de procedencia

Las fotos se han extraído de la galería de la propia ficha, por lo que todas son del establecimiento.
Google sirve cada imagen dos veces en el visor, así que se detectaron y eliminaron **13 duplicados
exactos** comparando huellas perceptivas de miniaturas. **Si el titular pide retirarlas, se
sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`rabiosos-terraza-exterior-frank-capra.jpg`), que va con `fetchpriority="high"` y `preload`. El
conversor es `sharp` (en `devDependencies`).

`public/og.jpg` (1200×630) es un recorte de la foto de la terraza y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo de
      contacto).
- [ ] **Confirmar los precios con el local**: están transcritos de una foto de la carta que puede
      tener meses. La web los marca como orientativos, pero conviene revisarlos.
- [ ] Confirmar el horario en festivos y si la terraza funciona todo el año.
- [ ] Preguntar al local por su perfil de Instagram o web propia: la ficha no tiene ninguno publicado.
- [ ] Revisar que las imágenes de Google Maps siguen disponibles y que se permite su reutilización.

## Notas de diseño

Paleta cálida de bar de barrio (crema `#fdf8ee`, vino `#922f2c` —el color de la cabecera de la
carta—, naranja `#c96c2d` y mostaza `#c69426`), tipografías `Fraunces` (titulares) y `Work Sans`
(texto). Layout responsive con puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil,
enlace para saltar al contenido y soporte de `prefers-reduced-motion`.

El titular del hero juega con la carta real del local: «Más de treinta bocadillos y un bar».
