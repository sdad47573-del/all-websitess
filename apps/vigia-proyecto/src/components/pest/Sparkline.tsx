/** Minigráfico de tendencia sin dependencias externas. */
export function Sparkline({
  values,
  className = "h-8 w-20",
  stroke = "currentColor",
}: {
  values: number[];
  className?: string;
  stroke?: string;
}) {
  if (values.length < 2) {
    return (
      <div className={`flex items-center ${className} text-[10px] text-muted-foreground`}>
        sin histórico
      </div>
    );
  }

  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;
  const step = 100 / (values.length - 1);

  const points = values
    .map((value, index) => {
      const x = index * step;
      const y = 28 - ((value - min) / span) * 24;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 100 32"
      preserveAspectRatio="none"
      className={className}
      role="img"
      aria-label={`Tendencia: ${values.join(", ")}`}
    >
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
