import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Loading complete after initial mount
    setIsLoading(false);
  }, []);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['projects', 'skills', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    {isLoading && <LoadingScreen />}
        <div className="bg-[#08090a] font-body-default text-[#e8e6df] antialiased architectural-grid min-h-screen selection:bg-[#ff4d00] selection:text-[#08090a] overflow-x-hidden">

      {/* Fixed Architectural Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Editorial Canvas */}
      <main className="w-full pt-20 bg-[#08090a]">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>

      {/* Monograph Footer */}
      <Footer />
    </div>
  );
}

export default App;
