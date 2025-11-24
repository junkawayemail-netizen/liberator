import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    text: "I was overwhelmed with a garage full of junk. Liberator showed up on time, gave me a fair price, and cleared it all in 45 minutes. Truly liberating!",
    rating: 5
  },
  {
    name: "Mike Ross",
    text: "Best quote experience I've had. The AI tool gave me a ballpark, and the crew stuck to the lower end of the range. Highly recommend.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    text: "Professional, polite, and they swept up afterwards! I didn't have to lift a finger.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-liberator-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Happy Customers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative">
              <Quote className="absolute top-6 right-6 text-liberator-100 h-10 w-10" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic relative z-10 flex-grow">"{review.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-slate-400 text-sm">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;