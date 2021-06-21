import { Navbar, Container, Nav } from "react-bootstrap";
const NavigtionBar = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Heeyoon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">RESUME</Nav.Link>
            <Nav.Link href="#pricing">PORTFOLIO</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigtionBar;
