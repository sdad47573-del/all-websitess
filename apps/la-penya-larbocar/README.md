# La Penya L’Arboçar · L’Arboçar · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Penya L’Arboçar** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** La Penya L’Arboçar · **Categoría:** Bar restaurante (única publicada)
- **Dirección:** Camí del font del Cuscó, s/n · 08734 L’Arboçar (Barcelona)
- **Plus code:** 8QM7+9W L’Arboçar · **Coords:** 41.3334979, 1.7648744
- **Ficha:** `0x12a47f1c9adc43d1:0x8f2fbd3a7b30d43e` · `/g/11jy9j16kc` ·
  reseñas `ChIJ0UPcmhx_pBIRPtQwezq9L48`
- **Teléfono:** 619 07 04 99 (`tel:+34619070499`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,6/5 con 105 reseñas; la vista consultada no incluye extractos
  destacados, así que no se reproduce ninguna cita
- **Horario:** lunes a miércoles cerrado; jueves a domingo 9:00–15:00
- **Accesibilidad:** acceso, aseo y asientos adaptados; sin dato de aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/la-penya-larbocar
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
