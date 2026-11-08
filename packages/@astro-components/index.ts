export { default as getImage } from './src/getImage';
export { default as Image } from './src/Image.astro';
export { default as Layout } from './src/Layout.astro';
export { default as QR } from './src/QR.astro';

// Componentes compartidos por las webs de negocios locales (apps/*).
// Todos reciben la información por props: el contenido y los textos siguen
// viviendo en cada app, solo se comparte la estructura y el marcado SEO.
export { default as LocalSeo } from './src/local/Seo.astro';
export { default as LocalTopbar } from './src/local/Topbar.astro';
export { default as LocalHero } from './src/local/Hero.astro';
export { default as LocalChips } from './src/local/Chips.astro';
export { default as LocalAbout } from './src/local/About.astro';
export { default as LocalMenu } from './src/local/Menu.astro';
export { default as LocalGallery } from './src/local/Gallery.astro';
export { default as LocalVisit } from './src/local/Visit.astro';
export { default as LocalFaq } from './src/local/Faq.astro';
export { default as LocalSecciones } from './src/local/Secciones.astro';
export { default as LocalFooter } from './src/local/Footer.astro';
export { default as LocalHighlights } from './src/local/Highlights.astro';
export { default as LocalGaleria } from './src/local/Galeria.astro';
export { default as LocalFaqBlock } from './src/local/FaqBlock.astro';
export { default as LocalFaqList } from './src/local/FaqList.astro';
export { default as LocalMapFab } from './src/local/MapFab.astro';
export { default as LocalPhoneFab } from './src/local/PhoneFab.astro';
export { default as LocalServicios } from './src/local/Servicios.astro';
export { default as LocalContact } from './src/local/Contact.astro';
export { default as LocalSalon } from './src/local/Salon.astro';
export { default as LocalOpiniones } from './src/local/Opiniones.astro';
export { default as LocalShop } from './src/local/Shop.astro';
export { default as LocalWhatsappFab } from './src/local/WhatsappFab.astro';
