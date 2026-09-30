# A-Style Beauty Salón

Web de **A-Style Beauty Salón**, salón de belleza en la Avenida de Carlos Haya, 72
(Cruz de Humilladero, 29010 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `astyle` definido en `src/styles/index.css`, con
  negro, marfil y dorado inspired en el rótulo del local).
- Datos del negocio, servicios y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `packages/@assets/A-STYLE-BEAUTY-SALON/`, consumidas vía el
  alias `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La portada usa la fachada como fondo del hero y el tratamiento de cejas como imagen destacada;
  `Galeria.astro` muestra las tres fotos de la ficha. Las imágenes se sirven con `srcset`/`sizes`
  para no enviar más píxeles de los necesarios.

## Scripts

```bash
bun install
bun run dev      # servidor de desarrollo
bun run build    # build estático
bun run check    # astro check
bun run typecheck
```

## Páginas

| Ruta           | Contenido                                                                            |
| -------------- | ------------------------------------------------------------------------------------ |
| `/`            | Portada: presentación, el salón, servicios y ventajas, el local, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                       |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «salón de belleza en
  Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large` y `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1600×1200 con `width`/`height`/`alt`, teléfono, dirección,
  código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
  - `BeautySalon` (en todas las páginas): dirección, geo, horario completo, `areaServed` y
    `amenityFeature` (con las etiquetas «LGBTQ+ friendly» y negocio de mujeres que muestra la
    ficha).
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
`10889763765813003773`, Plus Code `PHC3+W4 Málaga`) y de su ficha en
**Fresha**, que publica la misma dirección y el mismo horario.

- Dirección: **Avenida de Carlos Haya, 72, Cruz de Humilladero, 29010 Málaga**.
- Teléfono: **651 19 18 42**. La ficha de Fresha indica «Call to book»: la cita se reserva por
  teléfono.
- Valoración en Google: **4,7**. La ficha **no publica cuántas reseñas hay**, y por eso el
  JSON-LD **no** lleva `aggregateRating` (ese dato exigiría un recuento que no consta). La web
  sí muestra el 4,7 y enlaza a la ficha.
- Etiquetas de Google: **LGBTQ+ friendly** e **«Identifies as women-owned»**.
- Horario (idéntico en Google y Fresha): **lunes de 9:00 a 20:00, de martes a viernes de 10:00
  a 20:00, sábado de 10:00 a 15:00 y domingo cerrado**. Google lo marca con asterisco, lo que
  suele indicar horario especial.
- La ficha **no publica catálogo de servicios, precios ni web propia**, y no se han localizado
  perfiles en redes sociales del salón.

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
>    (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. **La lista de servicios es genérica a propósito.** Como la ficha no publica el catálogo,
>    `SERVICIOS` describe las áreas habituales de un salón de belleza y la sección avisa de que
>    hay que confirmar por teléfono. Si el negocio te pasa su carta real, sustituye ese array.
> 3. Revisa el **horario** y confírmalo con el salón. Si cambia, ajusta el array `hours` **y** el
>    `openingHoursSpecification` del schema.
> 4. Revisa las imágenes y su texto alternativo. Los `alt` describen la fachada, el tratamiento
>    de cejas y la avenida; ajústalos si el contenido real es otro. La ficha solo tiene estas
>    tres, pero puedes sumar fotos copiándolas a `packages/@assets/A-STYLE-BEAUTY-SALON/` y
>    añadiéndolas a `GALLERY`/`IMAGES`.
> 5. La web no publica precios porque el salón no difunde una tarifa; mantén esa decisión o
>    actualízala si empiezan a publicarla.
> 6. Si el salón publica reseñas en Google, añade `aggregateRating` a `SCHEMA` con el recuento
>    real; ahora mismo está omitido a propósito.
> 7. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
>    (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
>    dominio cambia, hay que actualizar los tres.
