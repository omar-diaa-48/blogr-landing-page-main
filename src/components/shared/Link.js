export default function Link({ className, title }) {
	return (
		<div className={`hidden lg:flex items-center mr-4 ${className}`}>
			<button className="mr-2">{title}</button>
			<svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" strokeWidth="2" opacity=".75" d="M1 1l4 4 4-4" /></svg>
		</div>
	)
}