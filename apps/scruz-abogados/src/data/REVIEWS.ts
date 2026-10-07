/**
 * SINGLE SOURCE OF TRUTH de las reseñas REALES de la ficha de Google Business
 * Profile del despacho.
 *
 * De esta lista salen las tres cosas que tienen que contar lo mismo:
 *   1. las tarjetas visibles en la portada (GoogleReviews.astro),
 *   2. el `aggregateRating` de LegalService en el JSON-LD (@graph base),
 *   3. el bloque `review` del JSON-LD.
 * La media y el número de reseñas se CALCULAN aquí (REVIEW_STATS), no se
 * escriben a mano: así el schema no puede quedarse desfasado de lo que la web
 * muestra, que es justo lo que Google sanciona.
 *
 * Cómo añadir una reseña nueva (una por cada opinión publicada en Google):
 *   1. Copia el texto EXACTO de Google Maps —sin retocar, resumir ni corregir—.
 *   2. Pon el nombre del autor tal y como figura en Google y la valoración (1-5).
 *   3. Añade `date` en formato ISO (YYYY-MM-DD) si la conoces: Google recomienda
 *      `datePublished` en el marcado de reseñas.
 *   4. Si la reseña lleva foto de perfil, impórtala y pásala en `photo`.
 *
 * ⚠️ Nunca inventar, "mejorar" ni atribuir reseñas que no estén publicadas en
 * Google (SEO.md §2): el rating manipulado se penaliza y puede costar el pack
 * local. Y el contenido marcado en el JSON-LD tiene que estar VISIBLE en la
 * página: por eso solo se marca lo que la web pinta (SHOWN_REVIEWS).
 */
import type { ImageMetadata } from 'astro';
import unnamedImg from '@assets/unnamed (2).png';

export interface GoogleReview {
	/** Nombre del autor tal y como aparece en Google Maps. */
	author: string;
	/** Valoración en estrellas (1-5). */
	rating: number;
	/** Texto exacto de la reseña. */
	text: string;
	/** Fecha de publicación (ISO, YYYY-MM-DD). Opcional pero recomendada. */
	date?: string;
	/** Foto de perfil del autor en Google. */
	photo?: ImageMetadata;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
	{
		photo: unnamedImg,
		author: 'elizabeth blu',
		rating: 5,
		text: 'Un profesional excelente. Tuvimos un problema y no sólo nos ayudó con todo, también nos tranquilizó durante todo el proceso y ayudó a mi familiar a salir de una situación injusta. Súper agradecidos y lo recomendamos al 100%',
	},
];

/**
 * Nº de reseñas que la portada pinta como tarjetas. Las demás siguen contando
 * para la media (aggregateRating), pero NO se marcan en el JSON-LD: marcar
 * reseñas que el usuario no puede leer en la página incumple las directrices.
 * (El diseño de la sección es una fila de tarjetas, así que a partir de la
 * tercera hay que tocar también el layout de GoogleReviews.astro.)
 */
export const VISIBLE_REVIEWS = 2;

export const SHOWN_REVIEWS = GOOGLE_REVIEWS.slice(0, VISIBLE_REVIEWS);

/**
 * Media y total de reseñas derivados de la lista. La media se redondea a un
 * decimal (4,8) porque es lo que muestra Google en la ficha.
 */
export const REVIEW_STATS = (() => {
	const count = GOOGLE_REVIEWS.length;
	const average = count
		? Math.round((GOOGLE_REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count) * 10) / 10
		: 0;
	return { count, average };
})();
