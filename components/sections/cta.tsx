"use client"

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { useInView } from '@/lib/use-in-view'
import { motion } from '@/lib/framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container" ref={ref}>
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            Ready to Transform Your Real Estate Online Presence?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Let's create a website that helps you stand out in the competitive real estate market
            and generates quality leads for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="gap-2">
              <Calendar className="h-5 w-5" />
              Schedule a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 gap-2 group">
              View Portfolio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}