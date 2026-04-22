import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import Hero from '../pages/Hero';
import AboutSection from '../pages/AboutSection';
import ProductSection from '../pages/Produc';
import TestimonialPage from '../pages/TestimonialPage';
import ContactPage from '../pages/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductSection />
        <TestimonialPage />
        <ContactPage />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
