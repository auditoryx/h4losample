'use client';
import React from 'react';

type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  currency: string;
  onClick?: () => void;
};

export function ProductCard({ id, title, image, price, currency, onClick }: Product) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border p-4 rounded-2xl shadow hover:shadow-lg transition"
    >
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-xl" />
      <div className="mt-4 text-lg font-semibold">{title}</div>
      <div className="text-gray-500">{currency} {price}</div>
    </div>
  );
}
