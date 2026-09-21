import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Atom, Code2, FileCode, Layout, Palette, Sparkles, Layers, Route, Server, Database, Globe, GitBranch, Zap, Terminal, Send } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { techStack } from '../../data/portfolioData';

const iconMap = {
  Atom,
  Code2,
  FileCode,
  Layout,
  Palette,
  Sparkles,
  Layers,
  Route,
  Server,
  Database,
  Globe,
  GitBranch,
  Github: GithubIcon,
  Zap,
  Terminal,
  Send,
};

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-slate-900/60">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-semibold uppercase tracking-widest text-purple-300">
            <Cpu className="w-3.5 h-3.5" />
            Tech Stack & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies & Frameworks
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured tools and modern libraries used to build reliable web software.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tech Stack Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((categoryGroup, groupIdx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Category Title Header */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-mono">
                    {categoryGroup.skills.length} Technologies
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-6">{categoryGroup.description}</p>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.skills.map((skill) => {
                    const IconComp = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-purple-400/40 text-slate-200 hover:text-white flex items-center gap-2 text-xs font-medium transition-all group-hover:bg-slate-800 shadow-sm"
                      >
                        <IconComp className="w-4 h-4 text-cyan-400" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Decorative Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Production Ready</span>
                <span className="text-blue-400 font-mono">✓ Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
