"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })


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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">kamil@leskiewicz.pl</p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Poland, Warsaw</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/KamilLeskiewicz" target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/kamil-le%C5%9Bkiewicz-4548bb254/" target="_blank" rel="noopener noreferrer" className="bg-muted p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451c.98 0 1.778-.771 1.778-1.723V1.723C24 .771 23.203 0 22.225 0zM5.337 7.433c-1.144 0-2.072-.926-2.072-2.072 0-1.146.928-2.072 2.072-2.072 1.146 0 2.072.926 2.072 2.072 0 1.146-.926 2.072-2.072 2.072zm1.777 13.019H3.56V9h3.554v11.452zM20.447 20.452h-3.554v-5.569c0-1.327-.024-3.039-1.852-3.039-1.853 0-2.136 1.446-2.136 2.942v5.666h-3.553V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.605 0 4.271 2.372 4.271 5.455v6.288z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
