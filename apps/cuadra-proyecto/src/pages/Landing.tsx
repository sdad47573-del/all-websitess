import { motion } from 'framer-motion';
import {
	ArrowRight,
	CheckCircle2,
	ChevronRight,
	PieChart,
	ShieldCheck,
	Sparkles,
	TrendingUp,
	Wallet,
	Wallet2,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { CategoryBadge } from '@/components/expenses/CategoryBadge';

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const, },
	}),
};

const features = [
	{
		icon: Wallet2,
		title: 'Registra en segundos',
		body: 'Añade un gasto con cantidad, categoría y método de pago. Sin formularios eternos ni distracciones.',
	},
	{
		icon: PieChart,
		title: 'Visualiza por categoría',
		body: 'Descubre al instante en qué se va tu dinero con gráficos claros y resúmenes que cuentan una historia.',
	},
	{
		icon: TrendingUp,
		title: 'Sigue tu tendencia',
		body: 'Compara días y semanas para detectar patrones y anticipar el próximo mes con confianza.',
	},
	{
		icon: ShieldCheck,
		title: 'Privado y seguro',
		body: 'Tus datos viven en tu cuenta, aislados por usuario. Solo tú ves tus finanzas, siempre.',
	},
];

const steps = [
	{
		n: '01',
		title: 'Crea tu cuenta',
		body: 'Entra con tu correo y un código. Sin contraseñas que recordar.',
	},
	{
		n: '02',
		title: 'Añade tus gastos',
		body: 'Cada compra, cada café, cada suscripción. Categorízalos en un toque.',
	},
	{
		n: '03',
		title: 'Toma el control',
		body: 'Establece un presupuesto mensual y observa cómo las decisiones pequeñas suman.',
	},
];

