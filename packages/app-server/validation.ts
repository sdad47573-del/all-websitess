/**
 * Validación de entrada.
 *
 * Convex lo hacía con `v.string()`, `v.id()` etc. en la declaración de cada
 * función; aquí se valida a mano en la frontera de la ruta, que es donde de
 * todos modos hay que validar.
 *
 * Cada helper devuelve un resultado discriminado en vez de lanzar, y `unwrap`
 * lo convierte en excepción: así las rutas se leen como código recto.
 */

export type Invalid = { ok: false; error: string };
export type Valid<T> = { ok: true; value: T };
export type Result<T> = Valid<T> | Invalid;

/** Error de validación: el manejador global lo traduce a un 400. */
export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

/**
 * Error de dominio con su propio código HTTP. El mensaje va en español y el
 * cliente lo muestra tal cual, así que debe poder leerse por una persona.
 */
export class HttpError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}

export function unwrap<T>(result: Result<T>): T {
  if (!result.ok) throw new ValidationError(result.error);
  return result.value;
}

/** Devuelve el primer error de una lista de resultados, o `null`. */
export function firstError(results: { ok: boolean; error?: string }[]): string | null {
  for (const result of results) {
    if (!result.ok) return result.error ?? "Datos no válidos.";
  }
  return null;
}

const ok = <T,>(value: T): Valid<T> => ({ ok: true, value });
const err = (error: string): Invalid => ({ ok: false, error });

export function requireString(
  body: Record<string, unknown>,
  field: string,
  { max = 500 }: { max?: number } = {},
): Result<string> {
  const value = body[field];
  if (typeof value !== "string") return err(`${field} es obligatorio.`);
  const trimmed = value.trim();
  if (!trimmed) return err(`${field} es obligatorio.`);
  if (trimmed.length > max) return err(`${field} es demasiado largo.`);
  return ok(trimmed);
}

export function optionalString(
  body: Record<string, unknown>,
  field: string,
  { max = 2000 }: { max?: number } = {},
): Result<string | undefined> {
  const value = body[field];
  if (value === undefined || value === null || value === "") return ok(undefined);
  if (typeof value !== "string") return err(`${field} no es válido.`);
  if (value.length > max) return err(`${field} es demasiado largo.`);
  return ok(value);
}

export function requireId(body: Record<string, unknown>, field: string): Result<string> {
  const value = body[field];
  if (typeof value !== "string" || value.length === 0) return err(`${field} es obligatorio.`);
  return ok(value);
}

const SIZES = ["S", "M", "L", "XL"] as const;
export type SizeKey = (typeof SIZES)[number];

/** Los tamaños de la peluquería. Otras apps redefinen la lista si hace falta. */
export function requireSize(
  body: Record<string, unknown>,
  field = "size",
  allowed: readonly string[] = SIZES,
): Result<string> {
  const value = body[field];
  if (typeof value !== "string" || !allowed.includes(value)) {
    return err("Valor no válido.");
  }
  return ok(value);
}

export function requireNumber(
  body: Record<string, unknown>,
  field: string,
  { min, max }: { min?: number; max?: number } = {},
): Result<number> {
  const result = optionalNumber(body, field, { min, max });
  if (!result.ok) return result;
  if (result.value === undefined) return err(`${field} es obligatorio.`);
  return ok(result.value);
}

export function optionalNumber(
  body: Record<string, unknown>,
  field: string,
  { min, max }: { min?: number; max?: number } = {},
): Result<number | undefined> {
  const value = body[field];
  if (value === undefined || value === null || value === "") return ok(undefined);
  const parsed = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(parsed)) return err(`${field} debe ser un número.`);
  if (min !== undefined && parsed < min) return err(`${field} no puede ser menor que ${min}.`);
  if (max !== undefined && parsed > max) return err(`${field} no puede ser mayor que ${max}.`);
  return ok(parsed);
}

export function optionalBoolean(
  body: Record<string, unknown>,
  field: string,
): Result<boolean | undefined> {
  const value = body[field];
  if (value === undefined || value === null) return ok(undefined);
  if (typeof value === "boolean") return ok(value);
  return err(`${field} no es válido.`);
}

export function requireStringArray(body: Record<string, unknown>, field: string): Result<string[]> {
  const value = body[field];
  if (value === undefined || value === null) return ok([]);
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    return err(`${field} no es válido.`);
  }
  return ok(value as string[]);
}

/** Fecha ISO `yyyy-mm-dd`, validada contra el calendario. */
export function requireDate(body: Record<string, unknown>, field = "date"): Result<string> {
  const value = body[field];
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return err("Fecha no válida.");
  }
  const parsed = new Date(`${value}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return err("Fecha no válida.");
  return ok(value);
}

/** Hora `HH:mm` en formato de 24 h. */
export function requireTime(body: Record<string, unknown>, field: string): Result<string> {
  const value = body[field];
  if (typeof value !== "string" || !/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) {
    return err("Hora no válida.");
  }
  return ok(value);
}

/** Valida un valor contra una lista cerrada, con mensaje a medida. */
export function requireOneOf<const T extends readonly string[]>(
  body: Record<string, unknown>,
  field: string,
  allowed: T,
  message = "Valor no válido.",
): Result<T[number]> {
  const value = body[field];
  if (typeof value !== "string" || !allowed.includes(value)) return err(message);
  return ok(value as T[number]);
}
