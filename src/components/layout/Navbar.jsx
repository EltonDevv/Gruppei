import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('pt');

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
    alert(`A tradução para o idioma selecionado será ativada na fase de internacionalização do projeto.`);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img 
              src="./images/Full-logo-GRUPPEI.png" 
              alt="Gruppei" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/sobre" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Sobre o Guia</Link>
            <Link to="/atrativos-culturais" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Cultura</Link>
            <Link to="/atrativos-naturais" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Natureza</Link>
            <Link to="/infraestrutura" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Meios de Acesso</Link>
            
            <div className="flex items-center gap-6 border-l border-gray-200 pl-6 ml-2">
              <div className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer group">
                <Globe size={20} className="group-hover:animate-spin-slow" />
                <select 
                  value={lang}
                  onChange={handleLanguageChange}
                  className="bg-transparent text-sm font-semibold focus:outline-none cursor-pointer appearance-none"
                >
                  <option value="pt">PT</option>
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                </select>
              </div>

              <Link to="/atrativos-naturais" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm">
                Montar Roteiro
              </Link>
            </div>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-500">
              <Globe size={20} />
              <select 
                value={lang}
                onChange={handleLanguageChange}
                className="bg-transparent text-sm font-semibold focus:outline-none appearance-none"
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link to="/sobre" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium rounded-md hover:bg-gray-50">Sobre o Guia</Link>
              <Link to="/atrativos-culturais" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium rounded-md hover:bg-gray-50">Cultura</Link>
              <Link to="/atrativos-naturais" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium rounded-md hover:bg-gray-50">Natureza</Link>
              <Link to="/infraestrutura" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium rounded-md hover:bg-gray-50">Meios de Acesso</Link>
              <Link to="/atrativos-naturais" onClick={() => setIsOpen(false)} className="w-full mt-4 bg-indigo-600 text-center text-white px-4 py-3 rounded-lg font-medium shadow-sm block">
                Montar Roteiro
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;