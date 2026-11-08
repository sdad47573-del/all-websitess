import { useState } from "react";
import { useMutation } from "@app-client";
import { toast } from "sonner";
import { Check, HandHeart, Loader2, Send } from "lucide-react";
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

export function JobApplicationForm() {
  const create = useMutation(api.jobs.create);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [experienceYears, setExperienceYears] = useState("3");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const canSubmit =
    name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) &&
    city.trim().length >= 2 &&
    Number(experienceYears) >= 0 &&
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
        city: city.trim(),
        experienceYears: Number(experienceYears),
        message: message.trim() || undefined,
      });
      setSent(true);
      toast.success("¡Candidatura enviada!", {
        description: "Si tu perfil encaja, te llamaremos en menos de 48 h.",
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "No se pudo enviar");
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
        <p className="text-lg font-bold">Candidatura recibida</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Gracias por confiar en nosotros. Si tu perfil encaja con nuestras
          vacantes en tu ciudad, te llamaremos en menos de 48 h laborables.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="job-name">Nombre y apellidos *</Label>
          <Input
            id="job-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Lucía Fernández"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="job-email">Email *</Label>
          <Input
            id="job-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="lucia@email.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="job-phone">Teléfono (opcional)</Label>
          <Input
            id="job-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="600 123 456"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="job-city">Ciudad *</Label>
          <Input
            id="job-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Valencia"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Años de experiencia en limpieza *</Label>
        <Select value={experienceYears} onValueChange={setExperienceYears}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            {["0", "1", "2", "3", "5", "8", "10", "15"].map((y) => (
              <SelectItem key={y} value={y}>
                {y === "0" ? "Sin experiencia" : `${y}+ años`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="job-message">Cuéntanos sobre ti (opcional)</Label>
        <Textarea
          id="job-message"
          rows={3}
          placeholder="Experiencia con oficinas, mascotas en casa, disponibilidad horaria…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" size="lg" disabled={!canSubmit} className="w-full font-semibold">
        {submitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send className="mr-2 size-4" /> Enviar candidatura
          </>
        )}
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
        <HandHeart className="size-3.5" /> Alta en Seguridad Social desde el primer día · Contrato y equipo de trabajo incluidos
      </p>
    </form>
  );
}
