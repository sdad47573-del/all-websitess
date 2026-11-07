import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

/**
 * Feed RSS del blog: /rss.xml
 * Se regenera en cada build — un post nuevo aparece solo.
 */
export async function GET(context: APIContext) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: "Blog de Sur Digital",
    description:
      "SEO local, diseño web y consejos para que tu negocio de Málaga venda más online.",
    site: context.site ?? "https://www.sur-digital.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      pubDate: post.data.pubDate,
      categories: [post.data.category],
    })),
    customData: "<language>es-es</language>",
  });
}
