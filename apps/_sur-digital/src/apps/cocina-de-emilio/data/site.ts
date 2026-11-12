/**
 * Datos de La Cocina de Emilio (Alameda de los Capuchinos, 5 · 30002 Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: 37.9779289, -1.1282832, feature
 *   0xd63820684f46c41:0x23deace13383f124 (nombre, ubicación y categoría).
 * - Reverse-geocode OSM (Nominatim): Alameda de los Capuchinos, El Carmen,
 *   Murcia 30002.
 * - Fotografías del perfil público en Google Maps: el rótulo de la casa, el
 *   cartel del menú semanal, el horario de la puerta y los platos. En el rótulo
 *   y en el cartel aparece el teléfono 968 26 25 77 (Marta).
 * - Página pública de Facebook del local: c/ Alameda Capuchino 5, Murcia,
 *   teléfono 968 26 25 77, «comida casera con productos frescos de la huerta».
 *
 * Lo que esta web NO inventa: la ficha no publica nota ni número de reseñas
 * verificable, ni horas exactas de apertura. El horario (lunes a viernes
 * abierto, sábado y domingo cerrado) es el del cartel de la puerta, y los
 * precios son los de ese mismo cartel. Ante cualquier duda manda el local.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/cocina-de-emilio',
  consultado: '12 de noviembre de 2026',
} as const;

export const business = {
  name: 'La Cocina de Emilio',
  shortName: 'La Cocina de Emilio',
  category: 'Comida casera',
  categories: ['Comida casera', 'Menú del día', 'Comida para llevar', 'Cocina murciana'],
  streetAddress: 'Alameda de los Capuchinos, 5',
  district: 'El Carmen',
  postalCode: '30002',
  city: 'Murcia',
  municipality: 'Murcia',
  province: 'Murcia',
  region: 'Región de Murcia',
  country: 'ES',
  phone: '+34 968 26 25 77',
  latitude: 37.9779289,
  longitude: -1.1282832,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Cocina+De+Emilio/@37.9779289,-1.1282832,17z/data=!3m1!4b1!4m6!3m5!1s0xd63820684f46c41:0x23deace13383f124!8m2!3d37.9779289!4d-1.1282832!16s%2Fg%2F11b7gpybqm?authuser=0&hl=es&entry=ttu';

/** Sin place id público no hay enlace directo a la pestaña de reseñas. */
export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34968262577';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&hl=es&output=embed`;

