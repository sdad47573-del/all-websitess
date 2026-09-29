import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  timeAgo,
} from "@/lib/support";
import type { Category } from "@/lib/support";
import { cn } from "@/lib/utils";
import {
  Building2,
  Check,
  Loader2,
  Plus,
  Settings2,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";

/** Renders whichever custom fields apply to the chosen category. */
export function CustomFieldInputs({
  category,
  values,
  onChange,
  className,
}: {
  category: Category;
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
  className?: string;
}) {
  const fields = useQuery(api.fields.listFields, {
    category,
    audience: "customer",
  });

  if (!fields || fields.length === 0) return null;

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {fields.map((field) => (
        <div key={field.key} className="grid gap-2">
          <Label htmlFor={`field-${field.key}`}>
            {field.label}
            {field.required && <span className="text-rose-600"> *</span>}
          </Label>
          {field.type === "select" ? (
            <Select
              value={values[field.key] ?? ""}
              onValueChange={(value) =>
                onChange({ ...values, [field.key]: value })
              }
            >
              <SelectTrigger id={`field-${field.key}`} className="w-full">
                <SelectValue placeholder="Choose one" />
              </SelectTrigger>
              <SelectContent>
                {field.options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              id={`field-${field.key}`}
              value={values[field.key] ?? ""}
              onChange={(event) =>
                onChange({ ...values, [field.key]: event.target.value })
              }
              placeholder={field.label}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/** Read-only chips of a ticket's custom values, with inline editing. */
export function CustomFieldChips({
  ticketId,
  category,
  values,
}: {
  ticketId: Id<"tickets">;
  category: Category;
  values: Record<string, string>;
}) {
  const fields = useQuery(api.fields.listFields, { category });
  const setValue = useMutation(api.fields.setValue);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Record<string, string>>(values);

  if (!fields || fields.length === 0) return null;

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setDraft(values);
      }}
    >
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <Settings2 className="size-3.5" />
          Details
          {Object.keys(values).length > 0 && (
            <span className="rounded bg-muted px-1 text-[0.7rem] tabular-nums">
              {Object.keys(values).length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-80 p-3">
        <p className="mb-2 text-xs font-medium text-muted-foreground">
          Custom fields
        </p>
        <div className="space-y-3">
          {fields.map((field) => (
            <div key={field.key} className="grid gap-1.5">
              <Label className="text-xs">{field.label}</Label>
              {field.type === "select" ? (
                <Select
                  value={draft[field.key] ?? ""}
                  onValueChange={(value) =>
                    setDraft((current) => ({ ...current, [field.key]: value }))
                  }
                >
                  <SelectTrigger className="h-8">
                    <SelectValue placeholder="Not set" />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  value={draft[field.key] ?? ""}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      [field.key]: event.target.value,
                    }))
                  }
                  className="h-8"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          {Object.keys(values).length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDraft({})}
            >
              Clear all
            </Button>
          )}
          <Button
            size="sm"
            className="ml-auto"
            onClick={() => {
              for (const field of fields) {
                const next = (draft[field.key] ?? "").trim();
                const current = (values[field.key] ?? "").trim();
                if (next === current) continue;
                void setValue({ ticketId, key: field.key, value: next || undefined });
              }
              setOpen(false);
            }}
          >
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

/** Desk settings: define and remove custom ticket fields. */
export function FieldManagerDialog() {
  const fields = useQuery(api.fields.listFields, {});
  const createField = useMutation(api.fields.createField);
  const deleteField = useMutation(api.fields.deleteField);
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");
  const [type, setType] = useState<"text" | "select">("text");
  const [options, setOptions] = useState("");
  const [required, setRequired] = useState(false);
  const [audience, setAudience] = useState<"customer" | "agent">("customer");
  const [categories, setCategories] = useState<Category[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      await createField({
        label,
        type,
        options:
          type === "select"
            ? options
                .split(",")
                .map((option) => option.trim())
                .filter(Boolean)
            : undefined,
        required: required || undefined,
        audience,
        categories: categories.length > 0 ? categories : undefined,
      });
      setLabel("");
      setOptions("");
      setRequired(false);
      setCategories([]);
    } catch (createError) {
      setError(
        createError instanceof Error
          ? createError.message
          : "Could not create the field.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          <Settings2 className="size-4" />
          Fields
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Custom ticket fields</DialogTitle>
          <DialogDescription>
            Fields appear on the customer form for the categories you pick, and
            in the console for everyone. Text or a dropdown.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="field-label">Label</Label>
            <Input
              id="field-label"
              value={label}
              onChange={(event) => setLabel(event.target.value)}
              placeholder="Order ID"
            />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label>Type</Label>
              <Select
                value={type}
                onValueChange={(value) => setType(value as "text" | "select")}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Short text</SelectItem>
                  <SelectItem value="select">Dropdown</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Shown to</Label>
              <Select
                value={audience}
                onValueChange={(value) =>
                  setAudience(value as "customer" | "agent")
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer">Customer form</SelectItem>
                  <SelectItem value="agent">Agents only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {type === "select" && (
            <div className="grid gap-2">
              <Label htmlFor="field-options">Options (comma separated)</Label>
              <Input
                id="field-options"
                value={options}
                onChange={(event) => setOptions(event.target.value)}
                placeholder="Refund, Duplicate charge, Plan change"
              />
            </div>
          )}

          <div className="grid gap-2">
            <Label>Only for these categories</Label>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((category) => {
                const active = categories.includes(category);
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setCategories((current) =>
                        active
                          ? current.filter((value) => value !== category)
                          : [...current, category],
                      )
                    }
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-xs transition-colors",
                      active
                        ? "border-primary/60 bg-primary/15"
                        : "border-border bg-card text-muted-foreground hover:bg-muted",
                    )}
                  >
                    {active && <Check className="mr-1 inline size-3" />}
                    {CATEGORY_LABEL[category]}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              {categories.length === 0
                ? "Showing for every category"
                : `Showing for ${categories.length} categor${categories.length === 1 ? "y" : "ies"}`}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Switch id="field-required" checked={required} onCheckedChange={setRequired} />
            <Label htmlFor="field-required" className="text-sm font-normal">
              Required on the customer form
            </Label>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <DialogFooter>
          <Button
            onClick={() => void submit()}
            disabled={
              busy ||
              label.trim().length < 2 ||
              (type === "select" && options.trim().length === 0)
            }
          >
            {busy ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
            Add field
          </Button>
        </DialogFooter>

        {fields && fields.length > 0 && (
          <div className="border-t border-border pt-3">
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              Defined fields
            </p>
            <ul className="space-y-1.5">
              {fields.map((field) => (
                <li
                  key={field.key}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{field.label}</span>
                    <span className="block text-xs text-muted-foreground">
                      {field.type}
                      {field.required ? " · required" : ""}
                      {field.audience === "agent" ? " · agents only" : ""}
                      {field.categories.length > 0
                        ? ` · ${field.categories
                            .map((category) =>
                              CATEGORY_LABEL[category as Category] ?? category,
                            )
                            .join(", ")}`
                        : " · all categories"}
                    </span>
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7"
                    onClick={() => void deleteField({ key: field.key })}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

/** Organizations view: every company grouped by its email domain. */
export function CompaniesDialog({
  onFilter,
  trigger,
}: {
  onFilter: (domain: string | undefined) => void;
  trigger?: React.ReactNode;
}) {
  const companies = useQuery(api.fields.companies, {});
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="outline" size="sm" className="h-9">
            <Building2 className="size-4" />
            Companies
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Companies</DialogTitle>
          <DialogDescription>
            Grouped automatically from the customer's email domain, so a new
            colleague at the same company inherits the same context.
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-96 space-y-1.5 overflow-y-auto">
          {companies?.map((company) => (
            <div
              key={company.domain}
              className="flex items-center gap-3 rounded-lg border border-border px-3 py-2.5"
            >
              <Building2 className="size-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{company.domain}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Users className="size-3" />
                  {company.contactCount} contact
                  {company.contactCount === 1 ? "" : "s"} · last reply{" "}
                  {timeAgo(company.lastReplyAt)}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <Badge variant="outline">{company.tickets} tickets</Badge>
                {company.open > 0 && (
                  <Badge
                    variant="outline"
                    className="border-amber-300/80 bg-amber-50 text-amber-900"
                  >
                    {company.open} open
                  </Badge>
                )}
                {company.urgent > 0 && (
                  <Badge
                    variant="outline"
                    className="border-rose-300/80 bg-rose-50 text-rose-800"
                  >
                    {company.urgent} urgent
                  </Badge>
                )}
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => {
                    onFilter(company.domain);
                    setOpen(false);
                  }}
                >
                  Filter
                </Button>
              </div>
            </div>
          ))}
          {companies?.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">
              No company emails on file yet.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
