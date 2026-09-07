import React, { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const services = [
    {
      title: 'Full Stack Development',
      description: 'Complete web solutions that are structured to perform and scale with your business.',
      icon: '🚀',
      features: ['Custom Solutions', 'Scalable Architecture', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'React Development',
      description: 'Fast, interactive React interfaces designed around a clear user experience.',
      icon: '⚛️',
      features: ['Component Design', 'State Management', 'Real-time Features'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Frontend Development',
      description: 'Responsive, polished websites that look reliable on every screen.',
      icon: '🎨',
      features: ['Responsive Design', 'UI/UX Focus', 'Cross-browser Compatible'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'PHP & MySQL Backend',
      description: 'Reliable PHP and MySQL foundations for data-driven web products.',
      icon: '🗄️',
      features: ['API Development', 'Database Design', 'Server Security'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Website Bug Fixing',
      description: 'Find issues quickly and restore a smooth, dependable website experience.',
      icon: '🔧',
      features: ['Bug Diagnosis', 'Performance Tuning', 'Code Review'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Website Optimization',
      description: 'Improve speed, mobile usability, and the quality of your site experience.',
      icon: '⚡',
      features: ['Speed Optimization', 'SEO Enhancement', 'Mobile Optimization'],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-linear-to-b from-slate-800 to-slate-900 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Services</h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">Practical development support built around your goals and your users.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group card bg-linear-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-blue-500/50 card-hover relative overflow-hidden`}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.6s ease-out',
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-linear-to-r ${service.color} text-white hover:shadow-lg opacity-80 group-hover:opacity-100`}>
                    Discuss Your Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
