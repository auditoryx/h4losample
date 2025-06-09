'use client';

import ProductModal from "@/components/ProductModal";
import ProductModal from "@/components/ProductModal";
import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useParams } from 'next/navigation';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import manifest from '@/../public/rooms/manifest.json';
import { Box } from '@react-three/drei';

export default function RoomPage() {
  const { slug } = useParams();
  const room = useMemo(() => manifest.find(r => r.slug === slug), [slug]);

  if (!room) return <div>Room not found.</div>;

  const gltf = useLoader(GLTFLoader, room.gltfUrl);

  return (
    <div className="h-screen w-screen bg-black">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[0, 10, 5]} />
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// Add at top of file
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useRef, useState } from 'react';
import ClickableItem from '@/components/ClickableItem';
import * as THREE from 'three';

// Inside your page component (after slug & manifest logic)
const [selectedProduct, setSelectedProduct] = useState<any>(null);
const gltf = useLoader(GLTFLoader, entry.gltfUrl);
const cameraRef = useRef<THREE.PerspectiveCamera>(null);

// In your JSX return:
<Suspense fallback={<div>Loading 3D Scene...</div>}>
  <Canvas camera={{ position: [0, 1.6, 3] }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[0, 5, 5]} />
    <perspectiveCamera ref={cameraRef} />

    <primitive object={gltf.scene} />

    {gltf.scene.children.map((child, idx) => {
      if (child.type === 'Mesh' && child.name.includes('Hotspot')) {
        return (
          <ClickableItem
            key={idx}
            mesh={child as THREE.Mesh}
            camera={cameraRef.current!}
            label={child.name}
            onClick={() => setSelectedProduct({ id: child.name })}
          />
        );
      }
      return null;
    })}
  </Canvas>
</Suspense>

import { useBrandsAndProducts } from '@/hooks/useBrandsAndProducts';
import { useMemo } from 'react';
import ClickableItem from '@/components/ClickableItem';

...

const collections = useBrandsAndProducts();
const roomData = collections.find(c => c.handle === slug);

const productMeshes = useMemo(() => {
  if (!roomData) return [];
  return roomData.products.map((product, idx) => {
    const position = [
      (idx % 5) * 2 - 5, // x-axis spacing
      1,
      Math.floor(idx / 5) * -2, // z-axis depth
    ];
    return (
      <mesh key={product.id} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
        <ClickableItem
          mesh={undefined} // You’ll hook this up if wrapping real GLTF parts
          camera={camera}
          label={product.title}
          onClick={() => setSelectedProduct(product)}
        />
      </mesh>
    );
  });
}, [roomData]);

...

<Canvas>
  ...
  {productMeshes}
</Canvas>

// ✅ Injected ProductModal logic

// ✅ Injected ProductModal logic
