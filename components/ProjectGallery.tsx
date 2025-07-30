'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'LuminHealth - Mental Health Detection',
    description: 'Advanced AI-powered platform for mental health screening using machine learning algorithms and sentiment analysis.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20application%20interface%20showing%20mental%20health%20dashboard%20with%20charts%20and%20analytics%2C%20clean%20UI%20design%20with%20blue%20and%20purple%20gradients%2C%20professional%20medical%20software%20interface&width=600&height=400&seq=project001&orientation=landscape',
    tech: ['Python', 'TensorFlow', 'React', 'Flask', 'PostgreSQL'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Ojasvee10/Lumipsyche',
    liveUrl: 'https://luminhealth.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'AI-Powered Elderly Care System',
    description: 'Comprehensive health monitoring system for elderly patients with real-time alerts and automated care recommendations.',
    image: 'https://readdy.ai/api/search-image?query=Elderly%20care%20technology%20interface%20with%20health%20monitoring%20dashboard%2C%20medical%20devices%2C%20clean%20modern%20design%2C%20healthcare%20technology%20with%20warm%20colors&width=600&height=400&seq=project002&orientation=landscape',
    tech: ['Python', 'OpenCV', 'React', 'Node.js', 'MongoDB'],
    category: 'Healthcare',
    githubUrl: 'https://github.com/Ojasvee10/elderlycareai',
    liveUrl: 'https://eldercare-demo.vercel.app',
    featured: true
  },
  {
    id: 3,
    title: 'Virtual Mouse Control System',
    description: 'Hand gesture-based mouse control using computer vision and MediaPipe for touchless interaction.',
    image: 'https://readdy.ai/api/search-image?query=Computer%20vision%20hand%20tracking%20interface%20with%20gesture%20recognition%2C%20futuristic%20technology%20display%2C%20hand%20gestures%20controlling%20digital%20interface%2C%20modern%20tech%20aesthetic&width=600&height=400&seq=project003&orientation=landscape',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    category: 'Computer Vision',
    githubUrl: 'https://github.com/Ojasvee10/ai_virtual_mouse',
    liveUrl: null,
    featured: false
  },
  {
    id: 4,
    title: 'Real-time Chat Application',
    description: 'Modern chat application with real-time messaging, file sharing, and group chat functionality.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20chat%20application%20interface%20with%20message%20bubbles%2C%20clean%20messaging%20UI%2C%20real-time%20communication%20app%20with%20modern%20design%2C%20dark%20and%20light%20theme&width=600&height=400&seq=project004&orientation=landscape',
    tech: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    category: 'Web Development',
    githubUrl: 'https://github.com/ojasvee/realtime-chat',
    liveUrl: 'https://chat-app-demo.vercel.app',
    featured: false
  },
  {
    id: 5,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20product%20listings%2C%20shopping%20cart%2C%20clean%20design%2C%20professional%20online%20store%20layout%20with%20modern%20UI%20elements&width=600&height=400&seq=project005&orientation=landscape',
    tech: ['React', 'Redux', 'Node.js', 'Stripe', 'PostgreSQL'],
    category: 'Web Development',
    githubUrl: 'https://github.com/Ojasvee10/Rewear',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: false
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern design, dark mode, and interactive animations.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20portfolio%20website%20interface%20with%20glassmorphism%20design%2C%20dark%20mode%2C%20clean%20professional%20layout%2C%20interactive%20elements%20and%20animations&width=600&height=400&seq=project006&orientation=landscape',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Development',
    githubUrl: 'https://github.com/ojasvee/portfolio',
    liveUrl: 'https://ojasvee.vercel.app',
    featured: false
  }
];

const categories = ['All', 'AI/ML', 'Healthcare', 'Computer Vision', 'Web Development'];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}

function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300">
        {/* Project Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Overlay Icons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="ri-github-line text-lg"></i>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="ri-external-link-line text-lg"></i>
              </motion.a>
            )}
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-purple-500/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
              {project.category}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ProjectModalProps {
  project: typeof projects[0] | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          >
            <i className="ri-close-line text-xl"></i>
          </button>

          {/* Project Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Project Details */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{project.title}</h2>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-github-line mr-2"></i>
                  View Code
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-purple-600/80 backdrop-blur-sm rounded-full text-white hover:bg-purple-600/90 transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and projects across different technologies and domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full border border-white/30 dark:border-white/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}