/**
 * Datos de Restaurante Bocatapas (Alameda Hermanas Carvia Bernal, 5 · 11003 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5371668, -6.2993239) del enlace de Google Maps aportado.
 * - Dirección Alameda Hermanas Carvia Bernal 5, 11003 Cádiz y teléfono 624 43 77 44
 *   (Kitking + directorios).
 * - Terraza en jardines junto al Baluarte de la Candelaria, con vistas a la bahía.
 * - Horario orientativo 12:00-21:00 con variación por temporada: se indica confirmar.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/restaurante-bocatapas',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Restaurante Bocatapas',
  shortName: 'Bocatapas',
  category: 'Bar de tapas',
  categories: ['Bar de tapas', 'Tapas gaditanas', 'Terraza'],
  streetAddress: 'Alameda Hermanas Carvia Bernal, 5',
  district: 'Baluarte de la Candelaria',
  postalCode: '11003',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 624 43 77 44',
  latitude: 36.5371668,
  longitude: -6.2993239,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+Bocatapas/@36.5371668,-6.2993239,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd1cf2875b687:0xddac483c4ad4d8fb!8m2!3d36.5371668!4d-6.2993239!16s%2Fg%2F11t7b6ryvf?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34624437744';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: '12:00 – 21:00 · confirmar', shifts: [{ open: '12:00', close: '21:00' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '12:00 – 21:00 · confirmar', shifts: [{ open: '12:00', close: '21:00' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '12:00 – 21:00 · confirmar', shifts: [{ open: '12:00', close: '21:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '12:00 – 21:00 · confirmar', shifts: [{ open: '12:00', close: '21:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '12:00 – 21:00 · confirmar', shifts: [{ open: '12:00', close: '21:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '12:00 – 21:00 · confirmar', shifts: [{ open: '12:00', close: '21:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '12:00 – 21:00 · confirmar', shifts: [{ open: '12:00', close: '21:00' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = '12:00-21:00 orientativo · confirmar por teléfono';

export const hoursSource = 'Directorios · horario variable por temporada';

export const faqs = [
  {
    question: '¿Dónde está Bocatapas?',
    answer:
      'En la Alameda Hermanas Carvia Bernal, 5, 11003 Cádiz (junto al Baluarte de la Candelaria), coordenadas 36.5371668, -6.2993239. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono para reservar?',
    answer:
      'El teléfono publicado es el 624 43 77 44. Recomendable reservar en verano y fines de semana.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Horario orientativo de 12:00 a 21:00, variable por temporada. Llama al 624 43 77 44 para confirmar si la cocina está operativa.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Tapas gaditanas con toques modernos en terraza-jardín con vistas a la bahía: salmorejo, ensaladillas, choco frito, pulpo a la brasa y cócteles.',
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
    'Restaurante Bocatapas, tapas gaditanas en terraza-jardín en Alameda Hermanas Carvia Bernal 5, 11003 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
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
  servesCuisine: ['Gaditana', 'Tapas', 'Mediterránea'],
  acceptsReservations: true,
  openingHoursSpecification: hours.flatMap((item) =>
    item.shifts.map((shift) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: item.dayOfWeek,
      opens: shift.open,
      closes: shift.close,
    })),
  ),
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
