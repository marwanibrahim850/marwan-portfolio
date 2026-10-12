import React from 'react';
import { skillCategories } from '../data/skills';

export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full px-margin md:px-margin-desktop py-space-xl bg-[#0f1012] border-b border-[#222326]"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-1.5 border-b border-[#222326] pb-6">
          <span className="font-mono-telemetry text-[11px] text-[#ff4d00] uppercase font-bold tracking-widest">
            [ TECHNICAL PROFICIENCY &amp; TOOLING ]
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#e8e6df]">
            TECHNICAL SKILLS
          </h2>
          <p className="font-body-default text-sm sm:text-base text-[#c8c6c0] max-w-3xl font-light">
            A concise, categorized overview of technologies, frameworks, and developer tools grounded in actual project delivery and full-stack development experience.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#161719] p-5 border border-[#222326] flex flex-col justify-between space-y-4 hover:border-[#2d2e32] transition-colors"
            >
              <div className="space-y-3">
                <div className="border-b border-[#222326] pb-2">
                  <div className="font-mono-telemetry text-[10px] text-[#ff4d00] uppercase font-bold">
                    0{idx + 1} // CATEGORY
                  </div>
                  <h3 className="font-headline text-lg uppercase text-[#e8e6df] font-bold mt-0.5">
                    {category.title}
                  </h3>
                </div>

                <p className="font-body-default text-xs text-[#8d7168] leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 bg-[#0f1012] border border-[#222326] hover:border-[#2a2d34] transition-colors"
                    >
                      <div className="font-mono-index text-xs text-[#e8e6df] font-semibold">
                        {skill.name}
                      </div>
                      <div className="font-mono-telemetry text-[10px] text-[#8d7168] mt-0.5">
                        {skill.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#222326] font-mono-telemetry text-[9px] text-[#8d7168] uppercase">
                PRACTICED IN CODE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
