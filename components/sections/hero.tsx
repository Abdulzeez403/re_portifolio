"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Building2, MapPin, Code } from "lucide-react";
import { motion } from "@/lib/framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern cityscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
              </span>
              Available for new real estate projects
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Custom Websites for Real Estate Agencies That Convert
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              I help real estate businesses attract more buyers and sellers with
              conversion-focused websites — complete with property search, map
              integration, and admin control.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gap-2 group">
                View My Work
                <ChevronRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
              >
                Get a Quote
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Building2 className="h-5 w-5 text-primary" />,
                  text: "50+ Real Estate Sites Built",
                },
                {
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                  text: "Seamless Map Integrations",
                },
                {
                  icon: <Code className="h-5 w-5 text-primary" />,
                  text: "Custom Search Functionality",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Web developer working on real estate project"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            className="animate-bounce w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.div
              className="w-1 h-2 bg-white/80 rounded-full mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
