/**
 * Fotos del salón publicadas en la ficha de Google Maps.
 *
 * Aquí solo viven el nombre del fichero y su texto alternativo: la lista es datos puros, sin
 * `import.meta.glob`, para que las pruebas puedan leerla sin depender de Vite. La página resuelve
 * cada nombre a su módulo de imagen con `import.meta.glob` y lo sirve con `<Image>` de
 * `astro:assets`.
 */
export const galleryPhotosData = [
	{ file: 'ar-professional-01.jpg', alt: 'Vista del salón AR Professional compartida en Google Maps' },
	{ file: 'ar-professional-02.jpg', alt: 'Detalle del espacio de peluquería AR Professional' },
	{ file: 'ar-professional-03.jpg', alt: 'Interior del salón de belleza en Teatinos' },
	{ file: 'ar-professional-04.jpg', alt: 'Vista de la peluquería AR Professional' },
	{ file: 'ar-professional-05.jpg', alt: 'Espacio de estilismo de AR Professional en Málaga' },
] as const;
