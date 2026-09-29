import { useState } from "react";
import { motion } from "framer-motion";
import { CUT_MAP } from "@/lib/shop";

/**
 * Interactive cut map of a cow. Clicking a numbered hot spot reveals the cut
 * name and description; hovering highlights the marker.
 */
export function CutMap() {
  const [active, setActive] = useState<string | null>("chuleton");
  const activeCut = CUT_MAP.find((c) => c.id === active);

  return (
    <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
      <div className="relative mx-auto w-full max-w-sm">
        <svg viewBox="0 0 100 100" className="w-full">
          {/* stylized cow silhouette */}
          <path
            d="M34 12 c8 -4 24 -4 31 1 c6 4 9 10 9 16 l4 3 -3 5 -3 -2 c0 10 -3 12 -4 22 c-1 11 0 24 -3 30 c-2 4 -8 4 -10 0 c-2 -5 0 -9 -2 -14 c-5 2 -18 2 -24 -1 c-1 5 1 9 -1 14 c-2 5 -9 4 -10 -1 c-2 -9 1 -22 0 -33 c-1 -9 -4 -13 -3 -22 l-3 2 -3 -5 4 -3 c1 -7 6 -13 11 -14 z"
            className="fill-paper-foreground/10 stroke-paper-foreground/40"
            strokeWidth="0.8"
          />
          {/* skeleton hint line */}
          <line
            x1="51"
            y1="20"
            x2="52"
            y2="90"
            className="stroke-paper-foreground/15"
            strokeWidth="0.7"
            strokeDasharray="2 2"
          />
        </svg>

        {CUT_MAP.map((cut, i) => {
          const isActive = active === cut.id;
          return (
            <motion.button
              key={cut.id}
              type="button"
              onClick={() => setActive(cut.id)}
              onMouseEnter={() => setActive(cut.id)}
              aria-label={cut.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${cut.x}%`, top: `${cut.y}%` }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: isActive ? 1.15 : 1 }}
            >
              <span
                className={`flex size-7 items-center justify-center rounded-full border text-xs font-bold shadow-md transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-paper-foreground/40 bg-card text-foreground hover:border-primary"
                }`}
              >
                {i + 1}
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="min-h-40">
        {activeCut ? (
          <motion.div
            key={activeCut.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-display text-6xl leading-none text-primary/20">
              {String(CUT_MAP.findIndex((c) => c.id === activeCut.id) + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold">{activeCut.label}</h3>
            <p className="mt-2 text-muted-foreground">{activeCut.desc}</p>
          </motion.div>
        ) : (
          <p className="text-muted-foreground">
            Toca un punto del dibujo para ver el corte.
          </p>
        )}
      </div>
    </div>
  );
}
