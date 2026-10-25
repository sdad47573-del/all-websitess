# Restaurante Orotapia

Web informativa de **Restaurante Orotapia**, parrilla de carnes en Oropesa del Mar (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Terol, 5 · 12594 Oropesa del Mar), teléfono (624 94 84 78), coordenadas (40.0866261, 0.1434115), nota (4,7 con 427 reseñas), horario (viernes y sábado, 12:00–16:00) y categorías (parrilla, carnes asadas, chuletas maduradas).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`. La carta y los precios no se publican porque no hay carta oficial.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-orotapia`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`.
- `siteUrl` (`https://restaurante-orotapia.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-orotapia
bun run typecheck   # dentro de apps/restaurante-orotapia
```
