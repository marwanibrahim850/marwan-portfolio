import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolioData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Freelance Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Marwan,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Direct',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'text-blue-400',
    },
    {
      icon: LinkedinIcon,
      title: 'LinkedIn',
      value: 'Marwan Ibrahim',
      link: personalInfo.linkedin,
      color: 'text-cyan-400',
    },
    {
      icon: GithubIcon,
      title: 'GitHub',
      value: 'marwanibrahim850',
      link: personalInfo.github,
      color: 'text-purple-400',
    },
    {
      icon: Briefcase,
      title: 'Upwork',
      value: 'Available for Hire',
      link: personalInfo.upwork,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-semibold uppercase tracking-widest text-blue-300">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a freelance project, website improvement, or business inquiry? Send a message directly.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-extrabold text-white">Contact Channels</h3>
            
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const IconComp = method.icon;
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl glass-card border border-white/10 hover:border-blue-500/40 transition-all flex items-center gap-4 group shadow-md"
                  >
                    <div className={`p-3 rounded-xl bg-slate-800 border border-slate-700 ${method.color} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">{method.title}</h4>
                      <p className="text-base font-bold text-white">{method.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Complete in your email app</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your email client should have opened with a prepared draft. Send the message to complete your inquiry!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl glass-button text-sm font-semibold text-slate-200 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-extrabold text-white mb-2">Send a Message</h3>

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/90 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/90 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Project Details & Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Describe your project, features needed, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/90 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Open Email Draft <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
