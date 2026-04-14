"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiTailwindcss,
  SiReact, SiNextdotjs, SiPython, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiFigma, SiPayloadcms
} from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { MdDesignServices } from "react-icons/md"

const skills = [
  { name: "HTML5",        icon: <SiHtml5 />,       color: "from-orange-500 to-red-500",    iconColor: "#E34F26" },
  { name: "CSS3",         icon: <SiCss />,          color: "from-blue-400 to-blue-600",     iconColor: "#1572B6" },
  { name: "JavaScript",   icon: <SiJavascript />,   color: "from-yellow-400 to-yellow-600", iconColor: "#F7DF1E" },
  { name: "TypeScript",   icon: <SiTypescript />,   color: "from-blue-500 to-blue-700",     iconColor: "#3178C6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />,  color: "from-sky-400 to-blue-600",      iconColor: "#06B6D4" },
  { name: "React",        icon: <SiReact />,        color: "from-cyan-400 to-blue-500",     iconColor: "#61DAFB" },
  { name: "Next.js",      icon: <SiNextdotjs />,    color: "from-gray-600 to-gray-900",     iconColor: "currentColor" },
  { name: "React Native", icon: <SiReact />,        color: "from-blue-400 to-purple-500",   iconColor: "#61DAFB" },
  { name: "Python",       icon: <SiPython />,       color: "from-blue-600 to-yellow-400",   iconColor: "#3776AB" },
  { name: "Payload CMS",  icon: <SiPayloadcms />,   color: "from-gray-600 to-gray-800",     iconColor: "currentColor" },
  { name: "MongoDB",      icon: <SiMongodb />,      color: "from-green-500 to-green-700",   iconColor: "#47A248" },
  { name: "PostgreSQL",   icon: <SiPostgresql />,   color: "from-blue-500 to-blue-800",     iconColor: "#336791" },
  { name: "SQL",          icon: <FaDatabase />,     color: "from-blue-400 to-indigo-600",   iconColor: "#4479A1" },
  { name: "Git",          icon: <SiGit />,          color: "from-orange-600 to-red-600",    iconColor: "#F05032" },
  { name: "Docker",       icon: <SiDocker />,       color: "from-blue-400 to-cyan-600",     iconColor: "#2496ED" },
  { name: "Figma",        icon: <SiFigma />,        color: "from-pink-400 to-purple-600",   iconColor: "#F24E1E" },
  { name: "UI/UX Design", icon: <MdDesignServices />, color: "from-purple-400 to-pink-500", iconColor: "#A855F7" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4"
        >
          {skills.map((skill, index) => {
            const isWide = index === 1 || index === 4
            const isTall = index === 5 || index === 10

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`group ${isWide ? "sm:col-span-2" : isTall ? "sm:row-span-2" : ""}`}
              >
                <div
                  className={`relative h-full min-h-[100px] sm:min-h-[120px] p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20 ${
                    isWide || isTall ? "sm:min-h-[140px]" : ""
                  }`}
                >
                  <div className="flex flex-col items-center justify-center text-center h-full space-y-1.5 sm:space-y-2 md:space-y-3">
                    <motion.div
                      className="flex items-center justify-center text-4xl sm:text-5xl"
                      style={{ color: skill.iconColor }}
                      animate={isInView ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 0.5, delay: 0.05 + index * 0.03 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3
                      className={`font-semibold ${
                        isWide || isTall ? "text-sm sm:text-base md:text-lg" : "text-xs sm:text-sm"
                      } text-foreground group-hover:text-primary transition-colors leading-tight`}
                    >
                      {skill.name}
                    </h3>
                  </div>

                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
