import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="fs-3">Habit Hub</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ps-5">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/allHabitsPage">
              <Nav.Link>All Habits</Nav.Link>
            </Link>
            <Link passHref href="/createHabitPage">
              <Nav.Link>Create a Habit</Nav.Link>
            </Link>
            <Link passHref href="/myHabitsPage">
              <Nav.Link>My Habits</Nav.Link>
            </Link>
            <Link passHref href="/userProfile">
              <Nav.Link>User Profile</Nav.Link>
            </Link>
            <Button className="me-5" variant="dark fw-bold ps-3" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
