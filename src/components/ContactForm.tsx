'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { cn } from '@/lib/utils'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field
    timestamp: Date.now().toString(), // Time trap
  })
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error && typeof error === 'object' && 'errors' in error) {
        const newErrors: Partial<ContactFormData> = {}
        const validationError = error as { errors: Array<{ path: string[], message: string }> }
        validationError.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check honeypot field
    if (formData.website) {
      setStatus('error')
      setStatusMessage('Invalid submission detected.')
      return
    }

    // Check time trap (prevent rapid submissions)
    const now = Date.now()
    const submissionTime = formData.timestamp ? parseInt(formData.timestamp) : 0
    if (now - submissionTime < 5000) { // 5 seconds minimum
      setStatus('error')
      setStatusMessage('Please wait a moment before submitting again.')
      return
    }

    if (!validateForm()) {
      return
    }

    setStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        setStatusMessage(result.message)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          website: '',
          timestamp: Date.now().toString(),
        })
      } else {
        setStatus('error')
        setStatusMessage(result.message || 'Failed to send message. Please try again.')
      }
    } catch {
      setStatus('error')
      setStatusMessage('Network error. Please check your connection and try again.')
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-vivid-lime" />
      case 'error':
        return <AlertCircle className="h-5 w-5 text-soft-rose" />
      case 'loading':
        return <Loader2 className="h-5 w-5 text-electric-blue animate-spin" />
      default:
        return null
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'border-vivid-lime/50 bg-vivid-lime/10'
      case 'error':
        return 'border-soft-rose/50 bg-soft-rose/10'
      default:
        return 'border-white/10 bg-white/5'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <div style={{ display: 'none' }}>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      {/* Timestamp field - hidden time trap */}
      <div style={{ display: 'none' }}>
        <input
          type="text"
          name="timestamp"
          value={formData.timestamp}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={cn(
            "w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent",
            "transition-all duration-200",
            errors.name ? "border-soft-rose" : "border-white/20"
          )}
          placeholder="Your full name"
          required
        />
        {errors.name && (
          <p className="mt-1 text-sm text-soft-rose">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={cn(
            "w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent",
            "transition-all duration-200",
            errors.email ? "border-soft-rose" : "border-white/20"
          )}
          placeholder="your.email@example.com"
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-soft-rose">{errors.email}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={cn(
            "w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent",
            "transition-all duration-200",
            errors.subject ? "border-soft-rose" : "border-white/20"
          )}
          placeholder="What's this about?"
          required
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-soft-rose">{errors.subject}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className={cn(
            "w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent",
            "transition-all duration-200 resize-none",
            errors.message ? "border-soft-rose" : "border-white/20"
          )}
          placeholder="Tell me about your project or question..."
          required
        />
        {errors.message && (
          <p className="mt-1 text-sm text-soft-rose">{errors.message}</p>
        )}
      </div>

      {/* Status Message */}
      {(status === 'success' || status === 'error') && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "flex items-center space-x-3 p-4 rounded-lg border",
            getStatusColor()
          )}
        >
          {getStatusIcon()}
          <p className={cn(
            "text-sm font-medium",
            status === 'success' ? "text-vivid-lime" : "text-soft-rose"
          )}>
            {statusMessage}
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-electric-blue to-vivid-lime",
          "text-noir font-semibold rounded-lg transition-all duration-300",
          "hover:from-vivid-lime hover:to-electric-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        )}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-400 text-center">
        Your information is secure and will only be used to respond to your inquiry.
      </p>
    </form>
  )
}
