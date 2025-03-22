import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Wallet, Users, TrendingUp, Filter } from 'lucide-react';
import FeaturedCreators from './FeaturedCreators';
import { SplineSceneBasic } from './ui/spline-demo';


const Creators = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBlockchain, setActiveBlockchain] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  // Featured creators carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredCreators = [];

  
  

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Featured Creators Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SplineSceneBasic />
      </div>

      {/* Filters and Sorting */}
       

      
      <div>
        <FeaturedCreators />
      </div>

      {/* Categories Section */}
      

      {/* NFT Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center p-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Featured NFT Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Neon Dreamscape",
              creator: "Digital Artist Jane",
              image: "../src/public/nfts/neon dreamscape nft.webp",
              price: "2.5 ETH",
              items: "1000",
              floor: "0.8 ETH"
            },
            {
              title: "Cyber Beats",
              creator: "Music Producer Max",
              image: "../src/public/nfts/cyber2.webp",
              price: "1.8 ETH",
              items: "500",
              floor: "0.5 ETH"
            },
            {
              title: "Virtual Realms",
              creator: "Gaming Creator Alex",
              image: "../src/public/nfts/realms3.webp",
              price: "3.2 ETH",
              items: "750",
              floor: "1.2 ETH"
            }
          ].map((collection, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 rounded-xl p-4 hover:transform hover:scale-[1.02] 
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
                backdrop-blur-sm"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-bold text-xl mb-2">{collection.title}</h3>
              <p className="text-purple-400 text-sm mb-4">By {collection.creator}</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <p className="text-xs text-gray-400">Price</p>
                  <p className="font-bold">{collection.price}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Items</p>
                  <p className="font-bold">{collection.items}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Floor</p>
                  <p className="font-bold">{collection.floor}</p>
                </div>
              </div>
              <button className="w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700 
                transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                View Collection
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Creators; 