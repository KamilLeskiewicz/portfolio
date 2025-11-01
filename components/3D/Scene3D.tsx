"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";
import Terminal from "./Terminal";

export default function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-85 opacity-60 md:opacity-70 pointer-events-none -z-0">
      <Canvas>
        <Suspense fallback={null}>
          <Stars radius={150} depth={100} count={8000} factor={5} saturation={0} fade speed={1} />
        </Suspense>
      </Canvas>
      <Terminal />
    </div>
  );
}

