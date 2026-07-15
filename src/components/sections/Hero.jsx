import { motion } from 'framer-motion';
import { Map, Compass } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              O Mapa Vivo do Tapajós
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Descubra o coração da Amazônia.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              O guia digital definitivo para você explorar as praias de areia branca, os rios monumentais e a rica herança cultural de Santarém, Alter do Chão e Belterra.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#diretorio" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                <Compass size={20} />
                Explorar Atrativos
              </a>
              <a href="#sobre" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-lg font-medium transition-all shadow-sm">
                <Map size={20} />
                Ver Categorias
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none mt-8 lg:mt-0"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 relative">
              <img 
                src="/images/3.jpg" 
                alt="Turismo no Tapajós" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shrink-0">
                <Map size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Guia Oficial</p>
                <p className="text-lg font-bold text-gray-900">Atualizado 2026</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;