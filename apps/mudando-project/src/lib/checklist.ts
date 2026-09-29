// Checklist de preparación de mudanza: compartido entre la landing y el panel de cliente.
export const CHECKLIST_TASKS = [
  {
    id: "cajas",
    title: "Compra de cajas y material",
    text: "Calcula 8–10 cajas por habitación. Nosotros las llevamos si contratas embalaje.",
  },
  {
    id: "filtro",
    title: "Declutter: menos cajas, mudanza más barata",
    text: "Vende o dona lo que no uses. Menos volumen m³ = menos precio en la calculadora.",
  },
  {
    id: "documentacion",
    title: "Documentación y valoraciones",
    text: "Fotos de objetos de valor y seguros. Contratos, escrituras y facturas contigo, no en cajas.",
  },
  {
    id: "suministros",
    title: "Cambios de suministros",
    text: "Luz, agua, gas e internet: pide el cambio con 2 semanas de antelación para no estrenar casa a oscuras.",
  },
  {
    id: "direccion",
    title: "Redirección de correo y padrón",
    text: "Correos te redirige el correo 6 meses gratis; empadronarse abre el resto de trámites.",
  },
  {
    id: "ascensor",
    title: "Reserva de ascensores y permisos",
    text: "Comunidades de origen y destino, y la zona de carga del camión si hay. Con 48 h basta si lo avisamos.",
  },
  {
    id: "kit",
    title: "Kit de supervivencia del día D",
    text: "Cargadores, kit de limpieza, sábanas, café y herramientas. Esa caja viaja contigo, no en el camión.",
  },
  {
    id: "contadores",
    title: "Fotos de contadores",
    text: "El día de la salida, fotografía luz y agua. Evita discusiones con las comercializadoras.",
  },
] as const;

export type ChecklistTaskId = (typeof CHECKLIST_TASKS)[number]["id"];
