# Floristería Baraka · Latina · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Baraka** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Baraka · **Categoría:** Floristería
- **Dirección:** «Floristería Baraka, Latina, 28011 Madrid» (distrito de Latina, sin
  calle ni número publicados)
- **Plus code:** C75C+VM Madrid (completo 8CG7C75C+VM) · **Coords:** 40.4097357, -3.7283299
- **Ficha:** `0xd4227ddfd12c14b:0x1f2b84bfc8054792` · `/g/11z6c2ndqm` ·
  reseñas `ChIJS8ES_d0nQg0RkkcFyL-EKx8`
- **Teléfono:** 657 80 86 14 (`tel:+34657808614`) · **Sin web propia**
- **Valoración:** 4,9/5 con 125 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** lunes cerrado; mar 10:00–19:30; mié 11:00–13:00 y 17:30–22:00;
  jue 15:00–21:00; vie 10:30–21:00; sáb 10:30–24:00; dom 0:00–10:00 y 10:30–13:00
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción literal (con sus erratas):** «Baraka es una floristería en Puerta del
  Ángel, Madrid, especializada en ramos de flores frescas y detalles florales para
  regalar en cualquier ocasión. Ofrecemos flores a domicilio 24 horas en Madrid, con
  servicio de entrega urgente. Creamos cada ramo cuidando la combinación de flores,
  colores y presentación para que cada entrega sea una experiencia especial. 🌸»
  (texto completo en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  7 verticales + 3 apaisadas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin calle, sin extractos de reseñas, sin
accesibilidad, sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/flor-vivi
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
