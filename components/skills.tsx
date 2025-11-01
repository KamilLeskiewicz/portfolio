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
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {skills.map((skill, index) => {
            const isWide = index === 1 || index === 4;
            const isTall = index === 5 || index === 10;
            
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`group ${
                  isWide ? 'sm:col-span-2' : 
                  isTall ? 'sm:row-span-2' :
                  ''
                }`}
              >
                <div className={`relative h-full min-h-[120px] p-4 md:p-6 rounded-2xl bg-[#1a1f2e] border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 ${
                  isWide || isTall ? 'min-h-[140px]' : ''
                }`}>
                  <div className="flex flex-col items-center justify-center text-center h-full space-y-2 md:space-y-3">
                    <motion.div 
                      className={`${isWide || isTall ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'}`}
                      animate={isInView ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.05 + index * 0.03,
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className={`font-semibold ${isWide || isTall ? 'text-base md:text-lg' : 'text-xs md:text-sm'} text-white group-hover:text-primary transition-colors`}>
                      {skill.name}
                    </h3>
                  </div>
                  
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                  
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
