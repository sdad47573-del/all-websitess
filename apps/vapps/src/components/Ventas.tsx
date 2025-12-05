import React, { useEffect, useState } from 'react';
import { getAllSales } from '../services/sales.service';
import { imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';

// Type definitions
type Item = {
	id: number;
	title: string;
};

type Sale = {
	id: number;
	item_id: number;
	items: Item;
	amount: number;
	price_per_unit: number;
	payment?: number;
	concept?: string;
	created_at: string;
};

const formatDate = (dateString: string): string => {
	if (!dateString) return 'N/A';
	const date = new Date(dateString);
	return date.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
};

export default function Ventas() {
	const [sales, setSales] = useState<Sale[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadSales = async () => {
			try {
				const { data, error } = await getAllSales();
				if (error) throw error;
				setSales((data || []) as Sale[]);
			} catch (err: any) {
				setError(err.message || 'Error desconocido');
			} finally {
				setLoading(false);
			}
		};

		loadSales();
	}, []);

	const totalCalculated = sales.reduce(
		(total, sale) => total + sale.price_per_unit * sale.amount,
		0,
	);
	const totalReceived = sales.reduce((total, sale) => total + (sale.payment || 0), 0);

	return (
		<main className="">
			{/* Stats Section */}
			<div
				id="stats-container"
				className={`transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
			>
				<div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
					<div className="rounded-lg bg-blue-500 p-6 text-white shadow-lg">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm opacity-90">Calculo Total</p>
								<p className="text-3xl font-bold">{totalCalculated.toFixed(2)}€</p>
							</div>
							<i className="ri-shopping-cart-line text-4xl opacity-75"></i>
						</div>
					</div>
					<div className="rounded-lg bg-green-500 p-6 text-white shadow-lg">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm opacity-90">Cobrado Total</p>
								<p className="text-3xl font-bold">{totalReceived.toFixed(2)}€</p>
							</div>
							<i className="ri-money-euro-circle-line text-4xl opacity-75"></i>
						</div>
					</div>
				</div>
			</div>

			<div className="p-5">
				<h2 className="mb-4 text-xl font-semibold">Historial de Ventas</h2>
			</div>

			{/* Loading State */}
			{loading && (
				<div className="mx-5 rounded-lg bg-blue-50 p-8 text-center">
					<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
					<p className="mt-4 text-blue-700">Cargando ventas...</p>
				</div>
			)}

			{/* Error State */}
			{error && (
				<div className="mx-5 rounded-lg bg-red-100 p-4 text-red-700">
					<p>{`Error al cargar las ventas: ${error}`}</p>
				</div>
			)}

			{/* Empty State */}
			{!loading && !error && sales.length === 0 && (
				<div className="mx-5 rounded-lg bg-gray-100 p-8 text-center text-gray-600">
					No hay ventas registradas
				</div>
			)}

			{/* Sales List */}
			{!loading && !error && sales.length > 0 && (
				<ul className="space-y-4 px-5 pb-5">
					{sales.map((sale) => {
						const total = (sale.price_per_unit * sale.amount).toFixed(2);
						const imageSrc = imageMap[sale.items.title] || '';
						const translatedTitle = translateItem(sale.items.title);

						return (
							<li key={sale.id} className="rounded-lg bg-white p-4 shadow-md">
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-between border-b border-gray-200 pb-2">
										<h3 className="text-lg font-bold text-teal-700">Venta #{sale.id}</h3>
										<span className="text-sm text-gray-500">{formatDate(sale.created_at)}</span>
									</div>

									<div className="mb-3 max-w-3xs">
										<p className="mb-2 text-xs text-gray-500">Producto</p>
										<div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
											{imageSrc && (
												<img
													src={imageSrc.src}
													alt={translatedTitle}
													className="h-12 w-12 rounded object-cover"
												/>
											)}
											<div className="flex-1">
												<p className="font-medium text-gray-900">{translatedTitle}</p>
												<p className="text-sm text-gray-500">Cantidad: {sale.amount}</p>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
										<div>
											<p className="text-xs text-gray-500">Precio Unitario</p>
											<p className="font-semibold text-gray-900">{sale.price_per_unit}€</p>
										</div>
										<div>
											<p className="text-xs text-gray-500">Cantidad</p>
											<p className="font-semibold text-gray-900">{sale.amount}</p>
										</div>
										<div>
											<p className="text-xs text-gray-500">Total</p>
											<p className="font-semibold text-teal-600">{total}€</p>
										</div>
									</div>

									{sale.concept && (
										<div className="mt-2">
											<p className="text-xs text-gray-500">Concepto</p>
											<p className="text-sm text-gray-700">{sale.concept}</p>
										</div>
									)}

									{sale.payment !== undefined && sale.payment !== null && (
										<div className="mt-2 rounded-md bg-green-50 p-2">
											<p className="text-xs text-gray-500">Pago Recibido</p>
											<p className="font-semibold text-green-700">{sale.payment}€</p>
										</div>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</main>
	);
}
