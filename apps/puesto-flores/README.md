# Puesto de Flores · Ciudad Lineal · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Puesto de Flores** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Puesto de Flores · **Categoría:** Floristería
- **Dirección:** Calle de Santa Irene, s/n, 28017 Madrid (distrito de Ciudad Lineal)
- **Plus code:** C992+83 Madrid (completo 8CG8C992+83) · **Coords:** 40.4183687, -3.6497667
- **Ficha:** `0xd422f590ac691db:0x934374a9fd1d864d` · `/g/11hbk53dn8` ·
  reseñas `ChIJ25HGClkvQg0RTYYd_al0Q5M`
- **Teléfono:** la ficha no publica ninguno → la web oculta los botones de llamada
  y solo ofrece indicaciones y mapa · **Sin web propia**
- **Valoración:** 4,6/5 con 41 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** todos los días de 8:30 a 19:00, de lunes a domingo
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción literal (con sus erratas):** «Kiosko de Flores fundado hace 65 años.
  Disponemos de todo tipo de flor cortada. Hacemos ramos de novia y centros de todo
  tipo.» (texto completo en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  8 verticales + 2 apaisadas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin teléfono, sin extractos de reseñas, sin
accesibilidad, sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/puesto-flores
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
