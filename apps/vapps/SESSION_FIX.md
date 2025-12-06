# Fix para Persistencia de Sesión

## Cambios Realizados

He actualizado el sistema de autenticación para usar correctamente las cookies de Supabase:

### 1. Middleware (`src/middleware.ts`)

- Ahora usa `createClient` directamente con un adaptador de cookies personalizado
- Lee y escribe cookies usando la API de Astro
- Configura cookies con `sameSite: 'lax'` y `secure` en producción

### 2. Browser Client (`src/services/init.service.ts`)

- Actualizado para usar `createClient` con configuración de auth
- Usa `flowType: 'pkce'` para mayor seguridad
- Habilita `autoRefreshToken` y `persistSession`

## Variable de Entorno Requerida

**IMPORTANTE**: Asegúrate de tener esta variable en tu archivo `.env`:

```env
PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

**NO uses** `PUBLIC_SERVICE_ROLE_KEY` para el cliente del navegador, ya que tiene permisos elevados y no debe exponerse al cliente.

## Cómo Obtener las Keys

1. Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com)
2. Ve a **Settings** → **API**
3. Copia las siguientes keys:
   - **URL**: `PUBLIC_SUPABASE_URL`
   - **anon public**: `PUBLIC_SUPABASE_ANON_KEY`

## Archivo .env Completo

Tu archivo `.env` debería verse así:

```env
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Pasos para Probar

1. **Detén el servidor** si está corriendo (Ctrl+C)

2. **Verifica tu archivo .env** en `apps/vapps/.env`

3. **Reinicia el servidor**:

   ```bash
   cd apps/vapps
   bun run dev
   ```

4. **Abre el navegador** en `http://localhost:4321`

5. **Haz login** con tus credenciales

6. **Verifica las cookies** en DevTools:
   - Abre DevTools (F12)
   - Ve a Application → Cookies → http://localhost:4321
   - Deberías ver cookies como `sb-<project-ref>-auth-token`

7. **Navega a otra ruta** (ej: `/ventas`)
   - Debería funcionar sin redirigirte a `/login`

8. **Refresca la página**
   - Deberías seguir autenticado

## Troubleshooting

### Si sigue redirigiendo a /login después del login:

1. **Verifica las cookies en DevTools**:
   - Si no ves cookies de Supabase, el problema es la configuración del cliente

2. **Revisa la consola del navegador**:
   - Busca errores relacionados con Supabase o autenticación

3. **Verifica las variables de entorno**:

   ```bash
   # En apps/vapps
   cat .env
   ```

   - Asegúrate de que `PUBLIC_SUPABASE_ANON_KEY` esté presente

4. **Limpia las cookies y localStorage**:
   - DevTools → Application → Clear storage → Clear site data
   - Intenta hacer login nuevamente

### Si ves error "Invalid API key":

- Verifica que `PUBLIC_SUPABASE_ANON_KEY` sea la clave **anon public** (no la service_role)
- La anon key empieza con `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`

## Cómo Funciona Ahora

1. **Login**:
   - Usuario ingresa credenciales en `/login`
   - `LoginForm` llama a `signIn()` del auth service
   - Supabase crea una sesión y la guarda en localStorage (browser)

2. **Navegación**:
   - Cada request pasa por el middleware
   - Middleware crea un cliente de Supabase con adaptador de cookies
   - Lee la sesión de las cookies
   - Si hay sesión válida, permite el acceso
   - Si no hay sesión, redirige a `/login`

3. **Persistencia**:
   - Las cookies tienen `maxAge` de 1 año
   - Se refrescan automáticamente con `autoRefreshToken: true`
   - Funcionan en modo desarrollo y producción
