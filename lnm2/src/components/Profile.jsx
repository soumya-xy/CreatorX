import React, { useEffect, useState } from 'react';
import { Wallet, Users, MessageCircle, Lock, Star, X } from 'lucide-react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null); // Store user's wallet address

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleSubscribe = (tier) => {
    setSelectedTier(tier);
    setShowModal(true);
  };

  const handleConfirm = async () => {
    if (!walletAddress) {
      alert("Please connect your wallet first.");
      return;
    }

    try {
      const response = await processPayment({
        tier: selectedTier.title,
        amount: selectedTier.price,
        walletAddress: walletAddress,
      });

      if (response.success) {
        alert("Payment successful! Thank you for subscribing.");
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment. Please try again.");
    } finally {
      setShowModal(false);
      setSelectedTier(null);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedTier(null);
  };

  // Function to process payment via backend
  // const processPayment = async (paymentDetails) => {
  //   try {
  //     const response = await fetch("/api/process-payment", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(paymentDetails),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Payment processing failed");
  //     }

  //     return await response.json();
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // Function to connect wallet using MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const walletAddress = accounts[0];

        // Update state with the connected wallet address
        setWalletAddress(walletAddress);
        console.log(walletAddress);
        alert("Wallet connected successfully!");
      } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const creators = {
    sarah: {
      name: "Dhruv Rathi",
      tagline: "Political Commentator | YouTuber | Journalist",
      bannerImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
      avatarImage: "../src/public/banner/utube_dhruv_rathee.jpg",
      about: "Indian political commentator, journalist, and YouTuber known for his analysis of Indian politics and current affairs. Founder of ThePrint and host of 'Cut The Clutter' series. Known for his data-driven approach to political analysis and engaging storytelling.",
      purpose: "Join my community to get exclusive access to my political analysis, behind-the-scenes content, and early access to my videos. Get insights into Indian politics and current affairs.",
      stats: {
        supporters: "2.5M+",
        earnings: "1M+",
        collections: "500+"
      }
    },
  };

  const creator = creators[id] || creators.sarah;

  const supportTiers = [
    {
      title: "Bronze Supporter",
      price: "0.5 CEXCoin/month",
      benefits: [
        "Access to supporter-only updates",
        "Early access to NFT drops",
        "Monthly digital wallpapers"
      ],
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Silver Curator",
      price: "1 CEXCoin/month",
      benefits: [
        "All Bronze benefits",
        "Exclusive NFT airdrops",
        "Private Discord channel access",
        "Monthly virtual meetups"
      ],
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Gold Collector",
      price: "2.5 CEXCoin/month",
      benefits: [
        "All Silver benefits",
        "1-on-1 monthly calls",
        "Custom NFT commission",
        "Name in credits of all works"
      ],
      color: "from-yellow-400 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner and Profile Section */}
      <div className="relative h-[400px]">
        <img 
          src={creator.bannerImage} 
          alt="Profile Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24">
            <img 
              src={creator.avatarImage} 
              alt="Creator Avatar"
              className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover 
                shadow-[0_0_15px_rgba(147,51,234,0.5)]"
            />
            
            <div className="mt-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 
                bg-clip-text text-transparent">{creator.name}</h1>
              <p className="text-xl text-gray-300 mt-2">{creator.tagline}</p>
              
              <div className="flex gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>{creator.stats.supporters} Supporters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-purple-400" />
                  <span>${creator.stats.earnings} Earned</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span>{creator.stats.collections} Collections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 
          bg-clip-text text-transparent">About</h2>
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
          <p className="text-gray-300 mb-4">{creator.about}</p>
          <p className="text-gray-300">{creator.purpose}</p>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 
          bg-clip-text text-transparent">Support Tiers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportTiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm 
                transform hover:scale-[1.02] transition-all duration-300
                ${tier.featured ? 'ring-2 ring-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.3)]' : ''}`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r 
                  from-purple-500 to-pink-500 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${tier.color} 
                bg-clip-text text-transparent`}>{tier.title}</h3>
              <p className="text-2xl font-bold mb-4">{tier.price}</p>
              
              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Lock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleSubscribe(tier)}
                className={`w-full py-3 bg-gradient-to-r ${tier.color} rounded-lg 
                  hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all transform 
                  hover:scale-105`}
              >
                Subscribe Now 
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800/90 rounded-xl p-6 max-w-md w-full mx-4 relative border border-purple-500/30 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            <button 
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 
              bg-clip-text text-transparent">
              Confirm Subscription
            </h3>
            
            <p className="text-gray-300 mb-6">
              Are you sure you want to subscribe to the {selectedTier?.title} tier for {selectedTier?.price}?
              This will transfer XCoin from your wallet.
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={handleCancel}
                className="flex-1 py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 
                  transition-colors text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className={`flex-1 py-2 px-4 bg-gradient-to-r ${selectedTier?.color} rounded-lg 
                  hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all transform 
                  hover:scale-105 text-white`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Wallet Connection Button */}
      {/* Wallet Connection Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg 
            hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all transform 
            hover:scale-105 text-white"
        >
          {walletAddress ? 
            `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 
            "Connect Wallet"
          }
        </button>
      </div>
    </div>
  );
};

export default Profile;