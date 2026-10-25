# Restaurant L'Horta, Cuina Conscient

Web informativa de **Restaurant L'Horta, Cuina Conscient**, cocina mediterránea de temporada y pizzas en La Vall d'Uixó (Castelló). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Miquel V Arnau Abad, 6 · 12600 La Vall d'Uixó), teléfono (964 69 79 18), coordenadas (39.8209844, -0.2290967), categorías (restaurante, organizador de eventos, restaurante mediterráneo, pizzería), nota (4,6 con 1.150 reseñas) y horario.
- Horario de la ficha, que sí es partido: **comidas todos los días 13:30–16:00**; **cenas solo viernes y sábado 20:00–24:00 y domingo 20:00–23:00**. Entre semana por la noche cierra y no hay desayunos.
- Descripción del local tomada de la propia ficha de Google («producto fresco, de temporada, de autoproducción local y saludable», políticas medioambientales, conciliación y comedor como foro para artistas locales). Se parafrasea, con una cita corta entrecomillada.
- La ficha **no** tiene web propia ni carta ni precios. La sección «La mesa» recoge solo los platos fotografiados en el perfil (pizza de calabaza y bacon, pizza de pollo y verduras, pizza de Nutella, arroz con costilla y langostinos, croquetas gratinadas, patata con jamón y huevo, embutido con patata y encurtidos) más lo que citan las reseñas. La web lo advierte y no inventa importes.
- El **menú laboral** de mediodía está citado en sus redes sociales (Instagram y Facebook), no en la ficha; la web lo atribuye a esas fuentes y no publica precio ni platos concretos.
- Opciones **vegetarianas, veganas y sin gluten**: figuran en la ficha de Tripadvisor, no en la de Google. Se mencionan con esa atribución y se recomienda avisar al reservar.
- Accesibilidad tal como la marca Google: entrada, aseo y asientos adaptados. No marca aparcamiento propio ni plaza adaptada, y así se dice en las preguntas frecuentes.
- De las diez fotos de la ficha se descartó una: dos medias pizzas con una mano en el encuadre (redundante con las otras tres fotos de pizza).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha con `node scripts/fetch-maps-photos.mjs restaurant-l-horta`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la fachada nocturna.
- `siteUrl` (`https://restaurant-l-horta.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurant-l-horta
bun run typecheck   # dentro de apps/restaurant-l-horta
node scripts/check-site-content.mjs restaurant-l-horta
```
