import React, { useState, useEffect } from 'react';
import { Truck, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const textClass = isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-white';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-accent-500 p-2 rounded-lg mr-2">
                <Truck className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              LIBERATOR <span className="text-accent-500">JUNK</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`${textClass} hover:text-accent-500 font-medium transition-colors`}>Services</a>
            <a href="#process" className={`${textClass} hover:text-accent-500 font-medium transition-colors`}>How It Works</a>
            <a href="#testimonials" className={`${textClass} hover:text-accent-500 font-medium transition-colors`}>Reviews</a>
            <a 
              href="#quote" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              Get Quote
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textClass} focus:outline-none`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full px-4 pt-4 pb-6 border-t border-slate-100">
          <div className="flex flex-col space-y-4">
            <a 
                href="#services" 
                className="text-slate-600 font-medium block p-2 hover:bg-slate-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Services
            </a>
            <a 
                href="#process" 
                className="text-slate-600 font-medium block p-2 hover:bg-slate-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                How It Works
            </a>
            <a 
                href="#testimonials" 
                className="text-slate-600 font-medium block p-2 hover:bg-slate-50 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                Reviews
            </a>
            <a 
              href="#quote" 
              className="bg-accent-500 text-white text-center py-3 rounded-lg font-bold shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;