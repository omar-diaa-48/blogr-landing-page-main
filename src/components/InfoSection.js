import AnimatedImage from "./shared/AnimatedImage";

export default function InfoSection() {

	return (
		<section className="flex flex-col justify-center items-center relative text-primary-very-dark-blue mt-64 mb-32 px-12 lg:px-48">

			<div className="flex flex-col lg:flex-row items-start lg:justify-end">
				<AnimatedImage
					src="images/illustration-editor-desktop.svg"
					alt="designed-for-future"
					className="block max-w-2xl lg:absolute lg:-left-24 lg:-top-24 my-8 lg:my-0 opacity-90"
					variants={{
						initial: { opacity: 0, translateX: "-100px" },
						animated: { opacity: 1, translateX: 0, }
					}}
					duration={1}
				/>

				<div className="flex flex-col items-start text-center lg:text-left lg:w-1/2">
					<h3 className="text-2xl mb-8">
						Introducing an extensible editor
					</h3>
					<p className="mb-16">
						Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
						The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
						videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
						change the looks of a blog.
					</p>
					<h3 className="text-2xl mb-8">
						Robust content management
					</h3>
					<p>
						Flexible content management enables users to easily move through posts. Increase the usability of your blog
						by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
					</p>
				</div>
			</div>

		</section>
	)
}