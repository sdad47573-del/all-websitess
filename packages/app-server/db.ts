import { Database } from "bun:sqlite";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

/**
 * Capa de acceso a SQLite reutilizable.
 *
 * Lo específico de cada app (el esquema y los mappers de fila a objeto) se
 * queda en la app; aquí vive todo lo que es igual en todas: abrir el fichero,
 * aplicar el esquema y hacer transacciones.
 */

/** Abre el fichero, creando el directorio si hace falta. */
export function openDatabase(path: string): Database {
  if (path !== ":memory:") {
    mkdirSync(dirname(path), { recursive: true });
  }
  const db = new Database(path, { create: true });
  // WAL permite leer mientras se escribe, que es justo lo que pasa con el
  // sondeo del cliente mientras alguien está reservando.
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");
  return db;
}

/** Aplica el esquema. Es idempotente: se llama en cada arranque. */
export function migrate(db: Database, schema: string): void {
  db.exec(schema);
}

/**
 * Ejecuta `fn` dentro de una transacción, con rollback si lanza.
 *
 * Importa para casos como la reserva: si falla algo a mitad (por ejemplo, el
 * hueco se acaba de ocupar), no puede quedar el bono consumido sin cita.
 */
export function transaction<T>(db: Database, fn: () => T): T {
  db.exec("BEGIN");
  try {
    const result = fn();
    db.exec("COMMIT");
    return result;
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

/** Identificador opaco y ordenable por tiempo, para claves primarias. */
export function newId(prefix: string): string {
  const time = Date.now().toString(36).padStart(9, "0");
  const rand = crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  return `${prefix}_${time}${rand}`;
}

/* ---------- Lectura de filas ---------- */
/*
 * SQLite devuelve `null` por cada columna vacía. Estas funciones traducen eso
 * a `undefined`, que es lo que espera el cliente, donde las propiedades
 * opcionales que no vienen se omiten del JSON.
 */

export type Row = Record<string, string | number | null>;

export const str = (value: unknown): string | undefined =>
  typeof value === "string" ? value : undefined;

export const num = (value: unknown): number | undefined =>
  typeof value === "number" ? value : undefined;

export const bool = (value: unknown): boolean | undefined =>
  value === null || value === undefined ? undefined : Boolean(value);

/** Lee una columna JSON, con valor por defecto si no se puede parsear. */
export function json<T>(value: unknown, fallback: T): T {
  if (typeof value !== "string") return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}
