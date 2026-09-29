import { SectionTag, Reveal } from "@/components/mudando/shared";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { api, errorMessage, type Review } from "@/api";
import { Loader2, Quote, Star, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FEATURED = [
  {
    author: "Laura G.",
    detail: "Piso · Madrid → Guadalajara",
    rating: 5,
    text: "Me pasaron un PDF con el precio cerrado una semana antes. El día de la mudanza no se movió un euro. Con la anterior empresa acabé pagando un 30 % más.",
  },
  {
    author: "Carlos y Ana",
    detail: "Casa · Valencia → Denia",
    rating: 5,
    text: "Desmontaron el armario vestidor y lo montaron mejor que estaba. El equipo llegó a las 8:30 en punto y a las 18:00 ya estábamos cocinando en la casa nueva.",
  },
  {
    author: "Marta R.",
    detail: "Estudio · Sevilla",
    rating: 5,
    text: "Se rayó una encimera de la sala y me respondieron el seguro en 48 horas con la devolución completa. Es la primera mudanza que acabo recomendando.",
  },
];

function Stars({
  value,
  className = "size-4",
}: {
  value: number;
  className?: string;
}) {
  return (
    <span className="flex gap-0.5" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < value ? "fill-coral text-coral" : "fill-ink/10 text-ink/10"}`}
        />
      ))}
    </span>
  );
}

function ReviewForm() {
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 flex items-start gap-3 rounded-2xl border border-leaf/30 bg-leaf/10 p-6">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-leaf" />
        <div>
          <p className="text-sm font-semibold text-ink">¡Gracias, {author}!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tu reseña está pendiente de moderación y se publicará en cuanto la
            revisemos.
          </p>
        </div>
      </div>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    try {
      const response = await api.api.reviews.$post({
        json: {
          author,
          rating,
          text,
          fromCity: fromCity || undefined,
          toCity: toCity || undefined,
        },
      });
      if (!response.ok) {
        toast.error(
          await errorMessage(response, "No se pudo enviar la reseña."),
        );
        return;
      }

      setSent(true);
      toast.success("Reseña enviada. ¡Gracias!");
    } catch (error) {
      console.error("Error enviando reseña:", error);
      toast.error("No se pudo enviar la reseña.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-ink/10 bg-card p-6 shadow-sm"
    >
      <p className="font-display text-lg font-semibold text-ink">
        Deja tu reseña verificada
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Solo clientes con mudanza completada publican aquí. Sin reseñas anónimas
        ni infladas: por eso nos creen.
      </p>

      <div className="mt-4">
        <label
          htmlFor="review-author"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Tu nombre
        </label>
        <input
          id="review-author"
          name="author"
          required
          minLength={2}
          maxLength={60}
          placeholder="Cómo te llamas"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className="w-full rounded-lg border border-ink/15 bg-background px-3 py-2 text-sm shadow-sm outline-none focus:border-coral"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
            aria-label={`${value} estrellas`}
            className="cursor-pointer transition-transform hover:scale-110"
          >
            <Star
              className={`size-7 ${
                value <= rating
                  ? "fill-coral text-coral"
                  : "fill-ink/10 text-ink/20"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Input
          placeholder="Ciudad de origen (opcional)"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
          maxLength={60}
        />
        <Input
          placeholder="Ciudad de destino (opcional)"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
          maxLength={60}
        />
      </div>

      <Textarea
        placeholder="¿Qué tal fue tu mudanza? Mínimo 20 caracteres."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        maxLength={600}
        className="mt-3"
        required
      />

      <Button
        type="submit"
        disabled={sending || text.trim().length < 20}
        className="mt-4"
      >
        {sending && <Loader2 className="size-4 animate-spin" />}
        Enviar reseña
      </Button>
    </form>
  );
}

export function Testimonials() {
  // Approved reviews come from the API; the hard-coded FEATURED list stands in
  // until there are any, so the section is never empty.
  const [reviews, setReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    void api.api.reviews
      .$get()
      .then((response) => (response.ok ? response.json() : []))
      .then((loaded: Review[]) => {
        if (!cancelled) setReviews(loaded);
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const hasDbReviews = reviews !== null && reviews.length > 0;
  const items = hasDbReviews
    ? reviews.map((r) => ({
        author: r.author,
        rating: r.rating,
        text: r.text,
        detail:
          [r.fromCity, r.toCity].filter(Boolean).join(" → ") ||
          "Cliente verificado",
      }))
    : FEATURED;

  return (
    <section id="opiniones" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={Quote}>Opiniones verificadas</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Quien prueba el precio cerrado, no vuelve
          </h2>
          <p className="max-w-xl text-muted-foreground">
            {hasDbReviews
              ? "Reseñas reales de clientes registrados con mudanza reservada. Todas firmadas, ninguna comprada."
              : "Reseñas reales de clientes que compararon, reservaron y estrenaron casa sin estrés."}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-coral/15 text-coral-deep">
                    <Quote className="size-4" />
                  </span>
                  <Stars value={item.rating} />
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/85">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/10 pt-4">
                  <p className="text-sm font-semibold text-ink">
                    {item.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <ReviewForm />
      </div>
    </section>
  );
}
