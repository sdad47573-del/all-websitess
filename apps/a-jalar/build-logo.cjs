const sharp = require('sharp');

/**
 * Builds the A JALAR logo assets from `a-jalar-facebook-2.ClVOrnOe_1ClhaA.webp`.
 *
 * The source is a 1600x1600 Facebook photo on a flat dark backdrop (rgb 10,17,30), with a
 * food photo on top, the logo lockup in a middle band and another photo below. Only the
 * lockup is wanted, so it is cropped out and the backdrop is keyed away to transparency.
 *
 * Keying uses a global distance-from-backdrop threshold rather than a flood fill: the
 * backdrop is flat but webp compression scatters noise across it, so a flood fill leaks
 * around the artwork and leaves speckles. The distance histogram has a clear empty gap at
 * 65-70 between backdrop noise and real artwork, so a single cut is reliable.
 */
const SRC = '../../packages/@assets/A-JALAR/a-jalar-facebook-2.ClVOrnOe_1ClhaA.webp';
const DIR = '../../packages/@assets/A-JALAR/';
const BG = [10, 17, 30];
/** Sum of absolute channel deltas; the histogram is empty between 65 and 70. */
const BG_CUT = 68;

/** Measured bounds of the lockup band inside the source photo. */
const LEFT = 259;
const TOP = 864;
const WIDTH = 1117;
const HEIGHT = 265;

/** "A JALAR" wordmark colour for light backgrounds (matches the theme's base-content). */
const INK = [43, 60, 52];

const OUT_WIDTH = 720;

const dist = (px, i) =>
	Math.abs(px[i] - BG[0]) + Math.abs(px[i + 1] - BG[1]) + Math.abs(px[i + 2] - BG[2]);

