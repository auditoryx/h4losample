'use client';
import React from 'react';

export default function ShowroomSection({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div
      className="w-full h-full bg-center bg-cover flex items-center justify-center relative"
      style={{ backgroundImage: \`url(\${image})\` }}
    >
      <div className="bg-black bg-opacity-40 p-6 rounded-lg text-white text-center max-w-lg">
        <h2 className="text-4xl font-light mb-2">{title}</h2>
        <p className="text-sm">An exploration of form, function, and vision.</p>
      </div>
    </div>
  );
}
