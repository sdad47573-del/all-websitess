interface AddItemsProps {
	items: { id: number; title: string }[];
	currentItemId: number | '';
	onItemIdChange: (id: number | '') => void;
	currentQty: number;
	onQtyChange: (qty: number) => void;
	onAdd: () => void;
}

export const AddItems = ({
	items,
	currentItemId,
	onItemIdChange,
	currentQty,
	onQtyChange,
	onAdd,
}: AddItemsProps) => {
	return (
		<div className="border-base-300 rounded-xl border p-4">
			<h3 className="mb-3 text-lg font-bold">Añadir items</h3>
			<div className="flex flex-col gap-3 sm:flex-row">
				<select
					className="select select-bordered w-full sm:max-w-xs"
					value={currentItemId}
					onChange={(e) => onItemIdChange(Number(e.target.value) || '')}
				>
					<option value="">Selecciona un item</option>
					{items.map((item) => (
						<option key={item.id} value={item.id}>
							{item.title}
						</option>
					))}
				</select>
				<input
					type="number"
					className="input input-bordered w-full sm:max-w-[140px]"
					placeholder="Cantidad"
					min={1}
					value={currentQty}
					onChange={(e) => onQtyChange(Number(e.target.value) || 1)}
				/>
				<button type="button" className="btn btn-primary" onClick={onAdd}>
					Añadir
				</button>
			</div>
		</div>
	);
};
