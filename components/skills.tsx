"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { 
      name: "HTML & CSS", 
      icon: "🎨",
      color: "from-orange-500 to-pink-500"
    },
    { 
      name: "JavaScript", 
      icon: "💛",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      name: "TypeScript", 
      icon: "🔷",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Tailwind CSS",
      icon: "🌊",
      color: "from-sky-400 to-blue-600"
    },
    { 
      name: "React", 
      icon: "⚛️",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Next.js", 
      icon: "▲",
      color: "from-gray-700 to-gray-900"
    },
    { 
      name: "React Native", 
      icon: "📱",
      color: "from-blue-400 to-purple-500"
    },
    { 
      name: "Python", 
      icon: "🐍",
      color: "from-blue-600 to-yellow-400"
    },
    {
      name: "Payload CMS",
      icon: "📦",
      color: "from-gray-600 to-gray-800"
    },
    { 
      name: "MongoDB", 
      icon: "🍃",
      color: "from-green-500 to-green-700"
    },
    { 
      name: "PostgreSQL", 
      icon: "🐘",
      color: "from-blue-500 to-blue-800"
    },
    { 
      name: "SQL", 
      icon: "💾",
      color: "from-blue-400 to-indigo-600"
    },
    { 
      name: "Git", 
      icon: "🌿",
      color: "from-orange-600 to-red-600"
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "from-blue-400 to-cyan-600"
    },
    {
      name: "Figma",
      icon: "✨",
      color: "from-pink-400 to-purple-600"
    },
    { 
      name: "UI/UX Design", 
      icon: "🎯",
      color: "from-purple-400 to-pink-500"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                <div className="flex flex-col items-center text-center space-y-3">
                  <motion.div 
                    className={`text-5xl mb-2 bg-gradient-to-br ${skill.color} bg-clip-text`}
                    animate={isInView ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.1 + index * 0.05,
                      scale: { duration: 0.4 }
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
