'use client';
import React, { useState } from 'react';
import DiscoveryGrid from '../components/DiscoveryGrid';
import DiscoveryMap from '../components/DiscoveryMap';

export default function ExplorePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const buttonClass = (mode: 'grid' | 'map') =>
    `px-4 py-2 border border-black text-sm ${viewMode === mode ? 'bg-black text-white' : 'bg-white'}`;

  return (
    <div className="p-6">
      <div className="flex justify-end gap-2 mb-4">
        <button
          className={`${buttonClass('grid')} rounded-l`}
          onClick={() => setViewMode('grid')}
        >
          <span className="hidden md:inline">View as Grid</span>
          <span className="md:hidden">🔳</span>
        </button>
        <button
          className={`${buttonClass('map')} rounded-r`}
          onClick={() => setViewMode('map')}
        >
          <span className="hidden md:inline">View on Map</span>
          <span className="md:hidden">🗺️</span>
        </button>
      </div>
      {viewMode === 'grid' ? <DiscoveryGrid /> : <DiscoveryMap />}
    </div>
  );
}
