# Crear Usuario en Supabase - Guía Rápida

## El Problema

El login falla con error 400 porque el usuario no existe en Supabase.

## Solución: Crear Usuario desde Supabase Dashboard

### Paso 1: Ir a Supabase Dashboard

1. Abre [https://app.supabase.com](https://app.supabase.com)
2. Selecciona tu proyecto: `iprawspawnyaucaggagv`

### Paso 2: Crear Usuario

1. En el menú lateral, ve a **Authentication** → **Users**
2. Haz clic en **Add user** (botón verde arriba a la derecha)
3. Selecciona **Create new user**
4. Llena el formulario:
   - **Email**: `joshxyev@gmail.com`
   - **Password**: `joshxyev@gmail.com` (o la que prefieras)
   - **Auto Confirm User**: ✅ Marca esta opción (importante)
5. Haz clic en **Create user**

### Paso 3: Verificar que el Perfil se Creó

1. Ve a **Table Editor** en el menú lateral
2. Selecciona la tabla **profiles**
3. Deberías ver un registro con:
   - **id**: El UUID del usuario recién creado
   - **role**: `seller` (por defecto)
   - **full_name**: `Usuario`

### Paso 4: (Opcional) Cambiar a Admin

Si quieres que este usuario sea admin:

1. En la tabla **profiles**, encuentra el registro del usuario
2. Haz clic en el campo **role**
3. Cámbialo de `seller` a `admin`
4. Guarda los cambios

### Paso 5: Probar el Login

1. Ve a `http://localhost:4321/login`
2. Ingresa:
   - **Email**: `joshxyev@gmail.com`
   - **Password**: `joshxyev@gmail.com`
3. Haz clic en **Iniciar Sesión**
4. Deberías ser redirigido a `/` (página principal)

## Alternativa: Crear Usuario con SQL

Si prefieres usar SQL, ejecuta esto en **SQL Editor**:

```sql
-- Primero, crea el usuario en auth.users
-- NOTA: Esto solo funciona si tienes acceso directo a auth.users
-- Es más fácil usar el Dashboard

-- Opción más simple: Usar la función de Supabase
SELECT auth.uid(); -- Esto te dará tu user ID actual

-- Para crear un usuario, usa el Dashboard o la API de Supabase
```

## Verificar que Todo Funciona

Después de crear el usuario, verifica:

1. ✅ Usuario existe en **Authentication** → **Users**
2. ✅ Perfil existe en **Table Editor** → **profiles**
3. ✅ Login funciona en `http://localhost:4321/login`
4. ✅ Puedes acceder a `/` después del login
5. ✅ Puedes navegar a otras rutas sin ser redirigido a `/login`

## Si Sigue Sin Funcionar

Si después de crear el usuario sigue sin funcionar:

1. **Abre DevTools** (F12)
2. **Ve a Console** y busca errores
3. **Ve a Network** y busca la petición a `/auth/v1/token`
   - Si es 400: Credenciales incorrectas
   - Si es 401: Problema con la API key
   - Si es 403: Problema con RLS policies

4. **Verifica las cookies**:
   - Application → Cookies → `http://localhost:4321`
   - Deberías ver cookies de Supabase después del login

5. **Limpia el caché**:
   - Application → Clear storage → Clear site data
   - Intenta login de nuevo
