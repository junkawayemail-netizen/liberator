import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Clean Living Room" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8">
          <div className="inline-flex items-center bg-liberator-900/50 border border-liberator-500/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            <span className="text-liberator-100 text-sm font-semibold tracking-wide uppercase">Available for Same-Day Service</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Reclaim Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-400">
              Freedom
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            Liberator Junk Removal handles the heavy lifting so you don't have to. 
            From old furniture to construction debris, we clear it out fast, efficiently, and responsibly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#quote" 
              className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent-500/30 flex items-center justify-center transition-all transform hover:-translate-y-1"
            >
              Get Instant Price
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#process" 
              className="px-8 py-4 rounded-xl font-semibold text-white border border-slate-600 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              How It Works
            </a>
          </div>

          <div className="pt-8 border-t border-slate-700/50 grid grid-cols-2 gap-4">
            <div className="flex items-center text-slate-300">
              <CheckCircle2 className="text-green-400 mr-2 h-5 w-5" />
              <span>Upfront Pricing</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle2 className="text-green-400 mr-2 h-5 w-5" />
              <span>Eco-Friendly Disposal</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle2 className="text-green-400 mr-2 h-5 w-5" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center text-slate-300">
              <CheckCircle2 className="text-green-400 mr-2 h-5 w-5" />
              <span>Timely Service</span>
            </div>
          </div>
        </div>

        {/* Hero Illustration / Graphic */}
        <div className="hidden md:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <img src="https://picsum.photos/800/600" alt="Junk Removal Team" className="w-full h-auto" />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-bold text-lg">"Fastest service in town!"</p>
                    <div className="flex text-yellow-400 mt-1">
                        {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                 </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 className="text-green-600 h-6 w-6" />
                </div>
                <div>
                    <p className="text-slate-900 font-bold">450+ Jobs Done</p>
                    <p className="text-slate-500 text-xs">This Month</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;