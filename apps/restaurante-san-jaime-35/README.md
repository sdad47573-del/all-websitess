# Restaurante San Jaime 35

Web informativa de **Restaurante San Jaime 35**, cocina española y pizzería en Montanejos (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (C. San Jaime, 35 · 12448 Montanejos), teléfono (964 13 12 92), coordenadas (40.0673444, -0.523705), nota (4,5 con 1.382 reseñas), categorías (restaurante de cocina española y pizzería) y horario (de 12:00 a 1:00 los domingos, lunes, jueves, viernes y sábados; martes y miércoles cerrado).
- Platos y postres tomados de las fotos de la ficha y de lo que citan las reseñas (bravas, croquetas de sepia y pulpo, pulpo, zamburiñas, carrillada con setas, callos con oreja, codillo, pizzas, tarta de chocolate y carajillo). No se publican precios porque no hay carta oficial.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-san-jaime-35`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale del pulpo a la brasa.
- `siteUrl` (`https://restaurante-san-jaime-35.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-san-jaime-35
bun run typecheck   # dentro de apps/restaurante-san-jaime-35
```
