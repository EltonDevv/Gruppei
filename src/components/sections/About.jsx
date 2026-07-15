import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
              <img 
                src="/images/foto-aerea-rio-com-aguas-cristalinas.jpg" 
                alt="Conheça a região" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-indigo-600 rounded-2xl -z-10 opacity-20"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">
              O Nosso Propósito
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O acervo mais completo de experiências do Tapajós.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O Gruppei nasceu com um objetivo claro: ser a plataforma definitiva para catalogar, preservar e promover os atrativos naturais e culturais da nossa região. Nós organizamos a informação para que você organize a viagem perfeita.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Informações validadas e atualizadas do destino', 
                'Curadoria de atrativos naturais, praias e trilhas', 
                'Resgate do patrimônio histórico e folclórico'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  {item}
                 </li>
              ))}
            </ul>

            <Link to="/sobre" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-sm inline-block">
              Conheça Nossa História
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;