"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.35;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <Float
      speed={1.8}
      rotationIntensity={0.4}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} position={[-6, -4, 2]} scale={1.6}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#ec4899"
          attach="material"
          distort={0.3}
          speed={1.8}
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}
