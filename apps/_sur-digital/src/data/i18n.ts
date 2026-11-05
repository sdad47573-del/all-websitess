// Traducciones de la página de idioma (una landing resumen por idioma).
//
// El sitio completo (blog, 783 landings de sector, páginas legales) se queda en
// español: traducir 139 páginas × 5 idiomas no aporta nada que no resuelva esta
// página, que es la que se posiciona para "web design in Málaga" en cada idioma
// y desde la que se pasa al sitio español. Aquí solo vive el copy de esa
// landing; los precios NO se escriben a mano, salen de DATA.plans.
export const LOCALES = ["en", "de", "fr", "pt", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

// Nombre de cada idioma en su propio idioma (el que espera ver un visitante)
export const LOCALE_LABELS: Record<Locale | "es", string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  pt: "Português",
  ru: "Русский",
};

// Código BCP 47 para <html lang> y hreflang
export const LOCALE_HTML_LANG: Record<Locale | "es", string> = {
  es: "es",
  en: "en",
  de: "de",
  fr: "fr",
  pt: "pt",
  ru: "ru",
};

export interface PlanCopy {
  name: string;
  note: string;
  unit: string;
}

export interface LocaleContent {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  contactCta: string;
  chips: string[];
  processTitle: string;
  processAccent: string;
  processLead: string;
  steps: { when: string; title: string; text: string }[];
  pricingTitle: string;
  pricingAccent: string;
  pricingLead: string;
  pricingNote: string;
  plans: PlanCopy[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
  summaryNote: string;
  formatPrice: (price: number) => string;
}

export const LOCALE_CONTENT: Record<Locale, LocaleContent> = {
  en: {
    title: "Web design in Málaga — free landing page | Sur Digital",
    description:
      "Fast, custom websites for local businesses in Málaga. Free landing page, full website €490, online shop €890. Fixed price agreed in writing.",
    eyebrow: "Web studio for businesses in Málaga",
    h1: "A website that",
    h1Accent: "brings you customers.",
    lead:
      "Fast, custom websites for local businesses. Your first landing page is free and online in under 7 days, with a fixed price agreed in writing before we start.",
    ctaPrimary: "Request your free landing page",
    ctaSecondary: "See real clients",
    contactCta: "Get in touch",
    chips: [
      "Fixed price",
      "Domain in your name",
      "No lock-in",
      "30 days of free changes",
    ],
    processTitle: "How it works:",
    processAccent: "4 steps, one week",
    processLead:
      "You spend 20 minutes on day one. We handle the rest, and the price is fixed before we start.",
    steps: [
      {
        when: "Day 1",
        title: "We talk for 20 minutes",
        text: "You tell us what your business needs. You leave with a fixed price and a delivery date.",
      },
      {
        when: "Days 2–3",
        title: "You see the first draft",
        text: "A navigable draft in 2–3 days. We adjust texts, colours and photos until you say “this is it”.",
      },
      {
        when: "Days 4–7",
        title: "Your site goes live",
        text: "Published, registered on Google, and with domain, hosting and accounts in your name.",
      },
      {
        when: "After launch",
        title: "We stay in touch",
        text: "The first month, changes are free. After that, €39/month if you want us to keep going.",
      },
    ],
    pricingTitle: "Prices",
    pricingAccent: "in plain sight",
    pricingLead:
      "Same prices for every sector. Fixed quote in writing before we start.",
    pricingNote: "Prices for companies, VAT not included.",
    plans: [
      { name: "Free landing page", note: "One page, online in under 7 days.", unit: "no charge" },
      {
        name: "Portfolio",
        note: "Gallery for photographers, architects and personal brands.",
        unit: "one-off",
      },
      {
        name: "Full website",
        note: "Up to 5 pages, domain and hosting for one year.",
        unit: "one-off",
      },
      { name: "Pro + Shop", note: "Online shop or a large corporate site.", unit: "one-off" },
    ],
    faqTitle: "Questions, answered",
    faq: [
      {
        q: "Do you work in English?",
        a: "Yes. Calls, texts and support run in English, and your website launches in Spanish and English from day one.",
      },
      {
        q: "How much does a website cost?",
        a: "Landing page free, full website €490, online shop €890. The quote is fixed in writing and everything is registered in your name.",
      },
      {
        q: "How long does it take?",
        a: "A landing page goes online in under 7 days. Full websites and shops usually take 2–3 weeks, depending on how quickly the content arrives.",
      },
      {
        q: "Is the website mine?",
        a: "Always. Domain, hosting and files are in your name from day one. If you ever leave, you take everything with you.",
      },
    ],
    ctaTitle: "Shall we start?",
    ctaLead:
      "Tell us what your business needs. We reply within 24 hours, with a fixed price in writing.",
    ctaButton: "Write to us on LinkedIn",
    summaryNote:
      "This page is a summary in your language. The rest of the site (services, blog and sector pages) is in Spanish — and we work with you in English.",
    formatPrice: (price) => (price === 0 ? "Free" : `€${price}`),
  },

  de: {
    title: "Webdesign in Málaga — Landingpage gratis | Sur Digital",
    description:
      "Schnelle, individuelle Websites für lokale Unternehmen in Málaga. Landingpage gratis, komplette Website 490 €, Onlineshop 890 €. Fester Preis schriftlich.",
    eyebrow: "Webstudio für Unternehmen in Málaga",
    h1: "Eine Website, die",
    h1Accent: "Ihnen Kunden bringt.",
    lead:
      "Schnelle, individuelle Websites für lokale Unternehmen. Ihre erste Landingpage ist kostenlos und in weniger als 7 Tagen online – mit festem Preis, schriftlich vereinbart.",
    ctaPrimary: "Kostenlose Landingpage anfragen",
    ctaSecondary: "Echte Kunden ansehen",
    contactCta: "Schreiben Sie uns",
    chips: [
      "Fester Preis",
      "Domain auf Ihren Namen",
      "Keine Bindung",
      "30 Tage kostenlose Änderungen",
    ],
    processTitle: "So läuft es:",
    processAccent: "4 Schritte, eine Woche",
    processLead:
      "Sie investieren 20 Minuten am ersten Tag. Den Rest übernehmen wir, und der Preis steht vorher fest.",
    steps: [
      {
        when: "Tag 1",
        title: "20 Minuten Gespräch",
        text: "Sie erzählen, was Ihr Unternehmen braucht. Sie gehen mit festem Preis und Liefertermin raus.",
      },
      {
        when: "Tag 2–3",
        title: "Erster Entwurf",
        text: "In 2–3 Tagen ein klickbarer Entwurf. Wir passen Texte, Farben und Fotos an, bis Sie sagen: „so ist es gut“.",
      },
      {
        when: "Tag 4–7",
        title: "Ihre Website geht online",
        text: "Veröffentlicht, bei Google angemeldet, mit Domain, Hosting und Zugängen auf Ihren Namen.",
      },
      {
        when: "Nach dem Start",
        title: "Wir bleiben da",
        text: "Im ersten Monat sind Änderungen kostenlos. Danach 39 €/Monat, wenn Sie möchten.",
      },
    ],
    pricingTitle: "Preise",
    pricingAccent: "ohne Überraschungen",
    pricingLead:
      "Gleiche Preise für jede Branche. Fester Preis schriftlich vor dem Start.",
    pricingNote: "Preise für Unternehmen, ohne MwSt.",
    plans: [
      { name: "Kostenlose Landingpage", note: "Eine Seite, online in unter 7 Tagen.", unit: "ohne Kosten" },
      {
        name: "Portfolio",
        note: "Galerie für Fotografen, Architekten und Personal Brands.",
        unit: "einmalig",
      },
      {
        name: "Komplette Website",
        note: "Bis zu 5 Seiten, Domain und Hosting für ein Jahr.",
        unit: "einmalig",
      },
      { name: "Pro + Shop", note: "Onlineshop oder große Unternehmenswebsite.", unit: "einmalig" },
    ],
    faqTitle: "Häufige Fragen",
    faq: [
      {
        q: "Arbeiten Sie auf Deutsch?",
        a: "Ja. Gespräche, Texte und Support laufen auf Deutsch, und Ihre Website geht von Anfang an auf Spanisch und Deutsch online.",
      },
      {
        q: "Was kostet eine Website?",
        a: "Landingpage kostenlos, komplette Website 490 €, Onlineshop 890 €. Der Preis steht schriftlich fest und alles läuft auf Ihren Namen.",
      },
      {
        q: "Wie lange dauert es?",
        a: "Eine Landingpage ist in unter 7 Tagen online. Komplette Websites und Shops dauern meist 2–3 Wochen, je nachdem wie schnell die Inhalte da sind.",
      },
      {
        q: "Gehört die Website mir?",
        a: "Immer. Domain, Hosting und Dateien laufen ab dem ersten Tag auf Ihren Namen. Wenn Sie gehen, nehmen Sie alles mit.",
      },
    ],
    ctaTitle: "Fangen wir an?",
    ctaLead:
      "Erzählen Sie uns, was Ihr Unternehmen braucht. Wir antworten innerhalb von 24 Stunden mit einem festen Preis.",
    ctaButton: "Über LinkedIn schreiben",
    summaryNote:
      "Diese Seite ist eine Zusammenfassung in Ihrer Sprache. Der Rest der Website (Leistungen, Blog und Branchenseiten) ist auf Spanisch – wir arbeiten aber auf Deutsch mit Ihnen.",
    formatPrice: (price) => (price === 0 ? "Gratis" : `${price} €`),
  },

  fr: {
    title: "Création de sites à Málaga — landing gratuite | Sur Digital",
    description:
      "Sites rapides et sur mesure pour les commerces de Málaga. Landing gratuite, site complet 490 €, boutique en ligne 890 €. Prix fixe par écrit.",
    eyebrow: "Studio web pour les entreprises de Málaga",
    h1: "Un site qui",
    h1Accent: "vous apporte des clients.",
    lead:
      "Des sites rapides et sur mesure pour les commerces locaux. Votre première landing page est gratuite et en ligne en moins de 7 jours, avec un prix fixe convenu par écrit.",
    ctaPrimary: "Demander votre landing gratuite",
    ctaSecondary: "Voir de vrais clients",
    contactCta: "Nous écrire",
    chips: [
      "Prix fixe",
      "Domaine à votre nom",
      "Sans engagement",
      "30 jours de modifications gratuites",
    ],
    processTitle: "Comment ça marche :",
    processAccent: "4 étapes, une semaine",
    processLead:
      "Vous y consacrez 20 minutes le premier jour. Nous nous occupons du reste, et le prix est fixé avant de commencer.",
    steps: [
      {
        when: "Jour 1",
        title: "20 minutes d'échange",
        text: "Vous nous dites ce dont votre entreprise a besoin. Vous repartez avec un prix fixe et une date de livraison.",
      },
      {
        when: "Jours 2–3",
        title: "Première maquette",
        text: "Une maquette navigable en 2–3 jours. Nous ajustons textes, couleurs et photos jusqu'à votre « c'est ça ».",
      },
      {
        when: "Jours 4–7",
        title: "Votre site est en ligne",
        text: "Publié, référencé sur Google, avec domaine, hébergement et accès à votre nom.",
      },
      {
        when: "Après le lancement",
        title: "Nous restons là",
        text: "Le premier mois, les modifications sont gratuites. Ensuite, 39 €/mois si vous le souhaitez.",
      },
    ],
    pricingTitle: "Des prix",
    pricingAccent: "sans surprise",
    pricingLead:
      "Les mêmes prix pour tous les secteurs. Devis fixe par écrit avant de commencer.",
    pricingNote: "Prix pour les entreprises, hors TVA.",
    plans: [
      { name: "Landing gratuite", note: "Une page, en ligne en moins de 7 jours.", unit: "sans frais" },
      {
        name: "Portfolio",
        note: "Galerie pour photographes, architectes et marques personnelles.",
        unit: "paiement unique",
      },
      {
        name: "Site complet",
        note: "Jusqu'à 5 pages, domaine et hébergement un an.",
        unit: "paiement unique",
      },
      { name: "Pro + Boutique", note: "Boutique en ligne ou grand site corporate.", unit: "paiement unique" },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Travaillez-vous en français ?",
        a: "Oui. Les échanges, les textes et le support se font en français, et votre site est en ligne en espagnol et en français dès le premier jour.",
      },
      {
        q: "Combien coûte un site ?",
        a: "Landing gratuite, site complet 490 €, boutique en ligne 890 €. Le prix est fixé par écrit et tout est à votre nom.",
      },
      {
        q: "Combien de temps ?",
        a: "Une landing est en ligne en moins de 7 jours. Un site complet ou une boutique prend en général 2 à 3 semaines, selon la rapidité des contenus.",
      },
      {
        q: "Le site m'appartient ?",
        a: "Toujours. Domaine, hébergement et fichiers sont à votre nom dès le premier jour. Si vous partez, vous emportez tout.",
      },
    ],
    ctaTitle: "On commence ?",
    ctaLead:
      "Dites-nous ce dont votre entreprise a besoin. Nous répondons sous 24 heures, prix fixe par écrit.",
    ctaButton: "Écrire sur LinkedIn",
    summaryNote:
      "Cette page est un résumé dans votre langue. Le reste du site (services, blog et pages par secteur) est en espagnol — et nous travaillons avec vous en français.",
    formatPrice: (price) => (price === 0 ? "Gratuit" : `${price} €`),
  },

