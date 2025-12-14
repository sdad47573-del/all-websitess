type BeneficioItemProps = {
	fecha: string;
	eur: number;
	label: string;
};

export const BeneficioItem = ({ label, fecha, eur }: BeneficioItemProps) => {
	return (
		<li className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
			<div>
				<h3 className="text-lg font-bold text-teal-700">{label}</h3>
				<p className="text-sm text-gray-500">{new Date(fecha).toLocaleDateString()}</p>
			</div>
			<div className="text-right">
				<span className={`text-lg font-bold ${eur >= 0 ? 'text-green-600' : 'text-red-600'}`}>
					{eur > 0 ? '+' : ''}
					{eur} €
				</span>
			</div>
		</li>
	);
};
