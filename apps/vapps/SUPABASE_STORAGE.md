# Configuración de Imágenes en Supabase Storage

## Bucket de Supabase

Las imágenes de los vapers ahora se cargan desde **Supabase Storage** en lugar de assets locales.

### Información del Bucket

- **Nombre del bucket**: `vaper-images`
- **Acceso**: Público (public bucket)
- **Estructura de carpetas**: `VAPS/<nombre-archivo>.png`

### Configuración Requerida

Para que las imágenes funcionen correctamente, necesitas:

1. **Crear el bucket en Supabase**:
   - Ve a tu proyecto en Supabase Dashboard
   - Navega a Storage
   - Crea un nuevo bucket llamado `vaper-images`
   - Configúralo como **público** (public bucket)

2. **Subir las imágenes**:
   - Crea una carpeta llamada `VAPS` dentro del bucket
   - Sube todas las imágenes de vaper a esta carpeta
   - Los nombres de archivo deben coincidir con los especificados en `img.ts`

3. **Variables de entorno**:
   - Asegúrate de que `PUBLIC_SUPABASE_URL` esté configurada en tu archivo `.env`
   - Ejemplo: `PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co`

### Lista de Imágenes Requeridas

Las siguientes imágenes deben estar en el bucket en la ruta `VAPS/`:

- `ArandanoAzulGrosellaNegraHielo.png`
- `arandano-cereza-arandano-rojo.png`
- `arandano-cereza-cola.png`
- `arandano-hielo.png`
- `doble-manzana.png`
- `explosion-uva.png`
- `frambuesa-azul.png`
- `frambuesa-sandia.png`
- `fresa-banana.png`
- `fresa-hielo.png`
- `fresa-kiwi.png`
- `fresa-sandia.png`
- `fresa-vainilla-cola.png`
- `frutos-mixtos.png`
- `hielo-negro-dragonfruit-fresa.png`
- `kiwi-maracuya-guayaba.png`
- `limon-lima.png`
- `limonada-rosa.png`
- `love66.png`
- `melocoton-frutos-bosque.png`
- `melocoton-mango-pina.png`
- `menta-fresca.png`
- `mora-arandano-hielo.png`
- `red-bull.png`
- `sandia-hielo.png`
- `skittles.png`
- `sueno-verano.png`
- `triple-cereza.png`

### Uso en el Código

El archivo `src/utils/supabase-storage.ts` proporciona funciones helper:

```typescript
import { getVaperImageUrl } from '../../utils/supabase-storage';

// Genera la URL completa para una imagen
const imageUrl = getVaperImageUrl('arandano-hielo.png');
// Resultado: https://tu-proyecto.supabase.co/storage/v1/object/public/vaper-images/VAPS/arandano-hielo.png
```

### Ventajas de este Enfoque

1. **Gestión centralizada**: Las imágenes se pueden actualizar sin redesplegar la aplicación
2. **Menor tamaño del bundle**: Las imágenes no se incluyen en el build de la aplicación
3. **CDN automático**: Supabase Storage incluye CDN para mejor rendimiento
4. **Fácil actualización**: Solo necesitas reemplazar la imagen en Supabase
