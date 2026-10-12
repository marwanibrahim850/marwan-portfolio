import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-margin md:px-margin-desktop py-space-xl bg-[#08090a] border-b border-[#222326]"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#222326] pb-6">
          <div className="space-y-1.5">
            <div className="font-mono-telemetry text-[11px] text-[#ff4d00] uppercase font-bold tracking-widest">
              [ SELECTED WORK // PRODUCTION &amp; CLIENT DOSSIERS ]
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#e8e6df]">
              SELECTED PROJECTS
            </h2>
            <p className="font-body-default text-sm sm:text-base text-[#c8c6c0] max-w-2xl font-light">
              Selected web applications built with React, JavaScript, PHP, and MySQL. Follow the source and live-demo links for each project.
            </p>
          </div>

          <div className="font-mono-telemetry text-[11px] text-[#8d7168] md:text-right uppercase">
            <span>INDEX: 03 CURATED BUILDS</span>
            <br />
          </div>
        </div>

        {/* Curated Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
