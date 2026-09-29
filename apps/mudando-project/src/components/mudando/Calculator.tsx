import { snapdom } from "@zumer/snapdom";
import { Reveal, SectionTag } from "@/components/mudando/shared";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { api, errorMessage, type Quote } from "@/api";
import {
  calcularPresupuesto,
  EXTRA_META,
  formatEuros,
  VIVIENDA_META,
  type Extras,
  type Vivienda,
} from "@/lib/quote";
import {
  BarChart3,
  Calculator as CalculatorIcon,
  Check,
  Download,
  Loader2,
  LogIn,
  Mail,
  Save,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const VIVIENDAS = Object.keys(VIVIENDA_META) as Vivienda[];
const EXTRA_KEYS = Object.keys(EXTRA_META) as Array<keyof Extras>;

export function Calculator() {
  const [vivienda, setVivienda] = useState<Vivienda>("piso");
  const [distanciaKm, setDistanciaKm] = useState(25);
  const [pisoOrigen, setPisoOrigen] = useState(2);
  const [pisoDestino, setPisoDestino] = useState(1);
  const [volumen, setVolumen] = useState(VIVIENDA_META.piso.volumen);
  const [finesDeSemana, setFinesDeSemana] = useState(0);
  const [extras, setExtras] = useState<Extras>({
    embalaje: false,
    muebles: false,
    electrodomesticos: false,
    guardamuebles: false,
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [emailing, setEmailing] = useState(false);
  // The quote used to go to the signed-in account's address. There are no
  // accounts now, so the visitor types where they want it sent.
  const [emailOpen, setEmailOpen] = useState(false);
  const [emailTo, setEmailTo] = useState("");

  const result = useMemo(
    () =>
      calcularPresupuesto({
        vivienda,
        distanciaKm,
        pisoOrigen,
        pisoDestino,
        volumen,
        finesDeSemana,
        extras,
      }),
    [
      vivienda,
      distanciaKm,
      pisoOrigen,
      pisoDestino,
      volumen,
      finesDeSemana,
      extras,
    ],
  );

  function pickVivienda(next: Vivienda) {
    setVivienda(next);
    setVolumen(VIVIENDA_META[next].volumen);
    setSaved(false);
  }

  function toggleExtra(key: keyof Extras) {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  }

  async function handleSave() {
    setSaving(true);
    try {
      // The price is deliberately not sent: the API recomputes it from these
      // inputs, so what is stored is what the server decided, not what the
      // browser asked for.
      const response = await api.api.quotes.$post({
        json: {
          vivienda,
          distanciaKm,
          pisoOrigen,
          pisoDestino,
          volumen,
          finesDeSemana,
          extras: EXTRA_KEYS.filter((key) => extras[key]),
        },
      });
      if (!response.ok) {
        toast.error(
          await errorMessage(
            response,
            "No se pudo guardar el presupuesto. Inténtalo de nuevo.",
          ),
        );
        return;
      }

      const quote = (await response.json()) as Quote;
      setSavedId(quote.id);
      setSaved(true);
      toast.success("Presupuesto guardado", {
        description: "Ya lo tienes en tu panel de mudanzas.",
      });
    } catch (error) {
      console.error("Error guardando presupuesto:", error);
      toast.error("No se pudo guardar el presupuesto. Inténtalo de nuevo.");
    } finally {
      setSaving(false);
    }
  }

  const [compartido, setCompartido] = useState(false);

  async function handleDownload() {
    const card = document.getElementById("mudando-quote-card");
    if (!card) return;
    setDownloading(true);
    try {
      const image = await snapdom.toPng(card, {
        backgroundColor: "#243050",
        scale: 2,
        exclude: [".capture-ignore"],
      });
      const link = document.createElement("a");
      link.download = `presupuesto-mudando-${result.total}eur.png`;
      link.href = image.src;
      link.click();
      toast.success("Presupuesto descargado");
    } catch (error) {
      console.error("Error descargando presupuesto:", error);
      toast.error("No se pudo generar la imagen del presupuesto.");
    } finally {
      setDownloading(false);
    }
  }

  async function handleEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!savedId) return;

    setEmailing(true);
    try {
      const response = await api.api.quotes[":id"].email.$post({
        param: { id: savedId },
        json: { email: emailTo },
      });
      if (!response.ok) {
        toast.error(
          await errorMessage(response, "No se pudo enviar el email."),
        );
        return;
      }

      const result = (await response.json()) as
        | { skipped: false }
        | { skipped: true; reason: string };
      if (result.skipped) {
        toast.info("Email no configurado todavía", {
          description: result.reason,
        });
      } else {
        setEmailOpen(false);
        setEmailTo("");
        toast.success("Presupuesto enviado a tu email");
      }
    } catch (error) {
      console.error("Error enviando presupuesto:", error);
      toast.error("No se pudo enviar el email.");
    } finally {
      setEmailing(false);
    }
  }

  // Precio "de mercado" estimado: el enganche típico del sector + los extras
  // que suelen aparecer después. Misma lógica que el comparador de la comparativa.
  const estimacionMercado = useMemo(() => {
    const enganche =
      { estudio: 149, piso: 189, casa: 249, oficina: 279 }[vivienda] +
      distanciaKm * 0.8 +
      volumen * 4.5;
    const pisosMax = Math.max(pisoOrigen, pisoDestino);
    const numExtras = EXTRA_KEYS.filter((key) => extras[key]).length;
    const adicionales =
      Math.max(0, pisosMax - 1) * 35 +
      numExtras * 70 +
      (numExtras > 0 ? 45 : 0);
    return Math.round((enganche + adicionales) / 5) * 5;
  }, [vivienda, distanciaKm, pisoOrigen, pisoDestino, volumen, extras]);

  const ahorro = Math.max(0, estimacionMercado - result.total);
  const ahorroPct =
    estimacionMercado > 0 ? Math.round((ahorro / estimacionMercado) * 100) : 0;

  function compartirPresupuesto() {
    const resumen = [
      "Presupuesto Mudando — precio cerrado",
      `${VIVIENDA_META[vivienda].label} · ${distanciaKm} km · plantas ${pisoOrigen}ª→${pisoDestino}ª · ${volumen} m³`,
      ...EXTRA_KEYS.filter((key) => extras[key]).map(
        (key) => `+ ${EXTRA_META[key].label}`,
      ),
      `Total: ${formatEuros(result.total)} (IVA incluido, válido 30 días)`,
    ].join("\n");
    if (typeof navigator.share === "function") {
      navigator
        .share({ title: "Presupuesto Mudando", text: resumen })
        .catch(() => {});
    } else if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(resumen)
        .then(() => {
          setCompartido(true);
          toast.success("Resumen copiado al portapapeles");
        })
        .catch(() => toast.error("No se pudo copiar el resumen."));
    } else {
      toast.error("Tu navegador no permite compartir.");
    }
  }

  return (
    <section id="calculadora" className="relative bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={CalculatorIcon}>Calculadora</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Tu precio cerrado, en dos minutos
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Mueve los controles y mira cómo se construye tu presupuesto. Es la
            misma fórmula que usa nuestro equipo: lo que ves aquí es lo que
            firmas.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Formulario */}
            <div className="space-y-7 rounded-2xl border border-ink/10 bg-card p-6 shadow-sm sm:p-8 lg:col-span-3">
              {/* Tipo de vivienda */}
              <div>
                <p className="mb-3 text-sm font-semibold text-ink">
                  ¿Qué mudamos?
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {VIVIENDAS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => pickVivienda(option)}
                      className={`cursor-pointer rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                        vivienda === option
                          ? "border-coral bg-coral/10 text-coral-deep shadow-sm"
                          : "border-ink/15 bg-background text-ink/70 hover:border-ink/30"
                      }`}
                    >
                      {VIVIENDA_META[option].label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Distancia */}
              <div>
                <div className="mb-3 flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-ink">Distancia</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-ink">
                      {distanciaKm} km
                    </span>{" "}
                    entre origen y destino
                  </p>
                </div>
                <Slider
                  value={[distanciaKm]}
                  onValueChange={(value) => {
                    setDistanciaKm(value[0] ?? 25);
                    setSaved(false);
                  }}
                  min={5}
                  max={800}
                  step={5}
                />
              </div>

              {/* Plantas */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <p className="text-sm font-semibold text-ink">
                      Planta de origen
                    </p>
                    <p className="text-sm font-semibold text-ink">
                      {pisoOrigen === 1 ? "Calle" : `${pisoOrigen}ª`}
                    </p>
                  </div>
                  <Slider
                    value={[pisoOrigen]}
                    onValueChange={(value) => {
                      setPisoOrigen(value[0] ?? 1);
                      setSaved(false);
                    }}
                    min={1}
                    max={10}
                    step={1}
                  />
                </div>
                <div>
                  <div className="mb-3 flex items-baseline justify-between">
                    <p className="text-sm font-semibold text-ink">
                      Planta de destino
                    </p>
                    <p className="text-sm font-semibold text-ink">
                      {pisoDestino === 1 ? "Calle" : `${pisoDestino}ª`}
                    </p>
                  </div>
                  <Slider
                    value={[pisoDestino]}
                    onValueChange={(value) => {
                      setPisoDestino(value[0] ?? 1);
                      setSaved(false);
                    }}
                    min={1}
                    max={10}
                    step={1}
                  />
                </div>
              </div>

              {/* Volumen */}
              <div>
                <div className="mb-3 flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-ink">
                    Volumen estimado
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-ink">{volumen} m³</span>{" "}
                    · {Math.round(volumen / 12)} furgones
                  </p>
                </div>
                <Slider
                  value={[volumen]}
                  onValueChange={(value) => {
                    setVolumen(value[0] ?? 12);
                    setSaved(false);
                  }}
                  min={5}
                  max={120}
                  step={1}
                />
              </div>

              {/* Extras */}
              <div>
                <p className="mb-3 text-sm font-semibold text-ink">
                  Extras profesionales
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {EXTRA_KEYS.map((key) => {
                    const meta = EXTRA_META[key];
                    const active = extras[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggleExtra(key)}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                          active
                            ? "border-coral bg-coral/10 shadow-sm"
                            : "border-ink/15 bg-background hover:border-ink/30"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                            active
                              ? "border-coral bg-coral text-primary-foreground"
                              : "border-ink/30 bg-transparent"
                          }`}
                        >
                          {active && <Check className="size-3.5" />}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-ink">
                            {meta.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                            {meta.hint}
                          </span>
                          <span className="mt-1 block text-xs font-semibold text-coral-deep">
                            +{formatEuros(meta.price)}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fin de semana */}
              <div className="flex items-center justify-between rounded-xl border border-ink/10 bg-sand/60 px-4 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Mudanza en fin de semana
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Recargo del 8 % · sábados y domingos por la mañana
                  </p>
                </div>
                <Switch
                  checked={finesDeSemana > 0}
                  onCheckedChange={(checked) => {
                    setFinesDeSemana(checked ? 1 : 0);
                    setSaved(false);
                  }}
                />
              </div>
            </div>

            {/* Resumen de precio */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <div
                  id="mudando-quote-card"
                  className="overflow-hidden rounded-2xl border border-ink/10 bg-ink text-cream shadow-xl shadow-ink/20"
                >
                  <div className="bg-tape px-6 py-3 text-xs font-semibold uppercase tracking-wider text-coral">
                    Presupuesto Mudando
                  </div>
                  <div className="space-y-3 px-6 py-5 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-cream/75">
                        Servicio base · {VIVIENDA_META[vivienda].label}
                      </span>
                      <span className="font-medium">
                        {formatEuros(result.base)}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-cream/75">
                        Distancia · {distanciaKm} km
                      </span>
                      <span className="font-medium">
                        {formatEuros(result.distancia)}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-cream/75">
                        Plantas · {pisoOrigen}ª → {pisoDestino}ª
                      </span>
                      <span className="font-medium">
                        {formatEuros(result.pisos)}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-cream/75">
                        Volumen · {volumen} m³
                      </span>
                      <span className="font-medium">
                        {formatEuros(result.volumen)}
                      </span>
                    </div>
                    {result.extras > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-cream/75">
                          Extras ·{" "}
                          {EXTRA_KEYS.filter((key) => extras[key])
                            .map((key) => EXTRA_META[key].label)
                            .join(", ")}
                        </span>
                        <span className="font-medium">
                          {formatEuros(result.extras)}
                        </span>
                      </div>
                    )}
                    {result.finDeSemana > 0 && (
                      <div className="flex justify-between gap-4">
                        <span className="text-cream/75">
                          Recargo fin de semana
                        </span>
                        <span className="font-medium">
                          {formatEuros(result.finDeSemana)}
                        </span>
                      </div>
                    )}
                  </div>

                  {ahorro > 0 && (
                    <div className="mx-6 mb-5 rounded-xl border border-leaf/30 bg-leaf/10 px-4 py-3">
                      <p className="flex items-center gap-2 text-sm font-semibold text-cream">
                        <BarChart3 className="size-4 text-leaf" />
                        Precio de mercado: ≈ {formatEuros(estimacionMercado)}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-cream/70">
                        Enganche típico del sector más los extras que suelen
                        aparecer después. Tu precio cerrado ahorra{" "}
                        <span className="font-bold text-leaf">
                          {formatEuros(ahorro)}
                        </span>{" "}
                        ({ahorroPct} % menos).
                      </p>
                    </div>
                  )}

                  <div className="border-t border-cream/15 px-6 py-5">
                    <p className="text-xs uppercase tracking-wider text-cream/60">
                      Total final
                    </p>
                    <p className="font-display text-4xl font-extrabold text-coral">
                      {formatEuros(result.total)}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-cream/60">
                      IVA incluido. Válido 30 días. Si no cambian las
                      condiciones, no cambia la factura.
                    </p>

                    <Button
                      type="button"
                      onClick={handleSave}
                      disabled={saving}
                      className="mt-4 w-full bg-coral text-primary-foreground hover:bg-coral-deep"
                    >
                      {saving ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : saved ? (
                        <Check className="size-4" />
                      ) : (
                        <Save className="size-4" />
                      )}
                      {saved
                        ? "Presupuesto guardado"
                        : "Guardar este presupuesto"}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={compartirPresupuesto}
                      className="mt-2 w-full border-cream/25 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
                    >
                      {compartido ? (
                        <Check className="size-4" />
                      ) : (
                        <Share2 className="size-4" />
                      )}
                      {compartido ? "Resumen compartido" : "Compartir resumen"}
                    </Button>

                    <div className="mt-2 flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleDownload}
                        disabled={downloading}
                        className="capture-ignore w-full border-cream/25 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
                      >
                        {downloading ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <Download className="size-4" />
                        )}
                        Descargar
                      </Button>
                      {savedId !== null && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setEmailOpen(true)}
                          className="capture-ignore w-full border-cream/25 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
                        >
                          <Mail className="size-4" />
                          Enviármelo
                        </Button>
                      )}
                    </div>

                    <Link
                      to="/dashboard"
                      className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-cream/70 underline-offset-2 hover:text-cream hover:underline"
                    >
                      <LogIn className="size-3.5" />
                      Gestionar tus mudanzas
                    </Link>
                  </div>
                </div>

                <p className="mt-4 flex items-start gap-2 rounded-xl border border-leaf/30 bg-leaf/10 px-4 py-3 text-xs leading-relaxed text-ink/80">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-leaf" />
                  Precio calculado con la misma tarifa que usa nuestro equipo
                  comercial. Sin letra pequeña ni recargos de última hora.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      {/* Where to send it. Collected here rather than when saving, because the
          calculator is public and asking for an email up front would put a
          form in front of everyone who only wants a price. */}
      <Dialog open={emailOpen} onOpenChange={setEmailOpen}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleEmail}>
            <DialogHeader>
              <DialogTitle>Envíame el presupuesto</DialogTitle>
              <DialogDescription>
                Te enviamos el desglose y el precio cerrado a este email.
              </DialogDescription>
            </DialogHeader>

            <div className="my-5">
              <Label htmlFor="email-to">Email</Label>
              <Input
                id="email-to"
                type="email"
                required
                autoFocus
                placeholder="tu@email.com"
                className="mt-1.5"
                value={emailTo}
                onChange={(event) => setEmailTo(event.target.value)}
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setEmailOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={emailing} className="gap-1.5">
                {emailing ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Mail className="size-4" />
                )}
                Enviar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
