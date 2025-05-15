"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Kamil<span className="text-primary">Leśkiewicz</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
              <a href="/kamil.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <ModeToggle />

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-end mb-4">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-lg font-medium py-2 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/cv.pdf"
                  download
                  className="text-lg font-medium py-2 hover:text-primary transition-colors flex items-center"
                  onClick={toggleMenu}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
