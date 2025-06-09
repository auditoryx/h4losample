'use client';
import React from 'react';

export default function LookbookPage() {
  const photos = ['/images/look1.jpg', '/images/look2.jpg', '/images/look3.jpg'];

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-6">Lookbook</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Look ${idx + 1}`}
            className="rounded-xl object-cover w-full h-[70vh]"
          />
        ))}
      </div>
    </main>
  );
}
