import React from 'react';
import { personalInfo } from '../data/personal';

export const Hero = () => {
  return (
    <section className="w-full px-margin md:px-margin-desktop py-space-xl md:py-space-2xl bg-[#0f1012] relative overflow-hidden border-b border-[#222326]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        {/* Positioning Tag */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-[#ff4d00] text-[#08090a] font-mono-index text-[12px] px-3 py-1 font-bold uppercase tracking-wider">
            FRONTEND DEVELOPER
          </div>
          <div className="bg-[#1c1e22] text-[#e8e6df] font-mono-telemetry text-[11px] px-3 py-1 uppercase tracking-widest text-[#c8c6c0] border border-[#2a2d34]">
            GROWING FULL-STACK EXPERIENCE
          </div>
          <div className="hidden sm:inline-block font-mono-telemetry text-[11px] text-[#8d7168] pl-2 uppercase">
            {personalInfo.educationBrief}
          </div>
        </div>

        {/* Hero Typographic Monolith */}
        <div className="space-y-4 max-w-5xl">
          <h1 className="font-display-hero text-4xl sm:text-6xl md:text-7xl lg:text-[80px] uppercase tracking-tighter text-[#e8e6df] leading-[1.0]">
            MARWAN IBRAHIM
            <br />
            <span className="text-[#ff4d00] italic font-light tracking-tight">BUILDING MODERN</span>
            <br />
            WEB APPLICATIONS.
          </h1>

          <p className="font-body-default text-base sm:text-lg text-[#bab8b2] max-w-3xl font-light leading-relaxed pt-2">
            {personalInfo.statement}
          </p>
        </div>

        {/* Action Gateways */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="bg-[#e8e6df] text-[#08090a] font-mono-index text-[13px] uppercase px-6 py-3.5 font-bold hover:bg-[#ff4d00] hover:text-[#08090a] transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>[ VIEW SELECTED PROJECTS ]</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>

          <a
            href="#contact"
            className="bg-[#1c1e22] text-[#e8e6df] font-mono-index text-[13px] uppercase px-6 py-3.5 hover:bg-[#222326] hover:text-[#ffb59e] hover:border-[#ff4d00] border border-[#2a2d34] transition-all flex items-center gap-2"
          >
            <span>GET IN TOUCH</span>
          </a>

          <div className="flex items-center gap-2 pl-0 sm:pl-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#191a1d] hover:bg-[#222326] text-[#e8e6df] hover:text-[#ffb59e] transition-colors font-mono-telemetry text-[11px] flex items-center gap-1.5 border border-[#222326]"
              title="GitHub Repositories"
            >
              <span className="material-symbols-outlined text-[17px]">terminal</span>
              <span className="hidden sm:inline">GH/marwanibrahim850</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#191a1d] hover:bg-[#222326] text-[#e8e6df] hover:text-[#ffb59e] transition-colors font-mono-telemetry text-[11px] flex items-center gap-1.5 border border-[#222326]"
              title="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[17px]">hub</span>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Focused Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#222326] font-mono-telemetry text-[11px] text-[#c8c6c0] uppercase">
          <div className="flex items-center gap-2">
            <span className="text-[#ff4d00] font-bold">01 /</span>
            <span>COMPONENT ARCHITECTURE IN REACT</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ff4d00] font-bold">02 /</span>
            <span>BACKEND INTEGRATION WITH PHP &amp; MYSQL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ff4d00] font-bold">03 /</span>
            <span>RESPONSIVE, CROSS-DEVICE INTERFACES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
