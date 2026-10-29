# Luz De Amor — Pastelería, Cruz de Humilladero (Málaga)

Web estática en Astro para **Luz De Amor**, pastelería artesanal en el Camino de San Rafael, 58 (Cruz de Humilladero, 29006 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», galería con las fotos de Google Maps, valoración, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Luz De Amor
- Dirección: Cmo de S. Rafael, 58 · Cruz de Humilladero · 29006 Málaga
- Categorías: pastelería, panadería, cafetería, tienda de magdalenas, tienda de postres y pastelería especializada en tartas nupciales
- Teléfono: 627 95 12 46
- Valoración: 5,0/5 con 74 reseñas
- Horario: L–V 8:30–22:00 · S 10:00–22:00 · D cerrado
- Accesibilidad: acceso, aseo y asientos adaptados para sillas de ruedas
- Plus code: 8C8QPH52+7V
- Feature id: `0xd72f76d60d291f9:0xc13227338a95f781`
- Place ID: `ChIJ-ZHSYG33cg0RgfeVijMnMsE`

La ficha **no publica carta, precios, página web ni redes sociales propias**, así que la web no afirma ninguno de esos datos. Describe la casa como pastelería artesanal especializada en tartas por encargo para cumpleaños, bodas y celebraciones, con tarta de queso al estilo San Sebastián, carrot cake y repostería casera, además de café, desayunos y meriendas, mesas para sentarse, wifi gratuito, entrada accesible y admisión de perros. Los pedidos se preparan con antelación y se recogen en tienda.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla de horario y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs luz-de-amor
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la vitrina con el rótulo de la casa, un rincón de mesas ante el muro de ladrillo rosa, una tarta de boda, una mesa de terraza con café y tarta, el mostrador con sus pizarras, un desayuno con fruta, una tarta de cumpleaños infantil, café con porción de tarta y unos syrniki con frutos rojos. Se usan ocho en la portada; la foto de la vitrina es también la imagen de `public/og.jpg` (1200 × 630). Las fotos de la galería se muestran como información del establecimiento y se identifican como procedentes de Google Maps.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, servicios y accesibilidad con el establecimiento.
