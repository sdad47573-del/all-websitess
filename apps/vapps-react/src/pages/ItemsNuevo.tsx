import { PageLayout } from '../components/PageLayout';
import { SectionHeader } from '../components/SectionHeader';
import { ItemForm } from '../components/ItemsNuevo/ItemForm';

export const ItemsNuevo = () => {
	return (
		<PageLayout>
			<div className="p-5">
				<SectionHeader title="Añadir nuevo producto" subtitle="Crea un item para el inventario" />
				<ItemForm />
			</div>
		</PageLayout>
	);
};

