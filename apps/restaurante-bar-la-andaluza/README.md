# Restaurante Bar La Andaluza · Vilafranca del Penedès · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurante Bar La Andaluza** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurante Bar La Andaluza · **Categorías:** Bar de tapas, Fábrica de cerveza
- **Dirección:** Pza. Syrah, s/n (al lado del hotel Basic) · 08734 Vilafranca del Penedès (Barcelona)
- **Plus code:** 8MMM+35 Vilafranca del Penedès (completo 8FH38MMM+35) ·
  **Coords:** 41.332639, 1.6829313
- **Ficha:** `0x12a4793ccc97efbf:0xbc0b61c62c67fa23` · `/g/11g0z5y0t_` ·
  reseñas `ChIJv--XzDx5pBIRI_pnLMZhC7w`
- **Teléfono:** 931 35 18 69 (`tel:+34931351869`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Descripción del titular:** menú diario y comida peruana auténtica los sábados
  (copiada literalmente en la portada)
- **Distintivo:** «Se admiten perros»
- **Valoración:** 4,3/5 con 233 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (5, 5 y 1/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** domingo cerrado; lun–jue 6:00–23:00; vie 6:00–16:00; sáb 9:00–16:00
- **Accesibilidad:** acceso, aseo y asientos adaptados; sin dato de aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin carta, precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurante-bar-la-andaluza
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