(async () => {
	const { data: src, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
	const sw = info.width;
	const sc = info.channels;

	// Crop the lockup band and key out the backdrop.
	const rgba = Buffer.alloc(WIDTH * HEIGHT * 4);
	for (let i = 0; i < WIDTH * HEIGHT; i++) {
		const s = ((TOP + Math.floor(i / WIDTH)) * sw + (LEFT + (i % WIDTH))) * sc;
		rgba[i * 4] = src[s];
		rgba[i * 4 + 1] = src[s + 1];
		rgba[i * 4 + 2] = src[s + 2];
		rgba[i * 4 + 3] = dist(src, s) > BG_CUT ? 255 : 0;
	}

	const raw = { width: WIDTH, height: HEIGHT, channels: 4 };
	const trimmed = await sharp(rgba, { raw }).trim({ threshold: 1 }).png().toBuffer();
	const { data: px, info: li } = await sharp(trimmed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
	const lw = li.width;
	const lh = li.height;
	const lc = li.channels;
	const at = (x, y) => (y * lw + x) * lc;

	// Brand-white wordmark: for dark surfaces (hero, footer).
	await sharp(trimmed)
		.resize({ width: OUT_WIDTH })
		.png({ compressionLevel: 9 })
		.toFile(DIR + 'a-jalar-logo.png');

	// Light-surface variant: recolour the white glyphs that touch the transparent backdrop,
	// which leaves the white "AJ" inside the orange badge untouched.
	const isClear = (x, y) => px[at(x, y) + 3] === 0;
	const isWhite = (x, y) =>
		px[at(x, y) + 3] > 0 &&
		px[at(x, y)] > 210 &&
		px[at(x, y) + 1] > 210 &&
		px[at(x, y) + 2] > 210;

	const ink = new Uint8Array(lw * lh);
	const inkStack = [];
	const inkPush = (x, y) => {
		if (x < 0 || y < 0 || x >= lw || y >= lh) return;
		const k = y * lw + x;
		if (ink[k]) return;
		if (!isClear(x, y) && !isWhite(x, y)) return;
		ink[k] = 1;
		inkStack.push(x, y);
	};
	for (let x = 0; x < lw; x++) {
		inkPush(x, 0);
		inkPush(x, lh - 1);
	}
	for (let y = 0; y < lh; y++) {
		inkPush(0, y);
		inkPush(lw - 1, y);
	}
	while (inkStack.length) {
		const y = inkStack.pop();
		const x = inkStack.pop();
		inkPush(x + 1, y);
		inkPush(x - 1, y);
		inkPush(x, y + 1);
		inkPush(x, y - 1);
	}

	let recoloured = 0;
	for (let k = 0; k < lw * lh; k++) {
		if (!ink[k] || !isWhite(k % lw, Math.floor(k / lw))) continue;
		const i = k * lc;
		px[i] = INK[0];
		px[i + 1] = INK[1];
		px[i + 2] = INK[2];
		recoloured++;
	}

	await sharp(px, { raw: { width: lw, height: lh, channels: lc } })
		.resize({ width: OUT_WIDTH })
		.png({ compressionLevel: 9 })
		.toFile(DIR + 'a-jalar-logo-oscuro.png');

	// Favicon: the orange AJ badge on its own. Measured on the written 720px logo so the
	// coordinates match the file on disk. The badge is the filled tile on the left, so the
	// opaque component touching the left edge is exactly the badge.
	const logoPath = DIR + 'a-jalar-logo.png';
	const { data: lpx, info: linfo } = await sharp(logoPath)
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });
	const gw = linfo.width;
	const gh = linfo.height;
	const gc = linfo.channels;

	let seedX = -1;
	let seedY = -1;
	for (let y = 0; y < gh && seedY < 0; y++) {
		for (let x = 0; x < gw; x++) {
			if (lpx[(y * gw + x) * gc + 3] > 128) {
				seedX = x;
				seedY = y;
				break;
			}
		}
	}
	if (seedY < 0) throw new Error('no opaque pixel found in the logo');

	const badgeSeen = new Uint8Array(gw * gh);
	// Stack holds interleaved x,y pairs and is drained as y then x.
	const badgeStack = [seedX, seedY];
	let bLeft = gw;
	let bRight = 0;
	let bTop = gh;
	let bBottom = 0;
	while (badgeStack.length) {
		const y = badgeStack.pop();
		const x = badgeStack.pop();
		if (x < 0 || y < 0 || x >= gw || y >= gh) continue;
		const k = y * gw + x;
		if (badgeSeen[k] || lpx[k * gc + 3] <= 128) continue;
		badgeSeen[k] = 1;
		if (x < bLeft) bLeft = x;
		if (x > bRight) bRight = x;
		if (y < bTop) bTop = y;
		if (y > bBottom) bBottom = y;
		badgeStack.push(x + 1, y, x - 1, y, x, y + 1, x, y - 1);
	}
	console.log(
		`badge x ${bLeft}-${bRight}, y ${bTop}-${bBottom} (${bRight - bLeft + 1}x${
			bBottom - bTop + 1
		})`,
	);

	const badge = await sharp(logoPath)
		.extract({
			left: bLeft,
			top: bTop,
			width: bRight - bLeft + 1,
			height: bBottom - bTop + 1,
		})
		.png()
		.toBuffer();
	for (const size of [64, 180, 192, 512]) {
		const out = await sharp(badge)
			.resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
			.png({ compressionLevel: 9 })
			.toBuffer();
		require('fs').writeFileSync(`public/favicon${size === 64 ? '' : '-' + size}.png`, out);
	}

	for (const [name, file] of [
		['a-jalar-logo.png', DIR + 'a-jalar-logo.png'],
		['a-jalar-logo-oscuro.png', DIR + 'a-jalar-logo-oscuro.png'],
	]) {
		const m = await sharp(file).metadata();
		console.log(`${name} ${m.width}x${m.height} ratio ${(m.width / m.height).toFixed(2)}`);
	}
	console.log(`recoloured ${recoloured} px for the light-surface variant`);
})();
