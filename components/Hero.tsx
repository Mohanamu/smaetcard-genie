
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

interface HeroProps {
  onStart?: () => void;
  onHowItWorks?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onHowItWorks }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              <span>AI-Powered Financial Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              Choose the Right <br />
              <span className="gradient-text">Credit Card</span> <br />
              Powered by AI
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Our AI analyzes your spending style and matches you with the perfect credit card to maximize cashback, rewards, and benefits. Stop guessing, start saving.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onStart} 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all flex items-center justify-center group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onHowItWorks} 
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-lg transition-all backdrop-blur-sm"
              >
                How It Works
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-gray-500 text-sm">
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-green-400" />
                No Data Stored
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                98% Match Accuracy
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            {/* 3D Card Illustration */}
            <div className="relative w-full aspect-square max-w-md mx-auto perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-2xl rotate-6 opacity-50 transform scale-95 translate-y-4" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-slate-900 rounded-2xl -rotate-6 opacity-70 transform scale-95 translate-y-2" />
              
              <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl animate-float flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="w-12 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md" />
                    <div className="text-xs text-gray-400 font-mono tracking-widest uppercase">Smart Card</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white tracking-wider font-heading">PLATINUM</div>
                    <div className="text-xs text-purple-300">AI RECOMMENDED</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="w-3/4 h-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    </div>
                    <span className="text-xs text-blue-200">Travel Score 98%</span>
                  </div>
                   <div className="flex items-center space-x-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                       <div className="w-1/2 h-full bg-gradient-to-r from-green-400 to-emerald-500" />
                    </div>
                    <span className="text-xs text-green-200">Savings +$540</span>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="text-lg text-gray-300 font-mono">
                    **** **** **** 4298
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-6 top-10 glass-card p-4 rounded-xl shadow-lg animate-bounce delay-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold">$$</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Projected Savings</div>
                    <div className="text-sm font-bold text-white">₹18,520/yr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
