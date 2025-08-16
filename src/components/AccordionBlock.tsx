'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Lightbulb, Workflow, Heart, Eye, Repeat } from 'lucide-react'
import { cn } from '@/lib/utils'

// Design Philosophy Content Component
function DesignPhilosophyContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="space-y-4"
    >
      <p className="text-gray-300 leading-relaxed mb-4">
        My approach to design is simple: put people first. Every pixel, every interaction, and every workflow is crafted to make life easier for real users.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-6 h-6 text-soft-rose">
            <Heart className="w-6 h-6" />
          </div>
          <div className="text-gray-300">
            <span className="font-semibold text-soft-rose">Empathy:</span> I design with the user&apos;s needs, frustrations, and goals in mind.
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-6 h-6 text-electric-blue">
            <Eye className="w-6 h-6" />
          </div>
          <div className="text-gray-300">
            <span className="font-semibold text-electric-blue">Clarity:</span> I believe in clear, intuitive interfaces that guide users naturally.
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-6 h-6 text-vivid-lime">
            <Repeat className="w-6 h-6" />
          </div>
          <div className="text-gray-300">
            <span className="font-semibold text-vivid-lime">Consistency:</span> I use familiar patterns and visual cues to build trust and reduce confusion.
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// How I Work Content Component
function HowIWorkContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="space-y-4"
    >
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center">
            <span className="text-electric-blue font-bold text-sm">1</span>
          </div>
          <div className="text-gray-300">
            <h4 className="font-semibold text-electric-blue mb-1">Step 1: We Talk</h4>
            <p>You tell me what&apos;s not working or what you dream of building. I listen — deeply.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-vivid-lime/20 rounded-full flex items-center justify-center">
            <span className="text-vivid-lime font-bold text-sm">2</span>
          </div>
          <div className="text-gray-300">
            <h4 className="font-semibold text-vivid-lime mb-1">Step 2: I Sketch</h4>
            <p>I turn your ideas into a clickable prototype you can explore and tweak.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-sun-amber/20 rounded-full flex items-center justify-center">
            <span className="text-sun-amber font-bold text-sm">3</span>
          </div>
          <div className="text-gray-300">
            <h4 className="font-semibold text-sun-amber mb-1">Step 3: We Tweak Together</h4>
            <p>You poke holes, I patch. We loop this as long as it takes.</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-soft-rose/20 rounded-full flex items-center justify-center">
            <span className="text-soft-rose font-bold text-sm">4</span>
          </div>
          <div className="text-gray-300">
            <h4 className="font-semibold text-soft-rose mb-1">Step 4: We Launch</h4>
            <p>And when it&apos;s live, I&apos;m still around. Real-world feedback matters — and I keep refining.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-electric-blue/10 to-vivid-lime/10 border border-electric-blue/20 rounded-lg">
        <p className="text-gray-300 text-center italic">
          Feedback is continuous, not occasional. It&apos;s how we get it right—together.
        </p>
      </div>
    </motion.div>
  )
}

interface AccordionItem {
  id: string
  title: string
  content: string
  icon: React.ReactNode
}

interface AccordionBlockProps {
  items: AccordionItem[]
  className?: string
}

export function AccordionBlock({ items, className = '' }: AccordionBlockProps) {
  const [openItem, setOpenItem] = useState<string | null>(items[0]?.id || null)

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-inset"
            aria-expanded={openItem === item.id}
            aria-controls={`accordion-content-${item.id}`}
          >
            <div className="flex items-center space-x-3">
              <div className="text-electric-blue">
                {item.icon}
              </div>
              <span className="text-lg font-semibold text-white">
                {item.title}
              </span>
            </div>
            <motion.div
              animate={{ rotate: openItem === item.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-electric-blue"
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openItem === item.id && (
              <motion.div
                id={`accordion-content-${item.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pt-4 pb-4">
                  {item.content === 'design-philosophy-special' ? (
                    <DesignPhilosophyContent />
                  ) : item.content === 'how-i-work-special' ? (
                    <HowIWorkContent />
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      {item.content}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

// Pre-configured accordion items for the portfolio
export const portfolioAccordionItems: AccordionItem[] = [
  {
    id: 'design-philosophy',
    title: 'Design Philosophy',
    content: 'design-philosophy-special',
    icon: <Lightbulb className="h-5 w-5" />
  },
  {
    id: 'how-i-work',
    title: 'How I Work',
    content: 'how-i-work-special',
    icon: <Workflow className="h-5 w-5" />
  }
]
