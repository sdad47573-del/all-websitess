import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { api, type JournalEntry } from "@/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Camera,
  CircleHelp,
  CalendarDays,
  Recycle,
  Check,
  ChevronDown,
  CloudSun,
  Droplets,
  FlaskConical,
  Leaf,
  LayoutGrid,
  MoreHorizontal,
  Plus,
  RefreshCw,
  ScanLine,
  ShoppingBasket,
  Settings2,
  WifiOff,
  ShieldAlert,
  Smartphone,
  Sprout,
  SunMedium,
  ThermometerSun,
  Trophy,
  Wind,
} from "lucide-react";

const week = [
  { day: "L", date: "12", active: false },
  { day: "M", date: "13", active: false },
  { day: "X", date: "14", active: true },
  { day: "J", date: "15", active: false },
  { day: "V", date: "16", active: false },
  { day: "S", date: "17", active: false },
  { day: "D", date: "18", active: false },
];

const tasks = [
  {
    title: "Regar el bancal 01",
    detail: "12 L · antes de las 10:00",
    icon: Droplets,
    color: "bg-[#e5f1fb] text-[#4c8bb4]",
    done: false,
  },
  {
    title: "Pinar los tomates",
    detail: "Bancal 01 · 6 plantas",
    icon: Leaf,
    color: "bg-[#e5f2dc] text-[#57924b]",
    done: false,
  },
  {
    title: "Cosechar albahaca",
    detail: "Cosecha lista para disfrutar",
    icon: Sprout,
    color: "bg-[#f3ead8] text-[#a57843]",
    done: true,
  },
];

