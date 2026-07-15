import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, BookOpen } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AtrativosCulturais = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="images/foto-homen-saltando-sobre-um-barco-no-meio-do-rio.jpg" 
            alt="Cultura em Santarém" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Patrimônio Histórico
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Atrativos Culturais
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-md">
            A memória viva dos povos indígenas e a arquitetura colonial da Pérola do Tapajós.
          </p>
        </motion.div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="prose prose-lg md:prose-xl prose-amber mx-auto mb-16 text-gray-600">
          <p className="lead text-2xl text-gray-900 font-medium mb-8">
            Fundada em 1661, Santarém preserva séculos de história. De sítios arqueológicos com as cerâmicas mais antigas das Américas até majestosos solares construídos no ciclo da borracha.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
            <Landmark className="text-amber-600" />
            Edificações e Arquitetura
          </h2>

          <div className="space-y-12">
            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Centro Cultural João Fona</h3>
              <div className="w-16 h-1 bg-amber-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Concluído em 1867, é o segundo prédio mais antigo da cidade. Já sediou os três poderes e hoje abriga um vasto acervo de cerâmica Tapajônica, fósseis e moedas antigas, sendo o principal cartão de visita cultural de Santarém.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Catedral de Nossa Senhora da Conceição</h3>
              <div className="w-16 h-1 bg-amber-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Erguida a partir de 1761, a catedral é o marco histórico e religioso mais imponente da cidade. Em seu interior, guarda o famoso crucifixo de ferro fundido doado pelo cientista alemão Von Martius após sobreviver a um naufrágio em 1819.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">Solar do Barão de Santarém & Teatro Vitória</h3>
              <div className="w-16 h-1 bg-amber-600 mb-4"></div>
              <p className="text-gray-600 leading-relaxed">
                Símbolos do período de riqueza local. O Solar possui três pavimentos de época. O Teatro Vitória, de 1896, desenhado por um engenheiro francês, foi recentemente restaurado e mantém as fachadas originais.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-3">
            <BookOpen className="text-amber-600" />
            Instituições e Museus
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Museu Dica Frazão</h4>
              <p className="text-sm text-gray-600">Reúne o acervo da pioneira artesã que vestiu o Papa João Paulo II usando raízes de patchuli, palhas e sementes amazônicas.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Museu de História e Arte Sacra</h4>
              <p className="text-sm text-gray-600">Localizado na Cúria Diocesana, possui um dos acervos mais diversificados da Região Norte, salvaguardando indumentárias, pinturas e imagens seculares.</p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default AtrativosCulturais;