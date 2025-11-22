import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PortfolioSlider from './PortfolioSlider';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'DataHive Investors',
      category: 'Thread',
      description: 'Post sobre DataHive que recebeu $3.5M da Solana Ventures. Discussão sobre investimentos e ventures no ecossistema Web3.',
      fullDescription: 'Thread viral sobre o investimento de $3.5M da Solana Ventures na DataHive. Análise do impacto no ecossistema, discussão sobre o futuro dos investimentos em Web3 e oportunidades no mercado.',
      metrics: {
        views: '5K',
        engagement: '29',
        shares: '5'
      }
    },
    {
      id: 2,
      title: 'Embaixadores: A Verdade',
      category: 'Thread',
      description: 'Thread viral expondo os bastidores de programas de embaixadores em Web3. Alerta sobre trabalho não remunerado e critérios ocultos.',
      fullDescription: 'Thread impactante sobre a experiência como embaixador da Concordium, revelando critérios ocultos, trabalho não remunerado e limites de ganhos. Discussão sobre valorização de criadores de conteúdo no ecossistema Web3 e a importância de dizer não a trabalho gratuito.',
      metrics: {
        views: '6K',
        engagement: '49',
        shares: '15'
      }
    },
    {
      id: 3,
      title: 'A CLT Está Me Sugando',
      category: 'Reflexão',
      description: 'Post viral sobre a rotina exaustiva da CLT e o sonho de viver da Web3. Reflexão sobre liberdade financeira e qualidade de vida.',
      fullDescription: 'Post autêntico sobre os desafios da rotina CLT e a busca por liberdade através da Web3. Discussão sobre como o trabalho tradicional consome energia e tempo, impedindo o foco em projetos pessoais. Ressonância com milhares que vivem a mesma realidade.',
      metrics: {
        views: '8K',
        engagement: '116',
        shares: '37'
      }
    },
    {
      id: 4,
      title: 'Web3: Liberdade e Responsabilidade',
      category: 'Artigo',
      description: 'Artigo completo sobre autonomia e segurança na Web3. Grande liberdade significa grande responsabilidade no universo descentralizado.',
      fullDescription: 'Artigo educacional profundo sobre a revolução Web3, explorando o equilíbrio entre liberdade digital e responsabilidade pessoal. Aborda segurança de wallets, seed phrases, golpes modernos, ferramentas de proteção e o papel das comunidades. Escrito para a coluna THE FI da P2P.me Brasil.',
      metrics: {
        views: '5K',
        engagement: '39',
        shares: '3'
      }
    },
  ];

  return (
    <section id="portfolio" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
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
            Portfólio
          </h2>
          <div className="h-1 w-24 bg-white" />
        </motion.div>

        {/* Portfolio Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PortfolioSlider projects={projects} />
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
