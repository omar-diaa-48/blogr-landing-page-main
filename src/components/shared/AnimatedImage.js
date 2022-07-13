import { motion, useAnimation, useInView } from "framer-motion";
import PropTypes from 'prop-types';
import { useEffect, useRef } from "react";

export default function AnimatedImage({ src, alt, className, variants, duration }) {
	const ref = useRef(null);
	const controls = useAnimation();
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			controls.start("animated");
		}
	}, [controls, inView]);

	return (
		<motion.img
			ref={ref}
			animate={controls}
			transition={{ duration }}
			initial="initial"
			className={className}
			variants={variants}
			src={src}
			alt={alt}
		/>
	)
}

AnimatedImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	variants: PropTypes.shape({
		initial: PropTypes.object,
		animated: PropTypes.object
	}),
	duration: PropTypes.number
}