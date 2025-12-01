# Supabase Database Schema

Este directorio contiene las migraciones SQL para configurar la base de datos en Supabase.

## 📋 Estructura de la Base de Datos

### Tablas

#### `categories`

Categorías para organizar los elementos del menú (ej: Bebidas, Entrantes, Postres).

| Campo        | Tipo        | Descripción                            |
| ------------ | ----------- | -------------------------------------- |
| `id`         | BIGSERIAL   | Identificador único (PK)               |
| `created_at` | TIMESTAMPTZ | Fecha de creación                      |
| `name`       | TEXT        | Nombre de la categoría                 |
| `slug`       | TEXT        | Identificador único amigable para URLs |
| `active`     | BOOLEAN     | Si la categoría está activa            |

**Índices:**

- `idx_categories_active` - Filtra categorías activas
- `idx_categories_slug` - Búsqueda por slug

#### `menu`

Diferentes tipos de menús (menú del día, menú de fin de semana, etc.).

| Campo        | Tipo        | Descripción                |
| ------------ | ----------- | -------------------------- |
| `id`         | BIGSERIAL   | Identificador único (PK)   |
| `created_at` | TIMESTAMPTZ | Fecha de creación          |
| `name`       | TEXT        | Nombre del menú            |
| `active`     | BOOLEAN     | Si el menú está activo     |
| `start_date` | TIMESTAMPTZ | Fecha de inicio (opcional) |
| `end_date`   | TIMESTAMPTZ | Fecha de fin (opcional)    |

**Índices:**

- `idx_menu_active` - Filtra menús activos
- `idx_menu_dates` - Búsqueda por rango de fechas

#### `platos`

Platos individuales con precios e información de alérgenos.

| Campo         | Tipo          | Descripción                 |
| ------------- | ------------- | --------------------------- |
| `id`          | BIGSERIAL     | Identificador único (PK)    |
| `created_at`  | TIMESTAMPTZ   | Fecha de creación           |
| `name`        | TEXT          | Nombre del plato            |
| `description` | TEXT          | Descripción del plato       |
| `price`       | NUMERIC(10,2) | Precio en euros             |
| `image_url`   | TEXT          | URL de la imagen (opcional) |
| `category_id` | BIGINT        | FK a `categories`           |
| `active`      | BOOLEAN       | Si el plato está activo     |
| `allergens`   | JSONB         | Información de alérgenos    |

**Índices:**

- `idx_platos_category_id` - Búsqueda por categoría
- `idx_platos_active` - Filtra platos activos
- `idx_platos_category_active` - Búsqueda combinada
- `idx_platos_allergens` - Búsqueda en JSON de alérgenos

### Relaciones

```
categories (1) ----< (N) platos
```

- Un plato pertenece a una categoría (opcional)
- Una categoría puede tener múltiples platos
- Si se elimina una categoría, los platos relacionados tendrán `category_id = NULL`

## 🚀 Cómo Aplicar las Migraciones

### Opción 1: Usando la Interfaz de Supabase (Recomendado)

1. Ve a tu proyecto en [Supabase Dashboard](https://app.supabase.com)
2. Navega a **SQL Editor** en el menú lateral
3. Crea una nueva query
4. Copia y pega el contenido de `001_initial_schema.sql`
5. Ejecuta la query (botón "Run" o `Ctrl+Enter`)
6. (Opcional) Repite con `002_seed_data.sql` para datos de prueba

### Opción 2: Usando Supabase CLI

```bash
# Instalar Supabase CLI (si no lo tienes)
npm install -g supabase

# Inicializar Supabase en tu proyecto
supabase init

# Vincular con tu proyecto remoto
supabase link --project-ref <tu-project-ref>

# Aplicar migraciones
supabase db push

# O aplicar una migración específica
supabase db execute --file migrations/001_initial_schema.sql
supabase db execute --file migrations/002_seed_data.sql
```

### Opción 3: Usando el SDK de Supabase

```typescript
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // ¡Usa la service role key!
);

// Leer y ejecutar la migración
const migration = readFileSync('./migrations/001_initial_schema.sql', 'utf-8');
const { error } = await supabase.rpc('exec_sql', { sql: migration });

if (error) console.error('Error:', error);
else console.log('Migration applied successfully!');
```

## 🔒 Row Level Security (RLS)

Las políticas RLS están configuradas para:

### Acceso Público (Lectura)

- ✅ Cualquiera puede leer categorías, menús y platos **activos**
- ❌ No se pueden leer elementos inactivos sin autenticación

### Acceso Autenticado (CRUD Completo)

- ✅ Usuarios autenticados tienen acceso completo (CREATE, READ, UPDATE, DELETE)
- ✅ Pueden ver y modificar elementos activos e inactivos

### Modificar Políticas

Si necesitas cambiar las políticas de seguridad:

```sql
-- Eliminar política existente
DROP POLICY "nombre_de_la_politica" ON public.tabla;

-- Crear nueva política
CREATE POLICY "nueva_politica"
    ON public.tabla
    FOR SELECT
    USING (condicion);
```

## 📊 Datos de Ejemplo

El archivo `002_seed_data.sql` incluye datos de ejemplo:

- 6 categorías (Bebidas, Entrantes, Platos Principales, Postres, Menú Infantil, Especialidades)
- 3 menús
- 22 platos con precios e información de alérgenos

## 🔧 Mantenimiento

### Agregar una Nueva Migración

1. Crea un nuevo archivo: `migrations/003_nombre_descriptivo.sql`
2. Escribe tus cambios SQL
3. Aplica la migración usando uno de los métodos anteriores

### Ejemplo de Migración para Agregar un Campo

```sql
-- Migration: Add updated_at field
-- Description: Adds updated_at timestamp to all tables

ALTER TABLE public.categories
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.menu
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.platos
    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Add triggers to auto-update the timestamp
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON public.categories
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_menu_updated_at
    BEFORE UPDATE ON public.menu
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_platos_updated_at
    BEFORE UPDATE ON public.platos
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
```

## 📝 Notas Importantes

- **Backups**: Siempre haz backup antes de aplicar migraciones en producción
- **Testing**: Prueba las migraciones en un entorno de desarrollo primero
- **Versionado**: Los archivos de migración están numerados secuencialmente
- **Idempotencia**: Las migraciones usan `IF NOT EXISTS` para ser idempotentes

## 🔗 Recursos

- [Documentación de Supabase](https://supabase.com/docs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
