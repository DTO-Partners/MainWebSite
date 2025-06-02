// components
import Navbar from "@components/NavBar"

// sections
import Hero from "@sections/Hero"
import About from "@sections/About";
import Values from "./sections/Values";

//i18next
import "@/lib/i18n";
import Markets from "./sections/Markets";
import GDPRModal from "./components/GDPRModal";
import IndustriesSection from "./sections/Industries";
import ApplyForm from "./sections/Apply";

function App() {

  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Hero/>
      <About/>
      <Values/>
      <Markets/>
      <GDPRModal/>
      <IndustriesSection/>
      <ApplyForm/>
    </div>
  )
}

export default App
