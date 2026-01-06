
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Loader2, ExternalLink, RefreshCw, CreditCard, Save, CloudCheck } from 'lucide-react';
import { analyzeSpendingHabits } from '../services/geminiService';
import { RecommendationResult } from '../types';
import { auth } from '../services/authService';
import { db } from '../services/databaseService';

interface AiDemoProps {
  prefill?: string;
}

const AiDemo: React.FC<AiDemoProps> = ({ prefill }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [result, setResult] = useState<RecommendationResult | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (prefill) {
      setInput(prefill);
      setResult(null);
      setIsSaved(false);
    }
  }, [prefill]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);
    setIsSaved(false);
    
    try {
      const data = await analyzeSpendingHabits(input);
      setResult(data);
      
      // Auto-save if user is logged in
      const user = auth.getUser();
      if (user) {
        setSaving(true);
        await db.saveRecommendation(user.id, data);
        setIsSaved(true);
        setSaving(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleManualSave = async () => {
    const user = auth.getUser();
    if (!user || !result) return;
    
    setSaving(true);
    await db.saveRecommendation(user.id, result);
    setIsSaved(true);
    setSaving(false);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2 animate-spin-slow" />
            <span className="text-xs font-medium text-purple-200 uppercase tracking-widest">Neural Recommendation Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Intelligent <span className="gradient-text">Card Discovery</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Our AI scours real-time bank offers with Google Grounding. {auth.isAuthenticated() ? 'Your results are automatically synced to your vault.' : 'Sign in to save your results.'}
          </p>
        </div>

        <div className="glass-card rounded-3xl p-1 shadow-2xl border border-white/20 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-slate-900/90 rounded-[1.4rem] p-6 md:p-10 min-h-[400px] flex flex-col justify-center">
            {!result ? (
              <form onSubmit={handleAnalyze} className="relative transition-all animate-fade-in">
                <label className="block text-sm font-medium text-gray-400 mb-4 ml-1 flex items-center">
                   <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse" />
                   What are your spending priorities?
                </label>
                <div className="relative">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., I spend ₹15,000/mo on dining and take 2 international trips a year. I mostly shop at Amazon and use my car for daily commute."
                    className="w-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 text-white placeholder-gray-600 focus:ring-2 focus:ring-purple-500/50 focus:border-transparent outline-none transition-all h-44 resize-none text-lg leading-relaxed shadow-inner"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 active:scale-95 text-white px-8 py-3 rounded-xl font-bold text-base transition-all flex items-center disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-purple-900/40 btn-premium"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Thinking...
                        </>
                      ) : (
                        <>
                          Analyze Spend
                          <Sparkles className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="animate-fade-in space-y-8">
                {isSaved && (
                  <div className="flex items-center justify-center space-x-2 text-green-400 text-sm font-bold bg-green-500/10 py-2 rounded-lg animate-fade-in">
                    <CloudCheck className="w-4 h-4" />
                    <span>SECURELY SYNCED TO VAULT</span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-2/5 flex flex-col items-center">
                    <div className="relative group perspective-1000 w-full max-w-sm">
                       {result.cardImageUrl ? (
                          <img 
                            src={result.cardImageUrl} 
                            alt="Generated Card Design" 
                            className="w-full rounded-2xl shadow-2xl border border-white/10 animate-float"
                          />
                       ) : (
                          <div className="w-full aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-dashed border-white/20">
                             <CreditCard className="w-12 h-12 text-slate-700" />
                          </div>
                       )}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2">Neural Match Verified</div>
                      <div className="text-3xl font-heading font-bold gradient-text mb-2">{result.suggestedCardName}</div>
                      <div className="inline-flex items-center text-green-400 font-bold text-2xl tracking-tight">
                        {result.estimatedSavings} <span className="text-sm font-normal text-gray-500 ml-2">Potential Savings / yr</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-3/5 space-y-6">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                        {result.category} Persona
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">The Logic</h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {result.reasoning}
                      </p>
                    </div>

                    <div className="pt-8 flex space-x-4">
                       <button 
                        onClick={() => setResult(null)}
                        className="flex-1 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10 flex items-center justify-center text-sm"
                       >
                         <RefreshCw className="w-4 h-4 mr-2" />
                         Refine Data
                       </button>
                       
                       {!isSaved && auth.isAuthenticated() ? (
                         <button 
                           onClick={handleManualSave}
                           disabled={saving}
                           className="flex-1 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all border border-white/20 flex items-center justify-center text-sm"
                         >
                           {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Save className="w-4 h-4 mr-2" /> Save to Vault</>}
                         </button>
                       ) : null}

                       <button className="flex-[2] py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all text-sm btn-premium">
                         Apply & Claim Rewards
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDemo;
