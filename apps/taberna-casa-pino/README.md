# Taberna Casa Pino · Astro

Sitio bilingüe (español e inglés) para **Taberna Casa Pino**, taberna de tapas y vinos en la
Calle Cártama, La Cala de Mijas (Mijas, Málaga).

## Desarrollo

```bash
bun run --filter taberna-casa-pino dev
bun run --filter taberna-casa-pino check
bun run --filter taberna-casa-pino typecheck
bun run --filter taberna-casa-pino build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://taberna-casa-pino.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las etiquetas
canonical/OG cuando haya dominio definitivo.**

## SEO y datos locales

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, Open Graph, Twitter Cards, sitemap
  y JSON-LD `Restaurant` + `FAQPage` + `BreadcrumbList`. Las páginas legales van solo en español.
- Sección de zona con el barrio y el entorno (playas, distancia al aeropuerto, aparcamiento) y
  cuatro preguntas frecuentes más de búsqueda local, en los dos idiomas.
- Datos contrastados con la ficha de Google Maps del local y con su perfil público de Instagram
  (`@casapinolacala`): Calle Cártama, 29649 La Cala de Mijas, teléfono 602 09 50 07, horario de
  miércoles a domingo (lunes y martes cerrado), valoración 4,5 con 159 reseñas.
- Las coordenadas (36.5025709, -4.6819303), el Place ID y el Plus Code (`G839+26`) proceden del
  enlace de Google Maps facilitado.
- Los platos citados en la sección «La mesa» provienen de la carta difundida por el local y de
  sus reseñas públicas. No se publican precios.
- No se afirma que Instagram ni los directorios de terceros sean canales oficiales más allá de lo
  que publica el propio local.

### Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categoría (Taberna / Restaurante) | ficha de Google Maps |
| Dirección: C. Cártama, 29649 La Cala de Mijas, Málaga | Google Maps |
| Teléfono: 602 09 50 07 | Google Maps e Instagram del local |
| Coordenadas: 36.5025709, -4.6819303 | enlace de Google Maps |
| Place ID: `0xd731f003a17676f:0xe336e7ea7fd8e15f` | enlace de Google Maps |
| Plus Code: G839+26 | ficha de Google Maps |
| Horario: miércoles a domingo, de 12:00 a 23:30; lunes y martes cerrado | Google Maps e Instagram |
| Valoración: 4,5 con 159 reseñas | Google Maps |
| Servicios: terraza, patio, accesible, para llevar, reservas, música en directo | Google Maps y reseñas públicas |
| Platos (croquetas de puchero, ensaladilla rusa, tartar de atún, pulpo, solomillo con puré, flamenquín, torreznos, torrija brioche, tarta de queso payoyo) | carta y reseñas públicas del local |

## Fotografías

Las siete imágenes de `public/fotos/` se descargaron de la **galería de la ficha de Google Maps
de Taberna Casa Pino** (la que el propio negocio publica en su perfil), en la variante de mayor
resolución útil para web:

- `taberna-casa-pino-la-cala-de-mijas.jpg` (1200×1600, 674 KB) para la portada y el `og:image`.
- `taberna-casa-pino-la-cala-de-mijas-foto-1.jpg` a `-foto-6.jpg` (900×1200 y 900×900, 122–389 KB)
  para la galería.

La web acredita la procedencia en la propia galería y en el pie. Antes de publicar conviene:

1. Revisar que cada foto corresponde al local y ajustar los textos `alt` y los nombres de archivo,
   que ahora son genéricos (`-foto-N.jpg`), según lo que se vea en cada imagen.
2. Confirmar que el titular autoriza el uso de esas fotografías en la web y, si pide retirarlas,
   sustituirlas.
3. Optimizar más los archivos si se quiere mejorar el LCP; el hero pesa 674 KB.

### Datos estructurados

El JSON-LD `Restaurant` se corrigió en dos puntos que afectan de verdad al posicionamiento local:

- **La localidad es la ciudad, no el barrio.** Antes `addressLocality` valía «La Cala de Mijas»,
  de modo que Google podía situar la taberna fuera de Mijas. Ahora `addressLocality` es Mijas, el
  barrio va en `addressNeighborhood` y la provincia en `addressRegion`.
- **`sameAs` vuelve a contener solo perfiles externos** (Instagram). En una ronda anterior se
  habían metido ahí las URL de las páginas legales, lo que es incorrecto: `sameAs` declara
  identidades equivalentes del mismo negocio, no sus subpáginas. Para eso están ahora los
  `BreadcrumbList` de cada página.

Además: `hasMenu` apunta a la ficha de Google Maps, donde está la carta viva, `areaServed`
declara barrio, ciudad y provincia, y las páginas legales llevan su propio `WebSite` + `WebPage` +
`BreadcrumbList` enlazados al nodo del negocio mediante `about` e `isPartOf`.

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
- En la esquina inferior hay acciones fijas: llamada al móvil y **reseñar en Google**, que apunta al
  formulario de la propia ficha resuelto con el Place ID. Google pide iniciar sesión para publicar
  una reseña; ese paso ya no depende de la web.
- **No hay botón de WhatsApp.** La ficha de Maps publica el móvil 602 09 50 07, pero no ofrece
  ninguna acción de WhatsApp, así que no hay ningún número verificado. En cuanto el titular confirme
  su móvil con WhatsApp, basta con escribirlo en `whatsappNumber` (en `src/lib/business.ts`, solo
  cifras con prefijo internacional) y el botón aparece sin tocar nada más.
- **No hay enlace a Booking ni a otra plataforma de reservas** porque la ficha de Maps no publica
  ninguna. Si el local se da de alta en una plataforma, se añade el enlace donde ya están el resto
  de llamadas a la acción del pie y de las acciones flotantes.

## Antes de publicar

1. Cambiar `https://taberna-casa-pino.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   `public/robots.txt`, canonical, JSON-LD, Open Graph y `src/lib/business.ts`.
2. Confirmar con el local el horario vigente (el cierre varía según la temporada; Google Maps
   marca 22:00 mientras el perfil de Instagram publica 23:30) y la carta actual.
3. Revisar los textos alternativos de las fotos.
4. Completar los datos legales del titular (ver «Páginas legales»).
