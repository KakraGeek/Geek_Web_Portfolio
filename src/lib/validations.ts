import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  // Honeypot field to catch bots
  website: z.string().optional(),
  // Time trap to prevent rapid submissions
  timestamp: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// API response schema
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  errors: z.array(z.string()).optional(),
});

export type ApiResponse = z.infer<typeof apiResponseSchema>;
