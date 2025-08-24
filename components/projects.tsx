"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payments, and advanced analytics dashboard.",
    image: "/modern-e-commerce-dashboard-with-charts-and-produc.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    title: "AI-Powered Chat App",
    description:
      "Real-time messaging application with AI-powered features including smart replies, sentiment analysis, and automated moderation.",
    image: "/futuristic-chat-interface-with-ai-elements-and-dar.png",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ai-chat",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard for complex data analysis with real-time updates, custom charts, and exportable reports.",
    image: "/images/data-analytics.png",
    technologies: ["React", "D3.js", "Express", "Redis", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/dashboard",
  },
  {
    title: "Mobile-First PWA",
    description:
      "Progressive Web App with offline capabilities, push notifications, and native-like performance across all devices.",
    image: "/mobile-app-interface-with-modern-design-and-notifi.png",
    technologies: ["React", "PWA", "Service Workers", "IndexedDB", "Web Push"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/pwa",
  },
  {
    title: "Blockchain DApp",
    description:
      "Decentralized application for NFT marketplace with smart contracts, wallet integration, and real-time trading.",
    image: "/blockchain-nft-marketplace-interface-with-crypto-e.png",
    technologies: ["React", "Web3.js", "Solidity", "Ethereum", "IPFS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/dapp",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "Collaborative workspace with live editing, video calls, screen sharing, and project management features.",
    image: "/collaboration-tool-interface-with-video-call-and-d.png",
    technologies: ["Next.js", "WebRTC", "Socket.io", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/collab",
  },
]

export function Projects() {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <Zap className="h-8 w-8 text-purple-400" />
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of innovative applications built with cutting-edge technologies and futuristic design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden transition-all duration-500 bg-gray-800/50 border-gray-700 hover:border-blue-500/50 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-gray-700 text-gray-200 hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
