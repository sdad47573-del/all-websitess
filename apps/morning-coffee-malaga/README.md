# Morning Coffee · web (Astro)

Web de una sola página (one-page) para **Morning Coffee**, cafetería de desayuno en la avenida de
Carlos Haya, 198 (Bailén-Miraflores, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `CafeOrCoffeeShop`/`Bakery` + `FAQPage`,
contenido en español orientado a búsquedas del tipo «cafetería Bailén-Miraflores», «Morning Coffee
Málaga», «café Carlos Haya», «desayuno Málaga», «croissant de pistacho Málaga», «tostas Bailén» o
«wafles Málaga», y galería con las fotografías de la ficha de Google Maps del local.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter morning-coffee-malaga dev      # http://localhost:4321
bun run --filter morning-coffee-malaga check    # astro check
bun run --filter morning-coffee-malaga typecheck
bun run --filter morning-coffee-malaga build
bun run --filter morning-coffee-malaga preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://morning-coffee-malaga.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en
`business.site` de `src/pages/index.astro` y en el canonical de `src/pages/aviso-legal.astro` cuando
haya dominio definitivo.**

## Componentes

La página se compone con los componentes compartidos de `@astro-components` (`LocalSeo`,
`LocalTopbar`, `LocalHero`, `LocalChips`, `LocalAbout`, `LocalMenu`, `LocalGallery`, `LocalVisit`,
`LocalFaq` y `LocalFooter`). Todos reciben el contenido por props: el texto, la carta, la galería y
los datos del negocio viven en `src/pages/index.astro`, que es lo único que hay que editar al
actualizar información del local.

## Estructura

```
public/
  favicon.svg        # taza con vapor sobre fondo verde espresso
  og.jpg             # 1200×630 para compartir en redes (recorte de la terraza)
  robots.txt
src/
  assets/fotos/      # 18 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + verde espresso + naranja + oro)
```

## Origen de los datos

| Dato                                                                | Fuente                           |
| ------------------------------------------------------------------- | -------------------------------- |
| Nombre: Morning Coffee                                              | ficha de Google Maps             |
| Dirección: Av. de Carlos Haya, 198, Bailén-Miraflores, 29010 Málaga | Google Maps                      |
| Teléfono: 685 01 41 27                                              | Google Maps                      |
| Coordenadas: 36.7249507, -4.4572812                                 | visor de fotos de Google Maps    |
| Plus Code: `PGGV+25 Málaga`                                         | ficha de Google Maps             |
| CID: `0xd72f71717db3df3:0x82c39cb9a1933fe6`                         | enlace de Google Maps facilitado |
| Place ID: `ChIJ8z3bFxf3cg0R5j-Tobmcw4I`                             | datos del lugar en Google Maps   |
| Valoración: 4,9 sobre 49 reseñas                                    | ficha de Google Maps             |
| Horario: lunes a viernes 8:00–14:00; sábado y domingo 8:30–14:00    | ficha de Google Maps             |
| 52 fotos en la ficha                                                | ficha de Google Maps             |
| Categoría: Cafetería, ambiente LGBTQ+ friendly                      | ficha de Google Maps             |
| Rango de precio: 1–10 € por persona                                 | ficha de Google Maps             |
| Servicio: comer en el local, autoservicio y entrega sin contacto    | ficha de Google Maps             |
| Croissant de pistacho como especialidad                             | reseñas de Google Maps           |
| Tostas de la casa, wafles, batidos, café de especialidad            | fotos y reseñas de la ficha      |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Morning Coffee en
Google Maps** (variante de 1600 px el lado largo), se revisaron una a una en hojas de contactos y se
seleccionaron las del local.

Se publican: la terraza con café y tostada (hero), la máquina de espresso con el logotipo del local,
la carta sobre la mesa, el croissant de pistacho, dos de croissant de chocolate, el croissant con
batido, tres de tostadas (fresa, chocolate y con huevos), los wafles, dos de smoothies, el frappé y
el café con leche, el jamón y las cervezas.

### Nota de procedencia

Las fotos se han extraído de la galería de la propia ficha, por lo que todas son del establecimiento.
Google sirve cada imagen dos veces en el visor, así que se detectaron y eliminaron **14 duplicados
exactos** comparando huellas perceptivas de miniaturas. **Si el titular pide retirarlas, se
sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes los renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`morning-terraza-cafe-tostada.jpg`), que va con `fetchpriority="high"` y `preload`. El conversor es
`sharp` (en `devDependencies`).

`public/og.jpg` (1200×630) es un recorte de la foto de la terraza y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo de
      contacto).
- [ ] Confirmar la carta y los precios: en esta web **no se publican precios concretos** porque la
      ficha solo da un rango de 1 a 10 € por persona.
- [ ] Confirmar el horario en festivos.
- [ ] Preguntar al local por su perfil de Instagram o web propia: la ficha no tiene ninguno
      publicado, así que no se enlaza.
- [ ] Revisar que las imágenes de Google Maps siguen disponibles y que se permite su reutilización.

## Notas de diseño

Paleta de desayuno (crema `#fdf8f1`, verde espresso `#115e59` —el color de la máquina—, naranja
`#e07a3a` del zumo y oro `#e0c078` de la croissant), tipografías `Fraunces` (titulares) y `Work Sans`
(texto). Layout responsive con puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil,
enlace para saltar al contenido y soporte de `prefers-reduced-motion`.

El local cierra a las dos de la tarde, así que toda la narrativa de la web está enfocada a la
mañana: «Tu mañana empieza aquí, con calma» y «De las ocho a las dos, sin prisa».
