# Panadería Torrecillas — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería Torrecillas**, en la avenida del Arroyo de los Ángeles, 120 (Bailén-Miraflores, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, una reseña, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Torrecillas
- Dirección: Av. del Arroyo de los Ángeles, 120 · Bailén-Miraflores · 29011 Málaga
- Categoría: panadería
- Teléfono: 951 99 41 95
- Valoración: 4,7/5 con 57 reseñas
- Horario: L–V 7:30–15:00 · S 8:00–14:30 · D cerrado
- Accesibilidad: acceso para sillas de ruedas sí; aparcamiento adaptado no
- Feature id: `0xd72f7a7d5dd014d:0x384c6641a98a4496`
- Place ID: `ChIJTQHd1af3cg0RlkSKqUFmTDg`

La ficha **no publica carta, precios, web propia, correo ni métodos de pago**. El mostrador recoge lo que anuncia el rótulo de la fachada (panadería, confitería, bocatería, charcutería y elaboración propia), lo que muestran las estanterías (chapatas, barras vienas, molletes, pitifos, malagueñas, pan multi cereales y pan por cuartos y medios kilos) y el mostrador de dulces (napolitanas, donuts, pasteles y tartas). No se muestran importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-torrecillas
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió cinco fotos: dos de la fachada, las estanterías de pan, el mostrador de dulces y una tarta de cumpleaños. Se usan cuatro (la tarta no se publica por incluir un nombre); la fachada con el toldo se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
