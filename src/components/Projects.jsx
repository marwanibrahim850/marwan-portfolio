import React from 'react';

const projects = [
  { title: 'Dar Estate - Real Estate Website', type: 'Real estate platform', description: 'Responsive real estate website with a modern user interface for displaying properties and providing a smooth browsing experience.', technologies: ['HTML', 'CSS', 'JavaScript'], liveUrl: 'https://marwanibrahim850.github.io/dar-estate/', number: '01' },
  { title: 'Senarty - Business Website', type: 'Business website', description: 'Modern responsive business website designed with clean UI and optimized user experience.', technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], liveUrl: 'https://senarty.infinityfree.io', number: '02' },
  { title: 'Project Manager - React Application', type: 'Productivity application', description: 'Task management application built with React to organize and manage projects efficiently.', technologies: ['React.js', 'JavaScript', 'tailwindCSS'], liveUrl: 'https://marwanibrahim850.github.io/project-manger/', number: '03' },
];

const Projects = () => (
  <section id="projects" className="relative overflow-hidden bg-linear-to-b from-slate-900 to-slate-800 py-20 md:py-24">
    <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
    <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="slide-up text-center"><h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Featured Projects</h2><div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-blue-400 to-cyan-400" /><p className="mt-4 text-lg text-slate-400">A selection of websites and applications built for clear, useful experiences.</p></div>
      <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">{projects.map((project) => <article key={project.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-600 bg-linear-to-br from-slate-700 to-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-blue-950/50"><div className="relative flex h-36 items-end overflow-hidden bg-linear-to-br from-blue-600/40 via-slate-800 to-cyan-500/30 p-5"><span className="absolute right-5 top-4 text-5xl font-bold tracking-tighter text-white/10 transition-transform duration-500 group-hover:scale-125">{project.number}</span><span className="relative rounded-full border border-cyan-300/25 bg-slate-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">{project.type}</span></div><div className="flex grow flex-col p-6"><h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors group-hover:text-cyan-300">{project.title}</h3><p className="mb-5 grow text-sm leading-relaxed text-slate-300">{project.description}</p><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Technologies</p><div className="mb-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-md border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-200">{tech}</span>)}</div><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition-all hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20">View Live <span aria-hidden="true">↗</span></a></div></article>)}</div>
      <div className="mt-12 text-center"><a href="https://github.com/marwanibrahim850" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-blue-400/70 text-blue-300 hover:bg-blue-500/10">View All Projects on GitHub</a></div>
    </div>
  </section>
);

export default Projects;
