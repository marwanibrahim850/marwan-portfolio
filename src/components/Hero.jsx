import React from 'react';
import profileImage from '../assets/WhatsApp Image 2026-09-07 at 5.11.17 AM.jpeg';

const Hero = () => {
  const handleScroll = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-155 md:min-h-170 flex items-center justify-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16 md:pt-28 md:pb-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Marwan Ibrahim
              </span>
            </h1>

            <h2 className="text-xl md:text-3xl text-gray-300 mb-5 font-semibold leading-snug">
              Full Stack Web Developer
            </h2>

            <p className="max-w-xl text-base md:text-lg text-gray-400 mb-7 leading-relaxed">
              I build modern, responsive websites and web applications using React, JavaScript, PHP, and MySQL. 
              With expertise in both frontend and backend development, I create scalable solutions that deliver 
              exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScroll('projects')}
                className="btn btn-primary bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transform transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="btn btn-outline border-2 border-blue-500 text-blue-400 hover:bg-blue-600/20 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/marwanibrahim850"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
                aria-label="GitHub"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/marwan-ibrahim-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
                aria-label="LinkedIn"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="mailto:marwan.ibrahim850@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
                aria-label="Email"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="slide-right flex justify-center md:justify-end">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96">
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-blue-500/30 to-cyan-500/20 blur-3xl animate-pulse"></div>
              <div className="relative h-full overflow-hidden rounded-3xl border border-blue-400/40 bg-slate-800 shadow-2xl shadow-blue-950/50">
                <img
                  src={profileImage}
                  alt="Marwan Ibrahim"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
