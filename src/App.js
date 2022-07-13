import DesignSection from "./components/DesignSection";
import Header from "./components/Header";
import InfrastructureSection from "./components/InfrastructureSection";

function App() {
	return (
		<div className="overflow-hidden">

			<Header />

			<DesignSection />

			<InfrastructureSection />

			<section></section>

			<footer></footer>

		</div>
	);
}

export default App;
