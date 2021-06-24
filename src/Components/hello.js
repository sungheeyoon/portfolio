import styled from "styled-components";
import { Button } from "react-bootstrap";
import GlobalStyle from "../styles/GlobalStyles";

const IntroduceContainer = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 1.5em;
`;
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
  color: #e31b6d;
`;
const HeaderTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 40px;
`;
const Hello = () => {
  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <HeaderTitle>
          Hi There! I'm <Highlight>Jack</Highlight>. <br />
          I'm Web Developer.
        </HeaderTitle>

        <Button variant="outline-light" size="lg">
          View my work
        </Button>
      </HomeContainer>
    </>
  );
};
export default Hello;
