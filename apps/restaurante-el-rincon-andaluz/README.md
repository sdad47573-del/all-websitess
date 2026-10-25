# Restaurante El Rincón Andaluz

Web informativa de **Restaurante El Rincón Andaluz**, cocina andaluza y bar en Onda (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer Ceramista Mundina, 1 · 12200 Onda), teléfono (673 88 95 37), coordenadas (39.9653533, -0.2634144), nota (4,6 con 201 reseñas), categorías (restaurante andaluz y bar) y horario (de 9:00 a 15:00 de lunes a jueves; viernes y sábado de 9:00 a 17:00 y de 20:00 a 1:00; domingo de 9:00 a 16:00).
- Platos tomados de las fotos de la ficha y de lo que citan las reseñas (surtido de ibéricos, gambas de Huelva, calamares, croquetas, montaditos de jamón, bocadillos de tortilla y de queso, combinado de carne, carne a la plancha, flan, tarta de chocolate). No se publican precios porque no hay carta oficial.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-el-rincon-andaluz`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la mesa con vino, pan y jamón.
- `siteUrl` (`https://restaurante-el-rincon-andaluz.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-el-rincon-andaluz
bun run typecheck   # dentro de apps/restaurante-el-rincon-andaluz
```
