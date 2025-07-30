
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const educationData = [
  {
    id: 1,
    title: 'B.Tech in Computer Science And Engineering',
    institution: 'Pranveer Singh Institute Of Technology',
    period: 'Dec 2022 – Jul 2026',
    location: 'Kanpur, Uttar Pradesh',
    aggregate: '73%',
    description: 'Pursuing comprehensive education in computer science fundamentals, software engineering principles, and emerging technologies.',
    skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Operating Systems','Computer Networks','Machine Learning']
  },
  {
    id: 2,
    title: '12th Grade',
    institution: 'City Montessori School',
    period: 'Apr 2021 - Mar 2022',
    location: 'Lucknow, Uttar Pradesh',
    aggregate: '89%',
    description: 'Completed higher secondary education with strong foundation in mathematics, physics, and computer science.',
    skills: ['Mathematics', 'Physics', 'Chemistry', 'Physical Education', 'English']
  },
  {
    id: 3,
    title: '10th Grade',
    institution: 'City Montessori School',
    period: 'Apr 2019 - Mar 2020',
    location: 'Lucknow, Uttar Pradesh',
    aggregate: '87%',
    description: 'Completed secondary education with excellent academic performance and foundational knowledge across subjects.',
    skills: ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi']
  }
];

interface EducationItemProps {
  education: typeof educationData[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}

function EducationItem({ education, index, isActive, onClick }: EducationItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12 cursor-pointer`}
      onClick={onClick}
    >
      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
      >
        <div className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-300 ${
          isActive 
            ? 'bg-purple-500/20 border-purple-400/50 shadow-lg shadow-purple-500/20' 
            : 'bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20'
        }`}>
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-green-500/20 text-green-400">
              <i className="ri-graduation-cap-line text-lg"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{education.title}</h3>
              <p className="text-sm text-purple-400 font-medium">{education.institution}</p>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
            <i className="ri-calendar-line mr-2"></i>
            <span>{education.period}</span>
            <i className="ri-map-pin-line ml-4 mr-2"></i>
            <span>{education.location}</span>
          </div>
          
          <div className="mb-3">
            <span className="text-sm font-medium text-purple-400">Aggregate: </span>
            <span className="text-lg font-bold text-green-400">{education.aggregate}</span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {education.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {education.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-400/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline Node */}
      <div className="w-2/12 flex justify-center">
        <div className="relative">
          <motion.div
            animate={isActive ? { scale: 1.2 } : { scale: 1 }}
            className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
              isActive 
                ? 'bg-purple-500 border-purple-400 shadow-lg shadow-purple-500/50' 
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }`}
          />
          {index < educationData.length - 1 && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="w-5/12"></div>
    </motion.div>
  );
}

export default function EducationTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400 via-blue-500 to-purple-400 opacity-30"></div>
          
          {educationData.map((education, index) => (
            <EducationItem
              key={education.id}
              education={education}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
