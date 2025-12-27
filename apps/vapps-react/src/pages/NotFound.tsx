import { Link } from 'wouter';

export const NotFound = () => {
	return (
		<div className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
			<div className="animate__animated animate__fadeInDown relative">
				<h1 className="text-primary/10 text-[12rem] leading-none font-black select-none">404</h1>
				<div className="absolute inset-0 flex items-center justify-center">
					<i className="ri-ghost-line text-primary animate-bounce text-8xl drop-shadow-2xl" />
				</div>
			</div>

			<div className="animate__animated animate__fadeInUp animate__delay-1s mt-8 max-w-md">
				<h2 className="text-base-content text-3xl leading-tight font-bold">
					¡Ups! Página No Encontrada
				</h2>
				<p className="text-base-content/60 mt-4 leading-relaxed">
					Parece que te has aventurado en un territorio desconocido. No te preocupes, incluso los
					mejores exploradores se pierden a veces.
				</p>

				<Link href="/">
					<button className="btn btn-primary btn-lg mt-10 gap-3 rounded-2xl px-8 shadow-xl transition-all hover:scale-105 active:scale-95">
						<i className="ri-home-4-line text-xl" />
						Volver al Inicio
					</button>
				</Link>
			</div>

			{/* Subtle background element */}
			<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-20">
				<div className="bg-primary/20 absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
				<div className="bg-secondary/20 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-[120px]" />
			</div>
		</div>
	);
};
