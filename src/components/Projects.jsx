import React, { useEffect, useState } from 'react';

const Projects = () => {
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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: 'Dar Estate',
      description: 'Real estate website with a modern responsive interface. Showcase properties with stunning visuals and smooth navigation.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://marwanibrahim850.github.io/dar-estate/',
      githubUrl: '#',
      image: '🏠',
    },
    {
      title: 'Senarty Website',
      description: 'Responsive business website with a clean user interface. Professional design for showcasing services and client portfolio.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: 'https://senarty.infinityfree.io',
      githubUrl: '#',
      image: '💼',
    },
    {
      title: 'Project Manager',
      description: 'React application for managing tasks and projects efficiently. Features include task creation, status tracking, and data persistence.',
      technologies: ['React', 'JavaScript', 'CSS'],
      liveUrl: 'https://marwanibrahim850.github.io/project-manger/',
      githubUrl: '#',
      image: '📋',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-linear-to-b from-slate-900 to-slate-800 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">Check out some of my recent work</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group card h-full flex flex-col bg-linear-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-blue-500/50 card-hover overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project image/placeholder */}
                <div className="relative w-full h-44 shrink-0 bg-linear-to-br from-blue-600/30 to-cyan-600/30 flex items-center justify-center overflow-hidden mb-4 rounded-lg">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent"></div>
                </div>

                {/* Project content */}
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs text-blue-300 hover:bg-blue-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 group/btn"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 group/btn"
                    >
                      <span>Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/marwanibrahim850"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span>View All Projects on GitHub</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
