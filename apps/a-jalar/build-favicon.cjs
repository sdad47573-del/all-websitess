const sharp = require('sharp');

/**
 * Genera el set de favicons de A JALAR a partir del logotipo oficial.
 *
 * El wordmark completo es de 4.26:1, inservible como icono, así que se recorta el
 * ligature "AJ" de la izquierda (con su estrella) y se centra en un cuadrado. El
 * relleno usa el verde de marca (#1B2A22) porque el "A" lleva un contorno naranja
 * claro que perdería contraste sobre un fondo transparente.
 */
const SRC = '../../packages/@assets/A-JALAR/a-jalar-logo.png';
const BG = '#1B2A22';

/** Recorte del ligature "AJ" dentro del PNG del logo (720x169). */
const CROP = { left: 20, top: 0, width: 195, height: 169 };

/** Sizes que necesitan los navegadores y las apps. */
const SIZES = [16, 32, 48, 64, 96, 180, 192, 512];

(async () => {
	const mark = await sharp(SRC).extract(CROP).trim({ threshold: 1 }).png().toBuffer();
	const meta = await sharp(mark).metadata();
	// Encuadre cuadrado con algo de aire alrededor del monograma.
	const side = Math.round(Math.max(meta.width, meta.height) * 1.12);
	const square = await sharp(mark)
		.resize(side, side, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.flatten({ background: BG })
		.png()
		.toBuffer();

	for (const size of SIZES) {
		await sharp(square)
			.resize(size, size, { kernel: 'lanczos3' })
			.png({ compressionLevel: 9, effort: 10 })
			.toFile(`public/favicon${size === 64 ? '' : '-' + size}.png`);
	}
	console.log(`monograma ${meta.width}x${meta.height} -> cuadrado ${side}px, ${SIZES.length} archivos`);
})();
