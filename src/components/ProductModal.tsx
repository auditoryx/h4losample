'use client';

import React from 'react';

type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  currency: string;
};

type Props = {
  product: Product;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  const handleBuyNow = () => {
    alert(`Pretend checkout for "${product.title}"`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-lg mb-4">
          {product.price} {product.currency}
        </p>
        <button
          className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
