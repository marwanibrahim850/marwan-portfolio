import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, BookOpen } from 'lucide-react';
import { learningJourney } from '../../data/portfolioData';

const LearningJourneySection = () => {
  return (
    <section id="learning-journey" className="py-24 relative overflow-hidden bg-slate-900/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold uppercase tracking-widest text-indigo-300">
            <GraduationCap className="w-3.5 h-3.5" />
            Continuous Skill Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learning Journey & Specialization
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured course learning and deep-dive technical topics mastered in React engineering.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Featured Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-indigo-500/30 p-8 mb-12 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-semibold">
                Completed Course Specialization
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {learningJourney.courseTitle}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                {learningJourney.subtitle} — {learningJourney.description}
              </p>
            </div>
            
            <div className="p-4 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 flex items-center gap-3 shrink-0">
              <BookOpen className="w-8 h-8" />
              <div>
                <span className="text-xs text-slate-400 font-mono block">Curriculum Covered</span>
                <span className="text-sm font-bold text-white">10 Core Mastery Modules</span>
              </div>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            {learningJourney.topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-4 rounded-xl glass-card border border-white/5 hover:border-indigo-400/40 transition-all space-y-2 group"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {topic.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {topic.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default LearningJourneySection;
