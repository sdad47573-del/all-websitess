# Merci Nails

Web de **Merci Nails**, salón de uñas en la Plaza del Teatro, 6 (Distrito Centro, 29008
Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `merci` definido en `src/styles/index.css`).
- Datos del negocio, servicios, reseñas y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `packages/@assets/MERCI-NAILS/`, consumidas vía el alias
  `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La portada usa una foto de la ficha como fondo del hero, la manicura como imagen destacada y la
  vista de la plaza en `GALLERY`. Las imágenes se sirven con `srcset`/`sizes` para no enviar más
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

| Ruta           | Contenido                                                                             |
| -------------- | ------------------------------------------------------------------------------------- |
| `/`            | Portada: presentación, el salón, servicios y ventajas, opiniones, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                        |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «salón de uñas en el centro
  de Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large` y `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1600×1200 con `width`/`height`/`alt`, teléfono, dirección,
  código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
  - `NailSalon` (en todas las páginas): dirección, geo, horario, `sameAs` con Instagram y Facebook,
    `areaServed`, `amenityFeature` (incluida la etiqueta «LGBTQ+ friendly» de la ficha) y
    **`aggregateRating`** (4,5 con 105 reseñas).
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

La información procede de la **ficha pública del local en Google Maps** (CID
`10748539950100614304`, Plus Code `PHFH+9J Málaga`) y de sus perfiles públicos de **Instagram**
([@merci.nails_95](https://www.instagram.com/merci.nails_95/)) y **Facebook**
([Merci Nails](https://www.facebook.com/61585921334668/)), que publican el mismo horario
(10:00–21:00) y anuncian que **no hace falta cita previa**.

- Dirección: **Plaza del Teatro, 6, Distrito Centro, 29008 Málaga** (junto al Teatro Cervantes).
- Teléfono: **673 18 79 34**.
- Valoración en Google: **4,5 con 105 reseñas**. Las citas que se muestran son reseñas reales de la
  ficha (traducidas y resumidas); los temas recurrentes se presentan como resumen, no como citas.
- Etiqueta de la ficha: **LGBTQ+ friendly**.
- Horario según Google (marcado con asterisco, lo que suele indicar horario especial): **lunes a
  jueves y sábado de 10:00 a 21:00, viernes a partir de las 12:00 y domingo cerrado**. Sus redes
  publican un horario continuo de 10:00 a 21:00.
- **18 fotos** en la ficha de Google. La galería completa se carga por JavaScript, así que solo se
  han podido recuperar **2 fotos** (1600×1200 y 1199×1163) más una vista de Street View de la plaza.

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
>    (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. Revisa el **horario** y confírmalo con el salón. Si cambia, ajusta el array `hours` y
>    `openingHoursSpecification`.
> 3. Revisa las imágenes y su texto alternativo. Los `alt` describen el salón, la manicura y la
>    plaza; ajústalos si el contenido real es otro. Puedes sumar fotos copiándolas a
>    `packages/@assets/MERCI-NAILS/` y añadiéndolas a `GALLERY`/`IMAGES`.
> 4. La web no publica precios porque el salón no difunde una tarifa; mantén esa decisión o
>    actualízala si empiezan a publicarla.
> 5. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
>    (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
>    dominio cambia, hay que actualizar los tres.
