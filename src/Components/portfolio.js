import styled from "styled-components";
import { ywitter, yoonflix, cuptalk, todo } from "../img/images";
import { LeftTitleProject, RightTitleProject } from "./projects";

const PortfolioContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <LeftTitleProject
        gitSrc={"https://sungheeyoon.github.io/ywitter/#/"}
        title={"Ywiteer"}
        subtitle={"Toy project by cloning Twitter"}
        imgSrc={ywitter}
      />
      <RightTitleProject
        gitSrc={"https://sungheeyoon.github.io/yoonflix/#/"}
        title={"Yoonflix"}
        subtitle={
          "Provides movie and TV show information using The Movie Database API"
        }
        imgSrc={yoonflix}
      />
      <LeftTitleProject
        gitSrc={"https://sungheeyoon.github.io/Cuptalk-2021/"}
        title={"Cuptalk"}
        subtitle={"Cuptalk theme applied after KakaoTalk clone"}
        imgSrc={cuptalk}
      />
      <RightTitleProject
        gitSrc={"https://sungheeyoon.github.io/todo-list/"}
        title={"Todo-list"}
        subtitle={"Todo list using Vanilla Javascript"}
        imgSrc={todo}
      />
    </PortfolioContainer>
  );
};

export default Portfolio;
