/**
 * Datos de Bar Nono (Calle Valverde, 13 · 11004 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5330483, -6.2965492) del enlace de Google Maps aportado.
 * - Turismo Cádiz: bar de tapas, centro histórico, Calle Valverde 13, teléfono 679 33 42 80.
 * - Cosasdecome: cocina casera de Eva María Cortés, fundado hacia 1987 por Antonio
 *   Jiménez Suazo, desde 2020 en Valverde 13 (antes Doctor Marañón 8), salmorejo,
 *   ensaladilla, cola de toro, albóndigas y berza; abre todos los días excepto
 *   sábados por la noche y domingos; sin horas exactas publicadas.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/bar-nono',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Bar Nono',
  shortName: 'Nono',
  category: 'Bar de tapas',
  categories: ['Bar de tapas', 'Cocina casera', 'Centro histórico'],
  streetAddress: 'Calle Valverde, 13',
  district: 'Centro histórico',
  postalCode: '11004',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 679 33 42 80',
  founded: 1987,
  latitude: 36.5330483,
  longitude: -6.2965492,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Bar+Nono/@36.5330483,-6.2965492,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd15eedcde68f:0xb73ab281fbfbacb9!8m2!3d36.5330483!4d-6.2965492!16s%2Fg%2F1tcw4wl_?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34679334280';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Abre a diario salvo sábados noche y domingos · confirmar';

export const hoursSource = 'Cosasdecome';

export const faqs = [
  {
    question: '¿Dónde está Bar Nono?',
    answer:
      'En la Calle Valverde, 13, 11004 Cádiz (centro histórico), coordenadas 36.5330483, -6.2965492. Desde 2020; antes estaba en Doctor Marañón 8. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono publicado es el 679 33 42 80.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Cosasdecome indica que abre todos los días excepto los sábados por la noche y los domingos, sin horas exactas. Llama al 679 33 42 80 antes de ir.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Tapeo de cocina tradicional cuidada: salmorejo, ensaladilla, cola de toro, albóndigas y berza, a cargo de Eva María Cortés. Bar bueno y barato (10-20 €).',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps, enlazada desde esta web. Aquí solo se usarán fotos propias con permiso.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa no oficial, creada con datos públicos de ubicación y contacto. No vende ni reserva nada.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Bar Nono, tapeo de cocina casera en Calle Valverde 13, 11004 Cádiz. Desde 1987. Web informativa no oficial con ubicación, contacto y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  foundingDate: String(business.founded),
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.city,
    addressRegion: business.province,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: mapsUrl,
  servesCuisine: ['Andaluza', 'Casera', 'Tapas'],
  acceptsReservations: false,
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${site.siteUrl}/#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const LEGAL = {
  razonSocial: '[pendiente de completar]',
  nif: '[pendiente de completar]',
  email: '[pendiente de completar]',
} as const;
