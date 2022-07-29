import DesignSection from "./components/DesignSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import InfrastructureSection from "./components/InfrastructureSection";

function App() {
	return (
		<div className="overflow-hidden">

			<Header />

			<DesignSection />

			<InfrastructureSection />

			<InfoSection />

			<Footer />

		</div>
	);
}

export default App;
