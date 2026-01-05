import { PageLayout } from '../components/PageLayout';
import { SectionHeader } from '../components/SectionHeader';
import { BrandForm } from '../components/MarcasModelos/BrandForm';
import { ModelForm } from '../components/MarcasModelos/ModelForm';

export const MarcasModelosNuevo = () => {
	return (
		<PageLayout>
			<div className="space-y-8 p-5">
				<SectionHeader
					title="Añadir marcas y modelos"
					subtitle="Crea marcas y modelos para organizar los productos"
				/>

				<div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
					<BrandForm />
					<ModelForm />
				</div>
			</div>
		</PageLayout>
	);
};

