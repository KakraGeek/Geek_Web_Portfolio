import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-noir/95 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-vivid-lime rounded-lg flex items-center justify-center">
                <span className="text-noir font-bold text-sm">GT</span>
              </div>
              <span className="text-xl font-bold text-white">The Geek Toolbox</span>
            </div>
            <p className="text-gray-300 text-sm leading-6">
              Custom Digital Tools & Web Development for professionals, teams, and entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-electric-blue" />
                <a 
                  href="mailto:desmond.asiedu@gmail.com" 
                  className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors duration-200"
                >
                  desmond.asiedu@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-electric-blue" />
                <a 
                  href="tel:+2330244299095" 
                  className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors duration-200"
                >
                  +233(0)24.429.9095
                </a>
                <span className="text-xs text-gray-400">(Call & WhatsApp)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-electric-blue" />
                <a 
                  href="tel:+2330202113633" 
                  className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors duration-200"
                >
                  +233(0)20.211.3633
                </a>
                <span className="text-xs text-gray-400">(Call Only)</span>
              </div>
                             <div className="flex items-center space-x-3">
                 <MapPin className="h-4 w-4 text-electric-blue" />
                 <span className="text-sm leading-6 text-gray-300">
                   #222, Nii Okaiman West Main Rd,<br />New Achimota.<br />Accra, Ghana
                 </span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm leading-6 text-gray-300">
              © {currentYear} The Geek Toolbox. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="https://wa.me/2330244299095" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-300 hover:text-electric-blue transition-colors duration-200 flex items-center space-x-1"
              >
                <span>WhatsApp</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
