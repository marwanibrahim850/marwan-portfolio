import React, { useState } from 'react';
import { personalInfo } from '../data/personal';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(personalInfo.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          window.location.href = `mailto:${personalInfo.email}`;
        });
    } else {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-margin md:px-margin-desktop py-space-xl md:py-space-2xl bg-[#08090a] relative border-b border-[#222326]"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2 border-b border-[#222326] pb-6">
          <div className="font-mono-telemetry text-[11px] text-[#ff4d00] font-bold uppercase tracking-widest">
            [ DIRECT COMMUNICATION &amp; CHANNELS ]
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#e8e6df]">
            GET IN TOUCH
          </h2>
          <p className="font-body-default text-base sm:text-lg text-[#bab8b2] font-light max-w-2xl leading-relaxed">
            Interested in discussing a frontend or full-stack opportunity, reviewing project code, or collaborating? Reach out directly through the verified channels below.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Primary Channel: Email (7 Cols) */}
          <div className="md:col-span-7 bg-[#0f1012] border border-[#222326] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono-telemetry text-[11px] text-[#8d7168] uppercase">
                <span>PRIMARY CONTACT CHANNEL</span>
                <span className="text-[#ff4d00] font-bold">DIRECT INBOX</span>
              </div>
              <h3 className="font-headline text-2xl uppercase text-[#e8e6df] font-bold">
                Email Address
              </h3>
              <p className="font-body-default text-sm text-[#bab8b2] font-light">
                Feel free to email me directly for job inquiries, code walk-throughs, or freelance project requirements.
              </p>
              <div className="font-mono-index text-xl sm:text-2xl text-[#ffb59e] font-bold select-all pt-2">
                {personalInfo.email}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 bg-[#e8e6df] text-[#08090a] hover:bg-[#ff4d00] hover:text-[#08090a] font-mono-telemetry text-[11px] uppercase font-bold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS'}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}?subject=Developer%20Opportunity%20%E2%80%94%20Marwan%20Ibrahim`}
                className="px-5 py-3 bg-[#161719] hover:bg-[#222326] text-[#e8e6df] hover:text-[#ffb59e] font-mono-telemetry text-[11px] uppercase font-bold flex items-center gap-2 transition-colors border border-[#2a2d34]"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>OPEN EMAIL DRAFT</span>
              </a>
            </div>
          </div>

          {/* Secondary Channels: GitHub, LinkedIn & Upwork (5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#0f1012] hover:bg-[#161719] border border-[#222326] hover:border-[#ff4d00] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="font-mono-telemetry text-[10px] text-[#8d7168] uppercase">
                  CODE VAULT
                </div>
                <div className="font-mono-index text-base text-[#e8e6df] font-bold group-hover:text-[#ffb59e] transition-colors">
                  GitHub Profile
                </div>
                <div className="font-mono-telemetry text-xs text-[#bab8b2]">
                  github.com/{personalInfo.githubUser}
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#8d7168] group-hover:translate-x-1 transition-transform">
                north_east
              </span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#0f1012] hover:bg-[#161719] border border-[#222326] hover:border-[#ff4d00] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="font-mono-telemetry text-[10px] text-[#8d7168] uppercase">
                  PROFESSIONAL PROFILE
                </div>
                <div className="font-mono-index text-base text-[#e8e6df] font-bold group-hover:text-[#ffb59e] transition-colors">
                  LinkedIn Profile
                </div>
                <div className="font-mono-telemetry text-xs text-[#bab8b2]">
                  linkedin.com/{personalInfo.linkedinUser}
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#8d7168] group-hover:translate-x-1 transition-transform">
                north_east
              </span>
            </a>

            <a
              href={personalInfo.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[#0f1012] hover:bg-[#161719] border border-[#222326] hover:border-[#ff4d00] transition-colors flex items-center justify-between group"
            >
              <div>
                <div className="font-mono-telemetry text-[10px] text-[#8d7168] uppercase">
                  FREELANCE
                </div>
                <div className="font-mono-index text-base text-[#e8e6df] font-bold group-hover:text-[#ffb59e] transition-colors">
                  Upwork Profile
                </div>
                <div className="font-mono-telemetry text-xs text-[#bab8b2]">
                  Available for client projects
                </div>
              </div>
              <span className="material-symbols-outlined text-[20px] text-[#8d7168] group-hover:translate-x-1 transition-transform">
                north_east
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
