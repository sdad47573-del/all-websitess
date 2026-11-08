/**
 * Datos de Restaurante Tapería Estribillo (Calle Sacramento 75 · 11003 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5332967, -6.3021354) del enlace de Google Maps aportado.
 * - Dirección Calle Sacramento 75, 11003 Cádiz (turismo.cadiz.es, KitKing).
 * - Teléfono 856 52 35 53 (turismo.cadiz.es).
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/taperia-estribillo',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Restaurante Tapería Estribillo',
  shortName: 'Estribillo',
  category: 'Tapería',
  categories: ['Tapería', 'Bar de tapas'],
  streetAddress: 'Calle Sacramento 75',
  district: 'Teatro Falla',
  postalCode: '11003',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 856 52 35 53',
  latitude: 36.5332967,
  longitude: -6.3021354,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+Taper%C3%ADa+Estribillo/data=!4m7!3m6!1s0xd0dd164e1110ce1:0xcf3825e01f27220e!8m2!3d36.5332967!4d-6.3021354!16s%2Fg%2F11fs_nxm6c?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34856523553';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Horario sin confirmar · llama al 856 52 35 53';

export const faqs = [
  {
    question: '¿Dónde está Tapería Estribillo?',
    answer:
      'En la Calle Sacramento 75, 11003 Cádiz (zona Teatro Falla), coordenadas 36.5332967, -6.3021354. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 856 52 35 53.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 856 52 35 53 para confirmar apertura.',
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
  servesCuisine: ['Tapas'],
  acceptsReservations: true,
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Restaurante Tapería Estribillo, tapería en Calle Sacramento 75, 11003 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
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
