import React from 'react';
import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolioData';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 relative pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Frontend Developer with Full Stack Experience. Building responsive React applications and tailored client solutions.
            </p>
            <span className="inline-block text-xs font-semibold text-cyan-400 font-mono">
              ● {personalInfo.status}
            </span>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'tech-stack', 'projects', 'learning-journey', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleScrollTo(item)}
                    className="hover:text-blue-400 transition-colors capitalize cursor-pointer"
                  >
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2 text-xs">
              <li>React Web Development</li>
              <li>Responsive UI Architecture</li>
              <li>PHP & MySQL Server Integration</li>
              <li>Website Bug Fixing & Tuning</li>
            </ul>
          </div>

          {/* Social Connections */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl glass-card hover:text-white hover:border-blue-400/50 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl glass-card hover:text-white hover:border-blue-400/50 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl glass-card hover:text-white hover:border-blue-400/50 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Marwan Ibrahim. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
