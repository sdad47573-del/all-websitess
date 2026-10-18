# Restaurant El Celler · Olesa de Bonesvalls · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant El Celler** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurant El Celler · **Categorías:** Cocina catalana + desayunos
  + mediterráneo
- **Dirección:** Carrer Fitó, 20 · 08795 Olesa de Bonesvalls (Barcelona)
- **Plus code:** 8RVR+7M Olesa de Bonesvalls · **Coords:** 41.3431628, 1.8416656
- **Ficha:** `0x12a480adec4ffaed:0x53feefcaac925558` · `/g/1tf04tf6` ·
  reseñas `ChIJ7fpP7K2ApBIRWFWSrMrv_lM`
- **Teléfono:** 667 56 45 77 (`tel:+34667564577`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,4/5 con 571 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, con puntuaciones de 5, 5 y 4/5, sin nombre de autor (la vista
  previa solo publica el perfil)
- **Horario:** todos los días 9:00–16:00
- **Accesibilidad:** aseo adaptado; sin dato de acceso, aparcamiento ni asientos
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-el-celler
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
