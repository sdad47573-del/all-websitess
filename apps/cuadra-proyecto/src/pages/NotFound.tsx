import { motion } from 'framer-motion';

export default function NotFound() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="flex min-h-screen flex-col"
		>
			{/* Main Content */}
			<div className="flex flex-1 flex-col items-center justify-center">
				<div className="relative mx-auto max-w-5xl px-4">
					<div className="flex min-h-[200px] items-center justify-center">
						<div className="text-center">
							<h1 className="mb-4 text-4xl font-bold text-gray-900">404</h1>
							<p className="text-lg text-gray-600">Page Not Found</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
