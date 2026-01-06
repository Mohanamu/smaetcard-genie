
import React from 'react';
import { ArrowLeft, Search, BrainCircuit, CreditCard, PiggyBank, ShieldCheck, Zap, BarChart3, Clock } from 'lucide-react';

interface HowItWorksPageProps {
  onBack: () => void;
  onStart: () => void;
}

const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onBack, onStart }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            The Science Behind the <span className="gradient-text">Magic</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            SmartCard Genie isn't just a comparison tool. It's a high-performance recommendation engine that uses neural networks to match your financial DNA with over 5,000 real-time bank offers.
          </p>
        </header>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/20">
                <Search className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Step 1: Behavioral Data Ingestion</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Our process begins with understanding you. Whether you paste your spending habits or upload a statement, our natural language processing (NLP) model identifies transaction patterns, vendor categories, and recurring expenses.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl border border-white/5">
                    <ShieldCheck className="w-5 h-5 text-green-400 mb-2" />
                    <span className="text-sm font-medium text-white">Privacy Focused</span>
                  </div>
                  <div className="glass-card p-4 rounded-xl border border-white/5">
                    <Clock className="w-5 h-5 text-blue-400 mb-2" />
                    <span className="text-sm font-medium text-white">Instant Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400 flex-shrink-0 border border-purple-500/20">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Step 2: Neural Classification</h2>
                <p className="text-gray-400 text-lg mb-6">
                  We categorize your spending into one of our six major personas. This isn't just broad labeling; we calculate specific weighting for each category to understand if you're a 'Heavy Diner' or an 'Occasional Traveler'.
                </p>
                <div className="bg-slate-900 rounded-2xl p-6 border border-white/5 space-y-4">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-purple-500" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Travel Accuracy</span>
                    <span>99.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-500/50 to-transparent" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-pink-600/20 flex items-center justify-center text-pink-400 flex-shrink-0 border border-pink-500/20">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Step 3: Real-Time Market Grounding</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Using Gemini 3 with Google Search grounding, we verify the latest card offers, interest rates, and welcome bonuses across hundreds of financial institutions. This ensures you never get an outdated recommendation.
                </p>
                <div className="flex items-center space-x-4">
                   <Zap className="w-6 h-6 text-yellow-400" />
                   <span className="text-gray-300 font-mono text-sm">SEARCHING LIVE BANK API...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500/50 to-transparent" />
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-green-600/20 flex items-center justify-center text-green-400 flex-shrink-0 border border-green-500/20">
                <PiggyBank className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Step 4: ROI Calculation</h2>
                <p className="text-gray-400 text-lg mb-6">
                  Finally, we run a simulated projection of your next 12 months using the recommended card. We factor in annual fees, monthly spending caps, and point expiration rules to give you a true net-benefit figure.
                </p>
                <button 
                  onClick={onStart}
                  className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Test the Model Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/10 text-center">
           <h3 className="text-2xl font-bold text-white mb-4">Ready to find your match?</h3>
           <button 
             onClick={onStart}
             className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
           >
             Go to AI Analyzer
           </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
