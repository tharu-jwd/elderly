'use client';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export function AppNavbar() {
  const { data: session } = useSession();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">
          ElderCare Connect
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {session && (
              <>
                <Nav.Link as={Link} href={`/dashboard/${session.user.role.toLowerCase()}`}>
                  Dashboard
                </Nav.Link>
                {session.user.role === 'ELDER' && (
                  <Nav.Link as={Link} href="/caregivers">
                    Find Caregivers
                  </Nav.Link>
                )}
                {session.user.role === 'CAREGIVER' && (
                  <Nav.Link as={Link} href="/care-requests">
                    Care Requests
                  </Nav.Link>
                )}
              </>
            )}
          </Nav>

          <Nav>
            {session ? (
              <NavDropdown title={session.user.name || 'Account'} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} href="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/settings">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => signOut()}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} href="/auth/signin">
                  Sign In
                </Nav.Link>
                <Nav.Link as={Link} href="/auth/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
