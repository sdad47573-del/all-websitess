import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { BookOpen, ExternalLink, Loader2, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

/**
 * Agent-side knowledge lookup. Dropping an article link into the reply is the
 * difference between "it should be in the docs" and an actual pointer.
 */
export function KnowledgeMenu({
  onInsert,
  className,
}: {
  onInsert: (text: string) => void;
  className?: string;
}) {
  const [search, setSearch] = useState("");
  const articles = useQuery(api.kb.listArticles, {
    search: search.trim() || undefined,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={className ?? "h-7 px-2"}
        >
          <BookOpen className="size-3.5" />
          Knowledge
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-0">
        <div className="border-b border-border p-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the help centre…"
              className="h-8 w-full rounded-md border border-input bg-card pl-8 pr-2 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            />
          </div>
        </div>
        <div className="max-h-72 overflow-y-auto p-1">
          {articles?.length === 0 && (
            <p className="px-3 py-4 text-center text-xs text-muted-foreground">
              No articles match “{search}”.
            </p>
          )}
          {articles?.map((article) => (
            <div
              key={article.slug}
              className="flex items-start gap-1 rounded-md px-1 hover:bg-muted"
            >
              <button
                type="button"
                onClick={() =>
                  onInsert(`Here's the write-up on this: ${article.title}\n/help/${article.slug}`)
                }
                className="min-w-0 flex-1 rounded-md px-2 py-1.5 text-left"
              >
                <span className="block truncate text-sm font-medium">
                  {article.title}
                </span>
                <span className="mt-0.5 line-clamp-1 block text-xs text-muted-foreground">
                  {article.summary}
                </span>
              </button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="size-7 shrink-0"
              >
                <Link to={`/help/${article.slug}`} target="_blank">
                  <ExternalLink className="size-3.5" />
                </Link>
              </Button>
            </div>
          ))}
          {articles === null && (
            <p className="px-3 py-4 text-center text-xs text-muted-foreground">
              <Loader2 className="mx-auto size-3.5 animate-spin" />
            </p>
          )}
        </div>
        <div className="border-t border-border px-3 py-2 text-[0.7rem] text-muted-foreground">
          Picking an article drops its link into your reply.
        </div>
      </PopoverContent>
    </Popover>
  );
}

/**
 * Case deflection for the customer: while they write a ticket, surface the
 * articles most likely to answer it. Same pattern as Zendesk Guide.
 */
export function SuggestedArticles({
  text,
  categoryLabel,
  className,
}: {
  text: string;
  categoryLabel?: string;
  className?: string;
}) {
  const suggestions = useQuery(
    api.kb.suggestArticles,
    text.trim().length >= 3 || categoryLabel
      ? { text: text.trim() || undefined, category: categoryLabel }
      : "skip",
  );

  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className={className}>
      <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <BookOpen className="size-3.5" />
        These might answer it without waiting for us
      </p>
      <ul className="space-y-1.5">
        {suggestions.map((article) => (
          <li key={article.slug}>
            <Link
              to={`/help/${article.slug}`}
              target="_blank"
              className="block rounded-lg border border-border bg-card px-3 py-2 transition-colors hover:border-primary/50 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                {article.title}
                <ExternalLink className="size-3 opacity-50" />
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {article.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
