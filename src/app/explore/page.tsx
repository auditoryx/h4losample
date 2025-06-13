'use client';
import React, { useState, useEffect } from 'react';
import DiscoveryGrid from '../components/DiscoveryGrid';
import DiscoveryMap from '../components/DiscoveryMap';

export default function ExplorePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [scrollY, setScrollY] = useState(0);

  const buttonClass = (mode: 'grid' | 'map') =>
    `px-4 py-2 border border-black text-sm ${viewMode === mode ? 'bg-black text-white' : 'bg-white'}`;

  const switchMode = (mode: 'grid' | 'map') => {
    if (mode === viewMode) return;
    if (viewMode === 'grid') {
      setScrollY(window.scrollY);
    }
    setViewMode(mode);
  };

  useEffect(() => {
    if (viewMode === 'grid') {
      window.scrollTo(0, scrollY);
    }
  }, [viewMode, scrollY]);

  return (
    <div className="p-6">
      <div className="flex justify-end gap-2 mb-4">
        <button
          aria-label="Toggle view"
          className={`${buttonClass('grid')} rounded-l`}
          onClick={() => switchMode('grid')}
        >
          <span className="hidden md:inline">View as Grid</span>
          <span className="md:hidden">🔳</span>
        </button>
        <button
          aria-label="Toggle view"
          className={`${buttonClass('map')} rounded-r`}
          onClick={() => switchMode('map')}
        >
          <span className="hidden md:inline">View on Map</span>
          <span className="md:hidden">🗺️</span>
        </button>
      </div>
      <div key={viewMode} className="transition-opacity duration-300">
        {viewMode === 'grid' ? <DiscoveryGrid /> : <DiscoveryMap />}
      </div>
    </div>
  );
}
