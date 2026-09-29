import { RelayWordmark } from "@/components/support/brand";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { formatTimestamp } from "@/lib/support";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  LifeBuoy,
  Search,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router";
import { useMutation, useQuery } from "convex/react";

/**
 * Minimal renderer for the article body format: `## ` headings, `- ` bullets,
 * `1. ` steps and plain paragraphs. Enough structure to be readable without
 * pulling in a markdown dependency.
 */
function ArticleBody({ body }: { body: string }) {
  const lines = body.split("\n");
  const blocks: React.ReactNode[] = [];
  let bullets: string[] = [];
  let steps: string[] = [];

  const flush = (key: string) => {
    if (bullets.length > 0) {
      blocks.push(
        <ul key={`ul-${key}`} className="my-3 list-disc space-y-1.5 pl-5">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>,
      );
      bullets = [];
    }
    if (steps.length > 0) {
      blocks.push(
        <ol
          key={`ol-${key}`}
          className="my-3 list-decimal space-y-1.5 pl-5 marker:font-semibold marker:text-muted-foreground"
        >
          {steps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>,
      );
      steps = [];
    }
  };

  lines.forEach((raw, index) => {
    const line = raw.trimEnd();
    if (line.startsWith("## ")) {
      flush(`h-${index}`);
      blocks.push(
        <h2
          key={`h-${index}`}
          className="mt-7 text-lg font-semibold tracking-tight"
        >
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("- ")) {
      bullets.push(line.slice(2));
    } else if (/^\d+\.\s/.test(line)) {
      steps.push(line.replace(/^\d+\.\s/, ""));
    } else if (line.trim() === "") {
      flush(`p-${index}`);
    } else {
      flush(`p-${index}`);
      blocks.push(
        <p key={`p-${index}`} className="my-3 leading-relaxed text-foreground/85">
          {line}
        </p>,
      );
    }
  });
  flush("end");

  return <div className="text-[0.95rem]">{blocks}</div>;
}

function HelpHeader() {
  return (
    <header className="border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-4 px-5">
        <Link to="/" aria-label="Relay home">
          <RelayWordmark />
        </Link>
        <span className="hidden text-sm text-muted-foreground sm:block">
          Help centre
        </span>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">Back to site</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/auth?returnTo=%2Fportal">
              <LifeBuoy className="size-4" />
              Open a ticket
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function ArticleList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | undefined>();
  const categories = useQuery(api.kb.listCategories, {});
  const articles = useQuery(api.kb.listArticles, {
    search: search.trim() || undefined,
    category,
  });

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12">
      <div className="max-w-2xl">
        <Badge variant="outline" className="bg-card">
          <BookOpen className="size-3" />
          Self-service
        </Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance">
          Find an answer before you open a ticket
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Nine short guides covering billing, webhooks, seats and how Relay
          prioritises your tickets.
        </p>
      </div>

      <div className="relative mt-8 max-w-xl">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search for an answer…"
          className="h-11 w-full rounded-xl border border-input bg-card pl-9 pr-3 shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory(undefined)}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            !category
              ? "border-primary/60 bg-primary/15 text-primary-foreground/90"
              : "border-border bg-card text-muted-foreground hover:bg-muted",
          )}
        >
          All topics
        </button>
        {categories?.map((item) => (
          <button
            key={item.category}
            type="button"
            onClick={() => setCategory(item.category)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              category === item.category
                ? "border-primary/60 bg-primary/15 text-primary-foreground/90"
                : "border-border bg-card text-muted-foreground hover:bg-muted",
            )}
          >
            {item.category}
            <span className="ml-1.5 opacity-70">{item.count}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles?.map((article) => (
          <Link
            key={article.slug}
            to={`/help/${article.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <span className="ref-mono text-muted-foreground">
              {article.category}
            </span>
            <span className="mt-2 font-semibold leading-snug group-hover:text-primary-foreground">
              {article.title}
            </span>
            <span className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {article.summary}
            </span>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
              Read
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
        {articles?.length === 0 && (
          <p className="col-span-full py-12 text-center text-sm text-muted-foreground">
            Nothing matches that search. Try another word, or{" "}
            <Link to="/auth?returnTo=%2Fportal" className="underline">
              open a ticket
            </Link>
            .
          </p>
        )}
      </div>
    </main>
  );
}

function ArticleView({ slug }: { slug: string }) {
  const article = useQuery(api.kb.getArticle, { slug });
  const vote = useMutation(api.kb.voteHelpful);
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);

  if (article === null) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-20 text-center">
        <p className="text-sm text-muted-foreground">Article not found.</p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/help">
            <ArrowLeft className="size-4" />
            All articles
          </Link>
        </Button>
      </main>
    );
  }

  if (article === undefined) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-20">
        <div className="h-4 w-24 animate-pulse rounded bg-muted" />
        <div className="mt-4 h-8 w-3/4 animate-pulse rounded bg-muted" />
        <div className="mt-8 space-y-2">
          <div className="h-4 animate-pulse rounded bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        </div>
      </main>
    );
  }

  const helpfulRate =
    article.voteCount > 0
      ? Math.round((article.helpfulCount / article.voteCount) * 100)
      : null;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12">
      <Button asChild variant="ghost" size="sm" className="-ml-2 text-muted-foreground">
        <Link to="/help">
          <ArrowLeft className="size-4" />
          All articles
        </Link>
      </Button>

      <Badge variant="outline" className="mt-4 bg-card">
        {article.category}
      </Badge>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance">
        {article.title}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {article.updatedAt
          ? `Updated ${formatTimestamp(article.updatedAt)}`
          : "Maintained by the Relay support team"}
        {helpfulRate !== null && ` · ${helpfulRate}% found this helpful`}
      </p>

      <article className="mt-6 border-t border-border pt-2">
        <ArticleBody body={article.body} />
      </article>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        {voted === null ? (
          <>
            <p className="text-sm font-medium">Did this answer your question?</p>
            <p className="mt-1 text-xs text-muted-foreground">
              If not, open a ticket and we'll take it from there.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setVoted("yes");
                  void vote({ articleSlug: slug, helpful: true });
                }}
              >
                <ThumbsUp className="size-4" />
                Yes, thanks
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setVoted("no");
                  void vote({ articleSlug: slug, helpful: false });
                }}
              >
                <ThumbsDown className="size-4" />
                Not quite
              </Button>
              <Button asChild size="sm" className="sm:ml-auto">
                <Link to="/auth?returnTo=%2Fportal">
                  <LifeBuoy className="size-4" />
                  Open a ticket
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            {voted === "yes"
              ? "Thanks — glad that helped."
              : "Sorry it missed. Open a ticket and a human will pick it up."}
          </p>
        )}
      </div>
    </main>
  );
}

export default function Help() {
  const { slug } = useParams();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HelpHeader />
      {slug ? <ArticleView slug={slug} /> : <ArticleList />}
    </div>
  );
}
