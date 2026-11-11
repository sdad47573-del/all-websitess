/**
 * Datos de 78 Street Burger (Avda. Virgen de Guadalupe 5, local 1 · 10001 Cáceres).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (39.4718948, -6.379794) del enlace de Google Maps aportado.
 * - Dirección Avda. Virgen de Guadalupe 5, local 1, 10001 Cáceres (Just Eat, todo.caceres.online).
 * - Teléfono 927 04 23 58 (Instagram y Facebook oficiales del local).
 *
 * Las fotos son las de la ficha de Google Maps del local (src/assets/fotos/, con
 * su .maps-manifest.json), descargadas con scripts/fetch-maps-photos.mjs.
 * No se reproducen reseñas literales, horarios ni valoraciones.
 */

import type { ImageMetadata } from 'astro';

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true });
const foto = (name: string) => fotos[`../assets/fotos/${name}`].default;

export const site = {
  siteUrl: 'https://www.sur-digital.com/78-street-burger',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: '78 Street Burger',
  shortName: '78 Street Burger',
  category: 'Hamburguesería',
  categories: ['Hamburguesería', 'Restaurante'],
  streetAddress: 'Avda. Virgen de Guadalupe 5, local 1',
  district: 'Centro-Casco Antiguo',
  postalCode: '10001',
  city: 'Cáceres',
  province: 'Cáceres',
  region: 'Extremadura',
  country: 'ES',
  phone: '+34 927 04 23 58',
  latitude: 39.4718948,
  longitude: -6.379794,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/78+STREET+BURGER/@39.4718948,-6.379794,17z/data=!3m1!4b1!4m6!3m5!1s0xd15df7d9b318a07:0x56c19e3c58b00099!8m2!3d39.4718948!4d-6.379794!16s%2Fg%2F11fr1x9sq_?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34927042358';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/** Collage de la portada: hamburguesa, patatas rancheras y fachada. */
export const heroPhotos = {
  main: { src: foto('78-street-burger-apaisada-03.jpg'), alt: 'Hamburguesa Bacon Cheese con patatas de 78 Street Burger' },
  top: { src: foto('78-street-burger-vertical-06.jpg'), alt: 'Patatas rancheras con queso y bacon de 78 Street Burger' },
  bottom: { src: foto('78-street-burger-fachada.jpg'), alt: 'Fachada de 78 Street Burger en Avda. Virgen de Guadalupe, Cáceres' },
} as const;

export const galleryPhotos = [
  { src: foto('78-street-burger-vertical-05.jpg'), alt: 'Hamburguesa con huevo, bacon y patatas fritas' },
  { src: foto('78-street-burger-vertical-06.jpg'), alt: 'Patatas rancheras con queso fundido y bacon' },
  { src: foto('78-street-burger-apaisada-10.jpg'), alt: 'Tequeños con salsa dulce para compartir' },
  { src: foto('78-street-burger-vertical-04.jpg'), alt: 'Nachos con guacamole, queso y jalapeños' },
  { src: foto('78-street-burger-vertical-07.jpg'), alt: 'Perrito con queso y bacon, patatas y refresco' },
  { src: foto('78-street-burger-vertical-02.jpg'), alt: 'Hamburguesa con aro de cebolla y queso' },
] as const;

export const hours = [
  { day: 'Lunes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Horario sin confirmar · llama al 927 04 23 58';

export const faqs = [
  {
    question: '¿Dónde está 78 Street Burger?',
    answer:
      'En la Avda. Virgen de Guadalupe 5, local 1, 10001 Cáceres (Extremadura), coordenadas 39.4718948, -6.379794. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 927 04 23 58.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 927 04 23 58 para confirmar apertura y pedidos.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'La galería de esta web muestra fotos del local; en la ficha de Google Maps, enlazada desde aquí, tienes más fotos y las opiniones de los clientes.',
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
    '78 Street Burger, hamburguesería en Avda. Virgen de Guadalupe 5, local 1, 10001 Cáceres. Web informativa no oficial con ubicación, contacto y mapa.',
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
