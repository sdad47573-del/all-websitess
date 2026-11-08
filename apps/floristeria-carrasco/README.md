# Floristeria Carrasco · Llobregós · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Carrasco** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Carrasco · **Categoría:** Floristería
- **Dirección:** Carrer del Llobregós, 149, Horta-Guinardó, 08032 Barcelona
- **Plus code:** C5F4+G5 Barcelona · **Coords:** 41.4238129, 2.1554838
- **Ficha:** `ChIJrf00g029pBIRO2o0NtpIkbg` · `/g/1td3_b14`
- **Teléfono:** 934 20 64 76 (`tel:+34934206476`) · **Sin web propia**
- **Valoración:** 4,4/5 con 82 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–jue (9:30–14:00 y 17:00–20:00); vie de 9:30 a 20:00;
  sáb de 9:00 a 13:45; dom cerrado
- **Accesibilidad:** acceso disponible; sin aparcamiento adaptado
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-carrasco
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
