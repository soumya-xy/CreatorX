import React from 'react';
import { Crown, MessageSquare, Video, Music } from 'lucide-react';

const ExclusivePerks = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Exclusive Perks</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlock special benefits and experiences by supporting your favorite creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-8 rounded-xl border border-purple-500/30">
            <Crown className="h-12 w-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">VIP Access</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <Video className="h-5 w-5 mr-3 text-purple-400" />
                Exclusive live streams and behind-the-scenes content
              </li>
              <li className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-purple-400" />
                Direct messaging with creators
              </li>
              <li className="flex items-center">
                <Music className="h-5 w-5 mr-3 text-purple-400" />
                Early access to new content releases
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-3">NFT Collectibles</h4>
              <p className="text-gray-400">
                Receive unique digital collectibles and artwork from your favorite creators
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-3">Community Access</h4>
              <p className="text-gray-400">
                Join exclusive Discord channels and participate in community events
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-white mb-3">Token Rewards</h4>
              <p className="text-gray-400">
                Earn platform tokens for your support and engagement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivePerks;