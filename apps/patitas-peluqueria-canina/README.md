## Overview

Patitas · Peluquería Canina. SPA de React con su propia API.

- **Frontend** — Vite, TypeScript, React 19, React Router v7, Tailwind v4,
  shadcn UI, Lucide, Framer Motion
- **API** — Hono sobre Bun (`server/`)
- **Base de datos** — SQLite vía `bun:sqlite`, un solo fichero
- **Auth** — sesiones JWT propias en cookie HttpOnly, con acceso por código de
  email, como invitado, o canjeando un token de freebuff.com
- **UI** — sonner para avisos, recharts para los gráficos

> Antes usaba **Convex** (backend + auth + base de datos). Ya no queda nada de
> Convex en el proyecto: la API es propia. Al final está el
> [script de migración](#migrar-los-datos-de-convex) para traer los datos.

## Puesta en marcha

```bash
bun install
cp .env.example .env      # rellena AUTH_SECRET como mínimo
bun run dev
```

`bun run dev` levanta las dos piezas a la vez:

- la API en <http://localhost:8787>
- la web en <http://localhost:5173>, con `/api` haciendo de proxy hacia la API

Para hacerlo por separado: `bun run dev:api` y `bun run dev:web`.

La base se crea sola la primera vez a partir de `server/schema.sql`, así que no
hay ningún paso de migración que ejecutar.

### Variables de entorno

Todas están en `.env.example` con su valor por defecto. Las que de verdad
importan:

| Variable | Para qué |
| --- | --- |
| `AUTH_SECRET` | Firma los JWT de sesión. **Obligatoria en producción.** |
| `DATABASE_URL` | Ruta del fichero SQLite. |
| `RESEND_API_KEY` | Si falta, los emails se registran y no se envían. |
| `APP_URL` | Base de los enlaces en los emails. |
| `VLY_AUTH_ISSUER` / `VLY_JWKS_URL` | Verificación del token de freebuff.com. |

## Estructura

```
server/            API
  index.ts         App de Hono: rutas, CORS, errores, arranque
  schema.sql       Esquema SQLite (se aplica en cada arranque)
  db.ts            Conexión, transacciones y mapeo de filas
  env.ts           Lectura y validación de variables
  auth/            JWT, sesiones, OTP por email, token de freebuff
  routes/          pets, appointments, notifications, reviews, users, auth
  email.ts         Envío por Resend (mismas plantillas que antes)
  cron.ts          Recordatorios diarios, sustituye al cron de Convex
  selftest.ts      Pruebas contra la app, en memoria
  e2e.ts           Pruebas contra el servidor real por HTTP
src/
  lib/api.ts       Cliente HTTP y el mapa de endpoints
  lib/types.ts     Tipos de los datos (los usa también el servidor)
  lib/services.ts  Catálogo, precios, horarios y huecos
  hooks/use-api.ts Réplica de useQuery/useMutation de Convex, con sondeo
  hooks/use-auth.tsx  Proveedor de sesión
scripts/
  migrate-from-convex.ts   Migración de datos, de un solo uso
```

## Datos

A diferencia de Convex, aquí las filas se guardan en las filas de SQLite con
columnas en `snake_case`, y la API las devuelve con la forma que el cliente ya
conoce: `_id`, `userId`, `createdAt`… El mapeo está en `server/db.ts`.

Las decisiones que antes tomaba Convex y ahora toma el esquema:

- No se puede repetir el nombre de una mascota activa del mismo dueño
  (índice único parcial en `pets`).
- Una cita no puede tener dos reseñas (índice único parcial en `reviews`).
- Un bono no puede quedar con más usos consumidos que los comprados.

## Autenticación

La sesión es un JWT (HMAC-SHA256) en una cookie `HttpOnly`, `SameSite=Lax`. No
hay tokens en `localStorage` ni acceso a ellos desde JavaScript.

Hay tres formas de entrar, igual que antes:

- **Código por email** — `POST /api/auth/otp/send` genera un código de 6
  dígitos (15 min) y lo envía; `POST /api/auth/otp/verify` lo valida. El código
  se guarda hasheado con sal, con límite de 5 intentos.
- **Como invitado** — `POST /api/auth/anonymous`.
- **Desde freebuff.com** — `POST /api/auth/freebuff` canjea un token RS256
  (verificado contra el JWKS) por una sesión propia. El usuario se identifica
  por su `sub` de freebuff, no por el email.

Cada sesión tiene una fila en `sessions`, así que `POST /api/auth/signout` la
revoca de verdad en lugar de solo borrar la cookie.

## Tiempo real

Convex empujaba los cambios al navegador. Aquí cada consulta se refresca sola:
5 s por defecto, 30 s para lo público. No se sondea una pestaña oculta, y al
volver a ella se refresca al instante. Se cambia por consulta:

```ts
useQuery(api.appointments.listMyAppointments);                        // 5 s
useQuery(api.reviews.listPublicReviews, {}, { intervalMs: 30000 });  // 30 s
```

## Recordatorios diarios

Convex tenía `crons.daily(...)`. Aquí el proceso se auto-programa con
`setTimeout` al arrancar (`server/cron.ts`), y además está
`POST /api/cron/reminders` para despliegues que no mantienen el proceso vivo
(serverless, previews): un ping externo a esa ruta hace el mismo trabajo.

## Pruebas

```bash
bun run test:server   # 54 aserciones, base en memoria
bun run test:e2e      # 16 aserciones, servidor real por HTTP
```

`test:server` recorre el flujo completo (invitado → mascota → bono → reserva →
huecos → notificaciones → reseña → lista de espera → cancelación → cron) y
comprueba también el aislamiento entre usuarios. Corre contra una base en
memoria, así que no toca tus datos de desarrollo.

## Migrar los datos de Convex

Una sola vez, antes de apagar el despliegue de Convex:

```bash
CONVEX_URL=https://tu-deploy.convex.cloud bun run migrate:convex -- --dry-run
CONVEX_URL=https://tu-deploy.convex.cloud bun run migrate:convex -- --prod
```

Descarga cada tabla con `--inline-query` y la escribe en SQLite. Las sesiones
y los códigos de acceso **no** se migran: los usuarios vuelven a entrar por
email. Las referencias entre citas, bonos y reseñas sí se reconstruyen.

Haz una copia de la base antes, y comprueba los recuentos que imprime al final.
