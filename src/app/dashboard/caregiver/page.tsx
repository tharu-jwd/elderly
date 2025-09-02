'use client';

import { useSession } from 'next-auth/react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CaregiverDashboard() {
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

    if (session.user.role !== 'CAREGIVER') {
      router.push('/dashboard/elder');
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

  if (!session || session.user.role !== 'CAREGIVER') {
    return null;
  }

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1>Caregiver Dashboard</h1>
          <p className="text-muted">Welcome, {session.user.name}</p>
          <Badge bg="warning" className="me-2">
            Verification Pending
          </Badge>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Available Care Requests</Card.Title>
              <Card.Text>Browse care requests from elders in your area.</Card.Text>
              <Button variant="primary">View Requests</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>My Matches</Card.Title>
              <Card.Text>View your current care matches and appointments.</Card.Text>
              <Button variant="outline-primary">View Matches</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Complete Profile</Card.Title>
              <Card.Text>
                Complete your profile and get verified to start receiving requests.
              </Card.Text>
              <Button variant="success">Complete Profile</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Earnings & Reports</Card.Title>
              <Card.Text>Track your earnings and view performance reports.</Card.Text>
              <Button variant="outline-success">View Reports</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
