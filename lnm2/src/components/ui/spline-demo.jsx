'use client'

import { SplineScene } from "./spline";
import { Card } from "./card";
import { Spotlight } from "./spotlight";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Chat with creators
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            💬 Have questions or ideas? Chat with the creator and be part of the journey!
            🚀 Let's build something amazing together—Start a conversation now!
          </p>
          <Link to="/chat" className="mt-8 w-fit">
            <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat Now
            </button>
          </Link>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
