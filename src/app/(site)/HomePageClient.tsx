'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedCTA } from '@/components/AnimatedCTA'
import { AccordionBlock, portfolioAccordionItems } from '@/components/AccordionBlock'
import { WorkCard } from '@/components/WorkCard'
import { WorkModal } from '@/components/WorkModal'
import { projects } from '@/data/projects'
import { Project } from '@/data/projects'

export function HomePageClient() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-noir via-noir to-electric-blue/5 overflow-hidden">

        
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-12 left-8 sm:top-20 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 bg-electric-blue/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 right-8 sm:bottom-20 sm:right-20 w-32 h-32 sm:w-40 sm:h-40 bg-vivid-lime/10 rounded-full blur-xl"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto pt-16">
          {/* Main Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-6 leading-tight"
          >
            Custom Digital Tools &{' '}
            <span className="bg-gradient-to-r from-electric-blue to-vivid-lime bg-clip-text text-transparent">
              Web Development
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            For professionals, teams, and entrepreneurs seeking rapid, AI-driven delivery
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <AnimatedCTA 
              text="Start Your Project" 
              href="/contact" 
              variant="primary"
            />
            <AnimatedCTA 
              text="View My Work" 
              href="#work-samples" 
              variant="secondary"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-electric-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Design Philosophy & How I Work Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-noir to-noir/95">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Approach to Digital Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understanding your vision and delivering results through proven methodologies
            </p>
          </motion.div>

          <AccordionBlock items={portfolioAccordionItems} />
        </div>
      </section>

      {/* Work Samples Section */}
      <section id="work-samples" className="py-20 px-6 bg-noir">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work Samples
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my recent projects and see how I bring ideas to life
            </p>
          </motion.div>

          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <WorkCard
                  project={project}
                  onClick={() => openProjectModal(project)}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <AnimatedCTA 
              text="Ready to Start Your Project?" 
              href="/contact" 
              variant="primary"
            />
          </motion.div>
        </div>
      </section>

      {/* Work Modal */}
      <WorkModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  )
}
