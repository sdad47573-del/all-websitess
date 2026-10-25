# Restaurante El Racó del Mercat

Web informativa de **Restaurante El Racó del Mercat**, desayunos, tapas y cenas de viernes y sábado en L'Alcora (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de la Carretera de Ribesalbes, s/n · 12110 L'Alcora), teléfono (667 43 18 01), coordenadas (40.0736381, -0.215534), nota (4,7 con 81 reseñas) y horario.
- Horario tal como lo publica la ficha: mañanas de 9:00 a 13:00 (los **miércoles desde las 7:00**), cenas solo **viernes** (20:00–24:00) y **sábado** (20:00–1:30), y **lunes cerrado**. Es un horario partido, así que la tabla de «Visítanos» lleva las dos franjas en la misma línea.
- Accesibilidad tal como la marca la ficha: entrada, aseo y asientos adaptados para sillas de ruedas. La ficha **no** marca aparcamiento adaptado y así se dice en las preguntas frecuentes.
- No hay carta ni precios publicados en la ficha. Los platos de la sección «La pizarra» salen de las fotos del perfil y de las reseñas: tostadas de aguacate y de jamón, bocadillo de lomo con huevo y de calamares, ensaladilla rusa, croquetas, boquerones, caracoles, flautas y ensalada con salmón. La web lo advierte y no inventa importes.
- De las diez fotos de la ficha se descartaron dos: un té con un donut (no es cocina del local) y una foto de una mesa con clientes (se usó la del bocadillo de calamares en su lugar).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-raco-del-mercat`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale del bocadillo de lomo.
- `siteUrl` (`https://restaurante-raco-del-mercat.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-raco-del-mercat
bun run typecheck   # dentro de apps/restaurante-raco-del-mercat
node scripts/check-site-content.mjs restaurante-raco-del-mercat
```
