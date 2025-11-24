import React from 'react';
import { Home, Briefcase, Hammer, Trash2, Sofa, Monitor } from 'lucide-react';

const services = [
  {
    title: "Residential Cleanouts",
    description: "Whole house, garage, attic, and basement cleanouts. We reclaim your living space.",
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: "Furniture Removal",
    description: "Couches, mattresses, tables, and bulky items. We do the heavy lifting safely.",
    icon: <Sofa className="h-6 w-6" />,
  },
  {
    title: "Appliance Recycling",
    description: "Refrigerators, washers, dryers. We ensure eco-friendly disposal and recycling.",
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    title: "Construction Debris",
    description: "Wood, drywall, and renovation waste removal for contractors and DIYers.",
    icon: <Hammer className="h-6 w-6" />,
  },
  {
    title: "Commercial Jobs",
    description: "Office furniture, retail cleanouts, and foreclosure cleanups. Professional & discreet.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Yard Waste",
    description: "Branches, leaves, fencing, and general storm cleanup.",
    icon: <Trash2 className="h-6 w-6" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-600 font-bold uppercase tracking-wider text-sm">What We Haul</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Professional Services
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-liberator-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-liberator-500 transition-colors duration-300">
                <div className="text-liberator-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-liberator-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;