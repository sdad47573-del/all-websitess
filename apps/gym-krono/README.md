# Gym Krono

Landing local para Gym Krono, gimnasio en Calle Juan Margarit, 4 (Teatinos), Málaga.

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run check` — validación Astro.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

## Datos públicos usados

- Nombre: Gym Krono (gimnasio en Teatinos, Málaga).
- Dirección: Calle Juan Margarit, 4, 29010 Málaga.
- Teléfono: +34 952 27 20 19.
- Email: gymk03@gmail.com.
- Instagram: https://www.instagram.com/gymkronok03/
- Facebook: https://www.facebook.com/p/Gym-Krono-100063526751564/

Los datos provienen de la ficha de Google Maps facilitada y de directorios y perfiles públicos del
negocio. No se publican horarios ni valoraciones porque las fuentes consultadas no coinciden entre
sí y la web prefiere no mostrar datos no verificados; si el titular confirma el horario, puede
añadirse tanto en el texto visible como en `openingHoursSpecification` del `business.ts`.

Cuatro fotografías de la ficha de Google Maps se descargan localmente en `public/images/`
(`krono-01.jpg` … `krono-04.jpg`) y se muestran en la galería; los enlaces llevan a la ficha
original como fuente y los derechos de las fotos siguen perteneciendo a sus autores.

La tarjeta social `public/og.png` se genera a partir de `public/og.svg` con
`node scripts/og-svg-to-png.mjs` desde la raíz del monorepo. Es una ilustración vectorial original,
no una fotografía del gimnasio.

Antes de publicar, sustituye el NIF/CIF y la razón social pendientes en `src/pages/aviso-legal.astro`.
La URL canónica (`https://gym-krono-malaga.vercel.app`) es provisional: cámbiala si el sitio se
despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
