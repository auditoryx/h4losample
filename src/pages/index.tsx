// src/pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <button
        className="bg-white text-black px-8 py-4 text-xl font-bold rounded hover:bg-gray-200 transition"
        onClick={() => router.push('/rooms/hub')}
      >
        Enter H4LO 3D Store
      </button>
    </div>
  );
};

export default HomePage;
