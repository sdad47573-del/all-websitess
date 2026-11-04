// Datos legales del titular en un único sitio. El NIF y el email se leen de
// variables de entorno para no publicar datos fiscales en el repositorio:
// sin ellos el aviso legal no cumple el art. 10 de la LSSI-CE.
import { CONTACT } from "./contact";

export const LEGAL = {
  brand: "Sur Digital",
  owner: "Jose Aguilar",
  nif: (import.meta.env.PUBLIC_LEGAL_NIF ?? "").trim(),
  email: (import.meta.env.PUBLIC_LEGAL_EMAIL ?? "").trim(),
  address: CONTACT.address,
  website: "sur-digital.vercel.app",
  activity:
    "Diseño y desarrollo web, tiendas online, posicionamiento SEO local y consultoría digital",
  updated: "4 de noviembre de 2026",
} as const;
