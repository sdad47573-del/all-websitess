# Restaurant Cal Cassoles · Pacs del Penedès · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Cal Cassoles** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Cal Cassoles · **Categoría:** Restaurante mediterráneo (única publicada)
- **Dirección:** Maset dels Conills, s/n · 08796 Pacs del Penedès (Barcelona)
- **Plus code:** 8MXC+V4 Pacs del Penedès (completo 8FH38MXC+V4) ·
  **Coords:** 41.3497412, 1.6703571
- **Ficha:** `0x12a470aca444dc4b:0xb7997ab72da7b91f` · `/g/11bbrhtqsw` ·
  reseñas `ChIJS9xEpKxwpBIRH7mnLbd6mbc`
- **Teléfono:** 647 56 36 61 (`tel:+34647563661`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Descripción del titular:** a 2 km de Vilafranca; cocina mediterránea y de mercado;
  menú diario, calçotada y amplio aparcamiento (copiada literalmente en la portada)
- **Valoración:** 4,2/5 con 1273 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (5, 2 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** martes cerrado; resto de la semana 13:00–15:30
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-cal-cassoles
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
