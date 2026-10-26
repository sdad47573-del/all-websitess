# Restaurante Costa Vicentina — marisco y brasa en la Baixa (Lisboa)

Web estática en Astro para **Restaurante Costa Vicentina**, en la R. dos Correeiros, 37, 1100-166 Lisboa (São Nicolau, Baixa pombalina). El local se anuncia hoy en la fachada como **BonaVentura Wine & Food**, mientras Google mantiene el nombre histórico. Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante Costa Vicentina (rótulo actual: BonaVentura Wine & Food)
- Dirección: R. dos Correeiros, 37 · 1100-166 Lisboa
- Categoría: restaurante
- Teléfono: 21 346 0905 (+351)
- Valoración: 2,5/5 con 312 reseñas
- Horario: de martes a domingo, 11:45–23:45; lunes cerrado
- Accesibilidad: el único dato publicado es negativo (no hay aparcamiento adaptado)
- Precio medio: unos 15 € por persona (guías locales)

La ficha **no publica carta con precios ni web operativa**: el dominio antiguo (`costa-vicentina.pt`) no responde y la web que enlaza Google es un entorno de pruebas de agencia, así que no se enlaza.

## La carta

Sin carta publicada. Los apartados salen de las fotos del perfil (arroz de marisco en paellera, polvo grelhado con patata y cebolla, cataplana de cobre con almejas y mejillones, bife con patatas fritas), de la pizarra de la calle (parrillada mixta, carnes a la brasa) y de las reseñas (mexilhões), además de aceitunas, pan, vino, cerveza y sangría.

## Fotos

Diez fotografías del perfil público en Google Maps: terraza con manteles de azulejo, arroz de marisco, polvo grelhado, cataplana, jarra de cerveza y copa de vino, fachada de BonaVentura de noche y de día, pizarra en la calle, comedor con el reloj de pared y el bife con patatas que abre la portada.

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://restaurante-costa-vicentina.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local la relación entre Costa Vicentina y BonaVentura (mismo local, cambio de rótulo) y si conviene titular la web con el nombre nuevo.
- Revisar el dato de accesibilidad con el local: Google solo marca que no hay aparcamiento adaptado.
- Confirmar carta, precios y servicio de reparto antes de publicar.

## Comandos

```bash
bun install          # desde la raíz del monorepo
bunx astro dev       # desarrollo
bunx astro build     # genera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` no funciona en este repo porque usa TypeScript 7; se valida con `tsc`.

## Crédito

El pie de página enlaza a **Sur Digital** → https://sur-digital.vercel.app/
