'use client';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 mb-3">Elderly</h1>
          <p className="lead">Connecting elderly individuals with trusted, verified caregivers</p>
        </Col>
      </Row>

      {!session ? (
        <Row className="justify-content-center">
          <Col md={8}>
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>For Elders</Card.Title>
                    <Card.Text className="flex-grow-1">
                      Find trusted caregivers who can provide personalized care tailored to your
                      specific needs and preferences.
                    </Card.Text>
                    <Link href="/auth/signup?role=elder" passHref>
                      <Button variant="primary" size="lg" className="w-100">
                        Get Care
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>For Caregivers</Card.Title>
                    <Card.Text className="flex-grow-1">
                      Join our platform to connect with elderly individuals who need your
                      compassionate care and expertise.
                    </Card.Text>
                    <Link href="/auth/signup?role=caregiver" passHref>
                      <Button variant="success" size="lg" className="w-100">
                        Provide Care
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="text-center">
                <p>
                  Already have an account? <Link href="/auth/signin">Sign in here</Link>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2>Welcome back, {session.user?.name}!</h2>
            <p className="mb-4">Role: {session.user?.role}</p>
            {session.user?.role === 'ELDER' ? (
              <Link href="/dashboard/elder" passHref>
                <Button variant="primary" size="lg">
                  Go to Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard/caregiver" passHref>
                <Button variant="primary" size="lg">
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </Col>
        </Row>
      )}

      <Row className="mt-5">
        <Col>
          <h3 className="text-center mb-4">Why Choose Elderly?</h3>
          <Row>
            <Col md={4} className="text-center mb-3">
              <h5>🔒 Secure & Private</h5>
              <p>Enterprise-grade security protecting your sensitive information</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h5>✅ Verified Caregivers</h5>
              <p>All caregivers undergo thorough background checks and verification</p>
            </Col>
            <Col md={4} className="text-center mb-3">
              <h5>🤝 Personalized Matching</h5>
              <p>Smart matching system based on needs, location, and preferences</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
