import coffee111Preview from "../assets/111-coffee-and-bakery-preview.png";
import aFuegoPreview from "../assets/a-fuego-braseria-preview.png";
import aJalarPreview from "../assets/a-jalar-preview.png";
import aStylePreview from "../assets/a-style-beauty-salon-preview.png";
import adrizalePreview from "../assets/adrizale-preview.png";
import agustinPreview from "../assets/agustin-el-picoteo-preview.png";
import amIndustriaPreview from "../assets/am-industria-del-estilo-preview.png";
import amoratoPreview from "../assets/amorato-malaga-preview.png";
import arProfessionalPreview from "../assets/ar-professional-preview.png";
import asadorGranjaPreview from "../assets/asador-la-granja-preview.png";
import autanaPreview from "../assets/autana-restaurant-preview.png";
import bacchusPreview from "../assets/bacchus-terrace-preview.png";
import granainosPreview from "../assets/bar-los-granainos-miguel-preview.png";
import barberiaHairCoolPreview from "../assets/barberia-hair-cool-preview.png";
import benavraPreview from "../assets/benavra-preview.png";
import carbikemotoPreview from "../assets/carbikemotor-preview.png";
import casaAlfonsoPreview from "../assets/casa-alfonso-teatinos-preview.png";
import comestiblesPepePreview from "../assets/comestibles-pepe-preview.png";
import cuatroCaminosPreview from "../assets/cuatro-caminos-granada-preview.png";
import destelloPreview from "../assets/el-destello-preview.png";
import elGalluPreview from "../assets/el-gallu-preview.png";
import manjarPlayaPreview from "../assets/el-manjar-playa-preview.png";
import nidoAguilarPreview from "../assets/el-nido-aguilar-preview.png";
import pollitoLioPreview from "../assets/el-pollito-lio-preview.png";
import tinglaoPreview from "../assets/el-tinglao-granada-preview.png";
import gastrobar1947Preview from "../assets/gastrobar-1947-teatinos-preview.png";
import grandPerePreview from "../assets/grand-pere-preview.png";
import naranjoPreview from "../assets/la-primera-del-naranjo-preview.png";
import merciNailsPreview from "../assets/merci-nails-preview.png";
import mesonLuisPreview from "../assets/meson-luis-granada-preview.png";
import barbacanaPreview from "../assets/restaurante-la-barbacana-preview.png";
import masiaPreview from "../assets/restaurante-la-masia-preview.png";
import natursurPreview from "../assets/restaurante-natursur-preview.png";
import puertaAlhambraPreview from "../assets/restaurante-puerta-de-la-alhambra-preview.png";
import rinconGallegoPreview from "../assets/rincon-gallego-egabrense-cabra-preview.png";
import samiBeautyPreview from "../assets/sami-beauty-preview.png";
import sazonTeatinosPreview from "../assets/sazon-teatinos-preview.png";
import cruzChaconPreview from "../assets/sergiocruzchacon-preview.png";
import sofiaGarciaPreview from "../assets/sofia-garcia-total-beauty-preview.png";
import surHeladoPreview from "../assets/sur-helado-cafe-preview.png";
import casaPinoPreview from "../assets/taberna-casa-pino-preview.png";
import chatoPreview from "../assets/taberna-el-chato-preview.png";
import charataPreview from "../assets/taberna-la-charata-preview.png";
import puraCepaPreview from "../assets/taberna-pura-cepa-cordoba-preview.png";
import talleresCaldadoPreview from "../assets/talleres-caldado-preview.png";
import theBossPreview from "../assets/the-boss-restaurant-preview.png";
import butibambaPreview from "../assets/venta-la-butibamba-preview.png";
import type { ImageMetadata } from "astro";

// Tipo explícito porque con `as const` cada elemento infería su propia forma y
// `destacado` solo existía en los marcados, lo que rompía el destructuring.
export interface Project {
  title: string;
  category: string;
  sector: string;
  description: string;
  tags: readonly string[];
  accent: string;
  url: string;
  preview: ImageMetadata;
  /** Card grande a doble ancho. Ver la nota de PORTFOLIO. */
  destacado?: boolean;
}

