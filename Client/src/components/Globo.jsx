import React, { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

function Globo() {
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      {/* Globo */}
      <Sphere ref={globeRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4E74C2"
          wireframe={true}
        />
      </Sphere>
    </>
  );
}

export default Globo;
