import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Waves, Sun } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AtrativosNaturais = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="images/1.png" 
            alt="Natureza em Santarém" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Ecoturismo
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Atrativos Naturais
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-md">
            Rios monumentais, praias de areia branca e o verde infinito da Amazônia.
          </p>
        </motion.div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="prose prose-lg md:prose-xl prose-green mx-auto mb-16 text-gray-600">
          <p className="lead text-2xl text-gray-900 font-medium mb-8">
            Santarém é um santuário de águas doces. O município é abraçado pelas bacias do Rio Amazonas, Tapajós e Arapiuns, criando ecossistemas únicos e praias que surgem no verão amazônico.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
            <Waves className="text-green-600" />
            As Grandes Águas
          </h2>

          <div className="space-y-12">
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Encontro das Águas</h3>
              <div className="w-16 h-1 bg-green-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Um dos mais belos espetáculos da Amazônia. As águas ocre-argilosas do rio Amazonas e as verde-azuladas do rio Tapajós correm paralelamente sem se misturar, devido às diferenças de densidade, temperatura e velocidade. Pode ser observado diariamente a partir da orla da cidade.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Rio Tapajós</h3>
              <div className="w-16 h-1 bg-green-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                O principal curso d'água de Santarém. Com suas águas de coloração esverdeada, durante o verão deixa à mostra quase 100 km lineares de praias de areia fina, constituindo-se em um dos mais belos rios do Brasil.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
            <Sun className="text-green-600" />
            Praias Fluviais
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Praia do Maracanã</h4>
              <p className="text-sm text-gray-600">A praia mais próxima do eixo urbano. Com extensa faixa de areia, orla de concreto e visão privilegiada do tráfego de grandes navios no Tapajós.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Praia de Ponta de Pedras</h4>
              <p className="text-sm text-gray-600">Famosa pelo seu artesanato em ouriço de castanha e pela gastronomia impecável, especialmente o festival do charutinho frito.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Praia de Carapanari</h4>
              <p className="text-sm text-gray-600">Ambiente rústico e calmo. Abriga restaurantes renomados como a Casa do Saulo, oferecendo infraestrutura premium e contato com a floresta preservada.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Praia do Pajuçara</h4>
              <p className="text-sm text-gray-600">Destaque para a culinária regional e a realização anual do Festival Gastronômico dos Derivados do Caju, impulsionando o turismo de base comunitária.</p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default AtrativosNaturais;