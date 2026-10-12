import React from 'react';
import { experienceData } from '../data/experience';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full px-margin md:px-margin-desktop py-space-xl bg-[#08090a] border-b border-[#222326]"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#222326] pb-6">
          <div className="space-y-1.5">
            <span className="font-mono-telemetry text-[11px] text-[#ff4d00] uppercase font-bold tracking-widest">
              [ PRACTICAL INDUSTRY EXPOSURE ]
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#e8e6df]">
              WORK EXPERIENCE
            </h2>
            <p className="font-body-default text-sm sm:text-base text-[#c8c6c0] max-w-2xl font-light">
              Hands-on software development experience gained in team environments, focusing on frontend implementations, API integrations, and developer workflows.
            </p>
          </div>

          <div className="font-mono-telemetry text-[11px] text-[#8d7168] uppercase md:text-right">
            <span>ROLE: INTERNSHIP</span>
            <br />
            <span className="text-[#ffb59e] font-semibold">{experienceData.company}</span>
          </div>
        </div>

        {/* Experience Dossier Container */}
        <div className="bg-[#0f1012] border border-[#222326] p-5 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#222326] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono-telemetry text-[11px] uppercase text-[#ff4d00] font-bold">
                <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                <span>{experienceData.company} // SOFTWARE DIVISION</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl uppercase text-[#e8e6df] font-bold">
                {experienceData.role}
              </h3>
            </div>

            <div className="font-mono-telemetry text-[11px] md:text-right text-[#c8c6c0] uppercase space-y-1">
              <div className="px-3 py-1 font-bold inline-block bg-[#161719] text-[#ffb59e] border border-[#222326]">
                {experienceData.period}
              </div>
              <div className="text-[#8d7168]">{experienceData.projectExposure}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Responsibilities & Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <p className="font-body-default text-sm sm:text-base text-[#bab8b2] font-light leading-relaxed">
                {experienceData.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="font-mono-telemetry text-[11px] text-[#8d7168] uppercase font-semibold">
                  [ KEY CONTRIBUTIONS &amp; LEARNINGS ]
                </div>
                <ul className="space-y-2 font-mono-telemetry text-[11px] text-[#c8c6c0]">
                  {experienceData.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#ff4d00] font-bold shrink-0 mt-0.5">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#222326] flex flex-wrap gap-1.5 font-mono-telemetry text-[10px] uppercase">
                {experienceData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#161719] px-2.5 py-1 text-[#e8e6df] border border-[#222326]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5 border border-[#222326] bg-[#161719] p-5 space-y-4">
              <p className="font-mono-telemetry text-[11px] text-[#ff4d00] uppercase font-bold">Relevant experience</p>
              <p className="font-body-default text-sm text-[#bab8b2] leading-relaxed">The internship added practical experience with team development practices, frontend implementation, and API-oriented workflows.</p>
              <div className="font-mono-telemetry text-[11px] text-[#8d7168] uppercase border-t border-[#222326] pt-4">{experienceData.location}</div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
