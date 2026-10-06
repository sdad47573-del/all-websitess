/**
 * Fotos del taller publicadas en la ficha de Google Maps.
 *
 * Aquí solo viven el nombre del fichero y su texto alternativo: la lista es datos puros, sin
 * `import.meta.glob`, para que las pruebas puedan leerla sin depender de Vite. La página resuelve
 * cada nombre a su módulo de imagen con `import.meta.glob` y lo sirve con `<Image>` de
 * `astro:assets`.
 */
export const galleryPhotosData = [
	{ file: 'auto-moto-miguel-01.jpg', alt: 'Vista del taller Auto Moto Miguel' },
	{ file: 'auto-moto-miguel-02.jpg', alt: 'Interior del taller de motos' },
	{ file: 'auto-moto-miguel-03.jpg', alt: 'Detalle del espacio de trabajo' },
	{ file: 'auto-moto-miguel-04.jpg', alt: 'Herramientas y zona de reparación' },
	{ file: 'auto-moto-miguel-05.jpg', alt: 'Vista del taller desde el interior' },
	{ file: 'auto-moto-miguel-06.jpg', alt: 'Equipamiento del taller' },
] as const;
