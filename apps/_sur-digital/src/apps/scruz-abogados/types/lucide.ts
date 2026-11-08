/**
 * Tipo compartido para iconos de `@lucide/astro`.
 * Cada icono es un componente Astro que acepta props como `class`, `stroke-width`, etc.
 * Centraliza el tipo para no duplicarlo en cada editorial/*.astro.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LucideIcon = (props: Record<string, any>) => any;
