import React from 'react';
import { Search, BrainCircuit, CreditCard, PiggyBank } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6 text-blue-400" />,
    title: "Analyze Spending",
    description: "Our AI scans your spending patterns to understand where your money goes most."
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    title: "Classify Profile",
    description: "We categorize you into profiles like Traveler, Shopper, or Saver."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-pink-400" />,
    title: "Match Cards",
    description: "Get instant recommendations for cards that align with your lifestyle."
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-green-400" />,
    title: "Maximize Rewards",
    description: "See exactly how much you can save in cashback and perks annually."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            How SmartCard Genie Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A simple, four-step process powered by advanced machine learning algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative h-full glass-card p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-white/5">
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 text-6xl font-bold text-white/5 pointer-events-none">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;