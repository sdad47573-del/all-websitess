import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { useMutationAction } from "@/hooks/use-mutation-action";
import { PROPOSALS } from "@/convex/coopData";
import {
  deliveryFeeForZone,
  formatDate,
  formatPrice,
  scaleBlurb,
  scaleLabel,
} from "@/lib/coop";
import { useMutation, useQuery } from "convex/react";
import {
  Banknote,
  Bell,
  BellRing,
  CalendarCheck,
  Check,
  ChefHat,
  Gift,
  Leaf,
  LogOut,
  MapPin,
  Pause,
  Play,
  Repeat,
  Scale,
  ShoppingBasket,
  SkipForward,
  Sprout,
  Vote,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router";

/** Sliding scale options, cheapest first. */
const SCALES = [50, 75, 100, 120] as const;

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>
      {children}
    </div>
  );
}

function Block({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <Card>
      <h2 className="flex items-center gap-2.5 text-lg font-semibold">
        <span className="text-primary">{icon}</span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </Card>
  );
}

function Btn({
  children,
  onClick,
  variant = "outline",
  disabled,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline" | "ghost";
  disabled?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50";
  const styles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-border hover:bg-secondary",
    ghost: "hover:bg-secondary",
  }[variant];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

export default function Panel() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const seed = useMutation(api.coop.seedCatalog);
  const subscribe = useMutation(api.coop.subscribe);
  const setStatus = useMutation(api.coop.setSubscriptionStatus);
  const setScale = useMutation(api.coop.setScale);
  const setPickup = useMutation(api.coop.setPickupPoint);
  const toggleSkip = useMutation(api.coop.toggleSkipWeek);
  const castVote = useMutation(api.coop.castVote);
  const toggleAlert = useMutation(api.coop.toggleSeasonAlert);
  const toggleAdoption = useMutation(api.coop.toggleAdoption);
  const swapItem = useMutation(api.coop.swapItem);
  const contribute = useMutation(api.coop.contributeCapital);
  const setExtra = useMutation(api.coop.setExtra);
  const toggleReservation = useMutation(api.coop.toggleReservation);
  const bookVisit = useMutation(api.coop.bookVisit);
  const cancelBooking = useMutation(api.coop.cancelBooking);
  const claimCredit = useMutation(api.coop.claimSatisfactionCredit);
  const changePlan = useMutation(api.coop.changePlan);
  const setDeliveryMode = useMutation(api.coop.setDeliveryMode);
  const buyGift = useMutation(api.coop.buyGift);
  const redeemGift = useMutation(api.coop.redeemGift);

  const catalog = useQuery(api.coop.catalog);
  const membership = useQuery(api.coop.myMembership);
  const tallies = useQuery(api.coop.voteTallies);
  const myAlerts = useQuery(api.coop.mySeasonAlerts);
  const myAdoptions = useQuery(api.coop.myAdoptions);
  const swap = useQuery(api.coop.swapAllowance);
  const boxExtras = useQuery(api.coop.myBoxExtras);
  const myVisits = useQuery(api.coop.myVisits);
  const upcoming = useQuery(api.coop.upcomingWeeks, { weeks: 8 });
  const myGifts = useQuery(api.coop.myGifts);

  // Every mutation goes through `run`, so a rejected mutation explains itself
  // instead of silently doing nothing.
  const run = useMutationAction();

  // The plan the member is looking at before they subscribe.
  const [draftPlanId, setDraftPlanId] = useState<string | null>(null);
  const [draftScale, setDraftScale] = useState<number>(100);
  const [draftPickup, setDraftPickup] = useState<string | null>(null);
  const [creditReason, setCreditReason] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [zoneId, setZoneId] = useState<string>("");

  // Gift composer
  const [giftPlanId, setGiftPlanId] = useState<string>("");
  const [giftWeeks, setGiftWeeks] = useState(4);
  const [giftName, setGiftName] = useState("");
  const [giftAddress, setGiftAddress] = useState("");
  const [giftNote, setGiftNote] = useState("");
  const [issuedCode, setIssuedCode] = useState<string | null>(null);
  const [redeemCode, setRedeemCode] = useState("");

  // Default the gift plan to the recommended basket.
  useEffect(() => {
    if (!catalog || giftPlanId) return;
    const recommended =
      catalog.plans.find((p) => p.recommended) ?? catalog.plans[0];
    if (recommended) setGiftPlanId(recommended._id);
  }, [catalog, giftPlanId]);

  // Seed the delivery form from what is already saved.
  useEffect(() => {
    if (!membership) return;
    if (membership.deliveryAddress) setAddress(membership.deliveryAddress);
    if (membership.deliveryNote) setNote(membership.deliveryNote);
    if (membership.deliveryZone?._id) setZoneId(membership.deliveryZone._id);
  }, [membership]);

  useEffect(() => {
    seed();
  }, [seed]);

  // Default the draft to the recommended plan so the form is never empty.
  useEffect(() => {
    if (!catalog || draftPlanId) return;
    const recommended = catalog.plans.find((p) => p.recommended) ?? catalog.plans[0];
    if (recommended) setDraftPlanId(recommended._id);
  }, [catalog, draftPlanId]);

  const sub = membership?.subscription ?? null;
  const hasSubscription = Boolean(sub);

  const planIdForAction = sub?.planId ?? draftPlanId;
  const scaleForAction = sub?.scalePercent ?? draftScale;
  const pickupForAction = sub?.pickupPointId ?? draftPickup ?? undefined;

  const handleSubscribe = async () => {
    if (!planIdForAction) return;
    await run(
      "No se pudo apuntarte",
      () =>
        subscribe({
          planId: planIdForAction as never,
          scalePercent: scaleForAction,
          pickupPointId: (pickupForAction ?? undefined) as never,
        }),
      { success: "Ya eres socio. Tu primera caja llega la semana que viene." },
    );
  };

  const nextBox = membership?.nextBox ?? null;
  const scale = sub?.scalePercent ?? 100;
  const activePlan = sub ? membership?.plan : null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sprout className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-tight">
                Raices
              </span>
              <span className="block text-[11px] text-muted-foreground">
                Mi panel
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user?.name ?? user?.email ?? "Miembro"}
            </span>
            <Btn
              variant="ghost"
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
            >
              <LogOut className="size-4" />
              Salir
            </Btn>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        {/* Redeem a gift, before signing in to a basket. */}
        {!hasSubscription && (
          <Card className="mb-10">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold">
              <Gift className="size-5 text-primary" />
              Tienes un regalo?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Introduce el codigo que te han dado y creamos tu cesta. No
              necesitas tarjeta ni permanencia: dura las semanas del regalo.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                value={redeemCode}
                onChange={(e) => setRedeemCode(e.target.value.toUpperCase())}
                placeholder="RAIZ-K7P-4WQ"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 font-mono text-sm uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Btn
                variant="default"
                disabled={redeemCode.trim().length < 12}
                onClick={async () => {
                  const ok = await run(
                    "No se pudo recoger el regalo",
                    () => redeemGift({ code: redeemCode }),
                    { success: "Regalo recogido. Ya tienes cesta." },
                  );
                  if (ok) setRedeemCode("");
                }}
              >
                Recoger regalo
              </Btn>
            </div>
          </Card>
        )}

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {hasSubscription ? "Tu cesta" : "Apuntate a una cesta"}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {hasSubscription
            ? "Aqui gestionas tu pedido semanal: la tarifa, el punto de recogida y las semanas que te saltas."
            : "Elige un tamano, la tarifa que puedas pagar y donde recoges. Puedes cambiarlo todo cuando quieras."}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {/* ---------- next box ---------- */}
            {hasSubscription && (
              <Block title="Tu proxima caja" icon={<CalendarCheck className="size-5" />}>
                {nextBox ? (
                  <>
                    <p className="text-sm text-muted-foreground">
                      Semana del {formatDate(nextBox.date)} ·{" "}
                      {membership?.pickupPoint
                        ? `${membership.pickupPoint.name}, ${membership.pickupPoint.day} ${membership.pickupPoint.window}`
                        : "sin punto asignado"}
                    </p>
                    <div className="mt-5 grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5">
                      {nextBox.items.map((item, i) => (
                        <div
                          key={`${item._id}-${i}`}
                          className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-border bg-secondary/50 text-center"
                        >
                          <span className="text-2xl">{item.emoji}</span>
                          <span className="px-1 text-[10px] leading-tight text-muted-foreground">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-medium text-primary">
                            {item.portion}
                          </span>
                        </div>
                      ))}
                    </div>
                    {nextBox.status === "skipped" ? (
                      <p className="mt-5 flex items-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm text-muted-foreground">
                        <SkipForward className="size-4" />
                        Semana saltada. No pagas esta semana y no pierdes tu sitio.
                      </p>
                    ) : (
                      <Btn
                        className="mt-5"
                        onClick={() =>
                          run("No se pudo saltar", () =>
                            toggleSkip({ weekKey: nextBox.weekKey }),
                          )
                        }
                      >
                        <SkipForward className="size-4" />
                        Saltar esta semana
                      </Btn>
                    )}

                    {/* Swap an item for another in-season crop. */}
                    <div className="mt-6 border-t border-border pt-6">
                      <p className="flex items-center gap-2 text-sm font-medium">
                        <Repeat className="size-4 text-primary" />
                        Cambiar una pieza
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {swap && swap.allowance > 0 ? (
                          <>
                            Tu plan permite{" "}
                            <strong>{swap.allowance}</strong> cambio
                            {swap.allowance === 1 ? "" : "s"} por semana.
                            Llevas {swap.used}.
                          </>
                        ) : (
                          "El cambio de piezas va incluido en las cestas familiar y grande."
                        )}
                      </p>

                      {swap && swap.allowance > 0 &&
                        (catalog?.inSeason.length ?? 0) > 0 && (
                          <div className="mt-4 space-y-2">
                            {nextBox.items.map((item, idx) => (
                              <div
                                key={`${item._id}-${idx}`}
                                className="rounded-lg border border-border p-3"
                              >
                                <p className="text-sm">
                                  {item.emoji} {item.name}
                                </p>
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {(catalog?.inSeason ?? [])
                                    .filter((p) => p._id !== item._id)
                                    .slice(0, 6)
                                    .map((alt) => (
                                      <button
                                        key={alt._id}
                                        type="button"                          onClick={() =>
                            run("No se pudo cambiar", () =>
                              swapItem({
                                weekKey: nextBox.weekKey,
                                fromProduceId: item._id,
                                toProduceId: alt._id,
                              }),
                            )
                          }
                                        className="rounded-full border border-border px-2.5 py-1 text-xs transition-colors hover:bg-secondary"
                                      >
                                        {alt.emoji} {alt.name}
                                      </button>
                                    ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No hay ninguna caja programada. Habla con la cooperativa para
                    abrir la proxima temporada.
                  </p>
                )}
              </Block>
            )}

            {/* ---------- cook your box ---------- */}
            {hasSubscription &&
              nextBox &&
              (catalog?.recipes.length ?? 0) > 0 && (
                <Block
                  title="Cocina tu caja"
                  icon={<ChefHat className="size-5" />}
                >
                  <p className="text-sm text-muted-foreground">
                    Recetas escritas con lo que cultivamos. Mira cuales puedes
                    hacer con la caja que ya tienes en casa.
                  </p>
                  <div className="mt-5 space-y-3">
                    {(catalog?.recipes ?? []).map((recipe) => {
                      const inBox = new Set(nextBox.items.map((i) => i.name));
                      const have = recipe.items.filter((i) =>
                        inBox.has(i.name),
                      ).length;
                      const total = recipe.items.length;
                      const pct = total > 0 ? (have / total) * 100 : 0;
                      const canCook = have === total;
                      return (
                        <details
                          key={recipe._id}
                          className="rounded-xl border border-border"
                        >
                          <summary className="flex cursor-pointer items-center justify-between gap-3 p-4">
                            <span className="min-w-0">
                              <span className="block text-sm font-medium">
                                {recipe.name}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {recipe.minutes} min · {recipe.difficulty}
                              </span>
                            </span>
                            <span
                              className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                canCook
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {canCook ? "Ya la tienes" : `${have}/${total}`}
                            </span>
                          </summary>
                          <div className="border-t border-border p-4">
                            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary transition-[width] duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground">
                              {recipe.blurb}
                            </p>
                            <p className="mt-4 text-xs font-medium text-muted-foreground">
                              NECESITAS
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {recipe.items.map((item) => {
                                const have2 = inBox.has(item.name);
                                return (
                                  <span
                                    key={item._id}
                                    className={`rounded-full px-2.5 py-1 text-xs ${
                                      have2
                                        ? "bg-primary/10 text-primary"
                                        : "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {item.emoji} {item.name}
                                  </span>
                                );
                              })}
                            </div>
                            <p className="mt-3 text-xs text-muted-foreground">
                              Y de tu despensa: {recipe.pantry.join(", ")}
                            </p>
                          </div>
                        </details>
                      );
                    })}
                  </div>
                </Block>
              )}

            {/* ---------- extras + reservations ---------- */}
            {hasSubscription && nextBox && (
              <Block
                title="Anade extras y reserva cosecha"
                icon={<ShoppingBasket className="size-5" />}
              >
                <p className="text-sm text-muted-foreground">
                  Extras sueltos para esta semana, fuera de tu cuota. Se cobran
                  aparte y se preparan con el camion.
                </p>

                {boxExtras && boxExtras.extras.length > 0 && (
                  <div className="mt-5 space-y-2">
                    {boxExtras.extras.map((e) => (
                      <div
                        key={e._id}
                        className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                      >
                        <span className="text-sm">
                          {e.emoji} {e.label} × {e.qty}
                        </span>
                        <span className="flex items-center gap-3">
                          <span className="text-sm font-medium">
                            {formatPrice(e.lineTotalCents)}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              run("No se pudo quitar", () =>
                                setExtra({
                                  produceId: e.produceId,
                                  pantryItemId: e.pantryItemId,
                                  qty: 0,
                                }),
                              )
                            }
                            className="text-xs text-muted-foreground hover:text-foreground"
                          >
                            Quitar
                          </button>
                        </span>
                      </div>
                    ))}
                    <p className="text-right text-sm font-semibold text-primary">
                      Total extras: {formatPrice(boxExtras.extrasTotalCents)}
                    </p>
                  </div>
                )}

                <details className="mt-5">
                  <summary className="cursor-pointer text-sm font-medium text-primary">
                    Anadir un extra a esta caja
                  </summary>
                  <div className="mt-3 max-h-72 space-y-2 overflow-y-auto pr-1">
                    {(catalog?.inSeason ?? []).map((p) => {
                      const current = boxExtras?.extras.find(
                        (e) => e.produceId === p._id,
                      );
                      return (
                        <div
                          key={p._id}
                          className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                        >
                          <span className="min-w-0 text-sm">
                            {p.emoji} {p.name}
                            <span className="block text-xs text-muted-foreground">
                              {formatPrice(p.priceCents)} / {p.unit}
                            </span>
                          </span>
                          <span className="flex shrink-0 items-center gap-1">
                            <button
                              type="button"
                              onClick={() =>
                                run("No se pudo actualizar el extra", () =>
                                  setExtra({
                                    produceId: p._id,
                                    qty: Math.max(0, (current?.qty ?? 0) - 1),
                                  }),
                                )
                              }
                              className="size-7 rounded-md border border-border text-sm hover:bg-secondary"
                              aria-label="Quitar uno"
                            >
                              −
                            </button>
                            <span className="w-6 text-center text-sm font-medium">
                              {current?.qty ?? 0}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                run("No se pudo actualizar el extra", () =>
                                  setExtra({
                                    produceId: p._id,
                                    qty: (current?.qty ?? 0) + 1,
                                  }),
                                )
                              }
                              className="size-7 rounded-md border border-border text-sm hover:bg-secondary"
                              aria-label="Anadir uno"
                            >
                              +
                            </button>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </details>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <ShoppingBasket className="size-4 text-primary" />
                    La despensa
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Aceite, miel, huevos y conservas de los mismos productores.
                    Viaja con el camion de la huerta, asi que no paga envio
                    aparte.
                  </p>
                  <div className="mt-4 space-y-2">
                    {(catalog?.pantry ?? []).map((item) => {
                      const current = boxExtras?.extras.find(
                        (e) => e.pantryItemId === item._id,
                      );
                      return (
                        <div
                          key={item._id}
                          className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                        >
                          <span className="min-w-0">
                            <span className="block text-sm">
                              {item.emoji} {item.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {item.producer} · {formatPrice(item.priceCents)}{" "}
                              / {item.unit}
                            </span>
                          </span>
                          <span className="flex shrink-0 items-center gap-1">
                            <button
                              type="button"
                              onClick={() =>
                                run("No se pudo actualizar", () =>
                                  setExtra({
                                    pantryItemId: item._id,
                                    qty: Math.max(0, (current?.qty ?? 0) - 1),
                                  }),
                                )
                              }
                              className="size-7 rounded-md border border-border text-sm hover:bg-secondary"
                              aria-label="Quitar uno"
                            >
                              −
                            </button>
                            <span className="w-6 text-center text-sm font-medium">
                              {current?.qty ?? 0}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                run("No se pudo actualizar", () =>
                                  setExtra({
                                    pantryItemId: item._id,
                                    qty: (current?.qty ?? 0) + 1,
                                  }),
                                )
                              }
                              className="size-7 rounded-md border border-border text-sm hover:bg-secondary"
                              aria-label="Anadir uno"
                            >
                              +
                            </button>
                          </span>
                        </div>
                      );
                    })}
                    {(catalog?.pantry.length ?? 0) === 0 && (
                      <p className="text-sm text-muted-foreground">
                        Todavia no hay nada en la despensa.
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="flex items-center gap-2 text-sm font-medium">
                    <Sprout className="size-4 text-primary" />
                    Reservar cosecha
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Marca un cultivo que aun no esta de temporada y te guardamos
                    una parte de su primera cosecha. Se avisa cuando haya que
                    recoger.
                  </p>
                  {boxExtras && boxExtras.reservations.length > 0 && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      Reservado:{" "}
                      {boxExtras.reservations
                        .map((r) => `${r.produce.emoji} ${r.produce.name}`)
                        .join(", ")}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(catalog?.allProduce ?? [])
                      .filter((p) => !p.months.includes(catalog?.month ?? 0))
                      .map((p) => {
                        const on = boxExtras?.reservations.some(
                          (r) => r.produceId === p._id,
                        );
                        return (
                          <button
                            key={p._id}
                            type="button"
                            onClick={() =>
                              run("No se pudo reservar", () =>
                                toggleReservation({ produceId: p._id }),
                              )
                            }
                            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                              on
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:bg-secondary"
                            }`}
                          >
                            {p.emoji} {p.name}
                          </button>
                        );
                      })}
                  </div>
                </div>
              </Block>
            )}

            {/* ---------- gifting ---------- */}
            <Block title="Regala una cesta" icon={<Gift className="size-5" />}>
              <p className="text-sm text-muted-foreground">
                Un socio buys, quien la recibe se la lleva sin tener que crear
                cuenta. Solo necesita el codigo.
              </p>

              {issuedCode && (
                <div className="mt-4 rounded-lg border border-primary bg-primary/5 p-4">
                  <p className="text-xs font-medium text-primary">
                    CODIGO DE RECOGIDA
                  </p>
                  <p className="mt-1 font-mono text-xl font-semibold tracking-wider">
                    {issuedCode}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Pasaselo a quien la recibe. Con el puede ver que lleva y
                    donde recogerlo.
                  </p>
                </div>
              )}

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {(catalog?.plans ?? []).map((p) => (
                  <button
                    key={p._id}
                    type="button"
                    onClick={() => setGiftPlanId(p._id)}
                    className={`rounded-lg border p-3 text-left transition-colors ${
                      giftPlanId === p._id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    <span className="block text-sm font-medium">{p.name}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {formatPrice(p.weeklyPriceCents)} / semana
                    </span>
                  </button>
                ))}
              </div>

              <label
                htmlFor="gift-weeks"
                className="mt-4 block text-xs font-medium text-muted-foreground"
              >
                Cuantas semanas
              </label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[2, 4, 8, 12].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setGiftWeeks(w)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      giftWeeks === w
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>

              <label
                htmlFor="gift-name"
                className="mt-4 block text-xs font-medium text-muted-foreground"
              >
                Para quien es
              </label>
              <input
                id="gift-name"
                value={giftName}
                onChange={(e) => setGiftName(e.target.value)}
                placeholder="Nombre de quien la recibe"
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />

              <label
                htmlFor="gift-address"
                className="mt-3 block text-xs font-medium text-muted-foreground"
              >
                Direccion (opcional, si prefieres que se la llevemos)
              </label>
              <input
                id="gift-address"
                value={giftAddress}
                onChange={(e) => setGiftAddress(e.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />

              <label
                htmlFor="gift-note"
                className="mt-3 block text-xs font-medium text-muted-foreground"
              >
                Nota (opcional)
              </label>
              <input
                id="gift-note"
                value={giftNote}
                onChange={(e) => setGiftNote(e.target.value)}
                placeholder="Feliz cumpleanos, de parte de..."
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />

              <Btn
                className="mt-4 w-full"
                disabled={giftName.trim().length < 2 || !giftPlanId}
                onClick={async () => {
                  const result = await run(
                    "No se pudo preparar el regalo",
                    () =>
                      buyGift({
                        planId: giftPlanId as never,
                        weeks: giftWeeks,
                        recipientName: giftName,
                        recipientAddress: giftAddress || undefined,
                        note: giftNote || undefined,
                      }),
                    { success: "Regalo preparado." },
                  );
                  if (result) {
                    setIssuedCode(result.code);
                    setGiftName("");
                    setGiftAddress("");
                    setGiftNote("");
                  }
                }}
              >
                <Gift className="size-4" />
                Preparar el regalo
              </Btn>

              {myGifts && myGifts.length > 0 && (
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-medium text-muted-foreground">
                    REGALOS QUE HAS HECHO
                  </p>
                  <div className="mt-3 space-y-2">
                    {myGifts.map((g) => (
                      <div
                        key={g._id}
                        className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-medium">
                            {g.recipientName}
                          </span>
                          <span className="block font-mono text-xs text-muted-foreground">
                            {g.code}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {g.planName} · {g.weeks} semanas ·{" "}
                            {formatPrice(g.totalCents)}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Block>

            {/* ---------- farm visits ---------- */}
            <Block
              title="Visitas a las fincas"
              icon={<CalendarCheck className="size-5" />}
            >
              {myVisits && myVisits.bookings.length > 0 && (
                <div className="mb-5 space-y-2">
                  {myVisits.bookings.map((b) => (
                    <div
                      key={b._id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-primary/40 bg-primary/5 p-3"
                    >
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">
                          {b.visit.title}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {formatDate(b.visit.startsAt)} ·{" "}
                          {b.visit.farmer?.name} · {b.guests}{" "}
                          {b.guests === 1 ? "persona" : "personas"}
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          run("No se pudo anular", () =>
                            cancelBooking({ visitId: b.visitId }),
                          )
                        }
                        className="shrink-0 text-xs text-muted-foreground hover:text-foreground"
                      >
                        Anular
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {(catalog?.visits ?? []).map((v) => {
                  const booked = myVisits?.bookings.some(
                    (b) => b.visitId === v._id,
                  );
                  const full = (v.spotsLeft ?? 0) <= 0;
                  return (
                    <div
                      key={v._id}
                      className="rounded-xl border border-border p-4"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-medium">{v.title}</p>
                        <span className="text-sm font-medium">
                          {v.priceCents > 0 ? formatPrice(v.priceCents) : "Gratis"}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {formatDate(v.startsAt)} · {v.farmer?.name} ·{" "}
                        {v.durationHours} h
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {v.blurb}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span
                          className={`text-xs font-medium ${
                            full ? "text-muted-foreground" : "text-primary"
                          }`}
                        >
                          {full ? "Completo" : `${v.spotsLeft} plazas`}
                        </span>
                        {booked ? (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
                            <Check className="size-3.5" />
                            Plaza reservada
                          </span>
                        ) : (
                          <Btn
                            disabled={full}
                            onClick={() =>
                              run(
                                "No se pudo reservar",
                                () => bookVisit({ visitId: v._id }),
                                { success: "Plaza reservada." },
                              )
                            }
                          >
                            Reservar
                          </Btn>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Block>

            {/* ---------- satisfaction guarantee ---------- */}
            {hasSubscription && (
              <Block
                title="Cosecha garantizada"
                icon={<Scale className="size-5" />}
              >
                <p className="text-sm text-muted-foreground">
                  Si una caja no llega a cuento, no te obligamos a reclamar nada.
                  Dejamos un credito para la siguiente, y asi el dinero se queda
                  dentro de la cooperativa.
                </p>
                {myVisits && myVisits.creditCents > 0 && (
                  <p className="mt-4 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
                    Tienes {formatPrice(myVisits.creditCents)} de credito
                    acumulado.
                  </p>
                )}
                <div className="mt-4">
                  <label
                    htmlFor="credit-reason"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Que paso con la caja?
                  </label>
                  <textarea
                    id="credit-reason"
                    rows={2}
                    value={creditReason}
                    onChange={(e) => setCreditReason(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-border bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Llegaron tres tomates pisados y la acelga pasada..."
                  />
                </div>
                <Btn
                  className="mt-3"
                  disabled={creditReason.trim().length < 5}
                  onClick={async () => {
                    const ok = await run(
                      "No se pudo registrar",
                      () => claimCredit({ reason: creditReason }),
                      { success: "Credito registrado para la proxima caja." },
                    );
                    if (ok) setCreditReason("");
                  }}
                >
                  Solicitar credito
                </Btn>
              </Block>
            )}

            {/* ---------- adopt a plot ---------- */}
            {hasSubscription && (
              <Block
                title="Adopta un bancal"
                icon={<Sprout className="size-5" />}
              >
                <p className="text-sm text-muted-foreground">
                  Sigue una hilera concreta de una finca desde la siembra hasta
                  la cosecha. Elige la que quieras y te contamos como va.
                </p>

                {myAdoptions && myAdoptions.length > 0 && (
                  <div className="mt-5 space-y-4">
                    {myAdoptions.map((a) => (
                      <div
                        key={a._id}
                        className="rounded-xl border border-border p-4"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-medium">
                            {a.crop?.emoji} {a.crop?.name ?? a.plot}
                          </p>
                          <span
                            className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                          >
                            {a.stage}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {a.plot}
                          {a.crop?.farmer ? ` · ${a.crop.farmer.name}` : ""}
                        </p>
                        <div className="mt-3 flex items-center gap-1">
                          {(catalog?.growthStages ?? []).map((s, i) => (
                            <div key={s} className="flex-1">
                              <div
                                className={`h-1.5 rounded-full ${
                                  i <= a.stageIndex ? "bg-primary" : "bg-muted"
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
                          <span>
                            {(catalog?.growthStages ?? [])[0] ?? "Siembra"}
                          </span>
                          <span>
                            {(catalog?.growthStages ?? []).slice(-1)[0] ??
                              "Cosecha"}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {a.story}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <details className="mt-5">
                  <summary className="cursor-pointer text-sm font-medium text-primary">
                    Ver los bancales disponibles
                  </summary>
                  <div className="mt-3 space-y-2">
                    {(catalog?.plots ?? []).map((plot) => {
                      const on = myAdoptions?.some((a) => a.plotId === plot._id);
                      return (
                        <button
                          key={plot._id}
                          type="button"
                          onClick={() =>
                            run("No se pudo guardar", () =>
                              toggleAdoption({ plotId: plot._id }),
                            )
                          }
                          className={`flex w-full items-center justify-between gap-3 rounded-lg border p-3 text-left transition-colors ${
                            on
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-secondary"
                          }`}
                        >
                          <span className="min-w-0">
                            <span className="block text-sm font-medium">
                              {plot.produce}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {plot.plot} · {plot.stage}
                            </span>
                          </span>
                          {on ? (
                            <Check className="size-4 shrink-0 text-primary" />
                          ) : (
                            <Sprout className="size-4 shrink-0 text-muted-foreground" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </details>
              </Block>
            )}

            {/* ---------- capital social ---------- */}
            <Block
              title="Capital social"
              icon={<Banknote className="size-5" />}
            >
              <p className="text-sm text-muted-foreground">
                Como en cualquier cooperativa agricola, lo que hace que la
                cooperativa sea de sus socios es el capital que ponen. Se
                devuelve en la asamblea anual con los intereses.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Con ese dinero se paga el camion, los fitos de frigorifico y
                el banco de semillas de la huerta de invierno.
              </p>
              {membership?.capital && (
                <div className="mt-5 rounded-lg border border-primary bg-primary/5 p-4">
                  <p className="text-xs font-medium text-primary">
                    TU APORTE AL CAPITAL
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-primary">
                    {formatPrice(membership.capital.amountCents)}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Aportado el{" "}
                    {new Intl.DateTimeFormat("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(membership.capital.contributedAt))}
                    . Se devuelve en la asamblea anual con sus intereses.
                  </p>
                </div>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {[5000, 10000, 25000].map((cents) => (
                  <Btn
                    key={cents}
                    onClick={() =>
                      run(
                        "No se pudo registrar el aporte",
                        () => contribute({ amountCents: cents }),
                        { success: "Aporte registrado. Gracias." },
                      )
                    }
                  >
                    Aportar {formatPrice(cents)}
                  </Btn>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Aportes libres y acumulables. No son una compra: son tu parte
                de la cooperativa.
              </p>
            </Block>

            {/* ---------- skip future weeks ---------- */}
            {hasSubscription && sub?.status === "active" && (
              <Block
                title="Saltar semanas"
                icon={<SkipForward className="size-5" />}
              >
                <p className="text-sm text-muted-foreground">
                  Estas ocho semanas. Si te vas de viaje no pierdes tu sitio: solo
                  deja de cobrarse esa semana y vuelve cuando vuelvas.
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {(upcoming?.boxes ?? []).map((w) => (
                    <button
                      key={w.weekKey}
                      type="button"
                      onClick={() =>
                        run(
                          "No se pudo cambiar",
                          () => toggleSkip({ weekKey: w.weekKey }),
                        )
                      }
                      className={`flex items-center justify-between gap-3 rounded-lg border p-3 text-left transition-colors ${
                        w.skipped
                          ? "border-terracotta bg-terracotta/10"
                          : "border-border hover:bg-secondary"
                      }`}
                    >
                      <span>
                        <span className="block text-sm font-medium">
                          {formatDate(w.date)}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {w.weekKey}
                        </span>
                      </span>
                      {w.skipped ? (
                        <span className="text-xs font-medium text-terracotta">
                          Saltada
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">
                          Activa
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </Block>
            )}

            {/* ---------- season alerts ---------- */}
            {hasSubscription && (
              <Block
                title="Avisos de temporada"
                icon={<Bell className="size-5" />}
              >
                <p className="text-sm text-muted-foreground">
                  Marca los cultivos que ahora no estan y te avisamos en cuanto
                  vuelvan a estar.
                </p>
                {myAlerts && myAlerts.length > 0 && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    Avisos activos:{" "}
                    {myAlerts.map((a) => `${a.emoji} ${a.name}`).join(", ")}
                  </p>
                )}
                <div className="mt-5 space-y-2">
                  {(catalog?.allProduce ?? [])
                    .filter((p) => !p.months.includes(catalog?.month ?? 0))
                    .map((p) => {
                      const on = myAlerts?.some((a) => a._id === p._id);
                      return (
                        <button
                          key={p._id}
                          type="button"
                          onClick={() =>
                            run("No se pudo actualizar el aviso", () =>
                              toggleAlert({ produceId: p._id }),
                            )
                          }
                          className="flex w-full items-center justify-between gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:bg-secondary"
                        >
                          <span className="text-sm">
                            {p.emoji} {p.name}
                          </span>
                          {on ? (
                            <BellRing className="size-4 text-primary" />
                          ) : (
                            <Bell className="size-4 text-muted-foreground" />
                          )}
                        </button>
                      );
                    })}
                </div>
              </Block>
            )}

            {/* ---------- plan + scale ---------- */}
            {hasSubscription && activePlan ? (
              <>
                <Block title="Tu pedido" icon={<Leaf className="size-5" />}>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p className="text-2xl font-semibold">{activePlan.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {activePlan.sizeLabel}
                      </p>
                      {membership?.gift && (
                        <p className="mt-2 inline-block rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                          Es un regalo: te quedan{" "}
                          {membership.gift.weeksRemaining}{" "}
                          {membership.gift.weeksRemaining === 1
                            ? "semana"
                            : "semanas"}
                        </p>
                      )}
                    </div>
                    <p className="text-2xl font-semibold text-primary">
                      {formatPrice(
                        Math.round(
                          (activePlan.weeklyPriceCents * scale) / 100,
                        ),
                      )}
                      <span className="text-sm font-normal text-muted-foreground">
                        {" "}
                        / semana
                      </span>
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <p className="flex items-center gap-2 text-sm font-medium">
                      <Scale className="size-4 text-primary" />
                      Tarifa solidaria: {scaleLabel(scale)} ({scale}%)
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {scaleBlurb(scale)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {SCALES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() =>
                            run("No se pudo cambiar la tarifa", () =>
                              setScale({ scalePercent: s }),
                            )
                          }
                          className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                            scale === s
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:bg-secondary"
                          }`}
                        >
                          {s}%
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <p className="flex items-center gap-2 text-sm font-medium">
                      <Scale className="size-4 text-primary" />
                      Tamano de tu cesta
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Puedes cambiar de tamanho cuando quieras. Tu caja de esta
                      semana se ajusta al instante y no pierdes lo que ya tenias.
                    </p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {(catalog?.plans ?? []).map((p) => {
                        const isCurrent = membership?.plan?._id === p._id;
                        return (
                          <button
                            key={p._id}
                            type="button"
                            disabled={isCurrent}
                            onClick={() =>
                              run(
                                "No se pudo cambiar la cesta",
                                () => changePlan({ planId: p._id }),
                                { success: `Ahora tienes la ${p.name}.` },
                              )
                            }
                            className={`rounded-lg border p-3 text-left transition-colors ${
                              isCurrent
                                ? "border-primary bg-primary/5"
                                : "border-border hover:bg-secondary"
                            }`}
                          >
                            <span className="block text-sm font-medium">
                              {p.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {p.sizeLabel}
                            </span>
                            <span className="mt-1.5 block text-xs text-muted-foreground">
                              {formatPrice(
                                Math.round((p.weeklyPriceCents * scale) / 100),
                              )}{" "}
                              / semana
                            </span>
                            {isCurrent && (
                              <span className="mt-1.5 block text-[11px] font-medium text-primary">
                                Tu cesta actual
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <p className="flex items-center gap-2 text-sm font-medium">
                      <Pause className="size-4 text-primary" />
                      Estado
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {sub?.status === "active"
                        ? "Activa. Llega cada semana."
                        : sub?.status === "paused"
                          ? "En pausa. No se te cobra nada hasta que la actives."
                          : "Dada de baja."}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {sub?.status === "active" ? (
                        <Btn
                          onClick={() =>
                            run("No se pudo pausar", () =>
                              setStatus({ status: "paused" }),
                            )
                          }
                        >
                          <Pause className="size-4" />
                          Pausar
                        </Btn>
                      ) : (
                        <Btn
                          variant="default"
                          onClick={() =>
                            run("No se pudo reactivar", () =>
                              setStatus({ status: "active" }),
                            )
                          }
                        >
                          <Play className="size-4" />
                          Reactivar
                        </Btn>
                      )}
                      <Btn
                        onClick={() =>
                          run("No se pudo dar de baja", () =>
                            setStatus({ status: "cancelled" }),
                          )
                        }
                      >
                        Darme de baja
                      </Btn>
                    </div>
                  </div>
                </Block>

                <Block title="Punto de recogida" icon={<MapPin className="size-5" />}>
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                        membership?.deliveryMode === "delivery"
                          ? "border-border text-muted-foreground"
                          : "border-primary bg-primary/5 text-primary"
                      }`}
                    >
                      Recojo en punto
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                        membership?.deliveryMode === "delivery"
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      Reparto a casa
                    </span>
                  </div>

                  {membership?.deliveryMode === "delivery" ? (
                    <div className="space-y-4">
                      <div className="rounded-lg border border-border bg-secondary/50 p-4">
                        <p className="text-sm font-medium">
                          {membership.deliveryZone?.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {membership.deliveryAddress}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {membership.deliveryZone?.day}
                        </p>
                        {membership.deliveryNote && (
                          <p className="mt-2 text-xs text-muted-foreground">
                            Nota: {membership.deliveryNote}
                          </p>
                        )}
                        <p className="mt-3 border-t border-border pt-3 text-sm">
                          Coste de reparto:{" "}
                          <span className="font-semibold">
                            {formatPrice(membership.deliveryFeeCents)}
                          </span>
                          {membership.deliveryZone &&
                            membership.deliveryZone.freeAboveCents > 0 && (
                              <span className="text-xs text-muted-foreground">
                                {" "}
                                · gratis a partir de{" "}
                                {formatPrice(
                                  membership.deliveryZone.freeAboveCents,
                                )}
                              </span>
                            )}
                        </p>
                        {scale <= 60 && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            En tarifa solidaria el reparto no se cobra.
                          </p>
                        )}
                      </div>

                      {/* Stay in delivery but move: change zone or address. */}
                      <details className="rounded-lg border border-border">
                        <summary className="cursor-pointer px-4 py-3 text-sm font-medium">
                          Cambiar zona o direccion
                        </summary>
                        <div className="border-t border-border p-4">
                          <div className="space-y-2">
                            {(catalog?.deliveryZones ?? []).map((z) => {
                              const fee = deliveryFeeForZone(
                                z,
                                Math.round(
                                  ((activePlan?.weeklyPriceCents ?? 0) *
                                    scale) /
                                    100,
                                ),
                                scale <= 60,
                              );
                              const isCurrent =
                                membership?.deliveryZone?._id === z._id;
                              return (
                                <button
                                  key={z._id}
                                  type="button"
                                  disabled={isCurrent}
                                  onClick={() =>
                                    run(
                                      "No se pudo cambiar la zona",
                                      () =>
                                        setDeliveryMode({
                                          mode: "delivery",
                                          zoneId: z._id,
                                          address,
                                          note,
                                        }),
                                      { success: `Reparto en ${z.name}.` },
                                    )
                                  }
                                  className={`flex w-full items-start justify-between gap-3 rounded-lg border p-3 text-left transition-colors ${
                                    isCurrent
                                      ? "border-primary bg-primary/5"
                                      : "border-border hover:bg-secondary"
                                  }`}
                                >
                                  <span>
                                    <span className="block text-sm font-medium">
                                      {z.name}
                                    </span>
                                    <span className="block text-xs text-muted-foreground">
                                      {z.day}
                                    </span>
                                  </span>
                                  <span className="shrink-0 text-sm font-medium">
                                    {fee === 0 ? "Gratis" : formatPrice(fee)}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                          <label
                            htmlFor="delivery-address-edit"
                            className="mt-4 block text-xs font-medium text-muted-foreground"
                          >
                            Direccion de entrega
                          </label>
                          <input
                            id="delivery-address-edit"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Calle, numero, piso, portal"
                            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          />
                          <label
                            htmlFor="delivery-note-edit"
                            className="mt-3 block text-xs font-medium text-muted-foreground"
                          >
                            Nota para el repartidor
                          </label>
                          <input
                            id="delivery-note-edit"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          />
                          <Btn
                            className="mt-3 w-full"
                            variant="default"
                            disabled={address.trim().length < 6}
                            onClick={() =>
                              run(
                                "No se pudo guardar la direccion",
                                () =>
                                  setDeliveryMode({
                                    mode: "delivery",
                                    zoneId: (membership?.deliveryZone?._id ??
                                      zoneId) as never,
                                    address,
                                    note,
                                  }),
                                { success: "Direccion actualizada." },
                              )
                            }
                          >
                            Guardar direccion
                          </Btn>
                        </div>
                      </details>

                      <Btn
                        onClick={() =>
                          run("No se pudo cambiar", () =>
                            setDeliveryMode({ mode: "pickup" }),
                          )
                        }
                      >
                        Volver a recoger en punto
                      </Btn>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                    {(catalog?.pickupPoints ?? []).map((pt) => {
                      const selected = membership?.pickupPoint?._id === pt._id;
                      return (
                        <button
                          key={pt._id}
                          type="button"
                          onClick={() =>
                            run("No se pudo cambiar el punto", () =>
                              setPickup({ pickupPointId: pt._id }),
                            )
                          }
                          className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                            selected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-secondary"
                          }`}
                        >
                          <span className="mt-0.5">
                            {selected ? (
                              <Check className="size-4 text-primary" />
                            ) : (
                              <MapPin className="size-4 text-muted-foreground" />
                            )}
                          </span>
                          <span>
                            <span className="block text-sm font-medium">
                              {pt.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {pt.day}, {pt.window} · {pt.address}
                            </span>
                          </span>
                        </button>
                      );
                    })}

                    <div className="mt-6 border-t border-border pt-6">
                      <p className="text-sm font-medium">
                        Prefieres que te lo lleven a casa?
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        El coste de reparto y el minimo para que salga gratis
                        estan publicados: no hay surprises al pagar.
                      </p>
                      <div className="mt-4 space-y-2">
                        {(catalog?.deliveryZones ?? []).map((z) => {
                          const fee = deliveryFeeForZone(
                            z,
                            Math.round(
                              ((activePlan?.weeklyPriceCents ?? 0) * scale) / 100,
                            ),
                            scale <= 60,
                          );
                          return (
                            <button
                              key={z._id}
                              type="button"
                              onClick={() => {
                                setZoneId(z._id);
                                void run(
                                  "No se pudo activar el reparto",
                                  () =>
                                    setDeliveryMode({
                                      mode: "delivery",
                                      zoneId: z._id,
                                      address,
                                      note,
                                    }),
                                  { success: "Reparto a casa activado." },
                                );
                              }}
                              disabled={!address || address.trim().length < 6}
                              className="flex w-full items-start justify-between gap-3 rounded-lg border border-border p-3 text-left transition-colors hover:bg-secondary disabled:opacity-50"
                            >
                              <span>
                                <span className="block text-sm font-medium">
                                  {z.name}
                                </span>
                                <span className="block text-xs text-muted-foreground">
                                  {z.neighborhoods.join(", ")} · {z.day}
                                </span>
                              </span>
                              <span className="shrink-0 text-sm font-medium">
                                {fee === 0 ? "Gratis" : formatPrice(fee)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      <label
                        htmlFor="delivery-address"
                        className="mt-4 block text-xs font-medium text-muted-foreground"
                      >
                        Direccion de entrega
                      </label>
                      <input
                        id="delivery-address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Calle, numero, piso, portal"
                        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                      <label
                        htmlFor="delivery-note"
                        className="mt-3 block text-xs font-medium text-muted-foreground"
                      >
                        Nota para el repartidor (opcional)
                      </label>
                      <input
                        id="delivery-note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Portal sin timbre, dejar con el vecino..."
                        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                      {address.trim().length < 6 && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          Escribe la direccion para poder activar el reparto a
                          casa.
                        </p>
                      )}
                    </div>
                  </div>
                )}
                </Block>
              </>
            ) : (
              /* ---------- signup ---------- */
              <Block title="Elige tu cesta" icon={<Leaf className="size-5" />}>
                <div className="grid gap-4 sm:grid-cols-3">
                  {(catalog?.plans ?? []).map((plan) => {
                    const selected = draftPlanId === plan._id;
                    return (
                      <button
                        key={plan._id}
                        type="button"
                        onClick={() => setDraftPlanId(plan._id)}
                        className={`rounded-xl border p-4 text-left transition-colors ${
                          selected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:bg-secondary"
                        }`}
                      >
                        <p className="font-semibold">{plan.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {plan.tagline}
                        </p>
                        <p className="mt-3 text-xl font-semibold text-primary">
                          {formatPrice(
                            Math.round((plan.weeklyPriceCents * draftScale) / 100),
                          )}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {plan.sizeLabel}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm font-medium">
                    Tu tarifa: {scaleLabel(draftScale)} ({draftScale}%)
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {scaleBlurb(draftScale)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SCALES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setDraftScale(s)}
                        className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors ${
                          draftScale === s
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:bg-secondary"
                        }`}
                      >
                        {s}%
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm font-medium">Donde recoges</p>
                  <div className="mt-3 space-y-2.5">
                    {(catalog?.pickupPoints ?? []).map((pt) => {
                      const selected =
                        draftPickup === pt._id ||
                        (draftPickup === null &&
                          catalog?.pickupPoints[0]?._id === pt._id);
                      return (
                        <button
                          key={pt._id}
                          type="button"
                          onClick={() => setDraftPickup(pt._id)}
                          className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                            selected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-secondary"
                          }`}
                        >
                          <span className="mt-0.5">
                            {selected ? (
                              <Check className="size-4 text-primary" />
                            ) : (
                              <MapPin className="size-4 text-muted-foreground" />
                            )}
                          </span>
                          <span>
                            <span className="block text-sm font-medium">
                              {pt.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {pt.day}, {pt.window}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Btn
                  variant="default"
                  className="mt-6 w-full"
                  onClick={handleSubscribe}
                  disabled={!planIdForAction}
                >
                  <Check className="size-4" />
                  Confirmar mi cesta
                </Btn>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  Sin permanencia. Puedes pausar, cambiar de tarifa o darte de
                  baja cuando quieras.
                </p>
              </Block>
            )}

            {/* ---------- history ---------- */}
            {hasSubscription && (membership?.history.length ?? 0) > 0 && (
              <Block title="Cajas anteriores" icon={<CalendarCheck className="size-5" />}>
                <div className="space-y-3">
                  {membership?.history.map((b) => (
                    <details
                      key={b.weekKey}
                      className="rounded-xl border border-border"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm">
                        <span className="font-medium">
                          Semana del {formatDate(b.date)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {b.items.length} piezas ·{' '}
                          {b.weekKey}
                        </span>
                      </summary>
                      <div className="flex flex-wrap gap-2 border-t border-border p-4">
                        {b.items.map((item, i) => (
                          <span
                            key={`${item._id}-${i}`}
                            className="rounded-full bg-secondary px-2.5 py-1 text-xs"
                          >
                            {item.emoji} {item.name}
                          </span>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </Block>
            )}
          </div>

          {/* ---------- governance ---------- */}
          <div className="space-y-6">
            <Block title="La asamblea" icon={<Vote className="size-5" />}>
              <div className="space-y-6">
                {PROPOSALS.map((p) => {
                  const tally = tallies?.[p.id] ?? {};
                  const total = Object.values(tally).reduce((a, b) => a + b, 0);
                  const myVote = membership?.votes?.[p.id];
                  return (
                    <div key={p.id} className="border-t border-border pt-5 first:border-0 first:pt-0">
                      <h3 className="text-sm font-semibold">{p.question}</h3>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        {p.subtitle}
                      </p>
                      <div className="mt-4 space-y-2.5">
                        {p.options.map((o) => {
                          const votes = tally[o.id] ?? 0;
                          const pct =
                            total > 0 ? Math.round((votes / total) * 100) : 0;
                          const mine = myVote === o.id;
                          return (
                            <div key={o.id}>
                              <button
                                type="button"
                                onClick={() =>
                                  castVote({
                                    proposalId: p.id,
                                    choice: o.id,
                                  })
                                }
                                className={`flex w-full items-center gap-2.5 rounded-lg border p-3 text-left transition-colors ${
                                  mine
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:bg-secondary"
                                }`}
                              >
                                <span className="mt-0.5">
                                  {mine ? (
                                    <Check className="size-4 text-primary" />
                                  ) : (
                                    <Vote className="size-4 text-muted-foreground" />
                                  )}
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="flex items-center justify-between gap-2 text-sm font-medium">
                                    <span className="truncate">{o.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {pct}%
                                    </span>
                                  </span>
                                  <span className="mt-1.5 block h-1.5 overflow-hidden rounded-full bg-muted">
                                    <span
                                      className="block h-full rounded-full bg-primary transition-[width] duration-500"
                                      style={{ width: `${pct}%` }}
                                    />
                                  </span>
                                </span>
                              </button>
                              <p className="mt-1.5 text-xs text-muted-foreground">
                                {o.detail}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">
                        {total} {total === 1 ? "voto" : "votos"}
                        {myVote ? " · has votado" : " · puedes cambiarlo cuando quieras"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Block>
          </div>
        </div>
      </main>
    </div>
  );
}
