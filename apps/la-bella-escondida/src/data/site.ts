/**
 * Datos de Restaurante La Bella Escondida Cocina Casera (Condesa Villafuente Bermeja, 5 · 11008 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5193974, -6.2854419) del enlace de Google Maps aportado.
 * - Cosasdecome: bar de barriada junto a playa Santa María del Mar, desde 2014,
 *   teléfono 856 06 75 36, almuerzos todos los días excepto lunes, cenas Jue-Sáb
 *   en verano y Vie-Sáb resto del año, sin reservas, sandwich de pollo y guisos.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://la-bella-escondida.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Restaurante La Bella Escondida Cocina Casera',
  shortName: 'La Bella Escondida',
  category: 'Bar de tapas',
  categories: ['Cocina casera', 'Bar de barrio', 'Puerta Tierra'],
  streetAddress: 'Condesa Villafuente Bermeja, 5',
  district: 'Puerta Tierra',
  postalCode: '11008',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 856 06 75 36',
  founded: 2014,
  latitude: 36.5193974,
  longitude: -6.2854419,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+La+Bella+Escondida+Cocina+Casera/@36.5193974,-6.2854419,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd3ce0088805b:0xfd80e40b475a57e3!8m2!3d36.5193974!4d-6.2854419!16s%2Fg%2F11f10pd96j?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34856067536';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Almuerzos · confirmar', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Almuerzos · confirmar', shifts: [], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Almuerzos + cenas en verano · confirmar', shifts: [], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Almuerzos + cenas · confirmar', shifts: [], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Almuerzos + cenas · confirmar', shifts: [], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Almuerzos · confirmar', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Almuerzos Mar-Dom · cenas fin de semana · Lun cerrado';

export const hoursSource = 'Cosasdecome';

export const faqs = [
  {
    question: '¿Dónde está La Bella Escondida?',
    answer:
      'En Condesa Villafuente Bermeja, 5, 11008 Cádiz (Puerta Tierra, junto a Santa María del Mar), coordenadas 36.5193974, -6.2854419. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono publicado es el 856 06 75 36.',
  },
  {
    question: '¿Se puede reservar?',
    answer: 'Según Cosasdecome, no hacen reservas. Ve directamente o llama para consultar.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Almuerzos todos los días excepto lunes; cenas de jueves a sábado en verano y viernes-sábado el resto del año. Sin horas exactas: llama al 856 06 75 36.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Cocina casera clásica y barata: sandwich de pollo, chile con carne, pollo al ajillo, carne al toro y guisos de cuchara del día.',
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
    'La Bella Escondida, cocina casera de barrio en Condesa Villafuente Bermeja 5, 11008 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
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
  servesCuisine: ['Casera', 'Andaluza', 'Tapas'],
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
