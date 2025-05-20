"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="h-10 w-10 text-primary" />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    },
    {
      category: "Backend Development",
      icon: <Server className="h-10 w-10 text-primary" />,
      technologies: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
    },
    {
      category: "Database",
      icon: <Database className="h-10 w-10 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma"],
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo", "Mobile UI/UX"],
    },
    {
      category: "DevOps",
      icon: <Globe className="h-10 w-10 text-primary" />,
      technologies: ["Docker", "AWS", "CI/CD", "Vercel", "Netlify", "GitHub Actions"],
    },
    {
      category: "Other Skills",
      icon: <Code className="h-10 w-10 text-primary" />,
      technologies: ["Git", "Agile/Scrum", "UI/UX Design", "Testing", "Performance Optimization", "SEO"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Technologies</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  {skill.icon}
                  <div>
                    <CardTitle>{skill.category}</CardTitle>
                    <CardDescription>Technologies I use</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {skill.technologies.map((tech) => (
                      <li key={tech} className="flex items-center">
                        <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

