# Instrucciones para Aplicar las Migraciones

Este documento explica cómo aplicar las migraciones de autenticación a tu base de datos Supabase.

## Migraciones Creadas

1. **006_auth_profiles.sql** - Crea la tabla de perfiles de usuario con roles
2. **007_update_rls_policies.sql** - Actualiza las políticas RLS para usar roles

## Opción 1: Aplicar desde Supabase Dashboard (Recomendado)

1. Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com)
2. Navega a **SQL Editor**
3. Copia y pega el contenido de `006_auth_profiles.sql`
4. Ejecuta la migración
5. Repite con `007_update_rls_policies.sql`

## Opción 2: Usar el Script de Migración

```bash
cd packages/supabase-sdk
bun run migrate
```

## Crear el Primer Usuario Admin

Después de aplicar las migraciones, necesitas crear tu primer usuario admin:

### Opción A: Desde Supabase Dashboard

1. Ve a **Authentication** → **Users**
2. Haz clic en **Add user**
3. Ingresa email y contraseña
4. Después de crear el usuario, ve a **Table Editor** → **profiles**
5. Encuentra el perfil del usuario recién creado
6. Cambia el campo `role` de `seller` a `admin`

### Opción B: Desde SQL Editor

```sql
-- Primero, crea el usuario en auth.users (esto se hace desde el dashboard)
-- Luego, actualiza su rol:

UPDATE public.profiles
SET role = 'admin'
WHERE id = 'UUID_DEL_USUARIO';
```

## Verificar la Instalación

Ejecuta esta query para verificar que todo está configurado correctamente:

```sql
-- Verificar que la tabla profiles existe
SELECT * FROM public.profiles;

-- Verificar que las funciones existen
SELECT public.get_user_role();
SELECT public.has_role('admin');

-- Verificar las políticas RLS
SELECT tablename, policyname
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('profiles', 'items', 'sales');
```

## Notas Importantes

- **No elimines** las migraciones anteriores (001-005), ya que son necesarias para el esquema base
- El rol por defecto para nuevos usuarios es `seller`
- Solo los usuarios con rol `admin` pueden modificar items y gestionar compras
- Los `sellers` pueden crear ventas pero no modificar el inventario directamente
