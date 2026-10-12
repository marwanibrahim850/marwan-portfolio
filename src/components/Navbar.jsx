import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/personal';

const navItems = [
  { label: '01 // Projects', href: '#projects' },
  { label: '02 // Skills', href: '#skills' },
  { label: '03 // Experience', href: '#experience' },
  { label: '04 // About', href: '#about' },
  { label: '05 // Contact', href: '#contact' },
];

export const Navbar = ({ activeSection = 'projects' }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(personalInfo.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          window.location.href = `mailto:${personalInfo.email}`;
        });
    } else {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#08090a]/95 backdrop-blur-md border-b border-[#222326]">
      <div className="h-16 md:h-20 w-full px-margin md:px-margin-desktop flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff4d00]"
          >
            <span className="font-mono-index text-[13px] uppercase tracking-wider text-[#e8e6df] group-hover:text-[#ffb59e] transition-colors font-bold">
              MI / 2026
            </span>
            <span className="font-mono-telemetry text-[11px] uppercase text-[#8d7168] hidden sm:inline-block">
              [DEV.PORTFOLIO]
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 font-mono-telemetry text-[11px] text-[#bab8b2] uppercase pl-4 border-l border-[#222326]">
            <span>FRONTEND DEVELOPER &amp; WEB SYSTEMS</span>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-5 lg:gap-7 font-mono-index text-[12px] uppercase"
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#ffb59e] border-b-2 border-[#ff4d00] font-semibold'
                    : 'text-[#bab8b2] hover:text-[#e8e6df]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Quick Action Hub & Badges */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono-telemetry text-[11px] uppercase">
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-[#bab8b2] hover:text-[#e8e6df] hover:bg-[#161719] transition-colors border border-transparent hover:border-[#222326]"
              title="GitHub Repositories"
            >
              GH//850
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-[#bab8b2] hover:text-[#e8e6df] hover:bg-[#161719] transition-colors border border-transparent hover:border-[#222326]"
              title="LinkedIn Profile"
            >
              LI//PROFILE
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 text-[#ffb59e] hover:text-[#e8e6df] hover:bg-[#161719] transition-colors cursor-pointer border border-[#222326]"
              title="Copy Direct Email"
            >
              {copied ? 'COPIED!' : 'COPY GMAIL'}
            </button>
          </div>

          <div
            className="w-8 h-8 bg-[#ff4d00] text-[#08090a] flex items-center justify-center font-mono-telemetry font-bold text-xs select-none"
            aria-label="Marwan Ibrahim Initials"
          >
            MI
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e8e6df] hover:text-[#ff4d00] hover:bg-[#161719] border border-[#222326] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#222326] bg-[#0f1012] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2 font-mono-index text-sm uppercase">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 border border-[#222326] hover:border-[#ff4d00] hover:text-[#ff4d00] text-[#e8e6df] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#222326] flex flex-wrap gap-2 font-mono-telemetry text-xs uppercase">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#161719] text-[#e8e6df] hover:text-[#ff4d00] border border-[#222326]"
            >
              GitHub // 850
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#161719] text-[#e8e6df] hover:text-[#ff4d00] border border-[#222326]"
            >
              LinkedIn // Profile
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-2 bg-[#ff4d00] text-[#08090a] font-bold"
            >
              {copied ? 'Copied to Clipboard!' : 'Copy Gmail'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
