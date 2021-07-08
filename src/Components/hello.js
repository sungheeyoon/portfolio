import styled from "styled-components";
import { Button } from "react-bootstrap";
import ScrollComponent from "./ScrollComponent";

const HomeContainer = styled.div`
  background-color: #252934;
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
`;
const HeaderTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 40px;
`;
const Hello = () => {
  return (
    <>
      <HomeContainer id="home">
        <HeaderTitle>
          Hi There! <Highlight>I'm Jack.</Highlight> <br />
          I'm a Web Developer.
        </HeaderTitle>

        <button
          type="button"
          style={{
            decoration: "none",
            backgroundColor: "inherit",
            color: "#94BFF1",
            outline: "0",
            borderTop: "0",
            borderRight: "0",
            borderLeft: "0",
            borderBottomColor: "inherit",
            fontSize: "20px",
          }}
        >
          <ScrollComponent
            style={{ textDecoration: "none", color: "#94BFF1" }}
            name="View My Project"
            id="portfolio"
            href="#portfolio"
          />
        </button>
      </HomeContainer>
    </>
  );
};
export default Hello;
