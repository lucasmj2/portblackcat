import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Main title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight leading-none">
                BLACKCAT
              </h1>
            </motion.div>

            {/* Subtitle with typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-10"
            >
              <TypeAnimation
                sequence={[
                  'WEB3 CONTENT CREATOR',
                  3000,
                  'BLOCKCHAIN EDUCATOR',
                  3000,
                  'COMMUNITY BUILDER',
                  3000,
                  'DIGITAL STORYTELLER',
                  3000,
                ]}
                wrapper="h2"
                speed={50}
                className="font-orbitron text-xl md:text-3xl text-gray-400 tracking-[0.2em] uppercase"
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-base md:text-lg max-w-2xl mb-12 leading-relaxed"
            >
              Transformando conhecimento complexo em conteúdo educacional acessível e engajador para a comunidade Web3
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                onClick={() => document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Portfólio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Character Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-cyan-600/30 rounded-full blur-3xl" />
            
            {/* Image container with border */}
            <div className="relative">
              {/* Animated border */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-75 blur-lg"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Image placeholder - SUBSTITUA COM SUA IMAGEM */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/50 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                {/* Placeholder - Adicione sua imagem aqui */}
                <img 
                  src="/blackcat-character.png" 
                  alt="BlackCat Character" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback se a imagem não existir
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="text-center p-8">
                        <div class="text-8xl mb-4">🐱</div>
                        <p class="text-purple-400 font-orbitron text-sm">BLACKCAT</p>
                        <p class="text-gray-500 text-xs mt-2">Adicione sua imagem em:<br/>/public/blackcat-character.png</p>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-purple-500/30 rounded-lg"
                animate={{
                  rotate: [0, 90, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-pink-500/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-4 sm:left-6 lg:left-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gray-600 text-xs tracking-widest rotate-90 origin-center">SCROLL</span>
            <ArrowDown className="text-gray-600 w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
