import { VapListItem, SectionHeader } from '@react-components';
import { translateItem } from '../data/maps/spanish';


interface ProductInventoryProps {
    items?: any[] | null;
    title: string;
    subtitle?: string;
}
// TODO: src deberia de venir de supabase y quitar los mapas
export const ProductInventory = ({ items, title, subtitle }: ProductInventoryProps) => {
    return (
        <div className="mb-10">
            <SectionHeader title={title} subtitle={subtitle} />
            <div className="grid grid-cols-2 gap-3 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {items?.map((item) => (
                    <VapListItem
                        key={item.item_id}
                        id={item.item_id}
                        title={translateItem(item.title)}
                        src={item.image_url}
                        amount={item.total_quantity ?? item.total_buyed ?? 0}
                    />
                ))}
            </div>
        </div>
    );
};
