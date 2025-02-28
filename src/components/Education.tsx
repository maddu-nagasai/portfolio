import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: 'B.Tech in Computer Science',
    institution: 'KIET Group of Institutions',
    period: '2021 - 2025',
    location: 'Kakinada, India',
    courses: [
      'Advanced Networking',
      'Operating Systems',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Statistical Analysis',
      'Machine Learning',
      'Cloud Computing',
      'Software Engineering'
    ],
  };

  const certificates = [
    {
      title: 'Foundations Of Model Machine Learning',
      issuer: 'IIITH',
      date: 'June 2023',
      icon: <BookOpen className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'NLP AI-THON',
      description: 'Developed a Language translator Website in Hackathon @ KIET COLLEGE KAKINADA',
      date: 'March 2023',
      icon: <Award className="w-5 h-5 text-purple-500" />
    },
    {
      title: 'Python Professional Certification',
      issuer: 'Ineuron',
      date: 'January 2023',
      icon: <BookOpen className="w-5 h-5 text-green-500" />
    },
    {
      title: 'SalesForce Developer',
      description: 'Internship at TrailBlazer',
      date: 'August 2022',
      icon: <Award className="w-5 h-5 text-blue-500" />
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
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {education.degree}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 mt-1">
                  {education.institution}
                </p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-2">
                  <Calendar className="w-4 h-4" />
                  <span>{education.period}</span>
                  <span className="mx-1">•</span>
                  <MapPin className="w-4 h-4" />
                  <span>{education.location}</span>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  Relevant Courses
                </h5>
                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
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
                    className="border-l-2 border-purple-200 dark:border-purple-800 pl-4"
                  >
                    <div className="flex items-center gap-2">
                      {cert.icon}
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                    </div>
                    {cert.issuer && (
                      <p className="text-purple-600 dark:text-purple-400 text-sm mt-1">
                        Issued by {cert.issuer}
                      </p>
                    )}
                    {cert.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {cert.description}
                      </p>
                    )}
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </p>
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