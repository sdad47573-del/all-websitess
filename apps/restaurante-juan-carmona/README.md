# Restaurante Juan Carmona · Astro

Sitio bilingüe (español e inglés) para **Restaurante Juan Carmona**, marisquería en la calle Mar, 25,
La Carihuela (Torremolinos, Málaga).

## Desarrollo

```bash
bun run --filter restaurante-juan-carmona dev
bun run --filter restaurante-juan-carmona check
bun run --filter restaurante-juan-carmona typecheck
bun run --filter restaurante-juan-carmona build
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://restaurante-juan-carmona.vercel.app`: **cámbialo aquí, en `public/robots.txt` y en las
etiquetas canonical/OG cuando haya dominio definitivo.**

## SEO y datos locales

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, Open Graph, Twitter Cards, sitemap
  y JSON-LD `Restaurant` + `FAQPage` + `BreadcrumbList`. Las páginas legales van solo en español.
- Sección de zona con el barrio y el entorno (la playa, el paseo marítimo, la distancia al
  aeropuerto, el aparcamiento) y tres preguntas frecuentes más de búsqueda local, en los dos
  idiomas.
- Datos contrastados con la ficha de Google Maps del propio establecimiento y con directorios y
  guías gastronómicas públicas (GastroRanking, Toppings & Salads, Tripadvisor):
  calle Mar, 25, 29620 Torremolinos · teléfono 952 38 25 96 · de martes a domingo con comidas
  13:00–16:00 y cenas 19:30–23:00 (miércoles continuo, lunes cerrado) · 4,5 con 651 reseñas.
- Las coordenadas (36.6123657, -4.5018596), el Place ID y el Plus Code (`JF6X+W7`) proceden del
  enlace de Google Maps facilitado.
- Los platos citados en «La carta» provienen de las reseñas públicas y de las guías gastronómicas
  que describen el restaurante. No se publican precios concretos; el rango 20-60 € por persona es
  el que notifica la ficha de Google Maps.
- Se enlazan los perfiles públicos de Instagram (`@restaurantejuancarmona`) y Facebook del
  restaurante, que coinciden en nombre y dirección con la ficha de Maps.

### Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categorías (Restaurante, marisquería, mediterráneo) | ficha de Google Maps |
| Dirección: C. Mar, 25, 29620 Torremolinos | Google Maps |
| Teléfono: 952 38 25 96 | Google Maps |
| Coordenadas: 36.6123657, -4.5018596 | enlace de Google Maps |
| Place ID: `0xd72fb8ae9f5332d:0x9fff2bcf8ccdabe9` | enlace de Google Maps |
| Plus Code: JF6X+W7 | ficha de Google Maps |
| Horario: martes a domingo 13:00–16:00 y 19:30–23:00; miércoles continuo; lunes cerrado | ficha de Google Maps |
| Valoración: 4,5 con 651 reseñas | Google Maps |
| Precio: 20-60 € por persona | Google Maps (notificado por usuarios) |
| Servicios: terraza, accesible, reservas, para llevar, entrega a domicilio | Google Maps |
| Platos (fritura de pescado, coquinas, zamburiñas, almejas a la marinera, boquerones al limón, arroz negro, revuelto de bacalao, pulpo, ensalada Carmona, postres caseros) | reseñas públicas y guías gastronómicas |

## Fotografías

Las siete imágenes de `public/fotos/` se descargaron de la **galería de la ficha de Google Maps
de Restaurante Juan Carmona** (la que el propio negocio publica en su perfil):

- `restaurante-juan-carmona-torremolinos.jpg` (1600×1111, 275 KB) para la portada y el `og:image`.
- `restaurante-juan-carmona-torremolinos-foto-1.jpg` a `-foto-6.jpg` (600×800 a 1200×1600,
  126–281 KB) para la galería, con proporciones variadas.

La web acredita la procedencia en la propia galería y en el pie. Antes de publicar conviene:

1. Revisar que cada foto corresponde al local y ajustar los textos `alt` y los nombres de archivo,
   que ahora son genéricos (`-foto-N.jpg`), según lo que se vea en cada imagen.
2. Confirmar que el titular autoriza el uso de esas fotografías en la web y, si pide retirarlas,
   sustituirlas.
3. Optimizar más los archivos si se quiere mejorar el LCP.

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
- **No hay botón de WhatsApp.** La ficha de Maps solo publica el fijo 952 38 25 96, sin ninguna
  acción de WhatsApp, así que no hay ningún número verificado. En cuanto el titular confirme su
  móvil con WhatsApp, basta con escribirlo en `whatsappNumber` (en `src/lib/business.ts`, solo
  cifras con prefijo internacional) y el botón aparece sin tocar nada más.
- **No hay enlace a Booking ni a otra plataforma de reservas** porque la ficha de Maps no publica
  ninguna. Si el restaurante se da de alta en una plataforma, se añade el enlace donde ya están el
  resto de llamadas a la acción del pie y de las acciones flotantes.

## Antes de publicar

1. Cambiar `https://restaurante-juan-carmona.vercel.app` por el dominio definitivo en
   `astro.config.mjs`, `public/robots.txt`, canonical, JSON-LD, Open Graph y `src/lib/business.ts`.
2. Confirmar con el restaurante el horario vigente (el cierre de comidas varía entre 16:00 y 16:30
   según la fuente) y la carta actual.
3. Revisar los textos alternativos de las fotos.
4. Completar los datos legales del titular (ver «Páginas legales»).
