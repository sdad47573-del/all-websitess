import { useState } from "react";
import { useMutation, useQuery } from "@app-client";
import { toast } from "sonner";
import { Check, Copy, Gift, Loader2, Sparkles } from "lucide-react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const DENOMS = [50, 100, 200];

export function GiftCardPurchase() {
  const myCards = useQuery(api.giftCards.listMine, {});
  const purchase = useMutation(api.giftCards.purchase);
  const [amount, setAmount] = useState<number>(50);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [newCode, setNewCode] = useState<string | null>(null);

  const handlePurchase = async () => {
    setBusy(true);
    try {
      const result = await purchase({ amountEuros: amount, message: message || undefined });
      setNewCode(result.code);
      setMessage("");
      toast.success("¡Tarjeta creada!", {
        description: `Código ${result.code} listo para regalar.`,
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "No se pudo crear la tarjeta");
    } finally {
      setBusy(false);
    }
  };

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Código copiado");
    } catch {
      toast.error("No se pudo copiar");
    }
  };

  return (
    <Card className="border-border/70 shadow-none">
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Gift className="size-5" />
          </span>
          <div>
            <CardTitle className="text-base">Regalar una limpieza</CardTitle>
            <CardDescription>
              Tarjeta regalo con saldo para quien más lo necesita. Se descuenta en su reserva.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          {DENOMS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setAmount(d)}
              className={cn(
                "rounded-xl border p-4 text-center transition-all",
                amount === d
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border hover:border-primary/40 hover:bg-primary/5",
              )}
            >
              <span className="block text-xl font-extrabold">{d} €</span>
              <span className="block text-[10px] text-muted-foreground">
                ≈ {Math.floor(d / 45)} limpiezas
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="gift-message">Mensaje (opcional)</Label>
          <Textarea
            id="gift-message"
            rows={2}
            placeholder="Para que no te preocupes por nada esta semana…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button onClick={handlePurchase} disabled={busy} className="w-full rounded-full">
          {busy ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Sparkles className="mr-2 size-4" />}
          Crear tarjeta de {amount} €
        </Button>

        {newCode && (
          <div className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Tu tarjeta regalo
              </p>
              <code className="text-lg font-extrabold tracking-widest text-primary">
                {newCode}
              </code>
            </div>
            <Button size="sm" variant="outline" onClick={() => copyCode(newCode)}>
              <Copy className="mr-1 size-3.5" /> Copiar
            </Button>
          </div>
        )}

        {myCards && myCards.length > 0 && (
          <div className="border-t pt-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Tarjetas creadas ({myCards.length})
            </p>
            <div className="flex flex-col gap-1.5">
              {myCards.slice(0, 5).map((card) => (
                <div
                  key={card._id}
                  className="flex items-center justify-between rounded-lg border border-border/60 px-3 py-2"
                >
                  <code className="text-xs font-bold tracking-wider">{card.code}</code>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="tabular-nums text-muted-foreground">
                      Saldo: {(card.remainingCents / 100).toFixed(2).replace(".", ",")} €
                    </span>
                    {card.status === "active" ? (
                      <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        <Check className="size-2.5" /> Activa
                      </span>
                    ) : (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        Usada
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
