import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";

function UserNavbar() {
  return (
    <div>
      {/* Üst hissə */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "500" }}>
          We believe we help people for happier lives
        </span>
        <div style={{ display: "flex", alignItems: "center", fontWeight: "500" }}>
          <span style={{ marginRight: "8px" }}>+880 123 12 658 439</span>
          <div
            style={{
              backgroundColor: "#ff3366",
              padding: "10px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaPhone style={{ color: "#fff", fontSize: "18px" }} />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="bg-white border-bottom">
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            <span
              style={{
                color: "#ff3366",
                fontSize: "30px",
                fontWeight: "bold",
                marginRight: "5px",
              }}
            >
              m
            </span>
            IMMIGRATION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" style={{ fontWeight: "600", margin: "0 10px" }}>
                HOME
              </Nav.Link>
              <Nav.Link href="#about" style={{ fontWeight: "600", margin: "0 10px" }}>
                ABOUT
              </Nav.Link>
              <Nav.Link
                href="#immigration"
                style={{ fontWeight: "600", margin: "0 10px" }}
              >
                IMMIGRATION
              </Nav.Link>
              <Nav.Link href="#course" style={{ fontWeight: "600", margin: "0 10px" }}>
                COURSE
              </Nav.Link>
              <Nav.Link href="#country" style={{ fontWeight: "600", margin: "0 10px" }}>
                COUNTRY
              </Nav.Link>
              <Nav.Link href="#blog" style={{ fontWeight: "600", margin: "0 10px" }}>
                BLOG
              </Nav.Link>
              <Nav.Link href="#contact" style={{ fontWeight: "600", margin: "0 10px" }}>
                CONTACT
              </Nav.Link>
              <Nav.Link href="#elements" style={{ fontWeight: "600", margin: "0 10px" }}>
                ELEMENTS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default UserNavbar;
