import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema, apiResponseSchema } from '@/lib/validations'
import { contactRateLimiter } from '@/lib/rate-limit'
import sgMail from '@sendgrid/mail'

// SendGrid configuration
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limit
    if (!contactRateLimiter.isAllowed(clientIP)) {
      const remainingTime = contactRateLimiter.getRemainingTime(clientIP)
      return NextResponse.json(
        apiResponseSchema.parse({
          success: false,
          message: `Rate limit exceeded. Please try again in ${Math.ceil(remainingTime / 60000)} minutes.`,
        }),
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    
    try {
      contactFormSchema.parse(body)
    } catch (validationError) {
      const errors = validationError && typeof validationError === 'object' && 'errors' in validationError
        ? (validationError as { errors: Array<{ message: string }> }).errors.map(err => err.message)
        : []
      
      return NextResponse.json(
        apiResponseSchema.parse({
          success: false,
          message: 'Invalid form data. Please check your inputs.',
          errors,
        }),
        { status: 400 }
      )
    }

    const { name, email, subject, message } = body

    // Email content for SendGrid
    const msg = {
      to: ['desmond.asiedu@gmail.com', 'thegeektoolbox@gmail.com'],
      from: process.env.SENDGRID_FROM_EMAIL || 'desmond.asiedu@gmail.com', // Verified sender
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00D4FF; border-bottom: 2px solid #39FF14; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #00D4FF;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>From:</strong> The Geek Toolbox Portfolio Contact Form</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
- Subject: ${subject}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
From: The Geek Toolbox Portfolio Contact Form
      `,
    }

    // Send email using SendGrid
    await sgMail.send(msg)

    // Return success response
    return NextResponse.json(
      apiResponseSchema.parse({
        success: true,
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
      }),
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      apiResponseSchema.parse({
        success: false,
        message: 'An error occurred while sending your message. Please try again later.',
      }),
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    apiResponseSchema.parse({
      success: false,
      message: 'Method not allowed. Please use POST to submit the contact form.',
    }),
    { status: 405 }
  )
}
