import { useCallback, useEffect, useState } from "react";
import { ApiError, callMutation, callQuery, type Mutation, type Query } from "./api";

/**
 * Réplica de los hooks `useQuery` y `useMutation` de `convex/react`, pero sobre
 * HTTP con sondeo. Mantienen la misma firma y las mismas semánticas:
 *
 * - `useQuery(fn, "skip")` no pide nada y devuelve `undefined`.
 * - `useQuery(fn)` sin argumentos equivale a `{}`.
 * - `useQuery` devuelve `undefined` mientras la primera respuesta no llega, que
 *   es como las páginas detectan "cargando".
 * - `useMutation` devuelve una función que hace `await` y propaga el error.
 *
 * Lo que se pierde frente a Convex es el push: en vez de que el servidor
 * empuje el cambio, cada consulta se refresca sola cada `intervalMs`.
 */

/** Antes de repetir por segunda vez una pantalla que nadie está mirando. */
const DEFAULT_POLL_MS = 5000;

/** Para lo público que cambia poco. */
export const SLOW_POLL_MS = 30_000;

export type QueryOptions = {
  intervalMs?: number;
  enabled?: boolean;
};

export function useQuery<Args, Data>(
  endpoint: Query<Args, Data>,
  args?: Args | "skip",
  options?: QueryOptions,
): Data | undefined {
  const interval = options?.intervalMs ?? DEFAULT_POLL_MS;
  const enabled = (options?.enabled ?? true) && args !== "skip";
  // Los endpoints sin parámetros declaran `Record<string, never>`, así que un
  // objeto vacío es su argumento correcto.
  const resolvedArgs = (args === undefined ? {} : args) as Args;

  const [data, setData] = useState<Data | undefined>(undefined);

  // La URL es la identidad de la consulta: si cambia, la anterior ya no vale.
  const url = enabled ? endpoint.url(resolvedArgs) : null;

  useEffect(() => {
    if (!url || !enabled) {
      setData(undefined);
      return;
    }

    let cancelled = false;

    const fetchOnce = async () => {
      try {
        const result = await callQuery(endpoint, resolvedArgs);
        if (!cancelled) setData(result);
      } catch (error) {
        // Un 401 significa que la sesión caducó: el `AuthProvider` se encarga
        // de reenviar al login, así que aquí solo se deja el último valor bueno.
        if (!cancelled && !(error instanceof ApiError && error.status === 401)) {
          console.error("[api] falló la consulta", url, error);
        }
      }
    };

    void fetchOnce();

    const timer = setInterval(() => {
      // No se sondea una pestaña oculta.
      if (document.visibilityState === "visible") void fetchOnce();
    }, interval);

    // Al volver a la pestaña, se refresca de inmediato.
    const onVisible = () => {
      if (document.visibilityState === "visible") void fetchOnce();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
    // `args` no se mira directamente: `url` ya lo resume, y comparar el
    // objeto entero dispararía el efecto en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, enabled, interval]);

  return data;
}

export function useMutation<Args, Data>(
  endpoint: Mutation<Args, Data>,
): (args: Args) => Promise<Data> {
  // Los endpoints son constantes de módulo, así que su identidad no cambia
  // nunca y el callback es estable entre renders.
  return useCallback((args: Args) => callMutation(endpoint, args), [endpoint]);
}

/**
 * `useAction` de Convex. Aquí toda action es simplemente una llamada HTTP, así
 * que es un alias de `useMutation`; se mantiene el nombre para no tocar las
 * páginas que lo usaban.
 */
export const useAction = useMutation;

/** Sonda larga, para lo público que cambia poco. */
export const slowPoll = { intervalMs: SLOW_POLL_MS };
