import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Map, Calendar, Compass, MapPin } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AlterDoChao = () => {
  // Garante que a página sempre abra no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Hero da Página Interna */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/alter-do-chao.jpg" 
            alt="Vista de Alter do Chão" 
            className="w-full h-full object-cover"
          />
          {/* Gradiente escuro para dar leitura ao texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Destino Destaque
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Alter do Chão
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-md">
            O Caribe Amazônico e o coração do ecossistema local do Tapajós.
          </p>
        </motion.div>
      </section>

      {/* Corpo Editorial (Formato Revista) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Intro */}
        <div className="prose prose-lg md:prose-xl prose-indigo mx-auto mb-16 text-gray-600">
          <p className="lead text-2xl text-gray-900 font-medium mb-8">
            Do interesse inicial ao primeiro roteiro, Alter do Chão é o destino que conecta praias de areia branca, cultura indígena e a imensidão da floresta amazônica.
          </p>
        </div>

        {/* Grid de Informações Rápidas */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <Map className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Como chegar?</h3>
            <p className="text-sm text-gray-600">
              A 37 km de Santarém. O acesso pode ser feito pela rodovia PA-457 (via pavimentada) em cerca de 40 minutos de carro, ou via fluvial pelo Rio Tapajós.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <Calendar className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Qual a melhor época?</h3>
            <p className="text-sm text-gray-600">
              O período de vazante dos rios (Agosto a Dezembro) é ideal para curtir as famosas praias de areias brancas que se formam na região.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <Compass className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">O que fazer?</h3>
            <p className="text-sm text-gray-600">
              Passeios de lancha, banhos de rio, trilhas ecológicas na floresta, degustação da gastronomia local e imersão cultural nas comunidades.
            </p>
          </div>
        </div>

        {/* Seção de Pontos Turísticos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
            <MapPin className="text-indigo-600" />
            Pontos Turísticos de Alter do Chão
          </h2>

          <div className="space-y-12">
            {/* Ponto 1 */}
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Ilha do Amor</h3>
              <div className="w-16 h-1 bg-indigo-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Cartão postal de Alter do Chão, é uma imensa faixa de areia branca banhada pelas águas límpidas do rio Tapajós e separada da vila pelo Lago Verde. A travessia é feita em tradicionais catraias (pequenas canoas a remo), proporcionando uma experiência única logo na chegada. Conta com excelente estrutura de quiosques e barracas para o turista.
              </p>
            </div>

            {/* Ponto 2 */}
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Serra da Piroca</h3>
              <div className="w-16 h-1 bg-indigo-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                O ponto mais alto da região. Uma trilha de nível moderado leva os visitantes até o topo, onde uma cruz marca a presença histórica das missões jesuítas. O esforço é recompensado por uma vista panorâmica de 360 graus espetacular, de onde se vê a Ilha do Amor, o Lago Verde e o Rio Tapajós.
              </p>
            </div>

            {/* Ponto 3 */}
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Lago Verde</h3>
              <div className="w-16 h-1 bg-indigo-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Também conhecido como o Lago dos Muiraquitãs, possui águas cristalinas e calmas, ideais para passeios de caiaque e stand-up paddle. A floresta ao redor reflete nas águas, criando um cenário verde esmeralda que abriga nascentes e igapós.
              </p>
            </div>

            {/* Ponto 4 */}
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">Floresta Encantada</h3>
              <div className="w-16 h-1 bg-indigo-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Uma área de igapó (floresta alagada) que se torna navegável durante o período de cheia. O passeio de canoa por entre as árvores submersas, com a luz do sol filtrando pela copa das árvores, cria uma atmosfera mágica e silenciosa, perfeita para observação de aves.
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AlterDoChao;