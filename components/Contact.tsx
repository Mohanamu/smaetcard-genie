import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 relative">
       <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
       
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="glass-card rounded-2xl p-8 md:p-12 border border-white/10">
           <div className="md:flex md:space-x-12">
             <div className="md:w-1/2 mb-8 md:mb-0">
               <h2 className="text-3xl font-heading font-bold text-white mb-4">Get in Touch</h2>
               <p className="text-gray-400 mb-8">
                 Have questions about our AI models or partnership opportunities? Drop us a message.
               </p>
               <div className="flex items-center text-gray-300 mb-2">
                 <Mail className="w-5 h-5 mr-3 text-blue-400" />
                 support@smartcardgenie.ai
               </div>
             </div>

             <div className="md:w-1/2">
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                   <input type="text" className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="John Doe" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                   <input type="email" className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="john@example.com" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                   <textarea className="w-full bg-slate-800 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none h-32 resize-none" placeholder="How can we help?" />
                 </div>
                 <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                   Send Message
                   <Send className="w-4 h-4 ml-2" />
                 </button>
               </form>
             </div>
           </div>
         </div>
       </div>
    </section>
  );
};

export default Contact;