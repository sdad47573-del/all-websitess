import { useState } from "react";
import { useMutation } from "@app-client";
import { toast } from "sonner";
import { Check, Loader2, Send } from "lucide-react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const REQUEST_TYPES = [
  { value: "office", label: "Oficina / despachos" },
  { value: "community", label: "Comunidad de vecinos" },
  { value: "store", label: "Comercio / local" },
  { value: "hotel", label: "Hotel / apartamentos" },
  { value: "other", label: "Otro (cuéntanos)" },
] as const;

export function CustomQuoteForm() {
  const create = useMutation(api.customQuotes.create);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [requestType, setRequestType] = useState<string>("office");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const canSubmit =
    name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    city.trim().length >= 2 &&
    details.trim().length >= 10 &&
    !submitting;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      await create({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        company: company.trim() || undefined,
        requestType,
        city: city.trim(),
        details: details.trim(),
      });
      setSent(true);
      toast.success("¡Solicitud enviada!", {
        description: "Te responderemos con tu presupuesto en menos de 24 h laborables.",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "No se pudo enviar la solicitud",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950/40">
        <span className="flex size-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
          <Check className="size-6 text-emerald-600 dark:text-emerald-300" />
        </span>
        <p className="text-lg font-bold">Solicitud recibida</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Un responsable comercial te contactará en menos de 24 h laborables con
          tu presupuesto a medida.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-name">Nombre y apellidos *</Label>
          <Input
            id="quote-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ana García"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-email">Email *</Label>
          <Input
            id="quote-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ana@empresa.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-phone">Teléfono (opcional)</Label>
          <Input
            id="quote-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="600 123 456"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-company">Empresa (opcional)</Label>
          <Input
            id="quote-company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Ej. Comunidad C/ Mayor 12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label>¿Qué necesitas? *</Label>
          <Select value={requestType} onValueChange={setRequestType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              {REQUEST_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="quote-city">Ciudad *</Label>
          <Input
            id="quote-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Madrid"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="quote-details">Cuéntanos los detalles *</Label>
        <Textarea
          id="quote-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Ej. Escalera y portal de 24 viviendas, 3 días en semana, include cristales de entrada…"
          rows={4}
          required
        />
        <p className={cn("text-xs", details.trim().length < 10 ? "text-muted-foreground" : "text-emerald-600 dark:text-emerald-400")}>
          {details.trim().length < 10
            ? "Mínimo 10 caracteres"
            : "Perfecto, ya puedes enviarla"}
        </p>
      </div>

      <Button type="submit" size="lg" disabled={!canSubmit} className="mt-1 w-full font-semibold">
        {submitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send className="mr-2 size-4" /> Solicitar presupuesto a medida
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Respuesta en &lt;24 h laborables · Sin compromiso
      </p>
    </form>
  );
}
