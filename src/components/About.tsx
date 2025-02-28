import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Importing Icons
import { FaPython, FaJava, FaJs, FaReact, FaDocker, FaAws, FaGitAlt, FaDatabase, FaCloud, FaHtml5, FaCss3Alt, FaLinux, FaWindows } from 'react-icons/fa';
import { SiC, SiDjango, SiFlask, SiExpress, SiMongodb, SiPostgresql, SiGooglecloud, SiKubernetes, SiGraphql, SiTypescript, SiSpringboot, SiMysql } from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    {
      category: 'Languages',
      icon: <FaDatabase className="w-6 h-6 text-blue-500" />,
      items: [
        { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'C', icon: <SiC className="text-gray-600" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      icon: <SiSpringboot className="w-6 h-6 text-green-500" />,
      items: [
        { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
        { name: 'Django', icon: <SiDjango className="text-green-700" /> },
        { name: 'Flask', icon: <SiFlask className="text-gray-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-black" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
      ]
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="w-6 h-6 text-purple-500" />,
      items: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: <FaCloud className="w-6 h-6 text-blue-600" />,
      items: [
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-400" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-600" /> },
        
      ]
    },
    {
      category: 'Version Control & Tools',
      icon: <FaGitAlt className="w-6 h-6 text-red-500" />,
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'GitHub', icon: <FaGitAlt className="text-black" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
      ]
    },
    {
      category: 'Operating Systems',
      icon: <FaLinux className="w-6 h-6 text-black" />,
      items: [
        { name: 'Linux', icon: <FaLinux className="text-black" /> },
        { name: 'Windows', icon: <FaWindows className="text-blue-500" /> },
      ]
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
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
            
            <div className="grid md:grid-cols-2 gap-8 justify-center">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {skillGroup.icon}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow">
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