# PWA Verification Checklist

Use esta lista para verificar que la PWA esté correctamente configurada.

## ✅ Pre-Deployment Checklist

### 📱 Manifest
- [ ] `manifest.json` existe en `/public/`
- [ ] Manifest tiene `name` y `short_name`
- [ ] Manifest tiene `start_url`
- [ ] Manifest tiene `display: "standalone"`
- [ ] Manifest tiene `theme_color` y `background_color`
- [ ] Manifest tiene al menos un icono de 192x192
- [ ] Manifest tiene al menos un icono de 512x512
- [ ] Manifest está linkeado en `index.html`

### 🔧 Service Worker
- [ ] `sw.js` existe en `/public/`
- [ ] Service Worker se registra en `main.tsx`
- [ ] Service Worker cachea recursos esenciales
- [ ] Service Worker maneja eventos `install`, `activate`, `fetch`
- [ ] Service Worker limpia cachés antiguos
- [ ] Service Worker tiene estrategia de caché definida

### 🎨 Icons
- [ ] Iconos existen en `/public/icons/`
- [ ] Iconos en tamaños: 72, 96, 128, 144, 152, 192, 384, 512
- [ ] Iconos son PNG
- [ ] Iconos tienen fondo (no transparente para mejor compatibilidad)
- [ ] Iconos están referenciados en manifest.json

### 🌐 HTML Meta Tags
- [ ] `<link rel="manifest">` en `<head>`
- [ ] `<meta name="theme-color">` en `<head>`
- [ ] Apple Touch Icons configurados
- [ ] `<meta name="apple-mobile-web-app-capable">`
- [ ] `<meta name="apple-mobile-web-app-status-bar-style">`
- [ ] `<meta name="viewport">` configurado correctamente

### 🔐 HTTPS
- [ ] Aplicación se sirve sobre HTTPS en producción
- [ ] Certificado SSL válido
- [ ] No hay contenido mixto (HTTP en HTTPS)

### 🎯 Functionality
- [ ] App funciona offline (al menos página principal)
- [ ] Service Worker se actualiza correctamente
- [ ] Notificaciones de actualización funcionan
- [ ] Botón de instalación aparece cuando corresponde
- [ ] Indicador offline funciona correctamente

## 🧪 Testing Checklist

### Chrome DevTools
- [ ] Lighthouse PWA audit score > 90
- [ ] Application > Manifest muestra datos correctos
- [ ] Application > Service Workers muestra SW activo
- [ ] Application > Cache Storage muestra cachés
- [ ] Network > Offline mode funciona

### Mobile Testing
- [ ] App se puede instalar en Android
- [ ] App se puede instalar en iOS
- [ ] App funciona offline en móvil
- [ ] Iconos se muestran correctamente
- [ ] Splash screen aparece (Android)

### Desktop Testing
- [ ] App se puede instalar en Chrome/Edge
- [ ] App funciona offline en desktop
- [ ] Ventana standalone funciona correctamente
- [ ] Shortcuts funcionan (si están configurados)

### Cross-Browser
- [ ] Chrome (Desktop & Mobile)
- [ ] Edge (Desktop & Mobile)
- [ ] Safari (Desktop & Mobile)
- [ ] Firefox (Desktop & Mobile)

## 📊 Performance Checklist

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### PWA Metrics
- [ ] Time to Interactive < 3s
- [ ] First Contentful Paint < 1.5s
- [ ] Speed Index < 3s

### Caching
- [ ] Assets críticos están pre-cacheados
- [ ] Estrategia de caché es apropiada
- [ ] Tamaño de caché es razonable (< 50MB)
- [ ] Caché se limpia periódicamente

## 🐛 Common Issues Checklist

### Installation Issues
- [ ] ¿Manifest es válido JSON?
- [ ] ¿Todos los iconos existen y son accesibles?
- [ ] ¿Service Worker se registra sin errores?
- [ ] ¿App se sirve sobre HTTPS?
- [ ] ¿Manifest tiene `start_url` correcto?

### Offline Issues
- [ ] ¿Service Worker está activo?
- [ ] ¿Recursos están en caché?
- [ ] ¿Estrategia de caché es correcta?
- [ ] ¿No hay errores en consola?

### Update Issues
- [ ] ¿CACHE_NAME cambió en nueva versión?
- [ ] ¿Service Worker detecta cambios?
- [ ] ¿Notificación de actualización aparece?
- [ ] ¿skipWaiting() se llama correctamente?

## 🚀 Deployment Checklist

### Pre-Deploy
- [ ] Build de producción creado (`npm run build`)
- [ ] Build testeado localmente (`npm run preview`)
- [ ] Service Worker funciona en build
- [ ] Manifest es accesible en build
- [ ] Iconos están en build

### Deploy
- [ ] Archivos subidos a servidor
- [ ] HTTPS configurado
- [ ] Manifest accesible en `/manifest.json`
- [ ] Service Worker accesible en `/sw.js`
- [ ] Iconos accesibles en `/icons/`

### Post-Deploy
- [ ] App accesible en producción
- [ ] HTTPS funciona correctamente
- [ ] Lighthouse audit en producción
- [ ] Instalación funciona en producción
- [ ] Offline funciona en producción

## 📝 Documentation Checklist

- [ ] README.md actualizado
- [ ] PWA.md creado con documentación
- [ ] CHANGELOG actualizado
- [ ] .env.example tiene variables necesarias
- [ ] Comentarios en código son claros

## 🎓 User Education Checklist

- [ ] Instrucciones de instalación disponibles
- [ ] FAQ sobre PWA creado
- [ ] Guía de uso offline disponible
- [ ] Troubleshooting guide disponible

---

## Quick Test Commands

```bash
# Build para producción
npm run build

# Preview del build
npm run preview

# Lighthouse audit
npx lighthouse http://localhost:4173 --view

# Verificar manifest
curl http://localhost:4173/manifest.json | jq

# Verificar Service Worker
curl http://localhost:4173/sw.js

# Verificar iconos
for size in 72 96 128 144 152 192 384 512; do
  curl -I http://localhost:4173/icons/icon-${size}x${size}.png
done
```

## Useful Links

- [PWA Checklist](https://web.dev/pwa-checklist/)
- [Lighthouse PWA Audits](https://web.dev/lighthouse-pwa/)
- [Service Worker Cookbook](https://serviceworke.rs/)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

---

**Fecha de última actualización**: 2025-12-25
**Versión**: 1.0.0
