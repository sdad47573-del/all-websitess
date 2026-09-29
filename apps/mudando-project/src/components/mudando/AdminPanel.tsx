import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api, errorMessage, type Callback, type Review } from "@/api";
import {
  Check,
  Clock,
  Loader2,
  PhoneCall,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const CALLBACK_STATUS: Record<
  Callback["status"],
  { label: string; className: string }
> = {
  nuevo: {
    label: "Nuevo",
    className: "border-coral/40 bg-coral/10 text-coral-deep",
  },
  llamado: {
    label: "Llamado",
    className: "border-leaf/40 bg-leaf/10 text-leaf",
  },
  descartado: {
    label: "Descartado",
    className: "border-ink/20 bg-ink/5 text-ink/60",
  },
};

function formatFecha(ts: number) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ts));
}

function ReviewModeration() {
  const [pending, setPending] = useState<Review[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  // Moderating changes the list, so every action refetches rather than
  // guessing at the new state.
  const load = useCallback(async () => {
    const response = await api.api.reviews.pending.$get();
    if (response.ok) setPending((await response.json()) as Review[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const moderate = async (id: string, status: "aprobada" | "rechazada") => {
    const response = await api.api.reviews[":id"].$put({
      param: { id },
      json: { status },
    });
    if (!response.ok) {
      toast.error(
        await errorMessage(response, "No se pudo moderar la reseña."),
      );
      return;
    }
    await load();
  };

  if (pending === null) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" />
        Cargando reseñas…
      </div>
    );
  }

  return (
    <Card className="border-ink/10 shadow-sm">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-ink">
            Reseñas pendientes de moderar
          </h3>
          <Badge
            variant="outline"
            className="border-coral/40 bg-coral/10 text-coral-deep"
          >
            <Star className="size-3.5" />
            {pending.length}
          </Badge>
        </div>
        {pending.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            No hay reseñas esperando revisión. Buen momento para el café.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {pending.map((review) => (
              <li
                key={review.id}
                className="rounded-xl border border-ink/10 bg-background p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">
                    {review.author}
                    <span className="ml-2 font-normal text-muted-foreground">
                      {formatFecha(review.createdAt)}
                    </span>
                  </p>
                  <span className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-coral text-coral"
                      />
                    ))}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80">
                  “{review.text}”
                </p>
                <div className="mt-3 flex gap-2">
                  <Button
                    size="sm"
                    disabled={busy === review.id}
                    onClick={async () => {
                      setBusy(review.id);
                      try {
                        await moderate(review.id, "aprobada");
                        toast.success("Reseña publicada");
                      } finally {
                        setBusy(null);
                      }
                    }}
                  >
                    <Check className="size-4" />
                    Publicar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={busy === review.id}
                    onClick={async () => {
                      setBusy(review.id);
                      try {
                        await moderate(review.id, "rechazada");
                        toast.success("Reseña rechazada");
                      } finally {
                        setBusy(null);
                      }
                    }}
                  >
                    <X className="size-4" />
                    Rechazar
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function CallbackInbox() {
  const [callbacks, setCallbacks] = useState<Callback[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const load = useCallback(async () => {
    const response = await api.api.callbacks.$get();
    if (response.ok) setCallbacks((await response.json()) as Callback[]);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const setStatus = async (id: string, status: Callback["status"]) => {
    const response = await api.api.callbacks[":id"].$put({
      param: { id },
      json: { status },
    });
    if (!response.ok) {
      toast.error(
        await errorMessage(response, "No se pudo actualizar la solicitud."),
      );
      return;
    }
    await load();
  };

  if (callbacks === null) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="size-4 animate-spin" />
        Cargando llamadas…
      </div>
    );
  }

  const nuevos = callbacks.filter((c) => c.status === "nuevo").length;

  return (
    <Card className="border-ink/10 shadow-sm">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-ink">
            Solicitudes de llamada
          </h3>
          <Badge
            variant="outline"
            className="border-coral/40 bg-coral/10 text-coral-deep"
          >
            <PhoneCall className="size-3.5" />
            {nuevos} nuevas
          </Badge>
        </div>
        {callbacks.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Todavía no hay solicitudes. El formulario «Te llamamos gratis» las
            aparecerá aquí.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {callbacks.map((cb) => {
              const meta = CALLBACK_STATUS[cb.status];
              return (
                <li
                  key={cb.id}
                  className="rounded-xl border border-ink/10 bg-background p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {cb.name}{" "}
                        <a
                          href={`tel:${cb.phone}`}
                          className="ml-1 font-normal text-coral-deep hover:underline"
                        >
                          {cb.phone}
                        </a>
                      </p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="size-3" />
                        {formatFecha(cb.createdAt)}
                      </p>
                    </div>
                    <Badge variant="outline" className={meta.className}>
                      {meta.label}
                    </Badge>
                  </div>
                  {cb.comment && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cb.comment}
                    </p>
                  )}
                  {cb.status === "nuevo" && (
                    <div className="mt-3 flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={busy === cb.id}
                        onClick={async () => {
                          setBusy(cb.id);
                          try {
                            await setStatus(cb.id, "llamado");
                            toast.success("Marcado como llamado");
                          } finally {
                            setBusy(null);
                          }
                        }}
                      >
                        <PhoneCall className="size-4" />
                        Ya lo he llamado
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive hover:bg-destructive/10"
                        disabled={busy === cb.id}
                        onClick={async () => {
                          setBusy(cb.id);
                          try {
                            await setStatus(cb.id, "descartado");
                          } finally {
                            setBusy(null);
                          }
                        }}
                      >
                        <X className="size-4" />
                        Descartar
                      </Button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

export function AdminPanel() {
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
        <ShieldCheck className="size-5 text-coral-deep" />
        Administración
      </h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <CallbackInbox />
        <ReviewModeration />
      </div>
    </section>
  );
}
