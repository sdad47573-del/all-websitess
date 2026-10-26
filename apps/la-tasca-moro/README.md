# La Tasca

Web informativa de **La Tasca**, bar restaurante familiar de cocina casera, menú del día y brasa en Sant Joan de Moró (Plana Alta, Castelló). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer d'Àngel Pallarés, 14 · 12130 Sant Joan de Moró), teléfono (623 11 60 45), coordenadas (40.0585697, -0.1357897), nota (4,4 con 269 reseñas), categoría (bar restaurante) y horario (lunes 8:30–13:30; martes a jueves 8:30–16:00; viernes a domingo 8:30–24:00).
- **Precios publicados por el local**: la descripción del titular en la ficha dice «menú diario 9 € y almuerzo a la brasa por 5 €». Son los dos únicos importes que aparecen en la web, siempre atribuidos a esa descripción; el resto de la carta no está publicada y no se inventan precios.
- La misma descripción anuncia que cada semana pone «montaditos, jamón y morro de cerdo a cargo de la casa, durante un día a la semana». Se reproduce con esa atribución.
- Los platos de la sección «La carta» salen de las fotos del perfil (parrillada, mariscada, fideuà, pulpo a la gallega, calamar y gambas, pescado con patatas, huevos con pimientos y embutido, bocadillo) y de lo que citan las reseñas (sepia con patatas, ensalada, raciones generosas).
- Accesibilidad tal como la marca la ficha: acceso, aseo y asientos adaptados para sillas de ruedas. No marca plaza de aparcamiento adaptada y así se dice.
- Reseñas citadas: «las raciones generosas a un precio razonable»; «recomendable la sepia con patatas y una muy buena ensalada»; «trato excelente y la parrillada exquisita».
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas con `node scripts/fetch-maps-photos.mjs la-tasca-moro` y guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. Se descartaron dos con clientes identificables: una del comedor con gente de pie y otra de dos hombres con sendas copas de helado. El `og.jpg` es la mariscada recortada a 1200×630.
- `siteUrl` (`https://la-tasca-moro.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=la-tasca-moro
bun run typecheck   # dentro de apps/la-tasca-moro
node scripts/check-site-content.mjs la-tasca-moro
```
