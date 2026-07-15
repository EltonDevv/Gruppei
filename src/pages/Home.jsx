import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Destinations from '../components/sections/Destinations';
import About from '../components/sections/About';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Home;