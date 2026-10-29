# Panadería Pastelería Peinado — Panadería, Cruz de Humilladero (Málaga)

Web estática en Astro para **Panadería Pastelería Peinado**, panadería y pastelería artesanal en la Calle Pedro Gómez Chaix, 3 (Cruz de Humilladero, 29007 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», franja de pedidos por WhatsApp, galería con las fotos de Google Maps, valoración, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Pastelería Peinado
- Dirección: Calle Pedro Gómez Chaix, 3 · Cruz de Humilladero · 29007 Málaga
- Categorías: panadería y pastelería
- Teléfono: 952 39 58 00
- WhatsApp de pedidos de roscos de reyes: 639 73 77 62 (lo publica la ficha)
- Valoración: 4,7/5 con 70 reseñas
- Horario: L–V 8:00–20:30 · S 8:00–15:00 · D 8:00–14:30
- Accesibilidad: acceso para sillas de ruedas; la ficha indica que no hay aparcamiento accesible
- Plus code: 8C8QPH85+XR
- Feature id: `0xd72f775bad87339:0xd9cd900a8641fbd5`
- Place ID: `ChIJOXPYunX3cg0R1ftBhgqQzdk`
- Otra tienda de la casa (según la ficha): C/ del Ciprés, 2, frente a Carlos Haya

La ficha **no publica web propia, carta ni precios**, así que la web no los afirma. El rótulo de la fachada, visible en la galería, anuncia la casa desde 1994; el dato se menciona como lo que es, lo que dice el letrero.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla de horario y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-pasteleria-peinado
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada con el rótulo, la vitrina de donuts y roscas, las cañas de crema, el obrador con los bollos formados, las hogazas y los bollos de pan, las roscas de reyes, la vitrina de berlinas y napolitanas, la masa de hogazas marcada antes de hornear y las magdalenas. Se usan nueve en la portada (la fachada es el hero y las roscas abren la galería); se descarta solo la foto de la masa cruda, que repite el motivo del obrador. La imagen de `public/og.jpg` (1200 × 630) sale de las roscas de reyes.

Las fotos se muestran como información del establecimiento y se identifican como procedentes de Google Maps.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento, y que el WhatsApp de pedidos sigue activo.
