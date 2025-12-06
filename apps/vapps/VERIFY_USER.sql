-- Script para crear usuario joshxyev@gmail.com en Supabase
-- Ejecuta esto en Supabase Dashboard -> SQL Editor

-- IMPORTANTE: Este script usa la función auth.users() que solo está disponible
-- en versiones recientes de Supabase. Si no funciona, usa el Dashboard UI.

-- Opción 1: Crear usuario con SQL (si tienes permisos)
-- NOTA: Esto puede no funcionar dependiendo de tu configuración de Supabase
-- Es más seguro usar el Dashboard UI

-- Opción 2: Verificar si el usuario ya existe
SELECT id, email, created_at, email_confirmed_at
FROM auth.users
WHERE email = 'joshxyev@gmail.com';

-- Si el usuario existe, verifica su perfil
SELECT p.id, p.email, p.role, p.full_name
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
WHERE u.email = 'joshxyev@gmail.com';

-- Si el usuario existe pero no tiene perfil, créalo manualmente:
-- (Reemplaza 'USER_UUID_AQUI' con el UUID del usuario de la query anterior)
/*
INSERT INTO public.profiles (id, full_name, role)
VALUES ('USER_UUID_AQUI', 'Josh', 'admin')
ON CONFLICT (id) DO NOTHING;
*/

-- ============================================================================
-- INSTRUCCIONES PARA CREAR USUARIO DESDE EL DASHBOARD
-- ============================================================================

/*
Como no podemos crear usuarios directamente con SQL (por seguridad),
debes usar el Dashboard de Supabase:

1. Ve a https://app.supabase.com
2. Selecciona tu proyecto
3. Ve a Authentication → Users
4. Haz clic en "Add user" (botón verde)
5. Selecciona "Create new user"
6. Llena:
   - Email: joshxyev@gmail.com
   - Password: joshxyev@gmail.com
   - ✅ IMPORTANTE: Marca "Auto Confirm User"
7. Haz clic en "Create user"

El trigger automático creará el perfil con rol 'seller'.

Si quieres que sea admin, después de crear el usuario:
1. Ve a Table Editor → profiles
2. Encuentra el registro con email joshxyev@gmail.com
3. Cambia el campo 'role' de 'seller' a 'admin'
4. Guarda

Luego podrás hacer login con:
- Email: joshxyev@gmail.com
- Password: joshxyev@gmail.com
*/
