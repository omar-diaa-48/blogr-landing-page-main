import Logo from "../images/logo.svg";
import FooterLinks from "./shared/FooterLinks";


export default function Footer() {
	return (
		<footer className="footer-background">
			<div className="footer-section">
				<div className="flex flex-col lg:flex-row justify-between mt-12 h-32 font-ubuntu mb-16">
					<div className="mr-4 lg:flex-grow-0">
						<img alt="Logo" src={Logo} />
					</div>

					<div className="flex flex-col">
						<p className="mb-8">Product</p>
						<FooterLinks links={[
							{ title: "Overview", to: "overview" },
							{ title: "Pricing", to: "pricing" },
							{ title: "Marketplace", to: "marketplace" },
							{ title: "Features", to: "features" },
							{ title: "Integrations", to: "integrations" }
						]} />
					</div>

					<div className="flex flex-col">
						<p className="mb-8">Company</p>
						<div className="flex flex-col">
							<FooterLinks links={[
								{ title: "About", to: "about" },
								{ title: "Blog", to: "team" },
								{ title: "Careers", to: "careers" },
							]} />
						</div>
					</div>

					<div className="flex flex-col">
						<p className="mb-8">Connect</p>
						<div className="flex flex-col">
							<FooterLinks links={[
								{ title: "Contact", to: "contact" },
								{ title: "Newsletter", to: "newsletter" },
								{ title: "Linkedin", to: "linkedin" },
							]} />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}