import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação das Páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import AlterDoChao from './pages/AlterDoChao';
import AtrativosNaturais from './pages/AtrativosNaturais';
import AtrativosCulturais from './pages/AtrativosCulturais';
import Infraestrutura from './pages/Infraestrutura';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/alter-do-chao" element={<AlterDoChao />} />
        <Route path="/atrativos-naturais" element={<AtrativosNaturais />} />
        <Route path="/atrativos-culturais" element={<AtrativosCulturais />} />
        <Route path="/infraestrutura" element={<Infraestrutura />} />
      </Routes>
    </Router>
  );
}

export default App;