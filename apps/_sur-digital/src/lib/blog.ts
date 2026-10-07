// Convierte una categoría en slug de URL: "SEO local" → "seo-local",
// "Guías" → "guias" (quita acentos para URLs limpias)
export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Google recorta los titles alrededor de los 60 caracteres. Si el título del
// artículo + la marca se pasan, se acorta el título por la última palabra
// completa que quepa (nunca a mitad de palabra) y se le añade "…".
export function pageTitle(title: string, suffix = "Sur Digital", max = 60): string {
  const full = `${title} | ${suffix}`;
  if (full.length <= max) return full;

  const room = max - suffix.length - 4; // " | " + "…"
  const cut = title.slice(0, room);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > room * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}… | ${suffix}`;
}
