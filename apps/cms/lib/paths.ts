import { resolve } from "node:path";

/** Carpeta `apps/` del repositorio. */
export const DEFAULT_APPS_DIR = resolve(import.meta.dir, "../..");
