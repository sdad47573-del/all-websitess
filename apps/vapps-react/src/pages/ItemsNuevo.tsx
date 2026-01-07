import { PageLayout, SectionHeader } from '@react-components';
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
