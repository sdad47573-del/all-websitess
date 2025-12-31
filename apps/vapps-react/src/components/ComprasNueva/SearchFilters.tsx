import { Input } from '@react-components';
import type { Database } from 'supabase-sdk';

type BrandRow = Database['public']['Tables']['brands']['Row'];

interface SearchFiltersProps {
	searchTerm: string;
	onSearchChange: (value: string) => void;
	brands: BrandRow[];
	selectedBrand: string;
	onBrandChange: (value: string) => void;
}

export const SearchFilters = ({
	searchTerm,
	onSearchChange,
	brands,
	selectedBrand,
	onBrandChange,
}: SearchFiltersProps) => {
	return (
		<div className="border-base-300 rounded-xl border p-4">
			<h3 className="mb-3 text-lg font-bold">Buscar productos</h3>
			<div className="flex flex-col gap-3 sm:flex-row">
				<Input
					label="Buscar"
					placeholder="Nombre del producto"
					leftIconClass="ri-search-line"
					value={searchTerm}
					onChange={(e: any) => onSearchChange(e.target.value)}
				/>
				<select
					className="select select-bordered w-full sm:max-w-xs"
					value={selectedBrand}
					onChange={(e) => onBrandChange(e.target.value)}
				>
					<option value="">Todas las marcas</option>
					{brands?.map((b) => (
						<option key={b.id} value={b.name}>
							{b.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};
