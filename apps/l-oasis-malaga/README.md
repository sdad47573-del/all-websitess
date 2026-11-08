# L'Oasis Málaga

Sitio web de [L'OASIS Restaurante & Cafetería](https://www.google.com/maps/place/L%27OASIS/@36.7131892,-4.4359899,17z/data=!4m8!3m7!1sChIJ_zFUUtT3cg0ROuh7TkV6pg8:0xd72f7d4525431ff:0xfa67a454e7be83a!8m2!3d36.7131892!4d-4.4359899!9m1!1b1!16s%2Fg%2F11w1nd3frp),
cafetería halal en el Paseo de los Tilos, 37 (Cruz de Humilladero, Málaga). Static site
generado con Astro 5 y Tailwind CSS 4 + daisyUI 5.

## Datos del negocio

Todo lo que aparece en el sitio se ha extraído de la ficha pública de Google Maps y del
perfil de Instagram `@loasis.malaga`:

| Campo | Valor |
| --- | --- |
| Nombre | L'OASIS Restaurante & Cafetería |
| Dirección | P.º de los Tilos, 37, Cruz de Humilladero, 29006 Málaga |
| Teléfono | 951 72 54 01 |
| Valoración | 4,9 · 613 reseñas |
| Horario | L–S 08:00–00:30 · D 09:00–00:30 |
| Coordenadas | 36.7131892, -4.4359899 |
| Place ID | `ChIJ_zFUUtT3cg0ROuh7TkV6pg8` |
| Instagram | [@loasis.malaga](https://www.instagram.com/loasis.malaga/) |
| TikTok | [@loasis.malaga](https://www.tiktok.com/@loasis.malaga) |

Todos estos valores viven en `src/data/site.ts`. Cámbialos ahí, no en los componentes.

## Imágenes

Las fotografías de `src/assets/fotos/` proceden de Google:

- `maps-portada.jpg`: foto de perfil de la ficha de Google Maps.
- `streetview-*.jpg`: seis ángulos de Street View de la fachada (yaw 30/90/133/180/240/300).

Están referenciadas con crédito visible en la galería. Si consigues fotos reales del
interior y de los platos, sustitúyelas y actualiza `GALLERY` en `src/data/site.ts`.

## Estructura

```
src/
├── components/ # Topbar, Hero, Desayunos, Halal, Menu, Faq, Gallery, Contact…
├── data/site.ts # Datos del negocio + todo el JSON-LD
├── layouts/ # Layout.astro: metadatos SEO, Open Graph y datos estructurados
├── pages/ # index, carta, aviso-legal
└── styles/ # Tema daisyUI propio (paleta ocre/verde oasis)
```

## SEO

- **Un solo `@graph` JSON-LD por página** (`buildSchemaGraph()` en `src/data/site.ts`)
 con `WebPage`, `BreadcrumbList`, `Restaurant`, `WebSite` y `FAQPage`, enlazados por
 `@id`. Así Google relaciona las páginas con el negocio en vez de leer islands sueltos.
- **`Restaurant` completo**: `ContactPoint`, `potentialAction` (`ReserveAction` al
 teléfono), `hasMenu` como entidad `Menu`, `aggregateRating`, `review`, `geo`, `logo`,
 `sameAs` y `paymentAccepted`.
- **SEO local**: `geo.region`, `geo.placename`, `geo.position` e `ICBM`, además de las
 coordenadas en Open Graph.
- **Open Graph y Twitter completos**, con `og:image:width/height/alt` y
 `twitter:image:alt`.
- **Migas de pan** visibles (`Breadcrumbs.astro`) y en schema.
- **FAQ** con `FAQPage`, que habilita resultados enriquecidos.
- **Títulos y descripciones** ajustados al límite de snippet de Google.

Regenera la imagen social cuando cambie la foto de portada:

```bash
bun run scripts/generate-og.mjs
```

## Páginas

- `/` — portada con todas las secciones, incluida la FAQ.
- `/carta` — la carta completa en cuatro categorías.
- `/aviso-legal` — aviso legal y política de privacidad (LSSI-CE y RGPD).

## Comandos

```bash
bun run dev # servidor de desarrollo
bun run devh # desarrollo accesible desde la red local
bun run build # build estático a dist/
bun run preview # sirve el build
bun run astro # CLI de Astro (check, info…)
```

## Pendiente antes de publicar

1. **Datos legales** (`LEGAL` en `src/data/site.ts`): razón social, NIF y correo de
 contacto. Mientras estén como `[pendiente de completar]`, `/aviso-legal` muestra un
 aviso al titular; al rellenarlos desaparece solo.
2. **Dominio**: `astro.config.mjs` usa `https://loasismalaga.vercel.app`. Cámbialo si el
 dominio real es otro y actualiza también `BUSINESS.mapUrl` y `public/robots.txt`.
