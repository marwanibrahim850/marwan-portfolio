import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolioData';

const HeroSection = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Orbs & Glowing Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold uppercase tracking-widest text-cyan-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.status}
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 flex items-center gap-3">
                {personalInfo.title}
                <span className="text-sm px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-300 font-normal">
                  {personalInfo.subtitle}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                View Featured Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 rounded-xl glass-button text-slate-200 hover:text-white hover:border-purple-400/50 hover:scale-[1.02] transition-all font-semibold cursor-pointer"
              >
                Hire Me
              </button>
            </div>

            {/* Social Icons & Quick Stats */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl glass-card text-slate-400 hover:text-white hover:border-blue-400/50 hover:-translate-y-1 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl glass-card text-slate-400 hover:text-white hover:border-blue-400/50 hover:-translate-y-1 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-3 rounded-xl glass-card text-slate-400 hover:text-white hover:border-blue-400/50 hover:-translate-y-1 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              
              <div className="h-6 w-px bg-slate-800 ml-2" />
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>React • PHP • MySQL • Tailwind</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-purple-600/30 blur-2xl -z-10" />
              
              {/* Main Card Frame */}
              <div className="glass-card rounded-3xl p-3 sm:p-4 border border-white/10 shadow-2xl relative overflow-hidden group">
                
                {/* Image Wrapper */}
                <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-slate-800 relative">
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-xl border border-white/15 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">Full Stack Ready</h4>
                      <p className="text-xs text-slate-300">Modern Frontend & Server Logic</p>
                    </div>
                    <div className="p-2 rounded-lg bg-blue-600/30 text-cyan-300 border border-cyan-400/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
