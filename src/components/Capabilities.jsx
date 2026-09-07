import React from 'react';

const capabilities = [
  ['Build Complete Websites', 'Develop responsive websites from scratch.', '01'],
  ['React Development', 'Create modern React applications and interactive interfaces.', '02'],
  ['Backend Development', 'Build PHP and MySQL backend solutions.', '03'],
  ['Website Improvements', 'Fix bugs, improve performance, and optimize websites.', '04'],
];

const Capabilities = () => (
  <section id="capabilities" className="bg-slate-900 py-20 md:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Client-focused solutions</p><h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">What I Can Do</h2><p className="text-lg text-slate-400">Practical development support that helps your website look better, work better, and move your business forward.</p></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(([title, description, number]) => <article key={title} className="group rounded-2xl border border-slate-700 bg-slate-800/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-800"><span className="text-sm font-semibold text-cyan-300">{number}</span><h3 className="mb-3 mt-8 text-xl font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-slate-400">{description}</p></article>)}</div>
    </div>
  </section>
);

export default Capabilities;
