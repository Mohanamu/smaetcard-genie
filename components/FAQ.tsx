import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Is my financial data safe?",
    answer: "Absolutely. We do not store your bank credentials. Our AI analyzes patterns from input data you provide or anonymized statements, and processes happen in a secure, encrypted environment."
  },
  {
    question: "Is SmartCard Genie free to use?",
    answer: "Yes! The basic recommendation engine is completely free. We may earn a small commission from banks if you choose to apply for a card through our link, but our recommendations are always unbiased."
  },
  {
    question: "How accurate is the AI classification?",
    answer: "Our model is trained on millions of transaction data points. It currently holds a 98% accuracy rate in identifying primary spending categories and matching appropriate rewards programs."
  },
  {
    question: "Can I compare multiple cards side-by-side?",
    answer: "Yes, once you receive your recommendations, you can select up to 3 cards to compare fees, reward rates, and hidden charges in a detailed comparison view."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-all">
            <button
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-white font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;