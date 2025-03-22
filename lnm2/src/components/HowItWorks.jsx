import React from 'react';
import { Wallet, Gift, Lock, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Connect Your Wallet",
      description: "Link your Web3 wallet to get started supporting creators or start earning"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Choose Creators",
      description: "Browse and subscribe to your favorite creators with cryptocurrency"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Access Content",
      description: "Get exclusive access to premium content and special perks"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Earn Rewards",
      description: "Receive unique tokens and benefits for your support"
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our platform in four simple steps and start supporting or creating content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: '1px' }}>
                <div className="h-full w-full bg-gray-900 rounded-xl" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="text-purple-500 mb-4 transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;