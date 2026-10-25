# Restaurante Anubo

Web informativa de **Restaurante Anubo**, arrocería en Oropesa del Mar (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Goya, 36 · 12594 Oropesa del Mar), teléfono (964 31 12 56), coordenadas (40.0916644, 0.136477), nota (4,8 con 619 reseñas), categoría (arrocería), descripción (más de 20 variedades de arroz, paellas para llevar, local pequeño), horario (solo mediodías de 11:00 a 15:30, de miércoles a domingo) y accesibilidad (acceso, aseo y asientos adaptados; se admiten perros).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`. La carta y los precios no se publican porque no hay carta oficial.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-anubo`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://restaurante-anubo.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-anubo
bun run typecheck   # dentro de apps/restaurante-anubo
```
