# Bar Restaurant Cuenca · Sant Feliu de Llobregat · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Bar Restaurant Cuenca** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Bar Restaurant Cuenca · **Categorías:** Restaurante familiar, Bar restaurante,
  Restaurante mediterráneo
- **Dirección:** Rambla Marquesa de Castellbell, 100a · 08980 Sant Feliu de Llobregat (Barcelona)
- **Plus code:** 92PX+H6 Sant Feliu de Llobregat (completo 8FH492PX+H6) ·
  **Coords:** 41.3864477, 2.0480785
- **Ficha:** `0x12a49a35964ba0ad:0x69c3c7837615397e` · `/g/11bxf4mscq` ·
  reseñas `ChIJraBLljWapBIRfjkVdoPHw2k`
- **Teléfono:** 936 66 10 40 (`tel:+34936661040`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Distintivo:** «Brunch»
- **Valoración:** 4,6/5 con 768 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (5, 5 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** domingo cerrado; lun–sáb 8:30–17:00
- **Accesibilidad:** acceso, asientos y aparcamiento adaptados; sin dato de aseo
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/bar-restaurant-cuenca
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
