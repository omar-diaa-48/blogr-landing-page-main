import Logo from "../images/logo.svg"
import AuthLink from "./shared/AuthLink"
import BurgerMenuButton from "./shared/BurgerMenuButton"
import Link from "./shared/Link"

export default function NavBar() {
	return (
		<nav className="flex items-center h-32 font-ubuntu mb-16">

			<div className="mr-4 flex-grow lg:flex-grow-0">
				<img alt="Logo" src={Logo} />
			</div>

			<Link title="Product" />

			<Link title="Company" />

			<Link title="Connect" className="flex-grow" />

			<AuthLink title="Login" className="mr-4" />

			<AuthLink title="Sign Up" className="bg-white text-primary-light-red px-4 py-2 rounded-full" />

			<BurgerMenuButton />

		</nav>
	)
}