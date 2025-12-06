export default function Logo() {
	return (
		<div className="flex items-center gap-2">
			<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
				<span className="text-xl font-bold text-white">V</span>
			</div>
			<span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-xl font-bold text-transparent">
				Vapps
			</span>
		</div>
	);
}
