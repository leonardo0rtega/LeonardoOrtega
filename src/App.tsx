import { useState } from 'react'
import { useApp } from './context/AppContext.tsx'
import IntroAnimation from './components/IntroAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Workflow from './components/Workflow'
import Capabilities from './components/Capabilities'
import CVSection from './components/CVSection'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const { theme } = useApp()

  return (
    <div className={`min-h-screen bg-bg text-primary ${theme === 'dark' ? 'dark' : ''}`}>
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Workflow />
        <Capabilities />
        <CVSection />
      </main>
      <Footer />
    </div>
  )
}
