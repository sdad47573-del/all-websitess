# Confitería Panadería Lochi — Panadería, Bailén-Miraflores (Málaga)

Web estática en Astro para **Confitería Panadería Lochi**, panadería y confitería en el C. Eugenio Gross, 11, Loc 1 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada tipográfica con ficha de datos, chips, «La casa», «Tres cosas de la casa», «El local» con tres vistas de Google Street View, valoración, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las tres vistas de Google Street View de la esquina.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Confitería Panadería Lochi
- Dirección: C. Eugenio Gross, 11, Loc 1 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Valoración: 5,0/5 con 3 reseñas
- Horario: L–S 8:00–14:30 y 17:00–20:30 · D cerrado
- Teléfono / web / redes / accesibilidad: la ficha **no publica ninguno de estos datos**
- Plus code: 8C8QPHF7+FH
- Feature id: `0xd72f7a1a9f2ddc5:0xc52ef3e295c682c8`
- Place ID: `ChIJxd3yqaH3cg0RyILGleLzLsU`

La ficha está sin reclamar (Google ofrece «Reclamar esta empresa») y **no publica descripción, teléfono, web, redes sociales, carta, precios ni fotos del perfil**. Por eso la web no incluye ninguno de esos datos: solo dirección, horario, valoración, categorías y las vistas de la calle. La valoración se reproduce sin citar textos de reseñas.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla de horario y en las preguntas frecuentes.

## Imágenes

Google no devuelve fotos del perfil para esta ficha. La única imagen pública que la ficha asocia al negocio es el panorama de Google Street View `711zWEjRP_0JX3BD8dTC3g`, capturado el **19 de agosto de 2024**. Se descargaron tres vistas del mismo panorama (yaw 218,33 / 198,33 / 238,33):

```
https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=711zWEjRP_0JX3BD8dTC3g&yaw=218.33&pitch=1.5&thumbfov=95&w=1600&h=1000
```

En las vistas se reconoce la esquina y la planta baja del edificio donde está el local, pero **el rótulo no se lee**, así que la web no afirma qué dice. Se muestran siempre identificadas como Google Street View, con la fecha, y se advierte de que son imágenes del entorno y no del interior. No se usa ninguna imagen de otro perfil de Google. La imagen de `public/og.jpg` (1200 × 630) sale de la vista principal.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular, y un canal de contacto, en `src/pages/aviso-legal.astro` (la ficha no publica teléfono).
- Confirmar horario y accesibilidad con el establecimiento.
