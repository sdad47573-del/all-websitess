/**
 * Datos de Restaurante Entre Castillos (C. San Félix · 11002 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5297984, -6.3037225) del enlace de Google Maps aportado.
 * - Web/carta oficial restaurante-entre-castillos.makro.bar: C. San Félix 11002 Cádiz,
 *   teléfono +34 604 24 56 57, email restaurante.entrecastillos@gmail.com.
 * - Instagram/Facebook @entrecastillosrestaurante: Calle San Félix, reserva 604 24 56 57.
 * - Horario no verificado en fuente oficial accesible: no se publica, se indica llamar.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://restaurante-entre-castillos.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Restaurante Entre Castillos',
  shortName: 'Entre Castillos',
  category: 'Restaurante',
  categories: ['Restaurante', 'Cocina gaditana', 'Terraza'],
  streetAddress: 'C. San Félix',
  district: 'La Caleta / La Viña',
  postalCode: '11002',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 604 24 56 57',
  email: 'restaurante.entrecastillos@gmail.com',
  latitude: 36.5297984,
  longitude: -6.3037225,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
  officialWeb: 'https://restaurante-entre-castillos.makro.bar/?lang=es',
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+Entre+Castillos/@36.5297984,-6.3037225,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd1c4cb0bdab9:0x35a72654576e72c1!8m2!3d36.5297984!4d-6.3037225!16s%2Fg%2F11txx483zf?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const officialWebUrl = business.officialWeb;

export const instagramUrl = 'https://www.instagram.com/entrecastillosrestaurante/';

export const facebookUrl = 'https://www.facebook.com/p/EntreCastillos-Restaurante-100091279454994/';

export const phoneHref = 'tel:+34604245657';

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

export const hoursSummary = 'Horario sin confirmar · llama al 604 24 56 57';

export const hoursSource = 'Web oficial del local';

export const faqs = [
  {
    question: '¿Dónde está Entre Castillos?',
    answer:
      'En la C. San Félix, 11002 Cádiz (zona La Caleta / La Viña), coordenadas 36.5297984, -6.3037225. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono para reservar?',
    answer: 'El teléfono oficial es el 604 24 56 57, publicado en su web y en sus redes.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos horario porque no se ha verificado en una fuente oficial accesible. Llama al 604 24 56 57 o consulta su web oficial antes de ir.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Restaurante de cocina gaditana junto a La Caleta, con terraza y servicio para llevar. La carta está en su web oficial restaurante-entre-castillos.makro.bar.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps y en su Instagram @entrecastillosrestaurante, enlazados desde esta web. Aquí solo se usarán fotos propias con permiso.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa no oficial, creada con datos públicos de ubicación y contacto. La web oficial es restaurante-entre-castillos.makro.bar. Esta web no vende ni reserva nada.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Restaurante Entre Castillos, cocina gaditana en C. San Félix, 11002 Cádiz, junto a La Caleta. Web informativa no oficial con ubicación, contacto y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  email: business.email,
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
  servesCuisine: ['Gaditana', 'Andaluza'],
  acceptsReservations: true,
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
