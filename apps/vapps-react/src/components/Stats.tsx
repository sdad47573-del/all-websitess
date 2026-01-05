import { twJoin, twMerge } from 'tailwind-merge';

interface StatsItem {
	label: string;
	value: string | number;
	icon: string;
	color: string;
	isTotal?: boolean;
}

interface StatsProps {
	title?: string;
	items: StatsItem[];
}

export default function Stats({ title = 'Resumen y Estadísticas', items }: StatsProps) {
	return (
		// sacar el borde de color fuera
		<div className="bg-base-100/60 dark:bg-base-100/80 relative overflow-hidden p-6 backdrop-blur-md rounded-3xl border border-transparent dark:border-base-content/5">
			{/* <div className=" bg-white/30"> */}
			<div className="from-primary/50 via-secondary/50 to-primary/50 absolute top-0 left-0 h-1 w-full bg-linear-to-r" />

			<h2 className="text-base-content mb-6 flex items-center gap-3 text-xl font-extrabold tracking-tight">
				<div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg shadow-inner">
					<i className="ri-dashboard-line text-primary text-lg"></i>
				</div>
				{title}
			</h2>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
				{items.map((item) => {
					return (
						<div
							key={item.label}
							// className="border border-white/50 bg-white/80 p-5 shadow-sm hover:bg-white hover:shadow-xl"
							className="group border-base-200 bg-base-100 hover:bg-base-100 relative flex flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-base-content/10"
						>
							<div className="flex items-center justify-between">
								<div className="flex flex-col gap-1">
									<p className="text-base-content/60 text-sm font-medium tracking-wider uppercase">
										{item.label}
									</p>
									<p className="text-base-content text-3xl font-black tabular-nums">{item.value}</p>
								</div>

								<div
									className={twMerge(
										'flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12',
										item.color,
									)}
								>
									<i className={twJoin('text-2xl text-white drop-shadow-md', item.icon)} />
								</div>
							</div>

							{item.isTotal && (
								<div className="bg-base-200 mt-4 h-1 w-full overflow-hidden rounded-full">
									<div className="bg-primary h-full w-2/3 animate-pulse transition-all duration-1000 ease-out" />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
