import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { projects } from '../../data/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/70">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Briefcase className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected Freelance Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world websites and applications engineered for performance, user experience, and scalability.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`glass-card rounded-3xl border border-white/10 p-6 sm:p-8 hover:border-cyan-400/50 transition-all flex flex-col justify-between group shadow-2xl relative overflow-hidden ${
                  isFeatured ? 'lg:col-span-12 bg-gradient-to-br from-slate-900/90 via-purple-950/20 to-slate-900/90 border-purple-500/40' : 'lg:col-span-6'
                }`}
              >
                {/* Featured Glowing Ribbon */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 p-4">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Featured Case Study
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Badge & Title Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor}`}>
                      {project.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{project.type}</span>
                  </div>

                  <h3 className={`font-extrabold text-white mb-4 group-hover:text-cyan-300 transition-colors ${
                    isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
                      >
                        View Live Site <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl glass-button text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" /> Repository
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 font-mono">0{index + 1} / 03</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
