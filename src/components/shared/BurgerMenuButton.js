import { useState } from "react";

export default function BurgerMenuButton() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prevValue) => !prevValue)
	}

	return (
		<div className="lg:hidden relative py-3 sm:max-w-xl mx-auto">
			<button className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onClick={handleClick}>
				<span className="sr-only">Open main menu</span>
				<div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
					<span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}></span>
					<span className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${isOpen && "opacity-0"}`}></span>
					<span className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}></span>
				</div>
			</button>
		</div>
	)
}