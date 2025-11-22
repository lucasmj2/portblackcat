import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ShaderAnimation from './ShaderAnimation';

const SplashScreen = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Shader Animation Background */}
      <ShaderAnimation />

      {/* Overlay com conteúdo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter font-orbitron">
            <span className="gradient-text">BLACK</span>
            <span className="text-white">CAT</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto max-w-xs"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-gray-400 text-lg md:text-xl mt-8 tracking-widest font-orbitron"
        >
          WEB3 CONTENT CREATOR
        </motion.p>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-16"
          >
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Enter button */}
        {!isLoading && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onComplete}
            className="mt-16 px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold hover:bg-purple-500/10 transition-all font-orbitron"
          >
            ENTER SITE
          </motion.button>
        )}
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-1/4 w-40 h-40 border border-purple-500/20 rounded-lg opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-pink-500/20 rounded-full opacity-20"
      />
    </div>
  );
};

export default SplashScreen;
