import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
import { Alert, ProgressBar } from "react-bootstrap";

const ResumeContainer = styled.div`
  margin: 130px 0;
`;
const ResumeTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ResumeBoxs = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;
const ResumeBox = styled.div`
  display: flex;
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeTitle>
        <h2>My Resume</h2>
        <p>this is heeyoon's Resume</p>
      </ResumeTitle>
      <ResumeBoxs>
        <ResumeBox>
          <Alert variant="success">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} className="search" />
              EDUCATION
            </h3>
          </Alert>
        </ResumeBox>
        <ResumeBox>
          <Alert variant="success">
            <h3>
              <FontAwesomeIcon icon={faStar} className="search" />
              MY SKILLS
            </h3>
          </Alert>
        </ResumeBox>
      </ResumeBoxs>
      <div style={{ width: "400px", height: "500px" }}>
        <ProgressBar variant="success" now={40} label="hello" />
        <ProgressBar variant="info" now={20} label="hello" />
        <ProgressBar variant="warning" now={60} label="hello" />
        <ProgressBar variant="danger" now={80} label="hello" />
      </div>
    </ResumeContainer>
  );
};

export default Resume;
