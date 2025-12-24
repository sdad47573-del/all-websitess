import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { VapListItem } from '@react-components';
import { Collapsible } from './Collapsible';
import { translateItem } from '@/data/maps/spanish';
import { imageBrandMap, imageMap } from '@/data/maps/img';
import { formatDate } from '@/utils/formatDate';

interface BuyItem {
    id: string | number;
    title: string;
    brand: string;
    quantity: number;
}

interface BuyCardProps {
    fecha: string;
    eur: number;
    total: number;
    items: BuyItem[];
    label?: string;
    payed?: boolean;
    pending?: number;
}

export const BuyCard = ({ fecha, eur, total, items, label, payed, pending }: BuyCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const totalEur = eur.toFixed(2);

    return (
        <li className="rounded-lg bg-base-100 p-4 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex flex-col gap-2">
                <div
                    className="flex cursor-pointer select-none items-center justify-between border-b border-base-200 pb-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <h3 className="text-lg font-bold text-teal-700">
                        {label ? label : 'Compra de Productos'}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-base-content/60">{formatDate(fecha)}</span>
                        <i
                            className={twJoin(
                                'ri-arrow-down-s-line text-xl transition-transform',
                                isExpanded && 'rotate-180',
                            )}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    <div>
                        <p className="text-xs text-uppercase text-base-content/60 font-medium">Vapers</p>
                        <p className="font-semibold text-base-content">{total}</p>
                    </div>
                    <div>
                        <p className="text-xs text-uppercase text-base-content/60 font-medium">Inversión</p>
                        <p className="font-semibold text-primary">{totalEur}€</p>
                    </div>

                    {payed !== undefined && (
                        <div
                            className={twJoin(
                                'rounded-md p-2 transition-colors',
                                !payed ? 'bg-error/10 text-error' : 'bg-success/10 text-success',
                            )}
                        >
                            <p className="text-xs font-medium opacity-80">
                                {!payed ? 'Pendiente' : 'Pagado'}
                            </p>
                            <p className="font-bold">
                                {!payed && pending !== undefined ? pending.toFixed(2) : totalEur}€
                            </p>
                        </div>
                    )}
                </div>

                <Collapsible isOpen={isExpanded}>
                    <div className="mt-4 mb-2">
                        <p className="mb-3 text-xs uppercase font-bold text-base-content/70 tracking-wider">Productos</p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {items?.map((item, index) => (
                                <div
                                    key={item.id}
                                    style={{
                                        transition: 'opacity 300ms ease, transform 300ms ease',
                                        transitionDelay: `${index * 50}ms`,
                                        opacity: isExpanded ? 1 : 0,
                                        transform: isExpanded ? 'translateY(0)' : 'translateY(4px)',
                                    }}
                                >
                                    <VapListItem
                                        id={item.id as number}
                                        title={translateItem(item.title)}
                                        src={
                                            item.brand === 'VAPSOLO'
                                                ? imageMap[item.title]
                                                : imageBrandMap[item.brand]
                                        }
                                        amount={item.quantity}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Collapsible>
            </div>
        </li>
    );
};
