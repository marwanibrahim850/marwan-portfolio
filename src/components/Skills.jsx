import React from 'react';

const categories = [
  { title: 'Frontend Development', icon: '</>', color: 'from-blue-500 to-cyan-500', skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'] },
  { title: 'Backend Development', icon: '{ }', color: 'from-violet-500 to-purple-500', skills: ['PHP', 'MySQL', 'REST APIs', 'Database Design'] },
  { title: 'Tools', icon: '↗', color: 'from-cyan-500 to-blue-500', skills: ['Git', 'GitHub', 'Responsive Design', 'Web Optimization'] },
];

const Skills = () => (
  <section id="skills" className="relative overflow-hidden bg-linear-to-b from-slate-800 to-slate-900 py-20 md:py-24">
    <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
    <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="slide-up text-center"><h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Skills & Expertise</h2><div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-blue-400 to-cyan-400" /><p className="mt-4 text-lg text-slate-400">Technologies I use to build reliable web products.</p></div>
      <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">{categories.map((category) => <article key={category.title} className="group rounded-2xl border border-slate-600 bg-linear-to-br from-slate-700 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-blue-950/40"><div className="mb-5 inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl bg-slate-900/70 px-3 text-lg font-bold text-cyan-300">{category.icon}</div><h3 className={`mb-6 text-2xl font-bold bg-linear-to-r ${category.color} bg-clip-text text-transparent`}>{category.title}</h3><div className="flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill} className="rounded-lg border border-slate-600 bg-slate-900/40 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-blue-400/40 group-hover:text-white">{skill}</span>)}</div></article>)}</div>
    </div>
  </section>
);

export default Skills;
