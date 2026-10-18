# Restaurante braseria la Serreta del penedes · Sant Miquel d'Olèrdola · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurante braseria la Serreta del penedes** publica en su ficha de Google Maps
(consultada el 18 de octubre de 2026). Nombres y topónimos se copian literalmente,
tal como los publica la ficha.

## Datos de la ficha

- **Nombre:** Restaurante braseria la Serreta del penedes · **Categorías:**
  Restaurante + chuletas + comida rural + mediterráneo
- **Dirección:** Cami la serreta, s/n · 08734 Sant Miquel d'Olèrdola (Barcelona)
- **Plus code:** 8PF9+MP St. Miquel d'Olèrdola · **Coords:** 41.3241932, 1.7192906
- **Ficha:** `0x12a479a1cf8cf167:0x8f6764afdc23f43` · `/g/1hc6ppl9q` ·
  reseñas `ChIJZ_GMz6F5pBIRQz_C_Up29gg`
- **Teléfono:** 696 36 36 50 (`tel:+34696363650`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4 sobre 5 con 747 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, con puntuaciones de 4, 4 y 5/5, sin nombre de autor (la vista
  previa solo publica el perfil)
- **Horario:** lunes a miércoles cerrado; jue 11:00–17:00; vie 11:00–20:00;
  sáb 9:00–18:00; dom 11:00–17:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurante-braseria-la-serreta
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
