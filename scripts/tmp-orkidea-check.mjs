import { chromium } from 'playwright';

const base = process.env.BASE || 'http://localhost:4341';
const browser = await chromium.launch({ channel: 'chrome' });

for (const [w, h, label] of [
	[1280, 900, 'desktop'],
	[390, 844, 'mobile'],
]) {
	const ctx = await browser.newContext({ viewport: { width: w, height: h } });
	const page = await ctx.newPage();
	const errors = [];
	page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
	page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));

	await page.goto(base + '/', { waitUntil: 'networkidle' });
	await page.waitForTimeout(700);

	const data = await page.evaluate(() => {
		const de = document.documentElement;
		const out = {
			scrollW: de.scrollWidth,
			clientW: de.clientWidth,
			overflowing: [...document.querySelectorAll('body *')]
				.filter((el) => {
					const r = el.getBoundingClientRect();
					return r.width > 0 && r.right > de.clientWidth + 2;
				})
				.slice(0, 6)
				.map((el) => el.tagName + '.' + (el.className || '') + ' right=' + Math.round(el.getBoundingClientRect().right)),
			imgs: [...document.images].map((i) => ({ src: i.currentSrc.split('/').pop(), w: i.naturalWidth })),
			brokenImgs: [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).length,
			emptyAlt: [...document.images].filter((i) => !i.alt || !i.alt.trim()).length,
			credit: !!document.querySelector('a[href*="sur-digital.vercel.app"]'),
			anchors: [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href')),
			missingAnchors: [...document.querySelectorAll('a[href^="#"]')]
				.map((a) => a.getAttribute('href'))
				.filter((hr) => hr.length > 1 && !document.querySelector(hr)),
			h1: [...document.querySelectorAll('h1')].map((e) => e.textContent.trim()),
			visibleHeadings: [...document.querySelectorAll('h2')].map((e) => e.textContent.trim()),
			mapsEmbed: !!document.querySelector('iframe'),
			jsonLd: document.querySelectorAll('script[type="application/ld+json"]').length,
			callBar: (() => {
				const els = [...document.querySelectorAll('a,button')].filter((e) => /c[oó]mo llegar|llamar/i.test(e.textContent || ''));
				return els.map((e) => {
					const r = e.getBoundingClientRect();
					const cs = getComputedStyle(e);
					return { text: e.textContent.trim().slice(0, 30), w: Math.round(r.width), h: Math.round(r.height), display: cs.display, opacity: cs.opacity };
				});
			})(),
			nav: [...document.querySelectorAll('nav a, header a')].map((e) => {
				const r = e.getBoundingClientRect();
				return { t: e.textContent.trim().slice(0, 20), w: Math.round(r.width), h: Math.round(r.height) };
			}),
			footer: (() => {
				const f = document.querySelector('footer');
				if (!f) return null;
				const r = f.getBoundingClientRect();
				return { h: Math.round(r.height), text: f.innerText.replace(/\s+/g, ' ').slice(0, 160) };
			})(),
		};
		return out;
	});

	console.log('===', label, w + 'x' + h, '===');
	console.log(JSON.stringify(data, null, 1));
	console.log('console errors:', errors.length ? errors : 'none');

	// modal menu / nav toggle on mobile
	if (w < 600) {
		const toggle = await page.$('[data-menu-toggle], .nav-toggle, button[aria-expanded]');
		if (toggle) {
			await toggle.click();
			await page.waitForTimeout(400);
			const after = await page.evaluate(() => ({
				expanded: document.querySelector('[aria-expanded]')?.getAttribute('aria-expanded'),
				overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
			}));
			console.log('toggle:', after);
			await toggle.click();
		}
	}

	await page.goto(base + '/aviso-legal/', { waitUntil: 'networkidle' });
	const legal = await page.evaluate(() => ({
		h1: document.querySelector('h1')?.textContent.trim(),
		overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
		credit: !!document.querySelector('a[href*="sur-digital.vercel.app"]'),
		back: !!document.querySelector('a[href="/"]'),
	}));
	console.log('legal:', legal);
	await ctx.close();
}

await browser.close();
