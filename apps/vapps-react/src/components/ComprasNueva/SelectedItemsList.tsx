interface SelectedItem {
	item_id: number;
	title: string;
	quantity: number;
}

interface SelectedItemsListProps {
	selected: SelectedItem[];
	onRemove: (id: number) => void;
}

export const SelectedItemsList = ({ selected, onRemove }: SelectedItemsListProps) => {
	if (selected.length === 0) return null;

	return (
		<div className="mt-4">
			<ul className="divide-base-300 border-base-300 divide-y rounded-lg border">
				{selected.map((s) => (
					<li key={s.item_id} className="flex items-center justify-between p-3">
						<div>
							<p className="font-medium">{s.title}</p>
							<p className="text-base-content/60 text-sm">Cantidad: {s.quantity}</p>
						</div>
						<button
							type="button"
							className="btn btn-ghost btn-sm text-error"
							onClick={() => onRemove(s.item_id)}
						>
							<i className="ri-delete-bin-6-line"></i>
							Quitar
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
