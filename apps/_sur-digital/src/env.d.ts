// Registro de webs que sirve tools/app-pages.ts (glob en build, vacío en dev).
declare module "virtual:sur-digital/app-pages" {
  export const APP_PAGES: Record<string, () => Promise<{ default: any }>>;
  export const APP_SUBPAGES: Record<string, () => Promise<{ default: any }>>;
}
