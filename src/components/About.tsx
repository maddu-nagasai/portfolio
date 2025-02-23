import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Importing Icons
import { FaPython, FaJava, FaJs, FaReact, FaDocker, FaAws, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiC, SiDjango, SiFlask, SiExpress, SiMongodb, SiPostgresql, SiGooglecloud} from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C', icon: <SiC /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'HTML & CSS', icon: <FaJs /> }
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Express.js', icon: <SiExpress /> }
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Google Cloud', icon: <SiGooglecloud /> },
        { name: 'Docker', icon: <FaDocker /> }
      ],
    },
    {
      category: 'Version Control & Tools',
      items: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGitAlt /> },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mb-12">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate Software Developer with a strong foundation in full-stack development
                and cloud technologies. Currently pursuing my B.Tech at KIET Group of Institutions,
                I've gained valuable experience through internships at Eduskills and IIIT Hyderabad.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow"
                      >
                        {skill.icon} {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
