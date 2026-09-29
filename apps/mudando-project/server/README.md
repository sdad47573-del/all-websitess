# API del backend con Hono

Cada app tiene su propio servidor Hono sobre un fichero SQLite. Este directorio
es la plantilla de referencia: huertosolar es la más pequeña, así que sirve de
modelo para las demás.

Antes, estas apps usaban [Convex](https://convex.dev): un `src/convex/schema.ts`
con el modelo de datos, un módulo por funcionalidad, y las páginas llamaban a
todo con `useQuery`/`useMutation`. Eso se sustituye por rutas HTTP normales
sobre SQLite. La diferencia práctica es que ahora hay un servidor que levantar
y las claves secretas tienen dónde vivir: en carniceria, `STRIPE_SECRET_KEY`
se lee en el servidor y nunca sale al navegador.

## Puesta en marcha

```sh
bun install
bun run seed     # opcional: datos de ejemplo
bun run dev:all  # Vite en :5173 y la API en :8787
```

Vite hace proxy de `/api` al servidor Hono, así que el navegador siempre habla
con un único origen. En producción ambos se sirven desde el mismo sitio y el
proxy deja de hacer falta.

| Script        | Qué hace                                        |
| ------------- | ----------------------------------------------- |
| `dev`         | Solo el frontend de Vite.                       |
| `api`         | Solo el servidor Hono, con recarga (`--watch`). |
| `dev:all`     | Los dos en paralelo.                            |
| `seed`        | Inserta datos de ejemplo.                       |
| `test`        | Tests de la API (`bun test`).                   |
| `check-types` | `tsc -b`, cubre `src` y `server`.               |

## Ficheros

| Fichero            | Para qué sirve                                                                   |
| ------------------ | -------------------------------------------------------------------------------- |
| `migrations/*.sql` | Esquema, un fichero numerado por cambio.                                         |
| `db.ts`            | Conexión SQLite y ejecución de migraciones.                                      |
| `index.ts`         | Las rutas de Hono. Exporta `AppType` y los tipos `Quote`, `Review` y `Callback`. |
| `quote.ts`         | La fórmula de precio. La calcula el servidor, no el cliente.                     |
| `email.ts`         | Envío del presupuesto con Resend.                                                |
| `main.ts`          | Punto de entrada del servidor.                                                   |
| `seed.ts`          | Datos de ejemplo.                                                                |
| `index.test.ts`    | Tests de la API.                                                                 |

## El precio lo calcula el servidor

`src/lib/quote.ts` tenía un comentario que decía que la fórmula era compartida
con el backend. No lo era: la acción de Convex guardaba el `total` que enviaba
el navegador, así que el precio era el que pidiera el cliente. Eso ya no puede
pasar:

- `POST /api/quotes` **no acepta `total`**. Recibe los datos de la mudanza
  (vivienda, distancia, plantas, volumen, fines de semana y extras) y devuelve
  el precio ya calculado.
- `server/quote.ts` es la única definición de la fórmula. `src/lib/quote.ts` la
  reexporta para que la calculadora de la landing pueda mostrar el precio en
  vivo, así que el número de la pantalla y el de la tabla no pueden separarse.

Hay un test que manda un `total: 1` junto con datos normales y comprueba que la
respuesta trae el precio calculado, no el 1. Si algún día `POST /api/quotes`
vuelve a aceptar un precio, ese test falla.

Si cambias la tarifa (un extra nuevo, un recargo), edítalo en `quote.ts`: el
cliente y el servidor lo recogen a la vez.

## Sin roles: qué significa que no haya auth

Antes, `listCallbacks`, `listPendingReviews` y `moderateReview` exigían
`role === "admin"`, y cada fila pertenecía a un `userId`. Al quitar la auth
desaparecen las dos cosas:

- No hay `users` ni índices por usuario. Todas las filas son de un único
  operador local implícito.
- **Las rutas de moderación y la bandeja de leads ya no comprueban nada.**
  Cualquiera que alcance la API puede leer teléfonos de clientes y aprobar
  reseñas.

Esto es aceptable mientras el servidor esté en `localhost`, que es como se
arranca (`bun run api`, puerto 8787). Si alguna vez se expone a una red, hay
que poner algo delante: un proxy con autenticación, o recuperar el chequeo de
rol. No confíes en que «solo lo ven los del despacho».

## Cómo escribir una ruta

Las rutas van encadenadas en una sola expresión. Hono guarda cada ruta en un
parámetro de tipo, y solo el valor que devuelve la cadena lo tiene, así que si
se declararan como `app.get(...)` sueltas `AppType` saldría vacío y el cliente
del frontend se quedaría sin tipar.

```ts
const app = new Hono()
  .get("/api/journal", (c) => c.json(rows))
  .post("/api/journal", zValidator("json", schema), (c) => {
    // ...
    return c.json(entry, 201);
  });
```

Los argumentos se validan con Zod y los errores se normalizan a `{ error }`
con un helper, para que el cliente solo tenga que leer una forma:

```ts
function validationMessage(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const field = issue.path.join(".");
      return field ? `${field}: ${issue.message}` : issue.message;
    })
    .join(" ");
}
```

## Cliente en el frontend

`src/api.ts` crea el cliente a partir del tipo del servidor, sin paso de
generación de código. Si una ruta cambia de forma, el build falla:

```ts
import { hc } from "hono/client";
import type { AppType } from "../server/index.js";

export const api = hc<AppType>("/api");
```

Y en un componente:

```ts
const response = await api.api.journal.$get();
if (response.ok) setEntries(await response.json());
```

## Migraciones

Los ficheros de `migrations/` se aplican en orden alfabético la primera vez que
se abre la base de datos, y quedan registrados en `schema_migrations` para no
volver a aplicarse. Cada uno corre dentro de una transacción: si falla a mitad,
el esquema se queda como estaba.

La base de datos es `server/data/huertosolar.db` y está en el `.gitignore`.
`DATABASE_PATH` la cambia de sitio, que es lo que usan los tests.

## Tests

Se usa `bun test` y no vitest porque `bun:sqlite` es un builtin de Bun y solo
existe al ejecutar con Bun. Los tests usan `app.request(...)` contra una base
de datos en memoria, sin levantar el servidor.

## Migrar otra app

1. Copiar `migrations/`, `db.ts`, `main.ts`, `seed.ts` y el `test` de aquí.
2. Traducir el `schema.ts` de Convex a un `migrations/0001_init.sql`.
3. Reescribir los módulos de `src/convex/*.ts` como rutas de Hono, quitando
   `ctx.auth` (ya no hay auth) y `getAuthUserId`.
4. Crear `src/api.ts` y cambiar los imports de `convex/react` por llamadas al
   cliente.
5. Añadir el proxy a `vite.config.ts` y los scripts `api`/`seed`/`test`.
