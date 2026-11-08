# Encuentro Cafe-Bar · web (Astro)

Web de una sola página (one-page) para **Encuentro Cafe-Bar**, cafetería y bar de desayunos,
bocadillos y cenas en la calle Margarita Xirgu, 2 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `CafeOrCoffeeShop`/`Bar`/`Restaurant` +
`FAQPage`, contenido en español orientado a búsquedas del tipo «desayuno Teatinos», «pitufo
Málaga», «bocadillos Teatinos», «Encuentro Cafe-Bar», «cafetería 29010 Málaga», «cafetería
Universidad Málaga», «hamburguesas Teatinos», «cena Teatinos» o «café Margarita Xirgu», y galería
con las fotografías de la ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter encuentro-cafe-bar dev      # http://localhost:4321
bun run --filter encuentro-cafe-bar check    # astro check
bun run --filter encuentro-cafe-bar typecheck
bun run --filter encuentro-cafe-bar build
bun run --filter encuentro-cafe-bar preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://encuentro-cafe-bar.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
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
  favicon.svg        # taza de café sobre fondo burdeos
  og.jpg             # 1200×630 para compartir en redes (recorte de la fachada)
  robots.txt
src/
  assets/fotos/      # 9 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, carta, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + burdeos + naranja + oro)
```

## Origen de los datos

| Dato                                                                   | Fuente                              |
| ---------------------------------------------------------------------- | ----------------------------------- |
| Nombre: Encuentro Cafe-Bar                                             | ficha de Google Maps                |
| Dirección: C. Margarita Xirgu, 2, Teatinos-Universidad, 29010 Málaga   | Google Maps                         |
| Teléfono: no publicado en la ficha                                     | Google Maps                         |
| Coordenadas: 36.7217894, -4.4731106                                    | visor de fotos de Google Maps       |
| Plus Code: `PGCG+QQ Málaga`                                            | ficha de Google Maps                |
| CID: `0xd72f700396de10d:0x4945af0a6b5dd116`                            | enlace de Google Maps facilitado    |
| Place ID: `ChIJDeFtOQD3cg0RFtFdawqvRUk`                                | datos del lugar en Google Maps      |
| Valoración: 5,0 sobre 21 reseñas                                       | ficha de Google Maps                |
| Horario: martes a sábado 8:00–24:00; domingo 8:00–16:00; lunes cerrado | ficha de Google Maps                |
| Precio: 1–10 € por persona                                             | ficha de Google Maps                |
| Servicios: «Comer allí» y «Para llevar»                                | ficha de Google Maps                |
| Platos destacados: «Café Helado» y «Bocadillo de Jamón y Queso»        | sección «Carta y platos destacados» |
| Menú de cenas de 20:00 a 23:00                                         | carta fotografiada en la ficha      |
| Terraza con mesas en la acera                                          | foto de fachada de la galería       |
| 18 fotos en la ficha (9 únicas tras deduplicar)                        | ficha de Google Maps                |

### La carta

Aquí **sí se publican precios**, porque la ficha de Google Maps contiene dos fotografías legibles
de la carta real del local: la de desayunos (un PDF) y la de cenas. Se transcribieron y se agruparon
en tres bloques: desayunos con pitufo, mollete o sándwich, más rellenos y menú de cenas. La carta
de desayunos incluye la línea «PITUFO/MOLLETE/SÁNDWICH | VIENA», el extra de 0,50 € y el desayuno
de la casa con tortilla, queso fresco, bacon y tostada por 4,50 €; la de cenas va del campero
clásico de 8,00 € a la hamburguesa especial de 12,50 €.

Los precios se marcan como orientativos y la sección advierte de que la carta cambia con frecuencia.

### Sin teléfono

La ficha no publica ningún número, así que la web **no inventa uno**. En los huecos donde los
componentes exigen un teléfono se usa una etiqueta honesta que enlaza a la ficha: «Google Maps»
en la barra superior, «Ficha en Google Maps» en la sección de visita y «Abrir en Google Maps» en
el pie. El objeto `contact` se omite en el JSON-LD para no emitir un teléfono vacío.

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Encuentro Cafe-Bar en
Google Maps** (variante de 1600 px el lado largo), se revisaron una a una en hojas de contactos y se
seleccionaron **9**.

Se publican: la fachada con la terraza (hero), las dos cartas, tres bocadillos distintos (con
bebida, con papas y uno partido), un bocadillo de pitufo envuelto en papel de plata, las croquetas
con limón y el café con leche.

Las dos cartas se guardan **recortadas a proporción 4/5** (`encuentro-carta-desayunos.jpg` y
`encuentro-carta-cenas.jpg`), la misma que fija el componente `LocalGallery`. En la ficha son páginas
verticales más largas (0,74) y, tal cual, `object-fit: cover` las recortaba por los lados hasta
dejar el texto ilegible. Ajustadas a 4/5 se leen completas: la carta de desayunos incluye la
cabecera «PITUFO/MOLLETE/SÁNDWICH | VIENA», todos los rellenos, el extra de 0,50 € y el desayuno de
la casa; la de cenas, los cinco platos con su precio. Además ocupan la 2.ª y la 3.ª casilla del
grid, no la 1.ª ni la 5.ª, que el componente reserva para celdas de doble altura.

La foto de las croquetas con limón se llama `encuentro-croquetas.jpg`, no «tapas», para que el
nombre del fichero describa lo que se ve.

### Nota de procedencia

Las fotos se han extraído de la galería de la propia ficha, por lo que todas son del establecimiento.
Google sirve cada imagen dos veces en el visor, así que se detectaron y eliminaron **9 duplicados**
comparando huellas perceptivas de miniaturas 16×16 en escala de grises. Se descartaron además las
fotos en las que aparecen manos de clientes, por no querer asociar a nadie a la web. **Si el titular
pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`encuentro-fachada-local.jpg`), que va con `fetchpriority="high"` y `preload`. El conversor es
`sharp` (en `devDependencies`).

`public/og.jpg` (1200×630) es un recorte de la foto de la fachada y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo de
      contacto).
- [ ] **Confirmar los precios con el local**: están transcritos de fotos de la carta que pueden tener
      meses. La web los marca como orientativos, pero conviene revisarlos.
- [ ] Confirmar si el local tiene teléfono, Instagram o web propia: la ficha no publica ninguno y la
      web no los inventa.
- [ ] Confirmar el horario en festivos y si la terraza funciona todo el año según el tiempo.
- [ ] Revisar que las imágenes de Google Maps siguen disponibles y que se permite su reutilización.

## Notas de diseño

Paleta cálida de café de barrio (crema `#fdf7ee`, burdeos `#7a2e2e` —el tono del rótulo de la
fachada—, naranja `#c96c3a` y oro `#e2c063`), tipografías `Fraunces` (titulares) y `Work Sans`
(texto). Layout responsive con puntos de ruptura en 980 y 640 px, enlace para saltar al contenido y
soporte de `prefers-reduced-motion`. Sin CTA de llamada fija en móvil, porque no hay teléfono: el
enlace sustituto abre la ficha de Google Maps.

El eje del contenido es el horario de doble servicio: desayuno desde las 8:00 y cena hasta las
23:00, que es lo que explica el nombre del local.
