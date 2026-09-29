/**
 * JWT firmados con HMAC-SHA256 usando Web Crypto, para no depender de una
 * librería. Solo necesitamos firmar y verificar tokens propios; la
 * verificación de los tokens de freebuff (RS256) vive en `freebuff.ts`.
 */

const encoder = new TextEncoder();

function base64UrlEncode(input: Uint8Array<ArrayBuffer> | string): string {
  const bytes = typeof input === "string" ? encoder.encode(input) : input;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(input: string): Uint8Array<ArrayBuffer> {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export type SessionClaims = {
  /** Id del usuario. */
  sub: string;
  /** Id de la fila de sesión, para poder revocarla. */
  sid: string;
  iat: number;
  exp: number;
};

export type Jwt = {
  sign: (claims: Omit<SessionClaims, "iat" | "exp">, ttlSeconds: number) => Promise<string>;
  verify: (token: string) => Promise<SessionClaims | null>;
};

export function createJwt(secret: string): Jwt {
  const key = crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );

  const sign = async (
    claims: Omit<SessionClaims, "iat" | "exp">,
    ttlSeconds: number,
  ): Promise<string> => {
    const now = Math.floor(Date.now() / 1000);
    const payload: SessionClaims = { ...claims, iat: now, exp: now + ttlSeconds };
    const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const body = base64UrlEncode(JSON.stringify(payload));
    const data = `${header}.${body}`;
    const signature = await crypto.subtle.sign("HMAC", await key, encoder.encode(data));
    return `${data}.${base64UrlEncode(new Uint8Array(signature))}`;
  };

  /** Devuelve los claims si el token es válido y no ha caducado; si no, `null`. */
  const verify = async (token: string): Promise<SessionClaims | null> => {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [header, body, signature] = parts;

    let valid: boolean;
    try {
      valid = await crypto.subtle.verify(
        "HMAC",
        await key,
        base64UrlDecode(signature),
        encoder.encode(`${header}.${body}`),
      );
    } catch {
      return null;
    }
    if (!valid) return null;

    let claims: SessionClaims;
    try {
      claims = JSON.parse(new TextDecoder().decode(base64UrlDecode(body)));
    } catch {
      return null;
    }

    if (typeof claims.sub !== "string" || typeof claims.sid !== "string") return null;
    if (typeof claims.exp !== "number" || claims.exp * 1000 <= Date.now()) return null;
    return claims;
  };

  return { sign, verify };
}
