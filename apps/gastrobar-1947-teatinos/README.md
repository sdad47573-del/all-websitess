# Gastrobar 1947. Teatinos · web (Astro)

Web de una sola página (one-page) para **Gastrobar 1947. Teatinos**, cocina argentino-española en
la calle Kandinsky, 8 (Ciudad de la Justicia, Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «gastrobar Teatinos», «cocina argentina Málaga»,
«milanesa Teatinos» o «restaurante Kandinsky 8», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter gastrobar-1947-teatinos dev      # http://localhost:4321
bun run --filter gastrobar-1947-teatinos check    # astro check
bun run --filter gastrobar-1947-teatinos typecheck
bun run --filter gastrobar-1947-teatinos build
bun run --filter gastrobar-1947-teatinos preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://gastrobar-1947-teatinos.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las
etiquetas canonical/OG cuando haya dominio definitivo.**

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
  styles/global.css  # estilos propios (azul noche + oro + rosa), responsive
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Restaurante) | ficha de Google Maps |
| Dirección: C. Kandinsky, 8, Ciudad de la Justicia, 29010 Málaga | Google Maps |
| Teléfono: 665 04 96 60 | Google Maps |
| Coordenadas: 36.7153995, -4.4642127 | URL de Google Maps |
| Place ID: `ChIJ1_Zx_8D3cg0R_xwpJY3oNRk` | ficha de Google Maps |
| Valoración: 4,8 con 524 reseñas | Google Maps |
| Horario: lunes a sábado de 8:00 a 23:30; domingo cerrado | Google Maps |
| Precio: 20–30 € por persona | ficha de Google Maps |
| Terraza o patio exterior, zona de comedor interior, asientos adaptados y acceso para sillas de ruedas | ficha de Google Maps |
| Grupos recomendados de 5 a 8 personas | ficha de Google Maps |
| Opciones vegetarianas: «sí, tiene ensaladas» | ficha de Google Maps |
| Cocina argentino-española, comida casera hecha a diario, terraza junto a un parque infantil | descripción de la ficha del negocio |
| Platos (milanesa, carne en su punto, empanadas, empanadillas, tequeños, ensaladilla rusa, croquetas, bravas) | menciones destacadas en reseñas de Google |
| Críticas puntuales (croquetas frías con mucha bechamel, bravas mejorables, dificultad para aparcar) | reseñas de Google |
| Instagram `@1947gastrobarteatinos` | perfil público del negocio |

## Fotos

Las 16 imágenes de `src/assets/fotos/` se descargaron del perfil público de **Gastrobar 1947 Teatinos
en Google Maps** (galería de la ficha) en la variante de mayor resolución útil para web (máximo
1400 px) y se renombraron con nombres descriptivos. No se han usado imágenes generadas ni
ilustraciones: todas son fotografías reales del establecimiento o de sus platos.

- `gastrobar-1947-teatinos-malaga.jpg` — imagen principal (1400×788), también usada como
  `og:image`.
- `gastrobar-1947-teatinos-malaga-foto-1…15.jpg` — galería (verticales y horizontales).

La web acredita su procedencia en la propia galería y en el pie («Fotografías procedentes del
perfil del restaurante en Google Maps»). **Si el titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset` (480/720/1400 px
según el hueco), `sizes`, `width`/`height` para evitar saltos de maquetación y `loading="lazy"`
salvo la del hero, que va con `fetchpriority="high"` y `preload`. El conversor es `sharp`
(declarado en `devDependencies`). Para cambiar una foto basta con sustituir el archivo en
`src/assets/fotos/`: el `build` regenera las variantes.

Peso medido tras la optimización: **4,6 MB → 762 KB en móvil y 1,26 MB en escritorio** por visita,
contando las imágenes que el navegador descarga a cada ancho (no solo las de la primera pantalla).

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt` y metadatos.
- [ ] Revisar los `alt` y el orden de las fotos: al descargarlas de Google no es posible verificar
      visualmente qué muestra cada una. Los textos alternativos se han redactado de forma
      conservadora y sin afirmar el plato concreto salvo cuando la reseña de origen lo identifica.
- [ ] El nombre del local incluye el punto final («Gastrobar 1947.»). En el título y el H1 se ha
      abreviado a «Gastrobar 1947» para que se lea mejor; se mantiene el nombre oficial en el
      JSON-LD, el pie y el resto de la ficha. Decide cuál usar antes de publicar.
- [ ] Confirmar si el negocio tiene Facebook además de Instagram: en los datos de la ficha solo
      aparece el perfil de Instagram, así que el pie enlaza Maps, reseñas, Instagram y teléfono.
- [ ] Publicar el aviso de aparcamiento: la web recoge la queja de los clientes (aparcamiento
      difícil en la Ciudad de la Justicia, parking a diez minutos andando) porque afecta
      claramente a quien va, pero conviene confirmarlo por si ha cambiado.
- [ ] El horario continuo de 8:00 a 23:30 es poco habitual; conviene confirmarlo por teléfono,
      sobre todo en festivos.
- [ ] No se publica la carta completa con precios: no hay fuente pública fiable.

## Notas de diseño

Paleta propia de gastrobar (azul noche `#1b1a2e`, oro `#e0b25c`, rosa `#c9526b`, violeta
`#6f6aa8`), tipografía `Marcellus` para titulares y `Outfit` para el texto. Layout responsive con
puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil y soporte de
`prefers-reduced-motion`.
