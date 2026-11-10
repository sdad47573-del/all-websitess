for (const slug of process.argv.slice(2)) {
  const html = await (await fetch(`http://localhost:4321/${slug}/`)).text();
  const links = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map((m) => m[0]);
  const hrefs = links.map((l) => (l.match(/href="([^"]+)"/) || [])[1]).filter(Boolean);
  let css = "";
  for (const h of hrefs) css += await (await fetch(new URL(h, "http://localhost:4321")).toString()).text();
  console.log(slug, "| css files", hrefs.length, "| bytes", css.length, "| max-w-7xl", (css.match(/max-w-7xl/g) || []).length, "| --tw-", (css.match(/--tw-/g) || []).length);
}
