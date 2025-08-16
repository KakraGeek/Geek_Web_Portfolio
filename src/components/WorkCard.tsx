'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Eye } from 'lucide-react'
import { Project } from '@/data/projects'
import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

interface WorkCardProps {
  project: Project
  onClick: () => void
  className?: string
}

export function WorkCard({ project, onClick, className = '' }: WorkCardProps) {
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isHoveredRef = useRef(false)

  const handleMouseEnter = () => {
    isHoveredRef.current = true
    // Open modal after 800ms of hover (desktop only)
    hoverTimeoutRef.current = setTimeout(() => {
      if (isHoveredRef.current) {
        onClick()
      }
    }, 800)
  }

  const handleMouseLeave = () => {
    isHoveredRef.current = false
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer overflow-hidden backdrop-blur-sm",
        "hover:border-electric-blue/50 hover:bg-white/10 transition-all duration-300",
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-vivid-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-electric-blue transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-gray-400 group-hover:text-electric-blue transition-colors duration-300" />
            <span className="text-xs text-gray-400 group-hover:text-electric-blue transition-colors duration-300">
              Hover or Tap
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {project.short}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-electric-blue/20 text-electric-blue rounded-full border border-electric-blue/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Live View Link */}
        <div className="flex items-center justify-between">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center space-x-2 text-sm text-electric-blue hover:text-vivid-lime transition-colors duration-300 group/link"
          >
            <span>Live View</span>
            <ExternalLink className="h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-200" />
          </a>
          
          {/* View Details hint */}
          <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
            Click for details
          </span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-vivid-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  )
}
