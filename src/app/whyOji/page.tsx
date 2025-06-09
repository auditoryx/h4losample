'use client';

import dynamic from 'next/dynamic';

const IntroGate = dynamic(
  () => import('../components/WhyOjiIntroGate'),
  { ssr: false }
);

export default function WhyOjiPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <IntroGate />
    </main>
  );
}
