import './index.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Product from "./components/ThreeD.jsx"
import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Product />
        </main>
          )
}
export default App