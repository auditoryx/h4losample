'use client';
import Link from 'next/link';
import React from 'react';

export function Navbar({ onCartClick }: { onCartClick: () => void }) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold tracking-wide">H4LO®</Link>
      <div className="flex items-center gap-4 text-sm">
        <Link href="/lookbook" className="hover:underline">Lookbook</Link>
        <button onClick={onCartClick} className="bg-black text-white px-4 py-1 rounded-full text-xs">Cart</button>
      </div>
    </nav>
  );
}
