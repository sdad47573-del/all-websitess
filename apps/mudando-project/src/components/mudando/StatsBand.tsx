import { Boxes, MapPin, ShieldCheck, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    icon: Boxes,
    value: 2400,
    decimals: 0,
    suffix: "+",
    label: "mudanzas completadas al año",
  },
  {
    icon: ShieldCheck,
    value: 98,
    decimals: 0,
    suffix: "%",
    label: "entregas sin incidencias",
  },
  {
    icon: Star,
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    label: "en más de 1.100 reseñas verificadas",
  },
  {
    icon: MapPin,
    value: 52,
    decimals: 0,
    suffix: "",
    label: "provincias: península y Baleares",
  },
];

function Counter({
  value,
  decimals = 0,
  suffix,
}: {
  value: number;
  decimals?: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(
        (value * eased).toLocaleString("es-ES", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }),
      );
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <section className="relative bg-ink py-16 text-cream">
      <div
        className="absolute inset-0 bg-blueprint opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, decimals, suffix, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-coral/20 text-coral">
              <Icon className="size-5" />
            </span>
            <p className="font-display text-3xl font-extrabold text-coral sm:text-4xl">
              <Counter value={value} decimals={decimals} suffix={suffix} />
            </p>
            <p className="text-sm text-cream/70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
