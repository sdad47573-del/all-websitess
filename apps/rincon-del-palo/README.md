# Rincón del Palo · web (Astro)

Web de una sola página (one-page) para **Rincón del Palo**, marisquería y fritura malagueña en la
calle Pirandello, 8, local 2 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «marisquería Teatinos», «pescaíto frito Málaga»,
«restaurante Pirandello 8» o «comer en Teatinos», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter rincon-del-palo dev      # http://localhost:4321
bun run --filter rincon-del-palo check    # astro check
bun run --filter rincon-del-palo typecheck
bun run --filter rincon-del-palo build
bun run --filter rincon-del-palo preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y
el plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://rincon-del-palo.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las
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
  assets/fotos/      # 11 fotos de Google Maps, importadas por astro:assets (no se publican tal cual)
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  styles/global.css  # estilos propios (azul mar + turquesa + ámbar), responsive
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Marisquería) | ficha de Google Maps |
| Dirección: C/ Pirandello, 8, local 2, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 744 61 83 69 | Google Maps y perfiles públicos del negocio |
| Plus Code: PG8Q+X4 Málaga | Google Maps |
| Coordenadas: 36.7174276, -4.4622472 | URL de Google Maps |
| Place ID: `ChIJhQlZ_kD3cg0Rw5SktBR3CMU` | ficha de Google Maps |
| Valoración: 4,5 con 644 reseñas | Google Maps (agregado por RestaurantGuru) |
| Precio: 10–30 € por persona | reseñas de Google citadas en RestaurantGuru |
| Horario: mié–dom 11:00–16:00 y 20:00–23:00; lunes y martes cerrado | ficha de Google Maps |
| Horario real de atención: 13:00–16:00 y 20:15–23:00 | publicaciones del propio local en Google Maps |
| Terraza con toldos y estufas, local climatizado, para llevar y a domicilio | ficha y perfiles del negocio |
| Accesible para sillas de ruedas, asientos al aire libre | ficha agregada (RestaurantGuru) |
| Platos (pulpo frito y a la gallega, almejas, conchas finas, gambas, buchones de rosada, peregrinas, berenjenas, sardinas a la plancha, cañaíllas) | menciones destacadas en reseñas de Google + ficha del negocio |
| Instagram `@rincondelpalo`, Facebook `marisqueriafreiduria` | perfiles públicos del negocio |

## FotosLas 11 imágenes de `src/assets/fotos/` se descargaron del perfil público de **Rincón del Palo en
Google Maps** (galería de la ficha y fotografías de las publicaciones del negocio) en la variante
de mayor resolución útil para web y se renombraron con nombres descriptivos. No se han usado
imágenes generadas ni ilustraciones: todas son fotografías reales del establecimiento o de sus
platos.

- `rincon-del-palo-malaga.jpg` — imagen principal (906×1132), también usada como `og:image`.
- `rincon-del-palo-malaga-foto-1…10` — galería (verticales, cuadradas y panorámicas).

La web acredita su procedencia en la propia galería y en el pie («Fotografías procedentes del
perfil del restaurante en Google Maps»). **Si el titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset` (480/720/1400 px
según el hueco), `sizes`, `width`/`height` para evitar saltos de maquetación y `loading="lazy"`
salvo la del hero, que va con `fetchpriority="high"` y `preload`. El conversor es `sharp`
(declarado en `devDependencies`). Para cambiar una foto basta con sustituir el archivo en
`src/assets/fotos/`: el `build` regenera las variantes.

Peso medido tras la optimización: **5,2 MB → 693 KB en móvil y 1,07 MB en escritorio** por visita,
contando las imágenes que el navegador descarga a cada ancho (no solo las de la primera pantalla).

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt` y metadatos.
- [ ] Revisar los `alt` y el orden de las fotos: al descargarlas de Google no es posible verificar
      visualmente qué muestra cada una. Los textos alternativos se han redactado de forma
      conservadora y sin afirmar el plato concreto salvo cuando la publicación de origen sí lo
      identifica (sardinas a la plancha).
- [ ] Confirmar el horario por teléfono: la ficha de Google muestra 11:00–16:00 y 20:00–23:00,
      mientras que las publicaciones del negocio indican 13:00–16:00 y 20:15–23:00 como servicio
      real al público. En la web se publican ambos con la aclaración correspondiente.
- [ ] Confirmar el estado de las reservas: el negocio publicó en Google que, de forma temporal,
      no atendía llamadas ni gestionaba reservas y asignaba mesas por orden de llegada. La web lo
      menciona como aviso, no como norma vigente.
- [ ] Verificar la cuenta de Instagram: se enlaza `@rincondelpalo` (aparece junto al teléfono y
      la dirección del local). Ficha agregada menciona otra cuenta, `@marisqueria_freiduria`.
- [ ] Buscar/crear la ficha de Google del negocio para que valide la web (Google Business Profile)
      y rellenar las categorías y atributos que falten.
- [ ] No se publican precios cerrados de la carta: el precio del marisco cambia con la pesca del
      día.

## Notas de diseño

Paleta propia de marisquería (azul profundo `#08222a`, turquesa `#2fa9bd`, ámbar `#e8b64a`, coral
`#e2703f`), tipografía `Bricolage Grotesque` para titulares y `Figtree` para el texto. Layout
responsive con puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil y soporte de
`prefers-reduced-motion`.
