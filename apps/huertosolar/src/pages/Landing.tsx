import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Recycle,
  Bug,
  CircleHelp,
  FlaskConical,
  CloudRain,
  RefreshCw,
  Trophy,
  CalendarDays,
  Check,
  Download,
  Droplets,
  Leaf,
  Map,
  Menu,
  ScanLine,
  ShoppingBasket,
  Sprout,
  WifiOff,
  Sun,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: CalendarDays, kicker: "Planifica", title: "Un calendario que entiende tu clima", text: "Siembra, riego y cosecha en la fecha correcta para tu zona y tu jardín." },
  { icon: Map, kicker: "Diseña", title: "Tu huerto, en un solo lienzo", text: "Organiza bancales, registra cada planta y mira el crecimiento de un vistazo." },
  { icon: Droplets, kicker: "Cuida", title: "Menos agua, más vida", text: "Recibe recordatorios adaptados al clima local y desperdicia menos agua." },
  { icon: CloudRain, kicker: "Anticipa", title: "El clima, sin sorpresas", text: "Heladas, viento y lluvia en una vista simple para decidir cuándo actuar." },
  { icon: RefreshCw, kicker: "Rota", title: "Cultiva mejor cada temporada", text: "Rotaciones, asocios y recomendaciones para mantener el suelo sano." },
  { icon: Trophy, kicker: "Celebra", title: "Tu cosecha tiene historia", text: "Registra resultados y descubre qué semillas funcionan mejor contigo." },
  { icon: Bug, kicker: "Detecta", title: "Plagas antes de que avancen", text: "Diagnóstico por síntomas y recomendaciones sencillas para recuperar la planta." },
  { icon: Bell, kicker: "Recibe", title: "Alertas que llegan a tiempo", text: "Heladas, viento fuerte y olas de calor: actúa antes de que dañen tu huerto." },
  { icon: Users, kicker: "Comparte", title: "Aprende de tu barrio", text: "Descubre qué funciona cerca de ti y comparte tus parcelas de cultivo." },
  { icon: FlaskConical, kicker: "Experimenta", title: "Tu propio laboratorio verde", text: "Prueba semillas, compara resultados y encuentra tu mezcla ganadora." },
  { icon: CircleHelp, kicker: "Pregunta", title: "Una respuesta en el momento", text: "Identifica una planta o una plaga y recibe pasos claros sin salir del huerto." },
  { icon: Recycle, kicker: "Cierra el ciclo", title: "Nada se desperdicia en tu huerto", text: "Convierte restos verdes, compost y semillas en recursos para la próxima temporada." },
  { icon: ShoppingBasket, kicker: "Compra", title: "Solo lo que tu huerto necesita", text: "Recibe una lista de semillas y materiales basada en tus próximos cultivos." },
  { icon: WifiOff, kicker: "Lleva", title: "Funciona también sin cobertura", text: "Tus tareas, notas y fichas siguen disponibles aunque estés en mitad del jardín." },
];

