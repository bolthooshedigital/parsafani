import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Teaching from '@/components/Teaching';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Loader />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Teaching />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
