import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { formatTimestamp } from "@/lib/support";
import { Loader2, Star } from "lucide-react";
import { useState } from "react";

const RATINGS = [
  { value: 1, label: "Poor" },
  { value: 2, label: "Fair" },
  { value: 3, label: "Okay" },
  { value: 4, label: "Good" },
  { value: 5, label: "Great" },
];

function StarRow({
  value,
  onChange,
  size = "size-6",
}: {
  value: number;
  onChange?: (value: number) => void;
  size?: string;
}) {
  return (
    <div className="flex items-center gap-1">
      {RATINGS.map((rating) => {
        const active = rating.value <= value;
        const StarIcon = (
          <Star
            className={cn(
              size,
              active ? "fill-amber-400 text-amber-500" : "text-muted-foreground/40",
            )}
          />
        );
        if (!onChange) {
          return (
            <span key={rating.value} className="p-0.5">
              {StarIcon}
            </span>
          );
        }
        return (
          <button
            key={rating.value}
            type="button"
            onClick={() => onChange(rating.value)}
            aria-label={rating.label}
            className="rounded p-0.5 transition-transform hover:scale-110"
          >
            {StarIcon}
          </button>
        );
      })}
    </div>
  );
}

/** Read-only CSAT summary, used by agents and in the customer portal. */
export function CsatSummary({
  rating,
  comment,
  createdAt,
  className,
}: {
  rating: number;
  comment?: string | null;
  createdAt?: number;
  className?: string;
}) {
  const label = RATINGS.find((r) => r.value === rating)?.label ?? "";
  return (
    <div className={cn("rounded-xl border border-border bg-card p-4", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <StarRow value={rating} />
        <span className="text-sm font-medium">{label}</span>
        {createdAt && (
          <span className="ml-auto text-xs text-muted-foreground">
            rated {formatTimestamp(createdAt)}
          </span>
        )}
      </div>
      {comment && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          “{comment}”
        </p>
      )}
    </div>
  );
}

/** Customer-side rating form, shown once a ticket is resolved. */
export function CsatPicker({
  onSubmit,
  className,
}: {
  onSubmit: (rating: number, comment?: string) => Promise<void> | void;
  className?: string;
}) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [saving, setSaving] = useState(false);

  return (
    <div className={cn("rounded-xl border border-border bg-card p-4", className)}>
      <p className="text-sm font-medium">How did we do?</p>
      <p className="mt-0.5 text-xs text-muted-foreground">
        One tap, and your answer goes straight to the support team.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <StarRow value={rating} onChange={setRating} />
        <span className="text-sm text-muted-foreground">
          {RATINGS.find((r) => r.value === rating)?.label ?? "Pick a rating"}
        </span>
        <Button
          size="sm"
          className="ml-auto"
          disabled={rating === 0 || saving}
          onClick={() => {
            setSaving(true);
            void Promise.resolve(
              onSubmit(rating, comment.trim() || undefined),
            ).finally(() => setSaving(false));
          }}
        >
          {saving && <Loader2 className="size-4 animate-spin" />}
          Send feedback
        </Button>
      </div>
      {rating > 0 && (
        <Textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          rows={2}
          placeholder="Anything you want to add? (optional)"
          className="mt-3 resize-none"
        />
      )}
    </div>
  );
}
