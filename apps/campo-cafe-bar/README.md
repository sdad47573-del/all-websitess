# Campo Café-Bar · web (Astro)

Web de una sola página (one-page) para **Campo Café-Bar**, cafetería de desayunos, brunch y
café de especialidad en la calle Orson Welles, 24 (Teatinos-Universidad, 29010 Málaga).

Pensada para SEO local: metadatos geográficos, JSON-LD `CafeOrCoffeeShop` + `FAQPage`, contenido
en español orientado a búsquedas del tipo «cafetería Teatinos», «brunch Málaga», «desayunos
Teatinos», «café de especialidad Málaga» o «cafetería Orson Welles 24», y galería con las
fotografías de la ficha de Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter campo-cafe-bar dev      # http://localhost:4321
bun run --filter campo-cafe-bar check    # astro check
bun run --filter campo-cafe-bar typecheck
bun run --filter campo-cafe-bar build
bun run --filter campo-cafe-bar preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://campo-cafe-bar.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `business.site`
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
  favicon.svg        # taza de café y hoja de matcha
  og.jpg             # 1200×630 para compartir en redes (recorte de la foto de la sala)
  robots.txt
src/
  assets/fotos/      # 14 fotos de Google Maps, importadas por astro:assets
  pages/index.astro  # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
  styles/global.css  # estilos propios (crema + espresso + terracota + matcha)
```

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Cafetería) | ficha de Google Maps |
| Dirección: C. Orson Welles, 24, Teatinos-Universidad, 29010 Málaga | Google Maps |
| Teléfono: 668 57 54 60 | Google Maps |
| Coordenadas: 36.7230668, -4.4628323 | datos del lugar en Google Maps |
| Place ID: `ChIJ_9yhZgD3cg0RGnO5mo1YTUA` | ficha de Google Maps |
| CID: `0xd72f70066a1dcff:0x404d588d9ab9731a` | enlace de Google Maps facilitado |
| Valoración: 4,6 con 103 reseñas | ficha de Google Maps |
| Horario: lunes cerrado; martes a viernes 8:30–13:00 y 17:00–20:00; sábado y domingo 9:30–13:00 | ficha de Google Maps |
| Precios de cafés, batidos e infusiones (expreso 1,30 €, capuchino 3,00 €, matcha 3,00 €…) | carta del local fotografiada en la ficha |
| Bocadillos Campo (veggie, serrano, agridulce) y brunch (incluye bebida, tostada, yogur con fruta y 1 dulce) | pizarra de la terraza fotografiada en la ficha |
| Café de especialidad y matcha, brunch y desayunos | perfil público del local en TikTok (`@campo.cafebar`) |
| Tostadas, alfajores argentinos, tartas y tortitas | reseñas de Google |
| Asientos al aire libre, acceso para sillas de ruedas, se aceptan tarjetas | ficha de Google |

## Fotos

Las imágenes de `src/assets/fotos/` se descargaron de la **galería pública de Campo Café-Bar en
Google Maps** (variante de mayor resolución útil, ~1600 px el lado largo) y se revisaron una a
una.

Se publican **14 fotos** que se corresponden con el local (interior, barra, platos y la carta). Se
**descartaron 3** que no se pudieron verificar como del establecimiento: una era de otro negocio
(«One Cup Coffee») y dos (una fachada y una terraza con gente) no mostraban ninguna seña del
local. Al descargar de Google Maps la página carga también fotos de sitios cercanos, así que
conviene revisar siempre cada imagen antes de publicarla.

La web acredita su procedencia en la propia galería y en el pie («Fotografías procedentes del
perfil del establecimiento en Google Maps»). **Si el titular pide retirarlas, se sustituyen.**

### Optimización

Las fotos no se publican como archivos sueltos: `src/pages/index.astro` las importa y los
componentes las renderizan con `<Image>` de `astro:assets` en AVIF, con `srcset`, `sizes`,
`width`/`height` para evitar saltos de maquetación y `loading="lazy"` salvo la del hero
(`campo-cafe-bar-malaga-foto-13.jpg`, la sala), que va con `fetchpriority="high"` y `preload`. El
conversor es `sharp` (en `devDependencies`). Para cambiar una foto basta con sustituir el archivo
en `src/assets/fotos/`: el `build` regenera las variantes.

`public/og.jpg` (1200×630) es un recorte de la foto de la sala y se usa como `og:image`.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `business.site`
      (`src/pages/index.astro`) y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `src/pages/aviso-legal.astro` (NIF/CIF, razón social y correo
      de contacto). El teléfono y el domicilio ya están puestos.
- [ ] Confirmar los precios de la carta con el local: se han tomado de una foto de la carta
      publicada en la ficha y pueden haber cambiado.
- [ ] Confirmar el horario por festivos y la disponibilidad de terraza según el tiempo.

## Notas de diseño

Paleta propia de cafetería (crema `#f7f1e7`, espresso `#2b1d15`, terracota `#c4693b`, verde matcha
`#7c9a5b`), tipografía `Fraunces` para titulares y `Manrope` para el texto. Layout responsive con
puntos de ruptura en 980 y 640 px, CTA de llamada fija en móvil y soporte de
`prefers-reduced-motion`.
