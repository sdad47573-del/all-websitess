import { cn } from "@/lib/utils";

export function BrandMark({ className, showText = true }: { className?: string; showText?: boolean }) {
  return (
    <span className={cn("flex items-center gap-2.5 select-none", className)}>
      <span className="relative flex size-9 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/25 to-transparent" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative size-5 text-primary"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 16.5 5.2 11a2 2 0 0 1 1.95-1.5h9.7A2 2 0 0 1 18.8 11l1.2 5.5" />
          <path d="M3.5 16.5h17v2.2a1 1 0 0 1-1 1h-1.1a1 1 0 0 1-1-1v-.4h-9.8v.4a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1v-2.2Z" />
          <path d="M6.8 9.5 8.4 5.9A1.5 1.5 0 0 1 9.8 5h4.4a1.5 1.5 0 0 1 1.4.9l1.6 3.6" />
          <path d="m13.8 2.6 1.1 1.2M16.6 3.4l-.3 1.6M11.2 2.2v1.7" opacity="0.55" />
        </svg>
      </span>
      {showText && (
        <span className="font-display text-lg font-bold tracking-tight">
          AutoSpa <span className="text-primary">Astro</span>
        </span>
      )}
    </span>
  );
}
