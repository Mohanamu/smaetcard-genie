
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import AiDemo from './components/AiDemo';
import Benefits from './components/Benefits';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HowItWorksPage from './components/HowItWorksPage';
import PricingPage from './components/PricingPage';

type ViewType = 'home' | 'how-it-works' | 'pricing';

function App() {
  const [prefillInput, setPrefillInput] = useState('');
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isExiting, setIsExiting] = useState(false);

  // Helper to change views with a fade-out/in delay
  const changeView = (newView: ViewType) => {
    if (newView === currentView) return;
    setIsExiting(true);
    setTimeout(() => {
      setCurrentView(newView);
      setIsExiting(false);
      window.scrollTo(0, 0);
    }, 300); // Duration should match the CSS fadeOut duration
  };

  const handleStart = (prefill?: string) => {
    if (currentView !== 'home') {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentView('home');
        setIsExiting(false);
        // Small delay to ensure "home" is rendered before scrolling
        setTimeout(() => executeScroll(prefill), 100);
      }, 300);
    } else {
      executeScroll(prefill);
    }
  };

  const executeScroll = (prefill?: string) => {
    if (prefill) {
      setPrefillInput(prefill);
    }
    
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const textarea = demoSection.querySelector('textarea');
        if (textarea) textarea.focus();
      }, 800);
    }
  };

  const navigateToHowItWorks = () => changeView('how-it-works');
  const navigateToPricing = () => changeView('pricing');
  const navigateHome = () => changeView('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar 
        onStart={() => handleStart()} 
        onNavigateHowItWorks={navigateToHowItWorks}
        onNavigatePricing={navigateToPricing}
        onNavigateHome={navigateHome}
      />
      
      <main className={isExiting ? 'animate-fade-out' : 'animate-fade-in'}>
        {currentView === 'home' && (
          <>
            <Hero 
              onStart={() => handleStart()} 
              onHowItWorks={navigateToHowItWorks}
            />
            <HowItWorks />
            <Categories onSelectCategory={(cat, desc) => handleStart(`I consider myself a ${cat}. I'm interested in ${desc}. Can you find the best card for me?`)} />
            <AiDemo prefill={prefillInput} />
            <Benefits />
            <DashboardPreview />
            <Testimonials />
            <FAQ />
            
            {/* Call to Action Section */}
            <section className="py-24 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 opacity-50" />
               <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                 <h2 className="text-4xl font-heading font-bold text-white mb-6">
                   Stop guessing — let AI choose the perfect credit card for you.
                 </h2>
                 <p className="text-xl text-blue-100 mb-10">
                   Join thousands of smart spenders optimizing their financial life today.
                 </p>
                 <button 
                   onClick={() => handleStart()} 
                   className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105"
                 >
                   Start Now Free
                 </button>
               </div>
            </section>
            <Contact />
          </>
        )}

        {currentView === 'how-it-works' && (
          <HowItWorksPage onBack={navigateHome} onStart={() => handleStart()} />
        )}

        {currentView === 'pricing' && (
          <PricingPage onBack={navigateHome} onStart={() => handleStart()} />
        )}
      </main>
      <Footer onNavigatePricing={navigateToPricing} onNavigateHome={navigateHome} />
    </div>
  );
}

export default App;
