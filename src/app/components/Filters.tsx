'use client';
import React from 'react';

export function Filters({ categories, onFilter }: { categories: string[], onFilter: (cat: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 px-6 py-4">
      {['All', ...categories].map(cat => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className="px-4 py-1 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
