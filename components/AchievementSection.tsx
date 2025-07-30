'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    id: 1,
    title: 'HackerRank Gold Badge in Python',
    description: 'Achieved Gold Badge certification in Python programming; reduced code review loops by 20%.',
    icon: 'ri-trophy-line',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20'
  },
  {
    id: 2,
    title: '250+ DSA Problems Solved',
    description: 'Successfully solved over 250 Data Structures and Algorithms problems on LeetCode, GeeksforGeeks, and HackerRank.',
    icon: 'ri-code-box-line',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20'
  },
  {
    id: 3,
    title: 'Event Manager - Navrang Club',
    description: 'As Event Manager of Navrang Club, increased event participation by 70% through strategic planning and execution.',
    icon: 'ri-calendar-event-line',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20'
  },
  {
    id: 4,
    title: 'Infosys Springboard Cohort 3',
    description: 'Completed Infosys Springboard\'s Cohort 3 Pragati Program, gaining hands-on expertise in AI, soft skills, leadership, and career readiness through industry mentorship and collaborative projects.',
    icon: 'ri-graduation-cap-line',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20'
  }
];

export default function AchievementSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Achievements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key accomplishments and milestones in my academic and professional journey
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full ${achievement.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${achievement.icon} text-xl ${achievement.color}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}