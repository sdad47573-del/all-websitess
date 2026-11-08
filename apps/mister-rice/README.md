# Mister Rice · web (Astro)

Web de una sola página (one-page) para **Restaurante Mister Rice**, restaurante chino en la
avenida de Lope de Vega, 19 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante chino Teatinos», «comida china Lope de
Vega», «comida para llevar Teatinos» o «cena china en Málaga», y galería con las fotografías de la
ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter mister-rice dev      # http://localhost:4321
bun run --filter mister-rice check    # astro check
bun run --filter mister-rice typecheck
bun run --filter mister-rice build
bun run --filter mister-rice preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y
el plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://mister-rice.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las etiquetas
canonical/OG cuando haya dominio definitivo.**

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
  styles/global.css  # estilos propios (tinta china + oro + marfil), responsive
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Restaurante chino) | ficha de Google Maps |
| Dirección: Av. de Lope de Vega, 19, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 673 79 17 37 | Google Maps |
| Plus Code: PGJJ+4P Málaga | Google Maps |
| Coordenadas: 36.730282, -4.4682278 | URL de Google Maps |
| Place ID: `ChIJsx_u0xH3cg0RH_O2vfh4dbA` | ficha de Google Maps |
| Valoración: 4,1 con 187 reseñas | Google Maps |
| Horario: lun y mié–dom 13:00–16:15 y 20:00–23:30; martes solo 13:00–16:15 | Google Maps |
| Comida para llevar, reparto a domicilio, aire acondicionado, menú del día | ficha del negocio |
| Aparcamiento gratuito en la zona («muchas plazas libres») | ficha del negocio |
| Opciones vegetarianas: «tofu y verduras salteadas, entre otros muchos platos» | ficha del negocio |
| Descripción del negocio («Málaga especializado en comida china…») | ficha del negocio |
| Platos (arroz tres delicias, tallarines tres delicias, pollo al limón, pollo con almendras, ternera con bambú y setas chinas, pollo agridulce, ternera en salsa de ostras, familia feliz, tofu salteado, rollitos de primavera, ensalada china, flan) | menciones destacadas en reseñas de Google |
| Menú del día: 11 € (3 platos, bebida y postre) y 12 € (4 platos, bebida y postre) | reseñas de Google |
| Pan de gamba de cortesía al sentarse | reseñas de Google |
| Servicio demasiado rápido / platos seguidos, aire acondicionado que no llega a toda la sala | reseñas de Google (críticas) |
| Pollo al limón demasiado amargo y precio alto según un cliente | reseña de Google de 2022 |

## Fotos

Las 16 imágenes de `src/assets/fotos/` se descargaron del perfil público de **Restaurante Mister
Rice en Google Maps** (galería de la ficha) en la variante de mayor resolución útil para web
(máximo 1400 px) y se renombraron con nombres descriptivos. No se han usado imágenes generadas
ni ilustraciones: todas son fotografías reales del establecimiento o de sus platos.

- `mister-rice-malaga.jpg` — imagen principal (1170×814), también usada como `og:image`.
- `mister-rice-malaga-foto-1…15.jpg` — galería (verticales, horizontales y cuadradas).

La web acredita su procedencia en la propia galería y en el pie («Fotografías procedentes del
perfil del restaurante en Google Maps»). **Si el titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset` (480/720/1400 px
según el hueco), `sizes`, `width`/`height` para evitar saltos de maquetación y `loading="lazy"`
salvo la del hero, que va con `fetchpriority="high"` y `preload`. El conversor es `sharp`
(declarado en `devDependencies`). Para cambiar una foto basta con sustituir el archivo en
`src/assets/fotos/`: el `build` regenera las variantes.

Peso medido tras la optimización: **4,3 MB → 484 KB en móvil y 793 KB en escritorio** por visita,
contando las imágenes que el navegador descarga a cada ancho (no solo las de la primera pantalla).

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt` y metadatos.
- [ ] Revisar los `alt` y el orden de las fotos: al descargarlas de Google no es posible verificar
      visualmente qué muestra cada una. Los textos alternativos se han redactado de forma
      conservadora y sin afirmar el plato concreto.
- [ ] Confirmar el menú del día y los precios: los 11 € y 12 € provienen de una reseña de Google y
      pueden haber cambiado. En la web se presentan como referencia, no como carta oficial.
- [ ] Confirmar si sigue abierto el martes por la noche: la ficha de Google indica que solo sirve
      comida ese día. Publicado tal cual, con la aclaración correspondiente.
- [ ] El negocio no tiene web propia (la ficha muestra «Añadir sitio web») ni redes sociales
      verificadas con datos de contacto. Los enlaces del pie apuntan a Google Maps y a las reseñas.
- [ ] No se publica una carta completa con precios cerrados: no hay fuente pública fiable y los
      precios cambian.

## Notas de diseño

Paleta propia de cocina china (tinta `#1a1014`, rojo `#c1272d`, oro `#e0a52e`, marfil `#f7f1e6`),
tipografía `Cormorant Garamond` para titulares y `Manrope` para el texto. Layout responsive con
puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil y soporte de
`prefers-reduced-motion`.
