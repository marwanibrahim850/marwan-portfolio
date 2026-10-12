import React from 'react';
import { personalInfo } from '../data/personal';

export const About = () => {
  return (
    <section
      id="about"
      className="w-full px-margin md:px-margin-desktop py-space-xl bg-[#0f1012] border-b border-[#222326]"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-1.5 border-b border-[#222326] pb-4">
          <span className="font-mono-telemetry text-[11px] text-[#ff4d00] uppercase font-bold tracking-widest">
            [ PERSONAL CONTEXT &amp; BACKGROUND ]
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl uppercase tracking-tight text-[#e8e6df]">
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-4">
            <p className="font-body-default text-base sm:text-lg text-[#bab8b2] font-light leading-relaxed">
              I am a web developer and a Business Information Systems student at Helwan University. My primary focus is frontend development with React, combined with practical full-stack experience using PHP and MySQL.
            </p>
            <p className="font-body-default text-sm sm:text-base text-[#bab8b2] font-light leading-relaxed">
              Studying Business Information Systems gives me a strong understanding of how software integrates with real business workflows—from database structuring and data integrity to client-side usability. I enjoy transforming complex requirements into responsive, clean user interfaces that perform consistently across all viewports.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-telemetry text-[11px] pt-4">
              <div className="p-4 bg-[#161719] border border-[#222326] space-y-1">
                <div className="text-[#8d7168] uppercase">[ WHAT I BUILD ]</div>
                <div className="text-[#e8e6df] font-bold">RESPONSIVE WEB APPLICATIONS</div>
                <div className="text-[#c8c6c0]">React, JavaScript, PHP &amp; MySQL</div>
              </div>
              <div className="p-4 bg-[#161719] border border-[#222326] space-y-1">
                <div className="text-[#8d7168] uppercase">[ ACADEMIC FOCUS ]</div>
                <div className="text-[#e8e6df] font-bold">BIS @ HELWAN UNIVERSITY</div>
                <div className="text-[#c8c6c0]">Information systems &amp; database analysis</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#161719] p-5 border border-[#222326] space-y-3 font-mono-telemetry text-[11px]">
            <div className="text-[#ff4d00] uppercase font-bold">[ QUICK METADATA ]</div>
            <div className="flex justify-between border-b border-[#222326] pb-1.5">
              <span className="text-[#8d7168]">NAME:</span>
              <span className="text-[#e8e6df]">{personalInfo.name}</span>
            </div>
            <div className="flex justify-between border-b border-[#222326] pb-1.5">
              <span className="text-[#8d7168]">LOCATION:</span>
              <span className="text-[#e8e6df]">{personalInfo.location}</span>
            </div>
            <div className="flex justify-between border-b border-[#222326] pb-1.5">
              <span className="text-[#8d7168]">FOCUS:</span>
              <span className="text-[#ffb59e]">Frontend &amp; Full-Stack</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8d7168]">AVAILABILITY:</span>
              <span className="text-[#e8e6df]">Open to Developer Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
