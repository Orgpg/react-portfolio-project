"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative">
      <Navbar />
      <div className="container min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            A passionate full-stack developer specializing in building exceptional digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button onClick={scrollToContact} size="lg">
              Contact Me
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:contact@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </motion.div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

