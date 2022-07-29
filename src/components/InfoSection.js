import AnimatedImage from "./shared/AnimatedImage";

export default function InfoSection() {

	return (
		<section className="flex flex-col justify-center items-center relative text-primary-very-dark-blue mt-12 lg:mt-64 mb-32 px-12 lg:px-48">

			<div className="flex flex-col lg:flex-row items-start lg:justify-end">
				<AnimatedImage
					src="images/illustration-laptop-desktop.svg"
					alt="designed-for-future"
					className="block lg:absolute lg:-left-96 xl:-left-48 lg:-top-24 my-8 lg:my-0 opacity-90"
					variants={{
						initial: { opacity: 0 },
						animated: { opacity: 1 }
					}}
					duration={1}
				/>

				<div className="flex flex-col items-start text-center lg:text-left lg:w-1/2">
					<h3 className="text-2xl mb-8">
						Free, open, simple
					</h3>
					<p className="mb-16">
						Blogr is a free and open source application backed by a large community of helpful developers. It supports
						features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
						and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
					</p>
					<h3 className="text-2xl mb-8">
						Powerful tooling
					</h3>
					<p>
						Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
						capable of producing even the most complicated sites.
					</p>
				</div>
			</div>

		</section>
	)
}