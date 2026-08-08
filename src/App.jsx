import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Splash from './components/Splash';
import { LenisProvider } from './lib/LenisProvider';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <LenisProvider>
      <div className="min-h-screen bg-cream text-ink">
        {!splashDone && <Splash onComplete={() => setSplashDone(true)} />}
        <Nav />
        <main className="pt-16">
          <Hero />
          <About />
          <WhatIDo />
          <Projects />
          <Experience />
          <Skills />
          <Certifications />
          <Footer />
        </main>
      </div>
    </LenisProvider>
  );
}

export default App;
