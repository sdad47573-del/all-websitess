import { twJoin } from 'tailwind-merge';

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
		<div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 shadow-sm">
			<h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-base-content">
				<i className="ri-dashboard-line text-teal-600"></i>
				{title}
			</h2>
			<div className="grid grid-cols-2 gap-3">
				{items.map((item) => {
					return (
						<div
							key={item.label}
							className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
						>
							<div className="mb-2 flex items-center gap-3">
								<div
									className={twJoin(
										'flex h-10 w-10 items-center justify-center rounded-lg',
										item.color,
									)}
								>
									<i className={twJoin('text-xl text-white', item.icon)} />
								</div>
							</div>
							<p className="mb-1 text-xs text-base-content/60">{item.label}</p>
							<p className="text-xl font-bold text-base-content">{item.value}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
