export interface SelectedItem {
	item_id: number;
	title: string;
	quantity: number;
}

export interface SelectedItemsListProps {
	selected: SelectedItem[];
	onRemove: (id: number) => void;
	quantityLabel?: string;
	removeLabel?: string;
}

export const SelectedItemsList = ({
	selected,
	onRemove,
	quantityLabel = 'Cantidad:',
	removeLabel = 'Quitar',
}: SelectedItemsListProps) => {
	if (selected.length === 0) return null;

	return (
		<div className="mt-4">
			<ul className="divide-base-300 border-base-300 divide-y rounded-lg border">
				{selected.map((s) => (
					<li key={s.item_id} className="flex items-center justify-between p-3">
						<div>
							<p className="font-medium">{s.title}</p>
							<p className="text-base-content/60 text-sm">
								{quantityLabel} {s.quantity}
							</p>
						</div>
						<button
							type="button"
							className="btn btn-ghost btn-sm text-error"
							onClick={() => onRemove(s.item_id)}
						>
							<i className="ri-delete-bin-6-line"></i>
							{removeLabel}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
