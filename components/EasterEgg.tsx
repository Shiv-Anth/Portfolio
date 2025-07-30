
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const expectedKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    // Handle window resize
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.code];
      if (newCode.length > expectedKonami.length) {
        newCode.shift();
      }
      setKonamiCode(newCode);

      if (JSON.stringify(newCode) === JSON.stringify(expectedKonami)) {
        setShowSecretMessage(true);
        setTimeout(() => setShowSecretMessage(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [konamiCode]);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 9) {
      setIsVisible(true);
      setClickCount(0);
    }
  };

  return (
    <>
      {/* Hidden clickable area (logo trigger) */}
      <div 
      className="fixed top-4 left-4 w-16 h-16 z-50 cursor-pointer bg-purple-500 text-white flex items-center justify-center rounded-full shadow-lg"
      onClick={handleLogoClick}
      >
        ?
        </div>


      {/* Easter Egg Animation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVisible(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
              >
                <i className="ri-star-line text-3xl text-white"></i>
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4">🎉 You Found It!</h3>
              <p className="text-gray-300 mb-6">
                Congratulations! You discovered the hidden easter egg. 
                You have excellent attention to detail - just what I look for in great collaborators!
              </p>
              
              <div className="flex gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVisible(false)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-close-line mr-2"></i>
                  Close
                </motion.button>
                
                <motion.a
                  href="https://linkedin.com/in/ojasvee-gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-linkedin-line mr-2"></i>
                  Connect
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konami Code Secret Message */}
      <AnimatePresence>
        {showSecretMessage && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg backdrop-blur-sm"
          >
            <div className="flex items-center">
              <i className="ri-gamepad-line mr-2"></i>
              <span className="font-medium">Konami Code Activated! 🎮 You're a true developer!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles */}
      {windowSize.width > 0 && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
              initial={{ 
                x: Math.random() * windowSize.width,
                y: windowSize.height + 10,
              }}
              animate={{
                y: -10,
                x: Math.random() * windowSize.width,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
