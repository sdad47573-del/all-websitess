/** Datos contrastados con la carta y la información pública de M'encanta. */
export const BUSINESS = {
  name: "M'encanta Comidas para Llevar",
  shortName: "M'encanta",
  mark: "M’",
  street: 'C/ Cuatrovientos, 15',
  district: 'Salteras',
  city: 'Salteras',
  region: 'Andalucía',
  postalCode: '41909',
  country: 'ES',
  siteUrl: 'https://m-encanta-comidas-para-llevar.vercel.app',
  geo: { lat: 37.4203893, lng: -6.1135301 },
  featureId: '0xd12145ee56401d9:0xb3cc17e6a60cae79',
  phone: '658 69 41 33',
  phoneHref: 'tel:+34658694133',
  description:
    "Comidas caseras para llevar en Salteras. M'encanta prepara guisos, pollos asados, tortillas, pescado frito y tapas, con menú semanal, reparto a domicilio y catering.",
};

export const MAPS = {
  place: "https://www.google.com/maps/place/m'encanta+comidas+para+llevar/@37.4203893,-6.1135301,17z/data=!3m1!4b1!4m6!3m5!1s0xd12145ee56401d9:0xb3cc17e6a60cae79!8m2!3d37.4203893!4d-6.1135301!16s%2Fg%2F11b70k465w",
  directions: 'https://www.google.com/maps/dir/?api=1&destination=37.4203893%2C-6.1135301',
  embed: 'https://maps.google.com/maps?q=37.4203893,-6.1135301&z=17&hl=es&output=embed',
  facebook: 'https://www.facebook.com/mencantacomidaparallevar/',
};

export const SERVICES = [
  'Cocina casera',
  'Comida para llevar',
  'Guisos',
  'Asador de pollos',
  'Freiduría',
  'Menú semanal',
  'Reparto a domicilio',
  'Catering para celebraciones',
];

/** Platos que aparecen en la carta fotografiada, fechada en diciembre de 2025. */
export const MENU = [
  {
    title: 'Tapas y cocina',
    items: [
      { name: 'Ensaladillas y aliños', note: 'Ensaladilla clásica, de cangrejo o pulpo; patatas alioli y aliños.' },
      { name: 'Pescado frito', note: 'Chocos, adobo, taquitos de merluza, puntillitas, huevas y boquerones.' },
      { name: 'Fritos variados', note: 'Una selección de pescado frito para compartir.' },
      { name: 'Platos de temporada', note: 'La carta anunciaba caracoles, cabrillas y chicharrones según temporada.' },
    ],
  },
  {
    title: 'Para encargar y compartir',
    items: [
      { name: 'Tortilla de patatas', note: 'Disponible por encargo, según la carta fotografiada.' },
      { name: 'Empanadas', note: 'Variedades de atún, york y queso, dátil y bacon, pizza, salmón y espinaca.' },
      { name: 'Pollos asados y guisos', note: 'Comida casera para llevar; consulta la disponibilidad del día.' },
      { name: 'Catering', note: 'Para bautizos, comuniones, comidas de empresa y reuniones familiares.' },
    ],
  },
];

export const FAQ = [
  {
    q: '¿Dónde está M’encanta?',
    a: 'La carta fotografiada indica C/ Cuatrovientos, 15, 41909 Salteras (Sevilla). Abre la ficha de Google Maps para consultar la ubicación y confirmar antes de desplazarte.',
  },
  {
    q: '¿Cuál es el teléfono para pedidos?',
    a: 'La carta fotografiada muestra el 658 69 41 33 para pedidos, consultas y reservas. Llama para confirmar que sigue vigente.',
  },
  {
    q: '¿Tienen menú semanal?',
    a: 'Sí, el negocio anuncia menú semanal. Consulta por teléfono o en su página de Facebook la propuesta actual.',
  },
  {
    q: '¿Preparan comida para eventos?',
    a: 'Sí, su página pública ofrece catering para bautizos, comuniones, comidas de empresa y reuniones familiares. Pregunta por opciones y disponibilidad.',
  },
  {
    q: '¿Hay reparto a domicilio?',
    a: 'El negocio anuncia reparto a domicilio. Consulta por teléfono las zonas, el pedido mínimo y el coste actualizado.',
  },
  {
    q: '¿Los precios de la carta siguen vigentes?',
    a: 'La carta visible en las fotos está fechada en diciembre de 2025 y advierte que los precios pueden variar. Confirma precios y platos disponibles al hacer tu pedido.',
  },
];
