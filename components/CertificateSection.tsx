'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const certificates = [
  {
    id: 1,
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: 'ri-cloud-line',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/20'
  },
  {
    id: 2,
    title: 'AI with Agentforce Champion',
    issuer: 'Salesforce Trailhead',
    icon: 'ri-robot-line',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/20'
  },
  {
    id: 3,
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn',
    icon: 'ri-brain-line',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/20'
  },
  {
    id: 4,
    title: 'Python, HTML, JavaScript, CSS, and Bootstrap Certification',
    issuer: 'Infosys Springboard',
    icon: 'ri-code-s-slash-line',
    color: 'text-green-400',
    bgColor: 'bg-green-500/20'
  },
  {
    id: 5,
    title: 'Operation Job Simulation',
    issuer: 'Goldman Sachs',
    icon: 'ri-briefcase-line',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20'
  }
];

export default function CertificateSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my technical expertise
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 ${certificate.bgColor} rounded-full flex items-center justify-center`}>
                  <i className={`${certificate.icon} text-2xl ${certificate.color}`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {certificate.title}
                </h3>
                <p className="text-sm text-purple-400 font-medium">
                  {certificate.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}