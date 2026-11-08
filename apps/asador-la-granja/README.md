# Asador La Granja · Astro

Sitio bilingüe (español e inglés) para **Asador La Granja**, asador de cocina argentina en el
Camino de la Ponderosa, 9, local 7 (Las Lagunas de Mijas, Mijas, Málaga).

## Desarrollo

```bash
bun run --filter asador-la-granja dev
bun run --filter asador-la-granja check
bun run --filter asador-la-granja typecheck
bun run --filter asador-la-granja build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://asador-la-granja.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las etiquetas
canonical/OG cuando haya dominio definitivo.**

## SEO y datos locales

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, Open Graph, Twitter Cards, sitemap
  y JSON-LD `Restaurant` + `FAQPage` + `BreadcrumbList`. Las páginas legales van solo en español.
- Sección de zona con el barrio y el entorno (distancia a Fuengirola y a Ronda, la sierra, el
  aparcamiento) y tres preguntas frecuentes más de búsqueda local, en los dos idiomas.
- Datos contrastados con la ficha de Google Maps del propio establecimiento y con directorios
  gastronómicos públicos (GastroRanking, Toppings & Salads, Malaga Directory):
  Camino de la Ponderosa, 9, local 7, 29649 Las Lagunas de Mijas · teléfono 952 73 59 16 ·
  abierto todos los días de 13:00 a 23:00 · 4,6 con 107 reseñas.
- Las coordenadas (36.5203362, -4.6324849), el Place ID y el Plus Code (`G9C9+42`) proceden del
  enlace de Google Maps facilitado.
- Los platos citados en «La carta» provienen de las reseñas públicas y de las guías gastronómicas
  que describen este asador. No se publican precios concretos.
- **Aviso:** existe otro establecimiento homónimo («Asador La Granja», en Ossa de Montiel,
  Albacete) y una marca «Parripollo La Granja» con el mismo teléfono. Aquí solo se han usado los
  datos de la ficha de Las Lagunas de Mijas; no se enlazan redes sociales porque la ficha de Maps
  no las publica.

### Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Restaurante / Asador) | ficha de Google Maps |
| Dirección: Cam. de la Ponderosa, 9, 7, 29649 Las Lagunas de Mijas | Google Maps y GastroRanking |
| Teléfono: 952 73 59 16 | Google Maps |
| Coordenadas: 36.5203362, -4.6324849 | enlace de Google Maps |
| Place ID: `0xd72e302628feadf:0x5af519ac0ff9011b` | enlace de Google Maps |
| Plus Code: G9C9+42 | ficha de Google Maps |
| Horario: todos los días, 13:00–23:00 | ficha de Google Maps (actualizada por la empresa) |
| Valoración: 4,6 con 107 reseñas | Google Maps |
| Servicios: terraza, perros admitidos en terraza, para llevar, reservas, accesible, aparcamiento gratuito | Google Maps y directorios públicos |
| Platos (empanadas caseras, milanesa napolitana, parrillada, entrecot, bavette, chuletón, entraña, pollo a la parrilla, choripán, croquetas, berenjenas con miel) | reseñas públicas y guías gastronómicas |

## Fotografías

Las siete imágenes de `src/assets/fotos/` se descargaron de la **galería de la ficha de Google Maps
de Asador La Granja** (la que el propio negocio publica en su perfil). Las sirve `astro:assets`
como AVIF y en varios tamaños, así que la web no publica estos JPEG originales:

- `asador-la-granja-las-lagunas-de-mijas.jpg` (1200×676, 270 KB) para la portada y el `og:image`.
- `asador-la-granja-las-lagunas-de-mijas-foto-1.jpg` a `-foto-6.jpg` (900×507 a 900×1600,
  112–295 KB) para la galería, con proporciones variadas.

La web acredita la procedencia en la propia galería y en el pie. Antes de publicar conviene:

1. Revisar que cada foto corresponde al local y ajustar los textos `alt` y los nombres de archivo,
   que ahora son genéricos (`-foto-N.jpg`), según lo que se vea en cada imagen.
2. Confirmar que el titular autoriza el uso de esas fotografías en la web y, si pide retirarlas,
   sustituirlas.
3. Optimizar más los archivos si se quiere mejorar el LCP.

### Datos estructurados

El JSON-LD `Restaurant` se corrigió en dos puntos que afectan de verdad al posicionamiento local:

- **La localidad es la ciudad, no el barrio.** Antes `addressLocality` valía «Las Lagunas de
  Mijas», de modo que Google podía situar el asador fuera de Mijas. Ahora `addressLocality` es
  Mijas, el barrio va en `addressNeighborhood` y la provincia en `addressRegion`.
- **`sameAs` vuelve a estar vacío.** En una ronda anterior se habían metido ahí las URL de las
  páginas legales, lo que es incorrecto: `sameAs` declara identidades equivalentes del mismo
  negocio, no sus subpáginas. Como la ficha de Maps no publica redes sociales del asador, la lista
  queda vacía antes que enlazar algo que no sea el mismo establecimiento. Para la jerarquía están
  los `BreadcrumbList` de cada página.

Además: `hasMenu` apunta a la ficha de Google Maps, donde está la carta viva, `areaServed`
declara barrio, ciudad, Fuengirola y provincia, y las páginas legales llevan su propio `WebSite` +
`WebPage` + `BreadcrumbList` enlazados al nodo del negocio mediante `about` e `isPartOf`.

## Páginas legales

Tres páginas en español (la LOPDGDD no admite versión inglesa): `/aviso-legal/`, `/privacidad/` y
`/cookies/`. Las tres usan `src/components/LegalLayout.astro` y salen en el sitemap y enlazadas
desde el pie de la web.

**Los datos legales del titular están sin completar.** En `src/lib/business.ts`, el objeto
`legal` marca con `[pendiente de completar]` los cinco campos que la web publica ahora mismo en
pantalla:

| Campo | Qué es |
| --- | --- |
| `owner` | nombre del titular del negocio (persona física o sociedad) |
| `ownerAddress` | domicilio fiscal |
| `taxId` | NIF o CIF |
| `email` | correo de contacto para consultas de datos y para el aviso legal |
| `hosting` y `hostingAddress` | quién aloja la web y su domicilio |

Basta con rellenar ese objeto: los tres textos se actualizan a la vez.

## Contacto y llamadas a la acción

- La imagen de portada se precarga con `<link rel="preload" as="image">` para no retrasar el LCP.
- En la esquina inferior hay acciones fijas: llamada al fijo y **reseñar en Google**, que apunta al
  formulario de la propia ficha resuelto con el Place ID. Google pide iniciar sesión para publicar
  una reseña; ese paso ya no depende de la web.
- **No hay botón de WhatsApp.** La ficha de Maps solo publica el fijo 952 73 59 16, sin ninguna
  acción de WhatsApp, así que no hay ningún número verificado. En cuanto el titular confirme su
  móvil con WhatsApp, basta con escribirlo en `whatsappNumber` (en `src/lib/business.ts`, solo
  cifras con prefijo internacional) y el botón aparece sin tocar nada más.
- **No hay enlace a Booking ni a otra plataforma de reservas** porque la ficha de Maps no publica
  ninguna. Si el local se da de alta en una plataforma, se añade el enlace donde ya están el resto
  de llamadas a la acción del pie y de las acciones flotantes.

## Antes de publicar

1. Cambiar `https://asador-la-granja.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   `public/robots.txt`, canonical, JSON-LD, Open Graph y `src/lib/business.ts`.
2. Confirmar con el local el horario vigente (la ficha indica 13:00–23:00 todos los días) y la
   carta actual.
3. Revisar los textos alternativos de las fotos.
4. Completar los datos legales del titular (ver «Páginas legales»).
