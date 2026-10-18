# Restaurante Pizzería Montevideo Despí · Sant Joan Despí · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurante Pizzería Montevideo Despí** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurante Pizzería Montevideo Despí · **Categorías:** Restaurante uruguayo, Restaurante
- **Dirección:** Carrer Major, 75 · 08970 Sant Joan Despí (Barcelona)
- **Plus code:** 9392+6Q Sant Joan Despí (completo 8FH49392+6Q) ·
  **Coords:** 41.3681044, 2.0519395
- **Ficha:** `0x12a49bf33564bb97:0xf5e53ce51310abd6` · `/g/11t3c_8763` ·
  reseñas `ChIJl7tkNfObpBIR1qsQE-U85fU`
- **Teléfono:** 932 53 81 57 (`tel:+34932538157`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Distintivo:** «Se admiten perros»
- **Valoración:** 4,3/5 con 1152 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (5, 5 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** lun–vie 8:00–24:00; sáb 8:30–24:00; dom 8:30–17:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurante-pizzeria-montevideo-despi
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
