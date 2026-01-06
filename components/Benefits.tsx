import React from 'react';
import { Cpu, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    title: "Personalized AI Engine",
    desc: "Our algorithms adapt to your unique spending patterns."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-400" />,
    title: "Rewards Optimization",
    desc: "Calculates the highest possible return on every rupee spent."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    title: "Zero Bias",
    desc: "100% automated suggestions based purely on data."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Real-time Insights",
    desc: "Instant feedback on your financial credit health."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">AI Advantage</h2>
          <p className="mt-2 text-3xl leading-8 font-heading font-bold tracking-tight text-white sm:text-4xl">
            Why Choose SmartCard Genie?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Traditional comparisons are static. We are dynamic, intelligent, and focused on maximizing your wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative p-8 bg-slate-800/50 rounded-2xl border border-white/5 hover:bg-slate-800 transition-colors">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl opacity-50" />
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;