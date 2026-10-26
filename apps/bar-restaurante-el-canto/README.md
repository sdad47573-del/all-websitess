# Bar Restaurante El Cantó

Web informativa de **Bar Restaurante El Cantó**, bar y restaurante de cocina casera en Les Alqueries (Plana Baixa, Castelló). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer la Via, 6 · 12530 Les Alqueries), teléfono (964 51 36 47), coordenadas (39.8977408, -0.1038519), nota (4,4 con 232 reseñas), categorías (restaurante de cocina española, bar) y horario (lunes a viernes 6:00–16:00, sábado 6:00–13:00, **domingo cerrado**).
- El horario es de mañana y mediodía: se abre a las 6:00 para el café y el almuerzo y la cocina cierra a las 16:00. No hay servicio de cena, y así se explica en las preguntas frecuentes.
- Accesibilidad tal como la marca la ficha: acceso, aseo y asientos adaptados para sillas de ruedas. No marca plaza de aparcamiento adaptada y así se dice.
- **La ficha no publica carta, precios ni descripción del titular.** La sección «La cocina» sale de lo que aparece en las fotos del perfil (bocadillo de la barra, filete con patatas, olivas, almendras tostadas, postre de crema, carajillo) y de lo que citan las reseñas (arroces, sepia a la plancha, cocina casera). No se inventan importes.
- Reseñas citadas: «buen sitio para comer, excelente calidad y buen trato»; «buen servicio, recomiendo arroces y sepia»; «comida casera muy buena, trato excelente y muy buena atención».
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha con `node scripts/fetch-maps-photos.mjs bar-restaurante-el-canto`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. Se descartaron dos: una vista de la calle con viandantes identificables y otra de la fachada en la que se leen las matrículas de los coches aparcados. El `og.jpg` es la fachada elegida, recortada por la izquierda para dejar fuera a un cliente de la terraza.
- `siteUrl` (`https://bar-restaurante-el-canto.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-restaurante-el-canto
bun run typecheck   # dentro de apps/bar-restaurante-el-canto
node scripts/check-site-content.mjs bar-restaurante-el-canto
```
