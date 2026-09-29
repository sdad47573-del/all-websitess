import { useMutation, useQuery } from "convex/react";
import {
  Boxes,
  Building2,
  Bug,
  CalendarClock,
  ChartNoAxesColumn,
  LayoutDashboard,
  LogOut,
  Menu,
  Receipt,
  ShieldCheck,
  Siren,
  UserRoundPlus,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { IncidenciasPanel } from "@/components/pest/IncidenciasPanel";
import { FacturacionPanel } from "@/components/pest/FacturacionPanel";
import { InformesPanel } from "@/components/pest/InformesPanel";
import { LeadsPanel } from "@/components/pest/LeadsPanel";
import { MaterialPanel } from "@/components/pest/MaterialPanel";
import { NuevaIncidenciaDialog } from "@/components/pest/NuevaIncidenciaDialog";
import { ResumenPanel } from "@/components/pest/ResumenPanel";
import { SitiosPanel } from "@/components/pest/SitiosPanel";
import { TrampasPanel } from "@/components/pest/TrampasPanel";
import { VisitasPanel } from "@/components/pest/VisitasPanel";
import type { TabId } from "@/components/pest/domain";

const TABS = [
  { id: "resumen", label: "Resumen", icon: LayoutDashboard },
  { id: "visitas", label: "Visitas", icon: CalendarClock },
  { id: "sitios", label: "Sitios", icon: Building2 },
  { id: "trampas", label: "Trampas", icon: Bug },
  { id: "incidencias", label: "Incidencias", icon: Siren },
  { id: "facturacion", label: "Facturación", icon: Receipt },
  { id: "material", label: "Material", icon: Boxes },
  { id: "informes", label: "Informes", icon: ChartNoAxesColumn },
  { id: "crm", label: "CRM", icon: UserRoundPlus },
] as const satisfies ReadonlyArray<{ id: TabId; label: string; icon: typeof LayoutDashboard }>;

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
        <ShieldCheck className="size-5" />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="text-[15px] font-semibold tracking-tight text-sidebar-foreground">
            Vigía
          </p>
          <p className="text-[11px] uppercase tracking-[0.16em] text-sidebar-foreground/60">
            Control de plagas
          </p>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const [tab, setTab] = useState<TabId>("resumen");
  const [menuOpen, setMenuOpen] = useState(false);
  const [incidentSite, setIncidentSite] = useState<Id<"sites"> | "any" | null>(
    null,
  );

  const sites = useQuery(api.pestControl.listSites) ?? [];
  const devices = useQuery(api.pestControl.listDevices) ?? [];
  const incidents = useQuery(api.pestControl.listIncidents) ?? [];
  const visits = useQuery(api.pestControl.listVisits) ?? [];
  const invoices = useQuery(api.pestControl.listInvoices) ?? [];
  const leads = useQuery(api.pestControl.listLeads) ?? [];
  const readings = useQuery(api.pestControl.listReadings) ?? [];
  const reviews = useQuery(api.pestControl.listReviews) ?? [];
  const thresholds = useQuery(api.pestControl.listThresholds) ?? [];
  const products = useQuery(api.pestControl.listProducts) ?? [];
  const credentials = useQuery(api.pestControl.listCredentials) ?? [];
  const quotes = useQuery(api.pestControl.listQuotes) ?? [];
  const seedDemo = useMutation(api.pestControl.ensureDemoData);

  const scheduleVisit = useMutation(api.pestControl.scheduleVisit);
  const logReading = useMutation(api.pestControl.logReading);
  const refillBait = useMutation(api.pestControl.refillBait);
  const createIncident = useMutation(api.pestControl.createIncident);
  const updateIncident = useMutation(api.pestControl.updateIncident);
  const createSite = useMutation(api.pestControl.createSite);
  const createDevice = useMutation(api.pestControl.createDevice);
  const generateSchedule = useMutation(api.pestControl.generateSchedule);
  const completeVisit = useMutation(api.pestControl.completeVisit);
  const markInvoicePaid = useMutation(api.pestControl.markInvoicePaid);
  const createLead = useMutation(api.pestControl.createLead);
  const updateLead = useMutation(api.pestControl.updateLead);
  const convertLead = useMutation(api.pestControl.convertLead);
  const requestReview = useMutation(api.pestControl.requestReview);
  const setThreshold = useMutation(api.pestControl.setThreshold);
  const upsertProduct = useMutation(api.pestControl.upsertProduct);
  const createCredential = useMutation(api.pestControl.createCredential);
  const createQuote = useMutation(api.pestControl.createQuote);

  useEffect(() => {
    seedDemo().catch(() => undefined);
  }, [seedDemo]);

  const activeTab = TABS.find((t) => t.id === tab) ?? TABS[0];

  const nav = (
    <nav className="flex flex-col gap-1">
      {TABS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => {
            setTab(item.id);
            setMenuOpen(false);
          }}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            tab === item.id
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
          )}
        >
          <item.icon
            className={cn(
              "size-4",
              tab === item.id
                ? "text-sidebar-primary"
                : "text-sidebar-foreground/50",
            )}
          />
          {item.label}
        </button>
      ))}
    </nav>
  );

  const newIncident = (siteId: Id<"sites"> | "any" = "any") =>
    setIncidentSite(siteId);

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[264px_1fr]">
      <aside className="sticky top-0 hidden h-screen flex-col justify-between bg-sidebar px-4 py-6 lg:flex">
        <div className="flex flex-col gap-8">
          <Link to="/" className="px-2">
            <Brand />
          </Link>
          {nav}
        </div>
        <div className="flex flex-col gap-3 border-t border-sidebar-border pt-4">
          <div className="px-2">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              {user?.name ?? "Técnico de campo"}
            </p>
            <p className="truncate text-xs text-sidebar-foreground/55">
              {user?.email ?? "Sesión activa"}
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="justify-start gap-2 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            onClick={() => signOut()}
          >
            <LogOut className="size-4" />
            Cerrar sesión
          </Button>
        </div>
      </aside>

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-3.5 sm:px-6">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
            <div className="lg:hidden">
              <Brand compact />
            </div>
            <div className="hidden lg:block">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {user?.name ? `Sesión de ${user.name}` : "Sesión activa"}
              </p>
              <h1 className="text-xl font-semibold tracking-tight">
                {activeTab.label}
              </h1>
            </div>
            <Button
              type="button"
              variant="outline"
              className="ml-auto gap-2"
              onClick={() => {
                setTab("incidencias");
                newIncident();
              }}
            >
              <Siren className="size-4" />
              <span className="hidden sm:inline">Registrar incidencia</span>
            </Button>
          </div>
          <div className="border-t border-border/60 bg-sidebar px-3 py-2 lg:hidden">
            <div className="flex gap-1 overflow-x-auto">
              {TABS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setTab(item.id);
                    setMenuOpen(false);
                  }}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                    tab === item.id
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70",
                  )}
                >
                  <item.icon className="size-3.5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {menuOpen && (
          <div className="border-b border-sidebar-border bg-sidebar px-3 py-3 lg:hidden">
            {nav}
            <Button
              type="button"
              variant="ghost"
              className="mt-3 w-full justify-start gap-2 text-sidebar-foreground/70"
              onClick={() => signOut()}
            >
              <LogOut className="size-4" />
              Cerrar sesión
            </Button>
          </div>
        )}

        <main className="grid-field flex-1 px-4 py-6 sm:px-6">
          <div className="mx-auto w-full max-w-6xl">
            {tab === "resumen" && (
              <ResumenPanel
                sites={sites}
                devices={devices}
                incidents={incidents}
                visits={visits}
                invoices={invoices}
                leads={leads}
                reviews={reviews}
                products={products}
                credentials={credentials}
                onNavigate={setTab}
              />
            )}
            {tab === "visitas" && (
              <VisitasPanel
                sites={sites}
                visits={visits}
                invoices={invoices}
                reviews={reviews}
                products={products}
                onGenerateSchedule={generateSchedule}
                onComplete={completeVisit}
                onRequestReview={requestReview}
              />
            )}
            {tab === "sitios" && (
              <SitiosPanel
                sites={sites}
                devices={devices}
                onSchedule={scheduleVisit}
                onCreateSite={createSite}
                onNewIncident={newIncident}
              />
            )}
            {tab === "trampas" && (
              <TrampasPanel
                sites={sites}
                devices={devices}
                readings={readings}
                thresholds={thresholds}
                onLogReading={logReading}
                onRefill={refillBait}
                onCreateDevice={createDevice}
                onSetThreshold={setThreshold}
              />
            )}
            {tab === "incidencias" && (
              <IncidenciasPanel
                sites={sites}
                incidents={incidents}
                onNew={newIncident}
                onUpdate={updateIncident}
              />
            )}
            {tab === "facturacion" && (
              <FacturacionPanel
                sites={sites}
                invoices={invoices}
                onMarkPaid={markInvoicePaid}
              />
            )}
            {tab === "material" && (
              <MaterialPanel products={products} onUpsert={upsertProduct} />
            )}
            {tab === "informes" && (
              <InformesPanel
                sites={sites}
                visits={visits}
                invoices={invoices}
                incidents={incidents}
                credentials={credentials}
                onCreateCredential={createCredential}
              />
            )}
            {tab === "crm" && (
              <LeadsPanel
                leads={leads}
                quotes={quotes}
                onCreate={createLead}
                onUpdate={updateLead}
                onConvert={convertLead}
                onCreateQuote={createQuote}
              />
            )}
          </div>
        </main>
      </div>

      {incidentSite !== null && (
        <NuevaIncidenciaDialog
          sites={sites}
          defaultSiteId={
            incidentSite !== "any" ? incidentSite : undefined
          }
          onClose={() => setIncidentSite(null)}
          onCreate={async (args) => {
            await createIncident(args);
            setIncidentSite(null);
          }}
        />
      )}
    </div>
  );
}
