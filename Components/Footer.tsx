import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="clean-footer">
      <Container>

        <Row className="footer-top">
          
          {/* Brand */}
          <Col md={4} sm={12}>
            <h5 className="footer-brand">Student Management System</h5>
            <p className="footer-text">
              Manage student records easily and efficiently.
            </p>
          </Col>

          {/* Navigation */}
          <Col md={4} sm={12}>
            <h6 className="footer-title">Navigation</h6>
            <ul className="footer-links">
              <li><a href="/add-student">Add Student</a></li>
              <li><a href="/students">Students</a></li>
            </ul>
          </Col>

          {/* Help */}
          <Col md={4} sm={12}>
            <h6 className="footer-title">Help</h6>
            <ul className="footer-links">
              <li><a href="#">Support</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </Col>

        </Row>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Student Manager. All rights reserved.</span>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;