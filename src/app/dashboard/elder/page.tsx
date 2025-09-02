'use client';

import { useSession } from 'next-auth/react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ElderDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (!session) {
      router.push('/auth/signin');
      return;
    }

    if (session.user.role !== 'ELDER') {
      router.push('/dashboard/caregiver');
      return;
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  if (!session || session.user.role !== 'ELDER') {
    return null;
  }

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1>Elder Dashboard</h1>
          <p className="text-muted">Welcome, {session.user.name}</p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Find Caregivers</Card.Title>
              <Card.Text>Browse and connect with verified caregivers in your area.</Card.Text>
              <Button variant="primary">Browse Caregivers</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>My Care Requests</Card.Title>
              <Card.Text>View and manage your care requests and appointments.</Card.Text>
              <Button variant="outline-primary">View Requests</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Profile Setup</Card.Title>
              <Card.Text>Complete your profile to get better caregiver matches.</Card.Text>
              <Button variant="success">Complete Profile</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Emergency Contacts</Card.Title>
              <Card.Text>Manage your emergency contacts and medical information.</Card.Text>
              <Button variant="outline-success">Manage Contacts</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
