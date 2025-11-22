import React, { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// BlurText animation component
const BlurText = ({ text, delay = 50, animateBy = "words", direction = "top", className = "", style }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function HeroMinimal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { label: "INÍCIO", href: "#hero", highlight: true },
    { label: "SOBRE", href: "#about" },
    { label: "MÉTRICAS", href: "#metrics" },
    { label: "ESPECIALIDADES", href: "#specialties" },
    { label: "PORTFÓLIO", href: "#portfolio" },
    { label: "CONTATO", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
          {/* Menu Button */}
          <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-gray-500 hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
              ) : (
                <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
              )}
            </button>

            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 w-[240px] border border-purple-500/20 bg-black/95 backdrop-blur-xl shadow-2xl mt-2 ml-4 p-4 rounded-lg z-[100]"
              >
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-xl font-bold tracking-tight py-2 px-2 cursor-pointer transition-colors duration-300 font-orbitron"
                    style={{
                      color: item.highlight ? "#a855f7" : "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a855f7";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = item.highlight ? "#a855f7" : "white";
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Signature */}
          <div className="text-4xl font-orbitron font-black gradient-text">
            BC
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col">
        {/* Centered Main Name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <div>
              <BlurText
                text="BLACK"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-black text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap font-orbitron"
                style={{ color: "#a855f7" }}
              />
            </div>
            <div>
              <BlurText
                text="CAT"
                delay={100}
                animateBy="letters"
                direction="top"
                className="font-black text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap font-orbitron"
                style={{ color: "white" }}
              />
            </div>

            {/* Profile Picture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer border-4 border-purple-500/50"
              >
                <img
                  src="/blackcat-character.png"
                  alt="BlackCat"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-4xl">🐱</div>';
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center">
            <BlurText
              text="Transformando conhecimento Web3 em conteúdo viral."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-gray-400 hover:text-white"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
          aria-label="Scroll down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-gray-500 hover:text-white transition-colors duration-300" />
        </motion.button>
      </main>
    </div>
  );
}
