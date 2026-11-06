# CMS de webs

Panel local para revisar y editar los datos de las webs de negocio de `apps/`
(las 638 landings con `src/data/site.ts`). Cliente en **SolidJS** (Vite) y API en
Bun. No es una web pública: el servidor escucha solo en `127.0.0.1`.

```bash
cd apps/cms
bun run dev     # cliente en http://127.0.0.1:4401 (API en 4400)
```

Para servir el build y la API juntos, en un solo puerto:

```bash
bun run build
bun run start   # http://127.0.0.1:4400
```

## Qué hace

- **Listado** de todas las webs: nombre, ciudad, teléfono, número de fotos,
  estado de los datos legales y fecha de modificación.
- **Búsqueda** por nombre, slug, ciudad o calle, y filtros por legales
  pendientes y por webs sin fotos.
- **Ficha** con formulario para nombre, lema, teléfono, calle, código postal,
  ciudad y URL canónica.
- **Guardado verificado**: se sustituye únicamente el literal de `BUSINESS`, se
  reescribe el fichero sobre un temporal y se relee; si el valor no queda como
  se esperaba, se restaura el original.

## Estructura

- `src/`: cliente Solid. `App.tsx` enruta entre el listado y la ficha;
  `Dashboard.tsx` y `SiteDetail.tsx` son las dos vistas.
- `server.ts`: API JSON (`/api/sites`, `/api/sites/:slug`) y estáticos de
  `dist/`. En desarrollo Vite reenvía `/api` a este servidor.
- `lib/sites.ts`: escaneo, parseo tolerante y escritura de `site.ts`. Es el
  único sitio que toca el disco y lo cubren los tests.

## Qué no hace

- No edita textos multilínea (`summary`, `description`) ni arrays (`FAQ`,
  `MENU`, `HORARIO`): se muestran, pero se tocan en el editor.
- Las plantillas usan nombres de campo distintos (`street`/`address`,
  `phone`/`phoneDisplay`, `tagline`/`claim`…). El panel reconoce los sinónimos
  conocidos; si un campo no existe como literal, aparece bloqueado.
- No hace commit ni despliega. Los cambios quedan en el árbol de trabajo.

## Comprobaciones

```bash
bun test        # parseo, edición y validación de lib/sites.ts
bun run typecheck
bun run build
```