export default function Landing() {
	const navigate = useNavigate();

	return (
		<div className="bg-background text-foreground selection:bg-primary/20 min-h-screen">
			{/* ============== NAV ============== */}
			<header className="bg-background/70 sticky top-0 z-30 border-b backdrop-blur-md">
				<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
					<a
						href="/"
						className="font-display flex items-center gap-2.5 text-lg font-semibold tracking-tight"
					>
						<span className="bg-primary text-primary-foreground ring-primary/30 grid size-8 place-items-center rounded-xl shadow-sm ring-1">
							<Wallet className="size-4" />
						</span>
						<span>
							Cu<span className="text-primary">·</span>adra
						</span>
					</a>

					<nav className="text-muted-foreground hidden items-center gap-8 text-sm md:flex">
						<a href="#features" className="hover:text-foreground transition">
							Funciones
						</a>
						<a href="#como-funciona" className="hover:text-foreground transition">
							Cómo funciona
						</a>
						<a href="#precios" className="hover:text-foreground transition">
							Precio
						</a>
					</nav>

					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="sm"
							className="hidden sm:inline-flex"
							onClick={() => navigate('/dashboard')}
						>
							Entrar
						</Button>
						<Button size="sm" className="gap-1.5 shadow-sm" onClick={() => navigate('/dashboard')}>
							Empezar gratis
							<ArrowRight className="size-4" />
						</Button>
					</div>
				</div>
			</header>

			{/* ============== HERO ============== */}
			<section className="relative overflow-hidden">
				<div className="grid-bg aurora absolute inset-0 -z-10" />
				<div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
					<div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
						<motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-xl">
							<div className="bg-card/70 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
								<Sparkles className="text-primary size-3.5" />
								Tu dinero, con claridad
							</div>

							<h1 className="font-display mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
								Toma el control de tus{' '}
								<span className="relative inline-block">
									<span className="text-primary relative z-10">gastos</span>
									<span className="bg-accent/70 absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm" />
								</span>{' '}
								en minutos.
							</h1>

							<p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed sm:text-lg">
								Cuadra transforma cada compra en información útil. Categoriza, visualiza y entiende
								tus hábitos financieros sin hojas de cálculo.
							</p>

							<div className="mt-8 flex flex-wrap items-center gap-3">
								<Button
									size="lg"
									className="ring-glow h-12 gap-2 px-6 shadow-sm"
									onClick={() => navigate('/dashboard')}
								>
									Empieza gratis
									<ArrowRight className="size-4" />
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="h-12 gap-2 px-6"
									onClick={() => {
										document
											.getElementById('como-funciona')
											?.scrollIntoView({ behavior: 'smooth' });
									}}
								>
									Ver cómo funciona
									<ChevronRight className="size-4" />
								</Button>
							</div>

							<ul className="text-muted-foreground mt-8 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
								{['Sin tarjeta de crédito', 'Datos privados', 'Configura en 30 segundos'].map(
									(t) => (
										<li key={t} className="flex items-center gap-1.5">
											<CheckCircle2 className="text-primary size-4" />
											{t}
										</li>
									),
								)}
							</ul>
						</motion.div>

						{/* Hero visual — fake dashboard card */}
						<motion.div
							initial={{ opacity: 0, y: 30, rotate: -1 }}
							animate={{ opacity: 1, y: 0, rotate: 0 }}
							transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const, }}
							className="relative"
						>
							<HeroPreview />
						</motion.div>
					</div>
				</div>
			</section>

			{/* ============== FEATURES ============== */}
			<section id="features" className="bg-background border-t">
				<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6 }}
						className="max-w-2xl"
					>
						<p className="text-primary text-sm font-medium tracking-wider uppercase">Funciones</p>
						<h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
							Diseñado para que gastar deje de ser un misterio.
						</h2>
						<p className="text-muted-foreground mt-4 text-base leading-relaxed">
							Cuatro pilares que te ayudan a entender tu dinero sin volverte contador.
						</p>
					</motion.div>

					<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{features.map((f, i) => (
							<motion.div
								key={f.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-80px' }}
								transition={{ duration: 0.5, delay: i * 0.07 }}
								className="group bg-card hover:border-primary/40 relative overflow-hidden rounded-2xl border p-6 transition hover:shadow-lg"
							>
								<div className="bg-primary/5 group-hover:bg-primary/10 absolute -top-10 -right-10 size-32 rounded-full transition" />
								<div className="relative">
									<div className="bg-primary/10 text-primary ring-primary/20 grid size-11 place-items-center rounded-xl ring-1">
										<f.icon className="size-5" />
									</div>
									<h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
									<p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{f.body}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ============== HOW IT WORKS ============== */}
			<section id="como-funciona" className="from-background to-muted/40 border-t bg-gradient-to-b">
				<div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.6 }}
						className="max-w-2xl"
					>
						<p className="text-primary text-sm font-medium tracking-wider uppercase">
							Cómo funciona
						</p>
						<h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
							Tres pasos. Sin ruidos.
						</h2>
					</motion.div>

					<div className="mt-12 grid gap-5 md:grid-cols-3">
						{steps.map((s, i) => (
							<motion.div
								key={s.n}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-80px' }}
								transition={{ duration: 0.5, delay: i * 0.08 }}
								className="bg-card relative rounded-2xl border p-7"
							>
								<span className="font-display text-primary/20 text-5xl font-semibold">{s.n}</span>
								<h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
								<p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.body}</p>
								{i < steps.length - 1 && (
									<ChevronRight className="text-muted-foreground/30 absolute top-7 right-6 size-5 md:hidden" />
								)}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ============== CATEGORIES SHOWCASE ============== */}
			<section className="bg-background border-t">
				<div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
					<div className="grid items-center gap-10 lg:grid-cols-2">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<p className="text-primary text-sm font-medium tracking-wider uppercase">
								Categorías
							</p>
							<h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
								Tus gastos, entendidos.
							</h2>
							<p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed">
								Cuadra clasifica tus movimientos en categorías claras para que sepas exactamente a
								dónde va cada euro.
							</p>
							<div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
								{[
									'comida',
									'transporte',
									'hogar',
									'entretenimiento',
									'salud',
									'compras',
									'servicios',
									'educacion',
									'viajes',
								].map((c) => (
									<CategoryBadge key={c} category={c} />
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, scale: 0.96 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7 }}
							className="relative"
						>
							<div className="bg-primary/5 absolute -inset-4 -z-10 rounded-3xl blur-2xl" />
							<div className="bg-card rounded-3xl border p-6 shadow-sm">
								<MiniBudget />
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* ============== PRICING ============== */}
			<section id="precios" className="bg-muted/30 border-t">
				<div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<p className="text-primary text-sm font-medium tracking-wider uppercase">Precio</p>
						<h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
							Gratis, siempre.
						</h2>
						<p className="text-muted-foreground mt-4 text-base leading-relaxed">
							Cuadra es una herramienta personal. No hay planes, no hay suscripciones. Creas tu
							cuenta y empiezas.
						</p>
						<Button
							size="lg"
							className="ring-glow mt-8 h-12 gap-2 px-7"
							onClick={() => navigate('/dashboard')}
						>
							Empieza gratis
							<ArrowRight className="size-4" />
						</Button>
					</motion.div>
				</div>
			</section>

			{/* ============== FOOTER ============== */}
			<footer className="bg-background border-t">
				<div className="text-muted-foreground mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
					<div className="font-display text-foreground flex items-center gap-2 font-medium">
						<span className="bg-primary text-primary-foreground grid size-7 place-items-center rounded-lg">
							<Wallet className="size-3.5" />
						</span>
						Cuadra
					</div>
					<p>Hecho con cuidado · Tus datos viven aislados por usuario, siempre privados.</p>
					<p>© {new Date().getFullYear()} Cuadra</p>
				</div>
			</footer>
		</div>
	);
}

