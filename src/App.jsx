import Header from "./components/Header"
import HeroSec from "./components/HeroSec"
import AboutMe from "./components/AboutMe"
function App() {
  return (
    <div className="font-playfair bg-white min-h-screen relative py-20">
      <Header />
      <main className="flex flex-col gap-20">
        <HeroSec />
        <AboutMe />
      </main>
    </div>
  )
}

export default App
