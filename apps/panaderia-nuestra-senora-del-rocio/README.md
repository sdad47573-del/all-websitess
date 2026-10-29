# Panadería Nuestra Señora del Rocío — Cañada Real Soriana, Córdoba

Web estática en Astro para **Panadería Nuestra Señora del Rocío** («Ntra. Sra. Del Rocío»), en la Cañada Real Soriana, 244 (14710 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Nuestra Señora del Rocío
- Dirección: Cañada Real Soriana, 244 · 14710 Córdoba
- Categoría: panadería
- Valoración: 4,5/5 con 457 reseñas
- Teléfono: 957 45 85 95
- Horario: lunes a viernes 6:30–15:00; sábado y domingo 7:00–14:30
- Accesibilidad: acceso para sillas de ruedas (la ficha no dice nada del aparcamiento adaptado)
- Feature id: `0xd6d2853014d583f:0x8cfa2ea79e789438`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale de las fotos del perfil (barras de pan, canutillos y tartaletas, bollos de chocolate, tartas de cumpleaños) y de las reseñas («el pan buenísimo y los dulces y pasteles también», «las mejores tartas que he probado en mi vida», «muy buena calidad y buen trato»).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-nuestra-senora-del-rocio
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. La fachada con el toldo se usa en la portada y, en la galería, el rótulo con el 244, la vitrina de tartas, la bollería de chocolate y una tarta de cumpleaños. La vitrina genera `public/og.jpg` (1200 × 630). Las demás (fachada con una persona delante, barras de pan, bandeja de dulces y otra tarta) quedan descargadas sin usar.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, encargos de tartas y accesibilidad con el establecimiento.
