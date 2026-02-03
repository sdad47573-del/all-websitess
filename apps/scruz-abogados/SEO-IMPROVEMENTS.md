# Mejoras SEO - Scruz Abogados

## Resumen de Mejoras Implementadas

Este documento detalla todas las mejoras de SEO implementadas en el sitio web de Scruz Abogados para mejorar su visibilidad en motores de búsqueda y atraer más clientes potenciales.

---

## 1. Configuración Técnica

### Sitemap XML
- ✅ Integración de `@astrojs/sitemap` en `astro.config.mjs`
- ✅ Configuración automática de sitemap con:
  - Frecuencia de actualización: semanal
  - Prioridad: 0.7
  - Fecha de última modificación automática
  - URLs personalizadas para páginas principales

### Robots.txt Mejorado
- ✅ Directivas claras para bots de búsqueda
- ✅ Bloqueo de directorios innecesarios (`/api/`, `/_astro/`, archivos JSON)
- ✅ Referencias a sitemaps XML

---

## 2. Meta Tags y Open Graph

### Mejoras en CustomLayout.astro
- ✅ **Canonical URLs dinámicas**: Cada página tiene su URL canónica única
- ✅ **Open Graph mejorado**: 
  - Títulos dinámicos por página
  - Descripciones únicas por página
  - URLs canónicas dinámicas
  - Imagen OG consistente
  - Nombre del sitio actualizado

### Keywords Ampliados
Se añadieron keywords relevantes:
- Ubicaciones: Lucena, Córdoba, Málaga
- Servicios: divorcios, herencias, despidos, accidentes tráfico
- Términos generales: abogado, despacho jurídico, asesoría legal, etc.

---

## 3. Optimización de Páginas

### Página Principal (index.astro)
- ✅ **Title**: "Scruz Abogados | Despacho Jurídico en Lucena, Córdoba y Málaga - Expertos en Derecho"
- ✅ **Description**: Incluye USPs clave (20+ años, atención 24/7, primera consulta gratuita)
- ✅ **Estructura semántica**: H1 en Hero, H2 para secciones principales

### Páginas de Servicios
Cada página de servicio ahora tiene meta tags optimizados:

#### Divorcios y Separaciones
- **Title**: "Abogados de Divorcios y Separaciones en Lucena y Córdoba | Scruz Abogados"
- **Description**: Enfocada en beneficios clave (custodia, pensión, liquidación)

#### Herencias y Testamentos
- **Title**: "Abogados de Herencias y Testamentos en Lucena y Córdoba | Scruz Abogados"
- **Description**: Gestión integral y asesoramiento sucesorio

#### Despidos
- **Title**: "Abogados Laboralistas - Despidos e Indemnizaciones | Scruz Abogados"
- **Description**: Despidos improcedentes y reclamaciones laborales

#### Indemnizaciones de Tráfico
- **Title**: "Indemnizaciones por Accidentes de Tráfico | Abogados en Lucena y Córdoba"
- **Description**: Máxima indemnización por lesiones, daños y secuelas

#### Servicios para Empresas
- **Title**: "Servicios Jurídicos para Empresas | Abogados Mercantiles en Lucena y Córdoba"
- **Description**: Derecho mercantil, laboral, compliance y fusiones

### Páginas Informativas

#### Sobre Nosotros
- **Title**: "Sobre Nosotros - Scruz Abogados | Más de 20 Años de Experiencia Legal"
- **Description**: Equipo multidisciplinar y experiencia

#### Preguntas Frecuentes
- **Title**: "Preguntas Frecuentes | Scruz Abogados - Respuestas a tus Dudas Legales"
- **Description**: Dudas sobre servicios y procedimientos legales

---

## 4. Structured Data (Schema.org)

### JSON-LD para LegalService
El sitio incluye datos estructurados tipo `LegalService` con:
- Nombre del negocio
- Imagen
- URL
- Teléfono de contacto
- Dirección postal completa
- Horario de apertura
- Áreas servidas
- Redes sociales

