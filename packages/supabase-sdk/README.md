# Supabase SDK

SDK compartido para acceder a las bases de datos de Restaurant y Vaper Shop.

## Instalación

```bash
# En tu aplicación
bun add supabase-sdk@workspace:*
```

## Configuración

Crea un archivo `.env` con tus credenciales de Supabase:

```env
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_ANON_KEY=tu_clave_anonima
```

## Uso

### Crear cliente

```typescript
import { createClient } from 'supabase-sdk';

const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY);
```

### Tipos organizados por dominio

El SDK exporta tipos organizados por dominio para mejor claridad:

#### Restaurant (bar-panel)

```typescript
import type {
  RestaurantCategory,
  RestaurantCategoryInsert,
  RestaurantMenu,
  RestaurantPlato,
} from 'supabase-sdk';

// Obtener categorías
const { data: categories } = await supabase
  .from('categories')
  .select('*')
  .returns<RestaurantCategory[]>();

// Insertar un plato
const newPlato: RestaurantPlatoInsert = {
  name: 'Paella Valenciana',
  price: 15.5,
  category_id: 1,
};

await supabase.from('platos').insert(newPlato);
```

#### Vaper Shop (vapps)

```typescript
import type { VaperProduct, VaperProductInsert, VaperProductUpdate } from 'supabase-sdk';

// Obtener productos activos
const { data: vapers } = await supabase
  .from('vapers')
  .select('*')
  .eq('active', true)
  .returns<VaperProduct[]>();

// Actualizar cantidad
const update: VaperProductUpdate = {
  amount: 20,
};

await supabase.from('vapers').update(update).eq('title', 'Fresa Hielo');
```

### Tipos legacy (retrocompatibilidad)

Para código existente, los tipos legacy siguen disponibles:

```typescript
import type { Category, Menu, Plato, Vaper } from 'supabase-sdk';
```

## Estructura de la Base de Datos

### Restaurant Tables

- **categories**: Categorías de productos (Bebidas, Entrantes, etc.)
- **menu**: Tipos de menú (menú del día, carta, etc.)
- **platos**: Platos/productos del restaurante

### Vaper Shop Tables

- **vapers**: Productos de vaper con inventario

## Migraciones

Para aplicar migraciones a tu instancia de Supabase:

```bash
cd packages/supabase-sdk
bun run migrate
```

Asegúrate de tener configuradas las variables de entorno en `packages/supabase-sdk/.env`:

```env
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
```

## Arquitectura

Este SDK usa un **único proyecto de Supabase** con tablas organizadas por dominio:

- ✅ Costos reducidos (un solo proyecto)
- ✅ Migraciones centralizadas
- ✅ Tipos organizados por prefijo (`Restaurant*`, `Vaper*`)
- ✅ Posibilidad de compartir autenticación entre apps

Si en el futuro necesitas separar en proyectos distintos, los tipos ya están organizados para facilitar la migración.
