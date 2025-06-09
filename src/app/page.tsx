'use client';
import React, { useState } from 'react';
import { HeroBanner } from './components/HeroBanner';
import { Filters } from './components/Filters';
import { ProductGrid } from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import { CartProvider } from './components/CartContext';
import { Navbar } from './components/Navbar';
import { products } from '../data/products';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? products : products.filter(p =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  const categories = [...new Set(products.map(p => p.title.split(' ')[1]))];

  return (
    <CartProvider>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <HeroBanner />
      <Filters categories={categories} onFilter={setFilter} />
      <ProductGrid onSelectProduct={setSelectedProduct} products={filtered} />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
      {cartOpen && <CartModal onClose={() => setCartOpen(false)} />}
    </CartProvider>
  );
}
