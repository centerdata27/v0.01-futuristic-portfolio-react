"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Zap, Palette } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    title: "Backend Development",
    icon: <Database className="h-6 w-6" />,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    title: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "REST APIs", "WebSockets"],
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["React Native", "Expo", "PWA", "Responsive Design"],
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
  {
    title: "Performance",
    icon: <Zap className="h-6 w-6" />,
    skills: ["Optimization", "Caching", "Bundle Analysis", "Core Web Vitals"],
    color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  },
  {
    title: "Design & UX",
    icon: <Palette className="h-6 w-6" />,
    skills: ["UI/UX Design", "Figma", "Prototyping", "Accessibility"],
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and performant web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 ${
                isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
