import { Badge } from "@/components/ui/badge";
import {
  CATEGORY_LABEL,
  CATEGORY_STYLE,
  PRIORITY_LABEL,
  PRIORITY_STYLE,
  STATUS_LABEL,
  STATUS_STYLE,
} from "@/lib/support";
import type { Category, Priority, TicketStatus } from "@/lib/support";
import { cn } from "@/lib/utils";

export function StatusBadge({
  status,
  className,
}: {
  status: TicketStatus;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("font-medium", STATUS_STYLE[status], className)}
    >
      {STATUS_LABEL[status]}
    </Badge>
  );
}

export function PriorityBadge({
  priority,
  className,
}: {
  priority: Priority;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("font-medium", PRIORITY_STYLE[priority], className)}
    >
      {PRIORITY_LABEL[priority]}
    </Badge>
  );
}

export function CategoryBadge({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("font-medium", CATEGORY_STYLE[category], className)}
    >
      {CATEGORY_LABEL[category]}
    </Badge>
  );
}

/** Machine-style ticket reference, e.g. RLY-1042. */
export function ReferenceChip({
  reference,
  className,
}: {
  reference: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "ref-mono inline-flex items-center rounded-md border border-border bg-muted px-1.5 py-0.5 font-medium text-muted-foreground",
        className,
      )}
    >
      {reference}
    </span>
  );
}
