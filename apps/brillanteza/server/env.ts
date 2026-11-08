import { readEnv } from "@app-server";

/**
 * Configuración de Brilliantza. Lo común viene de `@app-server`; aquí solo lo
 * propio de esta app.
 *
 * Vive aparte para que `db.ts` y `context.ts` lo lean sin importarse entre sí.
 */
export const env = readEnv({
  appName: process.env.VLY_APP_NAME ?? "Brillanteza",
  /** Clave de Stripe. Sin ella la app funciona sin pago online. */
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
});
