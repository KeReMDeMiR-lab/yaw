import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import GpaCalculator from "./components/GpaCalculator"
import gsap from "gsap"
import { useState } from "react"

type Faculty = "engineering" | "law" | "medicine" | "business"

gsap.registerPlugin(ScrollTrigger, SplitText)
function App() {
  const [faculty, setFaculty] = useState<Faculty>("engineering");

  return (
    <>
      <main>
        <Navbar activeFaculty={faculty} onChange={setFaculty} />
        <GpaCalculator/>
      </main>
    </>
  )
}

export default App
