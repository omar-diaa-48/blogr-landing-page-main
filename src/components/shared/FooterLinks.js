export default function FooterLinks({ links }) {
	return (
		<div className="flex flex-col">
			{links.map(link => (<a key={link.to} href={link.to} className="hover:text-red-200" >{link.title}</a>))}
		</div>
	)
}