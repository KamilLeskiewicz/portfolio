"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm <span className="text-primary">Kamil Leśkiewicz</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <h2 className="text-2xl md:text-3xl mb-8 text-muted-foreground">
            <TypedText texts={["Fullstack Developer", "Web Developer", "Creative Thinker"]} />
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

function TypedText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[index]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1))

          if (displayText.length === currentText.length) {
            setIsDeleting(true)
            setTimeout(() => {}, 1500)
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1))

          if (displayText.length === 0) {
            setIsDeleting(false)
            setIndex((index + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 150,
    )

    return () => clearTimeout(timer)
  }, [displayText, index, isDeleting, texts])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
