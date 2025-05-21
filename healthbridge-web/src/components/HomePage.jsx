import { Link } from 'react-router-dom';
import Header from './layout/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import FAQ from './sections/FAQ';
import Footer from './layout/Footer';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}

export default HomePage;
