# Restaurante La Dolce Vita

Web informativa de **Restaurante La Dolce Vita**, pinseria romana en Castellón de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Plaça Vilanova d'Alcolea, 6 · 12006 Castellón de la Plana), teléfono (964 17 99 46), coordenadas (39.9758499, -0.0478192), nota (4,7 con 570 reseñas), categorías (restaurante de cocina romana, restaurante italiano, pizzería, restaurante), horario (lunes cerrado; noches de martes a jueves de 18:00 a 24:00; viernes de 12:00 a 16:00 y de 18:00 a 24:00; sábados y domingos de 12:00 a 17:00 y de 19:00 a 24:00) y descripción del propio local: primera y única pinseria de Castellón, masa de alta fermentación (48-72 h) con un 80 % de agua, harinas certificadas de arroz, soja y trigo con masa madre e ingredientes traídos de Italia.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`. No se publican precios porque no hay carta oficial.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-la-dolce-vita`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la pinsa de jamón con queso rallado.
- `siteUrl` (`https://restaurante-la-dolce-vita.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-la-dolce-vita
bun run typecheck   # dentro de apps/restaurante-la-dolce-vita
```
