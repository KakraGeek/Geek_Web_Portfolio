'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

interface AnimatedCTAProps {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function AnimatedCTA({ text, href, variant = 'primary', className = '' }: AnimatedCTAProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue"
  
  const variantClasses = {
    primary: "bg-vivid-lime/20 text-vivid-lime hover:bg-vivid-lime hover:text-noir border border-vivid-lime/30",
    secondary: "bg-electric-blue/20 text-electric-blue hover:bg-electric-blue hover:text-noir border border-electric-blue/30"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mr-2"
        >
          {text}
        </motion.span>
        
        <motion.div
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          whileHover={{ x: 3 }}
        >
          <ArrowRight className="h-6 w-6" />
        </motion.div>
        
        {/* Sparkle effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles className="h-4 w-4 text-sun-amber" />
        </motion.div>
      </Link>
    </motion.div>
  )
}
