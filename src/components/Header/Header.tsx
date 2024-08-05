import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GoSearch } from "react-icons/go";
interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s"
              alt="Brand Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
              id='logo'
            />
          </Navbar.Brand>
          <div className="d-flex justify-content-center flex-grow-1 dark">
            <Nav>
              <Nav.Link href="#Research">Research</Nav.Link>
              <Nav.Link href="#Products">Products</Nav.Link>
              <Nav.Link href="#Safety">Safety</Nav.Link>
              <Nav.Link href="#Company">Company</Nav.Link>
            </Nav>
          </div>
          <div className="ms-auto">
            <GoSearch style={{ fontSize: '1.5rem' }} />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
