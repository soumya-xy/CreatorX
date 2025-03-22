import React from 'react';
import { Shield, Zap, Trophy, Target } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure Transactions",
      description: "All transactions are secured by blockchain technology, ensuring safe and transparent payments"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Instant Payments",
      description: "Creators receive payments instantly without traditional banking delays"
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Exclusive Content",
      description: "Access unique content and experiences available only to token holders"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Direct Support",
      description: "Support goes directly to creators with minimal platform fees"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Platform Benefits</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the advantages of supporting creators through Web3 technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-200"
            >
              <div className="text-purple-500 mb-6 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;