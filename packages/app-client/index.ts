/**
 * Base común del cliente de las apps: capa HTTP, réplicas de
 * `useQuery`/`useMutation` de Convex con sondeo, y el proveedor de sesión.
 *
 * Cada app define su propio mapa de endpoints y sus tipos de dominio, y usa
 * estas piezas sin volver a escribirlas.
 */

export {
  ApiError,
  request,
  query,
  mutation,
  callQuery,
  callMutation,
  authApi,
  type Query,
  type Mutation,
  type SessionUser,
  type Id,
} from "./api";

export { useQuery, useMutation, useAction, slowPoll, SLOW_POLL_MS, type QueryOptions } from "./use-api";
export { AuthProvider, useAuth, type AuthContextValue } from "./use-auth";
