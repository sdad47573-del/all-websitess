// Textos de la interfaz (navegación, footer y formulario) en los seis idiomas.
//
// Aquí solo vive lo que se repite en todas las páginas; el contenido propio de
// cada página traducida va en su diccionario (ver src/data/i18n.ts). Ambos
// módulos son la única fuente de verdad: los componentes piden `ui(lang)` y no
// llevan copy en español escrito a mano.
export type UiLang = "es" | "en" | "de" | "fr" | "pt" | "ru";

export interface NavStrings {
  services: string;
  specialities: string;
  clients: string;
  pricing: string;
  faq: string;
  blog: string;
  contact: string;
}

export interface ContactStrings {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  formTitleA: string;
  formTitleB: string;
  formLead: string;
  role: string;
  button: string;
  badgeTime: string;
  badgeArea: string;
  badgeLockin: string;
  privacyBefore: string;
  privacyLink: string;
  privacyAfter: string;
}

export interface FooterStrings {
  strap: string;
  servicesHead: string;
  servicesAll: string;
  pricing: string;
  glossary: string;
  specialitiesAll: string;
  contactHead: string;
  linkedin: string;
  hoursHead: string;
  hours: string;
  languagesHead: string;
  legal: string;
  privacy: string;
  rights: string;
}

// Textos de accesibilidad del logo 3D del hero: el aria-label que promete el
// arrastre, la versión corta cuando no hay 3D (red lenta) y los avisos de
// carga y error.
export interface Hero3dStrings {
  label: string;
  labelLite: string;
  loading: string;
  error: string;
}

export interface LocaleStrings {
  nav: NavStrings;
  common: { skip: string; languages: string; prices: string };
  hero3d: Hero3dStrings;
  contact: ContactStrings;
  footer: FooterStrings;
}

