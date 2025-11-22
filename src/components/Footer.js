import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/20 bg-gradient-to-b from-transparent to-purple-600/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 font-orbitron">
              <span className="gradient-text">blackcat</span>
              <span className="text-purple-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Criador de conteúdo Web3 focado em educação e threads virais.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-purple-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-purple-400 transition-colors">
                  Métricas
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-purple-400 transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-purple-400 transition-colors">
                  Portfólio
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/blackcaatt_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all text-sm font-bold"
              >
                𝕏
              </a>
              <a
                href="https://t.me/LucasMnzs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all text-sm font-bold"
              >
                TG
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
          >
            <p>
              © {currentYear} Lucas Menezes. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido com <span className="text-purple-400">♦</span> para Web3
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
