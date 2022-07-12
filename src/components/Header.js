import NavBar from "./NavBar";

export default function Header() {
	return (
		<section className="header-section">

			<NavBar />

			<div className="flex flex-col items-center">
				<h1>A modern publishing platform</h1>
				<p>Grow your audience and build your online brand</p>
				<div className="flex justify-center">
					<button>Start for Free</button>
					<button>Learn More</button>
				</div>
			</div>

		</section>
	)
}