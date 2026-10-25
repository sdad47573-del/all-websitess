# Restaurante Pedro Marco

Web informativa de **Restaurante Pedro Marco**, cocina mediterránea de mediodía en Castelló de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Taixida, 10 · 12003 Castelló de la Plana), teléfono (661 38 87 95), coordenadas (39.9894509, -0.0318146), nota (4,5 con 772 reseñas), categoría (restaurante mediterráneo) y horario (13:30–16:00 de martes a domingo; lunes cerrado).
- Accesibilidad tal como la marca la ficha: entrada, aseo y asientos adaptados para sillas de ruedas. La ficha **no** marca aparcamiento adaptado y así se dice en las preguntas frecuentes.
- Platos tomados de las fotos de la ficha: tartar de salmón con mango y alcaparras, timbal de aguacate y salmón, carpaccio con lima, jamón con higos y melón, langostinos a la plancha, vieiras en su concha y mejillones al vapor. No se publican precios porque no hay carta oficial.
- De las diez fotos de la ficha se descartaron tres: el rincón de tienda con botellas (no es el comedor), un collage con el rótulo «domingo» y una foto de grupo con clientes identificables.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-pedro-marco`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale del tartar de salmón.
- `siteUrl` (`https://restaurante-pedro-marco.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-pedro-marco
bun run typecheck   # dentro de apps/restaurante-pedro-marco
node scripts/check-site-content.mjs restaurante-pedro-marco
```
