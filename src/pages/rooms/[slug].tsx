'use client';

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
