# Nueva Esperanza — Panadería y confitería, Nueva Málaga

Web estática en Astro para **NUEVA ESPERANZA | Panadería**, en la calle Magistrado Salvador Barbera, 5, local 3 (Nueva Málaga, Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «La carta», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: NUEVA ESPERANZA | Panadería
- Dirección: C. Magistrado Salvador Barbera, 5, Loc 3 · Bailén-Miraflores · 29010 Málaga
- Categorías: panadería, restaurante de comida rápida y comida a domicilio
- Teléfono / WhatsApp: 662 47 27 68
- Valoración: 4,1/5 con 23 reseñas
- Horario: L–J 7:00–21:00 · V 7:30–20:30 · S–D 8:00–20:30
- Accesibilidad: acceso y aseo adaptados sí; asientos adaptados no
- Feature id: `0xd72f70fd0e37545:0xd6ad0a252a43d6a8`
- Place ID: `ChIJRXXj0A_3cg0RqNZDKiUKrdY`
- Instagram: [@nuevaesperanzapanaderia](https://www.instagram.com/nuevaesperanzapanaderia/)
- Reparto: [Uber Eats](https://www.ubereats.com/es/store/panaderia-y-confiteria-nueva-esperanza/8nT_cxPVWDiGuIqMHejYtQ)

La ficha **no publica carta propia, precios de tienda ni web**. La carta reproduce el menú de Uber Eats del establecimiento (octubre de 2026), con su aviso de que los precios de tienda pueden ser distintos. La pizarra de la fachada anuncia pan de soja, olívica y sin gluten; la casa indica que elabora pan, dulces y bollería desde 1988 y ofrece dulces para eventos, encargos por WhatsApp y catering.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs nueva-esperanza-panaderia
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió seis fotos: la fachada, un café con tarta de merengue, un pastel de crema y galleta Lotus, una tarta de cumpleaños con nombre, bollos envasados de otra marca y un tarro de miel. Se usan las tres primeras; la tarta de cumpleaños no se publica por incluir un nombre y las otras dos son productos ajenos. El café con tarta se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, precios de tienda y accesibilidad con el establecimiento.
