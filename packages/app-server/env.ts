/**
 * Variables de entorno compartidas por todas las apps.
 *
 * Cada app puede pasarle sus propias variables extra con `extra`; las de aquí
 * son las que repite cualquier API con sesiones y emails.
 */

function readString(name: string, fallback?: string): string | undefined {
  const value = process.env[name];
  if (value !== undefined && value !== "") return value;
  return fallback;
}

function readNumber(name: string, fallback: number): number {
  const raw = process.env[name];
  if (raw === undefined || raw === "") return fallback;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

/**
 * Secreto de firma de los JWT. En producción tiene que venir de fuera: si se
 * queda el valor de desarrollo, cualquiera puede fabricar su propia sesión.
 */
function readAuthSecret(): string {
  const secret = readString("AUTH_SECRET");
  if (secret) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error("Falta AUTH_SECRET, que es obligatoria en producción.");
  }
  return "dev-secret-cambia-me-en-produccion";
}

export type ExtraEnv = Record<string, string | undefined>;

export type AppEnv<Extra extends ExtraEnv = Record<string, never>> = {
  port: number;
  databaseUrl: string;
  authSecret: string;
  sessionTtlSeconds: number;
  otpTtlSeconds: number;
  devOrigin: string;
  appUrl: string;
  isProd: boolean;
  resendApiKey: string | undefined;
  otpApiKey: string;
  otpApiUrl: string;
  freebuffIssuer: string;
  freebuffJwksUrl: string;
} & Extra;

const OTP_API_KEY_POR_DEFECTO = "fb_email_2crN1hqIArZP2bEfvjp5Qik4";
const FREEBUFF_POR_DEFECTO = "https://freebuff.com";

export function readEnv<Extra extends ExtraEnv = Record<string, never>>(
  extra?: Extra,
): AppEnv<Extra> {
  const freebuffIssuer = readString("VLY_AUTH_ISSUER", FREEBUFF_POR_DEFECTO)!;

  return {
    port: readNumber("PORT", 8787),
    databaseUrl: readString("DATABASE_URL", "./data/app.sqlite")!,
    authSecret: readAuthSecret(),
    sessionTtlSeconds: readNumber("SESSION_TTL_SECONDS", 60 * 60 * 24 * 30),
    otpTtlSeconds: readNumber("OTP_TTL_SECONDS", 60 * 15),
    devOrigin: readString("DEV_ORIGIN", "http://localhost:5173")!,
    appUrl: readString("APP_URL", "http://localhost:5173")!,
    isProd: process.env.NODE_ENV === "production",
    resendApiKey: readString("RESEND_API_KEY"),
    otpApiKey: readString("VLY_OTP_API_KEY", OTP_API_KEY_POR_DEFECTO)!,
    otpApiUrl: readString("VLY_OTP_URL", "https://auth.freebuff.app/send_otp")!,
    freebuffIssuer,
    freebuffJwksUrl: readString("VLY_JWKS_URL", `${freebuffIssuer}/api/web/.well-known/jwks.json`)!,

    ...(extra ?? {}),
  } as AppEnv<Extra>;
}
