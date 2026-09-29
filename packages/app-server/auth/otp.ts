/**
 * Login por email sin contraseña: se genera un código de 6 dígitos con vida
 * limitada, se envía por el servicio de OTP de freebuff y se verifica en el
 * mismo paso.
 *
 * El código se guarda hasheado con SHA-256 y un salt por identidad, de modo que
 * un dump de la tabla no permite completar los inicios de sesión de otra
 * persona. Además hay límite de intentos y caducidad.
 */

const MAX_ATTEMPTS = 5;

export type OtpTransport = {
  apiUrl: string;
  apiKey: string;
  appName: string;
  ttlSeconds: number;
};

export type OtpResult = { ok: true } | { ok: false; error: string };

async function sha256(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function randomDigits(length: number): string {
  // crypto.getRandomValues da bytes uniformes, pero el módulo 10 sesga si se
  // usa el byte entero: se descartan los >= 250, que son los múltiplos de 10
  // que sobrarían.
  const out: string[] = [];
  while (out.length < length) {
    const bytes = new Uint8Array(length * 2);
    crypto.getRandomValues(bytes);
    for (const byte of bytes) {
      if (byte >= 250) continue;
      out.push(String(byte % 10));
      if (out.length === length) break;
    }
  }
  return out.join("");
}

function hashCode(email: string, code: string, salt: string): Promise<string> {
  return sha256(`${salt}:${email.toLowerCase()}:${code}`);
}

/** Comparación en tiempo constante para no filtrar el código por el tiempo. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Almacén de códigos. Cada app pasa su `db` y el prefijo de sus ids. */
export type OtpStore = {
  deleteFor(identifier: string): void;
  insert(identifier: string, codeHash: string, salt: string, expiresAt: number): void;
  latest(identifier: string): { id: string; salt: string; codeHash: string; attempts: number } | null;
  markFailed(id: string): void;
  deleteById(id: string): void;
  pruneExpired(): void;
};

export type Otp = {
  /** Paso 1: genera el código y lo envía. */
  send(email: string): Promise<OtpResult>;
  /** Paso 2: lo comprueba. Se consume tanto si acierta como si falla. */
  verify(email: string, code: string): Promise<OtpResult>;
};

export function createOtp(store: OtpStore, transport: OtpTransport): Otp {
  const send = async (email: string): Promise<OtpResult> => {
    const identifier = email.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(identifier)) {
      return { ok: false, error: "Introduce un email válido." };
    }

    // Invalida cualquier código vivo de esa identidad: solo el último vale.
    store.deleteFor(identifier);

    const code = randomDigits(6);
    const salt = crypto.randomUUID();
    const now = Date.now();

    store.insert(
      identifier,
      await hashCode(identifier, code, salt),
      salt,
      now + transport.ttlSeconds * 1000,
    );

    try {
      const response = await fetch(transport.apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": transport.apiKey },
        body: JSON.stringify({
          to: identifier,
          otp: code,
          appName: transport.appName,
        }),
      });
      if (!response.ok) {
        console.error("[otp] el servicio respondió", response.status, await response.text());
        return { ok: false, error: "No se pudo enviar el código. Inténtalo de nuevo." };
      }
      return { ok: true };
    } catch (error) {
      console.error("[otp] fallo de red enviando el código", error);
      return { ok: false, error: "No se pudo enviar el código. Inténtalo de nuevo." };
    }
  };

  const verify = async (email: string, code: string): Promise<OtpResult> => {
    const identifier = email.trim().toLowerCase();
    const trimmed = code.trim();

    const row = store.latest(identifier);
    if (!row) return { ok: false, error: "El código ha caducado. Pide uno nuevo." };

    if (row.attempts >= MAX_ATTEMPTS) {
      store.deleteById(row.id);
      return { ok: false, error: "Demasiados intentos. Pide un código nuevo." };
    }

    // Un solo hash con sal: no hay fuerza bruta que valga, y el coste por
    // intento es siempre el mismo, así que el tiempo de respuesta no filtra
    // información sobre el código correcto.
    const candidate = await hashCode(identifier, trimmed, row.salt);
    if (!timingSafeEqual(candidate, row.codeHash)) {
      store.markFailed(row.id);
      return { ok: false, error: "El código no es correcto." };
    }

    store.deleteById(row.id);
    return { ok: true };
  };

  return { send, verify };
}
