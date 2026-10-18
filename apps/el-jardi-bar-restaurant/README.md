# El Jardí, Bar restaurant · Sant Quintí de Mediona · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**El Jardí, Bar restaurant** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** El Jardí, Bar restaurant · **Categorías:** Restaurante + desayunos
  + cafetería + sin gluten + snack bar
- **Dirección:** Carrer de Pi i Margall, 14 · 08777 Sant Quintí de Mediona
  (Barcelona)
- **Plus code:** FM77+65 Sant Quintí de Mediona · **Coords:** 41.4630638, 1.6629609
- **Ficha:** `0x12a46f9bbcdd6155:0x795475aaaf953bff` · `/g/11c3x2sxkq` ·
  reseñas `ChIJVWHdvJtvpBIR_zuVr6p1VHk`
- **Teléfono:** 665 16 91 73 (`tel:+34665169173`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,2/5 con 109 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, con puntuaciones de 5, 5 y 1/5, sin nombre de autor (la vista
  previa solo publica el perfil)
- **Horario:** lunes 9:00–16:00; martes cerrado; mié–jue 9:00–21:00;
  vie–sáb 9:00–23:30; dom 9:00–18:00
- **Accesibilidad:** acceso, aparcamiento y aseo adaptados; sin dato de asientos
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/el-jardi-bar-restaurant
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