/* ---------------- Hero preview (fake dashboard) ---------------- */
function HeroPreview() {
	return (
		<div className="relative">
			<div className="from-primary/20 via-chart-3/20 to-chart-2/20 absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br blur-2xl" />
			<div className="bg-card/80 rounded-3xl border p-5 shadow-2xl backdrop-blur">
				<div className="mb-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="size-2.5 rounded-full bg-rose-500/70" />
						<span className="size-2.5 rounded-full bg-amber-400/70" />
						<span className="size-2.5 rounded-full bg-emerald-500/70" />
					</div>
					<span className="text-muted-foreground text-xs">cuadra.app · Marzo</span>
				</div>
				<div className="grid gap-3">
					<div className="from-primary/10 via-primary/5 rounded-2xl border bg-gradient-to-br to-transparent p-4">
						<p className="text-muted-foreground text-xs">Gasto del mes</p>
						<p className="font-display text-3xl font-semibold tracking-tight">1.248,50 €</p>
						<div className="mt-3 flex items-center gap-2 text-xs">
							<span className="bg-primary/15 text-primary rounded-full px-2 py-0.5 font-medium">
								↓ 12% vs febrero
							</span>
							<span className="text-muted-foreground">Presupuesto 1.500 €</span>
						</div>
						<div className="bg-muted mt-4 h-1.5 overflow-hidden rounded-full">
							<motion.div
								initial={{ width: 0 }}
								animate={{ width: '83%' }}
								transition={{ duration: 1, delay: 0.4 }}
								className="bg-primary h-full rounded-full"
							/>
						</div>
					</div>

					<div className="grid gap-2">
						{[
							{ c: 'comida', label: 'Comida', amount: '412 €' },
							{ c: 'transporte', label: 'Transporte', amount: '186 €' },
							{ c: 'hogar', label: 'Hogar', amount: '320 €' },
							{ c: 'entretenimiento', label: 'Ocio', amount: '98 €' },
						].map((row, i) => (
							<motion.div
								key={row.c}
								initial={{ opacity: 0, x: -8 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5 + i * 0.08 }}
								className="bg-background/60 flex items-center justify-between rounded-xl border p-3"
							>
								<div className="flex items-center gap-3">
									<CategoryBadge category={row.c} compact />
									<span className="text-sm font-medium">{row.label}</span>
								</div>
								<span className="font-display text-sm font-semibold">{row.amount}</span>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

/* ---------------- Mini budget progress (showcase) ---------------- */
function MiniBudget() {
	const spent = 1248.5;
	const budget = 1500;
	const pct = Math.min(100, (spent / budget) * 100);
	return (
		<div>
			<div className="flex items-baseline justify-between">
				<p className="text-muted-foreground text-sm">Presupuesto de marzo</p>
				<p className="font-display text-2xl font-semibold">
					{spent.toLocaleString('es-ES', { maximumFractionDigits: 0 })} €
				</p>
			</div>
			<div className="bg-muted mt-3 h-3 overflow-hidden rounded-full">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${pct}%` }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, ease: 'easeOut' }}
					className="from-primary to-chart-3 h-full rounded-full bg-gradient-to-r via-emerald-400"
				/>
			</div>
			<p className="text-muted-foreground mt-2 text-xs">
				{pct.toFixed(0)}% utilizado · te quedan{' '}
				{(budget - spent).toLocaleString('es-ES', { maximumFractionDigits: 0 })} €
			</p>
		</div>
	);
}
