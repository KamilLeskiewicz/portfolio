"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";
import FloatingCube from "./FloatingCube";
import FloatingSphere from "./FloatingSphere";
import FloatingTorus from "./FloatingTorus";
import FloatingOctahedron from "./FloatingOctahedron";

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-60 md:opacity-70 pointer-events-none -z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[15, 15, 15]} intensity={1.2} color="#3b82f6" />
        <pointLight position={[-15, -15, -15]} intensity={1} color="#9333ea" />
        <pointLight position={[0, 15, -15]} intensity={0.8} color="#ec4899" />
        <pointLight position={[-15, 15, 15]} intensity={0.7} color="#06b6d4" />
        <spotLight position={[10, 10, 10]} angle={0.4} penumbra={1} intensity={0.6} color="#06b6d4" />
        
        <Suspense fallback={null}>
          <FloatingCube />
          <FloatingSphere />
          <FloatingTorus />
          <FloatingOctahedron />
          <Stars radius={150} depth={100} count={8000} factor={5} saturation={0} fade speed={1} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

