import NavBar from "./NavBar";

export default function Header() {
	return (
		<section className="header-background">
			<div className="header-section">
				<NavBar />

				<div className="flex flex-col items-center">
					<h1 className="text-6xl mb-8 text-center">A modern publishing platform</h1>
					<p className="mb-12">Grow your audience and build your online brand</p>
					<div className="flex flex-col gap-4 sm:flex-row justify-around lg:justify-center mb-32">
						<button className="bg-white text-primary-light-red px-4 py-2 rounded-full">Start for Free</button>
						<button className="border border-white px-4 py-2 rounded-full">Learn More</button>
					</div>
				</div>
			</div>

		</section>
	)
}