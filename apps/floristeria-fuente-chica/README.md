# Floristería · Calle Fuente Chica · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería · **Categoría:** Floristería
- **Dirección:** Calle Fuente Chica, 22 (ALM 1 B;1), Fuencarral-El Pardo, 28034 Madrid
- **Plus code:** F8W5+6P Madrid (completo 8CGRF8W5+6P) · **Coords:** 40.4956172, -3.6907135
- **Ficha:** `ChIJQUl5ZtgrQg0RzsfvEM3L_dI` · `/g/1q5bmy18z`
- **Teléfono:** 917 34 10 10 (`tel:+34917341010`) · **Sin web propia**
- **Valoración:** 4,6/5 con 9 reseñas; destaca 2 extractos literales (5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos todos los días lun–dom (10:00–14:00 y 17:00–20:00)
- **Accesibilidad:** la ficha no publica datos
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 9 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 panorámica,
  1 apaisada y 7 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-fuente-chica
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
