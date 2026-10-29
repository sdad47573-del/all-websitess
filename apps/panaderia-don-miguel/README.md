# Panadería Don Miguel — Panadería, Cruz de Humilladero (Málaga)

Web estática en Astro para **Panadería Don Miguel**, panadería y confitería de barrio en el C. Corregidor Ruiz de Pereda, 1 (Cruz de Humilladero, 29006 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», galería con las fotos de Google Maps, valoración, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panaderia Don miguel
- Dirección: C. Corregidor Ruiz de Pereda, 1 · Cruz de Humilladero · 29006 Málaga
- Categoría: panadería
- Teléfono / web / redes: la ficha **no publica ninguno**
- Valoración: 5,0/5 con 6 reseñas
- Horario: L–J 8:15–14:30 y 17:15–20:30 · V 8:15–14:30 y 17:15–21:30 · S 8:30–14:35 y 17:30–20:30 · D 9:00–14:30
- Accesibilidad: acceso para sillas de ruedas
- Plus code: 8C8QPH62+HR
- Feature id: `0xd72f7feb556c65b:0x6cfca4e5002ed393`
- Place ID: `ChIJW8ZWtf73cg0Rk9MuAOWk_Gw`

La ficha **no publica precios ni carta**, así que la web no los afirma. Describe la casa como panadería que hornea pan cada mañana y ofrece bollos, dulces y tartas por encargo para cualquier ocasión, además de víveres, bebidas frías y un surtido de patatas y snacks de picar.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla de horario y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-don-miguel
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada con el rótulo «Panadería - Confitería Don Miguel», el interior con el mural del campo de trigo, croissants recién horneados, la vitrina con tartaletas y petits fours, la vitrina refrigerada con tarta de queso y carrot cake, el mostrador con el expositor de pan y la carro de baguettes, el obrador con la masa cruda del día, los dulces del mostrador y la zona de tienda con bebidas y snacks. Se usan ocho en la portada; la foto de la fachada es también la imagen de `public/og.jpg` (1200 × 630). Las fotos se muestran como información del establecimiento y se identifican como procedentes de Google Maps.

## Pendiente antes de publicar

- NIF/CIF, razón social y teléfono de contacto en `src/pages/aviso-legal.astro` (la ficha no publica teléfono).
- Confirmar horario, surtido y accesibilidad con el establecimiento.
