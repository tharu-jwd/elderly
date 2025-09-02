import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number and special character'
    ),
  role: z.enum(['ELDER', 'CAREGIVER']),
});

export const elderProfileSchema = z.object({
  age: z.number().min(18).max(120),
  address: z.string().min(10, 'Please provide a complete address').max(500),
  emergencyContact: z.string().min(10, 'Please provide emergency contact details').max(200),
  medicalInfo: z.string().max(1000).optional(),
  careNeeds: z.string().min(10, 'Please describe care needs').max(1000),
});

export const caregiverProfileSchema = z.object({
  experience: z.number().min(0).max(50),
  certifications: z.string().max(1000).optional(),
  availability: z.string().min(10, 'Please describe your availability').max(500),
  hourlyRate: z.number().min(0).max(1000).optional(),
  bio: z.string().max(1000).optional(),
});

export const careRequestSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters').max(200),
  description: z.string().min(20, 'Description must be at least 20 characters').max(2000),
  urgency: z.enum(['LOW', 'MEDIUM', 'HIGH', 'EMERGENCY']),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ElderProfileInput = z.infer<typeof elderProfileSchema>;
export type CaregiverProfileInput = z.infer<typeof caregiverProfileSchema>;
export type CareRequestInput = z.infer<typeof careRequestSchema>;
