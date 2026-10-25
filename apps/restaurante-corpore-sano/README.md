# Corpore Sano

Web informativa de **RESTAURANTE CORPORE SANO**, restaurante de comida sin gluten y cocina mediterránea en Castellón de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer d'Onda, 36 · 12006 Castelló de la Plana), teléfono y WhatsApp (651 40 50 59), coordenadas (39.9792544, -0.0514062), nota (4,4 con 1.038 reseñas), categorías (restaurante de comida sin gluten, restaurante mediterráneo), descripción del titular («comida saludable, sin gluten y con todo el sabor mediterráneo»), horario (L y X–J 9:30–17:00, **miércoles cerrado**, viernes 9:30–24:00, sábado 10:30–24:00, domingo 10:30–17:00) y accesibilidad (acceso, aseo y asientos adaptados).
- **La ficha no publica carta ni precios.** La sección «La carta» sale de lo que aparece en las fotos del perfil (arroz negro, pulpo con hummus, ensalada de gambón, bonito con mojo verde, aguja de black Angus, sopa fría de sandía) y de lo que citan las reseñas (picoteo, salmón con costra almendrada, «buen producto sin gluten»). No se inventan importes.
- La condición sin gluten se atribuye a la categoría de la ficha y a las reseñas; la web pide confirmar el protocolo al reservar para celíacos. No hay web propia: el canal de reservas es el teléfono y WhatsApp (la ficha enlaza `wa.me`).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas con `node scripts/fetch-maps-photos.mjs restaurante-corpore-sano` y guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. Se descartaron tres: un postre con una mano en el borde, una ración de patatas (el plato se solapa con la ensalada) y las carrilleras, que llevan el rótulo incrustado igual que dos de las fotos elegidas. El `og.jpg` es el arroz negro recortado a 1200×630.
- `siteUrl` (`https://restaurante-corpore-sano.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-corpore-sano
bun run typecheck   # dentro de apps/restaurante-corpore-sano
```
