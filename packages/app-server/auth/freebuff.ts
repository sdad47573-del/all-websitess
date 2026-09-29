/**
 * Verificación de los tokens federados de freebuff.com (RS256 vía JWKS).
 *
 * Si el usuario ya ha iniciado sesión en freebuff.com, puede entrar en la app
 * sin pasar por el código OTP.
 *
 * El JWKS se cachea en memoria y se refresca cuando aparece una `kid` que no
 * está en la caché, que es el truco estándar para sobrevivir a una rotación de
 * claves sin invalidar todas las sesiones.
 */

export type FreebuffClaims = {
  /** Identificador estable del usuario en freebuff. */
  sub: string;
  email?: string;
  name?: string;
  image?: string;
  [key: string]: unknown;
};

export type FreebuffVerifier = {
  verify: (token: string) => Promise<FreebuffClaims | null>;
};

type Jwk = { kty: string; kid?: string; n?: string; e?: string; alg?: string; use?: string };

const JWKS_TTL_MS = 10 * 60 * 1000;

export function createFreebuffVerifier(config: {
  issuer: string;
  jwksUrl: string;
}): FreebuffVerifier {
  let cached: { keys: Jwk[]; fetchedAt: number } | null = null;

  const fetchJwks = async (force = false): Promise<Jwk[]> => {
    if (!force && cached && Date.now() - cached.fetchedAt < JWKS_TTL_MS) {
      return cached.keys;
    }
    const response = await fetch(config.jwksUrl, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`El JWKS respondió ${response.status}`);

    const body = (await response.json()) as { keys?: Jwk[] };
    if (!Array.isArray(body.keys) || body.keys.length === 0) {
      throw new Error("El JWKS no contiene ninguna clave");
    }
    cached = { keys: body.keys, fetchedAt: Date.now() };
    return body.keys;
  };

  const base64UrlToBytes = (value: string): Uint8Array<ArrayBuffer> => {
    const padded = value.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
  };

  const decodeSegment = (segment: string): Record<string, unknown> =>
    JSON.parse(new TextDecoder().decode(base64UrlToBytes(segment)));

  const importKey = async (jwk: Jwk): Promise<CryptoKey> => {
    if (jwk.kty !== "RSA" || !jwk.n || !jwk.e) {
      throw new Error(`Clave no soportada: ${jwk.kty}`);
    }
    return crypto.subtle.importKey(
      "jwk",
      { kty: "RSA", n: jwk.n, e: jwk.e, alg: "RS256" },
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"],
    );
  };

  const verifyWithKeys = async (
    token: string,
    keys: Jwk[],
    expectedAlg: string,
  ): Promise<Record<string, unknown> | null> => {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [headerB64, payloadB64, signatureB64] = parts;

    let header: Record<string, unknown>;
    try {
      header = decodeSegment(headerB64);
    } catch {
      return null;
    }

    // Se rechaza tanto un algoritmo distinto como un token sin `kid`, que es
    // justo el caso que el provider customJwt de Convex no sabía manejar.
    if (header.alg !== expectedAlg) return null;
    if (typeof header.kid !== "string" || header.kid.length === 0) return null;

    const jwk = keys.find((key) => key.kid === header.kid);
    if (!jwk) return null;

    try {
      const key = await importKey(jwk);
      const valid = await crypto.subtle.verify(
        "RSASSA-PKCS1-v1_5",
        key,
        base64UrlToBytes(signatureB64),
        new TextEncoder().encode(`${headerB64}.${payloadB64}`),
      );
      if (!valid) return null;
    } catch {
      return null;
    }

    try {
      return decodeSegment(payloadB64);
    } catch {
      return null;
    }
  };

  const verify = async (token: string): Promise<FreebuffClaims | null> => {
    let payload: Record<string, unknown> | null;
    try {
      payload = await verifyWithKeys(token, await fetchJwks(), "RS256");
      if (!payload) {
        // Puede ser una rotación de claves: se reintenta con el JWKS fresco.
        payload = await verifyWithKeys(token, await fetchJwks(true), "RS256");
      }
    } catch (error) {
      console.error("[freebuff] no se pudo comprobar el token", error);
      return null;
    }
    if (!payload) return null;

    if (typeof payload.sub !== "string" || payload.sub.length === 0) return null;

    const exp = payload.exp;
    if (typeof exp === "number" && exp * 1000 <= Date.now()) return null;

    // El issuer debe ser el esperado: sin esta comprobación, un token de otra
    // fuente que comparta la misma clave sería aceptado.
    if (payload.iss !== undefined && payload.iss !== config.issuer) return null;

    return payload as FreebuffClaims;
  };

  return { verify };
}
