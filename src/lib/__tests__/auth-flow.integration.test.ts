import { describe, it, expect } from 'vitest';
import { registerSchema, loginSchema } from '@/lib/validations';

describe('Authentication Flow Integration', () => {
  describe('Registration Schema Validation', () => {
    it('should validate correct registration data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'SecurePass123!',
        role: 'ELDER' as const,
      };

      const result = registerSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject invalid email formats', () => {
      const invalidEmails = [
        'notanemail',
        '@example.com',
        'user@',
        'user@.com',
        'user..name@example.com',
      ];

      invalidEmails.forEach(email => {
        const result = registerSchema.safeParse({
          name: 'Test User',
          email,
          password: 'ValidPass123!',
          role: 'ELDER',
        });

        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0]?.message).toContain('Invalid email address');
        }
      });
    });

    it('should enforce password complexity requirements', () => {
      const invalidPasswords = [
        'short', // Too short
        'nouppercase123!', // No uppercase
        'NOLOWERCASE123!', // No lowercase
        'NoNumbers!', // No numbers
        'NoSpecialChar123', // No special characters
      ];

      invalidPasswords.forEach(password => {
        const result = registerSchema.safeParse({
          name: 'Test User',
          email: 'test@example.com',
          password,
          role: 'ELDER',
        });

        expect(result.success).toBe(false);
      });
    });

    it('should validate both ELDER and CAREGIVER roles', () => {
      const roles = ['ELDER', 'CAREGIVER'] as const;

      roles.forEach(role => {
        const result = registerSchema.safeParse({
          name: 'Test User',
          email: 'test@example.com',
          password: 'ValidPass123!',
          role,
        });

        expect(result.success).toBe(true);
      });
    });

    it('should reject invalid roles', () => {
      const result = registerSchema.safeParse({
        name: 'Test User',
        email: 'test@example.com',
        password: 'ValidPass123!',
        role: 'INVALID_ROLE',
      });

      expect(result.success).toBe(false);
    });

    it('should enforce name length requirements', () => {
      // Too short name
      const shortNameResult = registerSchema.safeParse({
        name: 'A',
        email: 'test@example.com',
        password: 'ValidPass123!',
        role: 'ELDER',
      });

      expect(shortNameResult.success).toBe(false);

      // Valid name
      const validNameResult = registerSchema.safeParse({
        name: 'John Doe',
        email: 'test@example.com',
        password: 'ValidPass123!',
        role: 'ELDER',
      });

      expect(validNameResult.success).toBe(true);
    });
  });

  describe('Login Schema Validation', () => {
    it('should validate correct login data', () => {
      const validData = {
        email: 'user@example.com',
        password: 'password123',
      };

      const result = loginSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid email in login', () => {
      const result = loginSchema.safeParse({
        email: 'invalid-email',
        password: 'password123',
      });

      expect(result.success).toBe(false);
    });

    it('should enforce minimum password length for login', () => {
      const result = loginSchema.safeParse({
        email: 'user@example.com',
        password: 'short',
      });

      expect(result.success).toBe(false);
    });

    it('should require both email and password', () => {
      // Missing email
      const noEmailResult = loginSchema.safeParse({
        password: 'password123',
      });

      expect(noEmailResult.success).toBe(false);

      // Missing password
      const noPasswordResult = loginSchema.safeParse({
        email: 'user@example.com',
      });

      expect(noPasswordResult.success).toBe(false);

      // Empty values
      const emptyEmailResult = loginSchema.safeParse({
        email: '',
        password: 'password123',
      });

      expect(emptyEmailResult.success).toBe(false);
    });
  });

  describe('Password Security Integration', () => {
    it('should accept various valid password formats', () => {
      const validPasswords = [
        'Password123!',
        'MySecure&Pass1',
        'Tr0ub4dor&3',
        'C0mplex*Pass',
        'Str0ng$Password',
      ];

      validPasswords.forEach(password => {
        const result = registerSchema.safeParse({
          name: 'Test User',
          email: 'test@example.com',
          password,
          role: 'ELDER',
        });

        expect(result.success).toBe(true);
      });
    });

    it('should reject common weak patterns', () => {
      const weakPasswords = [
        'password', // No complexity
        '12345678', // Only numbers
        'ABCDEFGH', // Only uppercase
        'abcdefgh', // Only lowercase
        'Password123', // No special char
        'Password!', // No number
      ];

      weakPasswords.forEach(password => {
        const result = registerSchema.safeParse({
          name: 'Test User',
          email: 'test@example.com',
          password,
          role: 'ELDER',
        });

        expect(result.success).toBe(false);
      });
    });
  });
});
