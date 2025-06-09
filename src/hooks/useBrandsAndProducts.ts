'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  currency: string;
};

export default function useBrandsAndProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchLocalProducts = async () => {
      const res = await fetch('/products/products.json');
      const data = await res.json();
      setProducts(data);
    };
    fetchLocalProducts();
  }, []);

  return products;
}
