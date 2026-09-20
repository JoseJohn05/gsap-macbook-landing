import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ProductViewer from './components/ProductViewer.jsx';
import Showcase from './components/Showcase.jsx';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/all";
import Footer from "./components/Footer.jsx";
import Features from "./components/Features.jsx";
import Highlights from "./components/Highlights.jsx";
import PerformanceSection from "./components/Performance.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero/>
            <ProductViewer/>
            <Showcase/>
            <PerformanceSection/>
            <Features/>
            <Highlights/>
            <Footer/>
        </main>
    )
}
export default App
