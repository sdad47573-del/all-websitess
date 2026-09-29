import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Menu, Truck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const NAV = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#comparativa", label: "Comparativa" },
  { href: "#velocidad", label: "Velocidad" },
  { href: "#servicios", label: "Packs" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#checklist", label: "Checklist" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#faq", label: "Preguntas" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Mudando" className="size-9 rounded-lg" />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Mudando
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/dashboard">
              <Truck className="size-4" />
              Mi mudanza
            </Link>
          </Button>
          <button
            type="button"
            aria-label="Abrir menú"
            className="inline-flex size-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-ink/5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 mb-3 sm:hidden">
              <Link to="/dashboard">Mi mudanza</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
