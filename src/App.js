import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Tours />
			<About />
			<Footer />
		</>
	);
}

export default App;
