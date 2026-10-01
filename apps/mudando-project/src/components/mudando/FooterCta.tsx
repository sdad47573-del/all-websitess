import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api, errorMessage } from "@/api";
import {
  ArrowRight,
  Loader2,
  Phone,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    try {
      const response = await api.api.callbacks.$post({
        json: { name, phone, comment: comment || undefined },
      });
      if (!response.ok) {
        // The API reports validation problems as `{ error }`; fall back to a
        // generic message if the body is anything else.
        toast.error(
          await errorMessage(response, "No se pudo enviar la solicitud."),
        );
        return;
      }

      setSent(true);
      toast.success("¡Recibido! Te llamamos hoy mismo.");
    } catch (error) {
      console.error("Error solicitando llamada:", error);
      toast.error("No se pudo enviar la solicitud.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-leaf/30 bg-leaf/10 p-8 text-center">
        <PhoneCall className="size-8 text-leaf" />
        <p className="font-display text-lg font-semibold text-ink">
          ¡Gracias, {name}!
        </p>
        <p className="max-w-xs text-sm text-muted-foreground">
          Te llamamos hoy mismo en horario comercial (9:00–20:00). Si prefieres
          no esperar, la calculadora sigue ahí.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink/10 bg-card p-6 shadow-lg shadow-ink/10 sm:p-7"
    >
      <p className="font-display text-xl font-bold text-ink">
        ¿Prefieres que te llamemos?
      </p>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Déjanos tu teléfono y te llamamos hoy: sin compromiso, sin insistencia y
        sin recargos de última hora.
      </p>
      <div className="mt-4 space-y-3">
        <Input
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          maxLength={60}
        />
        <Input
          type="tel"
          placeholder="Tu teléfono (móvil o fijo)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Textarea
          placeholder="¿Algo que debamos saber? (opcional: plantas, ascensor, fechas…)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={2}
          maxLength={300}
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className="mt-4 w-full bg-coral text-primary-foreground hover:bg-coral-deep"
      >
        {sending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <PhoneCall className="size-4" />
        )}
        Te llamamos gratis
      </Button>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Respuesta en horario comercial. Nada de listas de llamada eternas.
      </p>
    </form>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-cream pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink shadow-2xl shadow-ink/30">
          <div
            className="absolute inset-0 bg-blueprint opacity-30"
            aria-hidden="true"
          />
          <div
            className="absolute -right-20 -top-20 size-64 rounded-full bg-coral/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-8">
            {/* Columna de propuesta */}
            <div className="flex flex-col justify-center">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-coral/20 text-coral">
                <Truck className="size-7" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
                ¿Lo dejamos de hablar y lo pasamos a tu calendario?
              </h2>
              <p className="mt-3 max-w-md text-cream/80">
                Calcula tu precio cerrado en dos minutos y reserva tu fecha.
                Confirmación por escrito el mismo día.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-coral px-7 text-base font-semibold text-primary-foreground hover:bg-coral-deep"
                >
                  <a href="#calculadora">
                    Calcular mi mudanza
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-cream/30 bg-transparent px-7 text-base font-semibold text-cream hover:bg-cream/10 hover:text-cream"
                >
                  <a href="tel:+34910000000">
                    <Phone className="size-5" />
                    910 000 000
                  </a>
                </Button>
              </div>
              <p className="mt-5 flex items-center gap-1.5 text-xs text-cream/60">
                <ShieldCheck className="size-4 text-leaf" />
                Respuesta en menos de 1 hora en horario comercial
              </p>
            </div>

            {/* Columna del formulario */}
            <div className="lg:pl-4">
              <CallbackForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#comparativa", label: "Comparativa" },
  { href: "#velocidad", label: "Velocidad" },
  { href: "#servicios", label: "Packs de servicio" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#checklist", label: "Checklist" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Mudando" className="size-9 rounded-lg" />
              <span className="font-display text-lg font-bold tracking-tight text-ink">
                Mudando
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Mudanzas con precio cerrado, equipo propio y seguro de cero daño.
              Madrid, Barcelona, Valencia y Sevilla.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/75 transition-colors hover:text-coral-deep"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-ink">Tu mudanza</p>
            <p className="text-sm text-muted-foreground">
              Consulta presupuestos guardados y el estado de tu reserva.
            </p>
            <Button asChild variant="outline" className="border-ink/20">
              <Link to="/dashboard">
                <Truck className="size-4" />
                Ir a mi panel
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mudando S.L. · Mudanzas sin sorpresas
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho con miedo al papel burbuja y cariño por las cajas bien
            cerradas.
          </p>
        </div>
      </div>
    
			<p style="font-size: 0.75rem; opacity: 0.7; margin: 0.5rem 0 0;">
				<small>Web creada por <a href="https://sur-digital.vercel.app/" rel="noopener">Sur Digital</a></small>
			</p>
</footer>
  );
}
