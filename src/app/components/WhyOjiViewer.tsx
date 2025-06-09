'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/vibram.glb');
  return <primitive object={scene} scale={1.2} />;
}

export default function WhyOjiViewer() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 1.5, 3.5], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 2]} intensity={2} />
        <Suspense fallback={null}>
          {/* Only the model—no <Environment /> */}
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
