import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, GraduationCap, TrendingUp, BookOpen, Users, Zap } from 'lucide-react';

const Specialties = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialties = [
    {
      icon: MessageSquare,
      title: 'Criação de Threads',
      description: 'Desenvolvimento de threads estruturadas e envolventes que capturam atenção e transmitem conhecimento de forma eficaz.',
    },
    {
      icon: GraduationCap,
      title: 'Educação Web3',
      description: 'Conteúdo educacional que simplifica conceitos complexos de blockchain e criptomoedas para todos os públicos.',
    },
    {
      icon: TrendingUp,
      title: 'Análise de Mercado',
      description: 'Análises profundas e insights sobre tendências, oportunidades e movimentos do mercado cripto.',
    },
    {
      icon: BookOpen,
      title: 'Storytelling',
      description: 'Narrativas envolventes que conectam tecnologia com experiências humanas reais e relevantes.',
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Estratégias para construir e engajar comunidades fortes e ativas no ecossistema Web3.',
    },
    {
      icon: Zap,
      title: 'Conteúdo Viral',
      description: 'Criação de conteúdo com alto potencial de viralização mantendo qualidade e valor educacional.',
    },
  ];

  return (
    <section id="specialties" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Especialidades
          </h2>
          <div className="h-1 w-24 bg-white" />
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 border border-gray-800 bg-gray-900/20 hover:border-gray-700 transition-all duration-300">
                {/* Icon */}
                <div className="mb-4">
                  <specialty.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 tracking-tight">
                  {specialty.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  {specialty.description}
                </p>

                {/* Hover line */}
                <div className="mt-4 h-px bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
