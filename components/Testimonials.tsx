import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "I saved ₹18,520 a year with SmartCard Genie. I had no idea I was using a card that gave me zero rewards on my biggest expenses!",
    author: "Arjun Mehta",
    role: "Software Engineer"
  },
  {
    id: 2,
    content: "The AI analysis was spot on. It identified me as a 'Frequent Flyer' and the recommended card got me free lounge access immediately.",
    author: "Sarah Jenkins",
    role: "Digital Nomad"
  },
  {
    id: 3,
    content: "Finally, a tool that isn't biased. It just looked at my data and told me what works. Highly recommended for anyone confused by options.",
    author: "Rahul Verma",
    role: "Small Business Owner"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Trusted by Smart Spenders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="glass-card p-8 rounded-2xl border border-white/5 relative hover:bg-white/5 transition-colors">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{item.content}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                  {item.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="text-white font-medium text-sm">{item.author}</div>
                  <div className="text-blue-400 text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;