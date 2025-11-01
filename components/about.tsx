"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="/about.JPEG" 
                alt="Kamil Leśkiewicz - Fullstack Developer and Web Developer portfolio photo" 
                fill 
                className="object-cover"
                priority
                title="Kamil Leśkiewicz - Fullstack Developer"
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border-4 border-primary rounded-lg -z-10"></div>
          </motion.div>

          <div>
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 inline-block relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg mb-3 sm:mb-4">
            I am a young, ambitious programmer with passion and solid technical knowledge.
            I specialize in Web Development with full-stack skills and I am constantly expanding my competences in this direction. 
            </motion.p>

            <motion.p variants={itemVariants} className="text-base sm:text-lg mb-4 sm:mb-6">
            I am a full-stack developer working at RedSteel.
            I excel in both teamwork and independent project implementation. 
            I am open to new challenges and constantly strive to improve my skills.
            </motion.p>


          </div>
        </motion.div>
      </div>
    </section>
  )
}
