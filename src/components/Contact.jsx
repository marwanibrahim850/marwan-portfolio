import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'i.marwan2006@gmail.com',
      link: 'mailto:i.marwan2006@gmail.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Marwan Ibrahim',
      link: 'www.linkedin.com/in/marwan-ibrahim-0865bb3aa',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'marwanibrahim850',
      link: 'https://github.com/marwanibrahim850',
    },
    {
      icon: '💬',
      title: 'Upwork',
      value: 'Available for Hire',
      link: 'https://www.upwork.com/freelancers/~016f4b1ad716ad29b6?mp_source=share',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">Ready to start your next project? Let's talk!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700 transition-all duration-300"
                  >
                    <div className="text-3xl flex-shrink-0 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/marwanibrahim850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marwan-ibrahim-0865bb3aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:i.marwan2006@gmail.com"
                    className="w-12 h-12 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12">
                    <svg className="w-16 h-16 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 text-center">Your message has been sent successfully. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
