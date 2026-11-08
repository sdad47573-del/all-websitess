/**
 * Fotos del taller publicadas en la ficha de Google Maps.
 *
 * Aquí solo viven el nombre del fichero y su texto alternativo: la lista es datos puros, sin
 * `import.meta.glob`, para que las pruebas puedan leerla sin depender de Vite. La página resuelve
 * cada nombre a su módulo de imagen con `import.meta.glob` y lo sirve con `<Image>` de
 * `astro:assets`.
 */
export const galleryPhotosData = [
	{ file: 'carbikemoto-01.jpg', alt: 'Vista del taller Carbikemoto' },
	{ file: 'carbikemoto-02.jpg', alt: 'Interior del taller de motos' },
	{ file: 'carbikemoto-03.jpg', alt: 'Detalle del espacio de trabajo' },
	{ file: 'carbikemoto-04.jpg', alt: 'Herramientas y zona de reparación' },
	{ file: 'carbikemoto-05.jpg', alt: 'Vista del taller desde el interior' },
	{ file: 'carbikemoto-06.jpg', alt: 'Equipamiento del taller' },
] as const;
