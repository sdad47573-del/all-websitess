// Precios en inglés. Los nombres y unidades de los planes NO se repiten aquí:
// salen de LOCALE_CONTENT.en.plans para que la tarjeta diga lo mismo que la
// landing en inglés (misma URL, cookie `lang=en`). El precio sale siempre de
// DATA.plans.
import type { PreciosCopy } from "./types";

export const PRECIOS_EN: PreciosCopy = {
  metaTitle: "Web design prices Málaga 2026: from €0 | Sur Digital",
  metaDescription:
    "Web design prices in Málaga: free landing page, full website €490, online shop €890 and maintenance €39/month. Fixed price in writing, no lock-in.",
  crumbHome: "Home",
  crumb: "Prices",
  heroTitle: "Clear prices,",
  heroAccent: "no surprises",
  heroLead:
    "Other agencies charge €600–900 for a five-page website. Here you see what each thing costs, with VAT and terms in writing before we start. The comparison with Málaga agencies and their published prices is further down.",
  guideTitle: "Which plan is yours?",
  guideLead:
    "Find your case. Each card below says who it's for, what it includes and what it costs.",
  guideRows: [
    { need: "I want to start without spending anything", planIndex: 0 },
    { need: "I'm a photographer, architect or personal brand", planIndex: 1 },
    { need: "I have a business and want up to 5 pages", planIndex: 2 },
    { need: "I want to sell online or a large site", planIndex: 3 },
  ],
  plansTitle: "Four plans, four prices",
  plansLead:
    "Same prices for every sector. What changes is the content and the sections, not the price.",
  popularLabel: "Most popular",
  freeLabel: "no charge",
  paidLabel: "one-off",
  ctaFree: "Request the free plan",
  ctaPaid: "I want this plan",
  vatNote:
    "Prices for companies, VAT not included. If you hire as a private individual, the quote includes VAT and the total to pay.",
  extrasTitle: "Extras and one-off services",
  extrasLead:
    "Things that aren't in the plans but you can add to any of them, with the price in sight.",
  retainersTitle: "After the website,",
  retainersAccent: "what makes it grow",
  retainersLead:
    "Three monthly fees, no lock-in: local SEO, social media and ads. Hire what you need and cancel whenever you want.",
  retainerCta: "I want this plan",
  monthSuffix: "/month",
  tiersTitle: "Annual care plans",
  tiersLead:
    "If the site changes often, the annual plan works out better than adding one-off changes. Monthly maintenance at €39/month is still available for small edits.",
  yearSuffix: "/year",
  enterpriseBadge: "Enterprise",
  enterpriseTitle: "Large projects,",
  enterpriseAccent: "with a written SLA",
  enterpriseLead:
    "Tailored platforms for companies already selling online that need everything to talk to each other.",
  slaTitle: "Support SLA",
  slaFrom: "From",
  slaPerProject: "per project",
  slaLead:
    "Scope, milestones and SLA are signed before we start. Response times run in working hours (Monday to Thursday 10–20, Friday 10–15); uptime monitoring is continuous.",
  slaHeaders: ["Level", "Response", "When it applies"],
  slaRows: [
    { level: "Critical incident", response: "2 working hours", detail: "Site down, payments or data compromised" },
    { level: "High incident", response: "8 working hours", detail: "Core feature unusable" },
    { level: "Question or improvement", response: "24 working hours", detail: "Planning changes and new sections" },
    { level: "Target uptime", response: "99.9%", detail: "24/7 monitoring with alerts" },
  ],
  slaNote:
    "Prices exclude VAT. Integrations with third-party licences (ERP, CRM, gateways) are paid to their provider and quoted separately.",
  enterpriseCta: "Tell us about the project",
  exclusionsTitle: "What's not included",
  exclusionsLead:
    "Saying what's out is as important as saying what's in. Nothing on this list is charged by surprise: if you need it, it's quoted before we start.",
  exclusions: [
    { name: "Certificates, licences and official fees", note: "If your activity needs permits or certificates, your accountant handles them." },
    { name: "Professional photography and video", note: "We work with your photos or put you in touch with a trusted photographer; quoted separately." },
    { name: "Legal copywriting", note: "Legal notice and privacy policy are drafted by your accountant or lawyer; we publish them." },
    { name: "Ad spend (Google Ads, Meta Ads)", note: "The ad budget is paid straight to the platform; campaign management is quoted separately." },
    { name: "Domain and hosting from year two", note: "The first year is included in Full website and Pro. After that it's around €60–90/year, paid straight to the provider." },
    { name: "Scope changes mid-project", note: "Work is agreed in writing: if the project grows because you want more, it's re-quoted before we continue." },
  ],
  cambiosEyebrow: "Is your free site already live?",
  cambiosTitle: "Want to change something?",
  cambiosAccent: "We'll make it yours",
  cambiosLead:
    "Your site isn't set in stone: if there's copy you're not sold on, a photo you want swapped or an out-of-date price, tell us and we'll adjust it with you until you say “that's it”.",
  cambiosChips: ["Copy and headlines", "Photos and gallery", "Prices and opening hours", "Colours and style", "Sections and order", "Google listing"],
  cambiosNote:
    "During the first month after launch, changes are free. After that they're included in the €39/month maintenance, no lock-in.",
  cambiosCta: "Request changes on LinkedIn",
  comparisonTitle: "Agencies, templates",
  comparisonAccent: "and us",
  comparisonLead:
    "Compare the three options you have when you want a website: the usual agency, doing it yourself (or a nephew) and what we offer.",
  comparisonSwipe: "Swipe the table to compare the 3 columns →",
  comparisonHeaders: ["Agency", "traditional", "Do it yourself", "or a template", "Sur Digital", "us"],
  comparisonRows: [
    { feature: "Price of a basic website", agency: "€600–900 (5 pages)", diy: "€0–300 + your time", us: "From €0" },
    { feature: "Fixed price in writing", agency: false, diy: false, us: true },
    { feature: "Delivery", agency: "3–8 weeks", diy: "When there's a gap", us: "Under 7 days" },
    { feature: "Design unique to your brand", agency: "Catalogue template", diy: true, us: true },
    { feature: "Domain and hosting in your name", agency: false, diy: true, us: true },
    { feature: "No lock-in or ties", agency: false, diy: true, us: true },
    { feature: "Direct contact with who builds it", agency: false, diy: true, us: true },
    { feature: "Speed optimisation (Core Web Vitals)", agency: "Extra", diy: false, us: true },
    { feature: "Search Console + sitemap setup", agency: "Extra", diy: false, us: true },
    { feature: "Optimised Google Business", agency: false, diy: false, us: true },
    { feature: "Forms that reach your phone", agency: "Extra (€30–80)", diy: false, us: true },
    { feature: "Local SEO by sector and neighbourhood", agency: "Only in expensive packs", diy: false, us: true },
    { feature: "Copy and photo changes after delivery", agency: "€25–50 per change", diy: "Yourself (if you can)", us: "Free the first month" },
    { feature: "Ongoing maintenance", agency: "€40–90/month", diy: "Up to you", us: "€39/month optional" },
    { feature: "Local SEO retainer", agency: "€199–400/month", diy: false, us: "€149/month" },
    { feature: "Social media", agency: "€145/month", diy: "Your time", us: "€145/month" },
    { feature: "Google Ads", agency: "€150–320/month + spend", diy: false, us: "€150/month + spend" },
    { feature: "Training on delivery", agency: "Depends on the agency", diy: false, us: "30 min recorded + guide" },
    { feature: "Large project with SLA", agency: "Large agencies only", diy: false, us: "From €2,500" },
    { feature: "Responsibility if something breaks", agency: true, diy: false, us: true },
  ],
  comparisonNote:
    "Agency and freelancer prices are usual ranges in the Málaga market in 2026. The “do it yourself” column assumes website-builder templates.",
  marketNote:
    "The detailed comparison by provider (published prices, national providers and the 34-feature matrix) is in Spanish for now:",
  marketLink: "see the market comparison",
  faqTitle: "Questions about prices",
  faq: [
    { q: "Is the €0 forever, or is there a catch?", a: "No catch: the first landing page (1 page) is genuinely free. We only ask that domain and hosting are in your name. If you later want more pages or other services, there is a price, fixed and in writing." },
    { q: "What does “fixed price” mean?", a: "That what you sign is what you pay: no extra hours, no VAT surprises, no surcharges on delivery. If the scope changes because you want more, it's re-quoted before touching anything." },
    { q: "Is hosting paid separately?", a: "The Full website plan includes domain and hosting for the first year. From year two it's around €60–90/year depending on the platform, in your name and paid straight to the provider: no middlemen, no markup from us." },
    { q: "Can I pay with Kit Digital?", a: "We don't work with Kit Digital. Our blog explains why (bureaucracy, VAT not covered, closed templates) and also how to choose a provider if you already have the subsidy." },
    { q: "How and when do I pay?", a: "Bank transfer or Bizum. On paid plans: half upfront and half on delivery. The first landing isn't paid for: it's free." },
    { q: "What if I want to cancel maintenance?", a: "You cancel, that's it: no lock-in. Your site stays yours and keeps running; you just stop getting updates and monthly changes." },
    { q: "Do monthly plans have a minimum term?", a: "No: local SEO, social media and Google Ads are paid month by month and cancelled whenever you want. The website stays yours whatever happens." },
  ],
  finalCta: "Ask for a written quote",
  extras: [
    { name: "Extra page", price: "€60", note: "Per extra page in the Full website and Pro plans." },
    { name: "Additional language", price: "from €150", note: "Structure and SEO for the second language (translation separate)." },
    { name: "Logo and basic identity", price: "from €150", note: "Logo in all formats, colour palette and typefaces." },
    { name: "Monthly maintenance", price: "€39/month", note: "Updates, backups and copy/photo changes. No lock-in." },
    { name: "Old site migration", price: "€90", note: "Redirects from the previous domain so you don't lose Google rankings." },
  ],
  plans: [
    { tagline: "Your first website, no risk", features: ["Modern, responsive single-page landing", "Direct contact button", "One revision included", "Delivered in under 7 days", "SSL certificate included"] },
    { tagline: "Photographers, architects and personal brands", features: ["Project gallery optimised to load fast", "Intro copy written with you", "Direct contact by WhatsApp and form", "SSL certificate and local SEO included", "Training so you can add projects yourself"] },
    { tagline: "Up to 5 pages with domain", features: ["Up to 5 custom pages", "Your own domain + 1 year hosting", "Basic SEO for Google", "Mobile optimisation", "Up to 3 revisions", "SSL certificate included", "30-min training + user guide", "24/7 monitoring, reply within 2 working hours"] },
    { tagline: "Online shop or large website", features: ["Online shop or large corporate site", "Integrated payment gateway", "Product and email management", "Local SEO (Google Maps)", "Optional maintenance €39/month", "SSL certificate included", "30-min training + user guide", "24/7 monitoring, reply within 2 working hours"] },
  ],
  retainers: [
    { name: "Local SEO", tagline: "So people find you by service and neighbourhood", features: ["Initial audit and keywords by service and neighbourhood", "Optimised Google Business profile and review management", "2 pieces of content a month (article or service page)", "Monthly report on rankings, calls and forms", "No lock-in: cancel anytime"] },
    { name: "Social media", tagline: "Twelve posts a month without writing them", features: ["12 posts a month on Instagram and Facebook", "Calendar, copy and basic graphic design", "Replies to comments and messages", "Monthly reach and enquiries report", "No lock-in: cancel anytime"] },
    { name: "Google Ads", tagline: "Customers already searching for what you sell", features: ["Campaign setup and conversion tracking", "Keywords, ads and landing page", "Weekly bid and budget optimisation", "Monthly report with cost per enquiry", "No lock-in: cancel anytime"] },
  ],
  tiers: [
    { name: "Essential care", note: "Updates, backups and security, 24/7 monitoring and small day-to-day changes.", features: ["Updates and backups", "SSL certificate renewed and monitored", "24/7 monitoring, reply within 2 working hours", "2 hours a month of copy and photo changes", "Monthly speed and uptime report"] },
    { name: "Managed care", note: "Everything above plus new sections and pages without quoting each one.", features: ["Everything in Essential", "New sections and pages included", "Campaign landing pages at no extra cost", "Priority in the work queue", "Quarterly speed and SEO review"] },
  ],
  enterpriseFeatures: [
    { title: "Custom development", text: "Platforms, private areas and internal tools where a template website doesn't reach." },
    { title: "Integrations", text: "CRM, ERP, invoicing, bookings, payment gateways and your own APIs: data moves on its own." },
    { title: "SLA in the contract", text: "Response times and uptime committed in writing and measured every month." },
    { title: "Performance and scale", text: "Architecture ready for traffic spikes and Core Web Vitals in the green even with large catalogues." },
    { title: "Priority support", text: "Direct channel and queue priority: critical incidents jump ahead of everything." },
    { title: "Migration and continuity", text: "Redirects, data and credentials in your name without losing rankings or history." },
  ],
};
