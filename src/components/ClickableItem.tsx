import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  mesh: THREE.Mesh;
  onClick: () => void;
};

export const ClickableItem: React.FC<Props> = ({ mesh, onClick }) => {
  const { camera, gl, scene } = useThree();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const intersectedRef = useRef(false);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function handleClick() {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(mesh, true);
      if (intersects.length > 0) {
        onClick();
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [camera, mesh]);

  useFrame(() => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(mesh, true);
    if (intersects.length > 0 && !intersectedRef.current) {
      (mesh.material as any).emissive.set(0x00ffcc);
      intersectedRef.current = true;
      document.body.style.cursor = 'pointer';
    } else if (intersects.length === 0 && intersectedRef.current) {
      (mesh.material as any).emissive.set(0x000000);
      intersectedRef.current = false;
      document.body.style.cursor = 'default';
    }
  });

  return null;
};
