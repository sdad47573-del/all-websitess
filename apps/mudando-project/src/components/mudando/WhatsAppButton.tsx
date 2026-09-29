import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34910000000?text=Hola%20Mudando%2C%20quiero%20pedir%20presupuesto%20para%20mi%20mudanza"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3.5 pr-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all hover:shadow-xl sm:bottom-6 sm:right-6"
    >
      <span className="relative flex size-6 items-center justify-center">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/40" />
        <MessageCircle className="relative size-5" />
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-40 sm:inline">
        ¿Hablamos?
      </span>
    </a>
  );
}
