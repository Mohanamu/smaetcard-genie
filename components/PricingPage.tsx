
import React, { useState } from 'react';
import { ArrowLeft, Check, Zap, Crown, Building2, Sparkles } from 'lucide-react';

interface PricingPageProps {
  onBack: () => void;
  onStart: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBack, onStart }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      price: "Free",
      description: "Perfect for testing the genie's magic.",
      features: [
        "3 AI card matches per month",
        "Standard category analysis",
        "Basic rewards calculator",
        "Community support access",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      price: isAnnual ? "$9" : "$12",
      period: "/month",
      description: "For smart spenders who want maximum ROI.",
      features: [
        "Unlimited AI card matches",
        "Real-time Google Grounding",
        "Custom AI Card Visuals",
        "Advanced Savings Dashboard",
        "Priority 24/7 Support",
        "Ad-free experience",
      ],
      buttonText: "Try Pro Free",
      highlight: true,
    },
    {
      name: "Enterprise",
      icon: <Building2 className="w-6 h-6 text-purple-400" />,
      price: "Custom",
      description: "Tailored solutions for financial teams.",
      features: [
        "Full API Access",
        "White-label Integration",
        "Bulk Statement Processing",
        "Custom Model Training",
        "Dedicated Account Manager",
        "SLA Guarantees",
      ],
      buttonText: "Contact Sales",
      highlight: false,
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your financial goals. Unlock the full power of AI-driven savings.
          </p>

          <div className="mt-10 flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-slate-800 rounded-full relative transition-colors border border-white/10"
            >
              <div className={`absolute top-1 w-5 h-5 bg-blue-500 rounded-full transition-transform ${isAnnual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-green-400 font-bold ml-1">(-25%)</span>
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative h-full flex flex-col glass-card rounded-3xl p-8 border transition-all duration-300 group ${
                plan.highlight 
                ? 'border-purple-500/50 bg-white/10 scale-105 z-10 shadow-[0_0_40px_rgba(124,58,237,0.2)]' 
                : 'border-white/5 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-bold text-white shadow-lg flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  MOST POPULAR
                </div>
              )}

              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-slate-900 rounded-2xl border border-white/5">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-300">
                    <Check className={`w-4 h-4 mr-3 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-purple-400' : 'text-blue-400'}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={onStart}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 glass-card p-10 rounded-3xl border border-white/10 text-center">
           <h3 className="text-2xl font-bold text-white mb-4">Unsure which plan is right for you?</h3>
           <p className="text-gray-400 mb-8 max-w-xl mx-auto">
             Get a free 15-minute consultation with our financial AI specialists to build a custom roadmap for your rewards optimization.
           </p>
           <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-gray-200 transition-colors">
             Schedule Consultation
           </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
