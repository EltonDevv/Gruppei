import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, Compass } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/28.jpg" 
            alt="Paisagem de Alter do Chão" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Muito mais que um guia.
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto font-medium drop-shadow-md">
            Somos o diretório local de cultura e natureza do Tapajós.
          </p>
        </motion.div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Quem Somos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mapeando as riquezas da nossa terra.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O GRUPPEI tem por objetivo registrar e promover a riqueza incalculável do polo Santarém, Alter do Chão e Belterra. Construímos esta plataforma digital para conectar o turista mundial com as raízes, os rios e o povo da Amazônia.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Pilares</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-indigo-600">
                <Compass size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Curadoria</h4>
              <p className="text-sm text-gray-600">Filtramos os melhores pontos turísticos, garantindo que você tenha acesso a informações precisas sobre como chegar e o que esperar.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-indigo-600">
                <MapPin size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Mapeamento</h4>
              <p className="text-sm text-gray-600">Organizamos dados logísticos reais e infraestrutura do ecossistema local para facilitar a tomada de decisão antes da viagem.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-indigo-600">
                <Camera size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Valorização</h4>
              <p className="text-sm text-gray-600">Colocamos em evidência a cultura indígena, os artesãos, a gastronomia típica e a preservação do meio ambiente.</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Idealizadores do Guia</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-100 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-gray-900">Paulo Sena</h4>
              <p className="text-sm text-indigo-600 font-medium mt-1">Diretor de Curadoria</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-gray-900">Rosali Sena</h4>
              <p className="text-sm text-indigo-600 font-medium mt-1">Pesquisa & Patrimônio</p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
              <h4 className="text-xl font-bold text-gray-900">Benjamin Castillo</h4>
              <p className="text-sm text-indigo-600 font-medium mt-1">Tecnologia & UX</p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Sobre;