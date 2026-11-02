# La Sultana

Web informativa de La Sultana, restaurante marroquí en la calle del Lirio, 37,
13004 Ciudad Real.

- **Ficha de origen:** Google Maps, `38.9887915,-3.924412`, feature
  `0xd6bc3f807ad06e1:0x443199b336073107`, place id `ChIJ4QatB_jDaw0RBzEHNrOZMUQ`,
  código `/g/11x5l11m1n`.
- **Datos publicados en la ficha:** categoría «Restaurante marroquí», 4,3 con 81
  reseñas, 643 89 94 42 (móvil), y el horario de dos turnos: de miércoles a
  domingo de 10:30 a 16:00 y de 19:00 a 24:00, martes solo cena y lunes cerrado.
  La ficha avisa de que en el Día de Todos los Santos el horario podría ser
  distinto.
- **Accesibilidad publicada:** aseo adaptado y aparcamiento adaptado para sillas
  de ruedas. De la entrada y los asientos no publica nada, y la web no lo afirma.
- **Distintivos de la ficha:** negocio de propietarias mujeres y espacio amable
  con las personas LGBTQ+.
- **Carta:** sin precios, porque la ficha no los publica. Los platos salen de las
  fotos del perfil y de las reseñas: pastela, cuscús de pollo, tajín de verduras
  con garbanzos, pastas marroquíes (con bandeja marcada «Sin Gluten»), pollo
  frito con patatas, té con hierbabuena y el menú diario que anuncia el rótulo de
  la fachada.
- **Reseñas:** las tres que Google destaca, todas de 5★, copiadas literalmente.
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs la-sultana` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).

## Comandos

```bash
bun run --filter la-sultana dev
bun run --filter la-sultana build
bun run --filter la-sultana typecheck
node scripts/check-site-content.mjs la-sultana
```

El dominio previsto es `https://la-sultana.vercel.app/`.
