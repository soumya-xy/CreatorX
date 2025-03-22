import React from 'react';
import { AnimatedTestimonialsDemo } from './ui/animated-testimonials-demo';


const FeaturedCreators = () => {
  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] -right-40 top-0 bg-purple-500/10 rounded-full blur-[100px] animate-glow-pulse"></div>
        <div className="absolute w-[400px] h-[400px] -left-20 bottom-0 bg-blue-500/10 rounded-full blur-[100px] animate-glow-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold text-white mb-4 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Featured Creators
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Discover and support amazing creators who are pushing the boundaries of their craft
          </p>
        </div>
        
        <AnimatedTestimonialsDemo autoplay={true} />
      </div>
    </section>
  );
};

export default FeaturedCreators;