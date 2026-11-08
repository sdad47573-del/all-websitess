# Bar-Restaurant La Esquinita · Cornellà de Llobregat · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Bar-Restaurant La Esquinita** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Bar-Restaurant La Esquinita · **Categorías:** Tapas + Bar
- **Dirección:** Carrer de Mossèn Jacint Verdaguer, 90 · 08940 Cornellà de
  Llobregat (Barcelona)
- **Plus code:** 933F+FW Cornellà de Llobregat · **Coords:** 41.3536287, 2.0747566
- **Ficha:** `0x12a4995a944b591f:0x28690b0ce22f1826` · `/g/12qh9klpw` ·
  reseñas `ChIJH1lLlFpRpBIRJhgv4ILDSmg`
- **Teléfono:** 934 74 30 13 (`tel:+34934743013`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,4/5 con 377 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** domingo cerrado; lun–jue 7:30–21:00; vie 7:30–23:30;
  sáb 9:00–17:00
- **Accesibilidad:** aparcamiento adaptado; sin dato de acceso, aseo ni asientos
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  3 panorámicas, 3 apaisadas y 4 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/bar-restaurant-la-esquinita
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
