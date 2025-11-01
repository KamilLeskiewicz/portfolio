"use client";

import { motion } from "framer-motion";

interface AnimatedGradientProps {
  variant?: "primary" | "secondary" | "accent";
}

export default function AnimatedGradient({ variant = "primary" }: AnimatedGradientProps) {
  const gradients = {
    primary: {
      colors: ["rgba(59, 130, 246, 0.1)", "rgba(147, 51, 234, 0.1)"],
      positions: [["-20%", "-20%"], ["120%", "120%"]],
    },
    secondary: {
      colors: ["rgba(34, 197, 94, 0.1)", "rgba(59, 130, 246, 0.1)"],
      positions: [["120%", "-20%"], ["-20%", "120%"]],
    },
    accent: {
      colors: ["rgba(249, 115, 22, 0.1)", "rgba(236, 72, 153, 0.1)"],
      positions: [["-20%", "120%"], ["120%", "-20%"]],
    },
  };

  const selectedGradient = gradients[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${selectedGradient.colors[0]} 0%, transparent 70%)`,
        }}
        animate={{
          x: selectedGradient.positions.map((pos) => pos[0]),
          y: selectedGradient.positions.map((pos) => pos[1]),
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${selectedGradient.colors[1]} 0%, transparent 70%)`,
          right: 0,
          bottom: 0,
        }}
        animate={{
          x: selectedGradient.positions.map((pos) => pos[0]),
          y: selectedGradient.positions.map((pos) => pos[1]),
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${selectedGradient.colors[0]} 0%, transparent 70%)`,
          left: "50%",
          top: "50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

