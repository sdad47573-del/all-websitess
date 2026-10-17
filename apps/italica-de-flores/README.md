# Itálica de Flores S.L. · Calle Metalurgia · Sevilla

Web informativa de una sola página (Astro, estática) con los datos que
**Itálica de Flores S.L.** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Itálica de Flores S.L. · **Categoría:** Floristería
- **Dirección:** Calle Metalurgia, 53, Distrito Norte, 41007 Sevilla
- **Plus code:** C26V+FQ Sevilla (completo 8C9CC26V+FQ) · **Coords:** 37.4112403, -5.9555616
- **Ficha:** `ChIJNYbwqzZpEg0REFdhp64RfHY` · `/g/1tg6ltc1`
- **Teléfono:** 954 35 71 07 (`tel:+34954357107`) · **Sin web propia**
- **Reseñas:** la ficha enlaza 18 reseñas, pero no publica nota media ni deja ver
  los textos en su vista previa: no se reproduce ninguna media ni ningún extracto
- **Horario:** turno único lun–vie (7:00–15:00); sáb 8:00–11:00; dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción:** la ficha no publica descripción del titular.
- **Fotos:** la ficha no publica fotografías (su galería solo muestra Street View),
  así que la web no tiene galería: la portada usa una tarjeta tipográfica propia
  (`public/og.svg`, rasterizada a `public/og.jpg` para los metadatos).

Lo que la ficha no publica no se inventa: sin nota media, extractos, descripción,
fotos, catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/italica-de-flores
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
