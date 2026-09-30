# Sami Beauty Salon

Web de **Sami Beauty Salon**, peluquería y centro de estética en la avenida de Carlos Haya, 23,
Local 3 (Cruz de Humilladero, 29010 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `sami` definido en `src/styles/index.css`, con rosa palo,
  borrazo profundo y crema).
- Datos del negocio, servicios, reseñas y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `packages/@assets/SAMI-BEAUTY-SALON/`, consumidas vía el alias
  `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La portada usa la fachada como fondo del hero y la manicura como imagen destacada;
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

Desde la raíz del monorepo, el linter de contenido de todas las webs:

```bash
bun run check:sites                       # todas
bun run check:sites sami-beauty-salon     # solo esta
```

## Páginas

| Ruta           | Contenido                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `/`            | Portada: presentación, el salón, servicios y ventajas, opiniones, galería, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                                 |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «peluquería y estética en
  Carlos Haya, Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large`
  y `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1252×1600 con `width`/`height`/`alt`, teléfono, dirección,
  código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
  - `BeautySalon` (en todas las páginas): dirección, geo, horario completo, `areaServed`,
    `amenityFeature` y **`aggregateRating`** (4,7 con 84 reseñas, que sí publica la ficha).
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
`9782024289896670050`, Plus Code `PHC4+J4 Málaga`).

- Dirección: **avenida de Carlos Haya, 23, Local 3, Cruz de Humilladero, 29010 Málaga**,
  dentro del distrito de Carretera de Cádiz.
- Teléfono: **603 02 14 88**.
- **No hay web propia publicada** (Google ofrece la opción de «añadir sitio web»). El salón sí
  enlaza una **ficha de reserva en Booksy** desde su perfil de Google; ese enlace se reproduce en
  `BUSINESS.reservation` y aparece como vía de cita online, sin inventar una web propia.
- Valoración en Google: **4,7 con 84 reseñas**. Las tres citas que se muestran son reseñas reales de
  la ficha (traducidas y resumidas); los temas recurrentes se presentan como resumen, no como citas.
- Horario: **lunes a viernes de 10:00 a 19:00**, **sábado de 10:00 a 14:00** y **domingo
  cerrado**. Google lo marca con asterisco, lo que suele indicar horario especial.
- **52 fotos** en la ficha de Google. La galería completa se carga por JavaScript, así que solo se
  han podido recuperar **2 fotos** (1252×1600 la fachada y 1440×1440 una manicura) más una vista de
  Street View de la avenida de Carlos Haya (1024×576).

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
>    (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. **La lista de servicios es genérica a propósito.** Como la ficha no publica el catálogo,
>    `SERVICIOS` describe las áreas del salón a partir de lo que cuentan las reseñas y la sección
>    avisa de que hay que confirmar por teléfono. Si el negocio te pasa su carta real, sustituye
>    ese array.
> 3. Revisa el **horario**, especialmente la franja del sábado por la mañana, y confírmalo con el
>    salón. Si cambia, ajusta el array `hours` **y** el `openingHoursSpecification` del schema.
> 4. Revisa el **enlace de reserva**: `BUSINESS.reservation` apunta a la ficha de Booksy que el
>    negocio enlaza hoy desde Google. Si cambia de plataforma o caduca el enlace, actualízalo.
> 5. Revisa las imágenes y su texto alternativo. Los `alt` describen la fachada, una manicura y la
>    calle; ajústalos si el contenido real es otro. Puedes sumar fotos copiándolas a
>    `packages/@assets/SAMI-BEAUTY-SALON/` y añadiéndolas a `GALLERY`/`IMAGES`.
> 6. La web no publica precios porque el salón no difunde una tarifa; mantén esa decisión o
>    actualízala si empiezan a publicarla.
> 7. Si el salón tiene redes sociales, añádelas a `BUSINESS` y a `sameAs` en `SCHEMA`, que ahora no
>    lleva ninguno por ese motivo.
> 8. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
>    (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
>    dominio cambia, hay que actualizar los tres.
