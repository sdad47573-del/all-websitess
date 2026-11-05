// Traducciones del glosario a los cinco idiomas.
//
// Los enlaces del glosario (guías del blog) siguen viviendo en español: van en
// `TERMINOS_HREFS`, en el mismo orden que `TERMINOS` de src/data/glosario.ts, y
// cada idioma solo traduce término y definición. Si alguien añade un término
// nuevo en español y no lo traduce aquí, el build falla en vez de publicar una
// página mezclada (ver src/pages/i18n/[lang]/glosario.astro).
import type { Locale } from "../../data/i18n";

export type GlosarioTermino = { term: string; text: string };

export type GlosarioCopy = {
  metaTitle: string;
  metaDescription: string;
  crumbHome: string;
  crumb: string;
  h1: string;
  h1Accent: string;
  leadStart: string;
  leadEnd: string;
  indexLabel: string;
  readGuide: string;
  missingTitle: string;
  missingText: string;
  missingCta: string;
  nextIntro: string;
  nextServices: string;
  nextPricing: string;
  nextBlog: string;
  nextSectors: string;
  terms: GlosarioTermino[];
};

// Rutas de las guías enlazadas, en el orden de TERMINOS (glosario.ts).
export const TERMINOS_HREFS: (string | undefined)[] = [
  "/blog/dominio-hosting-negocios-guia/",
  "/blog/dominio-hosting-negocios-guia/",
  "/blog/que-es-el-seo-local/",
  "/blog/que-es-el-seo-local/",
  "/blog/pagespeed-negocios-locales/",
  undefined,
  undefined,
  "/blog/kit-digital-que-cubre-y-que-no/",
  undefined,
  undefined,
  undefined,
  undefined,
  "/blog/ficha-google-business-optimizada/",
  "/blog/checklist-lanzar-web-negocio/",
  "/blog/conseguir-resenas-google/",
  "/blog/cuanto-cuesta-google-ads-malaga/",
  "/blog/ficha-google-business-optimizada/",
  "/blog/errores-web-negocio-local/",
  "/blog/mantenimiento-web-20-euros-mes/",
  "/blog/aviso-legal-cookies-web/",
  "/blog/web-bar-taberna-malaga/",
  "/blog/web-hamburgueseria-malaga/",
  "/blog/web-carniceria-malaga/",
  "/blog/web-cafeteria-malaga/",
  "/blog/web-bilingue-negocio-costa-del-sol/",
  "/blog/rediseno-web-7-senales/",
  undefined,
  undefined,
  "/blog/accesibilidad-web-negocios-locales/",
];

