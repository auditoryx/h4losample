import React from 'react';

export default function ProductModal({ product, onClose }: any) {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md max-w-md w-full">
        <img src={product.image} alt={product.title} className="w-full mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-lg mb-4">${product.price}</p>
        <button className="bg-black text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
        <button className="ml-4 bg-green-600 text-white px-4 py-2 rounded">Buy Now</button>
      </div>
    </div>
  );
}
