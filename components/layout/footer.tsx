import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin, Github, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-playfair text-2xl font-bold">Abdulazeez</h3>
          <p className="text-muted-foreground">
            Building custom websites for real estate agencies & property businesses since 2018.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Facebook size={18} />
              </Button>
            </Link>
            <Link href="#" aria-label="Instagram">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Instagram size={18} />
              </Button>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Linkedin size={18} />
              </Button>
            </Link>
            <Link href="#" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Github size={18} />
              </Button>
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-4">Services</h4>
          <ul className="space-y-3">
            {[
              'Custom Real Estate Websites', 
              'Property Search Solutions', 
              'Map Integrations', 
              'Admin Panels', 
              'Responsive Design',
              'Website Maintenance'
            ].map((item) => (
              <li key={item}>
                <Link 
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-lg mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-muted-foreground" />
              <a 
                href="mailto:contact@abdulazeez.dev" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@abdulazeez.dev
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-muted-foreground" />
              <a 
                href="tel:+1234567890" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +1 (234) 567-890
              </a>
            </li>
            <li className="mt-4">
              <Button className="w-full">Schedule a Call</Button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abdulazeez. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}