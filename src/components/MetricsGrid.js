import { cn } from '../lib/utils';
import { useEffect, useState, useRef } from 'react';
import {
  Users,
  Eye,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  RotateCcw,
} from "lucide-react";

// Hook para animação de contagem
const useCountUp = (target, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function para animação suave
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      if (typeof target === 'number') {
        setCount(Math.floor(target * easeOutQuart));
      } else if (typeof target === 'string') {
        // Para valores como "188.5K" ou "6.5%"
        if (target.includes('K')) {
          const num = parseFloat(target.replace('K', ''));
          setCount((num * easeOutQuart).toFixed(1) + 'K');
        } else if (target.includes('%')) {
          const num = parseFloat(target.replace('%', ''));
          setCount((num * easeOutQuart).toFixed(1) + '%');
        } else {
          setCount(Math.floor(parseFloat(target) * easeOutQuart));
        }
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, duration, isVisible]);

  return count;
};

export function MetricsGrid() {
  const metrics = [
    {
      title: "Seguidores Verificados",
      value: "170",
      description: "Seguidores verificados com engajamento ativo.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Impressões",
      value: "188.5K",
      description: "Total de visualizações do conteúdo.",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: "Taxa de Engajamento",
      value: "6.5%",
      description: "Taxa média de engajamento do perfil.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Curtidas",
      value: "3.6K",
      description: "Total de curtidas em todas as publicações.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Respostas",
      value: "1.9K",
      description: "Comentários gerados pelo conteúdo.",
      icon: <MessageCircle className="w-8 h-8" />,
    },
    {
      title: "Compartilhamentos",
      value: "18",
      description: "Conteúdo compartilhado pela comunidade.",
      icon: <Share2 className="w-8 h-8" />,
    },
    {
      title: "Itens Salvos",
      value: "278",
      description: "Pessoas que salvaram o conteúdo.",
      icon: <Bookmark className="w-8 h-8" />,
    },
    {
      title: "Reposts",
      value: "96",
      description: "Republicações por outros usuários.",
      icon: <RotateCcw className="w-8 h-8" />,
    },
  ];
  
  return (
    <section id="metrics" className="relative py-32 bg-black overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Estatísticas do Perfil
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6" />
          <p className="text-gray-400 text-lg">Métricas que mostram o impacto do conteúdo Web3</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <Metric key={metric.title} {...metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Metric = ({
  title,
  value,
  description,
  icon,
  index,
}) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animatedValue = useCountUp(value, 2500, isVisible);

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col lg:border-r py-12 relative group/feature border-purple-500/20",
        (index === 0 || index === 4) && "lg:border-l border-purple-500/20",
        index < 4 && "lg:border-b border-purple-500/20"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-6 relative z-10 px-10 text-purple-400 flex justify-center">
        {icon}
      </div>
      <div className="text-xl font-bold mb-4 relative z-10 px-10 text-center min-h-[3rem] flex items-center justify-center">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-purple-500/30 group-hover/feature:bg-gradient-to-b group-hover/feature:from-purple-500 group-hover/feature:to-pink-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white font-orbitron whitespace-nowrap">
          {title}
        </span>
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-6 relative z-10 px-10 text-center">
        <span className="gradient-text font-orbitron">{animatedValue}</span>
      </div>
      <p className="text-base text-gray-400 relative z-10 px-12 text-center mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default MetricsGrid;