  pt: {
    title: "Criação de sites em Málaga — landing gratuita | Sur Digital",
    description:
      "Sites rápidos e à medida para negócios locais em Málaga. Landing gratuita, site completo 490 €, loja online 890 €. Preço fixo por escrito.",
    eyebrow: "Estúdio web para negócios em Málaga",
    h1: "Um site que",
    h1Accent: "lhe traz clientes.",
    lead:
      "Sites rápidos e à medida para negócios locais. A sua primeira landing page é gratuita e fica online em menos de 7 dias, com preço fixo acordado por escrito.",
    ctaPrimary: "Pedir a minha landing gratuita",
    ctaSecondary: "Ver clientes reais",
    contactCta: "Fale connosco",
    chips: [
      "Preço fixo",
      "Domínio em seu nome",
      "Sem fidelização",
      "30 dias de alterações gratuitas",
    ],
    processTitle: "Como funciona:",
    processAccent: "4 passos, uma semana",
    processLead:
      "Dedica 20 minutos no primeiro dia. Do resto tratamos nós, e o preço fica fechado antes de começar.",
    steps: [
      {
        when: "Dia 1",
        title: "20 minutos de conversa",
        text: "Conta-nos o que o seu negócio precisa. Sai com o preço fixo e a data de entrega.",
      },
      {
        when: "Dias 2–3",
        title: "Primeiro esboço",
        text: "Um esboço navegável em 2–3 dias. Ajustamos textos, cores e fotos até dizer «é este».",
      },
      {
        when: "Dias 4–7",
        title: "O site fica online",
        text: "Publicado, registado no Google e com domínio, alojamento e contas em seu nome.",
      },
      {
        when: "Depois do lançamento",
        title: "Continuamos por aqui",
        text: "No primeiro mês, as alterações são gratuitas. Depois, 39 €/mês se quiser.",
      },
    ],
    pricingTitle: "Preços",
    pricingAccent: "sem surpresas",
    pricingLead:
      "Os mesmos preços para qualquer setor. Orçamento fixo por escrito antes de começar.",
    pricingNote: "Preços para empresas, sem IVA.",
    plans: [
      { name: "Landing gratuita", note: "Uma página, online em menos de 7 dias.", unit: "sem custos" },
      {
        name: "Portfolio",
        note: "Galeria para fotógrafos, arquitetos e marcas pessoais.",
        unit: "pagamento único",
      },
      {
        name: "Site completo",
        note: "Até 5 páginas, domínio e alojamento por um ano.",
        unit: "pagamento único",
      },
      { name: "Pro + Loja", note: "Loja online ou site corporate grande.", unit: "pagamento único" },
    ],
    faqTitle: "Perguntas frequentes",
    faq: [
      {
        q: "Trabalham em português?",
        a: "Sim. Conversas, textos e apoio são em português, e o site fica online em espanhol e português desde o primeiro dia.",
      },
      {
        q: "Quanto custa um site?",
        a: "Landing gratuita, site completo 490 €, loja online 890 €. O preço é fixado por escrito e tudo fica em seu nome.",
      },
      {
        q: "Quanto tempo demora?",
        a: "Uma landing fica online em menos de 7 dias. Um site completo ou uma loja demoram normalmente 2–3 semanas, conforme os conteúdos.",
      },
      {
        q: "O site é meu?",
        a: "Sempre. Domínio, alojamento e ficheiros ficam em seu nome desde o primeiro dia. Se sair, leva tudo consigo.",
      },
    ],
    ctaTitle: "Começamos?",
    ctaLead:
      "Diga-nos o que o seu negócio precisa. Respondemos em menos de 24 horas, com preço fixo por escrito.",
    ctaButton: "Escrever no LinkedIn",
    summaryNote:
      "Esta página é um resumo na sua língua. O resto do site (serviços, blog e páginas por setor) está em espanhol — e trabalhamos consigo em português.",
    formatPrice: (price) => (price === 0 ? "Grátis" : `${price} €`),
  },

