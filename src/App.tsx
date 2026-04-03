import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
//import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Journey from './components/Journey';
import Benefits from './components/Benefits';
import UrgentQuestions from './components/UrgentQuestions';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
  
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        setTimeout(scrollToHash, 100); // retry if not yet rendered
      }
    };
  
    if (window.location.hash) {
      scrollToHash();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Navigation />
      <Hero />
      <Problem />
      <HowItWorks />
      <Journey />
      <Benefits />
      <UrgentQuestions />
      <Trust />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
