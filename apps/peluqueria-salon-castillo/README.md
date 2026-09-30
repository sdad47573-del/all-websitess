# Peluquería Salón Castillo

Landing estática Astro basada en la ficha de Google Maps proporcionada.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/peluqueria-salon-castillo
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## Datos y SEO local

- Nombre, coordenadas, enlace e imagen vienen de la URL de Google Maps compartida por el usuario.
- No se usa teléfono ni dirección de C. Castilla 1 de directorios porque aparecen asociados a una ubicación distinta de las coordenadas de la ficha enviada.
- JSON-LD `HairSalon` con nombre, URL provisional, foto, coordenadas y `hasMap`; sin teléfono, dirección postal, servicios, horario o rating no confirmados para esta ficha.
- Dominio provisional: `https://peluqueria-salon-castillo.vercel.app`. Actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` antes de publicación.
- La foto remota usa el enlace `lh3.googleusercontent.com` de la foto concreta incluida en la solicitud; Google puede cambiar o retirar la URL. Verificar que siga funcionando y que exista autorización de uso antes de publicar.
