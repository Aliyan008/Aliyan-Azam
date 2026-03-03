import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
