'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import QRCode from './QRCode';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'ojasveegupta10@gmail.com',
      href: 'mailto:ojasveegupta10@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: 'ri-linkedin-line',
      label: 'LinkedIn',
      value: '/in/ojasvee-gupta',
      href: 'https://linkedin.com/in/ojasvee-gupta',
      color: 'text-blue-400'
    },
    {
      icon: 'ri-github-line',
      label: 'GitHub',
      value: '/ojasvee',
      href: 'https://github.com/Ojasvee10',
      color: 'text-purple-400'
    },
    {
      icon: 'ri-whatsapp-line',
      label: 'WhatsApp',
      value: '+91 8604452928',
      href: 'https://wa.me/918604452928',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send a Message</h3>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-white/10 focus:border-purple-400 focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-white/10 focus:border-purple-400 focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-white/10 focus:border-purple-400 focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-lg border border-white/30 dark:border-white/10 focus:border-purple-400 focus:outline-none text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg border border-green-500/30"
                >
                  <i className="ri-check-line mr-2"></i>
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30"
                >
                  <i className="ri-error-warning-line mr-2"></i>
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="p-8 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${method.color} bg-current/20`}>
                      <i className={`${method.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-white">{method.label}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* QR Code */}
            <div className="p-8 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Quick Access</h3>
              <QRCode />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}