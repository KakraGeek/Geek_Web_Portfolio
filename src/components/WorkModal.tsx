'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Tag } from 'lucide-react'
import { Project } from '@/data/projects'

interface WorkModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function WorkModal({ project, isOpen, onClose }: WorkModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-noir border border-white/20 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 id="modal-title" className="text-2xl font-bold text-white">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">About This Project</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.long || project.short}
                  </p>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Tag className="h-5 w-5 mr-2 text-electric-blue" />
                      Technologies & Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-electric-blue/20 text-electric-blue rounded-full border border-electric-blue/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Project Type</h4>
                    <p className="text-white font-medium">
                      {project.tags?.[0] || 'Web Application'}
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Status</h4>
                    <p className="text-vivid-lime font-medium">Live & Active</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-electric-blue to-vivid-lime text-noir font-semibold rounded-lg hover:from-vivid-lime hover:to-electric-blue transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Project
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
