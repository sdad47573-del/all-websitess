# VappSolo - Pokemon Battle Arena

VappSolo es una aplicación web progresiva (PWA) de gestión y simulación de batallas Pokemon, construida con React, TypeScript y Vite.

## ✨ Características

- 📱 **Progressive Web App (PWA)**: Instalable en móviles y desktop
- 🔌 **Funcionalidad Offline**: Trabaja sin conexión a internet
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- 🎨 **Diseño Moderno**: UI/UX premium con DaisyUI y TailwindCSS
- 🔐 **Autenticación Segura**: Integración con Supabase
- 📊 **Gestión de Datos**: React Query para manejo eficiente de estado

## 📱 PWA Features

Esta aplicación es una **Progressive Web App** completa:

- ✅ Instalable en dispositivos móviles y desktop
- ✅ Funciona offline con Service Worker
- ✅ Caché inteligente de recursos
- ✅ Actualizaciones automáticas
- ✅ Iconos adaptativos para todas las plataformas
- ✅ Indicador de estado offline/online

Para más información sobre PWA, consulta [PWA.md](./PWA.md).

## 🚀 Inicio Rápido

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
