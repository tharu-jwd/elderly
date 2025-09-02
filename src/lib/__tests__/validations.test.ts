import { describe, it, expect } from 'vitest';
import {
  loginSchema,
  registerSchema,
  elderProfileSchema,
  caregiverProfileSchema,
} from '../validations';

describe('Validation Schemas', () => {
  describe('loginSchema', () => {
    it('should validate correct login data', () => {
      const validData = {
        email: 'user@example.com',
        password: 'Password123!',
      };

      expect(() => loginSchema.parse(validData)).not.toThrow();
    });

    it('should reject invalid email', () => {
      const invalidData = {
        email: 'invalid-email',
        password: 'Password123!',
      };

      expect(() => loginSchema.parse(invalidData)).toThrow();
    });

    it('should reject short password', () => {
      const invalidData = {
        email: 'user@example.com',
        password: 'short',
      };

      expect(() => loginSchema.parse(invalidData)).toThrow();
    });
  });

  describe('registerSchema', () => {
    it('should validate correct registration data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'Password123!',
        role: 'ELDER' as const,
      };

      expect(() => registerSchema.parse(validData)).not.toThrow();
    });

    it('should reject weak password', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'weakpassword',
        role: 'ELDER' as const,
      };

      expect(() => registerSchema.parse(invalidData)).toThrow();
    });

    it('should reject invalid role', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'Password123!',
        role: 'INVALID' as 'ELDER',
      };

      expect(() => registerSchema.parse(invalidData)).toThrow();
    });
  });

  describe('elderProfileSchema', () => {
    it('should validate correct elder profile data', () => {
      const validData = {
        age: 75,
        address: '123 Main St, City, State 12345',
        emergencyContact: 'Jane Doe - 555-1234',
        careNeeds: 'Daily medication assistance and meal preparation',
      };

      expect(() => elderProfileSchema.parse(validData)).not.toThrow();
    });

    it('should reject invalid age', () => {
      const invalidData = {
        age: 15,
        address: '123 Main St, City, State 12345',
        emergencyContact: 'Jane Doe - 555-1234',
        careNeeds: 'Daily medication assistance',
      };

      expect(() => elderProfileSchema.parse(invalidData)).toThrow();
    });
  });

  describe('caregiverProfileSchema', () => {
    it('should validate correct caregiver profile data', () => {
      const validData = {
        experience: 5,
        availability: 'Monday-Friday, 9AM-5PM',
        hourlyRate: 25.5,
      };

      expect(() => caregiverProfileSchema.parse(validData)).not.toThrow();
    });

    it('should reject negative experience', () => {
      const invalidData = {
        experience: -1,
        availability: 'Monday-Friday, 9AM-5PM',
      };

      expect(() => caregiverProfileSchema.parse(invalidData)).toThrow();
    });
  });
});