export const GLOSARIO: Record<Locale, GlosarioCopy> = {
  en: {
    metaTitle: "Plain-English web glossary (29 terms) | Sur Digital",
    metaDescription:
      "The 29 words used when someone sells you a website, each explained in one sentence: domain, hosting, SEO, hreflang, 301 and everything you get charged for.",
    crumbHome: "Home",
    crumb: "Glossary",
    h1: "The dictionary",
    h1Accent: "without the jargon",
    leadStart:
      "If someone sells you a website and can't explain these 29 words, you're off to a bad start. Here they are, no smoke, so you negotiate knowing what you sign.",
    leadEnd: "",
    indexLabel: "Alphabetical index",
    readGuide: "Read the guide →",
    missingTitle: "A word missing?",
    missingText:
      "Ask us and we'll explain it, no strings attached. And if you want to see all this in practice, start with the free landing page.",
    missingCta: "Ask on LinkedIn",
    nextIntro: "If this helped, next step is seeing it applied:",
    nextServices: "services",
    nextPricing: "pricing",
    nextBlog: "the guides on the blog",
    nextSectors: "websites by sector",
    terms: [
      {
        term: "Domain",
        text: "Your website's address (yourbusiness.com). Registered in your name, like the shop's phone number: it's yours, not ours.",
      },
      {
        term: "Hosting",
        text: "The server where the site lives: a yearly rent of €60–90 paid straight to the provider, with no markup from us.",
      },
      {
        term: "SEO",
        text: "Getting Google to show you when someone searches for what you sell. Not magic: structure, copy, speed and reviews, in that order.",
      },
      {
        term: "Local SEO",
        text: "The same work for “near me” searches: your neighbourhood, your Google Maps listing and your reviews.",
      },
      {
        term: "Core Web Vitals",
        text: "Google's scores for whether your site is fast and doesn't jump while loading. Measured on mobile, not your laptop.",
      },
      {
        term: "Responsive",
        text: "The site adapts itself to phone, tablet and desktop. Not an extra: 60% of your visits come from a phone.",
      },
      {
        term: "Keyword",
        text: "What your customer types into Google. “Hairdresser in Carretera de Cádiz” is one; “personal brand” interests nobody.",
      },
      {
        term: "Kit Digital",
        text: "The European subsidy for digitising businesses. We don't work with it, and our blog explains why, straight up.",
      },
      {
        term: "Landing page",
        text: "A single page built for one thing: getting the visitor to contact you. It's what we give away as your first site, with no menus to distract.",
      },
      {
        term: "HTTPS",
        text: "The padlock in the browser bar. Without it Chrome warns your site “is not secure” and visitors leave. Always included.",
      },
      {
        term: "Sitemap",
        text: "The index of your site that we hand to Google so it knows which pages exist and which are new. Without it, you're found later.",
      },
      {
        term: "Search Console",
        text: "Google's free tool showing which searches find you and what's broken. We set it up and teach you to read it.",
      },
      {
        term: "Google Business profile",
        text: "Your business listing on Google Maps: hours, photos, reviews and a call button. It's the first thing people see when searching “near me”.",
      },
      {
        term: "Web analytics",
        text: "Knowing how many people come in, where from and how many write to you. Without measuring, every decision is a blind bet.",
      },
      {
        term: "Google reviews",
        text: "What other customers say about you on your Maps listing. It's the tie-breaker when someone compares three similar businesses.",
      },
      {
        term: "Google Ads",
        text: "Paid ads: you appear at the top today and pay per click. Useful to buy time while free rankings mature.",
      },
      {
        term: "Structured data",
        text: "The small print that tells Google what you are (local business, FAQ, article). It's what makes your result look fuller.",
      },
      {
        term: "Conversion",
        text: "The moment a visitor does what you want: call, message or book. A site with traffic and no conversions is failing at something.",
      },
      {
        term: "Backup",
        text: "A snapshot of your site kept in case something breaks. It runs on its own and restores in minutes, losing no copy or prices.",
      },
      {
        term: "Legal notice",
        text: "The mandatory text saying who you are and how your site uses data. Without it, your contact form breaks the law.",
      },
      {
        term: "Digital menu with QR",
        text: "Your menu online at an address that never changes: the table QR always points there, whatever you update. Readable without zoom and indexed by Google, unlike a PDF.",
      },
      {
        term: "Direct order",
        text: "The customer orders from you (WhatsApp or your system) instead of a platform taking up to 30%. Every direct order is margin you keep.",
      },
      {
        term: "Online pre-order",
        text: "Customers place orders (cakes, Christmas suckling pig, half a lamb) with date and details from the site or WhatsApp. No order lost between chats.",
      },
      {
        term: "Breakfast menu",
        text: "Your morning offer published where it's readable on a phone, with prices and a photo of the star breakfast.",
      },
      {
        term: "hreflang",
        text: "The tag telling Google a page has a version in another language. Without it, the English version competes with the Spanish one and both lose.",
      },
      {
        term: "301",
        text: "The permanent redirect: if a page moves, the 301 takes visitors and Google to the new address without losing what they'd earned.",
      },
      {
        term: "CTA",
        text: "The call to action: the button you want pressed (“Book now”, “Call us”). If there isn't a clear one on screen, the visit ends in nothing.",
      },
      {
        term: "Wireframe",
        text: "The skeleton of the site before designing it: what goes in each block and in what order. Changed in minutes, it avoids redesigning three times.",
      },
      {
        term: "Alt (alternative text)",
        text: "The description of an image for people who can't see it and for Google. Not “image1.jpg”: “shopfront on Calle El Agua”.",
      },
    ],
  },

  de: {
    metaTitle: "Web-Glossar ohne Fachchinesisch (29 Begriffe) | Sur Digital",
    metaDescription:
      "Die 29 Begriffe, die fallen, wenn dir jemand eine Website verkauft, je in einem Satz erklärt: Domain, Hosting, SEO, hreflang, 301 und alles, was berechnet wird.",
    crumbHome: "Start",
    crumb: "Glossar",
    h1: "Das Wörterbuch",
    h1Accent: "ohne Fachchinesisch",
    leadStart:
      "Wenn dir jemand eine Website verkauft und diese 29 Wörter nicht erklären kann, fängt es schlecht an. Hier stehen sie ohne Nebel, damit du verhandelst und weißt, was du unterschreibst.",
    leadEnd: "",
    indexLabel: "Alphabetisches Register",
    readGuide: "Zum Leitfaden →",
    missingTitle: "Fehlt ein Wort?",
    missingText:
      "Frag uns und wir erklären es unverbindlich. Und wenn du sehen willst, wie das in der Praxis aussieht, starte mit der kostenlosen Landingpage.",
    missingCta: "Über LinkedIn fragen",
    nextIntro: "Wenn dir das geholfen hat, sieh es in der Praxis:",
    nextServices: "Leistungen",
    nextPricing: "Preise",
    nextBlog: "die Leitfäden im Blog",
    nextSectors: "Websites nach Branche",
    terms: [
      {
        term: "Domain",
        text: "Die Adresse deiner Website (deinfirma.de). Wird auf deinen Namen registriert, wie die Telefonnummer des Ladens: sie gehört dir, nicht uns.",
      },
      {
        term: "Hosting",
        text: "Der Speicherplatz, auf dem die Website liegt: eine Jahresmiete von 60–90 €, direkt an den Anbieter gezahlt, ohne Aufschlag von uns.",
      },
      {
        term: "SEO",
        text: "Dass Google dich zeigt, wenn jemand sucht, was du verkaufst. Keine Magie: Struktur, Texte, Geschwindigkeit und Bewertungen, in dieser Reihenfolge.",
      },
      {
        term: "Lokales SEO",
        text: "Dieselbe Arbeit für „in meiner Nähe“-Suchen: dein Viertel, dein Google-Maps-Eintrag und deine Bewertungen.",
      },
      {
        term: "Core Web Vitals",
        text: "Googles Noten dafür, ob deine Website schnell ist und beim Laden nicht springt. Gemessen am Handy, nicht am Laptop.",
      },
      {
        term: "Responsive",
        text: "Die Website passt sich Handy, Tablet und Rechner an. Kein Extra: 60 % deiner Besucher kommen vom Handy.",
      },
      {
        term: "Keyword",
        text: "Was dein Kunde bei Google eintippt. „Friseur in der Carretera de Cádiz“ ist eines; „Personal Brand“ interessiert niemanden.",
      },
      {
        term: "Kit Digital",
        text: "Der europäische Zuschuss zur Digitalisierung von Betrieben. Wir arbeiten nicht damit, und im Blog erklären wir ohne Umschweife, warum.",
      },
      {
        term: "Landingpage",
        text: "Eine einzelne Seite mit einem Ziel: dass der Besucher dich kontaktiert. Genau die schenken wir als erste Website, ohne ablenkende Menüs.",
      },
      {
        term: "HTTPS",
        text: "Das Schloss in der Adressleiste. Ohne es warnt Chrome, deine Website sei „nicht sicher“, und der Besucher geht. Immer inklusive.",
      },
      {
        term: "Sitemap",
        text: "Der Index deiner Website, den wir Google geben, damit es weiß, welche Seiten es gibt und welche neu sind. Ohne ihn wirst du später gefunden.",
      },
      {
        term: "Search Console",
        text: "Googles kostenloses Werkzeug: welche Suchen dich finden und was hakt. Wir richten es ein und zeigen dir, wie man es liest.",
      },
      {
        term: "Google-Business-Profil",
        text: "Dein Betrieb auf Google Maps: Öffnungszeiten, Fotos, Bewertungen und Anrufbutton. Das Erste, was man bei „in meiner Nähe“ sieht.",
      },
      {
        term: "Webanalyse",
        text: "Wissen, wie viele kommen, woher sie kommen und wie viele dir schreiben. Ohne Messen ist jede Entscheidung ein Blindflug.",
      },
      {
        term: "Google-Bewertungen",
        text: "Was andere Kunden über dich in deinem Maps-Eintrag sagen. Der Ausschlag, wenn jemand drei ähnliche Betriebe vergleicht.",
      },
      {
        term: "Google Ads",
        text: "Bezahlte Anzeigen: du stehst heute oben und zahlst pro Klick. Nützlich, um Zeit zu kaufen, während das organische Ranking reift.",
      },
      {
        term: "Strukturierte Daten",
        text: "Das Kleingedruckte, das Google sagt, was du bist (lokaler Betrieb, FAQ, Artikel). Damit sieht dein Ergebnis vollständiger aus.",
      },
      {
        term: "Conversion",
        text: "Der Moment, in dem ein Besucher tut, was du willst: anrufen, schreiben oder buchen. Eine Website mit Traffic und ohne Conversions scheitert an etwas.",
      },
      {
        term: "Backup",
        text: "Ein Schnappschuss deiner Website für den Fall eines Defekts. Läuft automatisch und ist in Minuten wiederhergestellt, ohne Texte oder Preise zu verlieren.",
      },
      {
        term: "Impressum",
        text: "Der Pflichttext, der sagt, wer du bist und wie deine Website Daten nutzt. Ohne ihn verstößt dein Kontaktformular gegen das Gesetz.",
      },
      {
        term: "Digitale Speisekarte mit QR",
        text: "Deine Karte online unter einer Adresse, die sich nie ändert: der QR auf den Tischen zeigt immer dorthin. Ohne Zoom lesbar und von Google indexiert, anders als ein PDF.",
      },
      {
        term: "Direktbestellung",
        text: "Der Kunde bestellt bei dir (WhatsApp oder dein System) statt bei einer Plattform, die bis zu 30 % nimmt. Jede Direktbestellung ist Marge, die du behältst.",
      },
      {
        term: "Online-Vorbestellung",
        text: "Kunden geben Bestellungen (Torten, Weihnachtsferkel, halbes Lamm) mit Datum und Angaben über die Website oder WhatsApp auf. Keine Bestellung geht zwischen Nachrichten verloren.",
      },
      {
        term: "Frühstückskarte",
        text: "Dein Morgenangebot dort veröffentlicht, wo es am Handy lesbar ist, mit Preisen und Foto des Lieblingsfrühstücks.",
      },
      {
        term: "hreflang",
        text: "Das Tag, das Google sagt, dass eine Seite eine Fassung in einer anderen Sprache hat. Ohne es konkurriert die englische mit der spanischen, und beide verlieren.",
      },
      {
        term: "301",
        text: "Die permanente Weiterleitung: zieht eine Seite um, führt der 301 Besucher und Google zur neuen Adresse, ohne das Erreichte zu verlieren.",
      },
      {
        term: "CTA",
        text: "Der Call-to-Action: der Button, der gedrückt werden soll („Termin buchen“, „Anrufen“). Ohne klaren Button pro Bildschirm endet der Besuch in nichts.",
      },
      {
        term: "Wireframe",
        text: "Das Skelett der Website vor dem Design: was in welchen Block gehört und in welcher Reihenfolge. In Minuten geändert, erspart es drei Redesigns.",
      },
      {
        term: "Alt (Alternativtext)",
        text: "Die Beschreibung eines Bildes für Menschen, die es nicht sehen, und für Google. Nicht „bild1.jpg“, sondern „Schaufenster in der Calle El Agua“.",
      },
    ],
  },

  fr: {
    metaTitle: "Glossaire web sans jargon (29 termes) | Sur Digital",
    metaDescription:
      "Les 29 mots employés quand on vous vend un site, expliqués en une phrase : domaine, hébergement, SEO, hreflang, 301 et tout ce qu'on vous facture.",
    crumbHome: "Accueil",
    crumb: "Glossaire",
    h1: "Le dictionnaire",
    h1Accent: "sans jargon",
    leadStart:
      "Si quelqu'un vous vend un site sans savoir expliquer ces 29 mots, ça commence mal. Les voici sans fumée, pour négocier en sachant ce que vous signez.",
    leadEnd: "",
    indexLabel: "Index alphabétique",
    readGuide: "Lire le guide →",
    missingTitle: "Un mot vous manque ?",
    missingText:
      "Demandez-le-nous et nous vous l'expliquons sans engagement. Et pour voir tout cela en pratique, commencez par la landing gratuite.",
    missingCta: "Demander sur LinkedIn",
    nextIntro: "Si cela vous a servi, la suite c'est de le voir appliqué :",
    nextServices: "services",
    nextPricing: "tarifs",
    nextBlog: "les guides du blog",
    nextSectors: "des sites par secteur",
    terms: [
      {
        term: "Domaine",
        text: "L'adresse de votre site (votreentreprise.fr). Enregistrée à votre nom, comme le téléphone du commerce : elle est à vous, pas à nous.",
      },
      {
        term: "Hébergement",
        text: "L'espace où vit le site : un loyer annuel de 60–90 € payé directement au fournisseur, sans marge de notre part.",
      },
      {
        term: "SEO",
        text: "Que Google vous montre quand quelqu'un cherche ce que vous vendez. Pas de magie : structure, textes, vitesse et avis, dans cet ordre.",
      },
      {
        term: "SEO local",
        text: "Le même travail pour les recherches « près de chez moi » : votre quartier, votre fiche Google Maps et vos avis.",
      },
      {
        term: "Core Web Vitals",
        text: "Les notes de Google sur la rapidité du site et l'absence de sauts au chargement. Mesurées sur mobile, pas sur votre ordinateur.",
      },
      {
        term: "Responsive",
        text: "Le site s'adapte au téléphone, à la tablette et à l'ordinateur. Pas un extra : 60 % de vos visites viennent du téléphone.",
      },
      {
        term: "Mot-clé",
        text: "Ce que votre client tape dans Google. « Coiffeur à Carretera de Cádiz » en est un ; « marque personnelle » n'intéresse personne.",
      },
      {
        term: "Kit Digital",
        text: "La subvention européenne pour digitaliser les entreprises. Nous n'y travaillons pas, et le blog explique pourquoi sans détour.",
      },
      {
        term: "Landing page",
        text: "Une seule page conçue pour une chose : que le visiteur vous contacte. C'est ce que nous offrons comme premier site, sans menus qui distraient.",
      },
      {
        term: "HTTPS",
        text: "Le cadenas de la barre d'adresse. Sans lui, Chrome signale que votre site « n'est pas sécurisé » et le visiteur part. Toujours inclus.",
      },
      {
        term: "Sitemap",
        text: "L'index de votre site que nous donnons à Google pour qu'il sache quelles pages existent et lesquelles sont nouvelles. Sans lui, on vous trouve plus tard.",
      },
      {
        term: "Search Console",
        text: "L'outil gratuit de Google qui montre quelles recherches vous trouvent et ce qui bloque. Nous faisons l'inscription et vous apprenons à le lire.",
      },
      {
        term: "Fiche Google Business",
        text: "Le profil de votre commerce sur Google Maps : horaires, photos, avis et bouton d'appel. La première chose que voit qui cherche « près de chez moi ».",
      },
      {
        term: "Analytics",
        text: "Savoir combien de personnes entrent, d'où elles viennent et combien vous écrivent. Sans mesure, chaque décision est un pari à l'aveugle.",
      },
      {
        term: "Avis Google",
        text: "Ce que les autres clients disent de vous sur votre fiche Maps. L'arbitre quand quelqu'un compare trois commerces similaires.",
      },
      {
        term: "Google Ads",
        text: "Les annonces payantes : vous apparaissez en haut aujourd'hui et payez au clic. Utile pour gagner du temps pendant que le référencement gratuit mûrit.",
      },
      {
        term: "Données structurées",
        text: "Les petites lignes qui disent à Google ce que vous êtes (commerce local, FAQ, article). C'est ce qui rend votre résultat plus complet.",
      },
      {
        term: "Conversion",
        text: "Le moment où un visiteur fait ce que vous voulez : appeler, écrire ou réserver. Un site avec du trafic et sans conversions échoue quelque part.",
      },
      {
        term: "Sauvegarde",
        text: "Une photo de votre site gardée en cas de panne. Elle se fait seule et se restaure en minutes, sans perdre textes ni prix.",
      },
      {
        term: "Mentions légales",
        text: "Le texte obligatoire qui dit qui vous êtes et comment votre site utilise les données. Sans lui, votre formulaire de contact enfreint la loi.",
      },
      {
        term: "Carte digitale avec QR",
        text: "Votre carte en ligne à une adresse qui ne change jamais : le QR des tables pointe toujours là. Lisible sans zoom et indexée par Google, contrairement au PDF.",
      },
      {
        term: "Commande directe",
        text: "Le client commande chez vous (WhatsApp ou votre système) plutôt que via une plateforme qui prend jusqu'à 30 %. Chaque commande directe est de la marge gardée.",
      },
      {
        term: "Commande en ligne",
        text: "Le client dépose sa commande (gâteaux, cochon de Noël, demi-agneau) avec date et coordonnées depuis le site ou WhatsApp. Aucune commande perdue entre deux messages.",
      },
      {
        term: "Carte des petits-déjeuners",
        text: "Votre offre du matin publiée là où elle se lit sur mobile, avec prix et photo du petit-déjeuner vedette.",
      },
      {
        term: "hreflang",
        text: "La balise qui dit à Google qu'une page a une version dans une autre langue. Sans elle, la version anglaise concurrence l'espagnole et les deux perdent.",
      },
      {
        term: "301",
        text: "La redirection permanente : si une page change d'adresse, le 301 emmène visiteurs et Google vers la nouvelle sans perdre l'acquis.",
      },
      {
        term: "CTA",
        text: "L'appel à l'action : le bouton que vous voulez voir cliquer (« Prendre rendez-vous », « Appelez-nous »). Sans bouton clair à l'écran, la visite ne donne rien.",
      },
      {
        term: "Wireframe",
        text: "Le squelette du site avant le design : quoi dans chaque bloc et dans quel ordre. Modifiable en minutes, il évite trois refontes.",
      },
      {
        term: "Alt (texte alternatif)",
        text: "La description d'une image pour qui ne la voit pas et pour Google. Pas « image1.jpg » : « façade du commerce rue El Agua ».",
      },
    ],
  },

  pt: {
    metaTitle: "Glossário web sem jargão (29 termos) | Sur Digital",
    metaDescription:
      "Os 29 termos usados quando lhe vendem um site, cada um explicado numa frase: domínio, alojamento, SEO, hreflang, 301 e tudo o que lhe cobram.",
    crumbHome: "Início",
    crumb: "Glossário",
    h1: "O dicionário",
    h1Accent: "sem jargão",
    leadStart:
      "Se alguém lhe vende um site e não sabe explicar estas 29 palavras, começámos mal. Aqui estão sem fumo, para negociar sabendo o que assina.",
    leadEnd: "",
    indexLabel: "Índice alfabético",
    readGuide: "Ler o guia →",
    missingTitle: "Falta alguma palavra?",
    missingText:
      "Pergunte-nos e explicamos sem compromisso. E se quiser ver tudo isto aplicado, comece pela landing gratuita.",
    missingCta: "Perguntar no LinkedIn",
    nextIntro: "Se isto lhe serviu, o passo seguinte é vê-lo aplicado:",
    nextServices: "serviços",
    nextPricing: "preços",
    nextBlog: "os guias do blog",
    nextSectors: "sites por setor",
    terms: [
      {
        term: "Domínio",
        text: "O endereço do seu site (oseunegocio.pt). Registado em seu nome, como o telefone da loja: é seu, não nosso.",
      },
      {
        term: "Alojamento",
        text: "O espaço onde o site vive: um aluguer anual de 60–90 € pago diretamente ao fornecedor, sem acréscimo nosso.",
      },
      {
        term: "SEO",
        text: "Que o Google mostre você quando alguém procura o que vende. Não é magia: estrutura, textos, velocidade e avaliações, por essa ordem.",
      },
      {
        term: "SEO local",
        text: "O mesmo trabalho para pesquisas «perto de mim»: o seu bairro, a ficha no Google Maps e as avaliações.",
      },
      {
        term: "Core Web Vitals",
        text: "As notas com que o Google mede se o site é rápido e não dá saltos ao carregar. Medidas no telemóvel, não no computador.",
      },
      {
        term: "Responsivo",
        text: "O site adapta-se sozinho ao telemóvel, ao tablet e ao computador. Não é extra: 60 % das visitas chegam do telemóvel.",
      },
      {
        term: "Palavra-chave",
        text: "O que o seu cliente escreve no Google. «Cabeleireiro na Carretera de Cádiz» é uma; «marca pessoal» não interessa a ninguém.",
      },
      {
        term: "Kit Digital",
        text: "O subsídio europeu para digitalizar negócios. Não trabalhamos com ele, e o blog explica porquê sem rodeios.",
      },
      {
        term: "Landing page",
        text: "Uma única página pensada para uma coisa: que o visitante entre em contacto. É o que oferecemos como primeiro site, sem menus que distraiam.",
      },
      {
        term: "HTTPS",
        text: "O cadeado da barra do navegador. Sem ele, o Chrome avisa que o site «não é seguro» e o visitante vai-se. Vai sempre incluído.",
      },
      {
        term: "Sitemap",
        text: "O índice do seu site que entregamos ao Google para saber que páginas tem e quais são novas. Sem ele, demoram mais a encontrá-lo.",
      },
      {
        term: "Search Console",
        text: "A ferramenta gratuita da Google onde se vê com que pesquisas o encontram e o que falha. Deixamos o registo feito e ensinamos a lê-la.",
      },
      {
        term: "Ficha Google Business",
        text: "O perfil do seu negócio no Google Maps: horário, fotos, avaliações e botão de chamada. É a primeira coisa que vê quem procura «perto de mim».",
      },
      {
        term: "Analítica web",
        text: "Saber quantas pessoas entram, de onde vêm e quantas lhe escrevem. Sem medir, qualquer decisão é uma aposta às cegas.",
      },
      {
        term: "Avaliações Google",
        text: "O que outros clientes dizem de si na ficha do Maps. É o desempate a seu favor quando alguém compara três negócios parecidos.",
      },
      {
        term: "Google Ads",
        text: "Os anúncios pagos: aparece no topo hoje e paga por clique. Útil para ganhar tempo enquanto o posicionamento gratuito amadurece.",
      },
      {
        term: "Dados estruturados",
        text: "A letra pequena que diz ao Google o que é (negócio local, perguntas frequentes, artigo). É o que faz o seu resultado parecer mais completo.",
      },
      {
        term: "Conversão",
        text: "O momento em que um visitante faz o que quer: ligar, escrever ou reservar. Um site com visitas e sem conversões está a falhar em algo.",
      },
      {
        term: "Cópia de segurança",
        text: "Uma fotografia do site guardada para o caso de algo quebrar. Faz-se sozinha e volta-se atrás em minutos, sem perder textos nem preços.",
      },
      {
        term: "Aviso legal",
        text: "O texto obrigatório que diz quem é e como o site usa os dados. Sem ele, o formulário de contacto viola a lei.",
      },
      {
        term: "Carta digital com QR",
        text: "A sua carta online num endereço que nunca muda: o QR das mesas aponta sempre para lá. Lê-se sem zoom e o Google indexa-a, ao contrário do PDF.",
      },
      {
        term: "Encomenda direta",
        text: "O cliente encomenda a si (WhatsApp ou o seu sistema) em vez de a uma plataforma que leva até 30 %. Cada encomenda direta é margem que não oferece.",
      },
      {
        term: "Encomenda online",
        text: "O cliente deixa o pedido (bolos, leitão de Natal, meio borrego) com data e dados pelo site ou WhatsApp. Nem uma encomenda perdida entre mensagens.",
      },
      {
        term: "Carta de pequenos-almoços",
        text: "A sua oferta da manhã publicada onde se lê no telemóvel, com preços e foto do pequeno-almoço estrela.",
      },
      {
        term: "hreflang",
        text: "A etiqueta que diz ao Google que uma página tem versão noutro idioma. Sem ela, a versão inglesa compete com a espanhola e perdem as duas.",
      },
      {
        term: "301",
        text: "O redirecionamento permanente: se uma página muda de endereço, o 301 leva visitante e Google ao novo sem perder o que tinham ganho.",
      },
      {
        term: "CTA",
        text: "A chamada à ação: o botão que quer que carreguem («Marque», «Ligue-nos»). Sem um botão claro por ecrã, a visita acaba em nada.",
      },
      {
        term: "Wireframe",
        text: "O esqueleto do site antes de o desenhar: o que vai em cada bloco e em que ordem. Muda-se em minutos e evita três redesenho.",
      },
      {
        term: "Alt (texto alternativo)",
        text: "A descrição de uma imagem para quem não a vê e para o Google. Não é «imagem1.jpg»: é «fachada da loja na Calle El Agua».",
      },
    ],
  },

  ru: {
    metaTitle: "Веб-глоссарий без жаргона (29 терминов) | Sur Digital",
    metaDescription:
      "29 слов, которые используют, когда продают сайт, каждое объяснено одной фразой: домен, хостинг, SEO, hreflang, 301 и за что с вас берут деньги.",
    crumbHome: "Главная",
    crumb: "Глоссарий",
    h1: "Словарь",
    h1Accent: "без жаргона",
    leadStart:
      "Если вам продают сайт и не могут объяснить эти 29 слов — начало плохое. Вот они без тумана, чтобы вы торговались, понимая, что подписываете.",
    leadEnd: "",
    indexLabel: "Алфавитный указатель",
    readGuide: "Читать руководство →",
    missingTitle: "Не хватает слова?",
    missingText:
      "Спросите — объясним без обязательств. А чтобы увидеть всё это в деле, начните с бесплатного лендинга.",
    missingCta: "Спросить в LinkedIn",
    nextIntro: "Если это пригодилось, следующий шаг — увидеть в практике:",
    nextServices: "услуги",
    nextPricing: "цены",
    nextBlog: "руководства в блоге",
    nextSectors: "сайты по отраслям",
    terms: [
      {
        term: "Домен",
        text: "Адрес вашего сайта (vashafirma.ru). Регистрируется на ваше имя, как телефон магазина: он ваш, а не наш.",
      },
      {
        term: "Хостинг",
        text: "Место, где живёт сайт: аренда 60–90 € в год, оплачивается напрямую провайдеру, без нашей наценки.",
      },
      {
        term: "SEO",
        text: "Чтобы Google показывал вас, когда кто-то ищет то, что вы продаёте. Не магия: структура, тексты, скорость и отзывы — в этом порядке.",
      },
      {
        term: "Локальное SEO",
        text: "Та же работа для запросов «рядом со мной»: ваш район, карточка в Google Maps и отзывы.",
      },
      {
        term: "Core Web Vitals",
        text: "Оценки Google: быстрый ли сайт и не прыгает ли при загрузке. Измеряются на телефоне, а не на компьютере.",
      },
      {
        term: "Адаптивность",
        text: "Сайт сам подстраивается под телефон, планшет и компьютер. Это не опция: 60 % визитов приходят с телефона.",
      },
      {
        term: "Ключевое слово",
        text: "То, что ваш клиент вводит в Google. «Парикмахерская на Carretera de Cádiz» — это запрос; «личный бренд» никому не интересен.",
      },
      {
        term: "Kit Digital",
        text: "Европейская субсидия на цифровизацию бизнеса. Мы с ней не работаем, и в блоге объясняем почему — без обиняков.",
      },
      {
        term: "Landing page",
        text: "Одна страница для одного: чтобы посетитель связался с вами. Именно её мы дарим как первый сайт, без меню, которые отвлекают.",
      },
      {
        term: "HTTPS",
        text: "Замок в адресной строке. Без него Chrome предупреждает, что сайт «не защищён», и посетитель уходит. Включено всегда.",
      },
      {
        term: "Sitemap",
        text: "Индекс сайта, который мы отдаём Google, чтобы он знал, какие страницы есть и какие новые. Без него вас найдут позже.",
      },
      {
        term: "Search Console",
        text: "Бесплатный инструмент Google: по каким запросам вас находят и что не работает. Мы делаем регистрацию и учим читать отчёты.",
      },
      {
        term: "Карточка Google Business",
        text: "Профиль бизнеса в Google Maps: часы работы, фото, отзывы и кнопка звонка. Первое, что видит человек при поиске «рядом со мной».",
      },
      {
        term: "Веб-аналитика",
        text: "Знать, сколько людей заходит, откуда и сколько вам пишут. Без измерений любое решение — ставка вслепую.",
      },
      {
        term: "Отзывы Google",
        text: "Что другие клиенты говорят о вас в карточке Maps. Это перевес в вашу пользу, когда сравнивают три похожих бизнеса.",
      },
      {
        term: "Google Ads",
        text: "Платная реклама: вы вверху уже сегодня и платите за клик. Полезно купить время, пока органическая выдача растёт.",
      },
      {
        term: "Структурированные данные",
        text: "Мелкий шрифт, который говорит Google, кто вы (местный бизнес, FAQ, статья). Именно он делает сниппет полнее.",
      },
      {
        term: "Конверсия",
        text: "Момент, когда посетитель делает то, что нужно: звонит, пишет или бронирует. Сайт с трафиком и без конверсий где-то ошибается.",
      },
      {
        term: "Резервная копия",
        text: "Снимок сайта на случай поломки. Делается сама и откатывается за минуты, без потери текстов и цен.",
      },
      {
        term: "Правовая информация",
        text: "Обязательный текст о том, кто вы и как сайт использует данные. Без него ваша форма связи нарушает закон.",
      },
      {
        term: "Цифровое меню с QR",
        text: "Ваше меню онлайн по неизменному адресу: QR на столах всегда ведёт туда. Читается без зума и индексируется Google, в отличие от PDF.",
      },
      {
        term: "Прямой заказ",
        text: "Клиент заказывает у вас (WhatsApp или ваша система), а не через платформу, которая берёт до 30 %. Каждый прямой заказ — ваша маржа.",
      },
      {
        term: "Онлайн-заказ",
        text: "Клиент оставляет заказ (торты, рождественский поросёнок, полбарашка) с датой и данными на сайте или в WhatsApp. Ни один заказ не теряется в переписке.",
      },
      {
        term: "Меню завтраков",
        text: "Ваше утреннее предложение опубликовано там, где читается с телефона, с ценами и фото главного завтрака.",
      },
      {
        term: "hreflang",
        text: "Тег, который сообщает Google, что у страницы есть версия на другом языке. Без него английская версия конкурирует с испанской, и обе проигрывают.",
      },
      {
        term: "301",
        text: "Постоянный редирект: если страница меняет адрес, 301 ведёт посетителя и Google на новый, не теряя накопленного.",
      },
      {
        term: "CTA",
        text: "Призыв к действию: кнопка, которую нужно нажать («Записаться», «Позвоните»). Если на экране нет явной кнопки, визит заканчивается ничем.",
      },
      {
        term: "Wireframe",
        text: "Скелет сайта до дизайна: что в каком блоке и в каком порядке. Меняется за минуты и избавляет от трёх переделок.",
      },
      {
        term: "Alt (альтернативный текст)",
        text: "Описание изображения для тех, кто его не видит, и для Google. Не «image1.jpg», а «витрина на Calle El Agua».",
      },
    ],
  },
};
