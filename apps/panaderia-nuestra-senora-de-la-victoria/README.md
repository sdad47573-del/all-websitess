# Panadería Nuestra Señora de la Victoria — San Millán, Málaga

Web estática en Astro para **Panadería Nuestra Señora de la Victoria**, en la calle San Millán, 3 (Distrito Centro, 29013 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Nuestra Señora de la Victoria
- Dirección: C. San Millán, 3 · Distrito Centro · 29013 Málaga
- Categoría: panadería
- Teléfono: 627 10 45 06
- Valoración: 4,9/5 con 263 reseñas
- Horario: L–V 8:00–15:00 · S 9:00–14:00 · D cerrado
- Accesibilidad: la ficha solo marca aparcamiento adaptado para sillas de ruedas
- Feature id: `0xd72f7bf2d652861:0x78a227e539a4c2c4`
- Place ID: `ChIJYShlLb_3cg0RxMKkOeUnong`

La ficha **no publica carta, precios, web propia, correo ni redes sociales**, y no indica métodos de pago ni reparto. El mostrador recoge lo que muestran las fotos del perfil (pan, bandeja de dulces cuadrados con azúcar y canela, roscones de Reyes en cajas, vitrinas de bollería, bocadillos, cafés y zumos) y lo que cuentan las reseñas, sin importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-nuestra-senora-de-la-victoria
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: dos de la fachada, los roscones en cajas, un bocadillo, la bandeja de dulces, una mesa de desayuno, el mostrador, la lista de bocadillos, un café con leche y más roscones. Se usan siete: la fachada en la portada y seis en la galería (rótulo, roscones, bocadillo, dulces de bandeja, mostrador y mesa de desayuno). La fachada genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
