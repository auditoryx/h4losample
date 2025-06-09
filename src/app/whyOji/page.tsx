'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const IntroGate = dynamic(() => import('@/app/components/WhyOjiIntroGate'), { ssr: false });

export default function WhyOjiPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <IntroGate />
    </main>
  );
}
