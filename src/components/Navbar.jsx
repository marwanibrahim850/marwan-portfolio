import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['Home', 'About', 'Skills', 'Projects', 'What I Do', 'Services', 'Contact'];

  const handleScroll = (section) => {
    const element = document.getElementById(section === 'What I Do' ? 'capabilities' : section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              MI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={`transition-all duration-300 font-medium ${
                  activeSection === (section === 'What I Do' ? 'capabilities' : section.toLowerCase())
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors ${
                  activeSection === (section === 'What I Do' ? 'capabilities' : section.toLowerCase())
                    ? 'text-blue-400 bg-slate-800'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-slate-800'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
