"use client";
import React from "react";
import { SparklesCore } from "@/components/magicui/sparkel";

const Startup = () => {
  return (
    <div className="h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Name */}
      <div className="  w-[80%]  max-w-xl bg-white/10 border border-gray-700 rounded-2xl p-4 shadow-lg backdrop-blur-md">
        <p className="text-gray-400 text-center">Loading portfolio...</p>
      </div>

      {/* Sparkles Animation */}
      <div className="w-[40rem] h-40 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles Core */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Gradient Mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Startup;
