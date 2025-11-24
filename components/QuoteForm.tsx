import React, { useState, useCallback } from 'react';
import { QuoteEstimate } from '../types';
import { getJunkEstimate } from '../services/geminiService';
import { Calculator, Calendar, Loader2, Send, Check } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [estimate, setEstimate] = useState<QuoteEstimate | null>(null);
  const [step, setStep] = useState(1); // 1: Estimate, 2: Contact Details

  const handleAnalyze = useCallback(async () => {
    if (!description.trim()) return;
    
    setIsAnalyzing(true);
    try {
      const result = await getJunkEstimate(description);
      setEstimate(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzing(false);
    }
  }, [description]);

  return (
    <section id="quote" className="py-24 bg-liberator-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-accent-500 font-bold uppercase tracking-wider text-sm">Start Your Liberation</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Get an Instant AI Estimate
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Describe what you need removed, and our AI will give you an immediate volume and price range estimate.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-5 h-full min-h-[500px]">
            {/* Left Panel: Inputs */}
            <div className="md:col-span-3 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 1 ? 'bg-accent-500 text-white' : 'bg-green-500 text-white'}`}>
                        {step === 1 ? '1' : <Check className="h-4 w-4"/>}
                    </div>
                    <span className={`font-semibold ${step === 1 ? 'text-slate-900' : 'text-slate-400'}`}>Describe Junk</span>
                    <div className="w-8 h-0.5 bg-slate-200"></div>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 2 ? 'bg-accent-500 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                    <span className={`font-semibold ${step === 2 ? 'text-slate-900' : 'text-slate-400'}`}>Book It</span>
                </div>

                {step === 1 ? (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                        What needs to go? (Be specific)
                      </label>
                      <textarea
                        id="description"
                        rows={6}
                        className="w-full rounded-xl border-slate-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 bg-slate-50 p-4 text-slate-900 resize-none"
                        placeholder="e.g., 1 old sofa, 5 black garbage bags of clothes, a broken dishwasher..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      <p className="text-xs text-slate-500 mt-2">
                        *Powered by Gemini AI for instant accuracy.
                      </p>
                    </div>

                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || !description}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Analyzing Load...
                        </>
                      ) : (
                        <>
                          <Calculator className="mr-2 h-5 w-5" />
                          Calculate Estimate
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-fadeIn">
                     <h3 className="text-lg font-bold text-slate-900">Finish Booking</h3>
                     <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="p-3 rounded-lg border border-slate-200 bg-slate-50 w-full" />
                        <input type="text" placeholder="Last Name" className="p-3 rounded-lg border border-slate-200 bg-slate-50 w-full" />
                     </div>
                     <input type="email" placeholder="Email Address" className="p-3 rounded-lg border border-slate-200 bg-slate-50 w-full" />
                     <input type="tel" placeholder="Phone Number" className="p-3 rounded-lg border border-slate-200 bg-slate-50 w-full" />
                     <div className="pt-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Preferred Date</label>
                        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg p-3">
                            <Calendar className="text-slate-400 mr-2 h-5 w-5" />
                            <input type="date" className="bg-transparent w-full outline-none text-slate-700" />
                        </div>
                     </div>
                     
                     <button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-lg shadow-accent-500/30 mt-4">
                         Confirm Appointment
                     </button>
                     <button 
                        onClick={() => setStep(1)}
                        className="w-full text-slate-500 text-sm hover:text-slate-800"
                     >
                         Back to Estimate
                     </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel: Results / Info */}
            <div className="md:col-span-2 bg-slate-50 border-l border-slate-200 p-8 flex flex-col justify-center">
              {estimate && step === 1 ? (
                <div className="space-y-6 animate-fadeIn">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase">Estimated Volume</span>
                    <p className="text-2xl font-bold text-liberator-600 mt-1">{estimate.volumeLabel}</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <span className="text-xs font-bold text-slate-400 uppercase">Price Range</span>
                    <div className="flex items-baseline mt-1">
                        <p className="text-3xl font-extrabold text-slate-900">${estimate.priceLow}</p>
                        <span className="text-slate-400 mx-2">-</span>
                        <p className="text-3xl font-extrabold text-slate-900">${estimate.priceHigh}</p>
                    </div>
                  </div>

                  <div className="bg-liberator-50 p-4 rounded-xl border border-liberator-100">
                     <p className="text-sm text-liberator-900 italic">"{estimate.explanation}"</p>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-accent-500 text-white py-3 rounded-lg font-bold hover:bg-accent-600 transition-colors"
                  >
                    Looks Good? Book Now
                  </button>
                </div>
              ) : step === 2 ? (
                 <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xl">Almost Free!</h4>
                    <p className="text-slate-500 mt-2 text-sm">Fill out your details to lock in this estimated range. We'll confirm the final price upon arrival.</p>
                 </div>
              ) : (
                <div className="text-center text-slate-400">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Send className="h-10 w-10 text-slate-400 ml-1" />
                  </div>
                  <p className="font-medium">Enter your items to see the magic happen.</p>
                  <p className="text-xs mt-2 text-slate-400">Estimates are based on standard volume rates.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;