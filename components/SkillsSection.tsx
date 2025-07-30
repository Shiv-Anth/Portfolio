'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
  { name: 'Python', level: 85, color: 'from-blue-400 to-blue-600' },
  { name: 'React', level: 88, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', level: 82, color: 'from-green-400 to-green-600' },
  { name: 'TypeScript', level: 80, color: 'from-blue-500 to-purple-600' },
  { name: 'Machine Learning', level: 75, color: 'from-purple-400 to-pink-500' },
  { name: 'Database Design', level: 85, color: 'from-indigo-400 to-purple-600' },
  { name: 'REST APIs', level: 90, color: 'from-teal-400 to-cyan-500' },
];

interface SkillBarProps {
  skill: typeof skills[0];
  index: number;
  inView: boolean;
}

function SkillBar({ skill, index, inView }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-gray-800 dark:text-white">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${animatedLevel}%` : 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function RadialSkill({ skill, index, inView }: SkillBarProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, index]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedLevel / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center"
    >
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-gray-200 dark:text-gray-700"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-purple-400" stopColor="currentColor" />
              <stop offset="100%" className="text-blue-500" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">{animatedLevel}%</span>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-800 dark:text-white text-center">{skill.name}</h3>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [viewMode, setViewMode] = useState<'bars' | 'radial'>('bars');

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with hands-on experience in full-stack development
          </p>
          
          {/* View Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/30 dark:border-white/10">
              <button
                onClick={() => setViewMode('bars')}
                className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  viewMode === 'bars' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                <i className="ri-bar-chart-line mr-2"></i>
                Progress Bars
              </button>
              <button
                onClick={() => setViewMode('radial')}
                className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  viewMode === 'radial' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600'
                }`}
              >
                <i className="ri-donut-chart-line mr-2"></i>
                Radial Charts
              </button>
            </div>
          </div>
        </motion.div>

        {viewMode === 'bars' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} inView={inView} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <RadialSkill key={skill.name} skill={skill} index={index} inView={inView} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}