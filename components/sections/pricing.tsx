"use client"

import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useInView } from '@/lib/use-in-view'
import { motion } from '@/lib/framer-motion'
import { Check, HelpCircle } from 'lucide-react'

// Pricing plans data
const pricingPlans = [
  {
    name: "Agent Website",
    price: 1499,
    description: "Perfect for individual real estate agents looking to establish their online presence.",
    features: [
      "Responsive custom design",
      "Property listings page",
      "Contact form & lead capture",
      "About page & testimonials",
      "Basic SEO optimization",
      "Social media integration",
      "1 month of support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Brokerage Platform",
    price: 2999,
    description: "Comprehensive solution for real estate agencies with multiple agents and properties.",
    features: [
      "Everything in Agent Website",
      "Advanced property search",
      "Google Maps integration",
      "Agent profiles & listings",
      "Blog/news section",
      "Newsletter signup",
      "Admin dashboard",
      "3 months of support",
    ],
    popular: true,
    buttonText: "Best Value",
  },
  {
    name: "Custom Solution",
    price: null,
    description: "Tailored development for complex real estate businesses with specific requirements.",
    features: [
      "Everything in Brokerage Platform",
      "Custom MLS integration",
      "Advanced mapping features",
      "Property comparison tools",
      "Virtual tours integration",
      "Advanced analytics",
      "Custom admin functionality",
      "6 months of support",
      "Priority response time",
    ],
    popular: false,
    buttonText: "Contact Me",
  }
]

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container" ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Pricing Plans
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            Transparent Pricing for Real Estate Websites
          </h2>
          <p className="text-muted-foreground">
            Clear, upfront pricing packages tailored for real estate professionals.
            Each plan includes everything you need to establish a strong online presence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Card className={`h-full relative border border-border/60 ${
                plan.popular ? 'shadow-lg border-primary/50' : 'hover:shadow-md'
              } transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    {plan.price ? (
                      <div className="flex items-center justify-center">
                        <span className="text-4xl font-bold">${plan.price}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="text-2xl font-medium">Custom Quote</span>
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-center">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted p-4 rounded-lg text-sm text-muted-foreground">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span>Need a custom solution? Contact me for a personalized quote based on your requirements.</span>
          </div>
        </div>
      </div>
    </section>
  )
}