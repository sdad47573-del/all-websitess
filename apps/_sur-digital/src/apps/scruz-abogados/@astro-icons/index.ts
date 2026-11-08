// Solo se exportan los iconos que usa el sitio (el movimiento `BurguerIcon`… o
// los de la plantilla de agencia —`DesingIcon`, `SeoIcon`, `UXIcon`…— no tenían
// ninguna referencia). Los seis últimos además importaban un PNG propio: como
// este barril se importa desde media web, sus módulos se evaluaban igual y sus
// PNG acababan en `dist/_astro` sin que ninguna página los pintara.
export { default as GoogleIcon } from './src/GoogleIcon.astro';
export { default as MailIcon } from './src/MailIcon.astro';
export { default as MapIcon } from './src/MapIcon.astro';
export { default as PhoneIcon } from './src/PhoneIcon.astro';
export { default as RiIcon } from './src/RiIcon.astro';
export { default as WhatsappIcon } from './src/WhatsappIcon.astro';
