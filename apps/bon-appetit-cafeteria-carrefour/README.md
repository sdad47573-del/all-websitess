# Bon Appétit · Cafeteria Carrefour Andorra 2000

Web de una sola página (Astro) para **Bon Appétit**, cafetería del centro
comercial Carrefour Andorra 2000, en la calle Sardana, 22, de Andorra la Vella
(AD500).

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, horario de 8:30 a 20:00 todos
  los días, nota 3,5 con 129 reseñas), las cinco categorías que publica Google y
  el menú que se lee en el cartel de la vitrina (12,50 €).
- `src/pages/index.astro`: inicio (hero, la casa, el menú, galería, valoración,
  visita y preguntas), JSON-LD `CafeOrCoffeeShop`, `Menu` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (Andorra).
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps (fachada, comedor, vitrina, bandejas, postres y pasteles).
- `src/styles/global.css`: estilos propios (verde profundo, terracota y crema;
  Archivo + Karla).

## Fuentes

- Ficha de Google Maps: `0x12a58b740d31a297:0x84f745fe7dbda7f8`
  (42.5064585, 1.5300457).
- La ficha no publica teléfono, web, descripción ni carta: la web no ofrece botón
  de llamada y el único precio es el del menú (12,50 €) fotografiado en la
  vitrina.
- Categorías de Google: cafetería, restaurante de desayunos, comida a domicilio,
  bar de tapas y restaurante vegano. La web las cita sin deducir platos.
- Accesibilidad según la ficha: acceso para sillas de ruedas.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es
`https://bon-appetit-cafeteria-carrefour.vercel.app`. El pie de página acredita a
**Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NRT, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
