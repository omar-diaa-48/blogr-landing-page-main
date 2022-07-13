import AnimatedImage from "./shared/AnimatedImage";

export default function InfrastructureSection() {

	return (
		<section className="flex flex-col items-center relative infrastructure-section-background px-48 mt-32 mb-32 text-white">
			<AnimatedImage
				src="images/illustration-phones.svg"
				alt="art-infrastructure"
				className="block max-w-lg xl:absolute xl:left-24 xl:-top-24 opacity-90"
				variants={{
					initial: { opacity: 0, translateY: "100px" },
					animated: { opacity: 1, translateY: 0, }
				}}
				duration={1}
			/>

			<div className="flex flex-col items-center xl:items-end text-center xl:mt-24 mb-24">
				<h3 className="text-3xl mb-8 xl:w-1/2">
					State of the Art Infrastructure
				</h3>
				<p className="xl:w-1/2">
					With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
					This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
				</p>
			</div>
		</section>
	)
}