export const UI: Record<UiLang, LocaleStrings> = {
  es: {
    nav: {
      services: "Servicios",
      specialities: "Especialidades",
      clients: "Clientes",
      pricing: "Precios",
      faq: "FAQ",
      blog: "Blog",
      contact: "Escríbenos",
    },
    common: { skip: "Saltar al contenido", languages: "Idiomas", prices: "Precios" },
    hero3d: {
      label:
        "Logo 3D interactivo. Se balancea solo, gira al arrastrarlo y da una vuelta completa al hacer clic.",
      labelLite: "Logo de Sur Digital",
      loading: "Cargando modelo 3D…",
      error: "No se ha podido cargar el modelo 3D",
    },
    contact: {
      metaTitle: "Contacto: hablemos de tu web | Sur Digital",
      metaDescription:
        "Cuéntanos qué necesita tu negocio y te respondemos por LinkedIn en menos de 24 horas. Presupuesto cerrado por escrito, sin permanencia.",
      title: "Contacto",
      lead: "Sin formularios largos ni llamadas comerciales: un mensaje con lo que necesitas y una respuesta clara en menos de 24 horas.",
      formTitleA: "Hablemos de",
      formTitleB: "tu web",
      formLead:
        "Cuéntanos qué necesitas y te respondemos por LinkedIn en menos de 24h.",
      role: "Diseño y desarrollo web en Málaga",
      button: "Escríbenos por LinkedIn",
      badgeTime: "Respuesta en menos de 24h",
      badgeArea: "Málaga y provincia",
      badgeLockin: "Sin permanencia",
      privacyBefore: "Al escribirnos aceptas nuestra",
      privacyLink: "política de privacidad",
      privacyAfter: ". Nada de spam.",
    },
    footer: {
      strap: "Webs rápidas para negocios de Málaga. Desde 0€, en menos de 7 días.",
      servicesHead: "Servicios",
      servicesAll: "Todos los servicios",
      pricing: "Precios y extras",
      glossary: "Glosario web",
      specialitiesAll: "Especialidades",
      contactHead: "Contacto",
      linkedin: "Sur Digital en LinkedIn",
      hoursHead: "Horario",
      hours: "Lun–jue: 10:00–20:00 · Vie: 10:00–15:00",
      languagesHead: "Idiomas",
      legal: "Aviso legal",
      privacy: "Privacidad",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      services: "Services",
      specialities: "Sectors",
      clients: "Clients",
      pricing: "Pricing",
      faq: "FAQ",
      blog: "Blog",
      contact: "Get in touch",
    },
    common: { skip: "Skip to content", languages: "Languages", prices: "Pricing" },
    hero3d: {
      label:
        "Interactive 3D logo. It sways on its own, turns when you drag it and does a full spin on click.",
      labelLite: "Sur Digital logo",
      loading: "Loading 3D model…",
      error: "The 3D model could not be loaded",
    },
    contact: {
      metaTitle: "Contact: let's talk about your website | Sur Digital",
      metaDescription:
        "Tell us what your business needs and we'll reply on LinkedIn within 24 hours. Fixed quote in writing, no lock-in.",
      title: "Contact",
      lead: "No long forms and no sales calls: one message with what you need and a clear answer within 24 hours.",
      formTitleA: "Let's talk about",
      formTitleB: "your website",
      formLead: "Tell us what you need and we'll reply on LinkedIn within 24 hours.",
      role: "Web design and development in Málaga",
      button: "Message us on LinkedIn",
      badgeTime: "Reply within 24 hours",
      badgeArea: "Málaga and province",
      badgeLockin: "No lock-in",
      privacyBefore: "By messaging us you accept our",
      privacyLink: "privacy policy",
      privacyAfter: ". No spam.",
    },
    footer: {
      strap: "Fast websites for businesses in Málaga. From €0, in under 7 days.",
      servicesHead: "Services",
      servicesAll: "All services",
      pricing: "Pricing and extras",
      glossary: "Web glossary",
      specialitiesAll: "Sectors",
      contactHead: "Contact",
      linkedin: "Sur Digital on LinkedIn",
      hoursHead: "Opening hours",
      hours: "Mon–Thu: 10:00–20:00 · Fri: 10:00–15:00",
      languagesHead: "Languages",
      legal: "Legal notice",
      privacy: "Privacy",
      rights: "All rights reserved.",
    },
  },

  de: {
    nav: {
      services: "Leistungen",
      specialities: "Branchen",
      clients: "Kunden",
      pricing: "Preise",
      faq: "FAQ",
      blog: "Blog",
      contact: "Schreiben Sie uns",
    },
    common: { skip: "Zum Inhalt springen", languages: "Sprachen", prices: "Preise" },
    hero3d: {
      label:
        "Interaktives 3D-Logo. Es wiegt sich von selbst, dreht sich beim Ziehen und macht beim Klick eine volle Umdrehung.",
      labelLite: "Sur-Digital-Logo",
      loading: "3D-Modell wird geladen…",
      error: "Das 3D-Modell konnte nicht geladen werden",
    },
    contact: {
      metaTitle: "Kontakt: sprechen wir über Ihre Website | Sur Digital",
      metaDescription:
        "Sagen Sie uns, was Ihr Unternehmen braucht – wir antworten über LinkedIn in unter 24 Stunden. Fester Preis schriftlich, keine Bindung.",
      title: "Kontakt",
      lead: "Keine langen Formulare, keine Verkaufsanrufe: eine Nachricht mit Ihrem Anliegen und eine klare Antwort in unter 24 Stunden.",
      formTitleA: "Sprechen wir über",
      formTitleB: "Ihre Website",
      formLead:
        "Sagen Sie uns, was Sie brauchen – wir antworten über LinkedIn in unter 24 Stunden.",
      role: "Webdesign und Entwicklung in Málaga",
      button: "Schreiben Sie uns auf LinkedIn",
      badgeTime: "Antwort in unter 24 Stunden",
      badgeArea: "Málaga und Provinz",
      badgeLockin: "Keine Bindung",
      privacyBefore: "Mit Ihrer Nachricht akzeptieren Sie unsere",
      privacyLink: "Datenschutzerklärung",
      privacyAfter: ". Kein Spam.",
    },
    footer: {
      strap: "Schnelle Websites für Unternehmen in Málaga. Ab 0 €, in unter 7 Tagen.",
      servicesHead: "Leistungen",
      servicesAll: "Alle Leistungen",
      pricing: "Preise und Extras",
      glossary: "Web-Glossar",
      specialitiesAll: "Branchen",
      contactHead: "Kontakt",
      linkedin: "Sur Digital auf LinkedIn",
      hoursHead: "Öffnungszeiten",
      hours: "Mo–Do: 10:00–20:00 · Fr: 10:00–15:00",
      languagesHead: "Sprachen",
      legal: "Impressum",
      privacy: "Datenschutz",
      rights: "Alle Rechte vorbehalten.",
    },
  },

  fr: {
    nav: {
      services: "Services",
      specialities: "Secteurs",
      clients: "Clients",
      pricing: "Tarifs",
      faq: "FAQ",
      blog: "Blog",
      contact: "Nous écrire",
    },
    common: { skip: "Aller au contenu", languages: "Langues", prices: "Tarifs" },
    hero3d: {
      label:
        "Logo 3D interactif. Il se balance seul, tourne quand on le fait glisser et fait un tour complet au clic.",
      labelLite: "Logo de Sur Digital",
      loading: "Chargement du modèle 3D…",
      error: "Le modèle 3D n'a pas pu être chargé",
    },
    contact: {
      metaTitle: "Contact : parlons de votre site | Sur Digital",
      metaDescription:
        "Dites-nous ce dont votre entreprise a besoin : nous répondons sur LinkedIn sous 24 heures. Prix fixe par écrit, sans engagement.",
      title: "Contact",
      lead: "Pas de longs formulaires ni d'appels commerciaux : un message avec votre besoin et une réponse claire sous 24 heures.",
      formTitleA: "Parlons de",
      formTitleB: "votre site",
      formLead: "Dites-nous ce dont vous avez besoin : nous répondons sur LinkedIn sous 24 heures.",
      role: "Création et développement web à Málaga",
      button: "Écrivez-nous sur LinkedIn",
      badgeTime: "Réponse sous 24 heures",
      badgeArea: "Málaga et sa province",
      badgeLockin: "Sans engagement",
      privacyBefore: "En nous écrivant, vous acceptez notre",
      privacyLink: "politique de confidentialité",
      privacyAfter: ". Pas de spam.",
    },
    footer: {
      strap: "Des sites rapides pour les entreprises de Málaga. Dès 0 €, en moins de 7 jours.",
      servicesHead: "Services",
      servicesAll: "Tous les services",
      pricing: "Tarifs et options",
      glossary: "Glossaire web",
      specialitiesAll: "Secteurs",
      contactHead: "Contact",
      linkedin: "Sur Digital sur LinkedIn",
      hoursHead: "Horaires",
      hours: "Lun–jeu : 10h–20h · Ven : 10h–15h",
      languagesHead: "Langues",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      rights: "Tous droits réservés.",
    },
  },

  pt: {
    nav: {
      services: "Serviços",
      specialities: "Setores",
      clients: "Clientes",
      pricing: "Preços",
      faq: "FAQ",
      blog: "Blog",
      contact: "Fale connosco",
    },
    common: { skip: "Ir para o conteúdo", languages: "Idiomas", prices: "Preços" },
    hero3d: {
      label:
        "Logótipo 3D interativo. Balança sozinho, roda ao arrastar e dá uma volta completa ao clicar.",
      labelLite: "Logótipo da Sur Digital",
      loading: "A carregar o modelo 3D…",
      error: "Não foi possível carregar o modelo 3D",
    },
    contact: {
      metaTitle: "Contacto: falemos do seu site | Sur Digital",
      metaDescription:
        "Diga-nos o que o seu negócio precisa e respondemos no LinkedIn em menos de 24 horas. Preço fixo por escrito, sem fidelização.",
      title: "Contacto",
      lead: "Sem formulários longos nem chamadas comerciais: uma mensagem com o que precisa e uma resposta clara em menos de 24 horas.",
      formTitleA: "Falemos do",
      formTitleB: "seu site",
      formLead: "Diga-nos o que precisa — respondemos no LinkedIn em menos de 24 horas.",
      role: "Criação e desenvolvimento web em Málaga",
      button: "Escreva-nos no LinkedIn",
      badgeTime: "Resposta em menos de 24 h",
      badgeArea: "Málaga e província",
      badgeLockin: "Sem fidelização",
      privacyBefore: "Ao escrever-nos aceita a nossa",
      privacyLink: "política de privacidade",
      privacyAfter: ". Sem spam.",
    },
    footer: {
      strap: "Sites rápidos para negócios em Málaga. Desde 0 €, em menos de 7 dias.",
      servicesHead: "Serviços",
      servicesAll: "Todos os serviços",
      pricing: "Preços e extras",
      glossary: "Glossário web",
      specialitiesAll: "Setores",
      contactHead: "Contacto",
      linkedin: "Sur Digital no LinkedIn",
      hoursHead: "Horário",
      hours: "Seg–qui: 10:00–20:00 · Sex: 10:00–15:00",
      languagesHead: "Idiomas",
      legal: "Informação legal",
      privacy: "Privacidade",
      rights: "Todos os direitos reservados.",
    },
  },

  ru: {
    nav: {
      services: "Услуги",
      specialities: "Сферы",
      clients: "Клиенты",
      pricing: "Цены",
      faq: "Вопросы",
      blog: "Блог",
      contact: "Написать нам",
    },
    common: { skip: "Перейти к содержимому", languages: "Языки", prices: "Цены" },
    hero3d: {
      label:
        "Интерактивный 3D-логотип. Покачивается сам, вращается при перетаскивании и делает полный оборот по клику.",
      labelLite: "Логотип Sur Digital",
      loading: "Загрузка 3D-модели…",
      error: "Не удалось загрузить 3D-модель",
    },
    contact: {
      metaTitle: "Контакты: поговорим о вашем сайте | Sur Digital",
      metaDescription:
        "Расскажите, что нужно вашему бизнесу, — ответим в LinkedIn в течение 24 часов. Фиксированная цена письменно, без обязательств.",
      title: "Контакты",
      lead: "Без длинных форм и звонков менеджеров: одно сообщение о задаче — и понятный ответ в течение 24 часов.",
      formTitleA: "Поговорим о",
      formTitleB: "вашем сайте",
      formLead: "Расскажите, что нужно, — ответим в LinkedIn в течение 24 часов.",
      role: "Дизайн и разработка сайтов в Малаге",
      button: "Напишите нам в LinkedIn",
      badgeTime: "Ответ в течение 24 часов",
      badgeArea: "Малага и провинция",
      badgeLockin: "Без обязательств",
      privacyBefore: "Написав нам, вы принимаете",
      privacyLink: "политику конфиденциальности",
      privacyAfter: ". Никакого спама.",
    },
    footer: {
      strap: "Быстрые сайты для бизнеса в Малаге. От 0 €, меньше чем за 7 дней.",
      servicesHead: "Услуги",
      servicesAll: "Все услуги",
      pricing: "Цены и дополнения",
      glossary: "Словарь терминов",
      specialitiesAll: "Сферы",
      contactHead: "Контакты",
      linkedin: "Sur Digital в LinkedIn",
      hoursHead: "Часы работы",
      hours: "Пн–чт: 10:00–20:00 · Пт: 10:00–15:00",
      languagesHead: "Языки",
      legal: "Правовая информация",
      privacy: "Конфиденциальность",
      rights: "Все права защищены.",
    },
  },
};

// `lang` llega como string desde Astro.params: cae en español si no existe.
export const ui = (lang: string): LocaleStrings =>
  UI[lang as UiLang] ?? UI.es;
