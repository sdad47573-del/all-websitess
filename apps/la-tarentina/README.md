# La Tarentina Floristería · Calle Mallorca · Sevilla

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Tarentina Floristería** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** La Tarentina Floristería (sin tilde, como en la ficha) · **Categoría:**
  Floristería
- **Dirección:** Avenida de Calle Mallorca, 21 (sin distrito publicado), 41003 Sevilla
- **Plus code:** 92VC+W4 Sevilla (completo 8C9P92VC+W4) · **Coords:** 37.3948539, -5.9796646
- **Ficha:** `ChIJoWweovhvEg0Raad98EOAePg` · `/g/11qpb_p1b5`
- **Teléfono:** 696 28 45 67 (`tel:+34696284567`) · **Sin web propia**
- **Valoración:** 4,8/5 con 77 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun, mié, jue y vie (mañana y 18:00–20:00; jue y vie la mañana
  cierra a las 14:30); mar y sáb solo mañana (10:00–14:00); dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible; aseo adaptado y asientos
  adaptados no disponibles (las tres entradas que publica la ficha)
- **Descripción literal (con sus erratas):** «Flores que convierten momentos en recuerdos.
  En nuestra floristería ponemos pasión , creatividad y mucho cariño en casa composición.
  Creamos Ramos de novias, decoracacion floral para bodas y eventos , ramos personalizados,
  centros de flores diseñados para ocasiones especiales…» (texto completo en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), las 10
  verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/la-tarentina
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
