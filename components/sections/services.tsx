"use client"

import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useInView } from '@/lib/use-in-view'
import { motion } from '@/lib/framer-motion'
import { 
  LayoutGrid, Search, Map, Cog, Smartphone, Wrench, ShieldCheck, Rocket
} from 'lucide-react'

const services = [
  {
    icon: <LayoutGrid className="h-10 w-10 text-primary" />,
    title: "Custom Real Estate Websites",
    description: "Fully customized websites built specifically for real estate agencies, agents, and property businesses."
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Property Search & Filtering",
    description: "Advanced search functionality allowing users to find properties by location, price, features, and more."
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: "Map Integrations",
    description: "Interactive maps showing property locations with customizable markers and neighborhood information."
  },
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    title: "Admin Panels",
    description: "Custom admin dashboards for easy property management, client tracking, and website content updates."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Responsive Design",
    description: "Mobile-first websites that look and function perfectly on any device, critical for today's property buyers."
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Maintenance & Support",
    description: "Ongoing technical support, updates, and maintenance to keep your real estate website running smoothly."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Security & Compliance",
    description: "Implementing data protection measures and ensuring compliance with real estate regulations and privacy laws."
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Performance Optimization",
    description: "Speed optimization for fast-loading property pages, crucial for user experience and SEO rankings."
  }
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            My Services
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            Specialized Web Development for Real Estate
          </h2>
          <p className="text-muted-foreground">
            From custom property search solutions to interactive maps and lead generation tools, 
            I provide comprehensive web development services tailored specifically for real estate professionals.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i % 4) }}
            >
              <Card className="h-full border border-border/60 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}