import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { VapListItem } from '@react-components';
import { Collapsible } from './Collapsible';
import { imageBrandMap, imageMap } from '@/data/maps/img';
import { translateItem } from '@/data/maps/spanish';
import type { SaleItemDetail, } from '@/hooks/useGetAllSalesGroupedByDate';
import { formatDate } from '@/utils/formatDate';

interface SaleCardProps {
    id: number;
    day: string;
    concept: string | null;
    total_amount: number;
    total_price: number;
    total_payment: number | null;
    items: SaleItemDetail[];
}


export const SaleCard = ({ concept, day, items, total_amount, total_payment, total_price }: SaleCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const total = total_price.toFixed(2);
    const pendingPayment = (total_payment ?? 0) - total_price;
    const isPending = pendingPayment < 0;

    return (
        <li className="rounded-lg bg-base-100 p-4 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex flex-col gap-2">
                <div
                    className="flex cursor-pointer select-none items-center justify-between border-b border-base-200 pb-2"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <h3 className="text-lg font-bold text-teal-700">
                        {concept ? concept : 'Sin concepto'}
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-base-content/60">{formatDate(day)}</span>
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
                        <p className="text-xs text-uppercase text-base-content/60 font-medium">Cantidad</p>
                        <p className="font-semibold text-base-content">{total_amount}</p>
                    </div>
                    <div>
                        <p className="text-xs text-uppercase text-base-content/60 font-medium">Total</p>
                        <p className="font-semibold text-primary">{total}€</p>
                    </div>

                    {total_payment !== undefined && total_payment !== null && (
                        <div
                            className={twJoin(
                                'rounded-md p-2 transition-colors',
                                isPending ? 'bg-error/10 text-error' : 'bg-success/10 text-success',
                            )}
                        >
                            <p className="text-xs font-medium opacity-80">
                                {isPending ? 'Pendiente de pago' : 'Pago Recibido'}
                            </p>
                            <p className="font-bold">
                                {isPending ? -pendingPayment : total_payment}€
                            </p>
                        </div>
                    )}
                </div>

                <Collapsible isOpen={isExpanded}>
                    <div className="mt-4 mb-2">
                        <p className="mb-3 text-xs uppercase font-bold text-base-content/70 tracking-wider">Productos</p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {items.map((item, index) => (
                                <div
                                    key={item.item_id}
                                    style={{
                                        transition: 'opacity 300ms ease, transform 300ms ease',
                                        transitionDelay: `${index * 50}ms`,
                                        opacity: isExpanded ? 1 : 0,
                                        transform: isExpanded ? 'translateY(0)' : 'translateY(4px)',
                                    }}
                                >
                                    <VapListItem
                                        id={item.item_id}
                                        title={translateItem(item.item_title)}
                                        src={
                                            item.brand === 'VAPSOLO'
                                                ? imageMap[item.item_title]
                                                : imageBrandMap[item.brand]
                                        }
                                        amount={item.amount}
                                        price={item.price_per_unit}
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
