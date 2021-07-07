import styled from "styled-components";
import { Button } from "react-bootstrap";

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
      <HomeContainer id="home">
        <HeaderTitle>
          Hi There! I'm <Highlight>Jack</Highlight>. <br />
          I'm a Web Developer.
        </HeaderTitle>

        <Button variant="outline-light" size="lg">
          View my work
        </Button>
      </HomeContainer>
    </>
  );
};
export default Hello;
