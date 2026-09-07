import React from 'react';
import profileImage from '../assets/WhatsApp Image 2026-09-07 at 5.11.17 AM.jpeg';

const Hero = () => {
  const scrollTo = (section) => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="relative flex min-h-[700px] items-center overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-900 pb-16 pt-28 md:min-h-[760px] md:pt-32">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.2fr_.8fr] lg:gap-20 lg:px-8">
        <div className="slide-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Available for freelance work</p>
          <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"><span className="bg-linear-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Marwan Ibrahim</span></h1>
          <h2 className="mb-6 text-xl font-semibold leading-snug text-slate-200 md:text-2xl">Full Stack Web Developer</h2>
          <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">I build scalable web applications and responsive websites using React, JavaScript, PHP, and MySQL.</p>
          <div className="flex flex-col gap-4 sm:flex-row"><button onClick={() => scrollTo('projects')} className="btn btn-primary bg-linear-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-950/50 hover:scale-105">View Projects</button><button onClick={() => scrollTo('contact')} className="btn btn-outline border-blue-400/80 text-blue-300 hover:bg-blue-400/10">Hire Me</button></div>
          <div className="mt-8 flex gap-6">
            <a href="https://github.com/marwanibrahim850" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-cyan-300" aria-label="GitHub"><svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.48 11.48 0 0112 4.8c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12 12 0 0024 12C24 5.37 18.63 0 12 0Z" /></svg></a>
            <a href="https://www.linkedin.com/in/marwan-ibrahim-0865bb3aa" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-cyan-300" aria-label="LinkedIn"><svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" /></svg></a>
            <a href="mailto:i.marwan2006@gmail.com" className="text-slate-400 transition-colors hover:text-cyan-300" aria-label="Email"><svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></svg></a>
          </div>
        </div>
        <div className="slide-right flex justify-center md:justify-end">
          <div className="relative w-64 sm:w-72 md:w-80">
            <div className="absolute -inset-5 -z-10 rounded-3xl bg-linear-to-br from-blue-500/30 to-cyan-400/20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-cyan-300/35 bg-slate-800 p-2 shadow-2xl shadow-blue-950/60 transition-transform duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20">
              <img src={profileImage} alt="Marwan Ibrahim, Full Stack Web Developer" className="aspect-4/5 w-full rounded-2xl object-cover object-center transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
