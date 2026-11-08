# Carnicería Vargas

Web de **Carnicería Vargas**, carnicería y charcutería en la calle Rafael Alberti, 9
(Cruz de Humilladero, 29007 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `vargas` definido en `src/styles/index.css`).
- Datos del negocio, surtido, servicios, reseñas y fotos en `src/data/site.ts`.
- Fotos reales del local en `src/assets/fotos/`. Los nombres de archivo son descriptivos (`carniceria-vargas-carnes-y-elaborados-malaga.jpg`…)
 porque Google Imágenes los indexa.
- La portada usa una foto como fondo del hero y en la sección «La carnicería»; las imágenes se
 sirven con `srcset`/`sizes` para no enviar más píxeles de los necesarios.

## Scripts

```bash
bun install
bun run dev # servidor de desarrollo
bun run build # build estático
bun run check # astro check
bun run typecheck
```

## Páginas

| Ruta | Contenido |
| -------------- | --------------------------------------------------------------------------------------- |
| `/` | Portada: presentación, la carnicería, productos, encargos, reseñas, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «carnicería en Cruz de
 Humilladero, Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large` y
 `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1600×1200 con `width`/`height`/`alt`, teléfono, dirección,
 código postal y coordenadas (útiles para las tarjetas de Facebook y WhatsApp).
- **Datos estructurados** (JSON-LD):
 - `Store` (en todas las páginas): dirección, geo, horario, valoración agregada, `sameAs`,
 `foundingDate`, `areaServed` y `amenityFeature` con los servicios reales del local.
 - `BreadcrumbList` en la portada y en `/aviso-legal`.
 - `FAQPage` en la portada, generado a partir de las mismas preguntas que se muestran.
- **SEO local**: `geo.region`, `geo.placename`, `geo.position` e `ICBM` con las coordenadas.
- **Imágenes**: nombres de archivo descriptivos, `alt` con localidad y `srcset`/`sizes` para el LCP.

### Comprobar el SEO en el build

```bash
bun run build
grep -o 'application/ld+json' dist/index.html | wc -l # bloques de datos estructurados
grep -o 'srcset' dist/index.html | wc -l # versiones responsive de las fotos
cat dist/sitemap-0.xml # URLs indexables
```

## Contenido y fuentes

La información (dirección, teléfono, horario, valoración y surtido) procede de la **ficha pública
del local en Google Maps** y de su **perfil público de Instagram**
(`@carniceriacharcuteriavargas`, «Desde 1974 · Carne fresca del día · Expertos en elaborados
caseros · Jamones al corte · C/Rafael Alberti 9»):

- Valoración **4,8★ con 39 reseñas** en Google en el momento de crear la web.
- Horario publicado: **lunes a sábado de 8:30 a 14:30**, domingo cerrado (Google lo marca con
 asterisco, lo que suele indicar horario especial). Hay que confirmarlo antes de publicar.
- **12 fotos** en la ficha de Google. La galería completa se carga por JavaScript, así que solo se
 han podido recuperar **2 fotos** (una horizontal de 1600×1200 y una vertical de 1200×1600).

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL` de
> `src/data/site.ts`. Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. Revisa las dos fotos y su texto alternativo. Se han bajado de la ficha pública de Google Maps
> y los `alt` describen la carnicería y su mostrador: ajusta el texto si lo que se ve en cada
> imagen es otra cosa, y renombra los archivos si quieres que describan mejor su contenido.
> Puedes sumar más fotos de la ficha copiándolas a `src/assets/fotos/` y
> añadiéndolas al array `GALLERY`/`IMAGES`.
> 3. Confirma el horario (8:30–14:30 de lunes a sábado) y, si el local publica un horario de tarde,
> añade el tramo al array `hours` y a `openingHoursSpecification`.
> 4. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
> (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
> dominio cambia, hay que actualizar los tres.
