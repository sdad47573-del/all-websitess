/**
 * Programador diario, sustituto de `cronJobs()` de Convex.
 *
 * No hay scheduler gestionado, así que el proceso se auto-programa con
 * `setTimeout` al arrancar. Si el proceso se reinicia, `startDailyCron` lo
 * vuelve a programar; para despliegues que lo maten entre ejecuciones
 * (serverless, previews) lo habitual es exponer un endpoint que llame al mismo
 * trabajo a diario desde un ping externo.
 */

export type DailyCronOptions = {
  /** Hora en UTC, 0-23. */
  hourUTC: number;
  /** Minuto en UTC, 0-59. */
  minuteUTC: number;
  /** Nombre para los logs. */
  name: string;
  run: () => Promise<unknown>;
  /** No hacer nada al arrancar. Útil en tests. */
  enabled?: boolean;
};

/** Milisegundos que faltan hasta la próxima ejecución. */
export function msUntilNext(hourUTC: number, minuteUTC: number, from = new Date()): number {
  const next = new Date(from);
  next.setUTCHours(hourUTC, minuteUTC, 0, 0);
  if (next <= from) next.setUTCDate(next.getUTCDate() + 1);
  return next.getTime() - from.getTime();
}

export function startDailyCron(options: DailyCronOptions): void {
  if (options.enabled === false) return;

  const scheduleNext = () => {
    const delay = msUntilNext(options.hourUTC, options.minuteUTC);
    console.log(
      `[cron] ${options.name}: próxima ejecución en ${Math.round(delay / 60000)} min`,
    );

    setTimeout(() => {
      void options
        .run()
        .then((result) => console.log(`[cron] ${options.name}: ${JSON.stringify(result)}`))
        .catch((error) => console.error(`[cron] ${options.name} falló`, error))
        .finally(scheduleNext);
    }, delay);
  };

  scheduleNext();
}
