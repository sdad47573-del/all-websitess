# Panadería Brillante — Centro, Córdoba

Web estática en Astro para **Panadería Brillante** («Panadería El Brillante · Confitería»), en la Ronda de la Manca, 4 (14010 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Brillante
- Dirección: Ronda de la Manca, 4 · Centro · 14010 Córdoba
- Categoría: panadería
- Valoración: 4,5/5 con 39 reseñas
- Teléfono: 957 44 19 53
- Horario: lunes a viernes 6:00–15:00 y 18:00–20:00; sábado 8:00–15:00; domingo cerrado
- Accesibilidad: acceso para sillas de ruedas (la ficha no dice nada del aparcamiento adaptado)
- Feature id: `0xd6cdf81430929ad:0x80d7e18e923c247b`
- Place ID: `ChIJrSkJQ4HfbA0ReyQ8ko7h14A`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale del rótulo («Panadería El Brillante · Confitería»), de las fotos del perfil (vitrina, bandejas de dulces, tarta con dedicatoria) y del cartel de empanadas del obrador La Abuela Luisa que hay en el local, además de las reseñas (pitufos de jamón, tarta, pan).

Las fotos del perfil mezclan imágenes del local con fotos promocionales o de stock (troncos de Navidad con marca de agua, café con granos, torrijas, roscón). La web usa solo las del local: interior, rótulo, bandeja de dulces, tarta y cartel de empanadas.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-brillante
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. La bandeja de dulces se usa en la portada y el interior, el rótulo, la tarta y el cartel de empanadas en la galería. La bandeja genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, encargos de empanadas y tartas, y accesibilidad con el establecimiento.
