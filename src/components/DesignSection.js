import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function DesignSection() {
	const variants = {
		hidden: { opacity: 0, translateX: "100px" },
		visible: { opacity: 1, translateX: 0, },
	};

	const ref = useRef(null);
	const controls = useAnimation();
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<section className="flex flex-col justify-center items-center relative text-primary-very-dark-blue mt-32 mb-16 px-48">

			<h2 className="text-4xl lg:mb-32 text-center">Designed for the future</h2>

			<div className="flex flex-col lg:flex-row items-start lg:items-center">
				<motion.img
					ref={ref}
					animate={controls}
					transition={{ duration: 1 }}
					initial="hidden"
					className="block lg:absolute lg:-right-96 lg:-top-24 my-8 lg:my-0 opacity-90"
					variants={variants}
					src="images/illustration-editor-desktop.svg"
					alt="designed-for-future" />

				<div className="flex flex-col text-center lg:text-left lg:w-1/2">
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