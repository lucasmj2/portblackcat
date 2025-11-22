import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TextComparison from './TextComparison';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Sobre Mim
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Arraste o slider para alternar entre Perfil e Objetivo
          </p>
        </motion.div>

        {/* Text Comparison Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TextComparison />
          <p className="text-center text-gray-500 text-sm mt-4">
            💡 Dica: Arraste o controle para ver Perfil (esquerda) ou Objetivo (direita)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
