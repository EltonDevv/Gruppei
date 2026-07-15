import { motion } from 'framer-motion';
import { Leaf, Landmark, Map } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Leaf className="w-6 h-6 text-indigo-600" />,
    title: 'Atrativos Naturais',
    description: 'Explore trilhas, cachoeiras e paisagens intocadas com informações precisas e atualizadas.'
  },
  {
    id: 2,
    icon: <Landmark className="w-6 h-6 text-indigo-600" />,
    title: 'Atrativos Culturais',
    description: 'Conecte-se com a história local, monumentos, museus e a cultura viva da nossa região.'
  },
  {
    id: 3,
    icon: <Map className="w-6 h-6 text-indigo-600" />,
    title: 'Roteiros Inteligentes',
    description: 'Sistema integrado para você planejar a rota perfeita entre natureza e cultura.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tudo o que você precisa em um só lugar</h2>
          <p className="text-lg text-gray-600">O sistema Gruppei foi desenhado para oferecer a melhor experiência na descoberta de novos destinos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-indigo-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;