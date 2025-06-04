"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useInView } from "@/lib/use-in-view";
import { motion } from "@/lib/framer-motion";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Contact Me
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            Let's Discuss Your Real Estate Website
          </h2>
          <p className="text-muted-foreground">
            Ready to elevate your real estate business online? Get in touch to
            discuss your project requirements or schedule a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border border-border/60">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="(123) 456-7890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Agency</Label>
                      <Input id="company" placeholder="Smith Real Estate" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    <select
                      id="project-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled selected>
                        Select project type
                      </option>
                      <option value="agent-website">Agent Website</option>
                      <option value="brokerage-website">
                        Brokerage Website
                      </option>
                      <option value="property-platform">
                        Property Platform
                      </option>
                      <option value="admin-system">Admin System</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project requirements and goals..."
                      rows={5}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="border border-border/60">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:contact@abdulazeez.dev"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@abdulazeez.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        San Francisco, California
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/60">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Schedule a Call</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer to discuss your project over a call? Schedule a free
                  30-minute consultation at a time that works for you.
                </p>
                <Button className="w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Book a Consultation
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border/60">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For
                  urgent matters, please reach out via phone.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
