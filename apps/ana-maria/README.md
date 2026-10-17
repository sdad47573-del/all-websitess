# Floristería Ana María · Leganés · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Ana María** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Ana María · **Categoría:** Floristería
- **Dirección:** Plaza de España, 2, local 4c, 28911 Leganés, Madrid
  (sin distrito publicado)
- **Plus code:** 86HM+7M Leganés (completo 8CG786HM+7M) · **Coords:** 40.3281891, -3.7657649
- **Ficha:** `0xd418b81ffb5534d:0x26343330aee6a0b5` · `/g/11why6vhkf` ·
  reseñas `ChIJTVO1_4GLQQ0RtaDmrjAzNCY`
- **Teléfono:** 616 81 65 52 (`tel:+34616816552`) · **Sin web propia**
- **Valoración:** 4,9/5 con 104 reseñas; 2 extractos literales (5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun, mié y vie 10:00–24:00; mar, jue y sáb 0:00–8:30 y 10:00–20:30;
  dom 10:30–15:00 (tal cual lo publica la ficha)
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción literal (con sus erratas):** «Floristería con flores naturales y
  artificiales, macetas. Hacemos: Arreglos de ramos, Regalos, Flores cementerio,
  ramos de boda, flores para celebraciones, y mucho más envíos gratis también
  tenemos, gracias» (texto completo en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  6 verticales + 3 apaisadas + 1 panorámica, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin distrito, sin accesibilidad,
sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/ana-maria
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
