import React, { useEffect, useState } from 'react';

const Skills = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['PHP', 'MySQL', 'RESTful APIs', 'Database Design', 'Server Management'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools & Workflow',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'NPM', 'Web Optimization', 'SEO Basics'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-linear-to-b from-slate-800 to-slate-900 relative">
      {/* Background decoration */}
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 text-lg">Technologies and tools I work with daily</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group card bg-linear-to-br from-slate-700 to-slate-800 border border-slate-600 hover:border-blue-500/50 card-hover relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{category.icon}</div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-6 bg-linear-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>

                  {/* Skills list */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-linear-to-r ${category.color}`}></span>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Proficiency Bars */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>

            {[
              { label: 'React & JavaScript', percentage: 95 },
              { label: 'PHP & MySQL', percentage: 90 },
              { label: 'CSS & Responsive Design', percentage: 92 },
              { label: 'Full Stack Development', percentage: 88 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.label}</span>
                  <span className="text-blue-400 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-linear-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ${
                      isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%',
                      transitionDelay: `${index * 0.2}s`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
