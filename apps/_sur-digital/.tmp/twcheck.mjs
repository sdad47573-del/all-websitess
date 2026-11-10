const check = async (slug) => {
  const t = Date.now();
  const html = await (await fetch(`http://localhost:4321/${slug}/`)).text();
  const classes = [...html.matchAll(/class="([^"]+)"/g)].flatMap((m) => m[1].split(/\s+/));
  const tw = classes.filter((c) => /^(flex|grid|hidden|text-|bg-|px-|py-|mt-|gap-|max-w-|rounded-|sm:|md:|lg:)/.test(c));
  const style = html.match(/<style>([\s\S]*?)<\/style>/g)?.join("") ?? "";
  const present = tw.filter((c) => style.includes(`.${c.replace(/([:/[\].])/g, "\$1")}`) || style.includes(c));
  console.log(slug, "| ms", Date.now() - t, "| html", html.length, "| tw classes", tw.length, "| en CSS", present.length, "| muestra", tw.slice(0, 6).join(","));
};
for (const s of process.argv.slice(2)) await check(s);
