import React from 'react';

const steps = [
  {
    id: 1,
    title: "Book Online",
    description: "Use our AI estimator or call to schedule a window that works for you."
  },
  {
    id: 2,
    title: "We Arrive",
    description: "Our uniformed team calls 20 mins before arrival and gives a firm price."
  },
  {
    id: 3,
    title: "We Load",
    description: "You point, we lift. We sweep up the area afterwards."
  },
  {
    id: 4,
    title: "Freedom",
    description: "We haul it away to be donated, recycled, or disposed of responsibly."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            How It Works
          </h2>
          <p className="mt-4 text-slate-600">Simplicity is our specialty.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-white p-6 rounded-xl text-center md:text-left">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto md:mx-0 shadow-lg shadow-slate-900/20 relative z-10">
                {step.id}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;