import { Navbar, Container, Nav } from "react-bootstrap";
import ScrollComponent from "./ScrollComponent";
const NavigtionBar = () => {
  return (
    <>
      <Navbar fixed="top" variant="dark">
        <Container>
          <Navbar.Brand>Heeyoon</Navbar.Brand>
          <Nav className="me-auto">
            <ScrollComponent name="HOME" id="home" />
            <ScrollComponent name="ABOUT" id="about" />
            <ScrollComponent
              name="PORTFOLIO"
              id="portfolio"
              href="#portfolio"
            />
            <ScrollComponent name="CONTACT" id="contact" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigtionBar;
