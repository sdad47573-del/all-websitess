// Textos de la página de FAQ y unión de las cinco listas de preguntas.
// Las listas mantienen el orden de DATA.faq: la página comprueba que las
// longitudes coinciden para no publicar una FAQ a medias.
import type { Locale } from "../../../data/i18n";
import { FAQ_DE } from "./de";
import { FAQ_EN } from "./en";
import { FAQ_FR } from "./fr";
import { FAQ_PT } from "./pt";
import { FAQ_RU } from "./ru";
import type { FaqEntry } from "./types";

export type FaqCopy = {
  metaTitle: string;
  metaDescription: string;
  crumbHome: string;
  crumb: string;
  h1: string;
  h1Accent: string;
  lead: string;
  sectionTitle: string;
  sectionAccent: string;
  sectionLead: string;
  askLink: string;
  entries: FaqEntry[];
};

const UI_COPY: Record<Locale, Omit<FaqCopy, "entries">> = {
  en: {
    metaTitle: "FAQ: websites in Málaga, price and deadlines | Sur Digital",
    metaDescription:
      "Fixed price, deadlines, domain ownership, Kit Digital and maintenance: the questions that come up before hiring a website in Málaga.",
    crumbHome: "Home",
    crumb: "FAQ",
    h1: "Questions before",
    h1Accent: "we start",
    lead: "What people ask us most on LinkedIn, answered with no small print.",
    sectionTitle: "Frequently asked",
    sectionAccent: "questions",
    sectionLead:
      "Everything you need to know before starting. If anything's still unclear,",
    askLink: "message us on LinkedIn",
  },
  de: {
    metaTitle: "FAQ: Websites in Málaga, Preis und Termine | Sur Digital",
    metaDescription:
      "Festpreis, Fristen, Eigentum an der Domain, Kit Digital und Betreuung: die Fragen, die vor dem Website-Kauf in Málaga auftauchen.",
    crumbHome: "Start",
    crumb: "FAQ",
    h1: "Fragen vor",
    h1Accent: "dem Start",
    lead: "Was uns auf LinkedIn am häufigsten gefragt wird, ohne Kleingedrucktes beantwortet.",
    sectionTitle: "Häufige",
    sectionAccent: "Fragen",
    sectionLead:
      "Alles, was du vor dem Start wissen musst. Bleibt eine Frage offen,",
    askLink: "schreib uns auf LinkedIn",
  },
  fr: {
    metaTitle: "FAQ : sites à Málaga, prix et délais | Sur Digital",
    metaDescription:
      "Prix ferme, délais, propriété du domaine, Kit Digital et maintenance : les questions qui arrivent avant de commander un site à Málaga.",
    crumbHome: "Accueil",
    crumb: "FAQ",
    h1: "Questions avant",
    h1Accent: "de commencer",
    lead: "Ce qu'on nous demande le plus sur LinkedIn, répondu sans petites lignes.",
    sectionTitle: "Questions",
    sectionAccent: "fréquentes",
    sectionLead:
      "Tout ce qu'il faut savoir avant de commencer. S'il reste une question,",
    askLink: "écrivez-nous sur LinkedIn",
  },
  pt: {
    metaTitle: "FAQ: sites em Málaga, preço e prazos | Sur Digital",
    metaDescription:
      "Preço fechado, prazos, propriedade do domínio, Kit Digital e manutenção: as dúvidas que aparecem antes de contratar um site em Málaga.",
    crumbHome: "Início",
    crumb: "FAQ",
    h1: "Dúvidas antes",
    h1Accent: "de começar",
    lead: "O que mais nos perguntam no LinkedIn, respondido sem letra pequena.",
    sectionTitle: "Perguntas",
    sectionAccent: "frequentes",
    sectionLead:
      "Tudo o que precisa de saber antes de começar. Se ficar alguma dúvida,",
    askLink: "escreva-nos no LinkedIn",
  },
  ru: {
    metaTitle: "FAQ: сайты в Малаге, цена и сроки | Sur Digital",
    metaDescription:
      "Фиксированная цена, сроки, владение доменом, Kit Digital и обслуживание: вопросы, которые возникают до заказа сайта в Малаге.",
    crumbHome: "Главная",
    crumb: "FAQ",
    h1: "Вопросы перед",
    h1Accent: "началом",
    lead: "То, что чаще всего спрашивают в LinkedIn, — без мелкого шрифта.",
    sectionTitle: "Частые",
    sectionAccent: "вопросы",
    sectionLead:
      "Всё, что нужно знать до старта. Остались сомнения —",
    askLink: "напишите нам в LinkedIn",
  },
};

const ENTRIES: Record<Locale, FaqEntry[]> = {
  en: FAQ_EN,
  de: FAQ_DE,
  fr: FAQ_FR,
  pt: FAQ_PT,
  ru: FAQ_RU,
};

export const faq = (lang: Locale): FaqCopy => ({
  ...UI_COPY[lang],
  entries: ENTRIES[lang],
});
