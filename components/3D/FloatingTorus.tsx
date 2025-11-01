"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float
      speed={2.5}
      rotationIntensity={0.6}
      floatIntensity={0.6}
    >
      <mesh ref={meshRef} position={[6, -3, -3]} scale={1.5}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.2}
          speed={2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}
