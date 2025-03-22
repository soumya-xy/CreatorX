import React from 'react';
import { Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WavesDemo } from './ui/waves-demo';

const Hero = () => {
  return (
    <div className="relative bg-black pt-16 overflow-hidden min-h-screen">
      {/* Waves Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <WavesDemo />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-32 z-10">
        <div className="text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="animate-gradient">
              Empower Creators
            </span>
            <br />
            with Web3 Technology
          </h1>
          <p className="max-w-2xl text-xl text-gray-300 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Join the next generation of creator economy. Support your favorite creators with
            cryptocurrency and get exclusive access to unique digital content and experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25">
              <Sparkles className="mr-2 h-5 w-5" />
              Join as a Creator
            </button>
            <Link to="/creators" className="px-8 py-4 bg-gray-800 rounded-lg text-white font-bold text-lg hover:bg-gray-700 flex items-center justify-center hover:shadow-lg hover:shadow-gray-500/25">
              <Users className="mr-2 h-5 w-5" />
              Support Creators
            </Link>
          </div>
          <div className="flex space-x-8 text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="hover-lift">
              <div className="text-3xl font-bold text-white">10K+</div>
              <div>Active Creators</div>
            </div>
            <div className="hover-lift">
              <div className="text-3xl font-bold text-white">100K+</div>
              <div>Supporters</div>
            </div>
            <div className="hover-lift">
              <div className="text-3xl font-bold text-white">$5M+</div>
              <div>Creator Earnings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;