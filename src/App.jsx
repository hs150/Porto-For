import './index.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Product from "./components/ThreeD.jsx"
import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all";
import VideoImplementer from "./components/three/VideoImplementer.jsx";

gsap.registerPlugin(ScrollTrigger)
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Product />
            <VideoImplementer />
        </main>
          )
}
export default App