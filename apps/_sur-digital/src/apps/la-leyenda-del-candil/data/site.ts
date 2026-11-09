/**
 * Datos de La Leyenda del Candil (Cádiz, zona Plaza Candelaria).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5297157, -6.2990681) del enlace de Google Maps aportado.
 * - Instagram oficial @laleyendadelcandil: "Sabores de Cádiz", "Todos los días de 8:30 a 23:30",
 *   "Reservas: 856 610 794" (consultado el 18 de octubre de 2026).
 * - Zona Plaza de la Candelaria / casco antiguo de Cádiz (11001), deducida de las coordenadas
 *   y de las publicaciones del propio local. Sin número de portal verificado: no se inventa.
 *
 * NO se copian fotos, reseñas literales, horarios de Google Maps ni valoraciones de Google.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/la-leyenda-del-candil',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'La Leyenda del Candil',
  shortName: 'La Leyenda',
  category: 'Restaurante',
  categories: ['Restaurante', 'Bar de tapas', 'Sabores de Cádiz'],
  streetAddress: 'Zona Plaza de la Candelaria',
  district: 'Casco Antiguo',
  postalCode: '11001',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 856 61 07 94',
  latitude: 36.5297157,
  longitude: -6.2990681,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/La+Leyenda+del+Candil/@36.5297157,-6.2990681,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd36266601ed1:0x60c00642d39e0195!8m2!3d36.5297157!4d-6.2990681!16s%2Fg%2F11p1km2k38?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const instagramUrl = 'https://www.instagram.com/laleyendadelcandil/';

export const phoneHref = 'tel:+34856610794';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario publicado por el propio local en su bio de Instagram:
 * "Todos los días de 8:30 a 23:30". Se reproduce tal cual, citando la fuente,
 * sin mezclarlo con horarios de Google Maps.
 */
export const hours = [
  { day: 'Lunes', service: '8:30 – 23:30', shifts: [{ open: '08:30', close: '23:30' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '8:30 – 23:30', shifts: [{ open: '08:30', close: '23:30' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '8:30 – 23:30', shifts: [{ open: '08:30', close: '23:30' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '8:30 – 23:30', shifts: [{ open: '08:30', close: '23:30' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '8:30 – 23:30', shifts: [{ open: '08:30', close: '23:30' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '8:30 – 23:30', shifts: [{ open: '08:30', close: '23:30' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '8:30 – 23:30', shifts: [{ open: '08:30', close: '23:30' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Todos los días de 8:30 a 23:30 (según Instagram del local)';

export const hoursSource = 'Bio de Instagram @laleyendadelcandil';

export const faqs = [
  {
    question: '¿Dónde está La Leyenda del Candil?',
    answer:
      'En la zona de la Plaza de la Candelaria, casco antiguo de Cádiz (11001), coordenadas 36.5297157, -6.2990681. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono para reservar?',
    answer:
      'El teléfono que el propio local publica en su Instagram (@laleyendadelcandil) para reservas es el 856 61 07 94.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según la bio de su Instagram, abre todos los días de 8:30 a 23:30. Confirma por teléfono si vas en festivo.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Se presenta como "Sabores de Cádiz": cocina gaditana para desayunos, tapas y comidas en el centro de Cádiz. La carta cambia, así que pregúntala en el local o en su Instagram.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps y en su Instagram @laleyendadelcandil, enlazados desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
    'La Leyenda del Candil, sabores de Cádiz en la zona de la Plaza de la Candelaria, casco antiguo de Cádiz. Abre todos los días de 8:30 a 23:30. Web informativa no oficial con ubicación, contacto y mapa.',
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
  servesCuisine: ['Gaditana', 'Andaluza', 'Tapas'],
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
