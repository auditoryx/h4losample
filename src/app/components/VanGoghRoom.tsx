'use client';
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

export default function VanGoghRoom() {
  const materials = useLoader(MTLLoader, '/models/vangogh/vangogh_room.mtl');
  const obj = useLoader(OBJLoader, '/models/vangogh/vangogh_room.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  return <primitive object={obj} />;
}
