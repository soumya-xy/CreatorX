import React from 'react';
import { Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Future of Creator Economy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start earning or supporting creators today with the power of Web3 technology
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;