import styled from "styled-components";
import { Link } from "react-scroll";
import { Nav } from "react-bootstrap";
const HomeContainer = styled.div`
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Highlight = styled.span`
  color: #ffa000;
  font-family: "Krona One", sans-serif;
`;
const HeaderTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 40px;
`;
const Hello = () => {
  return (
    <>
      <HomeContainer id="home">
        <div style={{ textAlign: "left" }}>
          <HeaderTitle>
            Hi There! <Highlight>I'm Jack.</Highlight> <br />
          </HeaderTitle>
          <HeaderTitle>I'm a Web Developer.</HeaderTitle>
        </div>

        <div style={{ fontSize: "25px", borderBottom: "1px solid #94BFF1" }}>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
          >
            <Nav.Link href="#portfolio">View My Project</Nav.Link>
          </Link>
        </div>
      </HomeContainer>
    </>
  );
};
export default Hello;
