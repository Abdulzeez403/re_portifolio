"use client"

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useInView } from '@/lib/use-in-view'
import { motion } from '@/lib/framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'

// Project data
const projects = [
  {
    id: 1,
    title: "Luxury Homes Platform",
    description: "A high-end real estate platform for an exclusive brokerage specializing in luxury properties.",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "agency",
    tags: ["Next.js", "Google Maps API", "Property Search", "Admin Panel"],
    link: "#"
  },
  {
    id: 2,
    title: "City Apartments Finder",
    description: "Modern apartment listing website with advanced filtering and neighborhood insights.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "search",
    tags: ["React", "Mapbox", "Filtering", "User Accounts"],
    link: "#"
  },
  {
    id: 3,
    title: "Agent Portfolio Website",
    description: "Personal branding website for a top-performing real estate agent with testimonials and listing showcase.",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "agent",
    tags: ["Next.js", "CMS", "SEO", "Responsive"],
    link: "#"
  },
  {
    id: 4,
    title: "Property Management Dashboard",
    description: "Comprehensive admin system for property managers to track rentals, maintenance, and tenant communications.",
    image: "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "admin",
    tags: ["React", "Dashboard", "Analytics", "User Management"],
    link: "#"
  },
  {
    id: 5,
    title: "Commercial Real Estate Platform",
    description: "B2B platform for commercial property listings with detailed financial data and investor tools.",
    image: "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "agency",
    tags: ["Next.js", "Financial Tools", "Interactive Maps", "Lead Gen"],
    link: "#"
  },
  {
    id: 6,
    title: "Property Valuation Tool",
    description: "Interactive tool helping homeowners estimate their property value based on market data.",
    image: "https://images.pexels.com/photos/7579049/pexels-photo-7579049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "search",
    tags: ["React", "Data Visualization", "API Integration", "User Accounts"],
    link: "#"
  }
]

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("all")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)
  
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Featured Work
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            Real Estate Web Projects
          </h2>
          <p className="text-muted-foreground">
            Browse through my portfolio of specialized real estate web development projects,
            from property listing platforms to agent websites and custom admin systems.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="agency">Agency Sites</TabsTrigger>
              <TabsTrigger value="search">Search Tools</TabsTrigger>
              <TabsTrigger value="agent">Agent Sites</TabsTrigger>
              <TabsTrigger value="admin">Admin Systems</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * (i % 3) }}
                >
                  <Card className="h-full overflow-hidden border-border/60 group hover:shadow-lg transition-all duration-300">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <a href={project.link} className="text-white font-medium flex items-center gap-2 hover:underline">
                          View Project <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2 group">
            View All Projects
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}