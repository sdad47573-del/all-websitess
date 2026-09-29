import { useState } from "react";
import { toast } from "sonner";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Boxes, Plus, RefreshCw } from "lucide-react";
import { formatCurrency, formatDate } from "@/components/pest/domain";

export function MaterialPanel({
  products,
  onUpsert,
}: {
  products: Doc<"products">[];
  onUpsert: (args: {
    productId?: Id<"products">;
    name: string;
    registration: string;
    unit: string;
    stock: number;
    minStock: number;
    cost: number;
  }) => Promise<unknown>;
}) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    registration: "",
    unit: "unidades",
    stock: "0",
    minStock: "5",
    cost: "0",
  });

  const lowStock = products.filter((p) => p.stock <= p.minStock);
  const value = products.reduce((acc, p) => acc + p.stock * p.cost, 0);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      await onUpsert({
        name: form.name.trim(),
        registration: form.registration.trim() || "s/n",
        unit: form.unit.trim() || "unidades",
        stock: Number(form.stock) || 0,
        minStock: Number(form.minStock) || 0,
        cost: Number(form.cost) || 0,
      });
      setForm({
        name: "",
        registration: "",
        unit: "unidades",
        stock: "0",
        minStock: "5",
        cost: "0",
      });
      setOpen(false);
      toast.success("Material añadido al almacén");
    } finally {
      setSaving(false);
    }
  };

  const restock = async (product: Doc<"products">) => {
    await onUpsert({
      productId: product._id,
      name: product.name,
      registration: product.registration,
      unit: product.unit,
      stock: product.stock + Math.max(product.minStock * 2, 10),
      minStock: product.minStock,
      cost: product.cost,
    });
    toast.success(`Reposición registrada en ${product.name}`);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Almacén de material
          </h2>
          <p className="text-sm text-muted-foreground">
            {products.length} referencias · {lowStock.length} por debajo del
            mínimo · valor {formatCurrency(value)}
          </p>
        </div>
        <Button type="button" className="gap-2" onClick={() => setOpen(true)}>
          <Plus className="size-4" />
          Nuevo material
        </Button>
      </div>

      {lowStock.length > 0 && (
        <div className="rounded-xl border border-chart-3/40 bg-chart-3/10 p-5">
          <h3 className="text-sm font-semibold text-chart-3">
            Aviso de reposición
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {lowStock.map((product) => (
              <li
                key={product._id}
                className="flex flex-wrap items-center justify-between gap-2 text-sm"
              >
                <span>
                  {product.name}{" "}
                  <span className="text-muted-foreground">
                    — {product.stock} {product.unit} (mín. {product.minStock})
                  </span>
                </span>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="gap-1.5"
                  onClick={() => restock(product)}
                >
                  <RefreshCw className="size-3.5" />
                  Reponer
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border/70 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Material</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">
                Registro
              </th>
              <th className="px-4 py-3 font-medium">Stock</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">
                Coste
              </th>
              <th className="px-4 py-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {products.map((product) => {
              const low = product.stock <= product.minStock;
              const ratio = Math.min(
                100,
                Math.round((product.stock / Math.max(product.minStock * 3, 1)) * 100),
              );
              return (
                <tr key={product._id} className="hover:bg-muted/40">
                  <td className="px-4 py-3">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Actualizado {formatDate(product.updatedAt)}
                    </p>
                  </td>
                  <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                    {product.registration}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex w-32 items-center gap-2">
                      <Progress
                        value={ratio}
                        className={`h-1.5 ${
                          low ? "[&>div]:bg-destructive" : "[&>div]:bg-primary"
                        }`}
                      />
                      <span className="text-xs tabular-nums text-muted-foreground">
                        {product.stock} {product.unit}
                      </span>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 tabular-nums text-muted-foreground sm:table-cell">
                    {formatCurrency(product.cost)}/{product.unit}
                  </td>
                  <td className="px-4 py-3">
                    <Badge
                      variant="outline"
                      className={
                        low
                          ? "border-destructive/40 bg-destructive/10 text-destructive"
                          : "border-primary/30 bg-primary/10 text-primary"
                      }
                    >
                      {low ? "Reponer" : "Disponible"}
                    </Badge>
                  </td>
                </tr>
              );
            })}
            {products.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-10 text-center text-sm text-muted-foreground"
                >
                  <Boxes className="mx-auto size-5" />
                  <p className="mt-2">Sin material registrado.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Nuevo material</DialogTitle>
            <DialogDescription>
              Alta de referencia con su número de registro para trazabilidad.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="material-name">Nombre</Label>
              <Input
                id="material-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Cebo en gel cipermetrina 2,5 %"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="material-reg">Nº registro</Label>
                <Input
                  id="material-reg"
                  value={form.registration}
                  onChange={(e) =>
                    setForm({ ...form, registration: e.target.value })
                  }
                  placeholder="ES-REG-24810"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="material-unit">Unidad</Label>
                <Input
                  id="material-unit"
                  value={form.unit}
                  onChange={(e) => setForm({ ...form, unit: e.target.value })}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="material-stock">Stock</Label>
                <Input
                  id="material-stock"
                  type="number"
                  min={0}
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="material-min">Mínimo</Label>
                <Input
                  id="material-min"
                  type="number"
                  min={0}
                  value={form.minStock}
                  onChange={(e) => setForm({ ...form, minStock: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="material-cost">Coste (€)</Label>
                <Input
                  id="material-cost"
                  type="number"
                  min={0}
                  value={form.cost}
                  onChange={(e) => setForm({ ...form, cost: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={saving}>
                {saving ? "Guardando…" : "Añadir al almacén"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
