import React, { useEffect, useState } from 'react';

const expertise = [
  ['Frontend Development', 'React, JavaScript, HTML, CSS, Tailwind CSS'],
  ['Backend Development', 'PHP, MySQL, REST APIs, Database Design'],
  ['Tools & Technologies', 'Git, GitHub, Responsive Design, Web Optimization'],
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.1 });
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-linear-to-b from-slate-900 to-slate-800 py-20 md:py-24">
      <div className="absolute left-1/4 top-1/2 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-12 text-center"><h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">About Me</h2><div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-blue-400 to-cyan-400" /></div>
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl border border-blue-400/25 bg-slate-950/75 p-5 shadow-2xl shadow-blue-950/50">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-cyan-400/10 blur-2xl" />
                <div className="mb-6 flex items-center gap-2 border-b border-slate-700 pb-4"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" /><span className="ml-3 text-xs text-slate-500">developer.js</span></div>
                <div className="space-y-3 font-mono text-sm leading-relaxed sm:text-base"><p><span className="text-violet-300">const</span> <span className="text-cyan-300">developer</span> <span className="text-slate-300">= {'{'}</span></p><p className="pl-5"><span className="text-blue-300">name:</span> <span className="text-emerald-300">'Marwan Ibrahim'</span>,</p><p className="pl-5"><span className="text-blue-300">role:</span> <span className="text-emerald-300">'Full Stack Developer'</span>,</p><p className="pl-5"><span className="text-blue-300">stack:</span> <span className="text-emerald-300">['React', 'PHP', 'MySQL','tailwindCSS', 'HTML', 'CSS ' ]</span>,</p><p className="pl-5"><span className="text-blue-300">focus:</span> <span className="text-emerald-300">'Clean web experiences'</span></p><p><span className="text-slate-300">{'}'};</span></p><div className="mt-6 rounded-xl border border-cyan-400/15 bg-slate-900 p-4 text-xs text-slate-400"><span className="text-cyan-300">// </span>Building solutions that are responsive, maintainable, and ready to grow.</div></div>
              </div>
            </div>
            <div className="space-y-7"><p className="text-lg leading-relaxed text-slate-200 md:text-xl">I am a Full Stack Web Developer specialized in building responsive and scalable web applications. I create modern digital solutions using React, JavaScript, PHP, and MySQL with a focus on clean code, performance, and user experience.</p><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">My expertise spans across:</p><div className="space-y-4">{expertise.map(([title, details]) => <div key={title} className="flex gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-colors hover:border-blue-400/40"><span className="mt-0.5 text-cyan-300">✓</span><div><h3 className="mb-1 text-base font-semibold text-white">{title}</h3><p className="text-sm leading-relaxed text-slate-400">{details}</p></div></div>)}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
