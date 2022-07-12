export default function AuthLink({ className, title }) {
	return (
		<div className={`hidden lg:block mr-4 ${className}`}>
			<button>{title}</button>
		</div>
	)
}