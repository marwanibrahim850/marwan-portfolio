import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const techBadges = [
  { name: 'React', color: 'from-blue-500 to-cyan-400', delay: 0.2 },
  { name: 'JavaScript', color: 'from-amber-400 to-yellow-500', delay: 0.4 },
  { name: 'PHP & MySQL', color: 'from-indigo-500 to-purple-500', delay: 0.6 },
  { name: 'Tailwind CSS', color: 'from-cyan-400 to-teal-400', delay: 0.8 },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [autoTransition, setAutoTransition] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer;
    if (autoTransition && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (autoTransition && countdown === 0) {
      navigate('/portfolio');
    }
    return () => clearInterval(timer);
  }, [autoTransition, countdown, navigate]);

  return (
    <div className="min-h-screen bg-[#070b14] text-white relative overflow-hidden flex flex-col justify-between selection:bg-purple-500 selection:text-white">
      {/* Background Orbs & Ambient Gradient Mesh */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[700px] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <header className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Marwan<span className="text-blue-400">.dev</span>
          </span>
        </div>

        {/* Auto Transition Toggle Pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAutoTransition(!autoTransition)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer border ${
              autoTransition
                ? 'bg-purple-600/30 border-purple-400/50 text-purple-300'
                : 'glass-card border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${autoTransition ? 'bg-purple-400 animate-ping' : 'bg-slate-500'}`} />
            {autoTransition ? `Auto-Entering in ${countdown}s` : 'Enable Auto-Enter'}
          </button>
        </div>
      </header>

      {/* Main SaaS Hero Content */}
      <main className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-xs font-semibold uppercase tracking-widest text-purple-300"
            >
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
              <span>Premium Freelance Developer Portfolio</span>
            </motion.div>

            {/* Animated Headline Reveal */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent"
              >
                {personalInfo.title} <span className="text-slate-400 font-normal text-xl sm:text-2xl">{personalInfo.subtitle}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed"
              >
                {personalInfo.shortBio}
              </motion.p>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {techBadges.map((badge) => (
                <motion.span
                  key={badge.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: badge.delay }}
                  className={`px-4 py-2 rounded-xl glass-card border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-2 shadow-lg`}
                >
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${badge.color}`} />
                  {badge.name}
                </motion.span>
              ))}
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => navigate('/portfolio')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all flex items-center gap-3 cursor-pointer group"
              >
                Enter Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/portfolio#contact')}
                className="px-8 py-4 rounded-2xl glass-button text-slate-200 hover:text-white hover:border-purple-400/50 hover:scale-[1.03] transition-all font-bold text-base cursor-pointer flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-purple-400" />
                Contact Me
              </button>
            </motion.div>

          </div>

          {/* Right Hero Column - Animated SaaS Glass Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-cyan-500/30 blur-3xl -z-10 animate-pulse" />

              {/* Main Visual Glass Frame */}
              <div className="glass-card rounded-3xl p-4 sm:p-5 border border-white/15 shadow-2xl relative overflow-hidden group">
                
                {/* Profile Image Wrapper */}
                <div className="overflow-hidden rounded-2xl aspect-[4/5] bg-slate-900 relative">
                  <img
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Overlay Card */}
                  <div className="absolute top-4 right-4 glass-card p-2.5 rounded-xl border border-white/20 flex items-center gap-2 text-xs font-semibold text-white shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Open for Hire</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 glass-card p-3.5 rounded-2xl border border-white/20 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>{personalInfo.name}</span>
                      <span className="text-cyan-300 font-mono">React & PHP</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Delivering premium web applications for clients worldwide.</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer Branding Bar */}
      <footer className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} Marwan Ibrahim. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/portfolio')}
            className="hover:text-blue-400 transition-colors font-medium cursor-pointer"
          >
            Explore Projects →
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
