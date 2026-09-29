import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CATEGORY_TAG_SUGGESTIONS, TAGS } from "@/lib/support";
import type { Category } from "@/lib/support";
import { Check, Plus, Tag, X } from "lucide-react";
import { useState } from "react";

/** Read-only tag chips. */
export function TagChips({
  tags,
  onRemove,
  className,
}: {
  tags: string[];
  onRemove?: (tag: string) => void;
  className?: string;
}) {
  if (tags.length === 0) return null;
  return (
    <div className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className="gap-1 border-border bg-muted/60 font-normal text-muted-foreground"
        >
          {tag}
          {onRemove && (
            <button
              type="button"
              onClick={() => onRemove(tag)}
              aria-label={`Remove ${tag}`}
              className="rounded-sm opacity-60 transition-opacity hover:opacity-100"
            >
              <X className="size-3" />
            </button>
          )}
        </Badge>
      ))}
    </div>
  );
}

/** Add/remove tags, seeded with the category's usual suspects. */
export function TagPicker({
  tags,
  available,
  category,
  onChange,
}: {
  tags: string[];
  available: string[];
  category?: Category;
  onChange: (tags: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const suggestions = [
    ...(category ? CATEGORY_TAG_SUGGESTIONS[category] : []),
    ...available,
    ...tags,
    ...TAGS,
  ];
  const options = [...new Set(suggestions)].filter((tag) => !tags.includes(tag));

  const add = (tag: string) => {
    const clean = tag.trim().toLowerCase();
    if (!clean || tags.includes(clean)) return;
    onChange([...tags, clean]);
    setDraft("");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <Tag className="size-3.5" />
          Tags
          {tags.length > 0 && (
            <span className="rounded bg-muted px-1 text-[0.7rem] tabular-nums">
              {tags.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-0">
        <div className="flex items-center gap-1.5 border-b border-border p-2">
          <Input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                add(draft);
              }
            }}
            placeholder="Add a tag…"
            className="h-8"
          />
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={() => add(draft)}
            disabled={!draft.trim()}
          >
            <Plus className="size-4" />
          </Button>
        </div>
        <div className="max-h-56 overflow-y-auto p-1">
          {options.length === 0 && (
            <p className="px-2 py-3 text-xs text-muted-foreground">
              No suggestions left — type to create one.
            </p>
          )}
          {options.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => add(tag)}
              className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted"
            >
              <Check className="size-3.5 opacity-0" />
              {tag}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
