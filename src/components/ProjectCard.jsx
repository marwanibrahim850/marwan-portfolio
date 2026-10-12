export const ProjectCard = ({ project }) => (
  <article id={`project-${project.id}`} className="bg-[#0f1012] p-4 md:p-6 border border-[#222326]">
    <div className="flex flex-wrap items-center justify-between gap-2 font-mono-telemetry text-[11px] bg-[#161719] px-4 py-2 text-[#c8c6c0] uppercase border-l-2 border-[#ff4d00]">
      <span className="text-[#ffb59e] font-bold">Project // {project.number}</span>
      <span className="text-[#e8e6df] font-semibold">{project.shortTitle}</span>
      <span className="text-[#ffb59e] font-semibold">{project.status}</span>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
      <div className="lg:col-span-8 bg-[#161719] p-5 border border-[#222326] space-y-4">
        <div className="flex items-center justify-between font-mono-telemetry text-[11px] text-[#8d7168] uppercase">
          <span>{project.category}</span>
          <span className="text-[#ffb59e]">{project.discipline}</span>
        </div>
        <h3 className="font-headline text-xl sm:text-2xl uppercase text-[#e8e6df] leading-tight font-bold">{project.title}</h3>
        <div className="space-y-2 text-sm text-[#bab8b2] font-light leading-relaxed">
          <p><strong className="text-[#e8e6df] font-medium">Overview: </strong>{project.problem}</p>
          <p><strong className="text-[#e8e6df] font-medium">Implementation: </strong>{project.solution}</p>
        </div>
        <div className="space-y-1.5 font-mono-telemetry text-[11px] pt-1">
          <div className="text-[#8d7168] uppercase font-semibold">[ Implemented features ]</div>
          {project.keyFeatures.map((feature) => (
            <div key={feature} className="text-[#e8e6df] flex items-start gap-1.5 leading-snug"><span className="text-[#ff4d00]">•</span><span>{feature}</span></div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5 font-mono-telemetry text-[10px] uppercase pt-3 border-t border-[#222326]">
          {project.technologies.map((tech) => <span key={tech} className="bg-[#222326] px-2.5 py-1 text-[#e8e6df] border border-[#2a2d34]">{tech}</span>)}
        </div>
      </div>
      <aside className="lg:col-span-4 bg-[#08090a] border border-[#222326] p-5 flex flex-col justify-between gap-8">
        <div>
          <p className="font-mono-telemetry text-[11px] text-[#ff4d00] uppercase font-bold">Project {project.number}</p>
          <p className="mt-3 font-body-default text-sm text-[#bab8b2] leading-relaxed">Open the repository to review the implementation, or launch the published project.</p>
        </div>
        <div className="flex flex-wrap gap-2 font-mono-telemetry text-[11px] uppercase">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#e8e6df] text-[#08090a] hover:bg-[#ff4d00] font-bold">Source code</a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#191a1d] hover:bg-[#222326] text-[#e8e6df] border border-[#2a2d34]">Live demo</a>
        </div>
      </aside>
    </div>
  </article>
);

export default ProjectCard;
