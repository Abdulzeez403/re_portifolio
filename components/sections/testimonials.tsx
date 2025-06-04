"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { useInView } from '@/lib/use-in-view'
import { motion } from '@/lib/framer-motion'
import { Quote } from 'lucide-react'

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Abdulazeez created a website that doubled our property inquiries within the first month. The search functionality and map integration are exactly what our clients needed.",
    name: "Sarah Johnson",
    title: "Broker, Luxury Estates Agency",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "Working with Abdulazeez was a game-changer for my real estate business. He understands exactly what agents need and delivered a website that stands out from the competition.",
    name: "Michael Chen",
    title: "Independent Real Estate Agent",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "The property management system Abdulazeez built for us streamlined our entire operation. It's intuitive, powerful, and our team loves using it daily.",
    name: "Emily Rodriguez",
    title: "Operations Director, City Properties",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    quote: "Our commercial real estate platform needed complex features and custom integrations. Abdulazeez delivered everything on time and with exceptional quality.",
    name: "David Thompson",
    title: "CEO, Commercial Property Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 bg-muted/30">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Client Testimonials
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            What Real Estate Professionals Say
          </h2>
          <p className="text-muted-foreground">
            Hear from real estate agents, brokers, and property managers who have transformed 
            their online presence and business operations with my custom web solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className="h-full border border-border/60 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/50 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
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