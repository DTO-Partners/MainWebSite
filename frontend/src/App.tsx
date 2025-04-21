// components
import Navbar from "@components/NavBar"

// sections
import Hero from "@sections/Hero"

//i18next
import "@/lib/i18n";

function App() {

  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
