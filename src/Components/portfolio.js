import { Container } from "react-bootstrap";
import styled from "styled-components";
import PortfolioCard from "./portfolioCard";
const Cards = styled.div`
  display: flex;
  justify-content: center;
`;

const Portfolio = () => {
  return (
    <>
      <Container style={{ padding: "70px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>Portfolio</h1>
          <p>See My Works - Lorem ipsum dolor</p>
        </div>
        <div>
          <Cards>
            <PortfolioCard
              img="holder.js/100px180"
              src="https://sungheeyoon.github.io/ywitter/#/"
              title="Ywitter"
              text="Toy project by cloning Twitter"
            />
            <PortfolioCard
              img="holder.js/100px180"
              src="https://sungheeyoon.github.io/yoonflix/#/"
              title="Yoonflix"
              text="Provides movie and TV show information using The Movie
              Database API"
            />
          </Cards>
          <Cards>
            <PortfolioCard
              img="holder.js/100px180"
              src="https://sungheeyoon.github.io/todo-list/"
              title="Todo-list"
              text="Todo list using Vanilla Javascript"
            />
            <PortfolioCard
              img="holder.js/100px180"
              src="https://sungheeyoon.github.io/Cuptalk-2021/"
              title="Cuptalk"
              text="Cuptalk theme applied after KakaoTalk clone"
            />
          </Cards>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
