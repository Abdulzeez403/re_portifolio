"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Download } from 'lucide-react'
import { useInView } from '@/lib/use-in-view'
import { motion } from '@/lib/framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Real estate web developer" 
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              About Me
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Specialized Web Developer for Real Estate Businesses
            </h2>
            
            <p className="text-muted-foreground">
              With over 6 years of experience, I've focused exclusively on creating 
              high-performance websites for real estate agents, brokerages, and property 
              management companies. I understand the unique challenges and opportunities 
              in the real estate market.
            </p>
            
            <p className="text-muted-foreground">
              My approach combines stunning design with strategic functionality that drives 
              real business results. Every website I build is optimized to generate leads, 
              showcase properties effectively, and provide seamless user experiences.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Next.js & React Expert",
                "Property Search Integration",
                "Google Maps API Specialist",
                "MLS Integration",
                "SEO Optimization",
                "Mobile-First Development",
                "Lead Generation Focus",
                "Real Estate CMS Expert"
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button className="gap-2">
                <Download size={16} />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}