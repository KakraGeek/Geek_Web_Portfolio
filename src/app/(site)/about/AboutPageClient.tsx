'use client'

import { motion } from 'framer-motion'
import { AnimatedCTA } from '@/components/AnimatedCTA'
import { User, Target, MapPin, Heart } from 'lucide-react'

export function AboutPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-noir via-noir to-electric-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-electric-blue to-vivid-lime rounded-full mb-6">
              <User className="h-10 w-10 text-noir" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My name is Desmond and I am passionate about creating digital solutions that make a difference
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-20 px-6 bg-noir">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center">
              <MapPin className="h-8 w-8 mr-3 text-electric-blue" />
              My Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to reality, every step has shaped my approach to digital innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                My journey in web development and digital tools began with a simple curiosity about how technology can solve real-world problems. Growing up in Ghana, I witnessed firsthand the transformative power of digital solutions in emerging markets.
              </p>
              
              <p>
                Through years of hands-on experience, I&apos;ve developed a deep understanding of what makes digital products successful: they must be intuitive, efficient, and genuinely useful to their users. This philosophy drives every project I undertake.
              </p>
              
              <p>
                I&apos;ve worked with diverse clients across different industries, from startups to established businesses, each project teaching me something new about user needs, business requirements, and technical implementation.
              </p>
              
              <p>
                Today, I&apos;m proud to lead <span className="text-electric-blue font-semibold">The Geek Toolbox</span>, where we combine technical expertise with creative problem-solving to deliver solutions that exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-noir to-noir/95">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 mr-3 text-vivid-lime" />
              My Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Empowering businesses and individuals through innovative digital solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission Statement */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Heart className="h-6 w-6 mr-3 text-soft-rose" />
                Mission Statement
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To create digital solutions that not only meet technical requirements but also deliver genuine value to users and businesses. I believe in building tools that people actually want to use and that help organizations achieve their goals more efficiently.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Empathy:</strong> Understanding user needs and business challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-vivid-lime rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Clarity:</strong> Creating intuitive and straightforward solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sun-amber rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Consistency:</strong> Maintaining quality across all deliverables</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-soft-rose rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Innovation:</strong> Embracing new technologies and approaches</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-electric-blue/10 to-vivid-lime/10 border border-electric-blue/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">What I Do</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold text-electric-blue mb-2">Web Development</h4>
                <p className="text-gray-300 text-sm">Custom websites and web applications built with modern technologies</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-vivid-lime mb-2">Digital Tools</h4>
                <p className="text-gray-300 text-sm">Specialized software solutions to streamline business processes</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-sun-amber mb-2">Consultation</h4>
                <p className="text-gray-300 text-sm">Strategic guidance for digital transformation and technology decisions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-noir">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can bring your digital vision to life with innovative solutions that drive results.
            </p>
            <AnimatedCTA 
              text="Start a Conversation" 
              href="/contact" 
              variant="primary"
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}
