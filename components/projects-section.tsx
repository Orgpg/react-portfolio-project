"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Fitness Tracker",
      description:
        "A mobile-responsive fitness tracking application that allows users to track workouts and nutrition.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "GraphQL", "PostgreSQL", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Real Estate Listing",
      description: "A real estate listing platform with property search, filtering, and user favorites.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Express", "MongoDB", "Google Maps API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

