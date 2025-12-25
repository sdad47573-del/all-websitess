# PWA - Progressive Web App

VappSolo ahora es una **Progressive Web App (PWA)** completa, lo que significa que puede instalarse en dispositivos móviles y de escritorio, funcionar offline, y proporcionar una experiencia similar a una aplicación nativa.

## ✨ Características PWA

### 📱 Instalable
- **Móvil**: Agrega la app a tu pantalla de inicio desde el navegador
- **Desktop**: Instala como aplicación de escritorio desde Chrome/Edge
- **Botón de instalación**: Aparece automáticamente en la barra de navegación cuando la app es instalable

### 🔌 Funcionalidad Offline
- **Service Worker**: Cachea recursos esenciales para uso offline
- **Estrategias de caché**:
  - **Network First**: Para navegación y contenido dinámico
  - **Cache First**: Para assets estáticos (CSS, JS, imágenes)
  - **Runtime Cache**: Para recursos cargados dinámicamente

### 🎨 Experiencia Nativa
- **Tema personalizado**: Colores de marca en la barra de estado
- **Splash Screen**: Pantalla de carga personalizada
- **Iconos adaptativos**: Iconos optimizados para todas las plataformas
- **Indicador offline**: Banner que aparece cuando no hay conexión

## 📦 Archivos PWA

### Manifest (`public/manifest.json`)
Define los metadatos de la aplicación:
- Nombre y descripción
- Iconos en múltiples tamaños
- Colores de tema
- Modo de visualización
- Atajos rápidos

### Service Worker (`public/sw.js`)
Maneja el caché y funcionalidad offline:
- Precarga de assets esenciales
- Estrategias de caché inteligentes
- Actualización automática de versiones
- Gestión de caché antiguo

### Iconos (`public/icons/`)
Iconos en múltiples tamaños para diferentes dispositivos:
- 72x72, 96x96, 128x128, 144x144, 152x152
- 192x192 (Android)
- 384x384, 512x512 (Alta resolución)

## 🚀 Instalación

### En Móvil (Android/iOS)

#### Android (Chrome/Edge)
1. Abre la aplicación en Chrome o Edge
2. Toca el menú (⋮) en la esquina superior derecha
3. Selecciona "Agregar a pantalla de inicio" o "Instalar app"
4. Confirma la instalación

#### iOS (Safari)
1. Abre la aplicación en Safari
2. Toca el botón de compartir (□↑)
3. Desplázate y selecciona "Agregar a pantalla de inicio"
4. Confirma el nombre y toca "Agregar"

### En Desktop (Windows/Mac/Linux)

#### Chrome/Edge
1. Abre la aplicación en Chrome o Edge
2. Busca el ícono de instalación (+) en la barra de direcciones
3. O haz clic en el botón "Instalar App" en la barra de navegación
4. Confirma la instalación

## 🛠️ Desarrollo

### Registro del Service Worker
El Service Worker se registra automáticamente en `src/main.tsx`:

```typescript
registerServiceWorker({
  onSuccess: () => console.log('PWA lista para uso offline'),
  onUpdate: () => {
    // Muestra notificación de actualización disponible
  },
  onError: (error) => console.error('Error en Service Worker', error)
});
```

### Componentes PWA

#### `PWAInstallButton`
Botón que aparece cuando la app es instalable:
- Se oculta automáticamente cuando ya está instalada
- Maneja el prompt de instalación
- Ubicado en el Topbar

#### `OfflineIndicator`
Banner que muestra el estado de conexión:
- Aparece cuando se pierde la conexión
- Se oculta cuando se recupera la conexión
- Ubicado en la parte superior de la app

### Utilidades PWA (`src/lib/pwa.ts`)

```typescript
// Registrar Service Worker
registerServiceWorker(config)

// Desregistrar Service Worker
unregisterServiceWorker()

// Verificar si está corriendo como PWA
isPWA()

// Configurar prompt de instalación
setupPWAInstallPrompt()
```

## 🔄 Actualizaciones

### Actualización Automática
Cuando hay una nueva versión disponible:
1. El Service Worker detecta la actualización
2. Se muestra una notificación toast
3. El usuario puede hacer clic para recargar
4. La nueva versión se instala automáticamente

### Actualización Manual
Para forzar una actualización:
1. Abre las DevTools (F12)
2. Ve a Application > Service Workers
3. Haz clic en "Update" o "Unregister"
4. Recarga la página

## 📊 Testing PWA

### Lighthouse Audit
1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Lighthouse"
3. Selecciona "Progressive Web App"
4. Haz clic en "Generate report"

### Verificar Manifest
1. Abre Chrome DevTools (F12)
2. Ve a Application > Manifest
3. Verifica que todos los campos estén correctos

### Verificar Service Worker
1. Abre Chrome DevTools (F12)
2. Ve a Application > Service Workers
3. Verifica que esté "activated and running"

### Simular Offline
1. Abre Chrome DevTools (F12)
2. Ve a Network
3. Selecciona "Offline" en el dropdown de throttling
4. Recarga la página y verifica que funcione

## 🎯 Mejores Prácticas

### Caché
- ✅ Cachea assets estáticos (CSS, JS, imágenes)
- ✅ Usa Network First para contenido dinámico
- ✅ Limpia cachés antiguos en cada actualización
- ❌ No cachees datos sensibles o personales

### Actualizaciones
- ✅ Notifica al usuario cuando hay actualizaciones
- ✅ Permite al usuario decidir cuándo actualizar
- ✅ Usa versionado semántico en CACHE_NAME
- ❌ No fuerces recargas automáticas

### UX
- ✅ Muestra indicadores de estado offline/online
- ✅ Proporciona feedback visual durante la instalación
- ✅ Usa iconos de alta calidad
- ❌ No asumas que siempre hay conexión

## 🐛 Troubleshooting

### La app no se instala
- Verifica que estés usando HTTPS (o localhost)
- Asegúrate de que el manifest.json sea válido
- Verifica que los iconos existan y sean accesibles
- Revisa la consola para errores

### El Service Worker no se registra
- Verifica que `/sw.js` sea accesible
- Asegúrate de que no haya errores de sintaxis
- Revisa la consola del navegador
- Intenta desregistrar y volver a registrar

### El contenido no se actualiza
- Desregistra el Service Worker
- Limpia el caché del navegador
- Recarga con Ctrl+Shift+R (hard reload)
- Verifica que CACHE_NAME haya cambiado

### Offline no funciona
- Verifica que los assets estén en PRECACHE_ASSETS
- Revisa la estrategia de caché
- Asegúrate de que el Service Worker esté activo
- Verifica en Application > Cache Storage

## 📚 Recursos

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Workbox](https://developers.google.com/web/tools/workbox) - Librería avanzada para Service Workers

## 🔐 Seguridad

### HTTPS Requerido
Las PWAs requieren HTTPS en producción:
- ✅ Localhost está exento (para desarrollo)
- ✅ Usa certificados SSL válidos en producción
- ❌ No uses HTTP en producción

### Permisos
La app puede solicitar permisos para:
- Notificaciones push (futuro)
- Acceso a cámara/micrófono (si se implementa)
- Ubicación geográfica (si se implementa)

Siempre solicita permisos de forma explícita y transparente.

## 📈 Métricas

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### PWA Checklist
- ✅ Funciona offline
- ✅ Es instalable
- ✅ Usa HTTPS
- ✅ Responde rápidamente
- ✅ Tiene iconos apropiados
- ✅ Tiene un manifest válido
- ✅ Usa Service Worker

---

¡Disfruta de VappSolo como PWA! 🎉