const competitors = [
  { name: "Almanac Garden Planner", strengths: "Calendario y clima", missing: "Diario visual" },
  { name: "Garden Planner", strengths: "Diseño de parcelas", missing: "Rutinas móviles" },
  { name: "VegPlot", strengths: "Planificación y comunidad", missing: "Riego inteligente" },
  { name: "Gardena Smart Garden", strengths: "Automatización", missing: "Diario y aprendizaje" },
  { name: "PlantVillage", strengths: "Diagnóstico visual", missing: "Planificación del huerto" },
  { name: "Heirloom", strengths: "Catálogo de semillas", missing: "Calendario y cuidado" },
  { name: "PictureThis", strengths: "Identificación con IA", missing: "Planificación del cultivo" },
  { name: "Seed to Spoon", strengths: "Guía paso a paso", missing: "Rotación y compostaje" },
  { name: "Seedtime", strengths: "Calendario y bancales", missing: "Lista de compra inteligente" },
  { name: "Planter", strengths: "Diseño móvil sencillo", missing: "Diario y datos locales" },
  { name: "Planter", strengths: "Diseño móvil sencillo", missing: "Diario y datos locales" },
  { name: "huertosolar", strengths: "Todo en un flujo", missing: "" },
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f7ed] text-[#183b2b]">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#1b5e3e] text-white shadow-[0_8px_20px_rgba(27,94,62,.18)]"><Sprout size={19} /></span>
          <span className="text-lg font-bold tracking-[-.04em]">huertosolar</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4e6c5c] md:flex">
          <a href="#metodo" className="transition hover:text-[#1b5e3e]">Cómo funciona</a>
          <a href="#comparativa" className="transition hover:text-[#1b5e3e]">Comparativa</a>
          <a href="#planes" className="transition hover:text-[#1b5e3e]">Planes</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/auth" className="rounded-full px-4 py-2 text-sm font-semibold text-[#1b5e3e] transition hover:bg-[#e7efdf]">Entrar</Link>
          <Link to="/auth" className="inline-flex items-center gap-2 rounded-full bg-[#1b5e3e] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(27,94,62,.18)] transition hover:-translate-y-0.5 hover:bg-[#164d32]">Empezar gratis <ArrowRight size={15} /></Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2 text-[#1b5e3e] md:hidden" aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <div className="absolute left-4 right-4 top-16 z-20 rounded-2xl border border-[#dbe6d4] bg-white p-4 shadow-xl md:hidden"><div className="flex flex-col gap-3 text-sm font-semibold"><a href="#metodo" onClick={() => setMenuOpen(false)}>Cómo funciona</a><a href="#comparativa" onClick={() => setMenuOpen(false)}>Comparativa</a><a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a><Link to="/auth" className="rounded-xl bg-[#1b5e3e] px-4 py-3 text-center text-white">Empezar gratis</Link></div></div>}

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-[#e7f0d7] blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d4e2cb] bg-white/75 px-3.5 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#47745a]"><span className="size-2 rounded-full bg-[#8dbb55]" />Tu huerto, un poco más fácil</div>
            <h1 className="max-w-xl text-5xl font-bold leading-[.98] tracking-[-.065em] text-[#153b2a] sm:text-6xl lg:text-[76px]">Cultiva más.<br /><span className="text-[#74a948]">Preocúpate menos.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#5a7466]">Un planificador de huertos que convierte el clima, tus espacio y tus ganas en un plan que sí puedes seguir.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><Link to="/auth" className="inline-flex items-center gap-2 rounded-full bg-[#1b5e3e] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(27,94,62,.2)] transition hover:-translate-y-0.5">Crear mi huerto <ArrowRight size={17} /></Link><a href="#metodo" className="rounded-full px-4 py-3 text-sm font-bold text-[#47745a] transition hover:bg-white/70">Ver cómo funciona <span className="ml-1">↓</span></a></div>
            <div className="mt-8 flex items-center gap-3 text-xs text-[#6e8779]"><div className="flex -space-x-2"><span className="size-7 rounded-full border-2 border-[#f5f7ed] bg-[#c7dd9a]" /><span className="size-7 rounded-full border-2 border-[#f5f7ed] bg-[#9fc8b4]" /><span className="size-7 rounded-full border-2 border-[#f5f7ed] bg-[#e5b68b]" /></div><span><strong className="text-[#315a44]">+2.000 jardineros</strong> ya están cultivando</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .8, delay: .15 }} className="relative z-10 lg:pl-8">
            <div className="absolute -right-2 -top-8 size-28 rounded-full bg-[#dcecc3] blur-2xl" />
            <div className="relative rounded-[2.2rem] border border-[#d8e5d0] bg-[#dfeccb] p-4 shadow-[0_30px_70px_rgba(38,76,48,.16)] sm:p-6">
              <div className="mb-4 flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#73917b]">Mi huerto</p><p className="text-sm font-bold text-[#254d38]">Casa · terrace</p></div><div className="flex size-9 items-center justify-center rounded-xl bg-[#e8f1dc] text-[#4e8a43]"><Sun size={18} /></div></div>
              <div className="grid gap-3 sm:grid-cols-[1.15fr_.85fr]">
                <div className="relative min-h-[310px] overflow-hidden rounded-2xl bg-[#9ecb72] p-4"><div className="absolute inset-x-4 top-4 flex justify-between text-[10px] font-bold text-[#3e6638]"><span>PARCELA 01</span><span>☀ 24°</span></div><div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-3">{["Tomate", "Albahaca", "Zanahoria", "Pimiento", "Lechuga", "Guisantes"].map((plant, i) => <div key={plant} className={`rounded-xl border border-white/30 p-2 ${i % 2 ? 'bg-[#c2dba0]/90' : 'bg-[#8fba62]/90'}`}><div className="mb-2 text-xl">{i % 2 ? "🌿" : "🌱"}</div><p className="text-[10px] font-bold text-[#335b31]">{plant}</p><p className="mt-1 text-[9px] text-[#537b45]">{["100%", "82%", "64%"][i % 3]} sembrado</p></div>)}</div><div className="absolute inset-x-5 top-1/2 h-px rotate-[-17deg] bg-white/30" /></div>
                <div className="flex flex-col gap-3"><div className="rounded-2xl bg-white/80 p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold text-[#41664c]">Esta semana</span><span className="rounded-full bg-[#edf6e3] px-2 py-1 text-[9px] font-bold text-[#66944f]">3 tareas</span></div><div className="mt-4 space-y-3">{[["Riego", "Hoy", "💧"], ["Poda", "Mar", "✂️"], ["Cosecha", "Jue", "🧺"]].map(([task, day, icon]) => <div key={task} className="flex items-center gap-2 text-xs"><span className="text-base">{icon}</span><span className="font-semibold text-[#365d46]">{task}</span><span className="ml-auto text-[10px] text-[#7b9784]">{day}</span></div>)}</div></div><div className="rounded-2xl bg-[#1b5e3e] p-4 text-white"><div className="flex items-center gap-2 text-xs font-bold"><Droplets size={14} />Riego inteligente</div><p className="mt-2 text-[11px] leading-5 text-white/70">Tu huerto necesita 12 L hoy. La lluvia ya hizo su parte.</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/20"><div className="h-full w-2/3 rounded-full bg-[#d5ef9d]" /></div></div></div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-xs"><span className="font-semibold text-[#52705d]">Última sincronización</span><span className="font-bold text-[#315a44]">Hoy, 08:42 <span className="text-[#86b95e]">●</span></span></div>
            </div>
          </motion.div>
        </section>

        <section id="metodo" className="border-y border-[#dfe9d9] bg-white/55 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#6c9a52]">Un método más humano</p><h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-[#183b2b] sm:text-5xl">El jardín no debería sentirse como otra tarea.</h2><p className="mt-5 text-lg leading-8 text-[#648071]">huertosolar reúne lo que normalmente está disperso: qué plantar, cuándo hacerlo y cómo cuidarlo.</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{features.map(({ icon: Icon, kicker, title, text }) => <div key={kicker} className="group rounded-3xl border border-[#dce8d6] bg-[#f9fbf6] p-7 transition hover:-translate-y-1 hover:border-[#bcd6a9] hover:shadow-[0_18px_36px_rgba(54,93,48,.08)]"><div className="flex size-12 items-center justify-center rounded-2xl bg-[#e5f1d6] text-[#4e8a43] transition group-hover:bg-[#d5eac0]"><Icon size={22} /></div><p className="mt-7 text-xs font-bold uppercase tracking-[.16em] text-[#6c9a52]">{kicker}</p><h3 className="mt-2 text-xl font-bold tracking-[-.03em] text-[#244c37]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6a8174]">{text}</p></div>)}</div></div></section>

        <section id="comparativa" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#6c9a52]">Por qué diferente</p><h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-[#183b2b] sm:text-5xl">Las mejores ideas, <span className="text-[#74a948]">en un solo lugar.</span></h2><p className="mt-5 text-lg leading-8 text-[#648071]">Comparamos las herramientas que más usan los jardineros para detectar sus puntos débiles y diseñar una experiencia más clara, bonita y práctica.</p><div className="mt-8 space-y-3">{["Sin publicidad ni ruido", "Datos en español y para tu clima", "Listo para móvil, también en el jardín"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#3b604a]"><span className="flex size-6 items-center justify-center rounded-full bg-[#dff0cf] text-[#4e8a43]"><Check size={14} /></span>{item}</div>)}</div></div><div className="overflow-hidden rounded-3xl border border-[#dce8d6] bg-white shadow-[0_20px_50px_rgba(53,91,49,.08)]"><div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-[#e2eadf] bg-[#f4f8ef] px-5 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#769184]"><span>Herramienta</span><span>Lo mejor</span><span>El hueco</span></div>{competitors.map((item, index) => <div key={item.name} className={`grid grid-cols-[1.4fr_1fr_1fr] items-center px-5 py-5 text-sm ${index === competitors.length - 1 ? 'bg-[#eef7e4]' : 'border-t border-[#edf1eb]'}`}><div className="flex items-center gap-2 font-bold text-[#315a44]"><span className={`flex size-7 items-center justify-center rounded-lg text-xs ${index === competitors.length - 1 ? 'bg-[#1b5e3e] text-white' : 'bg-[#edf2e9] text-[#789080]'}`}>{index === competitors.length - 1 ? "✦" : "○"}</span>{item.name}</div><span className="text-[#668072]">{item.strengths}</span><span className={`font-semibold ${item.missing ? 'text-[#9a6c58]' : 'text-[#4e8a43]'}`}>{item.missing || "Ninguno ✨"}</span></div>)}</div></div></section>

        <section id="planes" className="bg-[#1b5e3e] px-5 py-16 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#b8d98f]">Pequeños pasos, grandes cosechas</p><h2 className="mt-3 text-3xl font-bold tracking-[-.04em] sm:text-4xl">¿Listo para darle vida a tu rincón verde?</h2><p className="mt-3 text-white/70">Empieza gratis. Tu primer huerto puede estar listo en cinco minutos.</p></div><div className="flex flex-wrap items-center gap-4"><Link to="/auth" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d8efa7] px-6 py-3.5 text-sm font-bold text-[#1b5e3e] transition hover:-translate-y-0.5 hover:bg-[#e5f7c2]">Empezar mi huerto <ArrowRight size={17} /></Link><a href="/huertosolar.zip" download className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white/90 transition hover:border-white/60 hover:bg-white/10"><Download size={16} />Descargar el código</a></div></div></section>
      </main>
        <section className="border-y border-[#dfe9d9] bg-white/55 px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#6c9a52]">Más que un calendario</p><h2 className="mt-4 text-4xl font-bold tracking-[-.05em] text-[#183b2b] sm:text-5xl">Aprende de cada <span className="text-[#74a948]">cosecha.</span></h2><p className="mt-5 text-lg leading-8 text-[#648071]">Registra lo que funciona y huertosolar convierte tus observaciones en mejores decisiones para la próxima temporada.</p></div><div className="grid gap-3 sm:grid-cols-2">{[[BookOpen,"Diario de huerto","Fotos, notas y aprendizajes de cada cambio."],[ScanLine,"Diagnóstico visual","Detecta hojas enfermas y actúa antes de perder la planta."],[BarChart3,"Insights de temporada","Descubre qué cultivos crecen mejor en tu espacio y tus costos."],[Users,"Comunidad local","Comparte tu cosecha y aprende de jardineros cercanos."]].map(([Icon,title,text]) => { const FeatureIcon = Icon as typeof Leaf; return <div key={title as string} className="rounded-2xl border border-[#dce8d6] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(54,93,48,.08)]"><FeatureIcon className="text-[#5b914a]" size={21} /><h3 className="mt-4 text-sm font-bold text-[#315a44]">{title as string}</h3><p className="mt-1.5 text-xs leading-5 text-[#7e9687]">{text as string}</p></div>; })}</div></div></section>
      <footer className="bg-[#f5f7ed] px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#7a9181] sm:flex-row"><div className="flex items-center gap-2 font-bold text-[#315a44]"><span className="flex size-7 items-center justify-center rounded-lg bg-[#1b5e3e] text-white"><Leaf size={14} /></span>huertosolar</div><span>Hecho para gente con las manos en la tierra.</span><span>© 2025 huertosolar</span></div>
			<p style={{ fontSize: "0.75rem", opacity: 0.7, margin: "0.5rem 0 0" }}>
				<small>Web creada por <a href="https://www.sur-digital.com/" rel="noopener">Sur Digital</a></small>
			</p>
</footer>
    </div>
  );
}
