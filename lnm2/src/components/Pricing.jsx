import React from 'react';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: 'Basic',
      price: '0.01 ETH',
      icon: <Star className="h-8 w-8" />,
      features: [
        'Access to basic content',
        'Community chat access',
        'Monthly newsletter',
        'Basic support'
      ],
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Pro',
      price: '0.05 ETH',
      icon: <Crown className="h-8 w-8" />,
      features: [
        'All Basic features',
        'Exclusive NFT drops',
        'Priority access to events',
        'Direct creator messaging'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Ultimate',
      price: '0.1 ETH',
      icon: <Sparkles className="h-8 w-8" />,
      features: [
        'All Pro features',
        'Custom NFT creation',
        'One-on-one mentoring',
        'Revenue sharing opportunities'
      ],
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan to support your favorite creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative ${tier.popular ? 'transform -translate-y-4' : ''}`}
            >
              <div
                className={`bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 ${
                  tier.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`inline-block p-3 rounded-2xl bg-gradient-to-r ${tier.color} mb-4`}>
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-white mb-6">{tier.price}</div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 
                    ${tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;