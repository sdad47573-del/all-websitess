import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { authApi, callMutation, callQuery, type SessionUser } from "./api";

/**
 * Sesión del cliente. Sustituye a `ConvexAuthProvider` + `useAuthActions` +
 * `useConvexAuth`.
 *
 * El estado vive en memoria y se siembra con `GET /api/auth/session`; la
 * sesión en sí está en una cookie HttpOnly que el navegador manda sola. Por
 * eso no hay tokens en `localStorage` ni acceso a ellos desde JavaScript.
 *
 * `signIn` mantiene la firma de Convex Auth, donde el mismo método hace las
 * dos cosas del login por email según lo que lleve el formulario:
 *
 * 1. El form llega con `email` y sin `code`: se pide el código.
 * 2. El form llega con `email` y `code`: se verifica y se abre sesión.
 */

export type AuthContextValue<User extends SessionUser = SessionUser> = {
  /** `undefined` mientras se consulta, `null` si no hay sesión. */
  user: User | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (provider: "email-otp" | "anonymous", formData?: FormData) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider<User extends SessionUser = SessionUser>({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  // La sesión se siembra al montar. El `setState` va dentro del `.then()` y no
  // en el cuerpo del efecto, para no provocar un render en cascada.
  useEffect(() => {
    let cancelled = false;
    callQuery(authApi.session, {})
      .then((result) => {
        if (!cancelled) setUser(result.user as User | null);
      })
      .catch(() => {
        if (!cancelled) setUser(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const signIn = useCallback(
    async (provider: "email-otp" | "anonymous", formData?: FormData) => {
      if (provider === "anonymous") {
        const result = await callMutation(authApi.anonymous, {});
        setUser(result.user as User);
        return;
      }

      if (!formData) throw new Error("Falta el formulario de acceso.");

      const email = String(formData.get("email") ?? "");
      const code = formData.get("code");

      if (!code) {
        await callMutation(authApi.sendOtp, { email });
        return;
      }

      const result = await callMutation(authApi.verifyOtp, { email, code: String(code) });
      setUser(result.user as User);
    },
    [],
  );

  const signOut = useCallback(async () => {
    try {
      await callMutation(authApi.signout, {});
    } catch (error) {
      // Si el servidor falla, la cookie puede seguir viva: se avisa en consola
      // pero se limpia el estado local para no dejar la interfaz "dentro".
      console.error("[auth] no se pudo cerrar la sesión en el servidor", error);
    }
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user: user as SessionUser | null | undefined,
      isAuthenticated: Boolean(user),
      isLoading: user === undefined,
      signIn,
      signOut,
    }),
    [user, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth() se ha usado fuera de <AuthProvider>");
  }
  return context;
}
