'use client';
import React from 'react';
import { ProductGrid } from './ProductGrid';
import { products } from '../../data/products';

export default function DiscoveryGrid() {
  return (
    <ProductGrid products={products} onSelectProduct={() => {}} />
  );
}
