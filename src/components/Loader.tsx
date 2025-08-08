import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoaderProps {
  onFinish: () => void;
}

const Loader = ({ onFinish }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onFinish();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
            animation: 'gradientShift 3s ease infinite alternate',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 80%)',
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />

            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="Affinity Store Logo"
              className="w-32 h-20 mx-auto mb-4 relative z-10"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />

            {/* Text */}
            <motion.h2
              className="text-3xl font-medium text-gray-800 italic text-center relative z-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Affinity Store
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
