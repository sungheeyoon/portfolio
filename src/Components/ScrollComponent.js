import { Link } from "react-scroll";
import { Nav } from "react-bootstrap";
function ScrollComponent({ name, id, src }) {
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={id}
        spy={true}
        smooth={true}
        offset={5}
        duration={500}
      >
        <Nav.Link href={src}>{name}</Nav.Link>
      </Link>
    </div>
  );
}

export default ScrollComponent;
