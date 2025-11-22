import { useState } from "react";
import { GripVertical } from "lucide-react";
import { motion } from "framer-motion";

function TextComparison() {
  const [inset, setInset] = useState(50);
  const [onMouseDown, setOnMouseDown] = useState(false);

  const onMouseMove = (e) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if (e.clientX !== undefined) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative w-full min-h-[500px] overflow-hidden rounded-2xl select-none border border-purple-500/20 bg-black"
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      {/* Slider Line */}
      <div
        className="bg-gradient-to-b from-purple-500 to-pink-500 h-full w-1 absolute z-20 top-0 -ml-1 select-none shadow-lg shadow-purple-500/50"
        style={{
          left: inset + "%",
        }}
      >
        {/* Slider Handle */}
        <button
          className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full hover:scale-110 transition-all w-12 h-12 select-none -translate-y-1/2 absolute top-1/2 -ml-6 z-30 cursor-ew-resize flex justify-center items-center shadow-lg shadow-purple-500/50 border-2 border-white/20"
          onTouchStart={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onMouseDown={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onTouchEnd={() => setOnMouseDown(false)}
          onMouseUp={() => setOnMouseDown(false)}
        >
          <GripVertical className="h-5 w-5 select-none text-white" />
        </button>
      </div>

      {/* Right Side - OBJETIVO */}
      <div 
        className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-br from-purple-900/20 to-pink-900/20"
        style={{
          clipPath: "inset(0 0 0 " + inset + "%)",
        }}
      >
        <div className="p-8 md:p-12 h-full flex flex-col justify-center items-end">
          {/* Label OBJETIVO */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            style={{
              opacity: inset < 90 ? 1 : 0,
              transition: 'opacity 0.2s'
            }}
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white tracking-tight">
              Objetivo
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-2xl text-right">
            <p className="text-gray-300 leading-relaxed text-lg">
              Criar conteúdos que tragam autenticidade e que também eduquem a todos que buscam sobre a temática.
            </p>

            <div className="h-px bg-gradient-to-l from-purple-500/50 to-transparent" />

            <p className="text-gray-400 leading-relaxed">
              Seja sobre oportunidades ou conteúdos educacionais, sempre com transparência e qualidade.
            </p>

            <div className="mt-8 p-6 border border-purple-500/30 bg-purple-900/10 rounded-lg">
              <p className="text-gray-400 text-sm italic">
                "Minha missão é democratizar o acesso ao conhecimento Web3, tornando-o compreensível para todos os níveis de experiência."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Left Side - PERFIL */}
      <div 
        className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-gray-900 to-black"
        style={{
          clipPath: "inset(0 " + (100 - inset) + "% 0 0)",
        }}
      >
        <div className="p-8 md:p-12 h-full flex flex-col justify-center">
          {/* Label PERFIL */}
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            style={{
              opacity: inset > 10 ? 1 : 0,
              transition: 'opacity 0.2s'
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white" />
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white tracking-tight">
              Perfil
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-2">
                Lucas Menezes
              </h3>
              <p className="text-gray-500 uppercase tracking-wider text-sm">
                (blackcat)
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-gray-700 to-transparent" />

            <div className="space-y-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                Sou o Lucas Menezes, mais conhecido como <span className="text-purple-400 font-semibold">blackcat</span>. Sou criador de conteúdo há mais de 3 meses e venho me especializando em aprender sobre a web3 e blockchains.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Meu foco é trazer os conceitos mais complexos de forma descontraída e totalmente educativa. Acredito que trazer esse universo da web3 de forma clara é a virada de chave para um novo mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextComparison;
