# Carnicería José Luis

Web de **Carnicería José Luis**, carnicería en la calle Martínez de la Rosa, 177
(Bailén-Miraflores, 29010 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `joseluis` definido en `src/styles/index.css`).
- Datos del negocio, surtido, servicios y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `packages/@assets/CARNICERIA-JOSE-LUIS/`, consumidas vía el
  alias `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La portada usa la vista de la calle como fondo del hero y la foto de la ficha en la sección «La
  carnicería»; las imágenes se sirven con `srcset`/`sizes` para no enviar más píxeles de los
  necesarios.

## Scripts

```bash
bun install
bun run dev      # servidor de desarrollo
bun run build    # build estático
bun run check    # astro check
bun run typecheck
```

## Páginas

| Ruta           | Contenido                                                                          |
| -------------- | ---------------------------------------------------------------------------------- |
| `/`            | Portada: presentación, la carnicería, productos, encargos, cómo llegar y preguntas |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                     |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «carnicería en
  Bailén-Miraflores, Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large` y
  `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1024×576 con `width`/`height`/`alt`, teléfono, dirección,
  código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
  - `Store` (en todas las páginas): dirección, geo, horario, `sameAs`, `areaServed` y
    `amenityFeature` con los servicios del local.
  - `BreadcrumbList` en la portada y en `/aviso-legal`.
  - `FAQPage` en la portada, generado a partir de las mismas preguntas que se muestran.
  - **No se emite `aggregateRating`**: la ficha de Google muestra la valoración (4,8) pero no el
    número de reseñas, y Google exige `ratingCount`/`reviewCount` para aceptarla. Si se confirma el
    número de reseñas, se puede añadir en `SCHEMA` (`src/data/site.ts`).
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

La información procede de la **ficha pública del local en Google Maps** (dirección, teléfono,
valoración 4,8, categoría «carnicería», Plus Code y horario) y se ha contrastado con directorios
locales (Cylex, Páginas Amarillas, Vulka, Buscalis) que publican la misma dirección y el mismo
teléfono.

- Dirección: **Calle Martínez de la Rosa, 177, Bailén-Miraflores, 29010 Málaga**.
- Teléfono: **952 39 18 59**.
- Valoración en Google: **4,8** (la ficha no muestra el número de reseñas ni tiene reseñas de
  texto, por eso **no se inventan opiniones** y no se emite `aggregateRating`).
- La ficha de Google está **sin reclamar** y solo publica el horario del miércoles (9:00–14:00).
- Imágenes obtenidas de Google Maps: 1 foto de la ficha (vertical, 899×1599) y una vista de la
  calle Martínez de la Rosa (1024×576).

> ⚠️ **Antes de publicar**:
>
> 1. **Reclama la ficha de Google** del negocio y actualiza el horario completo; hoy la web muestra
>    un horario orientativo de mañanas (9:00–14:00). Cuando lo confirmes, ajusta el array `hours` y
>    `openingHoursSpecification` en `src/data/site.ts`.
> 2. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
>    (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 3. Revisa las dos imágenes y su texto alternativo. Los `alt` describen la carnicería y la calle
>    donde está; ajústalos si el contenido real es otro. Puedes sumar fotos copiándolas a
>    `packages/@assets/CARNICERIA-JOSE-LUIS/` y añadiéndolas a `GALLERY`/`IMAGES`.
> 4. Si el negocio tiene Instagram u otra red, añádela al objeto `BUSINESS` y al array `sameAs` de
>    `SCHEMA`.
> 5. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
>    (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
>    dominio cambia, hay que actualizar los tres.
