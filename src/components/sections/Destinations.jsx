import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MapPin, Sun, CheckCircle2 } from 'lucide-react';
import { inventoryData } from '../../data/inventory';

const Destinations = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedItem]);

  const filteredData = inventoryData.filter(item => 
    activeFilter === 'todos' ? true : item.category === activeFilter
  );

  return (
    <section id="diretorio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight max-w-3xl">
            Categorias para descobrir o Tapajós além dos passeios.
          </h2>
          
          <div className="flex flex-wrap gap-3 mt-8">
            {['todos', 'naturais', 'culturais', 'serviços','gastronomia','eventos'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 mb-6 shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-wide">
                    {item.tag}
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-indigo-600 font-semibold mt-auto gap-2 group-hover:gap-3 transition-all">
                    <span>Ver detalhes</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center md:p-4">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/60 hidden md:block backdrop-blur-sm cursor-pointer"
            />

            {/* AQUI ESTÁ A MÁGICA QUE OCULTA A BARRA DE ROLAGEM */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl bg-white md:rounded-3xl shadow-2xl overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col z-10"
            >
              <div className="relative w-full h-64 md:h-80 bg-gray-200 shrink-0">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover" 
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-900 hover:bg-gray-100 transition shadow-sm"
                  aria-label="Fechar"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 md:p-10 flex-grow">
                <div className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">
                  {selectedItem.tag}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedItem.title}
                </h3>
                
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>{selectedItem.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Como Chegar / Logística</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedItem.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shrink-0">
                      <Sun size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Época Ideal</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{selectedItem.bestSeason}</p>
                    </div>
                  </div>
                </div>

                {selectedItem.amenities && (
                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Estrutura e Serviços</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedItem.amenities.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 size={20} className="text-indigo-500 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Destinations;