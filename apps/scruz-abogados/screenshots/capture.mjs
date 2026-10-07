// Capture PWA screenshots from the running dev server.
// Run with: node screenshots/capture.mjs
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const URL = 'http://localhost:4323/';
const OUT_DIR = 'public/screenshots';

await mkdir(OUT_DIR, { recursive: true });

// Use the system-installed Chrome (per the project system-info) instead of
// the bundled headless shell, which isn't installed in node_modules.
const browser = await chromium.launch({ channel: 'chrome' });

// Narrow — install banner on mobile-sized UA
{
	const ctx = await browser.newContext({
		viewport: { width: 540, height: 720 },
		deviceScaleFactor: 1,
	});
	const page = await ctx.newPage();
	await page.goto(URL, { waitUntil: 'networkidle', timeout: 30_000 });
	await page.waitForTimeout(500); // settle view transitions / fonts
	await page.screenshot({
		path: `${OUT_DIR}/home-narrow.png`,
		clip: { x: 0, y: 0, width: 540, height: 720 },
		type: 'png',
		// omitBackground: false (default)
	});
	await ctx.close();
	console.log('✓ home-narrow.png');
}

// Wide — install banner on desktop-sized UA
{
	const ctx = await browser.newContext({
		viewport: { width: 1280, height: 720 },
		deviceScaleFactor: 1,
	});
	const page = await ctx.newPage();
	await page.goto(URL, { waitUntil: 'networkidle', timeout: 30_000 });
	await page.waitForTimeout(500);
	await page.screenshot({
		path: `${OUT_DIR}/home-wide.png`,
		clip: { x: 0, y: 0, width: 1280, height: 720 },
		type: 'png',
	});
	await ctx.close();
	console.log('✓ home-wide.png');
}

await browser.close();
