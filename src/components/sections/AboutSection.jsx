import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Server, Layout, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const AboutSection = () => {
  const highlights = [
    {
      icon: Layout,
      title: 'Frontend Architecture & React',
      description: 'Building clean, component-based user interfaces with React, state management, and modern CSS utilities.',
    },
    {
      icon: Server,
      title: 'Backend & Database Integration',
      description: 'Understanding full-stack data flow using PHP, MySQL databases, and RESTful API endpoints.',
    },
    {
      icon: Code2,
      title: 'Freelance & Business Solutions',
      description: 'Delivering responsive, scalable, and cross-device compatible websites designed for client growth.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-semibold uppercase tracking-widest text-blue-300">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crafting Scalable Web Experiences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Developer Snippet Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl border border-white/10 p-6 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-xs text-slate-400">developerProfile.js</span>
              </div>

              <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-white">=</span> <span className="text-slate-400">{'{'}</span></p>
                <p className="pl-4"><span className="text-cyan-300">name</span><span className="text-white">:</span> <span className="text-emerald-300">'{personalInfo.name}'</span>,</p>
                <p className="pl-4"><span className="text-cyan-300">role</span><span className="text-white">:</span> <span className="text-emerald-300">'{personalInfo.title}'</span>,</p>
                <p className="pl-4"><span className="text-cyan-300">expertise</span><span className="text-white">:</span> <span className="text-amber-300">['React', 'JS', 'Tailwind', 'PHP', 'MySQL']</span>,</p>
                <p className="pl-4"><span className="text-cyan-300">focus</span><span className="text-white">:</span> <span className="text-emerald-300">'Modern Frontend & Full Stack Solutions'</span>,</p>
                <p className="pl-4"><span className="text-cyan-300">availability</span><span className="text-white">:</span> <span className="text-purple-300">true</span>,</p>
                <p><span className="text-slate-400">{'}'}</span><span className="text-white">;</span></p>

                <div className="pt-4 border-t border-slate-800/80 mt-4 text-xs text-slate-400 font-sans leading-normal flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Focused on clean code, responsive layouts, fast rendering, and clear client communication.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white leading-snug">
                Frontend Developer with Full Stack Capabilities
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalInfo.aboutBio}
              </p>
            </div>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-1 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-card border border-white/5 hover:border-blue-500/30 transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
