import { useEffect, useState } from 'react';

export const useBrandsAndProducts = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function fetchCollections() {
      const res = await fetch('/api/mock-shopify.json');
      const data = await res.json();
      setCollections(data.collections);
    }
    fetchCollections();
  }, []);

  return collections;
};
