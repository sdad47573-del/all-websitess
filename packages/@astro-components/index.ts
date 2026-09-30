export { default as getImage } from './src/getImage';
export { default as Image } from './src/Image.astro';
export { default as Layout } from './src/Layout.astro';
export { default as QR } from './src/QR.astro';
export { default as Topbar } from './src/Topbar/Topbar1.astro';

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
export { default as LocalFooter } from './src/local/Footer.astro';
