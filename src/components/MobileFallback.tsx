import React from 'react';
import { isWebGLAvailable } from '../utils/webglCheck';
import { useBrandsAndProducts } from '../hooks/useBrandsAndProducts';

export default function MobileFallback({ children }: { children: React.ReactNode }) {
  const collections = useBrandsAndProducts();
  const fallback = typeof window !== 'undefined' && (!isWebGLAvailable() || window.innerWidth < 600);

  if (fallback) {
    return (
      <div className="p-8 text-white bg-black min-h-screen">
        <h1 className="text-3xl mb-4">H4LO (Mobile Mode)</h1>
        <ul>
          {collections.map((c: any) => (
            <li key={c.handle} className="mb-2">
              <a href={`/collections/${c.handle}`} className="text-blue-400 underline">{c.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <>{children}</>;
}