  ru: {
    title: "Создание сайтов в Малаге — лендинг бесплатно | Sur Digital",
    description:
      "Быстрые сайты под заказ для местного бизнеса в Малаге. Лендинг бесплатно, сайт 490 €, интернет-магазин 890 €. Фиксированная цена по договору.",
    eyebrow: "Веб-студия для бизнеса в Малаге",
    h1: "Сайт, который",
    h1Accent: "приводит клиентов.",
    lead:
      "Быстрые сайты под заказ для местного бизнеса. Первый лендинг — бесплатно и онлайн меньше чем за 7 дней, с фиксированной ценой по договору.",
    ctaPrimary: "Заказать бесплатный лендинг",
    ctaSecondary: "Посмотреть клиентов",
    contactCta: "Написать нам",
    chips: [
      "Фиксированная цена",
      "Домен на ваше имя",
      "Без обязательств",
      "30 дней правок бесплатно",
    ],
    processTitle: "Как это работает:",
    processAccent: "4 шага, одна неделя",
    processLead:
      "Вы тратите 20 минут в первый день. Остальное берём на себя, а цена фиксируется до начала работ.",
    steps: [
      {
        when: "День 1",
        title: "20 минут разговора",
        text: "Вы рассказываете, что нужно бизнесу. Уходите с фиксированной ценой и датой сдачи.",
      },
      {
        when: "Дни 2–3",
        title: "Первый макет",
        text: "Кликабельный макет за 2–3 дня. Правим тексты, цвета и фото, пока вы не скажете «вот так».",
      },
      {
        when: "Дни 4–7",
        title: "Сайт в сети",
        text: "Опубликован, добавлен в Google, домен, хостинг и доступы — на ваше имя.",
      },
      {
        when: "После запуска",
        title: "Остаёмся на связи",
        text: "Первый месяц правки бесплатны. Дальше — 39 €/мес, если захотите.",
      },
    ],
    pricingTitle: "Цены",
    pricingAccent: "без сюрпризов",
    pricingLead:
      "Одинаковые цены для любой сферы. Фиксированная смета до начала работ.",
    pricingNote: "Цены для компаний, без НДС.",
    plans: [
      { name: "Бесплатный лендинг", note: "Одна страница, онлайн меньше чем за 7 дней.", unit: "без затрат" },
      {
        name: "Портфолио",
        note: "Галерея для фотографов, архитекторов и личных брендов.",
        unit: "разово",
      },
      {
        name: "Полный сайт",
        note: "До 5 страниц, домен и хостинг на год.",
        unit: "разово",
      },
      { name: "Pro + Магазин", note: "Интернет-магазин или большой сайт компании.", unit: "разово" },
    ],
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "Вы работаете на русском?",
        a: "Да. Переписка, тексты и поддержка — на русском, а сайт выходит на испанском и русском с первого дня.",
      },
      {
        q: "Сколько стоит сайт?",
        a: "Лендинг бесплатно, полный сайт 490 €, интернет-магазин 890 €. Цена фиксируется письменно, всё оформляется на вас.",
      },
      {
        q: "Сколько времени занимает?",
        a: "Лендинг — меньше 7 дней. Полный сайт или магазин — обычно 2–3 недели, зависит от того, как быстро придут материалы.",
      },
      {
        q: "Сайт будет моим?",
        a: "Всегда. Домен, хостинг и файлы оформлены на вас с первого дня. Если решите уйти — забираете всё с собой.",
      },
    ],
    ctaTitle: "Начнём?",
    ctaLead:
      "Расскажите, что нужно вашему бизнесу. Отвечаем в течение 24 часов и присылаем цену письменно.",
    ctaButton: "Написать в LinkedIn",
    summaryNote:
      "Эта страница — краткое описание на русском. Остальной сайт (услуги, блог и страницы по сферам) на испанском, но работаем с вами мы на русском.",
    formatPrice: (price) => (price === 0 ? "Бесплатно" : `${price} €`),
  },
};

// El orden de LOCALE_CONTENT[...].plans debe coincidir con DATA.plans. Esto lo
// verifica la página en build (ver src/pages/[lang]/index.astro): si alguien
// reordena los planes, el build falla en vez de emparejar precios y nombres
// equivocados.
export const PLAN_KEYS = ["Landing Gratis", "Portfolio", "Web Completa", "Pro + Tienda"];
