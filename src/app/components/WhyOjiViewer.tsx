'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import VanGoghRoom from './VanGoghRoom';

function Model() {
  const { scene } = useGLTF('/models/vibram.glb');
  return <primitive object={scene} scale={1.2} />;
}

export default function WhyOjiViewer() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 1.5, 3.5], fov: 40 }}>
        {/* Interior lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />

        <Suspense fallback={null}>
          {/* Van Gogh “room” environment */}
          <VanGoghRoom />
          {/* Vibram model inside the room */}
          <Model />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}
