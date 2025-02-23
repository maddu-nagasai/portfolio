import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: 'B.Tech',
    institution: 'KIET Group of Institutions',
    period: '2021 - 2025',
    location: 'Kakinada, India',
    courses: [
      'Networking',
      'Operating Systems',
      'Data Structures',
      'Analysis of Algorithms',
      'Databases',
      'Statistics',
      'Machine Learning',
    ],
  };

  const certificates = [
    {
      title: 'Foundations Of Model Machine Learning',
      issuer: 'IIITH',
    },
    {
      title: 'NLP AI-THON',
      description: 'Developed a Language translator Website in Hackathon @ KIET COLLEGE KAKINADA',
    },
    {
      title: 'Python',
      issuer: 'Ineuron',
    },
    {
      title: 'SalesForce Developer',
      description: 'Internship at TrailBlazer',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {education.degree}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 mt-1">
                  {education.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {education.period} | {education.location}
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                  Relevant Courses
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-2 border-blue-200 dark:border-blue-800 pl-4"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    {cert.issuer && (
                      <p className="text-blue-600 dark:text-blue-400 text-sm">
                        Issued by {cert.issuer}
                      </p>
                    )}
                    {cert.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {cert.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;