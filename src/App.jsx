import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav />
      <main className="pt-16">
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
