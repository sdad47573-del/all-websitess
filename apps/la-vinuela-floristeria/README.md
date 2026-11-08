# La Viñuela Floristeria · Avenida de Libia · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Viñuela Floristeria** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** La Viñuela Floristeria (tal como lo publica la ficha, sin tilde en «Floristeria») · **Categoría:** Floristería
- **Dirección:** Avenida de Libia (sin número de portal), Levante, 14010 Córdoba
- **Plus code:** V6PP+WJ Córdoba · **Coords:** 37.8873155, -4.7633838
- **Ficha:** `ChIJ7btKr4bfbA0Rp580JWO0QX4` · `/g/11cmg19zy7`
- **Teléfono:** 957 25 96 91 (`tel:+34957259691`) · **Sin web propia**
- **Valoración:** 2,7/5 con 61 reseñas (sin extractos literales en el endpoint)
- **Horario:** dos turnos lunes y de miércoles a viernes (9:00–13:30 y 16:00–20:00);
  martes solo mañana (9:00–13:30); sábado 9:00–14:00; domingo 9:00–13:30
- **Accesibilidad:** aparcamiento adaptado para sillas de ruedas no disponible (única
  entrada que publica la ficha)
- **Descripción literal:** «Una de las primeras Floristerías de Córdoba, siempre tratando de ayudar a los clientes»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 panorámica
  y 9 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/la-vinuela-floristeria
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
