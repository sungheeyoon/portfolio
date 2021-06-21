import styled from "styled-components";
import { Button } from "react-bootstrap";

const IntroduceContainer = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 1.5em;
`;
const HomeContainer = styled.div`
  margin: 130px 0;
`;
const Home = () => {
  return (
    <>
      <HomeContainer>
        <h2>
          Hi There! <br />
          I'm Web Developer
        </h2>
        <IntroduceContainer>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever
          </p>
        </IntroduceContainer>
        <Button variant="secondary">Download Resume</Button>
      </HomeContainer>
    </>
  );
};
export default Home;
