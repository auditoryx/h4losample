'use client';
import React from 'react';

export function HeroBanner() {
  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] bg-black text-white flex items-center justify-center overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="H4LO Hero"
        className="absolute w-full h-full object-cover opacity-50"
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">H4LO® COLLECTION</h1>
        <p className="mt-4 text-lg sm:text-xl">Not just clothing. A code of identity.</p>
      </div>
    </div>
  );
}
