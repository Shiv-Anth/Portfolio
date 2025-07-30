
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  { number: 5, label: 'Projects Completed', icon: 'ri-folder-line', suffix: '+' },
  { number: 0, label: 'Years Experience', icon: 'ri-time-line', suffix: '' },
  { number: 250, label: 'DSA Problems Solved', icon: 'ri-code-line', suffix: '+' },
  { number: 73, label: 'Academic Aggregate', icon: 'ri-graduation-cap-line', suffix: '%' }
];

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
}

function Counter({ end, duration, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      if (end === 0) {
        setCount(0);
        return;
      }
      
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold text-purple-600 dark:text-purple-400">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">By the Numbers</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key metrics that showcase my academic journey and programming achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                <i className={`${stat.icon} text-2xl text-purple-600 dark:text-purple-400`}></i>
              </div>
              <Counter end={stat.number} duration={2000} suffix={stat.suffix} />
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
