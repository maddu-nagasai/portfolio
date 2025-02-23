import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Eduskills',
      period: 'Oct 2024 – Dec 2024',
      location: 'India',
      description: [
        'Developed and maintained responsive web applications using MERN stack',
        'Integrated authentication & authorization using JWT and OAuth',
        'Collaborated with team using Git and Agile methodologies',
      ],
    },
    {
      title: 'Summer Intern',
      company: 'IIIT Hyderabad',
      period: 'Apr 2023 – Jun 2023',
      location: 'Hyderabad, India',
      description: [
        'Developed a Flight Booking Platform using Flask',
        'Implemented user authentication and flight search functionality',
        'Integrated payment systems and real-time booking management',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Professional Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-800" />
                <div className="absolute left-0 top-0 w-8 h-8 bg-blue-500 rounded-full -translate-x-1/2 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {exp.period} | {exp.location}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;