import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useAction, useMutation, useQuery } from "@app-client";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Banknote,
  CalendarClock,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  CreditCard,
  Crown,
  Gift,
  Loader2,
  PlusCircle,
  Repeat,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@app-client";
import { BookingForm } from "@/components/BookingForm";
import { GiftCardPurchase } from "@/components/GiftCardPurchase";
import { api } from "@/lib/api";
import type {
  ExtraKey,
  FrequencyKey,
  ServiceKey,
} from "@/lib/pricing";
import type { Doc, Id } from "@/lib/types";
import { EXTRAS, frequencyLabel, serviceLabel, slotLabel } from "@/lib/pricing";

const TIMELINE_STEPS = [
  { key: "pending", label: "Recibida", description: "Hemos registrado tu solicitud" },
  { key: "confirmed", label: "Confirmada", description: "Equipo y hora asignados" },
  { key: "in_progress", label: "En curso", description: "El equipo está trabajando" },
  { key: "completed", label: "Completada", description: "Garantía activa 48 h" },
] as const;

const STATUS_META: Record<string, { label: string; className: string }> = {
  pending: {
    label: "Pendiente de confirmar",
    className: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  confirmed: {
    label: "Confirmada",
    className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  },
  in_progress: {
    label: "En curso",
    className: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
  },
  completed: {
    label: "Completada",
    className: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
  cancelled: {
    label: "Cancelada",
    className: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
  },
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function extraLabel(key: string): string {
  return EXTRAS.find((e) => e.key === key)?.label ?? key;
}

function BookingTimeline({ status }: { status: string }) {
  if (status === "cancelled") {
    return (
      <p className="text-xs font-medium text-muted-foreground">
        Reserva cancelada — sin penalización si fue con +24 h de antelación.
      </p>
    );
  }
  const activeIndex = TIMELINE_STEPS.findIndex((s) => s.key === status);
  return (
    <ol className="flex items-start gap-0">
      {TIMELINE_STEPS.map((step, i) => {
        const done = i <= activeIndex;
        const isLast = i === TIMELINE_STEPS.length - 1;
        return (
          <li key={step.key} className="flex-1">
            <div className="flex items-center">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                  done
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                )}
              >
                {done ? "✓" : i + 1}
              </span>
              {!isLast && (
                <span
                  className={cn(
                    "h-0.5 flex-1",
                    i < activeIndex ? "bg-primary" : "bg-border",
                  )}
                />
              )}
            </div>
            <span
              className={cn(
                "mt-1 block text-[10px] font-semibold leading-tight",
                done ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function BookingCard({ booking, onRepeat }: { booking: Doc<"bookings">; onRepeat?: (b: Doc<"bookings">) => void }) {
  const rateMutation = useMutation(api.bookings.rate);
  const [userRating, setUserRating] = useState<number | null>(booking.rating ?? null);
  const meta = STATUS_META[booking.status] ?? {
    label: booking.status,
    className: "bg-muted text-muted-foreground",
  };

  const handleRate = async (value: number) => {
    if (booking.status !== "completed" || userRating !== null) return;
    setUserRating(value); // optimista
    try {
      await rateMutation({ id: booking._id, rating: value });
      toast.success("¡Gracias por tu valoración!");
    } catch (error) {
      setUserRating(booking.rating ?? null);
      toast.error(
        error instanceof Error ? error.message : "No se pudo guardar la valoración",
      );
    }
  };

  const canCancel = booking.status === "pending" || booking.status === "confirmed";

  return (
    <Card className="border-border/70 shadow-none">
      <CardContent className="flex flex-col gap-4 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Sparkles className="size-5" />
            </span>
            <div>
              <p className="font-bold leading-tight">
                {serviceLabel(booking.serviceType)}
              </p>
              <p className="text-sm text-muted-foreground">
                {formatDate(booking.preferredDate)} · {slotLabel(booking.preferredSlot)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className={meta.className}>{meta.label}</Badge>
            <span className="text-lg font-extrabold tabular-nums">
              {booking.price.toFixed(2).replace(".", ",")} €
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
          <div>
            <p className="text-xs text-muted-foreground">Frecuencia</p>
            <p className="font-medium">{frequencyLabel(booking.frequency)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Vivienda</p>
            <p className="font-medium">
              {booking.bedrooms} hab. · {booking.bathrooms} baños
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-muted-foreground">Dirección</p>
            <p className="truncate font-medium">
              {booking.address}, {booking.city}
            </p>
          </div>
        </div>

        {booking.extras.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {booking.extras.map((key) => (
              <Badge key={key} variant="outline" className="text-xs font-normal">
                {extraLabel(key)}
              </Badge>
            ))}
          </div>
        )}

        {/* Timeline de estado */}
        <BookingTimeline status={booking.status} />

        <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-3">
          <div className="flex items-center gap-1">
            {canCancel && <CancelBookingButton id={booking._id} />}
            {booking.status === "completed" && onRepeat && (
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 text-muted-foreground hover:text-primary"
                onClick={() => onRepeat(booking)}
              >
                <Repeat className="size-4" /> Repetir
              </Button>
            )}
            {booking.status !== "cancelled" &&
              booking.paymentStatus !== "paid" && (
                <PayNowButton id={booking._id} summary={`${serviceLabel(booking.serviceType)} · ${formatDate(booking.preferredDate)}`} />
              )}
          </div>
          {booking.status === "completed" && (
            <div className="flex items-center gap-1.5">
              <span className="mr-1 text-xs font-medium text-muted-foreground">
                {userRating ? "Tu nota:" : "Valora:"}
              </span>
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  disabled={userRating !== null}
                  onClick={() => handleRate(value)}
                  aria-label={`${value} estrellas`}
                  className="transition-transform hover:scale-110 disabled:cursor-default disabled:hover:scale-100"
                >
                  <Star
                    className={
                      userRating && value <= userRating
                        ? "size-5 fill-amber-400 text-amber-400"
                        : "size-5 text-muted-foreground/40"
                    }
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function PayNowButton({ id, summary }: { id: Id<"bookings">; summary: string }) {
  const [busy, setBusy] = useState(false);
  const createCheckout = useAction(api.payments.createCheckoutSession);

  const handlePay = async () => {
    setBusy(true);
    try {
      const result = await createCheckout({
        bookingId: id,
        bookingSummary: summary,
        successUrl: `${window.location.origin}/dashboard?payment=success`,
        cancelUrl: `${window.location.origin}/dashboard?payment=cancelled`,
      });
      if (result.configured && result.url) {
        window.location.href = result.url;
      } else if (result.configured === false) {
        toast.info("El pago online se activará en breve", {
          description: "Tu reserva queda registrada y te enviaremos un enlace de pago por email.",
        });
      } else {
        toast.error("No se pudo iniciar el pago. Inténtalo de nuevo.");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al iniciar el pago");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={busy}
      className="gap-1.5 text-muted-foreground hover:text-primary"
      onClick={handlePay}
    >
      {busy ? <Loader2 className="size-4 animate-spin" /> : <CreditCard className="size-4" />}
      Pagar ahora
    </Button>
  );
}

function CancelBookingButton({ id }: { id: Id<"bookings"> }) {
  const cancel = useMutation(api.bookings.cancel);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCancel = async () => {
    setBusy(true);
    try {
      await cancel({ id });
      toast.success("Reserva cancelada. Te esperamos en la próxima.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "No se pudo cancelar",
      );
    } finally {
      setBusy(false);
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="gap-1.5 text-muted-foreground hover:text-destructive"
        onClick={() => setOpen(true)}
      >
        <Trash2 className="size-4" /> Cancelar
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>¿Cancelar esta reserva?</DialogTitle>
            <DialogDescription>
              Gratis hasta 24 h antes del servicio. Con menos de 24 h se aplica
              un cargo del 50 %.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
              Volver
            </Button>
            <Button
              variant="destructive"
              size="sm"
              disabled={busy}
              onClick={handleCancel}
            >
              {busy ? <Loader2 className="size-4 animate-spin" /> : "Sí, cancelar"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function LoyaltyCard() {
  const loyalty = useQuery(api.bookings.myLoyalty, {});
  if (!loyalty) return null;
  const progress = ((loyalty.count % 6) / 6) * 100;
  return (
    <Card className="mt-6 border-primary/30 bg-gradient-to-r from-primary/10 to-cyan-500/5 shadow-none">
      <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Crown className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="font-bold">Brillanteza Club</p>
            {loyalty.rewardReady ? (
              <p className="text-sm text-muted-foreground">
                🎉 ¡Recompensa desbloqueada! Tu próxima limpieza sale al <strong className="text-primary">50 %</strong>.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                {loyalty.cleaningsToReward} limpieza(s) más y la siguiente sale al 50 %.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 sm:w-56">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-primary/15">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${loyalty.rewardReady ? 100 : progress}%` }}
            />
          </div>
          <span className="text-xs font-bold tabular-nums text-primary">
            {loyalty.rewardReady ? "★" : `${loyalty.count % 6}/6`}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function ReferralCard() {
  const data = useQuery(api.referrals.ensureMyReferral, {});
  const [copied, setCopied] = useState(false);

  if (!data) {
    return (
      <Card className="border-border/70 shadow-none">
        <CardContent className="p-5">
          <Skeleton className="h-16 w-full" />
        </CardContent>
      </Card>
    );
  }

  const shareUrl = `${window.location.origin}/?ref=${data.code}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("¡Enlace copiado!", {
        description: "Tu amigo recibe 10 € y tú ganas 15 € con su primera limpieza.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("No se pudo copiar. Cópialo manualmente: " + shareUrl);
    }
  };

  return (
    <Card className="border-primary/30 bg-primary/5 shadow-none">
      <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Gift className="size-5" />
          </span>
          <div>
            <p className="font-bold">Invita y gana 15 €</p>
            <p className="text-sm text-muted-foreground">
              Tu amigo recibe 10 € en su primera limpieza. Sin límite de invitaciones.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <code className="rounded-lg border border-primary/30 bg-background px-3 py-1.5 text-sm font-bold tracking-widest text-primary">
            {data.code}
          </code>
          <Button size="sm" className="rounded-full" onClick={copy}>
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Copiado" : "Copiar enlace"}
          </Button>
        </div>
      </CardContent>
      {data.totalInvited > 0 && (
        <CardContent className="border-t border-primary/20 px-5 py-3 text-xs text-muted-foreground">
          {data.totalInvited} invitación(ones) enviadas · {data.totalRewarded} recompensa(s) cobradas
          {data.earned > 0 && ` · ${data.earned} € ganados`}
        </CardContent>
      )}
    </Card>
  );
}

export default function Dashboard() {
  const { user, signOut, isLoading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookings = useQuery(api.bookings.listMine, {});
  const stats = useQuery(api.bookings.stats, {});
  const [showForm, setShowForm] = useState(false);
  const [repeatFrom, setRepeatFrom] = useState<Doc<"bookings"> | null>(null);

  // Retorno de Stripe Checkout
  useEffect(() => {
    const payment = searchParams.get("payment");
    if (payment === "success") {
      toast.success("¡Pago recibido! Gracias por tu confianza.");
      navigate("/dashboard", { replace: true });
    } else if (payment === "cancelled") {
      toast.info("Pago cancelado", {
        description: "Puedes pagar desde tu panel cuando quieras.",
      });
      navigate("/dashboard", { replace: true });
    }
  }, [searchParams, navigate]);

  const upcoming = (bookings ?? []).filter(
    (b) => b.status === "pending" || b.status === "confirmed",
  );
  const history = (bookings ?? []).filter(
    (b) =>
      b.status === "completed" ||
      b.status === "cancelled" ||
      b.status === "in_progress",
  );

  if (isLoading || bookings === undefined || stats === undefined) {
    return (
      <main className="min-h-screen bg-background px-4 py-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
          <Skeleton className="h-10 w-64" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
            <Skeleton className="h-28" />
          </div>
          <Skeleton className="h-40" />
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b border-border/60 bg-background">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Sparkles className="size-5" />
            </span>
            <span className="text-lg font-extrabold tracking-tight">Brillanteza</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:block">
              {user?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
            >
              Salir
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">Panel de cliente</p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
              Hola{user?.name ? `, ${user.name}` : ""} 👋
            </h1>
          </div>
          <Button
            className="rounded-full"
            onClick={() => {
              setRepeatFrom(null);
              setShowForm((v) => !v);
            }}
          >
            <PlusCircle className="mr-2 size-4" />
            {showForm ? "Cerrar formulario" : "Nueva limpieza"}
          </Button>
        </div>

        {/* Brillanteza Club (fidelidad) */}
        <LoyaltyCard />

        {/* Estadísticas */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: CalendarClock,
              label: "Próximas limpiezas",
              value: String(stats.upcoming),
              accent: "text-primary",
            },
            {
              icon: CheckCircle2,
              label: "Servicios completados",
              value: String(stats.completed),
              accent: "text-emerald-600",
            },
            {
              icon: Banknote,
              label: "Total invertido",
              value: `${stats.totalSpent.toFixed(2).replace(".", ",")} €`,
              accent: "text-sky-600",
            },
          ].map((item) => (
            <Card key={item.label} className="border-border/70 shadow-none">
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </CardTitle>
                <item.icon className={`size-4 ${item.accent}`} />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-extrabold tabular-nums">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programa de referidos + tarjetas regalo */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <ReferralCard />
          <GiftCardPurchase />
        </div>

        {/* Nueva reserva / repetir limpieza */}
        {showForm && (
          <Card className="mt-6 border-primary/30 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="size-5 text-primary" />{" "}
                {repeatFrom ? "Repetir limpieza" : "Reservar nueva limpieza"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BookingForm
                mode="book"
                initial={
                  repeatFrom
                    ? {
                        serviceType: repeatFrom.serviceType as ServiceKey,
                        frequency: repeatFrom.frequency as FrequencyKey,
                        bedrooms: repeatFrom.bedrooms,
                        bathrooms: repeatFrom.bathrooms,
                        extras: repeatFrom.extras as ExtraKey[],
                        address: repeatFrom.address,
                        city: repeatFrom.city,
                        postalCode: repeatFrom.postalCode,
                        notes: repeatFrom.notes,
                      }
                    : undefined
                }
                onSuccess={() => {
                  setShowForm(false);
                  setRepeatFrom(null);
                }}
              />
            </CardContent>
          </Card>
        )}

        {/* Reservas */}
        <Tabs defaultValue="upcoming" className="mt-8">
          <TabsList>
            <TabsTrigger value="upcoming" className="gap-1.5">
              <CalendarClock className="size-4" />
              Próximas ({upcoming.length})
            </TabsTrigger>
            <TabsTrigger value="history" className="gap-1.5">
              <Clock className="size-4" />
              Historial ({history.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-4">
            {upcoming.length === 0 ? (
              <EmptyState onCreate={() => setShowForm(true)} />
            ) : (
              <div className="flex flex-col gap-3">
                {upcoming.map((b) => (
                  <BookingCard key={b._id} booking={b} />
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="history" className="mt-4">
            {history.length === 0 ? (
              <Card className="border-border/70 shadow-none">
                <CardContent className="p-8 text-center text-sm text-muted-foreground">
                  Aún no hay historial. Cuando completes tu primera limpieza
                  aparecerá aquí.
                </CardContent>
              </Card>
            ) : (
              <div className="flex flex-col gap-3">
                {history.map((b) => (
                  <BookingCard
                    key={b._id}
                    booking={b}
                    onRepeat={(booking) => {
                      setRepeatFrom(booking);
                      setShowForm(true);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function EmptyState({ onCreate }: { onCreate: () => void }) {
  return (
    <Card className="border-dashed shadow-none">
      <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Sparkles className="size-6" />
        </span>
        <p className="font-semibold">Aún no tienes limpiezas programadas</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Reserva tu primera limpieza y gestiona todo desde aquí: fechas,
          precios cerrados y valoraciones del equipo.
        </p>
        <Button className="mt-2 rounded-full" onClick={onCreate}>
          <PlusCircle className="mr-2 size-4" /> Calcular y reservar
        </Button>
      </CardContent>
    </Card>
  );
}
