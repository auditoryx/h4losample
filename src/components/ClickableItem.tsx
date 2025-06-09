'use client';
import { useEffect } from 'react';
import * as THREE from 'three';

type ClickableItemProps = {
  mesh: THREE.Mesh;
  camera: THREE.Camera;
  label?: string;
  onClick: () => void;
};

export default function ClickableItem({ mesh, camera, label, onClick }: ClickableItemProps) {
  useEffect(() => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(mesh);

      if (intersects.length > 0) {
        (mesh.material as any).emissive?.setHex(0xff00ff);
        document.body.style.cursor = 'pointer';
      } else {
        (mesh.material as any).emissive?.setHex(0x000000);
        document.body.style.cursor = 'default';
      }
    };

    const handleClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(mesh);
      if (intersects.length > 0) onClick();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.body.style.cursor = 'default';
    };
  }, [mesh, camera, onClick]);

  return null;
}
