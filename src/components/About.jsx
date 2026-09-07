import React, { useEffect, useState } from 'react';
import profileImage from '../assets/WhatsApp Image 2026-09-07 at 5.11.17 AM.jpeg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-20 bg-linear-to-b from-slate-900 to-slate-800 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left side - Profile image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-4/5">
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-blue-500/30 to-cyan-500/20 blur-2xl"></div>
                <div className="relative h-full overflow-hidden rounded-3xl border border-blue-400/40 bg-slate-800 shadow-2xl shadow-blue-950/50">
                  <img
                    src={profileImage}
                    alt="Marwan Ibrahim"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right side - About text */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I am a Full Stack Web Developer specialized in building responsive and scalable web applications. 
                With a passion for clean code and modern development practices, I craft digital solutions that 
                combine aesthetic design with robust functionality.
              </p>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                My expertise spans across:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Frontend Development</h4>
                    <p className="text-gray-400">React, JavaScript, HTML, CSS, Tailwind CSS</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Backend Development</h4>
                    <p className="text-gray-400">PHP, MySQL, RESTful APIs, Database Design</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 mt-1">
                    <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Tools & Technologies</h4>
                    <p className="text-gray-400">Git, GitHub, Responsive Design, Web Optimization</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 pt-4">
                Whether you need a stunning landing page, a complex web application, or bug fixes and optimizations, 
                I'm here to bring your vision to life with professional, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
