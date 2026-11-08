# La Tasqueta de Cal Miguelin · El Pla del Penedès · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Tasqueta de Cal Miguelin** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** La Tasqueta de Cal Miguelin · **Categoría:** Restaurante (única publicada)
- **Dirección:** Carrer Sants Abdón i Senen, 17 · 08733 El Pla del Penedès (Barcelona)
- **Plus code:** CP95+2V El Pla del Penedès (completo 8FH3CP95+2V) ·
  **Coords:** 41.4175773, 1.7096256
- **Ficha:** `0x12a47ada1a1c454f:0xfc9406fb9be7cf4b` · `/g/11b8jd1762` ·
  reseñas `ChIJT0UcGtp6pBIRS8_nm_sGlPw`
- **Teléfono:** 938 98 84 42 (`tel:+34938988442`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Descripción del titular:** campeones de España 2024 de bocatas; desayunos de tenedor,
  cocina casera (copiada literalmente en la portada)
- **Distintivo:** «Se admiten perros»
- **Valoración:** 4,3/5 con 1101 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (5, 4 y 4/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** domingo cerrado; lun–sáb 7:00–17:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin carta, precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/la-tasqueta-de-cal-miguelin
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
