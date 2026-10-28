# Panadería confitería El Cautivo — Carlos Haya, Málaga

Web estática en Astro para **Panadería confitería El Cautivo**, en la avenida de Carlos Haya, 192 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería confitería El Cautivo
- Dirección: Av. de Carlos Haya, 192 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Teléfono: 951 73 15 16
- Valoración: 4,7/5 con 23 reseñas
- Horario: L–J 8:30–15:00 y 17:00–20:00 · V 8:30–15:00 · S 9:00–14:00 · D cerrado
- Accesibilidad: acceso para sillas de ruedas sí; aparcamiento adaptado no
- Feature id: `0xd72f715d02f4395:0x8c48b19c4381d89a`
- Place ID: `ChIJlUMv0BX3cg0RmtiBQ5yxSIw`

La ficha **no publica carta, precios, web propia, correo ni métodos de pago**. El mostrador recoge lo que anuncian el rótulo y el toldo de la fachada (panadería, confitería, comestibles, charcutería, congelados y venta de hielo) y lo que muestran las fotos del perfil: bizcocho, pasteles de chocolate, mantecados y roscos envasados, quesos de Santa María del Cerro, fruta y melones. No se muestran importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-confiteria-el-cautivo
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada, el expositor de fruta, fresas, cerezas, quesos, bizcocho, una tabla de dulces envasados, aguacates, sandías y uvas. Se usan cinco (fachada, fruta, quesos, bizcocho y dulces); las fotos de producto suelto no aportan al conjunto. La fachada se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
