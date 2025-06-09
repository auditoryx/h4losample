'use client';
import React, { useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import ShowroomSection from '../components/ShowroomSection';
import ShowroomNav from '../components/ShowroomNav';

export default function ShowroomPage() {
  const sections = [
    { id: 'tees', title: 'H4LO Tees', image: '/images/show2.jpg' },
    { id: 'caps', title: 'H4LO Caps', image: '/images/show3.jpg' },
  ];

  u  useEffect(() => {
    const audio = new Audio('/audio/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.2;

    // Wait for first user click to start audio
    const unlock = () => {
      audio.play().catch(() => {});
      window.removeEventListener('click', unlock);
    };
    window.addEventListener('click', unlock);

    return () => {
      audio.pause();
      window.removeEventListener('click', unlock);
    };
  }, []);


  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll relative">
      <ShowroomNav />
      <section id="intro" className="h-screen snap-start">
        <HeroBanner />
      </section>
      {sections.map(sec => (
        <section key={sec.id} id={sec.id} className="h-screen snap-start">
          <ShowroomSection {...sec} />
        </section>
      ))}
    </div>
  );
}
