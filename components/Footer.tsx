import React from 'react';
import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
                <Truck className="h-8 w-8 text-accent-500 mr-2" />
                <span className="font-bold text-2xl text-white">LIBERATOR</span>
            </div>
            <p className="text-slate-400 mb-6">
              Reclaiming space, one truckload at a time. Professional, eco-friendly junk removal services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Residential Removal</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Commercial Cleanout</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Construction Debris</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">E-Waste Recycling</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-accent-500 mr-3 mt-1" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent-500 mr-3 mt-1" />
                <span>hello@liberatorjunk.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mr-3 mt-1" />
                <span>123 Freedom Way,<br/>Cityville, ST 12345</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Liberator Junk Removal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;