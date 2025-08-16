'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Us - The Geek Toolbox'
  }, [])

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
              <MessageCircle className="h-10 w-10 text-noir" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don&apos;t let bottlenecks slow you down. Let&apos;s discuss your project and find the right solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 px-6 bg-noir">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  I&apos;m here to help. Let&apos;s discuss how we can bring your digital vision to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a 
                      href="mailto:desmond.asiedu@gmail.com" 
                      className="text-electric-blue hover:text-vivid-lime transition-colors duration-200"
                    >
                      desmond.asiedu@gmail.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">I typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-vivid-lime/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-vivid-lime" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone & WhatsApp</h3>
                    <a 
                      href="tel:+2330244299095" 
                      className="text-vivid-lime hover:text-electric-blue transition-colors duration-200"
                    >
                      +233(0)24.429.9095
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Available for urgent discussions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sun-amber/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-sun-amber" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone Only</h3>
                    <a 
                      href="tel:+2330202113633" 
                      className="text-sun-amber hover:text-electric-blue transition-colors duration-200"
                    >
                      +233(0)20.211.3633
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Call for detailed discussions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sun-amber/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-sun-amber" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-sun-amber">#222, Nii Okaiman West Main Rd,<br />New Achimota.<br />Accra, Ghana</p>
                    <p className="text-sm text-gray-400 mt-1">Serving clients globally with local expertise</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-rose/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-soft-rose" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                    <p className="text-soft-rose">Within 24 hours</p>
                    <p className="text-sm text-gray-400 mt-1">Quick turnaround for urgent projects</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-r from-electric-blue/10 to-vivid-lime/10 border border-electric-blue/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Why Choose The Geek Toolbox?</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Rapid prototyping and delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-vivid-lime rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>AI-driven development approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sun-amber rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Continuous feedback and iteration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-soft-rose rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Local expertise with global standards</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Common questions about working with The Geek Toolbox
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">What&apos;s your typical project timeline?</h3>
              <p className="text-gray-300 text-sm">
                Most projects range from 2-8 weeks depending on complexity. I focus on rapid delivery without compromising quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Do you work with international clients?</h3>
              <p className="text-gray-300 text-sm">
                Absolutely! I work with clients globally and have experience with various time zones and communication styles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">What technologies do you specialize in?</h3>
              <p className="text-gray-300 text-sm">
                Modern web technologies including React, Next.js, TypeScript, and cloud platforms. I choose the best tech for each project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">How do you handle project communication?</h3>
              <p className="text-gray-300 text-sm">
                Regular updates, clear milestones, and open communication channels. I believe in transparency throughout the process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
