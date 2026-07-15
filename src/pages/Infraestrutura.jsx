import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plane, Ship, Car } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Infraestrutura = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="images/2.png" 
            alt="Infraestrutura" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Apoio ao Turismo
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Meios de Acesso
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-md">
            Como chegar e navegar pelo coração do ecossistema do Tapajós.
          </p>
        </motion.div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="prose prose-lg md:prose-xl prose-indigo mx-auto mb-16 text-gray-600">
          <p className="lead text-2xl text-gray-900 font-medium mb-8">
            Santarém é o principal polo estratégico e logístico do oeste do Pará, conectando o Brasil à imensidão amazônica através dos ares, rios e rodovias.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-10 mb-20">
          
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                <Plane size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Acesso Aéreo</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              O transporte aéreo é realizado através de voos diários no <strong>Aeroporto Internacional Maestro Wilson Fonseca</strong>. Administrado pela AENA Brasil, é o quinto mais movimentado da região norte.
            </p>
            <p className="text-gray-600 leading-relaxed">
              O aeroporto passou por expansão e atende aeronaves de grande porte que ligam a cidade principalmente aos hubs de Belém e Manaus, estendendo-se para as demais regiões do país.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <Ship size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Acesso Hidroviário</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              A modalidade hidroviária é o mais importante meio de locomoção de passageiros e transporte de cargas na região. Embarcações de médio e grande porte fazem a navegação de longo curso para capitais como Belém, Manaus e Macapá.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A cidade conta com o moderno <strong>Terminal Hidroviário de Cargas e Passageiros Joaquim da Costa Pereira</strong>, que possui capacidade para 5 mil usuários por dia, estrutura climatizada e fingers para embarque seguro.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                <Car size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Acesso Terrestre</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              O acesso principal por terra até a capital do Estado e o centro-oeste do Brasil se dá através da <strong>BR-163 (Rodovia Santarém-Cuiabá)</strong>. O Terminal Rodoviário Jonathas de Almeida e Silva gerencia o fluxo de passageiros interestaduais e intermunicipais.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Para acessar a vila balneária, utiliza-se a <strong>PA-457 (Rodovia Everaldo Martins)</strong>, que liga o centro urbano à Vila de Alter do Chão em um trajeto pavimentado de 29 km.
            </p>
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Infraestrutura;