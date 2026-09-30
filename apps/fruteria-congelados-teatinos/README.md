# Frutería y Congelados Teatinos

Web Astro para el comercio situado en Calle Béla Bartók, Teatinos-Universidad, Málaga.

- Astro 5 + Tailwind CSS 4 + daisyUI, con la configuración compartida del monorepo.
- SEO local: canonical, Open Graph, metadatos geográficos, sitemap, JSON-LD `GroceryStore`, `ContactPage`, `BreadcrumbList` y FAQ sincronizada con el contenido visible.
- Diseño visual original con ilustraciones SVG de frutas. No se usan fotos de otros negocios.

## Páginas

- `/`: presentación, productos, contacto, mapa y preguntas frecuentes.
- `/contacto`: dirección, horario, teléfono y ubicación.
- `/aviso-legal`: aviso legal y privacidad, con recordatorio para completar los datos del titular.

## Datos y comprobaciones pendientes

- Dirección, teléfono y horario provienen de Cylex / EncuentreAbierto, actualizados el 9 de junio de 2026: `calle bela bartok n 1 local 10, 29010 Málaga`, teléfono `660 63 65 88`; lunes y martes 09:00–14:30 y 17:30–20:30; miércoles 09:00–14:30; jueves 09:00–14:30 y 17:30–20:30; viernes y sábado 09:00–14:30; domingo cerrado. Llamar para confirmar.
- Coordenadas e identificador de Maps tomados del enlace que envió el usuario. Otras referencias describen de forma distinta el local comercial; conviene que el titular confirme la dirección exacta y el número de puerta.
- Perfiles enlazados: Facebook `fruteriacongeladosteatinos` e Instagram `fruteriateatinos`.
- El catálogo público define el comercio como frutería y tienda de congelados, y menciona fruta, verduras, frutos secos y despensa. La página no afirma marcas, variedades concretas ni disponibilidad fija.
- No se pudo extraer una foto identificable de la ficha de Google Maps desde el acceso web disponible. Tampoco fue posible atribuir con certeza imágenes públicas individuales al local. Por eso se usan ilustraciones originales, no imágenes ajenas, hasta obtener fotos verificables y autorización de uso.
- No se publica puntuación/recuento de reseñas ni `aggregateRating`. Los directorios recopilan opiniones, pero no se presentan como reseñas directas de Google.
- Antes de publicar, confirmar el dominio provisional `https://fruteria-y-congelados-teatinos.vercel.app` y completar razón social, NIF/CIF y correo en `src/data/site.ts`.

## Comandos

```bash
bun run check
bun run typecheck
bun run build
```
