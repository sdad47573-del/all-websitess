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

| Script | Qué hace |
| --- | --- |
| `dev` | Solo el frontend de Vite. |
| `api` | Solo el servidor Hono, con recarga (`--watch`). |
| `dev:all` | Los dos en paralelo. |
| `seed` | Inserta datos de ejemplo. |
| `test` | Tests de la API (`bun test`). |
| `check-types` | `tsc -b`, cubre `src` y `server`. |

## Ficheros

| Fichero | Para qué sirve |
| --- | --- |
| `migrations/*.sql` | Esquema, un fichero numerado por cambio. |
| `db.ts` | Conexión SQLite y ejecución de migraciones. |
| `index.ts` | Las rutas de Hono. Exporta `AppType` y los tipos `Expense`, `Stats` y `Budget`. |
| `main.ts` | Punto de entrada del servidor. |
| `seed.ts` | Datos de ejemplo. |
| `index.test.ts` | Tests de la API. |
| `categories.ts` | El vocabulario de categorías y el esquema Zod que lo valida. |

## Las categorías están en tres sitios

La lista de categorías de gasto aparece en tres ficheros a propósito, y los tres
tienen que coincidir:

| Dónde | Para qué |
| --- | --- |
| `server/categories.ts` | Lo que la API valida y devuelve en `GET /api/categories`. |
| `server/migrations/0001_init.sql` | Un `CHECK` en la tabla, para que el dato inválido no llegue a existir. |
| `src/lib/finance.ts` (`CATEGORY_KEYS`) | Lo que el selector y el formulario ofrecen antes de enviar nada. |

`server/index.test.ts` compara `EXPENSE_CATEGORIES` con `CATEGORY_KEYS` y falla
si se separan, así que añadir una categoría a uno y olvidar el otro da error en
el test en vez de un 400 inesperado al guardar. Si añades una, edita los tres.

El servidor manda: `POST /api/expenses` rechaza cualquier categoría que no esté
en la lista, y la migración la rechaza también a nivel de base de datos.

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
