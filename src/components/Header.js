import NavBar from "./NavBar";

export default function Header() {
	return (
		<section className="header-background">
			<div className="header-section">
				<NavBar />

				<div className="flex flex-col items-center">
					<h1 className="text-6xl mb-8">A modern publishing platform</h1>
					<p className="mb-12">Grow your audience and build your online brand</p>
					<div className="flex justify-center mb-32">
						<button className="bg-white text-primary-light-red mr-2 px-4 py-2 rounded-full">Start for Free</button>
						<button className="border border-white ml-2 px-4 py-2 rounded-full">Learn More</button>
					</div>
				</div>
			</div>

		</section>
	)
}