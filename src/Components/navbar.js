import { Navbar, Container, Nav } from "react-bootstrap";
import ScrollComponent from "./ScrollComponent";
const NavigtionBar = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Heeyoon</Navbar.Brand>
          <Nav className="me-auto">
            <ScrollComponent name="HOME" id="home" href="#home" />
            <ScrollComponent name="ABOUT" id="about" href="#about" />
            <ScrollComponent
              name="PORTFOLIO"
              id="portfolio"
              href="#portfolio"
            />
            <ScrollComponent name="CONTACT" id="contact" href="#contact" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigtionBar;
