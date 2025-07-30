
'use client';

import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import EducationTimeline from '../components/ExperienceTimeline';
import AchievementSection from '../components/AchievementSection';
import CertificateSection from '../components/CertificateSection';
import ProjectGallery from '../components/ProjectGallery';
import StatsCounter from '../components/StatsCounter';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';
import EasterEgg from '../components/EasterEgg';

export default function Home() {
  useEffect(() => {
    // Set default dark mode
    document.documentElement.classList.add('dark');
    
    // Smooth scrolling for all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-500">
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Easter Egg */}
      <EasterEgg />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>
        
        {/* Stats Counter */}
        <StatsCounter />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Education Timeline */}
        <EducationTimeline />
        
        {/* Achievements Section */}
        <AchievementSection />
        
        {/* Certificates Section */}
        <CertificateSection />
        
        {/* Projects Gallery */}
        <ProjectGallery />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 Ojasvee Gupta. Built with Next.js, TypeScript, and lots of ☕
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/Ojasvee10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="ri-github-line text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/ojasvee-gupta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="ri-linkedin-line text-xl"></i>
            </a>
            <a href="mailto:ojasveegupta10@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="ri-mail-line text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
