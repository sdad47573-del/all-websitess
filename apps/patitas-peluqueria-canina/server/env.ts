import { readEnv } from "@app-server";

/**
 * Configuración de Patitas. Todo lo común viene de `@app-server`; aquí solo se
 * declara lo propio de esta app.
 *
 * Vive en su propio archivo para que tanto `db.ts` como `context.ts` puedan
 * leerlo sin importarse mutuamente.
 */
export const env = readEnv({
  appName: process.env.VLY_APP_NAME ?? "Patitas · Peluquería Canina",
});
