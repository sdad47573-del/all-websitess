import { useEffect, useState } from "react";
import QRCode from "qrcode";

/**
 * Código QR de acceso al portal del cliente. Se usa en la tarjeta del sitio y
 * en el informe impreso para que el certificado sea verificable.
 */
export function PortalQr({
  token,
  size = 120,
  className = "",
}: {
  token: string;
  size?: number;
  className?: string;
}) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = `${window.location.origin}/portal/${token}`;
    QRCode.toDataURL(url, { margin: 1, width: size * 2 })
      .then((dataUrl) => {
        if (!cancelled) setSrc(dataUrl);
      })
      .catch(() => setSrc(null));
    return () => {
      cancelled = true;
    };
  }, [token, size]);

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border border-border bg-muted/50 ${className}`}
        style={{ width: size, height: size }}
      >
        <span className="text-[10px] text-muted-foreground">QR</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="Código QR de acceso al portal del cliente"
      width={size}
      height={size}
      className={`rounded-lg border border-border bg-white p-1 ${className}`} decoding="async" loading="lazy"
    />
  );
}