export default function Dashboard() {
  const [selectedDay, setSelectedDay] = useState("14");
  const [tasksState, setTasksState] = useState(tasks);
  const [showJournal, setShowJournal] = useState(false);
  const [journalText, setJournalText] = useState("");
  const [journalSaved, setJournalSaved] = useState(false);
  const [rotationApplied, setRotationApplied] = useState(false);
  const [harvestGoal, setHarvestGoal] = useState("Cosecha de verano");
  const [frostAlerts, setFrostAlerts] = useState(true);
  const [companionSaved, setCompanionSaved] = useState(false);
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  const [experimentSaved, setExperimentSaved] = useState(false);
  const [diagnosisOpen, setDiagnosisOpen] = useState(false);
  const [compostSaved, setCompostSaved] = useState(false);
  const [shoppingList, setShoppingList] = useState(false);
  const [offlineMode, setOfflineMode] = useState(true);

  // Journal entries come from the Hono API and are refetched after each write,
  // so what is on screen always matches what is stored.
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [saving, setSaving] = useState(false);

  const loadEntries = useCallback(async () => {
    const response = await api.api.journal.$get();
    if (response.ok) setEntries(await response.json());
  }, []);

  useEffect(() => {
    void loadEntries();
  }, [loadEntries]);

  const saveJournal = async () => {
    const text = journalText.trim();
    if (!text) {
      toast.error("Escribe una nota antes de guardarla.");
      return;
    }

    setSaving(true);
    try {
      const response = await api.api.journal.$post({ json: { text } });
      if (!response.ok) {
        // The API reports validation problems as `{ error }`; fall back to a
        // generic message if the body is anything else.
        const body: unknown = await response.json().catch(() => null);
        const message =
          body && typeof body === "object" && "error" in body
            ? String((body as { error: unknown }).error)
            : "No se pudo guardar la nota.";
        throw new Error(message);
      }
      setJournalText("");
      setJournalSaved(true);
      await loadEntries();
      toast.success("Nota guardada en tu diario.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "No se pudo guardar la nota.",
      );
    } finally {
      setSaving(false);
    }
  };

  const toggleTask = (index: number) => {
    setTasksState((current) =>
      current.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[#f7f9f4] text-[#193d2d]">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Saltar al contenido
      </a>
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-[#e0e9db] bg-[#f0f5e9] px-5 py-6 lg:flex">
        <div className="flex items-center gap-2.5 px-2">
          <span
            className="flex size-9 items-center justify-center rounded-xl bg-[#1b5e3e] text-white"
            aria-hidden="true"
          >
            <Sprout size={19} />
          </span>
          <span className="text-lg font-bold tracking-[-.04em]">
            huertosolar
          </span>
        </div>
        <nav aria-label="Principal" className="mt-12 space-y-2">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#8ba18f]">
            Mi espacio
          </p>
          {[
            ["Resumen", LayoutGrid],
            ["Calendario", CalendarDays],
            ["Mi huerto", Sprout],
            ["Cuidados", Leaf],
          ].map(([label, Icon]) => {
            const Item = Icon as typeof LayoutGrid;
            return (
              <button
                key={label as string}
                aria-current={label === "Resumen" ? "page" : undefined}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${label === "Resumen" ? "bg-white text-[#1b5e3e] shadow-sm" : "text-[#6d8576] hover:bg-white/70"}`}
              >
                <Item size={17} aria-hidden="true" />
                {label as string}
              </button>
            );
          })}
        </nav>
        <div className="mt-9 space-y-2">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#8ba18f]">
            Cuenta
          </p>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#6d8576] hover:bg-white/70">
            <Settings2 size={17} aria-hidden="true" />
            Ajustes
          </button>
        </div>
        <div className="mt-auto rounded-2xl border border-[#d7e4d0] bg-white/70 p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#315a44]">
            <span
              className="flex size-7 items-center justify-center rounded-full bg-[#dceccd] text-[#568c4b]"
              aria-hidden="true"
            >
              A
            </span>
            Mi huerto
          </div>
          <p className="mt-3 text-[11px] leading-5 text-[#8b9a8f]">
            Tus notas y tareas se guardan en este dispositivo.
          </p>
        </div>
      </aside>

      <main id="contenido" className="lg:pl-64">
        <header className="flex items-center justify-between border-b border-[#e4ebe0] bg-white/70 px-5 py-5 backdrop-blur lg:px-10">
          <div className="flex items-center gap-3">
            <span
              className="flex size-9 items-center justify-center rounded-xl bg-[#1b5e3e] text-white lg:hidden"
              aria-hidden="true"
            >
              <Sprout size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold text-[#89a092]">
                Miércoles, 14 de mayo
              </p>
              <h1 className="text-lg font-bold tracking-[-.03em] text-[#234e39]">
                Buenos días, jardinero{" "}
                <span className="text-xl" aria-hidden="true">
                  🌱
                </span>
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-[#eef4e9] px-3 py-2 text-xs font-bold text-[#527b5d] sm:flex">
              <CloudSun size={16} aria-hidden="true" /> Madrid · 24°{" "}
              <ChevronDown size={14} aria-hidden="true" />
            </div>
            <Button className="hidden rounded-full bg-[#1b5e3e] px-4 text-white hover:bg-[#164d32] sm:flex">
              <Plus size={16} aria-hidden="true" /> Añadir planta
            </Button>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-10 lg:py-10">
          {journalSaved && (
            <div
              role="status"
              aria-live="polite"
              className="mb-5 flex items-center gap-3 rounded-2xl border border-[#cde4bb] bg-[#eef8e7] px-4 py-3 text-sm font-semibold text-[#4e8a43]"
            >
              <Check size={17} aria-hidden="true" /> Nota guardada en tu diario.
              Tu próxima temporada empieza con más información.
            </div>
          )}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[#7b9284]">
                    Temperatura
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#fff0cf] text-[#c58b37]">
                    <ThermometerSun size={17} />
                  </span>
                </div>
                <p className="mt-4 text-3xl font-bold tracking-[-.05em] text-[#244d37]">
                  24°
                </p>
                <p className="mt-1 text-xs text-[#7e9687]">+3° desde ayer</p>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[#7b9284]">
                    Lluvia prevista
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#e5f1fb] text-[#4c8bb4]">
                    <Droplets size={17} />
                  </span>
                </div>
                <p className="mt-4 text-3xl font-bold tracking-[-.05em] text-[#244d37]">
                  18 <span className="text-lg">%</span>
                </p>
                <p className="mt-1 text-xs text-[#7e9687]">Chance el viernes</p>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[#7b9284]">
                    Plantas activas
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#e5f2dc] text-[#57924b]">
                    <Leaf size={17} />
                  </span>
                </div>
                <p className="mt-4 text-3xl font-bold tracking-[-.05em] text-[#244d37]">
                  24
                </p>
                <p className="mt-1 text-xs text-[#57924b]">+3 este mes</p>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-[#7b9284]">
                    Tareas pendientes
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#f5eadb] text-[#a57843]">
                    <CalendarDays size={17} />
                  </span>
                </div>
                <p className="mt-4 text-3xl font-bold tracking-[-.05em] text-[#244d37]">
                  3
                </p>
                <p className="mt-1 text-xs text-[#7e9687]">Para esta semana</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_.8fr]">
            <Card className="border-[#e0e9db] bg-[#eef6e6] shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#6c9a52]">
                      Insight de la semana
                    </p>
                    <h2 className="mt-2 text-xl font-bold tracking-[-.04em] text-[#315a44]">
                      Tus tomates están listos para la próxima lluvia.
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#6a8174]">
                      El suelo está seco en 8 cm y la lluvia prevista llega el
                      viernes. Retrasa el riego 24 h y ahorrarás cerca de{" "}
                      <strong className="text-[#4e8a43]">9 litros</strong>.
                    </p>
                  </div>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#5b914a] shadow-sm">
                    <ScanLine size={20} />
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#5b7c68]">
                    Suelo · 8 cm
                  </span>
                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#5b7c68]">
                    Ahorro · 9 L
                  </span>
                  <span className="rounded-full bg-[#d8edc5] px-3 py-1.5 text-[10px] font-bold text-[#4e8a43]">
                    Confianza · 92%
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#f3ead8] text-[#a57843]">
                    <BookOpen size={19} />
                  </div>
                  <button
                    onClick={() => setShowJournal(!showJournal)}
                    className="text-xs font-bold text-[#a57843] hover:text-[#7f5a35]"
                  >
                    {showJournal ? "Cerrar" : "Abrir diario"}
                  </button>
                </div>
                <h2 className="mt-5 text-lg font-bold tracking-[-.03em] text-[#244d37]">
                  Diario de huerto
                </h2>
                <p className="mt-1 text-xs leading-5 text-[#88a092]">
                  Guarda una observación y mejora tu próxima temporada.
                </p>
                {showJournal ? (
                  <div className="mt-4">
                    <label htmlFor="journal-note" className="sr-only">
                      Nueva nota del diario
                    </label>
                    <textarea
                      id="journal-note"
                      value={journalText}
                      onChange={(event) => setJournalText(event.target.value)}
                      placeholder="¿Qué has observado hoy?"
                      className="min-h-20 w-full resize-none rounded-xl border border-[#e3eadf] bg-[#fbfcf8] p-3 text-sm text-[#315a44] outline-none placeholder:text-[#9bad9d] focus:border-[#9bc27b]"
                    />
                    <div className="mt-2 flex gap-2">
                      <Button
                        onClick={saveJournal}
                        disabled={saving}
                        className="flex-1 rounded-xl bg-[#a57843] text-xs text-white hover:bg-[#8d6436]"
                      >
                        {saving ? "Guardando…" : "Guardar nota"}
                      </Button>
                      <button
                        aria-label="Adjuntar foto a la nota"
                        className="flex size-9 items-center justify-center rounded-xl border border-[#e3eadf] text-[#7d9586]"
                      >
                        <Camera size={15} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 space-y-2 text-xs font-semibold text-[#5b7c68]">
                    {entries.length === 0 ? (
                      <p>Todavía no has escrito ninguna nota.</p>
                    ) : (
                      <ul className="space-y-2">
                        {entries.slice(0, 3).map((entry) => (
                          <li key={entry.id} className="flex items-start gap-2">
                            <span
                              className="mt-1.5 size-2 shrink-0 rounded-full bg-[#8dbb55]"
                              aria-hidden="true"
                            />
                            <span className="font-normal text-[#5b7c68]">
                              {String(entry.text)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_.8fr]">
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Tu semana de cultivo
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Un vistazo a lo que tu huerto necesita.
                    </p>
                  </div>
                  <button className="text-xs font-bold text-[#4d8a4a] hover:text-[#1b5e3e]">
                    Ver calendario →
                  </button>
                </div>
                <div className="mt-7 flex justify-between gap-2">
                  {week.map((item) => (
                    <button
                      key={item.date}
                      onClick={() => setSelectedDay(item.date)}
                      className={`flex flex-1 flex-col items-center gap-2 rounded-2xl py-3 transition ${selectedDay === item.date ? "bg-[#1b5e3e] text-white shadow-[0_8px_16px_rgba(27,94,62,.2)]" : "text-[#82988b] hover:bg-[#f2f7ed]"}`}
                    >
                      <span className="text-[10px] font-bold uppercase">
                        {item.day}
                      </span>
                      <span className="text-base font-bold">{item.date}</span>
                      {item.active && (
                        <span
                          className={`size-1.5 rounded-full ${selectedDay === item.date ? "bg-[#d8efa7]" : "bg-[#80b55a]"}`}
                        />
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-7 rounded-2xl bg-[#f4f8ef] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white text-[#5b914a] shadow-sm">
                      <SunMedium size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#315a44]">
                        Día perfecto para sembrar
                      </p>
                      <p className="mt-1 text-xs text-[#7d9586]">
                        Luz suave, sin viento y 14°C de suelo.
                      </p>
                    </div>
                    <span className="ml-auto rounded-full bg-[#dff0cf] px-2.5 py-1 text-[10px] font-bold text-[#57924b]">
                      92% ideal
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Plan de rotación
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Mantén tu suelo vivo
                    </p>
                  </div>
                  <RefreshCw className="text-[#6c9a52]" size={19} />
                </div>
                <p className="mt-5 text-sm leading-6 text-[#6a8174]">
                  El tomate agotó los nutrientes del bancal 02. Tras la cosecha,
                  prepara <strong className="text-[#315a44]">legumbres</strong>.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-[#f3ead8] px-2.5 py-1 text-[10px] font-bold text-[#a57843]">
                    Bancal 02
                  </span>
                  <span className="rounded-full bg-[#e5f2dc] px-2.5 py-1 text-[10px] font-bold text-[#57924b]">
                    Legumbres a continuación
                  </span>
                </div>
                <button
                  onClick={() => setRotationApplied(!rotationApplied)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b5e3e] py-2.5 text-xs font-bold text-white hover:bg-[#164d32]"
                >
                  {rotationApplied ? "Plan guardado ✓" : "Añadir rotación"}
                  <RefreshCw size={14} />
                </button>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Asocios
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Plantas que se ayudan
                    </p>
                  </div>
                  <Leaf className="text-[#5b914a]" size={20} />
                </div>
                <div className="mt-5 rounded-2xl bg-[#f4f8ef] p-4">
                  <p className="text-xs font-bold text-[#6c9a52]">
                    RECOMENDACIÓN PARA TU BANCAL
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-2xl">🍅</span>
                    <span className="text-xl font-bold text-[#b0b9aa">+</span>
                    <span className="text-2xl">🌿</span>
                    <div className="ml-auto">
                      <p className="text-sm font-bold text-[#315a44]">
                        Tomate + albahaca
                      </p>
                      <p className="text-[10px] text-[#7e9687]">
                        Más sabor · menos plagas
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setCompanionSaved(!companionSaved)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#cfe0c5] py-2.5 text-xs font-bold text-[#4e8a43] hover:bg-[#f4f8ef]"
                >
                  {companionSaved ? "Asocio guardado ✓" : "Guardar asociación"}
                  <Leaf size={14} />
                </button>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Alertas de helada
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Protege tus plantas
                    </p>
                  </div>
                  <ShieldAlert className="text-[#c58b37]" size={20} />
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#fff7e7] p-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-white text-[#c58b37]">
                    <ShieldAlert size={17} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#315a44]">
                      Riesgo bajo esta noche
                    </p>
                    <p className="mt-1 text-xs text-[#8a7d69]">
                      Mínima prevista: 6° · sin alerta activa
                    </p>
                  </div>
                  <button
                    onClick={() => setFrostAlerts(!frostAlerts)}
                    className={`relative h-6 w-11 rounded-full transition ${frostAlerts ? "bg-[#70a757]" : "bg-[#c9d4c6]"}`}
                    role="switch"
                    aria-checked={frostAlerts}
                    aria-label="Activar alertas de helada"
                  >
                    <span
                      className={`absolute top-1 size-4 rounded-full bg-white transition ${frostAlerts ? "right-1" : "left-1"}`}
                    />
                  </button>
                </div>
                <p className="mt-4 text-xs leading-5 text-[#7e9687]">
                  Te avisaremos si la temperatura cae por debajo de 2° para que
                  puedas cubrir tus plantas.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Alertas de riego
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Nunca te olvides de una planta
                    </p>
                  </div>
                  <Smartphone className="text-[#4c8bb4]" size={20} />
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#eef7fb] p-4">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-white text-[#4c8bb4]">
                    <Droplets size={17} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#315a44]">
                      Riego de la mañana
                    </p>
                    <p className="mt-1 text-xs text-[#7b8f88]">
                      Bancal 01 · todos los días
                    </p>
                  </div>
                  <button
                    onClick={() => setRemindersEnabled(!remindersEnabled)}
                    className={`relative h-6 w-11 rounded-full transition ${remindersEnabled ? "bg-[#70a757]" : "bg-[#c9d4c6]"}`}
                    role="switch"
                    aria-checked={remindersEnabled}
                    aria-label="Activar recordatorios de riego"
                  >
                    <span
                      className={`absolute top-1 size-4 rounded-full bg-white transition ${remindersEnabled ? "right-1" : "left-1"}`}
                    />
                  </button>
                </div>
                <p className="mt-4 text-xs leading-5 text-[#7e9687]">
                  Recibirás un recordatorio a las 08:30, justo antes de salir a
                  regar.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Tu huerto
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Casa · terraza
                    </p>
                  </div>
                  <button className="text-[#7d9586] hover:text-[#1b5e3e]">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ["Tomates", "6 plantas", "🍅", "bg-[#f9e1d8]"],
                    ["Albahaca", "12 plantas", "🌿", "bg-[#dcefcf]"],
                    ["Zanahorias", "8 plantas", "🥕", "bg-[#f6e8cf]"],
                    ["Pimientos", "4 plantas", "🌶️", "bg-[#e5ead7]"],
                  ].map(([name, count, icon, color]) => (
                    <div
                      key={name}
                      className="rounded-2xl border border-[#edf1eb] p-3"
                    >
                      <div
                        className={`flex h-20 items-center justify-center rounded-xl text-3xl ${color}`}
                      >
                        {icon}
                      </div>
                      <p className="mt-3 text-xs font-bold text-[#315a44]">
                        {name}
                      </p>
                      <p className="mt-1 text-[10px] text-[#8ba193]">{count}</p>
                    </div>
                  ))}
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#bcd6a9] py-2.5 text-xs font-bold text-[#57924b] hover:bg-[#f4f8ef]">
                  <Plus size={14} /> Añadir al huerto
                </button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_.8fr]">
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Pendientes de hoy
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Pequeñas acciones, grandes diferencias.
                    </p>
                  </div>
                  <span className="rounded-full bg-[#f3ead8] px-2.5 py-1 text-[10px] font-bold text-[#a57843]">
                    2 por hacer
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  {tasksState.map((task, index) => {
                    const Icon = task.icon;
                    return (
                      <button
                        key={task.title}
                        onClick={() => toggleTask(index)}
                        className="flex w-full items-center gap-3 rounded-2xl p-3 text-left transition hover:bg-[#f7faf4]"
                      >
                        <span
                          className={`flex size-9 items-center justify-center rounded-xl ${task.color}`}
                        >
                          <Icon size={17} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block text-sm font-bold ${task.done ? "text-[#9aab9e] line-through" : "text-[#315a44]"}`}
                          >
                            {task.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-[#8ba193]">
                            {task.detail}
                          </span>
                        </span>
                        <span
                          className={`flex size-6 items-center justify-center rounded-full border-2 ${task.done ? "border-[#70a757] bg-[#70a757] text-white" : "border-[#d7e3d2] text-transparent"}`}
                        >
                          <Check size={13} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Diagnóstico exprés
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Identifica en segundos
                    </p>
                  </div>
                  <CircleHelp className="text-[#5b914a]" size={20} />
                </div>
                {diagnosisOpen ? (
                  <div className="mt-5 rounded-2xl bg-[#eef6e6] p-4">
                    <p className="text-sm font-bold text-[#315a44]">
                      ¿Qué te ocurre?
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#7e9687]">
                      Sube una foto o elige el síntoma para recibir una guía de
                      cuidado.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button className="flex-1 rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#4e8a43]">
                        📷 Subir foto
                      </button>
                      <button className="flex-1 rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#4e8a43]">
                        🍃 Hojas
                      </button>
                    </div>
                    <button
                      onClick={() => setDiagnosisOpen(false)}
                      className="mt-3 text-xs font-bold text-[#8ba193]"
                    >
                      Cerrar
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="mt-5 text-sm leading-6 text-[#6a8174]">
                      Confirma si es una plaga, una falta de agua o una
                      necesidad de luz.
                    </p>
                    <button
                      onClick={() => setDiagnosisOpen(true)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b5e3e] py-2.5 text-xs font-bold text-white hover:bg-[#164d32]"
                    >
                      Empezar diagnóstico <CircleHelp size={14} />
                    </button>
                  </>
                )}
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Experimento de semillas
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Encuentra tu mezcla ganadora
                    </p>
                  </div>
                  <FlaskConical className="text-[#7b68a4]" size={20} />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-[#f3ead8] p-3 text-center text-2xl">
                    🌻
                  </div>
                  <div className="rounded-xl bg-[#e5f2dc] p-3 text-center text-2xl">
                    🥕
                  </div>
                  <div className="rounded-xl bg-[#f9e1d8] p-3 text-center text-2xl">
                    🍅
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6a8174]">
                  Compara cómo crecen 3 variedades en el mismo bancal y aprende
                  qué se da mejor en tu zona.
                </p>
                <button
                  onClick={() => setExperimentSaved(!experimentSaved)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#ddd3ef] py-2.5 text-xs font-bold text-[#7b68a4] hover:bg-[#f8f5ff]"
                >
                  {experimentSaved
                    ? "Experimento guardado ✓"
                    : "Crear experimento"}
                  <FlaskConical size={14} />
                </button>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Ciclo de compostaje
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Convierte restos en recursos
                    </p>
                  </div>
                  <Recycle className="text-[#5b914a]" size={20} />
                </div>
                <div className="mt-5 rounded-2xl bg-[#eef6e6] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#5b7c68]">
                    <span>Compostaje activo</span>
                    <span className="text-[#4e8a43]">68%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full w-[68%] rounded-full bg-[#8dbb55]" />
                  </div>
                  <p className="mt-3 text-xs leading-5 text-[#7e9687]">
                    Añade hojas secas y restos verdes para tener compost listo
                    en <strong className="text-[#4e8a43]">14 días</strong>.
                  </p>
                </div>
                <button
                  onClick={() => setCompostSaved(!compostSaved)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#cfe0c5] py-2.5 text-xs font-bold text-[#4e8a43] hover:bg-[#f4f8ef]"
                >
                  {compostSaved
                    ? "Ciclo actualizado ✓"
                    : "Registrar materiales"}
                  <Recycle size={14} />
                </button>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Lista de compra
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Preparada para tu próxima siembra
                    </p>
                  </div>
                  <ShoppingBasket className="text-[#c58b37]" size={20} />
                </div>
                <div className="mt-5 space-y-2">
                  {[
                    [
                      "Semillas de albahaca",
                      "Disponible",
                      "bg-[#e5f2dc] text-[#57924b]",
                    ],
                    [
                      "Compost maduro",
                      "2 bolsas",
                      "bg-[#f3ead8] text-[#a57843]",
                    ],
                    [
                      "Cañas de bambú",
                      "6 piezas",
                      "bg-[#eef7fb] text-[#4c8bb4]",
                    ],
                  ].map(([item, amount, color]) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#edf1eb] px-3 py-2.5"
                    >
                      <span className="flex size-7 items-center justify-center rounded-lg bg-[#f4f8ef] text-sm">
                        🌱
                      </span>
                      <span className="flex-1 text-xs font-bold text-[#315a44]">
                        {item}
                      </span>
                      <span
                        className={`rounded-full px-2 py-1 text-[9px] font-bold ${color}`}
                      >
                        {amount}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShoppingList(!shoppingList)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1b5e3e] py-2.5 text-xs font-bold text-white hover:bg-[#164d32]"
                >
                  {shoppingList ? "Lista guardada ✓" : "Guardar lista"}
                  <ShoppingBasket size={14} />
                </button>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Modo campo sin cobertura
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Tus datos siempre a mano
                    </p>
                  </div>
                  <WifiOff className="text-[#5b914a]" size={20} />
                </div>
                <div className="mt-5 rounded-2xl bg-[#eef6e6] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-xl bg-white text-[#5b914a]">
                      <WifiOff size={17} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#315a44]">
                        {offlineMode
                          ? "Disponible sin conexión"
                          : "Solo con conexión"}
                      </p>
                      <p className="mt-1 text-xs text-[#7e9687]">
                        Tareas · notas · fichas de plantas
                      </p>
                    </div>
                    <button
                      onClick={() => setOfflineMode(!offlineMode)}
                      className={`relative ml-auto h-6 w-11 rounded-full transition ${offlineMode ? "bg-[#70a757]" : "bg-[#c9d4c6]"}`}
                      role="switch"
                      aria-checked={offlineMode}
                      aria-label="Activar modo sin conexión"
                    >
                      <span
                        className={`absolute top-1 size-4 rounded-full bg-white transition ${offlineMode ? "right-1" : "left-1"}`}
                      />
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-[#7e9687]">
                  Perfecto para trabajar en el huerto y sincronizar después
                  cuando recuperes la señal.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold tracking-[-.03em] text-[#244d37]">
                      Objetivo de cosecha
                    </h2>
                    <p className="mt-1 text-xs text-[#88a092]">
                      Planea tu próxima cosecha
                    </p>
                  </div>
                  <Trophy className="text-[#c58b37]" size={20} />
                </div>
                <select
                  value={harvestGoal}
                  onChange={(event) => setHarvestGoal(event.target.value)}
                  className="mt-5 w-full rounded-xl border border-[#e3eadf] bg-[#fbfcf8] px-3 py-2.5 text-sm font-semibold text-[#315a44] outline-none focus:border-[#9bc27b]"
                >
                  <option>Cosecha de verano</option>
                  <option>Autoconsumo mensual</option>
                  <option>Huerto para compartir</option>
                </select>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-[#7e9687]">Progreso estimado</span>
                  <span className="font-bold text-[#4e8a43]">68%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e6efe0]">
                  <div className="h-full w-[68%] rounded-full bg-[#8dbb55]" />
                </div>
                <p className="mt-3 text-xs leading-5 text-[#7e9687]">
                  Tu objetivo:{" "}
                  <strong className="text-[#4e8a43]">{harvestGoal}</strong>
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#e0e9db] bg-[#1b5e3e] text-white shadow-none">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                    <Wind size={19} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b8d98f]">
                    Microclima
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-bold tracking-[-.04em]">
                  Tu jardín respira bien.
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  La brisa suave mantiene tus hojas sanas y reduce el riesgo de
                  hongos esta semana.
                </p>
                <div className="mt-6 flex items-end gap-1.5">
                  {[25, 42, 34, 56, 48, 72, 62, 80, 67, 55, 70, 50].map(
                    (height, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-t-md bg-[#9ccc6b]"
                        style={{
                          height: `${height / 2}px`,
                          opacity: 0.4 + height / 180,
                        }}
                      />
                    ),
                  )}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-white/45">
                  <span>6:00</span>
                  <span>Ahora · 12:00</span>
                  <span>18:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
