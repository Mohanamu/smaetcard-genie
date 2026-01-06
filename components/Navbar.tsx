
import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard, LogOut, User as UserIcon } from 'lucide-react';
import { auth, User } from '../services/authService';
import AuthModal from './AuthModal';

interface NavbarProps {
  onStart: () => void;
  onNavigateHowItWorks: () => void;
  onNavigatePricing: () => void;
  onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onStart, onNavigateHowItWorks, onNavigatePricing, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    setCurrentUser(auth.getUser());
  }, []);

  const handleLogout = () => {
    auth.logout();
    setCurrentUser(null);
    onNavigateHome();
  };

  const navLinks = [
    { name: 'Home', action: onNavigateHome },
    { name: 'How It Works', action: onNavigateHowItWorks },
    { name: 'Pricing', action: onNavigatePricing },
    { name: 'Demo', action: onStart },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex-shrink-0 flex items-center space-x-2 cursor-pointer"
              onClick={onNavigateHome}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <CreditCard className="text-white w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                SmartCard<span className="text-blue-400">Genie</span>
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              {currentUser ? (
                <div className="flex items-center space-x-4">
                   <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <img src={currentUser.avatar} alt="Avatar" className="w-6 h-6 rounded-full" />
                      <span className="text-sm font-medium text-white">{currentUser.name}</span>
                   </div>
                   <button 
                     onClick={handleLogout}
                     className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                   >
                     <LogOut className="w-5 h-5" />
                   </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthOpen(true)}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-2 rounded-full font-medium transition-all"
                >
                  Sign In
                </button>
              )}
              
              <button 
                onClick={onStart}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold transition-all hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
              >
                Get Started
              </button>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    setIsOpen(false);
                    link.action();
                  }}
                >
                  {link.name}
                </button>
              ))}
              {!currentUser ? (
                 <button 
                    onClick={() => { setIsOpen(false); setIsAuthOpen(true); }}
                    className="w-full mt-4 bg-white/10 text-white block px-3 py-2 rounded-md text-base font-bold text-center"
                  >
                    Sign In
                  </button>
              ) : (
                <button 
                  onClick={() => { setIsOpen(false); handleLogout(); }}
                  className="w-full mt-4 bg-red-500/10 text-red-400 block px-3 py-2 rounded-md text-base font-bold text-center"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onSuccess={() => setCurrentUser(auth.getUser())} 
      />
    </>
  );
};

export default Navbar;
