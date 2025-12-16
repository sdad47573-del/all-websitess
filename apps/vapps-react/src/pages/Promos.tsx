// import BOLERO from '@assets/VAPS/promos/bolero.jpg';
import SUPER from '@assets/VAPS/promos/super.jpg';

import { twJoin } from 'tailwind-merge';
import { Link } from 'wouter';
import { useGetAllItems } from '../hooks';
import Logo from '../layouts/Logo';

export const Promos = () => {
	const { data: stock } = useGetAllItems();

	return (
		<main
			className="flex h-[100dvh] flex-col gap-4 px-4 py-6"
			style={{
				backgroundImage: `url(${SUPER})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className="relative flex items-center justify-between gap-2">
				<Link to="/" className="items">
					<Logo />
				</Link>
				<div className="absolute top-0 right-0 bottom-0 left-1/2 -translate-x-1/2">
					<h2 className="self-center text-2xl">15.000 Caladas</h2>
				</div>
			</div>
			<div className="flex justify-between">
				{/* <div className="fl flex items-end gap-2"> */}
				<div className="flex items-center gap-2">
					<h2 className="text-lg font-semibold">
						<span className="text-xl">@_chorii9</span> 10x1 18x2
					</h2>
				</div>
				<div className="flex items-center gap-2">
					{/* <img src={BOLERO} className="w-8 rounded-full" />
					<h2 className="font-semibold">12x1 20x2</h2> */}
				</div>
				{/* </div> */}
			</div>
			<div className="bg-base-100/40 mt-auto self-center rounded p-4 px-4 text-center font-bold backdrop-blur-xs">
				{/* <main className="relative">
			<img src={SUPER} className="absolute" />
			<div className="z-10 px-4 text-center relative"> */}
				{stock?.map((item, idx) => (
					//  src, title, price, onClick
					<div>
						<p
							className={twJoin(
								'text-sm',
								item.amount <= 0 && 'text-red-500 line-through',
								// item.amount <= 0 && 'text-[9px] text-red-500 line-through',
							)}
						>
							{idx + 1} {item.title}
						</p>
					</div>
				))}
			</div>

			{/* <VapList items={stock as any} isLoading={isLoading} /> */}
		</main>
	);
};