// `destacado: true` maqueta el proyecto como card grande a doble ancho. Se
// marca a mano (y no se calcula) para controlar el ritmo de la rejilla: con
// casi todo el listado en la misma categoría, elegir el primero de cada una
// acumularía el peso visual al principio.
export const PORTFOLIO: Project[] = [
  {
    title: "11:11 Coffee and Bakery",
    category: "Restaurantes y bares",
    sector: "Cafetería y bakery",
    description: "Cafetería y bakery en Teatinos: desayunos y meriendas con pitufos, bocadillos, bollería y una gran variedad de pan, además de tartas artesanales por encargo.",
    tags: ["Bakery", "Tartas por encargo", "Teatinos"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://111-coffee-and-bakery.netlify.app",
    preview: coffee111Preview,
  },
  {
    title: "A Fuego Brasería",
    category: "Restaurantes y bares",
    sector: "Brasería",
    description: "Parrilla de carbón de encina en Córdoba con carnes seleccionadas, pescados a la brasa y verduras de la huerta.",
    tags: ["Brasa de encina", "Carnes", "Córdoba"],
    accent: "bg-accent/15 text-primary",
    url: "https://a-fuego-braseria.vercel.app",
    preview: aFuegoPreview,
  },
  {
    title: "A Jalar",
    category: "Restaurantes y bares",
    sector: "Kebab artesanal",
    description: "Kebab artesanal en Teatinos con carne fresca, pan casero y rollos, medias lunas y campers.",
    tags: ["Kebab artesanal", "Pan casero", "Teatinos"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://a-jalar.vercel.app",
    preview: aJalarPreview,
  },
  {
    title: "A-Style Beauty Salón",
    category: "Peluquería y belleza",
    sector: "Salón de belleza",
    description: "Salón de belleza en Cruz de Humilladero, Málaga, con cejas, cuidado de la piel, uñas y tratamientos de bienestar.",
    tags: ["Cejas", "Piel y uñas", "Cruz de Humilladero"],
    accent: "bg-neutral/15 text-neutral",
    destacado: true,
    url: "https://a-style-beauty-salon.vercel.app",
    preview: aStylePreview,
  },
  {
    title: "Adrizale",
    category: "Restaurantes y bares",
    sector: "Taberna de tapeo",
    description:
      "Taberna de tapeo en la C. Arco del Consuelo de Jaén, con 4,6★ y 194 reseñas en Google. Abre a mediodía de martes a domingo.",
    tags: ["Tapeo", "4,6★ en Google", "Jaén"],
    accent: "bg-accent/15 text-primary",
    url: "https://adrizale.netlify.app",
    preview: adrizalePreview,
  },
  {
    title: "Agustín El Picoteo",
    category: "Restaurantes y bares",
    sector: "Restaurante",
    description: "Cocina española de picoteo en Teatinos, con producto ibérico, tapas y una amplia carta de vinos.",
    tags: ["Cocina española", "Tapas", "Teatinos"],
    accent: "bg-accent/15 text-primary",
    url: "https://agustin-el-picoteo.vercel.app",
    preview: agustinPreview,
  },
  {
    title: "AM Industria del Estilo",
    category: "Peluquería y belleza",
    sector: "Peluquería",
    description: "Estudio de peluquería en Teatinos especializado en corte, color y tratamientos capilares.",
    tags: ["Corte y peinado", "Color", "Tratamientos"],
    accent: "bg-neutral/15 text-neutral",
    url: "https://am-industria-del-estilo.netlify.app",
    preview: amIndustriaPreview,
  },
  {
    title: "Amorato",
    category: "Restaurantes y bares",
    sector: "Heladería y pastelería",
    description: "Heladería, cafetería y pastelería artesanal en Teatinos: helado con más de 20 sabores sin gluten, tartas, medialunas, alfajores y desayunos.",
    tags: ["Helado artesanal", "Sin gluten", "Teatinos"],
    accent: "bg-neutral/15 text-neutral",
    destacado: true,
    url: "https://amorato-malaga.netlify.app",
    preview: amoratoPreview,
  },
  {
    title: "AR Professional",
    category: "Peluquería y belleza",
    sector: "Peluquería unisex",
    description: "Salón de peluquería y belleza unisex en Teatinos, Málaga, para cortar, peinar y cuidar tu imagen.",
    tags: ["Peluquería unisex", "Color", "Teatinos"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://ar-professional.vercel.app",
    preview: arProfessionalPreview,
  },
  {
    title: "Asador La Granja",
    category: "Restaurantes y bares",
    sector: "Asador argentino",
    description: "Asador de cocina argentina en Las Lagunas de Mijas con empanadas caseras, milanesa y cortes a la parrilla.",
    tags: ["Parrilla argentina", "Empanadas", "Las Lagunas"],
    accent: "bg-accent/15 text-primary",
    url: "https://asador-la-granja.vercel.app",
    preview: asadorGranjaPreview,
  },
  {
    title: "Autana Restaurant",
    category: "Restaurantes y bares",
    sector: "Cocina venezolana",
    description: "Cocina venezolana en Mijas Costa: platos para compartir, sabores de casa y una bienvenida cercana.",
    tags: ["Cocina venezolana", "Para compartir", "Mijas Costa"],
    accent: "bg-primary/15 text-primary",
    url: "https://autana-restaurant.vercel.app",
    preview: autanaPreview,
  },
  {
    title: "Bacchus' Terrace",
    category: "Restaurantes y bares",
    sector: "Tapas y terraza",
    description: "Terraza sobre el paseo marítimo de Benalmádena con tapas caseras, sabores mediterráneos y cócteles.",
    tags: ["Tapas", "Vistas al mar", "Benalmádena"],
    accent: "bg-secondary/15 text-neutral",
    destacado: true,
    url: "https://bacchus-terrace.vercel.app",
    preview: bacchusPreview,
  },
  {
    title: "Bar La Primera del Naranjo",
    category: "Restaurantes y bares",
    sector: "Bar de cocina casera",
    description: "Cien años de cocina casera andaluza en el barrio del Naranjo: bacalao, pijotas, carnes a la brasa y guisos de siempre en un patio entoldado.",
    tags: ["Cocina casera", "Desde 1924", "Córdoba"],
    accent: "bg-accent/15 text-primary",
    url: "https://la-primera-del-naranjo.netlify.app",
    preview: naranjoPreview,
  },
  {
    title: "Bar Los Granaínos de Miguel",
    category: "Restaurantes y bares",
    sector: "Bar de mar",
    description: "Bar familiar en La Cala de Mijas con cocina española, pescados, mariscos y raciones generosas.",
    tags: ["Pescado y marisco", "Raciones", "La Cala"],
    accent: "bg-neutral/15 text-neutral",
    url: "https://bar-los-granainos-miguel.vercel.app",
    preview: granainosPreview,
  },
  {
    title: "Bar restaurante Grand Pere",
    category: "Restaurantes y bares",
    sector: "Bar restaurante",
    description:
      "Bar restaurante en el Club Natación de Almería, con 4,4★ y 796 reseñas en Google. Abierto todos los días menos los lunes.",
    tags: ["Club Natación", "796 reseñas", "Almería"],
    accent: "bg-primary/15 text-primary",
    url: "https://grand-pere.netlify.app",
    preview: grandPerePreview,
  },
  {
    title: "Bar restaurante Natursur",
    category: "Restaurantes y bares",
    sector: "Bar restaurante",
    description: "Cocina española en el Paraje Pisaica de la Virgen, en Viator (Almería), con desayunos desde primera hora y menú del día.",
    tags: ["Cocina española", "Menú del día", "Viator"],
    accent: "bg-primary/15 text-primary",
    url: "https://restaurante-natursur.netlify.app",
    preview: natursurPreview,
  },
  {
    title: "Barbería Hair Cool",
    category: "Peluquería y belleza",
    sector: "Barbería",
    description:
      "Barbería en Teatinos (Málaga): cortes modernos y clásicos, degradados, barba y cejas.",
    tags: ["Cortes", "Barba y cejas", "Teatinos"],
    accent: "bg-neutral/15 text-neutral",
    destacado: true,
    url: "https://barberia-hair-cool.netlify.app",
    preview: barberiaHairCoolPreview,
  },
  {
    title: "Benavra",
    category: "Restaurantes y bares",
    sector: "Cocina internacional",
    description: "Restaurante familiar en Torrenueva, La Cala de Mijas, con cocina internacional moderna, ingredientes locales y platos caseros.",
    tags: ["Cocina internacional", "Producto local", "La Cala de Mijas"],
    accent: "bg-accent/15 text-neutral",
    url: "https://benavra.netlify.app",
    preview: benavraPreview,
  },
  {
    title: "Café-Bar Cuatro Caminos",
    category: "Restaurantes y bares",
    sector: "Café-bar",
    description: "Desayunos, comida casera, menú del día, raciones y platos combinados en la Carretera de la Sierra, 73, en Granada.",
    tags: ["Desayunos", "Menú del día", "Granada"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://cuatro-caminos-granada.vercel.app",
    preview: cuatroCaminosPreview,
  },
  {
    title: "Carbikemoto",
    category: "Taller y motor",
    sector: "Taller de motos",
    description: "Taller de reparación de motos en Málaga, en Calle Antonio Raíz, con atención directa y llamada previa.",
    tags: ["Taller", "Motos", "Málaga"],
    accent: "bg-neutral/15 text-neutral",
    destacado: true,
    url: "https://carbikemotor.vercel.app",
    preview: carbikemotoPreview,
  },
  {
    title: "Comestibles Pepe",
    category: "Comercio",
    sector: "Charcutería",
    description: "Charcutería y tienda de alimentación en Málaga, con embutidos, jamones, quesos y cestas.",
    tags: ["Charcutería", "Alimentación", "Comercio local"],
    accent: "bg-secondary/15 text-neutral",
    destacado: true,
    url: "https://comestibles-pepe.vercel.app",
    preview: comestiblesPepePreview,
  },
  {
    title: "El Destello",
    category: "Restaurantes y bares",
    sector: "Cafetería y tartas",
    description: "Cafetería y bar de tapes en Teatinos: tartas caseras, gofres, café y copas hasta la madrugada.",
    tags: ["Tartas caseras", "Gofres", "Teatinos"],
    accent: "bg-neutral/15 text-neutral",
    url: "https://el-destello.netlify.app",
    preview: destelloPreview,
  },
  {
    title: "El Gallu",
    category: "Restaurantes y bares",
    sector: "Sidrería",
    description: "Restaurante asturiano y sidrería en Rincón de la Victoria: cachopo, gildas, croquetas caseras y sidra natural.",
    tags: ["Cocina asturiana", "Cachopo", "Rincón de la Victoria"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://el-gallu.netlify.app",
    preview: elGalluPreview,
  },
  {
    title: "El Manjar Playa",
    category: "Restaurantes y bares",
    sector: "Restaurante marinero",
    description: "Cocina mediterránea marinera en La Carihuela: pescados, mariscos, arroces y menú del día.",
    tags: ["Pescados y mariscos", "Arroces", "La Carihuela"],
    accent: "bg-accent/15 text-neutral",
    url: "https://el-manjar-playa.vercel.app",
    preview: manjarPlayaPreview,
  },
  {
    title: "El Pollito Lio",
    category: "Restaurantes y bares",
    sector: "Asador argentino",
    description: "Asador argentino en Rincón de la Victoria: pollo asado al espiedo, milanesas y empanadas caseras, con take away y delivery.",
    tags: ["Pollo al espiedo", "Empanadas", "Rincón de la Victoria"],
    accent: "bg-accent/15 text-primary",
    url: "https://el-pollito-lio.netlify.app",
    preview: pollitoLioPreview,
  },
  {
    title: "El Tinglao",
    category: "Restaurantes y bares",
    sector: "Bar restaurante",
    description: "Tapas, jamón asado, comida casera, raciones y menú del día en la calle Marqués de Mondéjar, 13, en el centro de Granada.",
    tags: ["Jamón asado", "Comida casera", "Granada"],
    accent: "bg-primary/15 text-primary",
    url: "https://el-tinglao-granada.vercel.app",
    preview: tinglaoPreview,
  },
  {
    title: "Gastrobar 1947",
    category: "Restaurantes y bares",
    sector: "Gastrobar",
    description: "Cocina argentino-española en Teatinos: milanesa, empanadas, tequeños y ensaladilla rusa, con terraza junto al parque infantil.",
    tags: ["Milanesa", "Empanadas", "Teatinos"],
    accent: "bg-secondary/15 text-neutral",
    destacado: true,
    url: "https://gastrobar-1947-teatinos.vercel.app",
    preview: gastrobar1947Preview,
  },
  {
    title: "Merci Nails",
    category: "Peluquería y belleza",
    sector: "Salón de uñas",
    description:
      "Salón de uñas en la Plaza del Teatro, en pleno centro de Málaga: manicura, pedicura, semipermanente y acrílico, sin cita previa.",
    tags: ["Sin cita previa", "Semipermanente", "Centro"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://merci-nails.netlify.app",
    preview: merciNailsPreview,
  },
  {
    title: "Mesón Luís",
    category: "Restaurantes y bares",
    sector: "Pescado y marisco",
    description: "Pescado y marisco fresco, gambas, frituras y tapas en la calle Pedro Antonio de Alarcón, 41, en Granada.",
    tags: ["Pescado y marisco", "Frituras", "Granada"],
    accent: "bg-neutral/15 text-neutral",
    url: "https://meson-luis-granada.vercel.app",
    preview: mesonLuisPreview,
  },
  {
    title: "Restaurante Casa Alfonso",
    category: "Restaurantes y bares",
    sector: "Cocina casera",
    description: "Cocina casera española en la calle Sófocles, 8 (Teatinos): guisos de siempre, albóndigas y pescado y calamar según la selección del día.",
    tags: ["Cocina casera", "Guisos", "Teatinos"],
    accent: "bg-accent/15 text-neutral",
    url: "https://casa-alfonso-teatinos.netlify.app",
    preview: casaAlfonsoPreview,
  },
  {
    title: "Restaurante El Nido",
    category: "Restaurantes y bares",
    sector: "Restaurante",
    description: "Restaurante en Aguilar de la Frontera con carnes a la brasa, cocina casera y menú del día.",
    tags: ["Carnes a la brasa", "Cocina casera", "Aguilar"],
    accent: "bg-primary/15 text-primary",
    url: "https://el-nido-aguilar.vercel.app",
    preview: nidoAguilarPreview,
  },
  {
    title: "Restaurante La Barbacana",
    category: "Restaurantes y bares",
    sector: "Brasa y pescado",
    description: "Carnes a la brasa, pescados y paellas en el centro de Marbella, con menú diario.",
    tags: ["Brasa", "Paellas", "Marbella"],
    accent: "bg-primary/15 text-primary",
    destacado: true,
    url: "https://restaurante-la-barbacana.vercel.app",
    preview: barbacanaPreview,
  },
  {
    title: "Restaurante La Masía",
    category: "Restaurantes y bares",
    sector: "Restaurante",
    description:
      "Restaurante de cocina española y mediterránea en el Conde de Barcelona de El Ejido, con 4,5★ y 184 reseñas en Google.",
    tags: ["Cocina española", "Mediterránea", "El Ejido"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://restaurante-la-masia.netlify.app",
    preview: masiaPreview,
  },
  {
    title: "Restaurante Puerta de la Alhambra",
    category: "Restaurantes y bares",
    sector: "Cocina mediterránea",
    description: "Cocina mediterránea y española con tapas y menú del día en la calle Rauda, 2, a un paso de la Alhambra.",
    tags: ["Cocina mediterránea", "Menú del día", "Granada"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://restaurante-puerta-de-la-alhambra.vercel.app",
    preview: puertaAlhambraPreview,
  },
  {
    title: "Restaurante Rincón Gallego Egabrense",
    category: "Restaurantes y bares",
    sector: "Cocina gallega",
    description: "Cocina gallega en Cabra (Córdoba): pulpo a la brasa, chuletón de rubia gallega, marisco y croquetas caseras, con terraza y patio interior.",
    tags: ["Pulpo a la brasa", "Marisco", "Cabra"],
    accent: "bg-neutral/15 text-neutral",
    url: "https://rincon-gallego-egabrense-cabra.vercel.app",
    preview: rinconGallegoPreview,
  },
  {
    title: "Sami Beauty Salon",
    category: "Peluquería y belleza",
    sector: "Peluquería y estética",
    description:
      "Peluquería y estética en el mismo local en Carlos Haya (Málaga): cortes, color, uñas y tratamientos, con cita online y sin esperas.",
    tags: ["Cita online", "Pelo y uñas", "Carlos Haya"],
    accent: "bg-neutral/15 text-neutral",
    url: "https://sami-beauty.netlify.app",
    preview: samiBeautyPreview,
  },
  {
    title: "Sazón Teatinos",
    category: "Restaurantes y bares",
    sector: "Bar de tapas y parrilla",
    description: "Tapas, raciones y parrilla en Teatinos, con gildas, croquetas caseras y platos para compartir.",
    tags: ["Tapas", "Parrilla", "Teatinos"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://sazon-teatinos.vercel.app",
    preview: sazonTeatinosPreview,
  },
  {
    title: "Scruz Abogados (Sergio Cruz Chacón)",
    category: "Servicios profesionales",
    sector: "Despacho de abogados",
    description: "Despacho en Lucena, Córdoba y Málaga con más de 20 años de experiencia en civil, penal, laboral, mercantil y familia.",
    tags: ["Derecho civil", "Penal y familia", "Lucena"],
    accent: "bg-primary/15 text-primary",
    destacado: true,
    url: "https://sergiocruzchacon.vercel.app",
    preview: cruzChaconPreview,
  },
  {
    title: "Sofía García Total Beauty",
    category: "Peluquería y belleza",
    sector: "Salón de belleza",
    description:
      "Salón de belleza en Mesonero Romanos (Teatinos, Málaga): manicuras, diseños de uñas y esmaltados, con cita previa y 5,0★ en Google.",
    tags: ["Manicuras", "Diseño de uñas", "Teatinos"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://sofia-garcia-total-beauty.netlify.app",
    preview: sofiaGarciaPreview,
  },
  {
    title: "Sur Helado Café",
    category: "Restaurantes y bares",
    sector: "Heladería y cafetería",
    description:
      "Helado café en C. Pirandello (Teatinos): helado artesanal, café, tartas y bocadillos, con terraza en la calle y 4,9★ en Google.",
    tags: ["Helado artesanal", "Terraza", "Teatinos"],
    accent: "bg-accent/15 text-primary",
    url: "https://sur-helado-cafe.netlify.app",
    preview: surHeladoPreview,
  },
  {
    title: "Taberna Casa Pino",
    category: "Restaurantes y bares",
    sector: "Taberna",
    description:
      "Taberna de barrio en La Cala de Mijas con cocina española de siempre: croquetas caseras, ensaladilla rusa y tapas para compartir, con música en directo.",
    tags: ["Tapas y vinos", "Música en directo", "La Cala de Mijas"],
    accent: "bg-accent/15 text-primary",
    destacado: true,
    url: "https://taberna-casa-pino.netlify.app",
    preview: casaPinoPreview,
  },
  {
    title: "Taberna El Chato",
    category: "Restaurantes y bares",
    sector: "Taberna",
    description: "Taberna en Villarrubia especializada en carnes maduradas a la brasa y cocina tradicional.",
    tags: ["Carnes maduradas", "Brasa", "Cocina tradicional"],
    accent: "bg-accent/15 text-primary",
    url: "https://taberna-el-chato.vercel.app",
    preview: chatoPreview,
  },
  {
    title: "Taberna La Charata",
    category: "Restaurantes y bares",
    sector: "Taberna",
    description: "Taberna familiar en Rincón de la Victoria con tapas, guisos y recetas caseras.",
    tags: ["Tapas", "Cocina casera", "Rincón de la Victoria"],
    accent: "bg-neutral/15 text-neutral",
    url: "https://taberna-la-charata.vercel.app",
    preview: charataPreview,
  },
  {
    title: "Taberna Pura Cepa",
    category: "Restaurantes y bares",
    sector: "Taberna cordobesa",
    description: "Cocina cordobesa en Ciudad Jardín: salmorejo, flamenquín, rabo de toro y tablas de ibéricos, con terraza, desayunos y vinos Montilla-Moriles.",
    tags: ["Salmorejo", "Rabo de toro", "Córdoba"],
    accent: "bg-accent/15 text-primary",
    destacado: true,
    url: "https://taberna-pura-cepa-cordoba.vercel.app",
    preview: puraCepaPreview,
  },
  {
    title: "Talleres Caldado",
    category: "Taller y motor",
    sector: "Taller mecánico",
    description:
      "Taller de coches en la avenida Carlos Haya de Málaga, dentro de la red Eurotaller, para el mantenimiento y la reparación de tu vehículo.",
    tags: ["Eurotaller", "Mantenimiento", "Carlos Haya"],
    accent: "bg-primary/15 text-primary",
    url: "https://talleres-caldado.netlify.app",
    preview: talleresCaldadoPreview,
  },
  {
    title: "The Boss Restaurante",
    category: "Restaurantes y bares",
    sector: "Restaurante",
    description:
      "Restaurante en La Cala del Moral: pizza al horno de leña, pasta, carnes y desayunos, con terraza.",
    tags: ["Horno de leña", "Terraza", "La Cala del Moral"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://the-boss-restaurant.netlify.app",
    preview: theBossPreview,
  },
  {
    title: "Venta La Butibamba",
    category: "Restaurantes y bares",
    sector: "Venta tradicional",
    description: "Cocina casera y tradición malagueña en La Cala de Mijas, con su famoso bocadillo de lomo en manteca.",
    tags: ["Lomo en manteca", "Cocina malagueña", "La Cala de Mijas"],
    accent: "bg-secondary/15 text-neutral",
    url: "https://venta-la-butibamba.vercel.app",
    preview: butibambaPreview,
  },
];
