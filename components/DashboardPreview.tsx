import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Current', savings: 450, color: '#94a3b8' },
  { name: 'With AI', savings: 1850, color: '#8b5cf6' },
];

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            {/* Dashboard Mockup Container */}
            <div className="relative glass-card rounded-2xl border border-white/10 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Monthly Savings Forecast</h3>
                  <p className="text-sm text-gray-400">Based on your last 30 days</p>
                </div>
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                  +310% Increase
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis 
                      dataKey="name" 
                      stroke="#94a3b8" 
                      tick={{ fill: '#94a3b8' }} 
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      hide={true} 
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="savings" radius={[8, 8, 0, 0]} animationDuration={2000}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">TR</div>
                    <span className="text-sm text-gray-300">Travel Rewards</span>
                  </div>
                  <span className="text-white font-medium">₹12,400</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center text-pink-400 font-bold text-xs">DI</div>
                    <span className="text-sm text-gray-300">Dining Cashback</span>
                  </div>
                  <span className="text-white font-medium">₹4,250</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl -z-10 rounded-3xl" />
          </div>

          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              See Your Future Savings
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Visualise potential savings before you even apply. Our dashboard breaks down exactly where you're losing money by using the wrong card and how much you could gain by switching.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time spending analysis",
                "Cashback optimization calculator",
                "Annual fee vs. Reward comparison"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;