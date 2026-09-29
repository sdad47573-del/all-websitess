/**
 * Cliente HTTP de la API.
 *
 * Sustituye al `ConvexReactClient` y a `useQuery`/`useMutation` de
 * `convex/react`, conservando la forma de llamada para que las páginas
 * cambien lo mínimo. En desarrollo las peticiones van a `/api` y Vite hace de
 * proxy al servidor, así que no hay CORS ni doble dominio.
 */

const API_BASE = import.meta.env.VITE_API_URL ?? "/api";

/** Error de la API con el mensaje en español que devuelve el servidor. */
export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    // La sesión vive en una cookie HttpOnly: hay que mandarla siempre.
    credentials: "include",
    headers: {
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...init?.headers,
    },
  });

  if (response.status === 204) return undefined as T;

  const text = await response.text();
  const body = text ? (JSON.parse(text) as unknown) : null;

  if (!response.ok) {
    const message =
      body && typeof body === "object" && "error" in body
        ? String((body as { error: unknown }).error)
        : "No se pudo completar la operación.";
    throw new ApiError(message, response.status);
  }

  return body as T;
}

/* ---------- Descriptores de endpoint ---------- */
/*
 * Cada endpoint lleva tipos fantasma (`_args`, `_data`) para que
 * `useQuery(api.pets.listMyPets, {})` deduzca los tipos solo, igual que
 * `Infer<typeof api.pets.listMyPets>` lo hacía con Convex.
 */

export type Query<Args, Data> = {
  readonly kind: "query";
  url: (args: Args) => string;
  _args?: Args;
  _data?: Data;
};

export type Mutation<Args, Data> = {
  readonly kind: "mutation";
  method: "POST" | "PATCH" | "DELETE";
  url: (args: Args) => string;
  /** `undefined` significa que no hay cuerpo (p. ej. un DELETE). */
  body?: (args: Args) => unknown;
  _args?: Args;
  _data?: Data;
};

export const query = <Args, Data>(url: (args: Args) => string): Query<Args, Data> => ({
  kind: "query",
  url,
});

export const mutation = <Args, Data>(
  method: "POST" | "PATCH" | "DELETE",
  url: (args: Args) => string,
  body?: (args: Args) => unknown,
): Mutation<Args, Data> => ({ kind: "mutation", method, url, body });

export function callQuery<Args, Data>(endpoint: Query<Args, Data>, args: Args): Promise<Data> {
  return request<Data>(endpoint.url(args));
}

export async function callMutation<Args, Data>(
  endpoint: Mutation<Args, Data>,
  args: Args,
): Promise<Data> {
  const body = endpoint.body?.(args);
  return request<Data>(endpoint.url(args), {
    method: endpoint.method,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
}

/* ---------- Rutas de acceso ---------- */
/*
 * Son las mismas en todas las apps, así que van aquí. Cada app las reexporta
 * dentro de su propio mapa `api` para que el código de las páginas no cambie.
 */

export type SessionUser = {
  _id: string;
  _creationTime: number;
  name?: string;
  image?: string;
  email?: string;
  isAnonymous?: boolean;
  role?: string;
};

export const authApi = {
  /** Estado de la sesión; devuelve `{ user: null }` si no hay ninguna. */
  session: query<Record<string, never>, { user: SessionUser | null }>(() => "/auth/session"),
  sendOtp: mutation<{ email: string }, { ok: true }>("POST", () => "/auth/otp/send", (args) => args),
  verifyOtp: mutation<{ email: string; code: string }, { user: SessionUser }>(
    "POST",
    () => "/auth/otp/verify",
    (args) => args,
  ),
  anonymous: mutation<Record<string, never>, { user: SessionUser }>(
    "POST",
    () => "/auth/anonymous",
    () => ({}),
  ),
  /** Canjea un token de freebuff.com por una sesión propia. */
  freebuff: mutation<{ token: string }, { user: SessionUser }>(
    "POST",
    () => "/auth/freebuff",
    (args) => args,
  ),
  signout: mutation<Record<string, never>, { ok: true }>(
    "POST",
    () => "/auth/signout",
    () => ({}),
  ),
} as const;

/** `Id` opaco de una tabla. El parámetro documenta de qué tabla viene. */
export type Id<Table extends string> = string & { readonly __table?: Table };
