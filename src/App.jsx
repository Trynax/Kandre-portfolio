import Header from "./components/Header"
import HeroSec from "./components/HeroSec"
import AboutMe from "./components/AboutMe"
import ProfessionalExperience from "./components/ProfesionalExperience"
import Portfolio from "./components/Portfolio"
import ContactMe from "./components/ContactMe"
function App() {
  return (
    <div className="font-playfair bg-white min-h-screen relative pt-20">
      <Header />
      <main className="flex flex-col gap-20">
        <HeroSec />
        <AboutMe />
        <ProfessionalExperience />
        <Portfolio />
        <ContactMe />
      </main>
    </div>
  )
}

export default App
