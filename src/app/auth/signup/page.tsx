'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Link from 'next/link';
import { registerSchema, type RegisterInput } from '@/lib/validations';

function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState<RegisterInput>({
    name: '',
    email: '',
    password: '',
    role: (searchParams.get('role') as 'ELDER' | 'CAREGIVER') || 'ELDER',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const validatedData = registerSchema.parse(formData);

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      setSuccess('Account created successfully! You can now sign in.');
      setTimeout(() => {
        router.push('/auth/signin');
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Please check your input and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card>
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2>Sign Up</h2>
                <p className="text-muted">
                  Join ElderCare Connect as a{' '}
                  {formData.role === 'ELDER' ? 'Care Recipient' : 'Caregiver'}
                </p>
              </div>

              {error && (
                <Alert variant="danger" className="mb-3">
                  {error}
                </Alert>
              )}

              {success && (
                <Alert variant="success" className="mb-3">
                  {success}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    value={formData.role}
                    onChange={e =>
                      setFormData({ ...formData, role: e.target.value as 'ELDER' | 'CAREGIVER' })
                    }
                    disabled={isLoading}
                  >
                    <option value="ELDER">Care Recipient (Elder)</option>
                    <option value="CAREGIVER">Caregiver</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    disabled={isLoading}
                    autoComplete="name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    disabled={isLoading}
                    autoComplete="email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    required
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    disabled={isLoading}
                    autoComplete="new-password"
                  />
                  <Form.Text className="text-muted">
                    Must contain uppercase, lowercase, number and special character. Minimum 8
                    characters.
                  </Form.Text>
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-100 mb-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </Form>

              <div className="text-center">
                <p className="mb-0">
                  Already have an account? <Link href="/auth/signin">Sign in here</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default function SignUpPage() {
  return (
    <Suspense
      fallback={
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Container>
      }
    >
      <SignUpForm />
    </Suspense>
  );
}
