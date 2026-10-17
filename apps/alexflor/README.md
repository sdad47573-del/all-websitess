# ALEXFLOR tu florista personal | floristería en Málaga · Ciprés · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**ALEXFLOR tu florista personal | floristería en Málaga** publica en su ficha de Google Maps
(consultada el 17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** ALEXFLOR tu florista personal | floristería en Málaga · **Categoría:** Floristería
- **Dirección:** Calle del Ciprés, 2 (sin distrito publicado; zona Cruz de Humilladero,
  junto a Teatinos), 29010 Málaga
- **Plus code:** PHF2+3Q Málaga (completo 8CGRPHF2+3Q) · **Coords:** 36.7227483, -4.4480348
- **Ficha:** `ChIJH2dzkv_3cg0Rqr7qMbc3UP8` · `/g/11yppv4cvn`
- **Teléfono:** 638 98 91 59 (`tel:+34638989159`) · **Sin web propia**
- **Valoración:** 4,8/5 con 33 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto (solo la nota con el recuento y el enlace)
- **Horario:** lun, mar, jue y vie 10:00–20:00; mié 12:00–20:00; sáb 10:00–15:00;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción:** la ficha no publica descripción del titular (los textos con título que
  trae la respuesta pertenecen a las fotos de la galería, no se reproducen).
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 7 verticales
  y 3 panorámicas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin extractos, descripción, catálogo ni precios.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/alexflor
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
