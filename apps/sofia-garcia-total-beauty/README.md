# Sofía García Total Beauty

Web de **Sofía García Total Beauty**, salón de belleza en la calle Mesonero Romanos, 10
(Teatinos-Universidad, 29010 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `totalbeauty` definido en `src/styles/index.css`).
- Datos del negocio, servicios, reseñas y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `packages/@assets/SOFIA-GARCIA-TOTAL-BEAUTY/`, consumidas
  vía el alias `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los
  indexa.
- La portada usa los esmaltes como fondo del hero, la manicura como imagen destacada y el salón
  en «El salón». La galería (`Galeria.astro`) muestra las cuatro fotos de la ficha. Las imágenes
  se sirven con `srcset`/`sizes` para no enviar más píxeles de los necesarios.

## Scripts

```bash
bun install
bun run dev      # servidor de desarrollo
bun run build    # build estático
bun run check    # astro check
bun run typecheck
```

## Páginas

| Ruta           | Contenido                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `/`            | Portada: presentación, el salón, servicios y ventajas, opiniones, galería, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                                 |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «salón de belleza y
  manicuras en Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large` y
  `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1600×1051 con `width`/`height`/`alt`, teléfono, dirección,
  código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
  - `BeautySalon` (en todas las páginas): dirección, geo, `sameAs` con Instagram, `areaServed`,
    `amenityFeature` y **`aggregateRating`** (5,0 con 11 reseñas).
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
`9133654821259175121`, Plus Code `PGFQ+VF Málaga`) y de su perfil público de **Instagram**
([@totalbeauty_sg](https://www.instagram.com/totalbeauty_sg/)), que publica la misma dirección y el
mismo teléfono y anuncia que las citas son **de lunes a viernes**.

- Dirección: **Calle Mesonero Romanos, 10, Teatinos-Universidad, 29010 Málaga**.
- Teléfono: **613 60 18 91** (también WhatsApp).
- Valoración en Google: **5,0 con 11 reseñas**. Las tres citas que se muestran son reseñas
  reales de la ficha (traducidas y resumidas); los temas recurrentes se presentan como resumen, no
  como citas.
- Servicios publicados: manicuras, diseños de uñas y esmaltados de alta calidad, además de otros
  servicios de belleza que el salón no detalla. La web no inventa un catálogo más amplio porque la
  ficha no especifica cuáles son.
- **16 fotos** en la ficha de Google. La galería completa se carga por JavaScript, así que solo se
  han podido recuperar **3 fotos** (1200×1600, 900×1600 y 1600×1051) más una vista de Street View
  de la calle Mesonero Romanos (1024×576).

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
>    (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. **Google no publica horario para este salón** (la ficha ofrece la opción de «añadir
>    horario»). El array `hours` solo refleja lo que anuncia Instagram («citas de lunes a
>    viernes») y por eso el JSON-LD **no** incluye `openingHoursSpecification`. En cuanto el
>    negocio publique su horario real, añádelo a `hours` **y** a `SCHEMA.openingHoursSpecification`.
> 3. **Los servicios están descritos de forma conservadora.** La ficha solo los menciona en general
>    (las reseñas hablan de manicuras y de que «también hace otros servicios»), así que la web no
>    inventa un catálogo. Si quieres detallar la lista real de tratamientos, edita `SERVICIOS` y
>    `FEATURES`.
> 4. Revisa las imágenes y su texto alternativo. Los `alt` describen la recepción, una manicura
>    morada, los esmaltes y la calle; ajústalos si el contenido real es otro. Puedes sumar fotos
>    copiándolas a `packages/@assets/SOFIA-GARCIA-TOTAL-BEAUTY/` y añadiéndolas a
>    `GALLERY`/`IMAGES`.
> 5. La web no publica precios porque el salón no difunde una tarifa; mantén esa decisión o
>    actualízala si empiezan a publicarla.
> 6. Comprueba que el número de WhatsApp de `BUSINESS.whatsapp` es el correcto antes de publicar.
> 7. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
>    (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
>    dominio cambia, hay que actualizar los tres.
