# La Brasa Cornellà · Cornellà de Llobregat · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Brasa Cornellà** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** La Brasa Cornellà · **Categoría:** Restaurante (única publicada)
- **Dirección:** Ctra. del Prat, 22 · 08940 Cornellà de Llobregat (Barcelona)
- **Plus code:** 932G+JP Cornellà de Llobregat (completo 8FH4932G+JP) ·
  **Coords:** 41.3515689, 2.0768554
- **Ficha:** `0x12a49943e1712b21:0x7c3b92310f5a8ad1` · `/g/11yr4df6yk` ·
  reseñas `ChIJIStx4UOZpBIR0YpaDzGSO3w`
- **Teléfono:** 933 77 52 71 (`tel:+34933775271`) · **Sin web propia**
- **Reservas:** la ficha muestra la acción «Reservar una mesa» →
  `https://www.google.com/maps/reserve/v/dine/c/oFED85Jd3I4`
- **Valoración:** 4,7/5 con 102 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** lunes cerrado; mar 9:30–17:00; mié y jue 9:30–23:00;
  vie 9:30–24:00; sáb 11:00–24:00; dom 11:00–17:00
- **Accesibilidad:** acceso, aseo y asientos adaptados; sin dato de aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  2 panorámicas, 4 apaisadas y 4 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/la-brasa-cornella
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
