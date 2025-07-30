'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function QRCode() {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const QRCode = await import('qrcode');
        const resumeUrl = 'https://drive.google.com/file/d/1koj4A_GRoKhJuzr-zNlwCMKDM4XdLAjq/view?usp=sharing'; // Replace with actual resume URL
        const qrDataUrl = await QRCode.toDataURL(resumeUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        });
        setQrCodeUrl(qrDataUrl);
      } catch (error) {
        console.error('Failed to generate QR code:', error);
      }
    };

    generateQRCode();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {qrCodeUrl ? (
          <div className="p-4 bg-white rounded-xl shadow-lg">
            <img
              src={qrCodeUrl}
              alt="Resume QR Code"
              className="w-32 h-32"
            />
          </div>
        ) : (
          <div className="w-40 h-40 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
        
        <motion.div
          className="absolute -inset-2 rounded-xl border-2 border-white/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
        <i className="ri-qr-code-line mr-2"></i>
        Scan to download resume
      </p>
    </motion.div>
  );
}