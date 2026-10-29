# Panadería El Portillo S.L. — Córdoba

Web estática en Astro para **Panadería El Portillo S.L.**, en el Extrarradio Llanos del Castillo, 1B (14005 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería El Portillo S.L.
- Dirección: Extrarradio Llanos del Castillo, 1B · 14005 Córdoba
- Categoría: panadería
- Valoración: 4,4/5 con 697 reseñas
- Teléfono: 957 32 91 29
- Horario: lunes a jueves de 6:00 a 15:00; viernes y sábados de 6:00 a 19:00; domingos de 7:00 a 19:00
- Accesibilidad: acceso para sillas de ruedas y aparcamiento adaptado
- Feature id: `0xd6d273d41bfebd5:0xd7ae8c6f453abd30`
- Place ID: `ChIJ1eu_QT0nbQ0RML06RW-Mrtc`

La ficha **no publica web propia, correo, redes sociales, carta ni precios**, y no indica métodos de pago ni reparto. El mostrador recoge lo que muestran las fotos del perfil (fachada con el toldo de desayunos, entrada con el rótulo de El Horno de Juan, vitrinas de confitería, mesas con café y tartas, gofre con helado y bandejas de dulces) y lo que cuentan las reseñas, sin importes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-el-portillo
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada, la entrada, las vitrinas, las mesas, el gofre y varias bandejas de bollería y dulces. La fachada se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, terraza y accesibilidad con el establecimiento.
- Si el negocio facilita web o redes, añadirlos en `src/data/site.ts`.
