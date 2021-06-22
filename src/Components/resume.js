import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
import { Alert, Carousel, ProgressBar } from "react-bootstrap";
import { useState } from "react";

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
  flex-direction: column;
  width: 400px;
`;

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div style={{ height: "200px", backgroundColor: "grey" }}></div>
        <Carousel.Caption>
          <h5>2016 - 2018</h5>
          <h5>Bachalor - Konkuk University</h5>
          <p>Computer Science Transfer</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ height: "200px", backgroundColor: "grey" }}></div>
        <Carousel.Caption>
          <h5>2012 - 2016</h5>
          <h5>Baekseok Arts University</h5>
          <p>Tourism Management</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
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
          <ControlledCarousel />
        </ResumeBox>
        <ResumeBox>
          <div>
            <Alert variant="success">
              <h3>
                <FontAwesomeIcon icon={faStar} className="search" />
                MY SKILLS
              </h3>
            </Alert>
          </div>
          <div style={{ width: "400px" }}>
            <ProgressBar
              variant="success"
              now={40}
              label="React"
              style={{ height: "50px" }}
            />
            <ProgressBar
              variant="info"
              now={20}
              label="JavaScript"
              style={{ height: "50px" }}
            />
            <ProgressBar
              variant="warning"
              now={60}
              label="CSS3"
              style={{ height: "50px" }}
            />
            <ProgressBar
              variant="danger"
              now={80}
              label="HTML5"
              style={{ height: "50px" }}
            />
          </div>
        </ResumeBox>
      </ResumeBoxs>
    </ResumeContainer>
  );
};

export default Resume;
