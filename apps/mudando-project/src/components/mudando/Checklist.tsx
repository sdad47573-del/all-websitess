import { Reveal, SectionTag } from "@/components/mudando/shared";
import { CHECKLIST_TASKS } from "@/lib/checklist";
import { Check, ListChecks, CheckCircle2, PartyPopper } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const STORAGE_KEY = "mudando-checklist";

function loadProgress(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((v): v is string => typeof v === "string")
      : [];
  } catch {
    return [];
  }
}

export function Checklist() {
  const [done, setDone] = useState<string[]>(loadProgress);

  const completed = done.length;
  const total = CHECKLIST_TASKS.length;
  const pct = Math.round((completed / total) * 100);
  const allDone = completed === total;

  function toggle(id: string) {
    setDone((prev) => {
      const next = prev.includes(id)
        ? prev.filter((v) => v !== id)
        : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // almacenamiento no disponible: el progreso vive solo en memoria
      }
      return next;
    });
  }

  return (
    <section id="checklist" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={ListChecks}>Checklist gratuito</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Tu mudanza empieza 30 días antes
          </h2>
          <p className="max-w-xl text-muted-foreground">
            La lista que ninguna empresa de mudanzas te da (porque no les
            interesa que lo tengas todo bajo control). Nosotros sí.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm">
            {/* Progreso */}
            <div className="border-b border-ink/10 px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-ink">
                  {allDone
                    ? "¡Mudanza bajo control!"
                    : `${completed} de ${total} tareas completadas`}
                </p>
                <p className="font-display text-lg font-extrabold text-coral-deep">
                  {pct}%
                </p>
              </div>
              <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full rounded-full bg-coral transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              {allDone && (
                <p className="mt-3 flex items-center gap-2 text-sm font-medium text-leaf">
                  <PartyPopper className="size-4" />
                  Todo listo. Solo queda el día D… y ese lo llevamos nosotros.
                </p>
              )}
            </div>

            {/* Tareas */}
            <ul>
              {CHECKLIST_TASKS.map(({ id, title, text }, i) => {
                const checked = done.includes(id);
                return (
                  <li
                    key={id}
                    className={`border-b border-ink/5 px-6 py-4 last:border-0 transition-colors ${
                      checked ? "bg-leaf/5" : "hover:bg-sand/50"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(id)}
                      aria-pressed={checked}
                      className="flex w-full cursor-pointer items-start gap-3.5 text-left"
                    >
                      <span
                        className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                          checked
                            ? "border-leaf bg-leaf text-white"
                            : "border-ink/25 bg-transparent"
                        }`}
                      >
                        {checked && <Check className="size-4" />}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-sm font-semibold transition-colors ${
                            checked ? "text-ink/45 line-through" : "text-ink"
                          }`}
                        >
                          {i + 1}. {title}
                        </span>
                        <span
                          className={`mt-0.5 block text-xs leading-relaxed transition-colors ${
                            checked
                              ? "text-muted-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {text}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Guardar en el panel */}
            <div className="border-t border-ink/10 px-6 py-4">
              <Link
                to="/dashboard"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-ink/20 px-4 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:border-ink/40 hover:text-ink"
              >
                <CheckCircle2 className="size-4" />
                Guarda tu progreso y reserva la fecha desde el panel
              </Link>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Tu progreso se guarda también en este navegador.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
