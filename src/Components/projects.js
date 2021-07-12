import styled from "styled-components";

const LProject = styled.div`
  height: 512px;
  width: 100wh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  &:hover {
    background-color: black;
    opacity: 0.9;
  }
  transition: all 1s;
`;
const RProject = styled.div`
  height: 512px;
  width: 100wh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  &:hover {
    background-color: black;
    opacity: 0.9;
  }
  transition: all 1s;
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0 5%;
`;

export const LeftTitleProject = ({ gitSrc, title, subtitle, imgSrc }) => {
  return (
    <a href={gitSrc} target="_blank" rel="noreferrer">
      <LProject>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <ProjectTitle>
            <h2 style={{ color: "white" }}>{title}</h2>
            <h3>{subtitle}</h3>
          </ProjectTitle>

          <img style={{ zIndex: "-1", height: "512px" }} src={imgSrc} alt="" />
        </div>
      </LProject>
    </a>
  );
};
export const RightTitleProject = ({ gitSrc, title, subtitle, imgSrc }) => {
  return (
    <a href={gitSrc} target="_blank" rel="noreferrer">
      <RProject>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img style={{ zIndex: "-1", height: "512px" }} src={imgSrc} alt="" />
          <ProjectTitle>
            <h2 style={{ color: "white" }}>{title}</h2>
            <h3>{subtitle}</h3>
          </ProjectTitle>
        </div>
      </RProject>
    </a>
  );
};
