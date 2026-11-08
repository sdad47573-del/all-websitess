# Bar Restaurant Pinedes · Marmellar · Tarragona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Bar Restaurant Pinedes** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Bar Restaurant Pinedes · **Categoría:** Bar restaurante (única publicada)
- **Dirección:** Carrer de la Generalitat, Camí de Pinedes Altes, 5 · 43718 Marmellar (Tarragona)
- **Plus code:** 9G8J+V6 Marmellar (completo 8FH39G8J+V6) ·
  **Coords:** 41.3672193, 1.5305659
- **Ficha:** `0x12a473ba14ca3f99:0x773434a07bad4a09` · `/g/11nq8xc7xw` ·
  reseñas `ChIJmT_KFLpzpBIRCUqte6A0NHc`
- **Teléfono:** 622 91 07 21 (`tel:+34622910721`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Descripción del titular:** desayunos, bocadillos, tapas y platos combinados; local y terraza
  (copiada literalmente en la portada)
- **Valoración:** 4,6/5 con 29 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (4, 1 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** martes cerrado; lun y mié–vie 8:30–21:00; sáb–dom 9:00–21:00
- **Accesibilidad:** asientos adaptados disponibles; sin dato de acceso, aseo ni aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin carta, precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/bar-restaurant-pinedes
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
