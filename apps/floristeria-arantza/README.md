# Floristeria Arantza Art Floral · Carrer de Biscaia · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Arantza Art Floral** publica en su ficha de Google Maps (consultada el 18 de
octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Arantza Art Floral · **Categoría:** Floristería
- **Dirección:** Carrer de Biscaia, 329, Sant Andreu, 08027 Barcelona
- **Plus code:** C58Q+3J Barcelona · **Coords:** 41.4151281, 2.1890756
- **Ficha:** `0x12a4a32955acb373:0x393788ec3b134f63` · `/g/1tdsm37h`
- **Teléfonos:** 625 13 60 36 (Arantza) y 628 47 80 53 (Laura) · **Sin web propia**
- **Valoración:** 4,5/5 con 91 reseñas; destaca 3 extractos literales (5, 4 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–vie 9:00–20:00; sáb 9:00–14:00; dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas y aparcamiento adaptado disponibles.
  Además: negocio de propietarias mujeres y amigable con la comunidad LGBTQ+
- **Descripción del titular:** literal, por párrafos (arreglos de flor natural y seca,
  plantas de interior y exterior, complementos, punto de paquetes UPS/GLS/iNPOST/PAACK)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 4 apaisadas
  y 6 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-arantza
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
