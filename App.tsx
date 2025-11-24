import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <QuoteForm />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;