/** Horario del cartel de la puerta: sin horas, solo días de apertura. */
export const hours = [
  { day: 'Lunes', service: 'Abierto', dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Abierto', dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Abierto', dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Abierto', dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Abierto', dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Cerrado', dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Cerrado', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lunes a viernes abierto · Sábado y domingo cerrado';

export const hoursSource = 'Cartel del local';

export const hoursNote =
  'El cartel de la puerta no publica horas exactas: marca abierto de lunes a viernes y cerrado sábados y domingos. Llama al 968 26 25 77 (Marta) para confirmar el horario del día y los encargos.';

/**
 * Menú del cartel de la puerta (fotografía del perfil de Google Maps). Los
 * precios son por plato, tal y como aparecen; el cartel no indica si el menú
 * incluye pan, bebida o postre.
 */
export const menu = [
  {
    day: 'Lunes',
    items: [
      { name: 'Lentejas con chorizo', price: '4 €' },
      { name: 'Tallarines con verdura', price: '4 €' },
      { name: 'Arroz tres delicias', price: '4 €' },
      { name: 'Alitas fritas con patatas asadas', price: '4,50 €' },
      { name: 'Lomo a la plancha', price: '4,50 €' },
      { name: 'Macarrones boloñesa', price: '4 €' },
      { name: 'Bacalao con cebolla confitada', price: '5,50 €' },
      { name: 'Merluza a la romana', price: '4,80 €' },
      { name: 'Coliflor con bechamel', price: '4,50 €' },
      { name: 'Magro con tomate', price: '4,80 €' },
      { name: 'Gazpacho manchego', price: '4 €' },
    ],
  },
  {
    day: 'Martes',
    items: [
      { name: 'Albóndigas en salsa', price: '4,50 €' },
      { name: 'Arroz con habichuelas', price: '4 €' },
      { name: 'Canelones', price: '4 €' },
      { name: 'Emperador en salsa verde', price: '5,50 €' },
      { name: 'Hervido', price: '4,50 €' },
      { name: 'Paella de pollo', price: '4,50 €' },
      { name: 'Muslitos de pollo al ajillo', price: '4,50 €' },
      { name: 'Macarrones con pollo y verdura', price: '4 €' },
      { name: 'Media dorada al horno', price: '5,50 €' },
      { name: 'Merluza a la bilbaína', price: '4,80 €' },
      { name: 'Muslo de pavo en salsa', price: '4,60 €' },
      { name: 'Zarangollo', price: '4 €' },
    ],
  },
  {
    day: 'Miércoles',
    items: [
      { name: 'Potaje de acelgas', price: '4 €' },
      { name: 'Arroz con magra y costilletas', price: '4,50 €' },
      { name: 'Asado de pollo', price: '4,50 €' },
      { name: 'Bacalao rebozado con pimiento', price: '5 €' },
      { name: 'Carrillera', price: '5 €' },
      { name: 'Fideuá de marisco', price: '4,50 €' },
      { name: 'Mero a la cazuela', price: '5 €' },
      { name: 'Patatas a lo pobre con chorizo y huevo', price: '4,50 €' },
      { name: 'Solomillo en salsa de setas', price: '5 €' },
      { name: 'Tallarines carbonara', price: '4 €' },
    ],
  },
  {
    day: 'Jueves',
    items: [
      { name: 'Arroz a banda', price: '4,80 €' },
      { name: 'Asado de salmón', price: '6 €' },
      { name: 'Berenjena rellena', price: '4,50 €' },
      { name: 'Calamar relleno', price: '5 €' },
      { name: 'Cocido', price: '4,50 €' },
      { name: 'Pechuga al foie', price: '4,50 €' },
      { name: 'Lasaña', price: '4 €' },
      { name: 'Macarrones con atún', price: '4 €' },
      { name: 'Merluza a la vasca', price: '5 €' },
      { name: 'Muslo de pollo al horno', price: '4,50 €' },
      { name: 'Olla gitana', price: '4 €' },
    ],
  },
  {
    day: 'Viernes',
    items: [
      { name: 'Arroz y verdura', price: '4,50 €' },
      { name: 'Asado de cordero', price: '6 €' },
      { name: 'Conejo al ajillo cabañil', price: '4,50 €' },
      { name: 'Guiso de albóndigas de bacalao', price: '4,50 €' },
      { name: 'Macarrones con atún', price: '4 €' },
      { name: 'Ternera', price: '5 €' },
      { name: 'Merluza a la sidra', price: '5 €' },
      { name: 'Olla de cerdo', price: '4,50 €' },
      { name: 'Pastel de carne con puré', price: '4,50 €' },
      { name: 'Pollo a la cerveza', price: '4,50 €' },
      { name: 'Espaguetis boloñesa', price: '4 €' },
    ],
  },
  {
    day: 'Todos los días',
    items: [
      { name: 'Ensalada de pasta', price: '4 €' },
      { name: 'Ensalada murciana', price: '2,50 €' },
      { name: 'Ensaladilla rusa', price: '2,50 €' },
      { name: 'Tortilla de patatas', price: '3,50 € ración' },
      { name: 'Tortilla de verdura', price: '4 € ración' },
      { name: 'Pechuga empanada', price: '5 €' },
      { name: 'Croquetas', price: '0,80 € unidad' },
    ],
  },
] as const;

export const menuNote =
  'Platos y precios del cartel que se ve en la puerta del local, en euros y por ración. El cartel no detalla si el menú incluye pan, bebida o postre. Cambia cada semana: llama al 968 26 25 77 para saber qué hay hoy o para encargar comida.';

export const menuExtras = [
  'Se hace toda clase de comidas por encargo.',
  'Los sábados, migas; pan casero a diario.',
  'Los pedidos se hacen por teléfono, al 968 26 25 77 (Marta).',
];

export const faqs = [
  {
    question: '¿Dónde está La Cocina de Emilio?',
    answer:
      'En la Alameda de los Capuchinos, 5, 30002 Murcia, en el barrio de El Carmen, junto a la plaza de abastos. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer:
      'El 968 26 25 77. Es también el número para encargar comida: en el cartel figura a nombre de Marta.',
  },
  {
    question: '¿Qué horario tiene?',
    answer:
      'El cartel de la puerta marca abierto de lunes a viernes y cerrado sábados y domingos. No publica horas exactas, así que conviene llamar antes de ir, sobre todo al mediodía.',
  },
  {
    question: '¿Qué se puede comer?',
    answer:
      'Comida casera con menú del día: los lunes lentejas con chorizo o bacalao con cebolla confitada; los martes albóndigas en salsa o paella de pollo; los miércoles potaje de acelgas o carrillera; los jueves arroz a banda o merluza a la vasca; los viernes asado de cordero o merluza a la sidra. Además hay ensaladas, tortillas, croquetas y pechuga empanada todos los días.',
  },
  {
    question: '¿Cuánto cuesta comer?',
    answer:
      'Los platos del menú están entre 4 € y 6 € según el día y el plato. Las ensaladas van de 2,50 € a 4 €, la ración de tortilla de patatas 3,50 € y las croquetas 0,80 € la unidad, según el cartel del local.',
  },
  {
    question: '¿Se puede encargar comida?',
    answer:
      'Sí. El cartel anuncia que se hace toda clase de comidas por encargo y que los sábados hay migas, con pan casero a diario. Los pedidos se hacen por teléfono, al 968 26 25 77.',
  },
  {
    question: '¿Se puede reservar o pedir por esta web?',
    answer:
      'No: esta web es informativa y no gestiona reservas ni pedidos. El único canal es el teléfono del local.',
  },
  {
    question: '¿De dónde salen las fotos?',
    answer:
      'Del perfil público del local en Google Maps: el rótulo, la vitrina, el cartel del menú, la paella, las albóndigas, el rebozado, las tortillas y la ensaladilla. Se muestran como referencia del local; si eres el titular y quieres retirarlas, escríbenos y las quitamos.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'La Cocina de Emilio, comida casera y menú del día en la Alameda de los Capuchinos, 5, El Carmen (30002 Murcia). Web informativa con teléfono, horario, menú del cartel y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  servesCuisine: ['Casera', 'Murciana', 'Española'],
  priceRange: '€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: mapsUrl,
  takeaway: true,
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