---

## 5. Mejores Prácticas SEO Implementadas

### ✅ Títulos Únicos
Cada página tiene un título único y descriptivo que:
- Incluye palabras clave principales
- Menciona la ubicación geográfica
- Incluye el nombre de la marca
- Tiene menos de 60 caracteres

### ✅ Meta Descriptions Únicas
Cada descripción:
- Resume el contenido de la página
- Incluye call-to-action
- Menciona beneficios clave
- Tiene entre 150-160 caracteres

### ✅ URLs Canónicas
- Previene contenido duplicado
- Mejora la indexación
- URLs dinámicas basadas en la ruta actual

### ✅ Jerarquía de Encabezados
- H1: Título principal de cada página
- H2: Secciones principales
- H3: Subsecciones

---

## 6. SEO Local

### Optimizaciones para Búsqueda Local
- ✅ Menciones de ciudades clave: Lucena, Córdoba, Málaga, Granada
- ✅ Dirección en Schema.org
- ✅ Teléfono local
- ✅ Horarios de atención
- ✅ Áreas de servicio definidas

---

## 7. Palabras Clave Objetivo

### Principales
- Abogado Lucena
- Abogados Córdoba
- Abogados Málaga
- Despacho jurídico Lucena
- Abogados de familia Córdoba

### Servicios Específicos
- Divorcios Lucena
- Herencias Córdoba
- Despidos laborales
- Accidentes de tráfico Málaga
- Abogados mercantiles

### Long-tail
- "Abogado de divorcios en Lucena"
- "Reclamación accidente tráfico Córdoba"
- "Abogado despido improcedente Málaga"
- "Gestión de herencias Lucena"

---

## 8. Próximos Pasos Recomendados

### Contenido
1. ✅ Crear blog con artículos sobre temas legales
2. ✅ Añadir casos de éxito (testimonios)
3. ✅ Crear guías descargables (lead magnets)

### Técnico
1. ✅ Optimizar velocidad de carga
2. ✅ Implementar lazy loading para imágenes
3. ✅ Comprimir imágenes (WebP)
4. ✅ Minificar CSS y JavaScript

### Off-Page
1. ✅ Crear perfil en Google My Business
2. ✅ Conseguir backlinks de directorios legales
3. ✅ Presencia en redes sociales
4. ✅ Reseñas de clientes en Google

### Analytics
1. ✅ Configurar Google Analytics 4
2. ✅ Configurar Google Search Console
3. ✅ Monitorear palabras clave
4. ✅ Analizar comportamiento de usuarios

---

## 9. Métricas a Monitorear

### Posicionamiento
- Posición en Google para palabras clave objetivo
- Visibilidad en búsquedas locales
- Featured snippets

### Tráfico
- Tráfico orgánico mensual
- Páginas de entrada principales
- Tasa de rebote
- Tiempo en sitio

### Conversiones
- Llamadas telefónicas
- Formularios de contacto
- Clics en WhatsApp
- Solicitudes de consulta

---

## 10. Checklist de Mantenimiento SEO

### Mensual
- [ ] Revisar posiciones en Google Search Console
- [ ] Analizar páginas con más tráfico
- [ ] Identificar oportunidades de contenido
- [ ] Revisar errores de rastreo

### Trimestral
- [ ] Actualizar contenido antiguo
- [ ] Añadir nuevos artículos de blog
- [ ] Revisar y actualizar meta descriptions
- [ ] Analizar competencia

### Anual
- [ ] Auditoría SEO completa
- [ ] Revisar estrategia de palabras clave
- [ ] Actualizar structured data
- [ ] Revisar backlinks

---

## Contacto para Soporte SEO

Para cualquier duda sobre estas mejoras o para implementar optimizaciones adicionales, contactar con el equipo de desarrollo.

**Última actualización**: Febrero 2026
