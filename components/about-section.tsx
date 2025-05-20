"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-lg"
          >
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Profile"
              width={500}
              height={500}
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Full-Stack Developer</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate full-stack developer with 5+ years of experience building web applications. I specialize
              in JavaScript, React, Node.js, and modern web technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in software development began when I built my first website at 15. Since then, I've worked on
              numerous projects ranging from small business websites to complex enterprise applications. I'm constantly
              learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

