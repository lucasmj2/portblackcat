import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lucas@example.com',
      href: 'mailto:lucas@example.com',
    },
    {
      icon: MessageCircle,
      label: 'Twitter',
      value: '@blackcaatt_',
      href: 'https://twitter.com/blackcaatt_',
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: 'LucasMnzs',
      href: 'https://t.me/LucasMnzs',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />
      
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Vamos Conversar
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Tem um projeto em mente? Vamos criar algo incrível juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 font-orbitron">Formas de Contato</h3>

            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/60 bg-gradient-to-br from-purple-600/5 to-pink-600/5 hover:from-purple-600/10 hover:to-pink-600/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-all">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                        {method.label}
                      </h4>
                      <p className="text-gray-400 text-sm">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/blackcaatt_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all"
                >
                  <span className="text-sm font-bold">𝕏</span>
                </a>
                <a
                  href="https://t.me/LucasMnzs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-purple-500/30 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all"
                >
                  <span className="text-sm font-bold">TG</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-purple-600/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-purple-600/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-purple-600/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <span>✓ Mensagem Enviada!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
