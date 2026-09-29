/**
 * Variables que Hono lleva en `c.get()`.
 *
 * Se parametrizan con la forma del usuario de cada app, para que `c.get("user")`
 * quede bien tipado sin repetir el tipo en cada sub-app.
 */
export type BaseEnv<User> = {
  Variables: {
    /** Usuario de la sesión, o `null` si no hay. Nunca `undefined`. */
    user: User | null;
  };
};
