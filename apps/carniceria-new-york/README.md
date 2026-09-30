# Carnicería New York

Web de **Carnicería New York**, carnicería en la calle Corregidor Francisco de Molina, 16
(Cruz de Humilladero, 29006 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `newyork` definido en `src/styles/index.css`).
- Datos del negocio, surtido, elaborados, reseñas y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `packages/@assets/CARNICERIA-NEW-YORK/`, consumidas vía el
  alias `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La portada usa una foto de la ficha como fondo del hero, el mostrador en «La carnicería» y la
  vista de la calle en `GALLERY`. Las imágenes se sirven con `srcset`/`sizes` para no enviar más
  píxeles de los necesarios.

## Scripts

```bash
bun install
bun run dev      # servidor de desarrollo
bun run build    # build estático
bun run check    # astro check
bun run typecheck
```

## Páginas

| Ruta           | Contenido                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------- |
| `/`            | Portada: presentación, la carnicería, productos, elaborados, opiniones, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                              |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «carnicería en Cruz de
  Humilladero, Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large` y
  `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1600×900 con `width`/`height`/`alt`, teléfono, dirección,
  código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
  - `Store` (en todas las páginas): dirección, geo, horario (mañana y tarde), `sameAs` con
    Instagram y Facebook, `areaServed`, `amenityFeature` y **`aggregateRating`** (4,6 con 98
    reseñas), que aquí sí se puede emitir porque la ficha publica el número de reseñas.
  - `BreadcrumbList` en la portada y en `/aviso-legal`.
  - `FAQPage` en la portada, generado a partir de las mismas preguntas que se muestran.
- **SEO local**: `geo.region`, `geo.placename`, `geo.position` e `ICBM` con las coordenadas.
- **Imágenes**: nombres de archivo descriptivos, `alt` con localidad y `srcset`/`sizes` para el LCP.

### Comprobar el SEO en el build

```bash
bun run build
grep -o 'application/ld+json' dist/index.html | wc -l   # bloques de datos estructurados
grep -o 'srcset' dist/index.html | wc -l                # versiones responsive de las fotos
cat dist/sitemap-0.xml                                  # URLs indexables
```

## Contenido y fuentes

La información procede de la **ficha pública del local en Google Maps** y de sus perfiles públicos
de **Instagram** ([@carniceria_new_york](https://www.instagram.com/carniceria_new_york/)) y
**Facebook** ([carnicerianewyork](https://www.facebook.com/carnicerianewyork/)), que publican la
misma dirección y el mismo teléfono y anuncian ofertas semanales con precio.

- Dirección: **Calle Corregidor Francisco de Molina, 16, Cruz de Humilladero, 29006 Málaga**
  (barriada de Los Corazones).
- Teléfono: **654 77 17 11**.
- Valoración en Google: **4,6 con 98 reseñas**. Las citas que se muestran son reseñas reales de la
  ficha (traducidas y resumidas); los temas recurrentes se presentan como resumen, no como citas.
- Horario publicado: **lunes a viernes de 9:00 a 14:30 y de 17:30 a 20:30; sábado y domingo
  cerrado** (Google lo marca con asterisco, lo que suele indicar horario especial).
- **26 fotos** en la ficha de Google. La galería completa se carga por JavaScript, así que solo se
  han podido recuperar **2 fotos** (ambas de 1600×900 y 960×540) más una vista de Street View de la
  calle.

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
>    (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. Revisa el **horario** (9:00–14:30 y 17:30–20:30 de lunes a viernes) y confírmalo con el local.
>    Si cambia, ajusta el array `hours` y `openingHoursSpecification`.
> 3. Revisa las imágenes y su texto alternativo. Los `alt` describen la carnicería, el mostrador y
>    la calle; ajústalos si el contenido real es otro. Puedes sumar fotos copiándolas a
>    `packages/@assets/CARNICERIA-NEW-YORK/` y añadiéndolas a `GALLERY`/`IMAGES`.
> 4. La web menciona «ofertas semanales» en Instagram y Facebook; mantén esos enlaces al día o
>    retira la mención si dejan de publicarlas.
> 5. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
>    (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
>    dominio cambia, hay que actualizar los tres.
