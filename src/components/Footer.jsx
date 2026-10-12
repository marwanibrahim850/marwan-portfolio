import React from 'react';
import { personalInfo } from '../data/personal';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#08090a] py-12 border-t border-[#222326]">
      <div className="w-full px-margin md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Col 1: Identity & Protocol (5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="font-mono-index text-[13px] uppercase tracking-wider text-[#e8e6df] font-bold">
                MARWAN IBRAHIM // CHASSIS 2026
              </div>
              <p className="font-mono-telemetry text-[11px] text-[#bab8b2] uppercase max-w-sm leading-relaxed">
                Full-Stack &amp; Frontend Systems Engineering • PentaValue Intern • High-throughput reactive solutions.
              </p>
            </div>

            <div className="font-mono-telemetry text-[11px] text-[#c8c6c0] uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff4d00] inline-block" />
              <span>CORE PROTOCOL : ACTIVE OPERATIONAL</span>
            </div>
          </div>

          {/* Col 2: Direct Dispatch & Repositories (4 Cols) */}
          <div className="md:col-span-4 flex flex-col space-y-2 font-mono-telemetry text-[11px] uppercase">
            <span className="text-[#8d7168] mb-1 font-semibold">
              [ DIRECT DISPATCH &amp; REPOSITORIES ]
            </span>
            <a
              className="text-[#e8e6df] hover:text-[#ffb59e] transition-colors"
              href={`mailto:${personalInfo.email}`}
            >
              GMAIL : {personalInfo.email}
            </a>
            <a
              className="text-[#bab8b2] hover:text-[#e8e6df] transition-colors"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB : {personalInfo.githubUser}
            </a>
            <a
              className="text-[#bab8b2] hover:text-[#e8e6df] transition-colors"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN : {personalInfo.linkedinUser}
            </a>
          </div>

          {/* Col 3: Nav Index (3 Cols) */}
          <div className="md:col-span-3 flex flex-col space-y-2 font-mono-telemetry text-[11px] uppercase">
            <span className="text-[#8d7168] mb-1 font-semibold">[ NAV INDEX ]</span>
            <a
              className="text-[#bab8b2] hover:text-[#e8e6df] transition-colors"
              href="#projects"
            >
              // 01 SELECTED WORK (03 PROJECTS)
            </a>
            <a
              className="text-[#bab8b2] hover:text-[#e8e6df] transition-colors"
              href="#experience"
            >
              // 02 EXPERIENCE &amp; PENTAFLOW
            </a>
            <a
              className="text-[#bab8b2] hover:text-[#e8e6df] transition-colors"
              href="#skills"
            >
              // 03 CORE PILLARS
            </a>
            <a
              className="text-[#bab8b2] hover:text-[#e8e6df] transition-colors"
              href="#contact"
            >
              // 04 TRANSMIT / CONTACT
            </a>
          </div>
        </div>

        {/* Bottom Bar: Locus & Monograph Status */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono-telemetry text-[11px] uppercase text-[#8d7168] border-t border-[#222326]">
          <div className="flex items-center gap-4">
            <span>LOCUS: CAIRO / UTC+2</span>
            <span>EDITION 2026 // MONOGRAPH</span>
          </div>
          <div>
            <span>STRICT PRIVACY • RAW ARCHITECTURAL COMPOSITION • ZERO TRACKERS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
