import { useEffect, useState } from 'react';

type Product = {
  id: string;
  title: string;
  handle: string;
  price: string;
  currency: string;
  image: string;
};

type Collection = {
  title: string;
  handle: string;
  products: Product[];
};

export function useBrandsAndProducts(): Collection[] {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const res = await fetch(`https://${process.env.NEXT_PUBLIC_SHOP_DOMAIN}/api/2023-10/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_STOREFRONT_TOKEN!,
        },
        body: JSON.stringify({
          query: `
            {
              collections(first: 10) {
                edges {
                  node {
                    title
                    handle
                    products(first: 5) {
                      edges {
                        node {
                          id
                          title
                          handle
                          priceRange {
                            minVariantPrice {
                              amount
                              currencyCode
                            }
                          }
                          images(first: 1) {
                            edges {
                              node {
                                url
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        }),
      });

      const json = await res.json();
      const collectionsData = json.data.collections.edges.map((edge: any) => {
        const node = edge.node;
        return {
          title: node.title,
          handle: node.handle,
          products: node.products.edges.map((prodEdge: any) => {
            const prod = prodEdge.node;
            return {
              id: prod.id,
              title: prod.title,
              handle: prod.handle,
              price: prod.priceRange.minVariantPrice.amount,
              currency: prod.priceRange.minVariantPrice.currencyCode,
              image: prod.images.edges[0]?.node.url || '',
            };
          }),
        };
      });

      setCollections(collectionsData);
    };

    fetchCollections();
  }, []);

  return collections;
}
