/**
 * Datos de El Garbanzo Negro (Calle Sacramento, 18 · 11001 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5317268, -6.2981391) del enlace de Google Maps aportado.
 * - Turismo Cádiz (Ayuntamiento): restaurante, centro histórico, Calle Sacramento 18,
 *   teléfono 956 22 23 17, web garbanzonegro.qr.i3net.es, Instagram
 *   elgarbanzonegrocadiz, cocina tradicional reinterpretada, menú del día,
 *   horario Lun-Sáb 13:00-16:00, especialidad menú del día.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://el-garbanzo-negro.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'El Garbanzo Negro',
  shortName: 'Garbanzo Negro',
  category: 'Restaurante',
  categories: ['Restaurante', 'Cocina gaditana', 'Menú del día'],
  streetAddress: 'Calle Sacramento, 18',
  district: 'Centro histórico',
  postalCode: '11001',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 956 22 23 17',
  latitude: 36.5317268,
  longitude: -6.2981391,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
  officialWeb: 'https://garbanzonegro.qr.i3net.es/',
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/El+Garbanzo+Negro/@36.5317268,-6.2981391,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd161afae4433:0x78b9986a3d8bad65!8m2!3d36.5317268!4d-6.2981391!16s%2Fg%2F11y3lpgqy?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const officialWebUrl = business.officialWeb;

export const instagramUrl = 'https://www.instagram.com/elgarbanzonegrocadiz/';

export const phoneHref = 'tel:+34956222317';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: '13:00 – 16:00', shifts: [{ open: '13:00', close: '16:00' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '13:00 – 16:00', shifts: [{ open: '13:00', close: '16:00' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '13:00 – 16:00', shifts: [{ open: '13:00', close: '16:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '13:00 – 16:00', shifts: [{ open: '13:00', close: '16:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '13:00 – 16:00', shifts: [{ open: '13:00', close: '16:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '13:00 – 16:00', shifts: [{ open: '13:00', close: '16:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lun-Sáb 13:00-16:00 · Dom cerrado';

export const hoursSource = 'Turismo Cádiz (Ayuntamiento)';

export const faqs = [
  {
    question: '¿Dónde está El Garbanzo Negro?',
    answer:
      'En la Calle Sacramento, 18, 11001 Cádiz (centro histórico), coordenadas 36.5317268, -6.2981391. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono para reservar?',
    answer: 'El teléfono publicado por Turismo Cádiz es el 956 22 23 17.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según Turismo Cádiz: de lunes a sábado de 13:00 a 16:00, domingo cerrado. Confirma por teléfono en festivos.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Restaurante moderno que reinterpreta la cocina tradicional gaditana, con menú del día a buen precio. Carta en garbanzonegro.qr.i3net.es.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps y en su Instagram @elgarbanzonegrocadiz, enlazados desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
    'El Garbanzo Negro, cocina gaditana reinterpretada en Calle Sacramento 18, 11001 Cádiz, con menú del día. Web informativa no oficial con ubicación, contacto y mapa.',
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
  servesCuisine: ['Gaditana', 'Mediterránea'],
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
