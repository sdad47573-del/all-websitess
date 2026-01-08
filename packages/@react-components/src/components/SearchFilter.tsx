import { Input } from './Input';

export interface SearchFilterOption {
	label: string;
	value: string | number;
}

export interface SearchFilterProps {
	searchTerm: string;
	onSearchChange: (value: string) => void;
	options: SearchFilterOption[];
	selectedOption: string | number;
	onOptionChange: (value: string) => void;
	title?: string;
	searchLabel?: string;
	searchPlaceholder?: string;
	optionPlaceholder?: string;
}

export const SearchFilter = ({
	searchTerm,
	onSearchChange,
	options,
	selectedOption,
	onOptionChange,
	title = 'Buscar productos',
	searchLabel = 'Buscar',
	searchPlaceholder = 'Nombre del producto',
	optionPlaceholder = 'Todas las opciones',
}: SearchFilterProps) => {
	return (
		<div className="border-base-300 rounded-xl border p-4">
			{title && <h3 className="mb-3 text-lg font-bold">{title}</h3>}
			<div className="flex flex-col gap-3 sm:flex-row">
				<Input
					id="search-filter-input"
					label={searchLabel}
					placeholder={searchPlaceholder}
					leftIconClass="ri-search-line"
					value={searchTerm}
					onChange={(e: any) => onSearchChange(e.target.value)}
				/>
				<select
					className="select select-bordered w-full sm:max-w-xs"
					value={selectedOption}
					onChange={(e) => onOptionChange(e.target.value)}
				>
					<option value="">{optionPlaceholder}</option>
					{options.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
